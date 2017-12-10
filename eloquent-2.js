//looping a triangle
var a ="";
while(a.length<7)
  console.log(a+="#");
  ///////////////////////

//FIZZBUZZ
for(i=1;i<=100;i++)
{
  if(i%3==0&&i%5==0)
    console.log("FizzBuzz");
if(i%3==0)
console.log("Fizz");
if(i%5==0)
console.log("Buzz");
  else
console.log(i);
}
////////////////////////////////////

//chessboard
var a = "";
for(i=0;i<8;i++)
{
  for(j=0;j<8;j++)
  {
    if((i+j)%2==0)
      a+="#";
    else
      a+=" ";
  }
 a+="\n";
}
console.log (a);
