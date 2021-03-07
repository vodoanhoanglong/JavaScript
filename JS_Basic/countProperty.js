/*
 Viết hàm countProperty để in ra độ dài của một đối tượng
@param {object}
@return {number}
 * 
 * Example: 
 * var student = {
 *      name: "Jerry", 
 *      age: 14,
 *      role: "student"
 *  }
 * lengthObj(student); // length: 3
}
*/

function countProperty(obj) {
    // viết code ở đây
    var length = 0;
    for(var key in obj)
        length++;
    return length;
  }