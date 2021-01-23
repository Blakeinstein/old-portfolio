import * as THREE from "three";
import { Texture } from "three";
import { TrackballControls } from "three-trackballcontrols-ts";

import assets from './assets';
import Loader from './loader';

class StarField {
	geometry: THREE.Geometry
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

		this.geometry = new THREE.Geometry();
		this.material = new THREE.PointsMaterial({
			color: options.color,
			size: options.size,
			map: options.star,
			transparent: true,
		});

		for (let i=0; i<options.count; i++){
			let star = new THREE.Vector3(
				Math.random()*this.shape.x - this.shape.x/2,
				Math.random()*this.shape.y - this.shape.y/2,
				Math.random()*this.shape.z - this.shape.z/2
			);
			this.geometry.vertices.push(star);
		}
		this.mesh = new THREE.Points(this.geometry, this.material);
		this.nebula = new THREE.Mesh(new THREE.BoxBufferGeometry(1000, 1000, 1000), options.nebula.map(tex => {
			return new THREE.MeshBasicMaterial({
				map: tex,
				side: THREE.BackSide,
				fog: false,
				depthWrite: false
			});
		}));
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
		// starfield: THREE.CubeTexture,
		starfield: THREE.Texture[],
		starSprite: THREE.Texture
	};
	clock: THREE.Clock;
	matrix: THREE.Matrix4;
	skybox: StarField;

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

		this.camera.position.set(0, 0, 500);
		this.controls = new TrackballControls(
			this.camera as THREE.PerspectiveCamera,
			this.renderer.domElement,
			);
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

	createMoon(): THREE.Mesh {
		let geo = new THREE.IcosahedronBufferGeometry(
			100, // radius
			50, // Segments
		);
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
		this.moon.add(this.skybox.nebula);
	}

	init(){
		this.light = new THREE.PointLight(0xffffff, 0.8, -100)
		this.light.position.set(-200, 200, 200);
		this.moon = this.createMoon();
		this.createSkybox();
		this.scene.add(this.light);
		this.matrix = new THREE.Matrix4; // update to get current moon phase?
		this.render();
	}

	render() {
		requestAnimationFrame(this.render.bind(this));
		let delta = this.clock.getDelta() * 2 * Math.PI / 560;
		this.moon.rotateY(-delta);
		// this.camera.lookAt(this.moon.position);
		this.controls.update(this.camera);
		this.renderer.render(this.scene, this.camera);
	}
}

export default Sketch;
