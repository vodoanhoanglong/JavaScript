/*
 Dùng vòng lặp for kiểm tra số nguyên tố.
 @param {number} x Số cần kiểm tra
 @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
*/

function isPrimeNumber(x) {
    var flag = true;
    if (x < 2){
       return flag = false;
    }
     else{
       for (var i = 2; i < x-1; i++)
       {
           if (x % i == 0){
               return flag = false;
               break;
           }
       }
   }
   return true;
}