module.exports = function multiply(first, second) {
  let numbers = [];

  first = first.split('').reverse();
  second = second.split('').reverse();

  for (let i = 0; first[i] >= 0; i++) {
    for (let j = 0; second[j] >= 0; j++) {
      if (!numbers[i + j]) {
        numbers[i + j] = 0;
      }
      numbers[i + j] += first[i] * second[j];
    }
  }

  for (let i = 0; numbers[i] >= 0; i++) {
    if (numbers[i] >= 10) {
      if (!numbers[i + 1]) {
        numbers[i + 1] = 0;
      } 
      numbers[i + 1] += parseInt(numbers[i] / 10);
      numbers[i] %= 10;
    }
  }

 
  return  numbers.reverse().join('');
}