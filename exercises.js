/*Hey Prepstars!!!  By now, you should have a good understanding of the basics of Javascript. 

The following exercises will be a good review of the materials we covered in class. Run node in your terminal to test your code.

Don't forget to commit and push your work after each completed exercise.

Now, unleash your coding beast!

/*1.  Variables with a String as their value.
Declare variables named yourName, neighborName, teacherName.  Console log each variable.*/
console.log("----1----");

var yourName = "J2";
var neighborName = "Ritsu";
var teacherName = "Vic";

console.log("yourName: ", yourName);
console.log("neighborName: ", neighborName);
console.log("teacherName: ", teacherName);

/*2. Variable with a Number as their value.
Declare variables named numberOfFloorsBurjKhalifa, TokyoOlympicsYear. Please assign the actual data for each variable.
Console log each variable.*/

console.log("----2----");

var numberOfFloorsBurjKhalifa = 163;
var TokyoOlympicsYear = 1964;

console.log("numberOfFloorsBurjKhalifa: ", numberOfFloorsBurjKhalifa);
console.log("TokyoOlympicsYear: ", TokyoOlympicsYear);

/*3. Variables with Boolean values
Declare variables named lovesPrepClass, eatsDonuts, drinksGin.  Console log each variable.*/
console.log("----3----");
var lovesPrepClass = true;
var eatsDonuts = true;
var drinksGin = false;

console.log("lovesPrepClass: " + lovesPrepClass);
console.log("eatsDonuts: ", eatsDonuts);
console.log("drinksGin: ", drinksGin);

/*4. Variable with Null values
Declare variables named completedCodingChallenge, traveledToSpace.  Console log each variable*/
console.log("----4----");
var completedCodingChallenge = null;
var traveledToSpace = null;
console.log("completedCodingChallenge: ", completedCodingChallenge);
console.log("traveledToSpace: ", traveledToSpace);


/*5.  Variables with Array for its value.
Declare a variable named japanPrefectures and assign the value of any 5 prefectures in Japan.
Console log the variable 
Console log the value at index 1.
Console log the value at index 3.*/
console.log("----5----");
var japanPrefectures = ["Hokkaido", "Aomori", "Iwate", "Miyagi", "Gunma"];
console.log("japanPrefectures: ", japanPrefectures);
console.log("japanPrefectures[1]: ", japanPrefectures[1]);
console.log("japanPrefectures[3]: ", japanPrefectures[3]);

/*6.  Variable with Array for its value.
Declare a variable named planets and assign the value of each planet in our solar system, in the order of distance from the sun.  
Console log the variable
Console log "Earth" using the index position
Console log "Uranus" using the index position*/
console.log("----6----");
var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
console.log("planets: ", planets);
console.log("planets[2]: ", planets[2]);
console.log("planets[6]: ", planets[6]);

/*7. Variables with Array for its value.
Declare a variable named india and assign the value of 3 popular tourist attractions.  
Console log the variable.*/
console.log("----7----");
var india = ["Taj Mahal", "Bollywood", "Bhangra"];
console.log("india: ", india);

/*8. Adding new elements to an array.
Add another popular tourist attraction to the india variable from position 1 of the index.
(hint, it is not the push() method). Console log the variable.*/
console.log("----8----");
india.unshift("Ganges");
console.log("india: ", india);

/*9. Removing the last element from an array.
Using the same india variable, remove the last element from the array. Console log the variable. */
console.log("----9----");
india.pop();
console.log("india: ", india);

/*10. Removing an element from an array into a new array. 
Removethe first two elements in the snacks array and return a new array.
Console log the new variable. */
console.log("----10----");
var snacks = ["peanut butter cup oreo", "birthday cake oreo", "banana split oreo", "watermelon oreo", "cookie dough oreo", "creamsicle oreo"];
snacks.slice(0,2);
console.log("snacks: ", snacks);

/*11. Declare two variables with names of your choosing and use the triple comparison operator (===) to compare:
a) two strings "Racecar" and "racecar"
b) a string and a number "three" and 3

console log each variable*/
console.log("----11----");
var Racecar = "Racecar";
var racecar = "racecar";

var three = "three";
var tree = 3;

console.log("Racacar === racecar: ", Racecar === racecar);
console.log("three === 3: ", three === tree);

/*12.  Declare a literal object named "hotel" with properties and values set to:

    name    => "Hilton"
    rooms   => 200
    pool    => true
    checkIn => null

 console log the object*/
console.log("----12----");

var hotel = {
  name: "Hilton",
  rooms: 200,
  pool: true,
  checkIn: null
};

console.log("hotel: ", hotel);

/*13.  Declare a literal object named "car" with properties and values set to:

    make  => "BMW"
    model => "X5"
    year  => 2015
    doors => 4

 console log the object*/
console.log("----13----");

var car = {
  make: "BMW",
  model: "X5",
  year: 2015,
  door: 4,
};

console.log("car: ", car);

