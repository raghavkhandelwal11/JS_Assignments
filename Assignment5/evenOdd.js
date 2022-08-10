onst findEvenOdd = (N, Arr) => 
{
  let count1 = 0, count2 = 0;
    let B = [];
    for(let i = 0; i<N; i++) {
      if(Arr[i]%2 == 0) {
        count1 += Arr[i];
      }
       else{
        count2 += Arr[i];
      }
    }
    // console.log(arr[0] + " " + arr[1]);
    
    B[0] = count1;
    B[1] = count2;
    return B;
};
 
