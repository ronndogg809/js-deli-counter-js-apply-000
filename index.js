var katzDeli = [];
var x = 0
function takeANumber(katzDeliLine){
  x++; 
  katzDeliLine.push(x);
  
  return ` Welcome. You're ticket number # ${x}.`; 
}

// takeANumber(katzDeliLine) => "Welcome. You're ticket number #1" [1]
// takeANumber(katzDeliLine) => "Welcome. You're ticket nubmer #2" [1,2]

// nowServing(katzDeliLine) => [2]
// nowServing(katzDeliLine) => []

// takeANumber(katzDeliLine) => "Welcome. You're ticket number #3" [3]

function takeANumber(katzDeliLine, name){
katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length === 0){
  return `There is nobody waiting to be served!`;
  } else {
  return `Currently serving ${katzDeliLine.shift()}.`; 
}
}

function currentLine(katzDeliLine){
  var array = [];
  for (let i=0; i < katzDeliLine.length; i++){
array.push(` ${i+1}. ${katzDeliLine[i]}`)
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else { 
    return `The line is currently:${array}`;
}
}