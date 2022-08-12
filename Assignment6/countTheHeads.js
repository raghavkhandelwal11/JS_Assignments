var Count_Occ = (s) => 
{
    let len = s.length, S = "";
    const str = [s.charAt(0)], frequency = [1];
    let res = [];
    for(let i = 1; i < len; i++) {
      if(!str.includes(s.charAt(i))) {
        str.push(s.charAt(i));
        frequency.push(1)
      }
      else {
        frequency[str.indexOf(s.charAt(i))]++;
      }
    }
    
    for(let j =  str.length-1; j >= 0; j--) {
      if(frequency[j] >= 2) {
        res.push(str[j] + frequency[j]);
      }
    }
    res.sort();
    for(let k = 0; k < res.length; k++) {
      S += res[k];
    }
    return S;
    
    // return res.reduce((acc, add) => acc=acc+add, 0);
};
 
