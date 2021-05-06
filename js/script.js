// ------------------function------------------
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// ------------------/function------------------
var numbers = [];
var cycles=0;
while(cycles < 5) {
    numbers.push(randomNumber(1, 100));
    cycles++;
}
console.log(numbers);

alert("I numeri da ricordare sono:\n" + numbers);

setTimeout(function(){
    var numbersUser = [];
    var cycles=0;
    while(cycles < 5) {
        var richiestaNumeri = parseInt(prompt("Digita i numeri"));
        numbersUser.push(richiestaNumeri);
        cycles++;
    }
    var numbersUserOk = [];

    for(var i2=0; i2 < 5; i2++){
        for(var i=0; i < 5; i++){
            if(numbers[i2] == numbersUser[i]) {
                //console.log(numbers[i2]);
                //console.log(numbersUser[i]);
                //console.log("esatto " + numbers[i]);
                numbersUserOk.push(numbers[i]);
                
            }
        }
    }
console.log(numbersUserOk);
console.log(numbersUserOk.length);

document.write("Numeri indovinati " + numbersUserOk);
document.write("Numero numeri indovinati " + numbersUserOk.length);

}, 3000);


