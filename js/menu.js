let menu__hamburger = document.querySelector(".menu__hamburger")
let nav = document.querySelector(".navigation__list")

menu__hamburger.addEventListener("click",function(){
	this.classList.toggle("menu__hamburger--on")
	nav.classList.toggle("navigation__list--mobile--visible")
})
	if (window.innerWidth>600) {
		if (menu__hamburger.classList.contains("menu__hamburger--on")) {
		   menu__hamburger.classList.remove("menu__hamburger--on")
		}
		menu__hamburger.classList.add("menu__hamburger--invisible")

		if (nav.classList.contains("navigation__list--mobile")) {
		   nav.classList.remove("navigation__list--mobile")
		}

		if (nav.classList.contains("navigation__list--mobile--visible")) {
		   nav.classList.remove("navigation__list--mobile--visible")
		}
		nav.classList.add("navigation__list--desktop")

	}
	else{
		console.log("gere")
       		menu__hamburger.classList.remove("menu__hamburger--invisible")
       		nav.classList.remove("navigation__list--desktop")
       		nav.classList.add("navigation__list--mobile")
	}



window.addEventListener("resize",()=>{
	if (window.innerWidth>600) {
		if (menu__hamburger.classList.contains("menu__hamburger--on")) {
		   menu__hamburger.classList.remove("menu__hamburger--on")
		}
		menu__hamburger.classList.add("menu__hamburger--invisible")

		if (nav.classList.contains("navigation__list--mobile")) {
		   nav.classList.remove("navigation__list--mobile")
		}

		if (nav.classList.contains("navigation__list--mobile--visible")) {
		   nav.classList.remove("navigation__list--mobile--visible")
		}
		nav.classList.add("navigation__list--desktop")

	}
	else{
		console.log("gere")
       		menu__hamburger.classList.remove("menu__hamburger--invisible")
       		nav.classList.remove("navigation__list--desktop")
       		nav.classList.add("navigation__list--mobile")
	}
})