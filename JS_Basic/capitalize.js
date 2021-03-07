// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(str) {
	// viết code ở đây
    var	arrStr = str.split(" ");
    for(let i=0; i<arrStr.length; i++)
    {
        var resultArrStr = arrStr[i].split('');
        resultArrStr[0] = resultArrStr[0].toUpperCase();
        arrStr[i] = resultArrStr.join('');
    }
    return arrStr.join(" ");
}
