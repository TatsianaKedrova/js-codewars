// Compare within margin

function closeCompare (a, b, margin) {

  if(margin === undefined) margin = 0;

 if( Math.abs(a - b) <= margin) {
   return 0;
 } else if (a < b && Math.abs(a-b) > margin ) {
   return -1;
 } else {
   return 1;
 }

}

console.log(closeCompare(4, 5));