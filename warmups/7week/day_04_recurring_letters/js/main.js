// console.log('lala');

// ## Recurring Letters

// Create a function that takes in a sentence and outputs the letter that’s repeated most frequently.

// ```js
// recurringLetter('just a simple sentence chilling');
// // => The recurring letter of "just a simple sentence chilling" is e

// ```

// Use simple sentences with regular spaces between each word (like in the sentence you are reading) but if you want you can account for other characters such as !@#$%^&*? etc..

// *Hint:* You'll need to loop and count each of the letters.

// **Bonus:** Create another function that capitalises that letter within the sentence. 

// ```js

// capitaliseLetter('just a simple sentence chilling', 'e');
// // => just a simplE sEntEncE chilling
// ```
// console.log(_.VERSION);

const recurringLetter = function(string) {

  let counts = _(string).countBy();
  // console.log(_(counts).omit(' ')); 
  counts = _(counts).omit(' ');

  // const maxScore = _.max(_.values(counts));
  const maxScore = _.max(counts);
  console.log(maxScore);

  let maxLetter = '';
  
  _(counts).map((value, letter) => {
    console.log(value, letter);
    if (letter !== ' ' && value === maxScore) {
      console.log('MAXLETTER', maxLetter);
      maxLetter = letter;
    }
  })
  console.log(maxLetter, maxScore);

  console.log(`The most recurring letter of "${string}" is "${maxLetter}" for ${maxScore} times`);
}
recurringLetter('just a simple sentence chilling  %%%%%%%%');


const capitaliseLetter = function(string, letter) {
  let newLettersArray = _(string).map(char => {
    if (char === letter) {
      return char.toUpperCase();
    } else {
      return char;
    }
  });
  console.log(newLettersArray.join(''));
}

capitaliseLetter('just a simple sentence chilling', 'e');