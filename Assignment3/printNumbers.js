const printNumbers = (n) => {
    let str = "1";
    
    for(let i=2; i<=n; i++) {
      str += " " + i;
    }
    
    console.log(str);
};