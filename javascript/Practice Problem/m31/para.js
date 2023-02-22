// Practice Problem 1
// Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.
// ------
// 1.
const multiplyFuntion = (a, b, c) => a * b * c;
const result = multiplyFuntion(5, 2, 5);
console.log(result);

// 2
// Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.
const threeLin = `I am a web developer.
I love to code.
I love to eat biryani.
`;
console.log(threeLin);

// 3) Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

const defaultParamiterFuntion = (a, b = 20) => a + b;
console.log(defaultParamiterFuntion(5));

//  Practice Problem 2

// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends

// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result

// // Print the result./

const arayFriendsFuntion = (arayFriends) => {
  let newAray = [];
  for (const friends of arayFriends) {
    const friendsLength = friends.length;
    if (friendsLength % 2 == 0) {
      newAray.push(friends);
    }
  }
  return newAray;
};

const arayFriends = [
  "redowan",
  "sajeeb",
  "phero7",
  "programing7",
  "coder",
  "help",
  "bd1",
  "go",
  "bro",
];
console.log(arayFriendsFuntion(arayFriends));

// Practice Problem 3
// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

const sumSquarNumber = (numbers) => {
  const numberLnts = numbers.length;
  let sum = 0;
  for (const number of numbers) {
    const squared = Math.pow(number, 2);
    sum = squared + sum;
  }
  return sum / numberLnts;
};
const number = [5, 5, 5, 8, 58];
console.log(sumSquarNumber(number));

// ----------------------------------------
// Practice Problem 4
// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
// Print the result.

// -----------
const arayFunction = (a, b) => {
  const numberComind1 = [...a, ...b];
  const maximum = Math.max(...numberComind1);
  return maximum;
};
const arrayNumber1 = [1, 5, 9, 8, 9, 7, 9, 7, 9, 60];
const arrayNumber2 = [1, 5, 9, 8, 9, 500, 7, 9, 45, 50];
console.log(arayFunction(arrayNumber1, arrayNumber2));
// ----------------------------------------------------------------end
