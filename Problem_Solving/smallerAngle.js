var Minimal_Angle = (h, m) => 
{
    let a1 = 0, a2 = 0;
    
    a1 = Math.abs(((11/2)*m) - (30*h));
    a2 = Math.abs(360 - (30*h) + ((11/2)*m));
    
    if(a1 < a2) {
      return a1;
    }
    
    return a2;
    
};
 