alert("Welcome to JAVASCRIPT")

alert("We will give the secret message")

alert("But only if you're the spy and you pass my verification test")

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
    var con = prompt("Do you know how to access console? (y/n)")
    if(con === "y") {
        alert("Wow... You're a JavaScript Pro")
        console.log("The secret message : THE MAGIC IS SELF BELIEF");
    }
    else {
        alert("You need to study some more JavaScript")
        alert("Since you're verified as the Spy, the secret message is")
        alert("THE MAGIC IS IN SELF BELIEF")
    }
} else {
    alert("You are not the Spy")
    alert("Go study Javascript")
    console.log("You're a Fake Spy");
}