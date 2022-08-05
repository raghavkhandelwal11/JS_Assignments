const Prime_Check = (N) => 
{
  let flag = false;
  const c = N/2;
  
  if (N === 1) {
    return "NO"
  }
  
  else if(N === 2) {
    
    return "YES";
  }
  
  for(let i = 2; i <= c; i++) {
    if(N%i === 0) {
      return "NO";
    }
  }
  
  return "YES";
  
};