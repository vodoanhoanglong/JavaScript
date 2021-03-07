// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
    // your code here!
    return arr.map(x=>(x%2===0)?Math.pow(x,2):x);
  }