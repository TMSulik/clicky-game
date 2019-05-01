const imageLinks = [];

for (let i = 1; i < 17; i++) {
  let obj = {};
  imageLinks.push(obj[i+1] = `inkblot-${i}.png`);
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
 
export const inkImages = shuffle(imageLinks);

