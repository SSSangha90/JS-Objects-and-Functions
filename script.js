// Function constructor 

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











