 $("#main").append("Dennis Mullen"); //Adds my name to the div with id of 'main' in the HTML
 var awesomeThoughts = "Dennis is AWESOME!"; // Just practice setting variables
 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN") //using .replace
 console.log(awesomeThoughts); //console.log good for testing via dev tools in browser
 console.log(funThoughts);

var name = "Dennis Mullen";
var role = "Web Developer"
var formattedName = HTMLheaderName.replace("%data%", name); //supplies data to varaibles in helper.js
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole); //adds data to html - prepend puts it first in the element
$("#header").prepend(formattedName); // append puts it last, w/c is why you put them in reverse order here.

var myArray = ["Dennis", "Cindy", "Kiri", "BJ"];
console.log(myArray.length)  //counts the items in the array
console.log('Mullen'.toUpperCase()); //print this str as uppercase but doesn't change the original string
console.log(myArray[2].toUpperCase()); //prins the 2-index of myArray as uppercase

var mullen="Mullen";
var mullen_caps = mullen.toUpperCase();
console.log(mullen, mullen_caps);

//---------------------------

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {  //the var name is passed in here when the function is run from the console log, below
    var finalName = oldName;
    var names = oldName.split(" "); //splits str at ' ' into an array containing the first and last names as separate elements
    names[1] = names[1].toUpperCase(); //changes the name at index-1 to uppercase
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    	//slices off the fist letter, capitalizes it, adds it to the second letter on (making them lowercase)
    console.log(names);  //to check where we are
    finalName = names.join(" "); //turns the array back into a str joined with ' '

    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

// ------------------------------------------

var sampleArray = [0,0,7];

    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
function incrementLastArrayElement(_array)  { //why the underscore? Anyway, puts sampleArray in here
        var newArray = [];  //creates an empty array
        newArray = _array.slice(0); // copies the original array; why is slice needed? see a simplier version below
        var lastNumber = newArray.pop(); //pop removes the last element and it is assigned here to lastNumber
        newArray.push(lastNumber + 1)    //push does the opposite; here lastNumber +1 is added to NewArray
        return newArray;;
}
    
//slice(4,7) takes a section of a str or array - starts at index-4, goes up to but doesn't include 7)

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

//--------------

var sampleArray = [0,0,8];

    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
function incrementLastArrayElement(_array)  { //why the underscore? Anyway, puts sampleArray in here
        var newArray = _array;  //creates an empty array
        var lastNumber = newArray.pop(); //pop removes the last element and it is assigned here to lastNumber
        newArray.push(lastNumber + 1)    //push does the opposite; here lastNumber +1 is added to NewArray
        return newArray;;
}
    


// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

//--------------------------------------------------------------

//here comes an object with all info added in object literal notation
// curly brackets make an object
var bio = {
    "name" : name, //draw from variables at top
    "role" : role,
    "contacts" : {
        "email" : "dkmullen@gmail.com",
        "SMS" : "(865) 555-5432",
        "twitter" : "@dkmullen",
        "location" : "East Tennessee"
    },
    "picture" : "http://dkmullen.com/pix/gg.jpg",
    "welcome" : "Thank you for looking at my resume.",
    "skills" : ["HTML/CSS", "JavaScript & JQuery", "MS Office", "Teaching", "Adminisration"]
}

//next, an object added to with dot notation
var work = {}; //first the empty object

work.current_position = "Senior Minister"; //then, add info with dot notation
work.employer = "MHCC";
work.years_worked = "1988 - Present";
work.city = "Kingston, TN  USA";

// ...and an object added to with bracket notation
var schooling = {}; //first the empty object

schooling["school"] = "Johnson University"; //then add info with bracket notation
schooling["years_attended"] = "1983-87";
schooling["city"] = "Knoxville, TN USA";

var education = {
    "schools": [
    {
        "name": "Johnson University",
        "city": "Knoxville, TN  USA",
        "degree" : "BA",
        "major" : "Biblical Studies",
        "grad_year" : "1987"
    },
    {
        "name": "Johnson University",
        "city": "Knoxville, TN  USA",
        "degree" : "MA",
        "major" : "New Testament Studies",
        "grad_year" : "1993"
    }
    ]
}


$("#main").append(bio.name);  //Adds my name to the div with id of 'main' in the HTML
$("#main").append(bio.role); 
$("#main").append(bio.picture); 
$("#main").append(bio.welcome); 
$("#main").append(bio["skills"]); // just using bracket notation for fun
$("#main").append(bio.contacts.email); //all others are in dot notation
$("#main").append(bio.contacts.SMS);   //you can use either
$("#main").append(bio.contacts.twitter); 
$("#main").append(bio.contacts.location); 
$("#main").append(work.current_position); 
$("#main").append(schooling.school); 