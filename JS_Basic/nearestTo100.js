// Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89
function nearestTo100(a, b){
    // viết code ở đây.
    return (Math.abs(100-a)>Math.abs(100-b))?b:a;
  }