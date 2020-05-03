//### Function #1: Array Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);

//### Function #2: Array Splice
modifiedFood = foods.slice();
modifiedFood.splice(2, 0, "noodles", "icecream");
console.log(modifiedFood);

//### Function #3: Filter

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
 let evennum = numberArray.filter(function(num) {
     return num % 2 == 0;
 });
 console.log(evennum);



 //### Function #4: Reject
 
let notp =[];
function nonprime(numberArray)
{
    for(var i=0;i<numberArray.length;i++)
    {
       var item= numberArray[i];
       //console.log(item);
       var count=0;
    for(var j=2;j<=item/2;j++)
    {
        if(item%j==0)
        count++;
    }
        if(count!=0)
        {
        //console.log(item);
        notp.push(item);
        }
    }
    console.log(notp);
}
console.log(nonprime(numberArray));

//### Function #5: Lambda
let iseven=function(n)
{
   return n.filter(n => n%2 == 0)  
}
 console.log(iseven([2,4,5,9,7]));

// ### Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];
 var squarednum = myArray.map(function(item) {
     return item * item;
 });
 console.log(squarednum);
 
 
 
// ### Function #7: Reduce
const mArray = [2, 3, 5, 10];
function multiply(mArray) {
    return mArray.reduce((a,b) => { return a*b; });
}
console.log(multiply(mArray));

















