var Count_Vowels= (S) => 
{
  let count = 0;
  
  for(let i = 0; i < S.length; i++){
    if(S.charAt(i) == "a" || S.charAt(i) == "A" || S.charAt(i) == "e" || S.charAt(i) == "E" || 
    S.charAt(i) == "i" || S.charAt(i) == "I" || S.charAt(i) == "o" || S.charAt(i) == "O" ||
    S.charAt(i) == "u" || S.charAt(i) == "U") {
      count++;
    }
  }
  return count;
  
};
 