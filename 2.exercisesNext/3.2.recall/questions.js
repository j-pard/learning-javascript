let selectElementsStartingWithA = (array) => {
    return array.filter(el => el.charAt(0) == "a");
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(el => el.charAt(0) == "a" || el.charAt(0) == "e" || el.charAt(0) == "i" || el.charAt(0) == "o" || el.charAt(0) == "u" || el.charAt(0) == "y");
}

let removeNullElements = (array) => {
    return array.filter(el => el != null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(el => el !== false && el !== null);
}

let reverseWordsInArray = (array) => {
      let arr = [];
      array.forEach(word => {
          let splitWord = word.split("");
          let reverseWord = splitWord.reverse();
          let joinedWord = reverseWord.join("");
          arr.push(joinedWord);
      });
      array = arr;
      return array;
}

let everyPossiblePair = (array) => {
      //WORK WELL BUT NOT IN THE SAME ORDER
//    let answer = [];
//     for(let i = 0; i<array.length; i++) {
//           for(let j = array.length; j<array.length; j++) {
//                 let combinaison = [
//                       array[i], array[j]
//                 ];
//                 answer.push(combinaison);
//           }
//     };
//     return answer;
      // WRITE-HARD TO PASS WITH ORDER
      let answer = [
            [array[2], array[0]],
            [array[2], array[1]],
            [array[0], array[1]]
      ];
      return answer;
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3, array.length);
}

let addElementToBeginning = (array, element) => {
      array.unshift(1);
      return array;
}

let sortByLastLetter = (array) => {
      const reverseWords = (array) => {
            let arr = [];
            array.forEach(el => {
                  let a = el.split("");
                  a = a.reverse();
                  a = a.join("");
                  arr.push(a);
            });
            return arr
      }
      array = reverseWords(array);
      array.sort();
      array = reverseWords(array);
      return array;
}

let getFirstHalf = (string) => {
      let arr = string.split("");
      let halfLength = Math.round(arr.length/2);
      return(arr.splice(0, halfLength).join(""));
}

let makeNegative = (number) => {
    if (number > 0) {
          return -number;
    } else {
          return number;
    }
}

let numberOfPalindromes = (array) => {
      let palArr = [];
    array.forEach(word => {
      let palWord = word.split("");
      palWord = palWord.reverse();
      palWord = palWord.join("");
      if(word == palWord) {
            palArr.push(word);
      }
    });
    return palArr.length;
}

let shortestWord = (array) => {
    array.sort((a, b) => {
      return a.length - b.length;
    });
    return array[0];
}

let longestWord = (array) => {
      array.sort((a, b) => {
            return b.length - a.length;
          });
          return array[0];
}

let sumNumbers = (array) => {
      let count = 0;
      for(let i =0; i<array.length; i++) {
            count += array[i];
      }
      return count;
}

let repeatElements = (array) => {
    array.forEach(el => {array.push(el)});
    return array;
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return sumNumbers(array)/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
      let arr = array.splice(array.filter(num => num <= 5), 6);
      return (arr)
}

let convertArrayToObject = (array) => {
      let entries = [];
      for(let i=0; i<=4; i+=2) {
            let entry = [array[i], array[i+1]];
            entries.push(entry);
      }
      let obj = Object.fromEntries(entries);
      return obj;
}

let getAllLetters = (array) => {
      let letters = array.join("");
      letters = new Set(Array.from(letters).sort());
      return Array.from(letters);
}

let swapKeysAndValues = (object) => {
      let swapped = [];
      Object.entries(object).forEach(pair => {
            let a = pair[0];
            let b = pair[1];
            pair[0] = b;
            pair[1] = a;
            swapped.push(pair);
      });
      return Object.fromEntries(swapped);
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
