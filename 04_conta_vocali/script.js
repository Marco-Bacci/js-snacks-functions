/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

const newArray = []

// Dichiara la funzione qui.
function giveVocals (string){
  splitString = string.split("")
  for(let i=0; i<splitString.length; i++ ){
    console.log(splitString[i])
  }
  
}

// Invoca la funzione qui e stampa il risultato in console

giveVocals(word)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)