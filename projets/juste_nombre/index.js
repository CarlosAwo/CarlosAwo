/*
 * author : AWO CARLOS
 * site web :  https://awo-carlos.dev/
 * addresse mail : awocarlos55@gmail.com
*/

window.addEventListener("load", initialiseInput)
   function initialiseInput(){
		let input = document.querySelectorAll("input[type='text']")
		for(i=0;i<input.length;i++){
		input[i].value = ""
   }
   try {
   	   if (localStorage.getItem("gameParts")) {
   		
   		gameParts = JSON.parse(localStorage.getItem("gameParts"))
   		gameSuccess.textContent = gameParts.success
        gameError.textContent = gameParts.error
        gameTotal.textContent = gameParts.total
	   }
	   else{
	   		
	   }
   } catch(e) {
   	
   	console.log(e);
   }

}
function responseInner(selector,text){
	return `<p class="${selector}">${text} !!!!</p>`
}


function getRandomIntegerBetweenRange( min , max){
	let result = (Math.random()*(max-min))+min
	result = Math.round(result)
	
	return result
}

/*
 *	verifie si la valeur saisie par l'utilisateur est correcte
 */
function checkUserValue(userValue,NumberToDevine){
	resp.classList.remove("success" , "error")

	if (userValue!=="") {
		userValue = parseInt(userValue)
	
		if (userValue===NumberToDevine) {
			let text = "Felicitation Vous avez deviné le nombre "+NumberToDevine+" !!!!"
			resp.innerHTML = responseInner("success",text)
			hasFindNumber = true

			
		} 
		else if(userValue < NumberToDevine) {
			tentatives--
			let text = userValue +" est Trop Bas !!!!"
			resp.innerHTML = responseInner("error",text)
						initialiseInput()
		life.textContent = tentatives
	

		}
		else if(userValue > NumberToDevine) {
			tentatives--
			let text = userValue +" est Trop Haut !!!!"
			resp.innerHTML = responseInner("error",text)	
						initialiseInput()
			life.textContent = tentatives
		}

	}
	
	
}
function startCounter(){
	
	initialiseInput()
	life.textContent = tentatives
	this.removeEventListener("click" , startCounter)
	if(!contexte.classList.contains("contexte--invisible")){
		contexte.classList.add("contexte--invisible")
	}
	resp.innerHTML = ""

	NumberToDevine = getRandomIntegerBetweenRange(0,30)
	btn_validation.addEventListener("click" , ()=>{
		if (counter!==0 && tentatives!==0&& hasFindNumber==false) {
			
			checkUserValue(user_value.value,NumberToDevine)
		}
	} )
	user_value.addEventListener("keydown",(e)=>{
		if (e.keyCode===13 && counter!==0 && tentatives!==0 && hasFindNumber==false) {
			
			checkUserValue(user_value.value,NumberToDevine)
		}
	})
		
	let counter = 30
	let id = setInterval( ()=>{
		if (counter === 0 || hasFindNumber||tentatives===0) {
			if (hasFindNumber===false) {
				alert("Fin de la partie !!!!")
				reponseCorrecte.innerHTML=`la reponse etait <span style="color:green">${NumberToDevine}</span>`
				resp.appendChild(reponseCorrecte)
			}
			if(contexte.classList.contains("contexte--invisible")){
		      contexte.classList.remove("contexte--invisible")
	        }
			if (hasFindNumber) {
				gameParts.success++
			} else {
				gameParts.error++
			}
			gameParts.total = gameParts.error + gameParts.success

			localStorage.setItem("gameParts", JSON.stringify(gameParts))
			tentatives=4
			hasFindNumber=false
			counter = 30
			clearInterval(id)
			initialiseInput()
		
			this.addEventListener("click" , startCounter)
			btn_validation.removeEventListener("click" , checkUserValue)

		} 
		else {	
			timer.textContent = `${counter}`
			counter--
		}
	} , 1000)

}

let tentatives = 4;
let contexte = document.querySelector(".contexte");
let gameSuccess = document.getElementById("game--success")
let gameError = document.getElementById("game--error")
let gameTotal = document.getElementById("game--total")
let btn_start = document.querySelector(".btn--commencer");
let btn_validation = document.querySelector(".btn-validation");
let timer = document.querySelector(".timer-value");
let user_value = document.querySelector(".user-value");
let resp = document.querySelector(".outputZone-answer-box")
let life = document.querySelector(".life")
life.textContent = tentatives
let reponseCorrecte = document.createElement("span")
let NumberToDevine = null
let hasFindNumber = false
let gameParts = {
	success:0,
	error:0,
	total:0
}

gameSuccess.textContent = gameParts.success
gameError.textContent = gameParts.error
gameTotal.textContent = gameParts.total





btn_start.addEventListener("click", startCounter)

