const matrix = [
    [1,4,5],
    [1,3,4],
    [2,6]
];

let newMatrix = [];

matrix.forEach((m)=>{
	newMatrix.push(...m); // Expande elementos de matriz
})

newMatrix.sort((n,m)=> n-m); // Ordena de forma ascendente

console.log(newMatrix); // Regresa arreglo de forma ascendente.