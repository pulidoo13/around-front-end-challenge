// Duda: En ejemplo de ejercicio, cómo se definieron el rango de secciones.

const densityMatrix = (m,n) =>{
	
    const arrayOfNumbers = [];
    
    const arrayOfNoReppeted = [];
    
    const result = [];
    
    // Genera números random, elimina repetidos y ordena ascendente.
    for(let i = 0;i<m;i++){ //N números RANDOM (0-100)
          const number = Math.floor(Math.random() * 101);
      arrayOfNumbers.push(number);
      
      if(!arrayOfNoReppeted.some((n) => n == number))
          arrayOfNoReppeted.push(number);  
    }
    
    arrayOfNoReppeted.sort((a,b)=> a-b); 
      
    for(let i = 1; i <= n;i++){  	
        // Divide el total de elementos entre cantidad de secciones y lo multiplica por el no. de sección.
      const initLimit = Math.floor((arrayOfNoReppeted.length/n)*(i-1)); // Inicio 
      const endLimit = Math.floor((arrayOfNoReppeted.length/n)*i); // Fin
   
        result.push(arrayOfNoReppeted.slice(initLimit,endLimit));
    }
      
    return {arrayOfNoReppeted,result,arrayOfNumbers};  
    
  }
  
  console.log(densityMatrix(12,7));