/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'supercalifragilistichespiralidoso';


// Dichiara la funzione qui.
function giveVocals (string){
  const foundVocals = []
  // splitto la stringa in un array di lettere
  splitString = string.split("")
  const vocals= [`a`,`e`,`i`, `o`, `u`] //array delle vocali
  // doppio ciclo for per comparare le lettere dell'array creato con quello delle vocali
  for(let i=0; i<splitString.length; i++ ){
    for (let j = 0; j<vocals.length; j++){
      if(splitString[i]=== vocals[j]){
        foundVocals.push(vocals[j])
      }
    }
  }
  
    return foundVocals
  }
        


// Invoca la funzione qui e stampa il risultato in console

console.log(giveVocals(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)