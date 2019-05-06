export const setHighScore = (num1, num2) => {
  let score = num1;
  if(num2 > num1) {
    score = num2;
  }
  return score;
}