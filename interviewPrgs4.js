function isPermutationOfPalindrome(word) {
    const split = word
      .replace(/\s/g,'')
      .toLowerCase()
      .split('');
    
    if (split.length === 1) return true;
  
    const seen = split.reduce((agg, letter) => ({
      ...agg,
      [letter]: agg[letter] ? agg[letter] + 1 : 1,
    }), {});
    console.log('seen', seen)
    return Object.values(seen)
      .filter(val => val % 2).length <= 1;
  }
console.log(isPermutationOfPalindrome('abcba'));

function canRearrangeToPalindrome(str)
{
    var letterCounts = {};
    var letter;
    var palindromeSum = 0;
    for (var i = 0; i < str.length; i++) {
        letter = str[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }
    for (var letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    return palindromeSum < 2;
}
console.log(canRearrangeToPalindrome('yee'))