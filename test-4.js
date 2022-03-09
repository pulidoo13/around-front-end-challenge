const data = [7,4,9,23,13,12,34,65,2,3,4]

let result = data[0];

for (let i = 1; i < data.length; i ++){
	if(i%2 == 1)
  result += +data[i]; // Suma si el residuo es 1
  else
  result -= data[i]; // Resta si el residuo es diferente a 1
}

console.log(result); // Suma/Resta total de todos los elementos del arreglo