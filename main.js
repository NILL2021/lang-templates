let templates = document.getElementById("templates")
const files = {js, c, cs, python, lua}
const js = {
  "cv":"change-val.js",
  "fn":"function.js",
  "hw":"hello-world.js",
  "obj":"objects.js"
}
const c = {
  "hw":"hello-world.c",
  "struct":"struct.c",
}
const cs = {
  "hw":"hello-world.cs",
  "hw6":"net6.x-hw.cs",
}
const python = {
  "cl":"class.py",
  "fb":"foo-bar.py",
  "hw":"hello-world.py",
  "mn":"main.py",
  "py2c":"py2compatibility.py",
}
const lua = {
  "fb":"foo-bar.lua",
  "hw":"hello-world.lua",
  "tbls":"tables.lua",
}
for (dir in files) {
  templates.innerHTML = templates.innerHTML + "\n<div class='" + dir.toString()+"' id='" + dir.toString() + "'>" + dir.toString()
  for fl in dir {
    let curr = document.getElementById(dir.toString())
    let reader = new FileReader();
		reader.addEventListener('load', function(e) {
	    		let text = e.target.result;
	    		document.querySelector("#file-contents").textContent = text;
		});
		let res = reader.readAsText("./" + dir.toString() + fl);
    curr.innerHTML = curr.innerHTML + "\n" + res
  }
}
