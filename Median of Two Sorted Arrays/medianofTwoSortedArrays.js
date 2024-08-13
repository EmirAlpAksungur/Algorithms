var findMedyan = function (list) {
    let len = list.length
    if (len % 2 === 0) {
        return (list[parseInt(len / 2)] + list[(len / 2) - 1]) / 2
    } else {
        return list[parseInt(len / 2)]
    }
}

var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let k = 0;
    let temp = [];
    while (i < nums1.length || k < nums2.length) {
        if (nums1[i] <= nums2[k] || nums2[k] === undefined) {
            temp.push(nums1[i])
            i++
        } else {
            temp.push(nums2[k])
            k++
        }
    }
    return findMedyan(temp)

};