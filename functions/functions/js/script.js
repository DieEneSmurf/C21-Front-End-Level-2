let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  ______het is met letter ipv cijfers________ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype waarom? _____het is met cijfers ipv letters_______ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? _____om het uit te voeren als een command_______ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______17________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de P_____A______ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ______5______ de waarde noemen we een A____?______ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een ___melding____ op het scherm met de tekst ____"Naam" *Dus Daan Morel_____ deze tekst staan op regel ___17 of 18____ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? _____Nee______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? ____x_____ het verandert een plaatje____x______ en waar wordt deze in je HTML aangeroepen? _____Regel 25_______ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML _____regel 17______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? _________het selecteert een element op de pagina__________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? _________het laat een melding zien zodra je op de knop klikt__________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _______regel 32_______ en wanneer wordt deze aangeroepen ___________ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan _______Boven aan deze pagina_______ en waar komt de waarde van getal vandaan? ______regel 2 van deze pagina______ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? ________neemt een string als parameter aan die overeenkomt met een CSS-selector.___________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? _________het rekent een rekensom uit____________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? __________(ik gebruik 6) het cijfer is nu 3 hoger___________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______regel 44________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan _______Regel 38_______ en waar komt de waarde van kleur vandaan? _____Ook regel 38_______ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? _____Regel 44_______ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? __________Het maakt de letters groter (Naar 30px)___________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ______de naam word gepakt (Daan Morel in dit geval)_____ en wanneer gebeurt dat _____Wanneer je op de bovenste knop klikt_____ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ____Ik kijg een andere naam____