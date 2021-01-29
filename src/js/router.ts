class Router {
    routes: {path: RegExp, cb: Function}[] = [];
    mode = null;
    root = "/";
    current = null;
    intervalID = null;

    constructor(options: {mode: any, root: string}){
        this.mode = window.history.pushState ? 'history' : 'hash';
        if (options.mode) this.mode = options.mode;
        if (options.root) this.root = options.root;
        this.listen();
    }

    add = (path: string, cb: Function) => {
        this.routes.push({ path: new RegExp(this.clearSlashes(path)), cb });
        return this;
    };
    remove = (path: string) => {
        let final_path = new RegExp(this.clearSlashes(path));
        for (let i = 0; i < this.routes.length; i++){
            if (this.routes[i].path === final_path){
                this.routes.slice(i, 1);
                return this;
            }
        }
        return this;
    };
    flush = () => {
        this.routes = [];
        return this;
    };
    clearSlashes = (path: string) => 
        path
            .toString()
            .replace(/\/$/, '')
            .replace(/^\//, '');
    getFragement = () => {
        let fragment = '';
        if (this.mode === 'history') {
            fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
            fragment = fragment.replace(/\?(.*)$/, '');
            fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
        } else {
            const match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : '';
        }
        return this.clearSlashes(fragment);
    };
    navigate = (path: string = '') => {
        if (this.mode === 'history') {
            window.history.pushState(null, null, this.root + this.clearSlashes(path));
        } else {
            window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
        }
        return this;
    };
    listen = () => {
        clearInterval(this.intervalID);
        this.intervalID = setInterval(this.interval, 50);
    };
    interval = () => {
        if (this.current === this.getFragement()) return;
        this.current = this.getFragement();

        this.routes.some(route => {
            const match = this.current.match(route.path);
            if (match) {
                match.shift();
                route.cb.apply({}, match);
                return match;
            }
            return false;
        });
    };
}

export default Router;