// Gets the input file's contents
function getInput(): string {
  const fs = require("fs");
  var inputContent = fs.readFileSync(
    ".\\Task 2. Input (1).txt",
    "utf-8",
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
  return inputContent; // returns input file contents
}
// Checks if the character is upperCase
function isUpperCase(char: string): boolean {
  return char === char.toUpperCase();
}
// Subtracts the unwanted pair of characters
function removeByIndex(str: string, index: number): string {
  if (index === 0) {
    return str.slice(2);
  } else {
    return str.substring(0, index) + str.substring(index + 2, str.length);
  }
}
// Finds how many units of polymer remain after reaction
function findUnits() {
  try {
    var input: string = getInput();
    var count = 0; // count how many reactions occured
    for (let index = 0; index < input.length; index++) {
      // if reaction occurs at index 0 or 1, the index will be negative
      if (index < 0 && input.length > 0) {
        index = 0;
      }
      // Check if it's the last index.
      if (index === input.length - 1) {
        break;
      } else {
        // Adjacent characters
        const first = input[index];
        const second = input[index + 1];
        // Check if characters match
        if (first.toLowerCase() === second.toLowerCase()) {
          // Check character polarity
          const UpperFirst = isUpperCase(first);
          const UpperSecond = isUpperCase(second);
          // If only one of them are uppercase, reaction occurs
          if (
            (UpperFirst && UpperSecond === false) ||
            (UpperFirst === false && UpperSecond)
          ) {
            input = removeByIndex(input, index);
            count++;
            index = index - 2; // set loop to -2 positions from the beginning to find newly formed polarities
          }
        }
      }
    }
    console.log(
      "Polarity units remaining:",
      input.length,
      "\nNumber of reactions occured: ",
      count
    );
  } catch (error) {
    console.log(error);
  }
}
findUnits();
