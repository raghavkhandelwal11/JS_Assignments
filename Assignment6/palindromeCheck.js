var Palin_Check = (str) =>
{
	 let len = parseInt((str.length-1)/2), size = str.length-1;
	 for(let i = 0; i <= len; i++) {
	   if(str.charAt(i) != str.charAt(size - i)) {
	     return "False";
	   }
	 }
	 
	 return "True";
}

