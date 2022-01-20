let eta = parseInt(prompt('Inserisci la tua eta'));
let kmDaPercorrere = parseInt(prompt('Inserisci km da percorrere'));

if(isNaN(eta) || isNaN(kmDaPercorrere)){
    alert('Inserisci un valore numerico valido!');
}
else if(eta < 0){
 alert('Età non valida!');
}


// costo al km
let prezzoAlKm = 0.21;

// prezzo biglietto intero
let prezzoBiglietto = kmDaPercorrere * prezzoAlKm;

// calcolo sconto minorenni 20%
let scontoMinorenni = (prezzoBiglietto * 20) /100;
let prezzoMinorenni = prezzoBiglietto - scontoMinorenni;

// calcolo sconto Over 65 40%
let scontoOver = (prezzoBiglietto * 40) /100;
let prezzoOver = prezzoBiglietto - scontoOver;


if (eta < 18){
    document.getElementById('sale').innerHTML = "Applicato sconto 'Minorenne' del 20%.";
    document.getElementById('prezzo').innerHTML = "Prezzo totale: " + prezzoMinorenni.toFixed(2) + " &euro;"
}
else if(eta > 65){
    document.getElementById('sale').innerHTML = "Applicato sconto 'Over65' del 40%.";
    document.getElementById('prezzo').innerHTML = "Prezzo totale: " + prezzoOver.toFixed(2) + " &euro;";
}
else{
    document.getElementById('prezzo').innerHTML = "Prezzo totale: " + prezzoBiglietto.toFixed(2) + " &euro;";
}