/*14.  Declare a literal object named bigBox and set its value to be an empty object.

Add a property named size and set it to a random number value between 0 and 50 (hint, use Math.something...)
Add a property named color and set it to any color.
Add a property named contents and set it to be an empty array

console log the object*/
console.log("----14----");

var bigBox = {
  size: Math.floor(Math.random()*50),
  color: "red",
  contents: []
};

console.log("bigBox: ", bigBox);

/*15.  Declare a literal object named "colorMeBadd" with properties and values set to:

   iro        => [literal object]

                  akai      => 'red'
                  aoi       => 'blue'
                  midori    => 'green'
                  shiroi    => 'white'
                  pinku     => 'pink'
                  murasaki  => 'purple'

   isJapanese => true              

console log the object */ 
console.log("----15----");
/*16. As the general manager for the DevLeague Prep Beer Pong Team, your job is to select the starting players from the roster array. Create two variables, Ateam and Bteam and assign each an empty array. You will then assigned players that have an even number index position to the Ateam and odd number index position to the Bteam. Let the games begin! Console log the results.*/

var roster = ["Alex", "Laura", "Sami", "Jasmine", "Adam", "Dakota", "Jonathon", "Luther", "Kevin", "Vic"];
var Ateam = [];
var Bteam = [];

for(var i = 0; i<roster.length; i++){
  if(i%2 == 0){
    Ateam.push(roster[i]);
  } else{
    Bteam.push(roster[i]);
  }
}
console.log("----16----");
console.log("Ateam: ", Ateam);
console.log("Bteam: ", Bteam);


/*17. Using the japanPrefectures array you created in exercise 5, create a for loop that iterates through this array and console logs the following message:

"The location at i is:  ."  and append the value of i and the value stored within the Array at that index to this string.

i.e. "The locaton at 0 is Tokyo."*/
console.log("----17----");
for (var i = 0; i < japanPrefectures.length; i++){
  console.log("The location at "+ i + " is: " + japanPrefectures[i] + ".");
}


/*18. Declare a function named addUp.
This function will take a number parameter and add up all the numbers from 1 to that number.
The parameter will be any number from 1 to 88.*/
console.log("----18----");

function addUp(n){
  var answ = 0;
  for(var i = 1; i<= n; i++){
    answ+= i;
  }
  return answ;
}

console.log("addUp(Math.floor(Math.random()*87 + 1): ", addUp(Math.floor(Math.random()*87 + 1)));

/*19. Declare a variable named oddNumbers and assign it to an empty array
Use a for loop to add only odd numbers to an Array.  Add 30 odd numbers to the oddNumbers variable starting with the value of 1.*/
console.log("----19----");

var oddNumbers = [];

for(var i = 0; i < 31*2; i++){
  if(i%2 == 1){
    oddNumbers.push(i);
  }
}
console.log(oddNumbers);

/*20.  Declare a function named oldEnough.
This function takes in a number parameter age and returns a Boolean value true or false if the age is lower than the minimum legal drinking age in the Antigua. Invoke this function by passing in a number value.  Google search Antigua's minimum drinking age to confirm the number value.  Store the return value to a variable named drinkinAlready and console log this variable*/
console.log("----20----");
function oldEnough(age){
  return age >= 16;
}

var drinkinAlready = oldEnough(17);
console.log("drinkinAlready(17): ", drinkinAlready);

/*21. Declare a function named contentFiller which takes in a single parameter which will be an object.  Write a for loop that will put 5 random numbers between the values of 0 to 20 in the contents array in the bigBox object you created in exercise 14.  Console log the result.*/
console.log("----21----");
function contentFiller(obj){
  for (var i = 0; i < 5; i++){
    obj.contents.push(Math.floor(Math.random()*20));
  }
  return obj;
}

console.log(contentFiller(bigBox));


/*22.  Declare a function named firstReverse which takes a single parameter str.  This function will take a string parameter being passed in and return the string in reverse order.*/
console.log("----22----");
function firstReverse(str){
  var wurd = [];
  for(var i = 0; i<str.length; i++){
    wurd.unshift(str.charAt(i));
  }
  var answ = wurd.join("");
  return answ;
}
console.log("firstReverse('albatross'): ", firstReverse("albatross"));

/*23. Declare a function named letterCap which takes a single parameter str. This function will capitalize the first letter of the string you pass in to invoke the function. 
*/
console.log("----23----");

function letterCap(str){
  var answ = "";
  answ = str.charAt(0).toUpperCase() + str.substring(1,str.length);
  return answ;
}

console.log("letterCap(hello): ", letterCap("hello"));


/*24. Declare a function named longestWord which takes a single parameter str. This function will return the longest word in the string when you invoke this function.*/ 
console.log("----24----");

function longestWord(str){
  var arr = str.split(" ");
  var longest = "";
  for (var i = 0; i < arr.length; i++){
    if (arr[i].length > longest.length){
      longest = arr[i];
    }
  }
  return longest;
}

var quote = "It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.";

console.log("longestWord(quote): ", longestWord(quote));