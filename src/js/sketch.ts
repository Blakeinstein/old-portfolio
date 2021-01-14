import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

import fragmentShader from '../shaders/fragmentShader.glsl';
import vertexShader from '../shaders/vertexShader.glsl'

type Uniforms = {
    'width': THREE.Uniform,
    'scaleX': THREE.Uniform,
    'scaleY': THREE.Uniform
}

class Sketch {
    scene: THREE.Scene;
    vertex: string;
    fragment: string;
    uniforms: Uniforms;
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
    controls: OrbitControls;

    constructor(opts) {
        this.scene = new THREE.Scene();
        this.vertex = vertexShader;
        this.fragment = fragmentShader;
        this.uniforms = opts.uniforms;
        this.renderer = new THREE.WebGLRenderer();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0x000000, 1);
    
        this.container = document.getElementById("hero-background");
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.container.appendChild(this.renderer.domElement);
    
        this.camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.001,
            1000
        );
    
        this.camera.position.set(0, 0, 2);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.time = 0;
        this.setupResize();
        //   this.settings();
        this.addObjects();
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
  
  
      // image cover
      this.imageAspect = 1;
      let a1; let a2;
      if(this.height/this.width>this.imageAspect) {
        a1 = (this.width/this.height) * this.imageAspect ;
        a2 = 1;
      } else{
        a1 = 1;
        a2 = (this.height/this.width) / this.imageAspect;
      }
  
      this.material.uniforms.resolution.value.x = this.width;
      this.material.uniforms.resolution.value.y = this.height;
      this.material.uniforms.resolution.value.z = a1;
      this.material.uniforms.resolution.value.w = a2;
  
  
      // optional - cover with quad
      const dist  = this.camera.position.z;
      const height = 1;
      this.camera.fov = 2*(180/Math.PI)*Math.atan(height/(2*dist));
  
      // if(w/h>1) {
      if(this.width/this.height>1){
        this.plane.scale.x = this.camera.aspect;
        // this.plane.scale.y = this.camera.aspect;
      } else{
        this.plane.scale.y = 1/this.camera.aspect;
      }
  
      this.camera.updateProjectionMatrix();
  
  
    }
  
    addObjects() {
      let that = this;
      this.material = new THREE.ShaderMaterial({
        uniforms: {
          time: new THREE.Uniform({ type: "f", value: 0 }),
        //   progress: new THREE.Uniform({ type: "f", value: 0 }),
        //   scaleX: new THREE.Uniform({ type: "f", value: 40 }),
        //   scaleY: new THREE.Uniform({ type: "f", value: 40 }),
        //   transition: new THREE.Uniform({ type: "f", value: 40 }),
        //   swipe: new THREE.Uniform({ type: "f", value: 0 }),
        //   width: new THREE.Uniform({ type: "f", value: 0 }),
        //   radius: new THREE.Uniform({ type: "f", value: 0 }),
          resolution: new THREE.Uniform({ type: "v4", value: new THREE.Vector4() }),
        },
        vertexShader: this.vertex,
        fragmentShader: this.fragment
      });
    //   this.material.wireframe = true
      let ratio = this.width/this.height
      this.geometry = new THREE.PlaneGeometry(0.2, 0.2*ratio, 10, 10);
  
      this.plane = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.plane);
    }
  
    render() {
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
  }

export default Sketch;