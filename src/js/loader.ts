import * as THREE from "three";

import data from "../data/projects";

import { transitionEvent } from './utils';

class ImagePreloader {
    images: HTMLImageElement[] = [];

    preload(...args: string[]) {
        [...args].forEach(uri => {
            let img = new Image();
            img.src = uri;
            this.images.push(img);
        })
    }
}

class Loader {
    manager: THREE.LoadingManager;
    finalize: Function;
    loadingContainer: HTMLElement;
    progressBar: SVGPathElement;
    progressDot: HTMLElement;
    percentage: HTMLElement;
    imagePreloader: ImagePreloader;
    totalLength: number;

    constructor(finalize: Function) {
        this.loadingContainer = document.getElementById('loading-container');
        this.progressBar = document.querySelector('.loading-bar-circle') as SVGPathElement;
        this.progressDot = document.getElementById('progressDot');
        this.percentage = document.getElementById('percentage');
        this.manager = new THREE.LoadingManager();
        this.manager.onStart = this.start.bind(this);
        this.manager.onProgress = this.progress.bind(this);
        this.manager.onError = this.error.bind(this);
        this.manager.onLoad = this.load.bind(this);
        this.finalize = finalize;
        this.imagePreloader = new ImagePreloader();
        this.imagePreloader.preload(...data.map(i => i.image));
        this.totalLength = this.progressBar.getTotalLength();
    }

    start() {
        this.progressBar.style.strokeDasharray = this.progressBar.style.strokeDashoffset = String(this.totalLength);
    }

    progress(url: string, loaded: number, total: number){
        let progress = loaded/total;
        // work around for parcel svg minify removing ids on svgs in production
        this.progressBar.style.strokeDashoffset = String(this.totalLength * ( 1 - progress ));
    }

    load() {
        this.finalize();
        
        setTimeout(() => {
            this.loadingContainer.classList.add('hide');

            let innerLogo = (document.querySelector(".logo>a>img") as HTMLElement).getBoundingClientRect();
            let loaderLogo = document.getElementById("loading-logo");
            loaderLogo.style.height = String(innerLogo.height) + 'px';
            loaderLogo.style.width = String(innerLogo.width) + 'px';
            loaderLogo.style.top = String(innerLogo.top) + 'px';
            loaderLogo.style.left = String(innerLogo.left) + 'px';
        }, 0);
    }
    
    error(url: string){
        console.error({data: url});
    }

}

export default Loader;