/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
 function calculate(start, end) {
    sum=1;
     for(var i = start; i<end; i++)
     {
         sum*=i;
     }
     return sum;
}
