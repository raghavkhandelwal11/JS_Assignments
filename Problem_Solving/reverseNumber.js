var Reverse_Number = (N) => 
{
  let n = String(N).split("");
  
  return parseInt(n.reverse().join(""));
};
 
