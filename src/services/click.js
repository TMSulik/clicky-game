export const giveInstruction = (arr) => {
  
  switch(arr.length) {
    case 0: 
      // return { guide: "Start over", correct: '0' };
      return "Start over";
    case 1: 
      return'Click another';
    case 2:
      return'Fourteen left'; 
    case 3: 
      return'Thirteen left'; 
    case 4: 
      return 'Twelve left'; 
    case 5: 
      return 'Eleven left'; 
    case 6: 
      return 'Ten left';    
    case 7: 
      return 'Nine left';  
    case 8: 
      return 'Eight left';    
    case 9:
      return 'Seven left';
    case 10:
      return 'Six left';
    case 11:
      return 'Five left';
    case 12:
      return 'Four left';
    case 13:
      return 'Three left';
    case 14:
      return 'Two left';
    case 15: 
      return 'One left';
    default: 
      return 'Perfect!';
  }
}
