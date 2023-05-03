/*
    Snoopy info
    Name: Snoopy
    Breed:	Beagle	
    Show: Peanuts
    OtherNotes:	Peanuts and other prime-time animated TV specials based upon the comic strip Peanuts.
*/

// Part 1 - Create an Object Literal - JSON
var myDog = {
    "name": "Snoopy",
    "breed": "beagle",
    "tvShow": "Peanuts",
    "note": "Peanuts and other prime-time animated TV specials based upon the comic strip Peanuts.",
    "mySound": "I am not scary",
    "myGreeting": function(){
        return `<p>Hello, my name is ${this.name}, when I bark ${this.mySound}. <br>
        I starred in the TV Show ${this.tvShow}. <br>
        My character is a ${this.breed}. In the show, I am ${this.note}</p>`
    }
};

// add the output of myGreeting from the object literal to the output1 id in the HTML
document.getElementById("output1").innerHTML = myDog.myGreeting();

// Part 2 - create an instance of a dog object using a constructor
// first, make a class definition for a dog

class dog{
    // define the constructor
    constructor(name = "",
    breed = "", tvShow = "", mySound = "", note = "", canTalk = false)
    {
        this.name = name;
        this.breed = breed;
        this.tvShow = tvShow;
        this.mySound = mySound;
        this.note = note;
        this.canTalk = canTalk;
    }
    
    // define the myGreeting() function
    myGreeting()
    {
        // tell whether or not the dog can talk based on the value of the canTalk
        // property
        var talkString = "";

        if(this.canTalk == true)
            talkString = "I can talk.";
        else
            talkString = "I cannot talk.";

        // return the paragraph text
        return `<p>Hello, my name is ${this.name}, when I bark ${this.mySound}. <br>
            I starred in the TV Show ${this.tvShow}. <br>
            My character is a ${this.breed}. In the show, I am ${this.note} <br>
            ${talkString}</p>`
    }
}

// create an instance with no values passed
// let myDog1 = new dog(); // this instance initializes the values with defaults

// console.log()
// console.log(myDog1.canTalk); // displays a value of false - default property

// create an instance of the dog class with arguments passed to the constructor
let myDogConst = new dog("Snoopy", "beagle", "Peanuts", "I am not scary", "Charlie Brown's pet who appears in movies and other prime-time animated TV specials based upon the comic strip Peanuts", false);

// add the output of myGreeting() to the output2 id in the HTML page
document.getElementById("output2").innerHTML = myDogConst.myGreeting();