function contiguousArray(array) {

  var currentMax = array[0];
  var lastSum = 0;

  for (var i = 0; i < array.length; i++){
    if (lastSum + array[i] <= 0) {
      lastSum = 0;
    } else if (lastSum + array[i] >= 0) {
      lastSum += array[i];
      if (lastSum > currentMax) {
        currentMax = lastSum;
      }
    }
  }
  return currentMax;
}

console.log("[2,2,3] Expected: 7, Max:", contiguousArray([2,2,3]));
console.log("[2,-20,25,-21,-3,1,4,20] Expected: 26, Max:", contiguousArray([2,-20,25,-21,-3,1,4,3]));
console.log("[1,2,3,-7,1,5,6,-2] Expected: 12, Max:", contiguousArray([1,2,3,-7,1,5,6,-2]));
console.log("[12,-100,3,-7,-25,26,5,6,-2,10] Expected: 45, Max:", contiguousArray([ 12, -100, 3, -7, -25, 26, 5, 6, -2, 10 ]));
console.log("[-2,20,3,-7,-25,26,5,6,-2,10] Expected: 45, Max:", contiguousArray([-2, 20,3,-7,-25,26,5,6,-2,10]));
console.log("[1,1,3,-7,1,5,20,-100,6,21,-2] Expected: 27, Max:", contiguousArray([1,2,3,-7,1,5,20,-100,6,21,-2]));
console.log("[1,1,3,-7,1,100,-22,2,34,6,9,-1,20,-100,6,21,-2] Expected: 149, Max:", contiguousArray([1,1,3,-7,1,100,-22,2,34, 6, 9, -1, 20,-100,6,21,-2]));
console.log("[1,1,3,-7,1,100,-22,2,34,6,9,-1,50,-2,40,-1, 43, 39, 20,-100,6,21,-2] Expected: 318, Max:", contiguousArray([1,1,3,-7,1,100,-22,2,34, 6, 9, -1,50,-2, 40,-1, 43, 39, 20,-100,6,21,-2]));
console.log("[1,1,3,-7,1,100,-22,2,34,6,9,-1,50,-2,40,-1,43,39,20,-100,6,21,100,1000] Expected: BigNum, Max:", contiguousArray([1,1,3,-7,1,100,-22,2,34, 6, 9, -1,50,-2, 40,-1, 43, 39, 20,-100,6,21, 100,1000]));
console.log("[100,-2,-4,-7,-8,-10,40] Expected: 109, Max:", contiguousArray([100,-2,-4,-7,-8,-10, 40]));
