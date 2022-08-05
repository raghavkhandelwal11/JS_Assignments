const Number_Sum = (N) => 
{
  let num = N, sum = 0;
  let flag = true;
  
  while(flag) {
    sum += num%10;
    num = parseInt(num/10);
    
    if(num < 1) {
      flag = false;
    }
  }
  
  return sum;
};