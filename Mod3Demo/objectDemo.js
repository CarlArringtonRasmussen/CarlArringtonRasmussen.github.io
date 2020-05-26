// a JS object that defines information for a movie
var movie = {
	name: "Star Wars",
	year: 1977,
	rating: 8.5
};

// JS allows for value lookup via dot notation
console.log(movie.name);
console.log(movie.year);
console.log(movie.rating);

// display the entire object
//console.log(movie);

// add another attribute and value to the onject
movie.director = "Steven Spielberg";

// delete an attribute and value
delete movie.rating;

// display the updated movie object
console.log(movie);

// Built-in object methods in JavaScript
// An array of objects
var people = {
  mom: "wilma flintstone",
  dad: "fred flintstone",
  daughter: "pebbles",
  son: "bambam"
};

// Display the entire object, both keys and values
console.log(people);

// Display only the keys of the object
console.log(Object.keys(people));

// Display only the values of the object
console.log(Object.values(people));

// Display a key-value pair held in an array
console.log(Object.entries(people));