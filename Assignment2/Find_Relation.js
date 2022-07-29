const findRelation = (x,y) => {
    if(x < y) {
      return x + " is smaller than " + y;
    }
    
    if(x > y) {
      return x + " is greater than " + y;
    }
    
    if(x == y) {
      return x + " is equal to " + y;
    }
};

