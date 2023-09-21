alert ('Welcome User')
let = prompt ('User Name')
function inch(){
    
    let inches = Number(document.getElementById('inc').value);
    let convert = (inches * 2.54);
    let centimetre = document.getElementById('cent');
    centimetre.value = convert;

}
function delcent(){
    let centimetre = document.getElementById("cent");
    centimetre.value = ""; 
    let inches = document.getElementById('inc');
    inches.value = "";
}
/* yards */
function convert(){
    
    let yards = Number(document.getElementById('Yard').value);
    let convert = (yards * .91);
    let meter = document.getElementById('Meters');
    meter.value = convert;
}
function delcent2(){
    let yards = document.getElementById("Yard");
    yards.value = ""; 
    let meter = document.getElementById('Meters');
    meter.value = "";
}
/* feet */
function feet(){
    
    let feet = Number(document.getElementById('feet').value);
    let convert = (feet * .30);
    let meters2 = document.getElementById('meter2');
    meters2.value = convert;
}
function delcent3(){
    let feet = document.getElementById("feet");
    feet.value = ""; 
    let meters2 = document.getElementById('meter2');
    meters2.value = "";
}
/* miles */
function miles(){
    
    let miles = Number(document.getElementById('miles').value);
    let convert = (miles * 1.61);
    let kilometer = document.getElementById('kilome');
    kilometer.value = convert;
}
function delcent4(){
    let kilometer = document.getElementById("kilome");
    kilometer.value = ""; 
    let miles = document.getElementById('miles');
    miles.value = "";
}