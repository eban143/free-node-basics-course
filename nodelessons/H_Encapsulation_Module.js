// In the previous lesson we abstracted the speed calculation into a
// separate function. We can take this one step further and create a
// module with speed calculator function within it

// Anything that doesn't live inside module.exports is local in scope
// to this file

var privateMesage = "Pick up dry cleaning";

function privateFunction(){
  console.log("Pick up groceries");
};

// We use the keywords module.exports to export an object which
// contains the function we want to encapsulate
module.exports = {

  // We declare our function just like any other object property
  "calculateSpeed" : function(distance, time){
    return distance / time;
  },

  // Because we are exporting an Object we can declare what we like
  // in this object for future use
  "message" : "You should never speed!"

}