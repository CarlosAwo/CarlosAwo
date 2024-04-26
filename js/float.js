let float = document.querySelector(".float")

console.log(float)

setInterval(()=>{

	float.classList.add('boule')
	setTimeout(()=>{
		
		float.classList.remove("boule")
	},2000)
},15000)