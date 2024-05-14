function Typewritter(element,delay,duration,content){
			element.innerHTML = ""
			element.classList.add("typing")
			content = content.split("")
				setTimeout(()=>{
				let i = 0
				let id = setInterval(()=>{
					if (i > content.length-1) {
						clearInterval(id)
						element.classList.remove("typing")
						return}
					element.innerHTML+=content[i]
				
				i++

				},duration/content.length)

			},delay)

}
let greet = document.querySelector(".greet")
let nom = document.querySelector("header .name")
let job = document.querySelector("header .job")

window.addEventListener("DOMContentLoaded",()=>{
	Typewritter(greet,1,1000,greet.innerHTML)
	Typewritter(nom,1000,5000,nom.innerHTML)
	Typewritter(job,6000,1000,job.innerHTML)
})


