/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

 function sum(x) {
    // viết code ở đây.
    var i = 0, sum = 0;
    while(i < x)
    {
        if(i%2!==0)
           sum+=i;
        i++;
    }
    return sum;
  } 
  