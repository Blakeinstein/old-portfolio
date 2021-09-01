import * as THREE from "three";
import { MeshLine, MeshLineMaterial } from "three.meshline";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import * as POSTPROCESSING from "postprocessing";
import anime from 'animejs/lib/anime.es.js';

import assets from './assets';
import Loader from './loader';

import { transitionEvent } from '../../js/utils';

THREE.Cache.enabled = true; // enable caching

class StarField {
	geometry: THREE.BufferGeometry
	material: THREE.Material
	mesh: THREE.Points
	shape: THREE.Vector3
	nebula: THREE.Mesh

	constructor(options: {
		count: number,
		size: number,
		color: THREE.Color | number,
		shape: THREE.Vector3,
		star: THREE.Texture,
		nebula: THREE.Texture[]
	}) {
		this.shape = options.shape;

		this.geometry = new THREE.BufferGeometry();
		this.material = new THREE.PointsMaterial({
			color: options.color,
			size: options.size,
			map: options.star,
			transparent: true,
		});

		let vertices = [];

		for (let i=0; i<options.count; i++){
			vertices.push(Math.random()*this.shape.x - this.shape.x/2);
			vertices.push(Math.random()*this.shape.y - this.shape.y/2);
			vertices.push(Math.random()*this.shape.z - this.shape.z/2);
		}
		this.geometry.setAttribute('position', new THREE.BufferAttribute( new Float32Array(vertices), 3 ))
		this.mesh = new THREE.Points(this.geometry, this.material);
		this.nebula = new THREE.Mesh(new THREE.BoxBufferGeometry(2000, 2000, 2000), options.nebula.map(tex => {
			return new THREE.MeshBasicMaterial({
				map: tex,
				side: THREE.BackSide,
				fog: false,
				depthWrite: false,
				color: 0x89abab
			});
		}));
	}
}

MeshLine.prototype.setGeometry = function(g: THREE.BufferGeometry) {
	// as the input geometry are mutated we store them
	// for later retreival when necessary (declaritive architectures)
	this._geometry = g;
	if (g instanceof THREE.BufferGeometry) {
		this.setPoints(g.getAttribute("position").array);
	} else {
		this.setPoints(g);
	}
}

class Sketch {
	scene: THREE.Scene;
	loader: Loader;
	renderer: THREE.WebGLRenderer;
	width: number;
	height: number;
	container: HTMLElement;
	camera: THREE.PerspectiveCamera;
	time: number;
	paused: boolean;
	imageAspect: number;
	material: THREE.ShaderMaterial;
	plane: THREE.Mesh;
	geometry: THREE.PlaneGeometry;
	controls: TrackballControls;
	light: THREE.PointLight;
	moon: THREE.Mesh;
	textures: {
		moon: {
			texture: THREE.Texture,
			normal: THREE.Texture
		},
		starfield: THREE.Texture[],
		starSprite: THREE.Texture
	};
	skybox: StarField;
	shapes: THREE.Mesh[];
	clock: THREE.Clock;
	composer: any;
	bloomEffect: any;

	constructor() {
		this.clock = new THREE.Clock();
		this.loader = new Loader(this.init.bind(this));
		let textureLoader = new THREE.TextureLoader(this.loader.manager);
		this.textures = {
			moon: {
				texture: textureLoader.load(assets.moon.texture),
				normal: textureLoader.load(assets.moon.normal),
			},
			starfield: assets.starfield.map(tex => {
				return textureLoader.load(tex);
			}),
			starSprite: textureLoader.load(assets.starSprite),
		}

		this.scene = new THREE.Scene();
		this.renderer = new THREE.WebGLRenderer({
			// alpha: true,
			antialias: true,
			preserveDrawingBuffer: true,
		});

		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(this.width, this.height);
		this.renderer.setClearColor(0x000000, 0);

		this.container = document.getElementById("hero-background");
		this.width = this.container.offsetWidth;
		this.height = this.container.offsetHeight;
		this.container.appendChild(this.renderer.domElement);

		this.camera = new THREE.PerspectiveCamera(
			50, // fov
			window.innerWidth / window.innerHeight,
			1, // near
			65536 // far
		);

		this.resetCam();
		this.controls = new TrackballControls(
			this.camera as THREE.Camera,
			this.renderer.domElement,
			);
		this.controls.maxDistance = 900;

        this.controls.rotateSpeed = 0.5;
        this.controls.dynamicDampingFactor = 0.5;
		this.time = 0;
		this.setupResize();
		this.resize();
	}

	setupResize() {
		window.addEventListener("resize", this.resize.bind(this));
	}

