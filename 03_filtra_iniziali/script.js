/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// const letter= prompt(`Inserirsci una lettera: `)

// Dichiara la funzione qui.
function lettersAndWords (array , letter){
  // dichiaro la variabile dell'array contenente parole con stessa lettera 
  const finalArray=[]
  
  for (let i = 0; i<array.length; i++){
    if(array[i].charAt(0).toLowerCase() === letter.toLowerCase()){
      finalArray.push(array[i])
    }
    // SI POTEVA ANCHE FARE ---> if (array[i][0]) === letter.toUpperCase()
  }
  
  return finalArray
}
// Invoca la funzione qui e stampa il risultato in console

console.log(lettersAndWords(names, `a` ))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]