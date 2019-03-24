function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}

var uppercase = "HELLO!"

function sayHiToGrandma(uppercase) {
  if (uppercase.toUpperCase() === uppercase) {
  return ("YES INDEED!")
} 
}

var lowercase = "hello!"

function sayHiToGrandma(lowercase) {
  if (lowercase.toLowerCase() === lowercase) {
  return ("I can't hear you!")
} 
}
