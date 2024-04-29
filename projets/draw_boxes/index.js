/*
 * author : AWO CARLOS
 * site web :  https://awo-carlos.dev/
 * addresse mail : awocarlos55@gmail.com
*/
let boxes = document.querySelector('.boxes')
let newLine = document.querySelector('.nL')
let space = document.querySelector('.espace')
let remove = document.querySelector('.supp')
let createBox = document.querySelector('.createBox')
let boxColor = document.querySelector('.boxColor')
let btnGroup = document.querySelector('.buttons-group')
let buttons   = Array.from(document.querySelectorAll(".btn"))
buttons.forEach((btn)=>{
	btn.classList.add("box")
	btn.style.backgroundColor = btn.dataset.color

	btn.addEventListener("click",callInsertBox.bind(btn))
})
newLine.addEventListener("click",()=>{
				let br = document.createElement("br")
		boxes.appendChild(br)
})
space.addEventListener("click",function(){
		insertBox("transparent")
})
remove.addEventListener("click",function(){
	if((boxes.children.length !== 0)){
		boxes.removeChild(boxes.lastChild)
	}
})

createBox.addEventListener("click",function(){
		let box = document.createElement("button")
		box.addEventListener("click",callInsertBox.bind(box))
		box.classList.add("btn")
		box.classList.add("box")
		box.style.backgroundColor = boxColor.value
		box.dataset.color = boxColor.value
		btnGroup.insertBefore(box,btnGroup.firstChild)
		
})

	function insertBox(color){
		let box = document.createElement("span")

		box.classList.add("box")
		box.style.backgroundColor = color
		boxes.appendChild(box)
	} 

function callInsertBox(){
		
		let color = this.dataset.color
		insertBox(color)
	}

