/*
  1. Store the current year in a variable
  2. Store your birth year in a variable
  3. Calculate the two possible ages that you might be based on these years
  4. Print to the Javascript console: "You are either NN or NN", substituting the values for actual numbers.
*/
var curYear = 2016;
var birthYear = 1958;
var age = curYear - birthYear;
console.log(age);

/*
  1. Store a radius of a circle in a variable
  2. Calculate the circumference based on the radius, and output "The circumference is NN".
  3. Calculate the area based on the radius, and output "The area is NN".
  4. Call both functions a couple times with various radiuses
  You can read more about the math of circles here: http://math2.org/math/geometry/circles.htm
*/

var r = 16;
var circumference = 2*(Math.PI*r).toFixed(2);
console.log("The circumfrence is "+ circumference)
var area = (Math.PI) * r*r;
console.log("The area is " + area);

/*
  1. Store a celsius temperature into a variable.
  2. Convert it to fahrenheit and output "NN°C is NN°F".
  3. Now store a fahrenheit temperature into a variable.
  4. Convert it to celsius and output "NN°F is NN°C."
  TIP: To convert from F to C: Deduct 32, then multiply by 5, then divide by 9
*/

var celsius = 20;
var fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);
fahrenheit = 80;
celsius = (fahrenheit - 32)*(5/9);
console.log(celsius);

/*
  Write a function named calculateAge that satisfies the following:
    1. takes 2 arguments: birth year, current year.
    2. calculates the 2 possible ages based on those years.
    3. outputs the result to the screen like so: "You are either NN or NN"
  Call the function three times with different sets of values.
  Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

function calculateAge( birYear, curYear ) {
    var age = curYear - birYear;
    var curMonth = 4;
    if (age > curMonth) {
        console.log("You are " + (age-1) + " years old.");
    } else {
        console.log("You are " + age + " years old.");
    }
}
calculateAge(1958, 2016);

/*
    Write two functions for calculating geometries of a circle.
    1. Create a function called calculateCircumference
      - Pass the radius as an argument
      - Calculate the circumference and output "The circumference is NN".
      - Call the function a couple times with various radiuses
    2. Create a function called calculateArea
      - Pass the radius as an argument
      - Calculate the area and output "The area of the circle is NN".
      - Call the function a couple times with various radiuses
*/

function calculateCircumference(r) {
    var c = (2 * Math.PI) * r;
    c= c.toFixed(2);
    console.log("The circumference is " + c)
}
calculateCircumference();

function calculateArea(r) {
    var a = Math.PI * (r * r);
    a = a.toFixed(2);
    console.log("The area is " + a);
}
calculateArea();

/*
    Write two functions for converting temperatures.
    1. Create a function called celsiusToFahrenheit
      - Pass the celsius value as an argument
      - Convert the temperature to fahrenheit and output "NN°C is NN°F"
      - Call the function to convert a °C temperature value
    2. Create a function called fahrenheitToCelsius
      - Pass the as an argument
      - Convert the temperature to celsius and output "NN°F is NN°C".
      - Call the function to convert a °F temperature value
*/

function celsiusToFahrenheit(c) {
    var f = (c * 9/5) + 32;
    console.log(c + "°C is " + f + "°F");
}
celsiusToFahrenheit();

function fahrenheitToCelsius(f) {
    var c = (f -32) * 5/9;
    c = c.toFixed(2);
    console.log(f + "°F is " + c + "°C");
}
fahrenheitToCelsius();

/*
  Goal: To observe how local and global variables work with function scope.
  1. Create a function called displayBank()
  2. Create  global variable called bankBalance and set it to 10000.
  3. Inside of displayBank, the first line should try to console.log the bankBalance global variable.
  4. Next, create a new local variable inside of displayBank also called bankBalance and set it equal to 1000000.
  5. Use console.log to display the bankBalance again.
  6. Now call the displayBank functions
  7. Finally, use console.log outside of the displayBank function to display the global bankBalance.
  8. You should have two console.logs with numbers and one that is undefined - try to reason why this might be.
*/
var bankBalance = 10000;
function displayBank() {
    console.log(bankBalance);
    var bankBalance = 1000000;
    console.log(bankBalance);
}
displayBank()
console.log(bankBalance);

