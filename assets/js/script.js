var cognomeUtente = prompt('Scrivi il tuo cognome');
console.log(cognomeUtente);

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
listaCognomi.sort();

console.log(listaCognomi);

for( var i=0; i < listaCognomi.length; i++){

  var surnameUtente = listaCognomi[i];
  var cognomeLista = document.getElementById('lista-numerata').innerHTML;
  
  document.getElementById('lista-numerata').innerHTML = cognomeLista + "<li>" + surnameUtente + "</li>";
}
  