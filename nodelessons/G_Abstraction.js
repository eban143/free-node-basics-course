// Let's take this function as an example
// We will calculate Mark's speed and see if it was
// greater than thirty
function wasMarkSpeeding(){
  var distance  = 500;
  var time      = 10;
  var markSpeed = distance / time;

  if(markSpeed > 30){
    // Mark was speeding!
    return true;
  } else {
    // Mark was not speeding
    return false;
  }
}

console.log(wasMarkSpeeding());

// The function is only really interested in if markSpeed
// is over thirty so we can abstract the calculation of the
// the speed

// We can create a specific function that will divde
// distance by time and return the result
function calculateSpeed(distance, time){
  return distance / time;
}

// We can the refactor our original method to use the new
// abstracted function directly in our if statement. So
// now wasMarkSpeedingRefactored only cares about the speed
// value and not how it was calculated
function wasMarkSpeedingRefactored(){
    if(calculateSpeed(500, 10) > 30){
        return true;
    } else {
        return false;
    }
}

console.log(wasMarkSpeedingRefactored());