// Duda: En la descripción de ejercicio ya que no teníamos segunda dimensión para la matríz, se asumió que era un ejercicion con un vector(array).
const randomNumbers = (n) => {

	const result = [];
	const resultNoReppeted = [];

	for(let i = 0;i<n;i++){ //N números RANDOM (0-10)
	const randomNumber = Math.floor(Math.random() * 11);  
  	result.push(randomNumber);    
    if(!resultNoReppeted.some((n) => n == randomNumber)) // Valida que número no exista ya en los NO REPETIDOS
    	resultNoReppeted.push(randomNumber);
  }

return {result, resultNoReppeted};

}

console.log(randomNumbers(100)); // Regresa arreglo ordenado de forma ascendente.