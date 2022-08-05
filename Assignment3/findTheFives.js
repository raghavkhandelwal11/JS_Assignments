const Find_Five = (N) => 
{
	 let num = N;
	 let flag = true;
	 let count = 0;
	 let val = 0;
	 while(flag) {
	   if(num%10===5) {
	     count++;
	   }
	   val = num - num%10;
	   num = val/10;
	   if(num < 1) {
	     flag = false;
	   }
    }
}