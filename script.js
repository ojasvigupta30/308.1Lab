//Part 1

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`Is the sum 50: `, isSum50);
console.log("\n");

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`Are atleast 2 numbers odd: `, isTwoOdd);
console.log("\n");

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(`Are any number larger than 25: `, isOver25);
console.log("\n");

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`Are all numbers unique: `, isUnique);
console.log("\n");

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;


// Finally, log the results.
console.log(`Are all the results true: `, isValid);
console.log("\n");

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// Check if all numbers are divisible by 5. Cache the result in a variable.
const divBy5 = (n1 % 5 + n2 % 5 + n3 % 5 + n4 % 5) == 0;
console.log(`Are all numbers divisible by 5: `, divBy5);
console.log("\n");

// Check if the first number is larger than the last. Cache the result in a variable.
const firLarLas = n1 > n4;
console.log(`Is first number larger than the last number: `, firLarLas);
console.log("\n");

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
let a;
a = n2 - n1;
// Multiply the result by the third number.
a = a * n3;
// Find the remainder of dividing the result by the fourth number.
a = a % n4;
//Displaying above result
console.log(`Result is: `, a);
console.log("\n");


// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(`All numbers are below 25: `, isUnder25);
console.log("\n");

//can also check for isUnder25 as follows
const under25 = (n1+n2+n3+n4) < 25*4;
console.log(`Are all numbers under 25: `, under25);
console.log("\n");




                                      //PART 2

//   You are planning a cross-country road trip!
//   The distance of the trip, in total, is 1,500 miles.
//   Your car’s fuel efficiency is as follows:
//   At 55 miles per hour, you get 30 miles per gallon.
//   At 60 miles per hour, you get 28 miles per gallon.
//   At 75 miles per hour, you get 23 miles per gallon.
//   You have a fuel budget of $175.
//   The average cost of fuel is $3 per gallon.
//   Set up a program to answer the following questions:
    //   How many gallons of fuel will you need for the entire trip?
    //   Will your budget be enough to cover the fuel expense?
    //   How long will the trip take, in hours?
    //   Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
    //   Log the results of your calculations using string concatenation or template literals.

const totalDis = 1500;
const costPerGallon = 3;
const totalBudget = 175;

//Total gallons available for the trip
let availGallon = totalBudget/costPerGallon;
console.log(`Total fuel available for the trip is ${availGallon} gallons. \n\n`);

// Fuel efficiency @ 55 miles/hr --> 30 miles/gallon
let disTravel1 = availGallon*30;
console.log(`Maximum distance traveled @ 55 mi/hr ${disTravel1} miles. \n`);
console.log(`Can the car cover total distance: `, disTravel1 >= totalDis);
console.log(`\nHours taken to reach destination: `, totalDis/55);
console.log('\n\n');


// Fuel efficiency @ 60 miles/hr --> 28 miles/gallon
let disTravel2 = availGallon*28;
console.log(`Maximum distance traveled @ 60 mi/hr ${disTravel2} miles. \n`);
console.log(`Can the car cover total distance: `, disTravel2 >= totalDis);
console.log(`\nHours taken to reach destination: `, totalDis/60);
console.log('\n\n');


// Fuel efficiency @ 75 miles/hr --> 23 miles/gallon
let disTravel3 = availGallon*23;
console.log(`Maximum distance traveled @ 75 mi/hr ${disTravel3} miles. \n`);
console.log(`Can the car cover total distance: `, disTravel3 >= totalDis);
console.log(`\nHours taken to reach destination: `, totalDis/75);
console.log('\n\n');

//Comparison of all the above calculations in a concatenated string/template literals
console.log(`The total distance of the trip is ${totalDis} 
    and the total budget of the trip is $${totalBudget}.
    Considering the cost of fuel at $3/gallon, we have calculated
    that the total fuel available for the trip is ${availGallon}.
    If we travel @ 55 mi/hr, we can travel the total distance of ${disTravel1}
    and reach our destination in ${totalDis/55} hours.
    If we travel @ 60 mi/hr, we can travel the total distance of ${disTravel2}
    and reach our destination in ${totalDis/60} hours.
    If we travel @ 75 mi/hr, we can travel the total distance of ${disTravel3} 
    and reach our destination in ${totalDis/75} hours.
    But because ${disTravel3} is less than our total distance needed to be travelled,
    speeding @ 75 mi/hr is not within our budget.
    Thus, comparing all three, we can see that travelling @ 60 mi/hr is
    the best option as it falls under our budget and is quicker 
    than travelling @ 55 mi/hr.`);

