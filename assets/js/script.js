//1. chiedi all’utente il cognome
var cognomeUtente = prompt('Scrivi il tuo cognome');
console.log(cognomeUtente);

//2. inseriscilo in un array con altri cognomi (esempio ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’)
var listaCognomi = [
  'Catalfamo',
  'Zagami',
  'Irrera',
  'Napoli',
  'Inferrera',
  'Micali',
  'Bottari'
]

listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

//3. stampa la lista ordinata alfabeticamente
listaCognomi.sort();


for( var i=0; i < listaCognomi.length; i++){

  var surnameUtente = listaCognomi[i];
  var cognomeLista = document.getElementById('lista-numerata').innerHTML;
  
  document.getElementById('lista-numerata').innerHTML = cognomeLista + "<li>" + surnameUtente + "</li>";
}

//4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova
var numero_cognome = (listaCognomi.indexOf(cognomeUtente)) + 1;

document.getElementById('position').innerHTML = "La posizione del tuo cognome è: " + numero_cognome + "°";
  