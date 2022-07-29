const Check_divisibility = (N) => {
    
    if((N%6 == 0) && (N%9 == 0)) {
      return "Divisible by both";
    }

    else{
      return "Not Divisible by both";
    }
};

