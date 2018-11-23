// Function constructor 
/*
// Object literal
var john = {
	name: "John",
	dateOfBirth: 1990,
	job: "Teacher"
};


//Function constructor, the blueprint
// They begin with a capital letter - JS Convention
var Person = function(name, dateOfBirth, job){
	this.name = name;
	this.dateOfBirth = dateOfBirth;
	this.job = job;
}

//How to create new objects from the constructor, known as instantiation
var john = new Person("John", 1990, "Teacher");

// new operator, an empty object is created, then the constructor - Person, is called. Then you input the this.objects in to the parameters seperated by commas. 

// Now let's add inheritance to the game
//Just added a new object to the person.prototype and initiated the function of what calculateAge is 
Person.prototype.calculateAge = function(){
		console.log(2018 - this.dateOfBirth);
	}

Person.prototype.lastName = "Smith";

var sukh = new Person("Sukh", 1990, "Developer");
var jane = new Person("Jane", 1968, "Designer");
var mark = new Person("Mark", 1938, "Retired");

john.calculateAge();
jane.calculateAge();
sukh.calculateAge();

console.log(mark.lastName);
console.log(jane.lastName);

// Practising with my own prototypes and constructors

//Constructor
var Footballer = function (name, age, position, club){
	this.name = name;
	this.age = age;
	this.position = position;
	this.club = club;
}

//Initiating each object within the constructor object
var RVP = new Footballer ("Robin Van Persie", 36, "Striker", "PSV");
var Pogs = new Footballer ("Paul Pogba", 25, "Midfield", "Man Utd");
var Hazard = new Footballer ("Eden Hazard", 28, "Midfield", "Chelsea");

console.log(Pogs.club);

//using the porotype to add an object
Footballer.prototype.league = "Premier League";

//logging the object
console.log(RVP.league);

*/


// Object.create
/*
var personProto = {
	calculateAge: function(){
		console.log(2018 - this.dateOfBirth);
	}
};

var john = Object.create(personProto);
john.name = "John";
john.dateOfBirth = 1990;
john.job = "Teacher";

var jane = Object.create(personProto, {
	name: { value: "Jane"},
	dateOfBirth: { value: 1968 },
	job: { value: "designer" }
});

*/


// Primitives vs objects
/*
var a = 23;
var b = a;
a = 46; 
console.log(a);
console.log(b);

// each variable hold their own copy of the data, they don't reference. This is with primitive variables

//Primitives
var obj1 = {
	name: "John",
	age: 28
};

//Objects
var obj2 = obj1;

obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// with objects, the age is the same as we have not created a new object, but rather a reference at this case - which points to the exact same object in memory. It's the exact same object.

//functions
var age = 28;
var obj = {
	name: "Jonas",
	city: "Lisbon"
};

function change(a, b){
	a = 30;
	b.city = "San Francisco"
}

change(age, obj);

console.log(age);
console.log(obj.city);

// The age (primitive) stays the same, a simply copy is created. The object has changed, because we pass a reference that points to the object.

// Careful with these, can lead to unexpected bugs and strange results - recap!

*/

/*
// Passing functions as arguments

var years = [1990, 1965, 1972, 1943, 2009];

function arrayCalc(arr, fn){
	var arrRes = [];
	for (var i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2018 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
	return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
}

console.log(ages);

var rates = arrayCalc(ages, maxHeartRate);

console.log(rates);

var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

*/

// Functions returning functions

// cereating a function that returns different interview questions for different jobs

function interviewQuestion(job){
	if (job === "designer"){
		return function(name){
		console.log(name + ", can you please explain what UX design is?");
	}
	} else if (job === "teacher") {
		return function(name) {
			console.log("What subject do you teach? " + name)
		}
	}
	else {
		return function(name){
			console.log("Hello " + name + " what do you do?")
		}
	}
}

// a function, essentially returning functions 
// used anonymous functions here within an if/else staement.

//now declared variables storing the function with the job role
var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

// calling the function with the name argument passed in
teacherQuestion("John");
designerQuestion("Amy");

var unknownRole = interviewQuestion("footballer");
unknownRole("Mark");

interviewQuestion("designer")("Sukh");

// Have a go at writing a couple of my own, then move on to Codier for  challenge. 

// Then Treehouse






































