export function getRandomIntegerBetweenRange( min , max){
	let result = (Math.random()*(max-min))+min
	result = Math.round(result)
	
	return result
}

export function generateImagePath(type, index) {
	// Supposons que vous utilisez un serveur local et que le chemin soit relatif au serveur.
	return `./src/assets/images/${type}/${index}.jpg`;
}
