// input: number
// output: the number of as few conis as possible

// wrtie a function that takes a number and returns another number

//1. define different kinds of coins' value.
// 2. to find the largest value of the coins.
// 3. divide the input number by the largest value to get the number of the largest value coins
// 4. to find out the left amount-remainder by using '%',
// 5. find out the largest value coin smaller than the remainder,
//6. recursively finding about the numbers of the largest value coin.
//7. add all the numbers together.

// how to use debug VSC in the Chrome
// 1. node--inspect fileName
// 2. node--inspect - brk fileName

const findAsFewCoins = number => {
  const coins = [25, 10, 5, 1];
  let remainder = number;
  let result = 0;

  for (let i of coins) {
    if (remainder === 0) return result;
    if (i <= remainder) {
      result += Math.floor(remainder / i);
      remainder = remainder % i;
    }
  }

  return result;
};

console.log(findAsFewCoins(146));
