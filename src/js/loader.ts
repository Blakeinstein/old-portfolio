import * as THREE from "three";

import data from "../data/projects";


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
    progressBar: HTMLElement;
    progressDot: HTMLElement;
    percentage: HTMLElement;
    imagePreloader: ImagePreloader

    constructor(finalize: Function) {
        this.loadingContainer = document.getElementById('loading-container');
        this.progressBar = this.loadingContainer.firstElementChild.firstElementChild as HTMLElement
        this.progressDot = document.getElementById('progressDot');
        this.percentage = document.getElementById('percentage');
        this.manager = new THREE.LoadingManager();
        this.manager.onProgress = this.progress.bind(this);
        this.manager.onError = this.error.bind(this);
        this.manager.onLoad = this.load.bind(this);
        this.finalize = finalize;
        this.imagePreloader = new ImagePreloader();
        this.imagePreloader.preload(...data.map(i => i.image));
    }

    progress(url: string, loaded: number, total: number){
        let progress = loaded/total;
        // work around for parcel svg minify removing ids on svgs in production
        this.progressBar.style.strokeDashoffset = String(289 - progress * 289);
        this.progressDot.style.transform = `rotate(${Math.floor(360*progress)}deg)`;
        this.percentage.textContent = `${Math.round((progress+ Number.EPSILON) * 100)}%`
    }

    load() {
        this.finalize();
        setTimeout(() => this.loadingContainer.classList.add('hide'), 0);
    }
    
    error(url: string){
        console.error({data: url});
    }
}

export default Loader;