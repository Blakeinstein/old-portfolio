import * as THREE from "three";

class Loader {
    manager: THREE.LoadingManager;
    finalize: Function;
    loadingContainer: HTMLElement;

    constructor(finalize: Function) {
        this.loadingContainer = document.getElementById('loading-container');
        this.manager = new THREE.LoadingManager();
        this.manager.onStart = this.start.bind(this);
        this.manager.onProgress = this.progress.bind(this);
        this.manager.onError = this.error.bind(this);
        this.manager.onLoad = this.load.bind(this);
        this.finalize = finalize;
    }

    start(url: string, loaded: number, total: number){
        this.loadingContainer.style.display = 'block';
        console.log({url, loaded, total});
    }

    progress(url: string, loaded: number, total: number){
        console.log({url, loaded, total});
    }

    load() {
        this.loadingContainer.style.display = 'none';
        this.finalize();
    }
    
    error(url: string){
        console.error({data: url});
    }
}

export default Loader;