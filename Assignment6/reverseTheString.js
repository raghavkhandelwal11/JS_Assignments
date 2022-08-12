var Reverse_String = (str) => 
{
     let str2 = "";
     for(let i = str.length-1; i >= 0; i--) {
       str2 += str.charAt(i);
     }
     
     return str2;
};
 