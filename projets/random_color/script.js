/*
 * author : AWO CARLOS
 * site web : https://awo-carlos.dev/
 * addresse mail : awocarlos55@gmail.com
*/

	window.addEventListener("load",()=>{
		randomBg()
	})
	function getRandomIntegerBetweenRange( min , max){
	let result = (Math.random()*(max-min))+min
	result = Math.round(result)

	return result
	}
	let tab = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
	function randomBg(){
		let v1 = tab[getRandomIntegerBetweenRange( 0 , tab.length-1)]
		let v2 = tab[getRandomIntegerBetweenRange( 0 , tab.length-1)]
		let v3 = tab[getRandomIntegerBetweenRange( 0 , tab.length-1)]
		let v4 = tab[getRandomIntegerBetweenRange( 0 , tab.length-1)]
		let v5 = tab[getRandomIntegerBetweenRange( 0 , tab.length-1)]
		let v6 = tab[getRandomIntegerBetweenRange( 0 , tab.length-1)]
		let v7 = tab[getRandomIntegerBetweenRange( 0 , tab.length-1)]
		let v8 = tab[getRandomIntegerBetweenRange( 0 , tab.length-1)]
		let hex = `#${v1}${v2}${v3}${v4}${v5}${v6}${v7}${v8}`
		
		document.querySelector(".projet__content").style.backgroundColor = hex
		document.querySelector(".color").textContent=hex

	}