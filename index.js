function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i=0, i < katzDeliLine.length, i++) {
      line.push([i+1] + "." + katzDeliLine[i])
      return "The line is currently: " + line;
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Now serving " + katzDeliLine.shift + ".";
  }
}

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}
