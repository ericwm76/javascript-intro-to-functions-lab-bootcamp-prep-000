function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function sayHiToGrandma(string) {
  return string.toLowerCase()
}

var uppercase = "HELLO!"
var lowercase = "hello"
var love = "I love you, Grandma"
 
if (uppercase.toUpperCase() === uppercase) {
  console.log("YES INDEED!")
} else if (lowercase.toLowerCase() === lowercase) {
  console.log("I can't hear you!")
} else if (love === "I love you, Grandma.") {
  console.log("I love you too.")
}
sayHiToGrandma("HELLO!")
sayHiToGrandma("hello")
sayHiToGrandma("I love you, Grandma.")
sayHiToGrandma('HELLO!')
sayHiToGrandma('hello')
sayHiToGrandma('I love you, Grandma.')