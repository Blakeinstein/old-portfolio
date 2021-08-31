const bloop =  "assets/projects/bloop.png";
const fuse =  "assets/projects/fuse.png";
const pfd =  "assets/projects/pfd.png";

const data: {
    'name': string,
    'description': string,
    "lang": string[],
    "libs": string[],
    "url": string,
    "image": string
}[] = [{
    "name": "Bloop",
    "description": "An Aesthetic Scratchpad for developers.",
    "lang": ["Rust", "HTML", "CSS", "JS", "C/C++"],
    "libs": ["WebViewRS", "Fuse", "Serde", "WinAPI"],
    "url": "https://github.com/Blakeinstein/Bloop",
    "image": bloop
},{
    "name": "Fuse-Rust",
    "description": "A fuzzy searching library written in rust.",
    "lang": ["Rust"],
    "libs": ["crossbeam"],
    "url": "https://github.com/Blakeinstein/fuse-rust",
    "image": fuse
},{
    "name": "ChemicalPFD",
    "description": "Tool to construct process flow diagrams",
    "lang": ["Python"],
    "libs": ["PyQT5", "PySide2", "FBS"],
    "url": "https://github.com/FOSSEE/Chemical-PFD",
    "image": pfd
}]

export default data;