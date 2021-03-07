/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
 
 function multiply(arr) {
    var sum=1;
  for(var i of arr)
      sum*= i;
  return sum;
}