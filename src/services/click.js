export const giveInstruction = (arr) => {
  
  switch(arr.length) {
    case 0: 
      return { guide: "Start over", correct: 0 };
    case 1: 
      return { guide: "Click another", correct: 1 };
    case 2:
      return { guide: "Fourteen Remaining", correct: 2 };
    case 3: 
      return { guide: "Thirteen Remaining", correct: 3 };
    case 4: 
      return { guide: "Twelve Remaining", correct: 4 }; 
    case 5: 
      return { guide: "Eleven Remaining", correct: 5 };
    case 6: 
      return { guide: "Ten Remaining", correct: 6 }; 
    case 7: 
      return { guide: "Nine Remaining", correct: 7 };  
    case 8: 
      return { guide: "Eight Remaining", correct: 8 };   
    case 9:
      return { guide: "Seven Remaining", correct: 9 };
    case 10:
      return { guide: "Six Remaining", correct: 10 };
    case 11:
      return { guide: "Five Remaining", correct: 11 };
    case 12:
      return { guide: "Four Remaining", correct: 12 };
    case 13:
      return { guide: "Three Remaining", correct: 13 };
    case 14:
      return { guide: "Two Remaining", correct: 14 };
    case 15: 
      return { guide: "One Remaining", correct: 15 };
    default: 
      return { guide: "Perfect Score!", correct: 16 };
  }
}
