/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function lettersAndWords (array , letter){
  // dichiaro la variabile dell'array contenente parole con stessa lettera e la variabile della lettera
  const finalArray=[]
  for (let i = 0; i<array.length; i++){
    if(array[i].charAt(0) === `letter`){
      finalArray.push(array[i])
    }

  }

  return finalArray
}

// Invoca la funzione qui e stampa il risultato in console

console.log(lettersAndWords(names, L))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]