 //Remove Duplicates from an Array
//Instruction: Create a function that takes an array of items, removes all duplicate items 
//and returns a new array in the same sequential order as the old array (minus duplicates)
function removeDups(...arr:number []) {
    var returnArr = [];
 for(var i = 0; i < arr.length; i++) {
   if(returnArr.indexOf(arr[i]) === -1) {
     returnArr.push(arr[i]);
   }
 }
 return returnArr;
}
console.log ( removeDups(2,5,6,4,2,2,7,8,9,7,7,0,1,1,1,0,0));
