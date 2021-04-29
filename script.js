

for (var i = 0; i < 100; i++) {
    var multiplo = i;
    if ( i % 5 === 0 && i % 3 === 0) {
        multiplo = "BuzzFizz";
    }
    else if ( i % 5 === 0) {
        multiplo = "Buzz";
    }
    else if (i % 3 === 0) {
        multiplo = "Fizz";
    }
    

    console.log(multiplo);
}
