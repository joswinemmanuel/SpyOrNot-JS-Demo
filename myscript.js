alert("Welcome to JAVASCRIPT")

alert("We will give you a secret message")

alert("But only if you're a spy and you pass our spy verification test")

var spy = true

var spyFirstName = prompt("What's your first name?")
var spyLastName = prompt("What's your last name?")
if (spyFirstName[0] !== spyLastName[0]) {
    spy = false
    console.log("One done");
}

var spyAge = prompt("What's your age?")
if (!(spyAge > 20 && spyAge < 30)) {
    spy = false
}

var spyHeight = prompt("What's your height in cm?")
if (spyHeight < 170) {
    spy = false
}

var spyPet = prompt("What's your pet name?")
if (spyPet[spyPet.length - 1] !== "y") {
    spy = false
}

if (spy === true) {
    alert("You are the Spy")
    alert("Check the console for the secret message")
    console.log("The secret message : The magic is self belief");
} else {
    alert("You are not the Spy")
    alert("Go study Javascript")
    console.log("You're a Fake Spy");
}