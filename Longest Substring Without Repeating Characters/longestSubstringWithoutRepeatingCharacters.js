var lengthOfLongestSubstring = function (s) {
    let length = 0;
    let str = "";
    for (let i = 0; i < s.length; i++) {
        let index = str.indexOf(s[i])
        if (index !== -1) {
            let len = str.length
            if (length < len)
                length = len
            str = str.slice(index + 1)
        }
        str = str + s[i]

    }
    let len = str.length
    if (length < len)
        length = len
    return length
};