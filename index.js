function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function sayHiToGrandma(string) {
  return string.toLowerCase()
}

var sayHi = "HELLO!"
if (sayHi.toUpperCase() === sayHi) {
  console.log("YES INDEED!")
} else if (sayHi.toLowerCase === sayHi) {
  console.log("")
} else {
  console.log("Reading newspaper.")
}
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase
var dog = "thirsty"
 
if ( === "hungry") {
  console.log("Refilling food bowl.")
} else if (dog === "thirsty") {
  console.log("Refilling water bowl.")
} else {
  console.log("Reading newspaper.")
}