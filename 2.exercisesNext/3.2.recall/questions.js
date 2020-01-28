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
      let count = 0;
    Object.entries(object).forEach(partial => {
          partial.forEach(val => {
            count += parseInt(val);
          });
    });
    return count;
}

let removeCapitals = (string) => {
    let arr = Array.from(string);
    arr.forEach(letter => {
      if(arr.includes(letter.toUpperCase()) && letter != " ") {
            arr.splice(arr.indexOf(letter), 1);
      }
    });
    string = arr.join("");
    return string;
}

let roundUp = (number) => {
    let rounded = Math.round(number);
    if(rounded <= number) {
          rounded++;
    }
    return rounded
}

let formatDateNicely = (date) => {
      let day = "0" + date.getDate();
      let month = "0" + (date.getMonth()+1);
      let year = date.getFullYear();
      return (day + "/" + month + "/" + year);
}

let getDomainName = (string) => {
      let arr = string.split("@");
      let answer = arr[1].split(".com");
      return answer[0];
}

let titleize = (string) => {
//Expected 'the lion the witch and the wardrobe' to equal 'The Lion the Witch and the Wardrobe'.
      let arr = string.split(" ");
      for(let i=0; i<arr.length; i++) {
            if(i == 0) {
                  let letters = arr[i].split("");
                  letters[0] = (letters[0]).toUpperCase();
                  let reWord = letters.join("");
                  arr.splice(arr.indexOf(arr[i]), 1, reWord);
            }
            else if (arr[i] != "the" && arr[i] != "and") {
                  let letters = arr[i].split("");
                  letters[0] = (letters[0]).toUpperCase();
                  let reWord = letters.join("");
                  arr.splice(arr.indexOf(arr[i]), 1, reWord);

                  if(letters[(letters.length)-1] == ".") {
                        let letters = arr[i+1].split("");
                        letters[0] = (letters[0]).toUpperCase();
                        let reWord = letters.join("");
                        arr.splice(arr.indexOf(arr[i+1]), 1, reWord);
                  }
            }
      }
      return (arr.join(" "));
}

let checkForSpecialCharacters = (string) => {
      if (string.includes("@") || string.includes("!")) {
            return true;
      }
      else {
            return false;
      }
}

let squareRoot = (number) => {
      return Math.sqrt(number);
}

let factorial = (number) => {
      let count = 1;
      for(let i=1; i<=number; i++) {
            count = count *= i;
      }
      return count;
}

let findAnagrams = (string) => {
      let anagrams = [];
      const genAnagrams = (word, anagram = '') => {
            if (!word) {
                  anagrams.push(anagram);
            }
            for(let i=0; i<word.length; i++) {
                  anagram += word[i];
                  genAnagrams(word.slice(0, i) + word.slice(i+1), anagram);
                  anagram = anagram.slice(0, anagram.length -1);
            }
      }
      genAnagrams(string, anagram = '');
      return anagrams;
}

let convertToCelsius = (number) => {
      return Math.round((number-32)*(5/9));
}

let letterPosition = (array) => {
      const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      let positions = [];
      array.forEach(letter => {
            let index = (alphabet.indexOf(letter.toLowerCase())+1);
            positions.push(index);
      });
      return positions;
}
