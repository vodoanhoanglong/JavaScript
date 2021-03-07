/**
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
*/

function removeProp(prop) {
    var student = {
            name : "David Rayy",
            class : "VI",
            rollno : 12
        }
  // chỉ viết code ở dưới dòng này.
    for(var key in student)
        if(key===prop)
           delete student[key];
    return student;
}
