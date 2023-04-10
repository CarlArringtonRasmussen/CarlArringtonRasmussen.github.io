var userName = window.prompt("Enter your name: ");

// use document.getElementById().innerHTML to modify content in a page
// that is referenced by an id with a specific name
document.getElementById("name").innerHTML = "<b>Your Name: </b>" + userName;

var courseName = window.prompt("What course are you in? ");

document.getElementById("currentCourse").innerHTML = "<b>Current Course: </b>" + courseName;

var length = window.prompt("Enter the length of the side of a square (in inches): ");
var sqArea = parseInt(length) * parseInt(length);

document.getElementById("area").innerHTML = "<b>Side Length: </b>" + length +
                                            " inches <br>" +
                                            "<b>Area: </b>"+ sqArea + " sq. inches"; 