	resize() {
		this.width = this.container.offsetWidth;
		this.height = this.container.offsetHeight;

		this.renderer.setSize(this.width, this.height);
		this.camera.aspect = this.width / this.height;
		this.camera.updateProjectionMatrix();
	}

	resetCam() {
		this.camera.position.set(0, 0, 1200);
	}

	createMoon(): THREE.Mesh {
		let geo = new THREE.IcosahedronBufferGeometry(
			100, // radius
			50, // Segments
		);
		geo.rotateZ(-Math.PI / 6);
		this.textures.moon.texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
		let mat = new THREE.MeshStandardMaterial({
			color: 0xffffff,
			map: this.textures.moon.texture,
			normalMap: this.textures.moon.normal,
			shadowSide: THREE.BackSide,
			side: THREE.FrontSide,
		});

		let mesh = new THREE.Mesh(geo, mat);
		mesh.position.set(0, 0, 0);
		mesh.rotation.set(0, 180, 0);
		this.scene.add(mesh);
		return mesh;
	}

	createSkybox() {
		this.skybox = new StarField({
			count: 3000,
			size: 1.6,
			color: 0xffffff,
			shape: new THREE.Vector3(this.container.offsetWidth, this.container.offsetHeight, 600),
			star: this.textures.starSprite,
			nebula: this.textures.starfield
		});
		this.moon.add(this.skybox.mesh);
		this.moon.rotateZ(Math.PI / 6);
		this.moon.add(this.skybox.nebula);
	}

	createShapes(a: number[], b: number[], c: number[]) {
		let geom = new THREE.BufferGeometry();
		geom.setAttribute('position', new THREE.BufferAttribute( new Float32Array([...a, ...b, ...c, ...a]), 3));

		let line = new MeshLine();
		line.setGeometry(geom);
		let mesh = new THREE.Mesh(line.geometry, new MeshLineMaterial({
			color: 0xffffff,
			lineWidth: 2,
			resolution: new THREE.Vector2(this.width, this.height),
			transparent: true,
			depthWrite: false,
			opacity: 0.4,
			side: THREE.DoubleSide
		}));
		this.shapes.push(mesh);
		this.bloomEffect.selection.add(mesh);
		this.scene.add(mesh);
	}

	init(){
		this.composer = new POSTPROCESSING.EffectComposer(this.renderer);
		this.composer.addPass(new POSTPROCESSING.RenderPass(this.scene, this.camera));
		this.bloomEffect = new POSTPROCESSING.SelectiveBloomEffect(
			this.scene, this.camera, {
				blendFunction: POSTPROCESSING.BlendFunction.SCREEN,
				kernelSize: POSTPROCESSING.KernelSize.MEDIUM,
				luminanceThreshold: 0.1,
				luminanceSmoothing: 0.1,
				height: this.height
			}
		);
		const effectPass = new POSTPROCESSING.EffectPass(this.camera, this.bloomEffect);
		effectPass.renderToScreen = true;
		effectPass.enabled = true;
		this.composer.addPass(effectPass);
		this.light = new THREE.PointLight(0xffffff, 0.8, -100);
		this.light.position.set(-200, 200, 200);

		this.moon = this.createMoon();
		this.createSkybox();

		this.shapes = [];
		this.createShapes([-130, 80, 0], [170, 200, 0], [100, -80, 0]);
		this.createShapes([-150, 30, 0], [120, 145, 0], [40, -130, 0]);
		this.scene.add(this.light);

		let highlight = new THREE.AmbientLight(0x6fd6de, 0.01);
		this.scene.add(highlight);

		let temp = () => {
			this.loader.loadingContainer.removeEventListener(transitionEvent, temp);
			this.transitionIn();
		}

		this.loader.loadingContainer.addEventListener(transitionEvent, temp);

		this.render();
	}

	transitionIn(){
		anime({
			targets: this.camera.position,
			z: 500,
			delay: 1000,
			duration: 3000,
			easing: "easeOutExpo"
		});
	}

	render() {
		requestAnimationFrame(this.render.bind(this));
		let delta = this.clock.getDelta() * 2 * Math.PI / 560;
		this.moon.rotateY(-delta);
		this.controls.update();
		// this.renderer.render(this.scene, this.camera);
		this.composer.render();
	}
}

const sketch: Sketch = new Sketch();

let content = document.querySelector('#content');

document.querySelector('#toggleScene').addEventListener('click', function() {
	if (this.classList.contains('toggle-off')){
			content.classList.add('hide');
			sketch.container.style.zIndex = '1';
			this.classList.remove('toggle-off');
			this.classList.add('toggle-on');
	} else {
			content.classList.remove('hide');
			sketch.container.style.zIndex = '-1';  
			this.classList.remove('toggle-on');
			this.classList.add('toggle-off');
			sketch.resetCam();
	}
});