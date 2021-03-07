/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/

function first(arr, n) {
    var a=[];
  for(let i=0; i<n; i++)
      a[i] = arr[i];
  return a;
}