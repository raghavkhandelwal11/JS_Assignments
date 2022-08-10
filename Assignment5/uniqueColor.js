
function Unique_Shirts (arr,N) {

    let a = arr, count = 0, repeat = 0;
    let first = true;
    a.sort();
    
    for(let i = 1; i < N; i++) {
      if(a[i] === a[i - 1]) {
        count++;
        if(first) {
          count++;
          first = false;
        }
      }
      
      else{
          first = true;
        }
      
    }
      return arr.length - count;
    }