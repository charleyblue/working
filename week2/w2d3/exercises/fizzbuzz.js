function fizzBuzz() {
    for (var i = 0; i < 100; i++) {
        var num = 1;
        var result = num += i;
        if ( result % 3 === 0) {
            console.log("Fizz");
        } else if (result % 5 === 0 && result % 3 !== 0) {
            console.log('Buzz');
        } else {
            console.log(result);
        }
    }
}
fizzBuzz();
