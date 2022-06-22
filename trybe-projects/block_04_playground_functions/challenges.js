// Desafio 1
function compareTrue(x, y) {
  return x && y;
}
// console.log(compareTrue(x, y));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(base, height));

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
// console.log(splitSentence(sentence));

// Desafio 4
function concatName(words) {
  return `${words[words.length - 1]}, ${words[0]}`;
}
// console.log(concatName(words));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// console.log(footballPoints(wins, ties));

// Desafio 6
function highestCount(numbers) {
  let result = 0;

  numbers.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[0] === numbers[i]) {
      result += 1;
    } else break;
  }

  return result;
}
// console.log(highestCount(numbers));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(mouse - cat1);
  const distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }

  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}
// console.log(catAndMouse(mouse, cat1, cat2));

// Desafio 8
function notDivByThreeAndFive(x) {
  return x % 3 !== 0 && x % 5 !== 0;
}

function isDivByThreeAndFive(x) {
  return x % 3 === 0 && x % 5 === 0;
}

function isDivByFive(x) {
  return x % 5 === 0;
}

function ifCascade(x) {
  if (notDivByThreeAndFive(x)) {
    return 'bug!';
  }

  if (isDivByThreeAndFive(x)) {
    return 'fizzBuzz';
  }

  if (isDivByFive(x)) {
    return 'buzz';
  }

  return 'fizz';
}

function fizzBuzz(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i += 1) {
    result.push(ifCascade(numbers[i]));
  }

  return result;
}
// console.log(fizzBuzz(numbers));

// Desafio 9
function ifEncode(sentence, i1, i2) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const codes = ['1', '2', '3', '4', '5'];

  if (sentence[i1] === vowels[i2]) {
    sentence = sentence.replace(vowels[i2], codes[i2]);
  }

  return sentence;
}

function ifDecode(sentence, i1, i2) {
  const codes = ['1', '2', '3', '4', '5'];
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (sentence[i1] === codes[i2]) {
    sentence = sentence.replace(codes[i2], vowels[i2]);
  }

  return sentence;
}

function encode(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i1 = 0; i1 < sentence.length; i1 += 1) {
    for (let i2 = 0; i2 < vowels.length; i2 += 1) {
      sentence = ifEncode(sentence, i1, i2);
    }
  }

  return sentence;
}

function decode(sentence) {
  const codes = ['1', '2', '3', '4', '5'];

  for (let i1 = 0; i1 < sentence.length; i1 += 1) {
    for (let i2 = 0; i2 < codes.length; i2 += 1) {
      sentence = ifDecode(sentence, i1, i2);
    }
  }

  return sentence;
}
// console.log(encode(sentence));
// console.log(decode(sentence));

// Desafio 10
function techList(techNames, personName) {
  const result = [];

  techNames.sort();

  if (techNames.length === 0) {
    return 'Vazio!';
  }

  for (let i = 0; i < techNames.length; i += 1) {
    result.push({ tech: techNames[i], name: personName });
  }

  return result;
}
// console.log(techList(techNames, personName));
