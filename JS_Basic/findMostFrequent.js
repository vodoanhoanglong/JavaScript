/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
    // Viết code tại đây!
        let result = [];
        for(let i=0; i<arr.length; i++)
        {
            let temp = 0;
            for(let j=i; j<arr.length; j++)
                 if(arr[i]+1===arr[j]+1)
                     temp++;
            if(temp>=3)
                result.push(arr[i]);
        }
        return result;
    }
    