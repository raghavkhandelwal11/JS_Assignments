var Check_Leap = (year) => 
{
 
  if(year%4 === 0) {
    
    if(year%400 !== 0 && year%100 === 0) {
      return "Non Leap Year";
    }
    
    return "Leap Year";
  }
    
  
  return "Non Leap Year";

};
 
