export default <{
  'name': string,
  'description': string,
  "lang": string,
  "libs": string,
  "url": string,
  "image": string
}[]> [{
  "name": "Bloop",
  "description": "An Aesthetic Scratchpad for developers.",
  "lang": ["Rust", "HTML", "CSS", "JS", "C/C++"].join(", "),
  "libs": ["WebViewRS", "Fuse", "Serde", "WinAPI"].join(", "),
  "url": "https://github.com/Blakeinstein/Bloop",
  "image": "/assets/projects/bloop.png"
},{
  "name": "Fuse-Rust",
  "description": "A fuzzy searching library written in rust.",
  "lang": ["Rust"].join(", "),
  "libs": ["crossbeam"].join(", "),
  "url": "https://github.com/Blakeinstein/fuse-rust",
  "image": "/assets/projects/fuse.png"
},{
  "name": "ChemicalPFD",
  "description": "Tool to construct process flow diagrams",
  "lang": ["Python"].join(", "),
  "libs": ["PyQT5", "PySide2", "FBS"].join(", "),
  "url": "https://github.com/FOSSEE/Chemical-PFD",
  "image": "/assets/projects/pfd.png"
}]