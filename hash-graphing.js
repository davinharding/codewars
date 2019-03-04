function firstNonRepeatingLetter (str) {
  let obj = {};
  for(let i=0; i<str.length; i++){
    obj[str[i].toLowerCase()] = obj[str[i].toLowerCase()] + 1 || 1;
  }
  for(let x in obj){
    if (obj[x] === 1) {
      return str[str.toLowerCase().indexOf(x)];
    }
  } 
  return '';
}