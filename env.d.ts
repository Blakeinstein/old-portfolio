declare module 'animejs/lib/anime.es.js' {
  import anime from "animejs";
  export default anime;
}

declare module 'swup' {
  export default class Swup {
    constructor(options: Record<string, unknown>);
    preloadPages(): void;
    on(ev: string, callback: VoidFunction): void;
  }
}

declare module '@swup/head-plugin' {
  export default class SwupHeadPlugin {
    constructor(options: Record<string, unknown>)
  }
}

declare module '@swup/preload-plugin' {
  export default class SwupPreloadPlugin {}
}

declare module '@swup/slide-theme' {
  export default class SwupSlideTheme {}
}