// Compare within margin

// function closeCompare (a, b, margin) {

//   if(margin === undefined) margin = 0;

//  if( Math.abs(a - b) <= margin) {
//    return 0;
//  } else if (a < b && Math.abs(a-b) > margin ) {
//    return -1;
//  } else {
//    return 1;
//  }

// }


function closeCompare (a, b, margin = 0) {

  if(a < b - margin) return -1;
  if(a - margin > b ) return 1;
  return 0;

}

console.log(closeCompare(10, 4, 7));

