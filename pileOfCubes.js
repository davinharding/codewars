// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

//Define function findNb
function findNb(m) {
  //Initialize x as 0.  x is going to hold the running volume of the cubes
  let x = 0
  //Initialize n as 0.  n is going to store our base as we increment up
  let n = 0
  //Loop through while m>x
  while (m > x) {
    //Add n+1^3 to x.  This will start as 1 since we initialized at 0.
    x += Math.pow(n + 1, 3);
    //Increment n up by 1
    n += 1
  }
  //Check to see if x, the sume of the cubes volume is equal to m
  if (x === m) {
    //If true, return the incremented base
    return n
    //If false
  } else {
    //Return -1
    return (-1);
  }
}