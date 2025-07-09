/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitials (array){
  //dichiaro nuovo array e ciclo ogni parola dell'array per trovare il nuovo array con le iniziali
  let arrayInitials = []
  for (let i=0; i < array.length; i++){
    const initials = array[i].charAt(0);
    arrayInitials.push(initials)
  }
  return arrayInitials
 
}
  
// arrayInitials.push(array[i][0]); <------  SI POTEVA ANCHE FARE COSI!

// Invoca la funzione qui e stampa il risultato in console

console.log(getInitials(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]