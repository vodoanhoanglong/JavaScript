/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
    // your code here!
    for(let i = 0; i<n; i++)
        arr.pop();
    return arr;
  }