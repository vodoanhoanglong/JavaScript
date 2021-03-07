// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n){
    // viết code ở đây.
     var arr=[];
     for(var i=0;i<n;i++)
      arr.push(str.charAt(i));
     for(var i=str.length-n;i<str.length;i++)
        arr.push(str.charAt(i));
     return arr.join("");
    }