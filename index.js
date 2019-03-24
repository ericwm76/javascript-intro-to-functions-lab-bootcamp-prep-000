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
  console.log("I can't hear you!")
} else if (sayHi === "I love you, Grandma.") {
  console.log("I love you too.")
}
sayHiToGrandma('HELLO!')
sayHiToGrandma('hello')
sayHiToGrandma('I love you, Grandma.')