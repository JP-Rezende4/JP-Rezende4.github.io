// Desafio 11
function checkSize(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return true;
    }
  }

  return false;
}

function checkRepeat(numbers) {
  numbers.sort();

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === numbers[i + 2]) {
      return true;
    }
  }

  return false;
}

function generatePhoneNumber(numbers) {
  let result = '';

  result = `(${numbers[0]}${numbers[1]}`;
  result += `) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}`;
  result += `-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (checkSize(numbers) || checkRepeat(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return result;
}
// console.log(generatePhoneNumber(numbers));

// Desafio 12
function checkSum(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }

  return false;
}

function checkAbs(lineA, lineB, lineC) {
  const condition1 = lineA > Math.abs(lineB - lineC);
  const condition2 = lineB > Math.abs(lineA - lineC);
  const condition3 = lineC > Math.abs(lineA - lineB);

  if (condition1 && condition2 && condition3) {
    return true;
  }

  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (checkSum(lineA, lineB, lineC) && checkAbs(lineA, lineB, lineC)) {
    return true;
  }

  return false;
}
// console.log(triangleCheck(lineA, lineB, lineC));

// Desafio 13
function hydrate(drinks) {
  let count = 0;
  const numbers = drinks.match(/\d+/g);

  for (let i = 0; i < numbers.length; i += 1) {
    count += parseInt(numbers[i], 10);
  }

  if (count === 1) {
    return `${count} copo de água`;
  }

  return `${count} copos de água`;
}
// console.log(hydrate(drinks));
