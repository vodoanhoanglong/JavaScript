/**
 * Tính số ms chênh lệch giữa date b và date a
 */

 function diffMs(a, b) {
    // viết code ở đây
    return (new Date(b).getTime() - new Date(a).getTime());
   }