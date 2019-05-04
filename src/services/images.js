const imageLinks = [];

for (let i = 1; i < 17; i++) {
  let obj = {};
  imageLinks.push(obj[i+1] = `inkblot-${i}.png`);
}

export const inkImages = imageLinks;
