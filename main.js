let templates = document.getElementById("templates")
const files = {js, c, cs, pythin, lua}
const js = {
  "change-val.js",
  "function.js",
  "hello-world.js",
  "objects.js"
}
const c = {
  "hello-world.c",
  "struct.c",
}
const cs = {
  "hello-world.cs",
  "net6.x-hw.cs",
}
const python = {
  "class.py",
  "foo-bar.py",
  "hello-world.py",
  "main.py",
  "py2compatibility.py",
}
const lua = {
  "foo-bar.lua",
  "hello-world.lua",
  "tables.lua",
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
