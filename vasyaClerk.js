// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine) {
  // let billCounter = {25: 0, 50: 0, 100: 0};
  // for (let i=0; i<peopleInLine.length; i++){
  //   if (peopleInLine[i] === 25){
  //     billCounter[25] = billCounter[25] + 1;
  //   }else if(peopleInLine[i] === 50) {
  //     billCounter[50] = billCounter[50] + 1;
  //   }else{
  //     billCounter[100] = billCounter[100] + 1;
  //   }
  //   console.log(billCounter)
  // }

  let bills = { 25: 0, 50: 0, 100: 0 };
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      bills[25] += 1;
    } else if (peopleInLine[i] === 50) {
      bills[50] += 1;
      if (bills[25] - 1 < 0) {
        // console.log(bills);
        return 'NO';
      } else {
        bills[25] -= 1;
      }
    } else {
      bills[100] = bills[100] + 1;
      if (bills[50] - 1 >= 0 && bills[25] >= 0) {
        bills[50] -= 1;
        bills[25] -= 1;
      } else if (bills[25] - 3 >= 0) {
        bills[25] -= 3;
      } else {
        // console.log(bills);
        return 'NO';
      }
    }
  }
  // console.log(bills)
  return 'YES';
}