/*
  1. Create a function called displayGreeting that accepts a name as the argument
  2. Create a variable inside of displayGreeting called 'greeting'
  3. Compute a greeting by using the name argument and something like 'Hello NAME, how are you doing?'
  4. Output the greeting using console.log
  5. Call displayGreeting and pass in your name
  Now if we run this, we should get our greeting in the console.
*/

function displayGreeting(name) {
    var greeting = "Hello there ";
    console.log(greeting + name + "!");
}
displayGreeting("Jeff");

/*
  1. Create a function called returnGreeting that accepts a name as the argument
  2. Create a variable inside of returnGreeting called 'greeting'
  3. Compute a greeting by using the name argument and something like 'Hello NAME, how are you doing?'
  4. Return the greeting.
  5. Call displayGreeting and pass in your name
  Now if we call this, we won't get anything in the console. The reason is that we are returning the greeting
  instead of using console.log.
  6. Create a new variable OUTSIDE of the displayGreeting function and name it ourGreeting and set it equal
  to our function displayGreeting('Your Name');
  7. Output ourGreeting using console.log.
  You should now be able to see the greeting in the console.
  Think about what is happening here and we will discuss in class.
*/
function returnGreeting(name) {
    var greeting = "What's up " + name + "?";
    return greeting;
}
returnGreeting("Chuck");
var ourGreeting = returnGreeting("Chuck");
console.log(ourGreeting);

/*
  isZero
  1. Create a function called isZero that takes 1 argument called number.
  2. Make the function return true if the number is equal to zero.
  3. Make the function return false if the number is not equal to zero.
  isString
  1. Create a function called isString that takes 1 argument called varToCheck
  2. Make the function return true if the argument is a string
  3. Make the function return false if the argument is not a string
*/
function isZero(number) {
    if (number === 0) {
        return true;
    } else {return false;}
}
isZero(9);
function isString(varToCheck) {

    if (typeof(varToCheck) === "string") {
        return true;
    } else {return false;}
}
isString("The dog barked");


/*
  Mini Project
  Use what we've covered so far in class to make an imaginary flight booking service. There are going
  to be other ways to write this in the future and we will revisit this project as we learn new
  features of the Javascript language.
  We now are the owners of a new commerical flight school that offers special flights between
  Reno and Las Vegas and vice versa. We have 1 price for each direction and we'd like to be able
  to easily let customers book a flight.
  1. Create a function called bookFlight that will calculate the price of flights between two cities
  2. This function support all of the following:
    [ ] Two arguments: one for the departing city and one for the destination city
    [ ] Store two variables in the function: price and bookingStatus. 'bookingStatus'
        will be a string that gives us a sense of what is happening in our booking. For example,
        'Flight booked from Las Vegas to Reno for $99.'

    [ ] Only allow flights to be booked from Reno and Las Vegas, in either direction but use their airport designations (RNO and LAS).
    [ ] If the flight is from Reno to Las Vegas, the price is $99.00.
    [ ] If the flight is from Las Vegas to Reno, the price is $79.00.
    [ ] Display a message that a destination or departing city is not supported if the cities are neither
        'Reno' or 'Las Vegas'
    [ ] If we don't support a city, the price will be 0.00.
    [ ] Have the function return the price of the flight
    [ ] Bonus: Support both the airport designation (RNO and LAS) as well as "Las Vegas" and "Reno"
*/

function bookFlight(departing, destination) {
        var price;
        var bookingStatus;
        var rno = "RNO";
        var reno = "Reno";
        var las = "LAS";
        var lasVegas = "Las Vegas";
        if ((departing === rno || departing === reno) && (destination === las || destination === lasVegas)) {
            price = 99.00;
        } else if ((departing === las || departing === lasVegas) && (destination === rno || destination === reno)) {
            price = 79.00;
        } else {
            console.log("We do not service " + departing  + " or " + destination);
            return 0.00;
        }
        return price;
}


console.log('Test for Las Vegas -> Reno: ' + (bookFlight('LAS', 'RNO') === 79.00));
console.log('Test for Reno -> Las Vegas: ' + (bookFlight('RNO', 'LAS') === 99.00));
console.log('Test for Reno -> Boise: ' + (bookFlight('RNO', 'BOI') === 0.00));
console.log('Test for Boise -> Reno: ' + (bookFlight('BOI', 'LAS') === 0.00));
console.log('Test for San Francisco -> New York City: ' + (bookFlight('SFO', 'NYC') === 0.00));
