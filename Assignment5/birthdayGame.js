 
function Birthday_Game(arr,D ,M) {
    let count = 0;
    
    if (M > arr.length) {
      return 0;
    }
    for(let i = M-1; i < arr.length; i++) {
      let sum = 0
      for(let j = i; j >= i-M+1; j--) {
        sum += arr[j]
      }
      if(sum === D) {
        count++;
      }
    }
     return count;
   }
   
   