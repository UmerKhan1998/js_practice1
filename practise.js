function repeatedCharFunction(str) {
  let charCount = {};
  for (let char of str.split(" ").join(""))
    charCount[char] = (charCount[char] || 0) + 1;
  return charCount;
}

console.log(repeatedCharFunction("muhammad umer khan"));

function missingNumberFucntion(arr) {
  let minVal = Math.min(...arr);
  let maxVal = Math.max(...arr);

  for (let i = minVal; i <= maxVal; i++) {
    if (!arr.includes(i)) return i;
  }
  return null;
}

console.log(missingNumberFucntion([1, 2, 5]));

function missingNumberFucntionSeries(arr) {
  let minVal = Math.min(...arr);
  let maxVal = Math.max(...arr);

  const finalArr = [];
  for (let i = minVal; i <= maxVal; i++) {
    if (!arr.includes(i)) finalArr.push(i);
  }
  return finalArr;
}

console.log(missingNumberFucntionSeries([1, 2, 3, 5]));

function findNonRepitingWords(str) {
  let counts = {};

  // for finding no. of counts
  for (let char of str?.split(" ").join(""))
    counts[char] = (counts[char] || 0) + 1;

  for (let char of str) if (counts[char] === 1) return char;

  return null;
  // return counts;
}

console.log(findNonRepitingWords("civic"));

const employee = [
  { name: "Umer", salary: 220000 },
  { name: "Wasiq", salary: 250000 },
  { name: "Saim", salary: 150000 },
];

function secondHighestSalry(arr) {
  return arr?.sort((a, b) => b?.salary - a?.salary)[1];
}

console.log(secondHighestSalry(employee));

function employeeAccSalary(arr) {
  return arr?.reduce((acc, sum) => acc + sum?.salary, 0);
}

console.log(employeeAccSalary(employee));

const cubeMatrix = [
  [1, 5, 9],
  [7, 3, -23],
  [12, 4, 45],
];

function diagonalMatrix(arr) {
  let lineardiagonalSum = 0;
  let linearReversediagonalSum = 0;

  for (let i = 0; i < arr?.length; i++) {
    lineardiagonalSum += arr[i][i];
    linearReversediagonalSum += arr[i][arr.length - 1 - i];
  }

  return Math.abs(lineardiagonalSum - linearReversediagonalSum);
}

console.log(diagonalMatrix(cubeMatrix));

let ar = [1, 2, 3, 4, 10, 11];

function simpleArrFunction(arr) {
  return arr?.reduce((sum, acc) => sum + acc, 0);
}

console.log(simpleArrFunction(ar));

let a = [17, 28, 30];
let b = [99, 16, 8];

function AliceBobFunc(a, b) {
  let aliceVariable = 0;
  let bobVariable = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aliceVariable++;
    } else if (a[i] < b[i]) {
      bobVariable++;
    }
  }

  return [aliceVariable, bobVariable];
}

console.log(AliceBobFunc(a, b));

const arr = [-4, 3, -9, 0, 4, 1];

function biffurcateCountsPlusMinus(arr) {
  let zeroCount = 0;
  let plusCount = 0;
  let minusCount = 0;

  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] > 0) {
      plusCount++;
    } else if (arr[i] < 0) {
      minusCount++;
    }
  }
  console.log((plusCount / arr?.length).toFixed(6));
  console.log((minusCount / arr?.length).toFixed(6));
  console.log((zeroCount / arr?.length).toFixed(6));
}

biffurcateCountsPlusMinus(arr);

function staircaseFunc(num) {
  for (let i = 0; i < num; i++) {
    let spacesVar = " ".repeat(num - i);
    let starVar = "*".repeat(i);
    console.log(spacesVar + starVar);
  }
}

staircaseFunc(6);

let sumArr = [7, 69, 2, 221, 8974];

function MinMaxSum(arr) {
  let total = arr?.reduce((sum, acc) => sum + acc, 0);
  let minVal = Math.min(...arr);
  let maxVal = Math.max(...arr);

  console.log(total - minVal, total - maxVal);
}

MinMaxSum(sumArr);

const candles = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
  // Write your code here
  let maxVal = Math.max(...candles);
  let counts = [];
  for (let i = 0; i < candles?.length; i++) {
    if (maxVal === candles[i]) {
      counts.push(candles[i]);
    }
  }

  return counts?.length;
}

birthdayCakeCandles(candles);

function timeConversion(s) {
  let period = s.slice(-2); // AM or PM
  let [hour, minute, second] = s.slice(0, -2).split(":");

  hour = parseInt(hour);

  if (period === "AM") {
    if (hour === 12) {
      hour = 0; // Midnight case
    }
  } else {
    // PM case
    if (hour !== 12) {
      hour += 12;
    }
  }

  // Format back to HH:MM:SS with leading zero if needed
  return `${hour.toString().padStart(2, "0")}:${minute}:${second}`;
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(3));

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));

const arrdup = [1, 2, 2, 3];

console.log([...new Set(arrdup)]);

let arrFlat = [1, [2, [3]]];
console.log(arrFlat?.flat(2));

const similarPattern = ["aba", "abba", "abbbc", "abcd"];

function similarPattern(arr) {
  let consistencyCount = 0;

  const pattern = arr?.map((item) => [...new Set(item)].join(""));

  for (items of pattern) {
    let count = pattern.filter((item) => item === items)?.length;
    if (count > consistencyCount) {
      consistencyCount = count;
    }
  }
  return consistencyCount;
}

console.log(similarPattern(arsimilarPatternr));
