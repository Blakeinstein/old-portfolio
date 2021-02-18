import * as bloop from "url:../assets/projects/bloop.png";
import * as fuse from "url:../assets/projects/fuse.png";
import * as pfd from "url:../assets/projects/pfd.png";

export default [{
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