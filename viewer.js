async function loadCanvas(){

const canvas = await fetch("Mystery.canvas").then(r=>r.json())

const board = document.getElementById("board")

for(const n of canvas.nodes){

const div = document.createElement("div")
div.className = "node"

div.style.left = n.x + "px"
div.style.top = n.y + "px"

if(n.type === "text"){
div.innerHTML = n.text
}

if(n.type === "file"){
div.innerHTML = "<b>"+n.file+"</b>"
}

board.appendChild(div)

}

}

loadCanvas()