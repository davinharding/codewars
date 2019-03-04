//The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

//What if the string is empty ? Then the result should be empty object literal { }

function count (string) {  
  // Declare Obj
    let obj = {};
    //Loop through string length number of times
    for(let i=0; i<string.length; i++){
    //Find or create key for each character in the string, if it doesn't already exist, set value to 1
    //If it does exist, add 1 to the current value
      obj[string[i].toLowerCase()] = obj[string[i].toLowerCase()] + 1 || 1;
      }
    //return the completed obj
    return obj;
}