/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr){
    // Viết code tại đây
    let maxDiff=0;
    for(let i=0; i<arr.length-1; i++)
       for(let j=i+1; j<arr.length; j++)
          if(maxDiff < Math.abs(arr[i]-arr[j]))
              maxDiff = Math.abs(arr[i]-arr[j]);
    return maxDiff;
  }