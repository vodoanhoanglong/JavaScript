//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str){ 
    // viết code ở đây.
    var count1=0, count2=0;
    for(var i of str)
    {
       if(i === 'p')
           count1++;
       else if(i === 't')
           count2++;
    }
    return (count1===count2)?true:false;
   }