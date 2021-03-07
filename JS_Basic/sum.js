/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
 
 function sum(numbers) {
    var Sum=0;
    for(var i of numbers)
    {
        if(!numbers)
           return 0;
        else
           Sum+=i;
    }
    return Sum;
 }