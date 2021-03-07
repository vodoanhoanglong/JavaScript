/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

 var date = new Date("06/10/2019")

 function subtractDays(date, n) {
   // Write code here...
   return date.getTime() - n*60*60*24*1000;
 }