/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
    // Viết code tại đây!
        let newStr1 = str1.split('');
        let newStr2 = str2.split('');
        let temp = 0;
        if(str1===str2)
            return true;
        if(str1.length !== str2.length)
            return false;
        else
        {
            for(let i=0; i<str1.length; i++)
                 for(let j=0; j<str1.length; j++)
                     if(newStr1[i]===newStr2[j])
                         temp++;
            if(temp===str1.length)
               return true;
            return false;
        }
    }
    