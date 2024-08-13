function addNodeToList(head, newValue) {
    var newNode = {
        val: newValue,
        next: null
    };

    if (head === null) {
        head = newNode;
    } else {
        var current = head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    return head;
}
var helper = function (l1, l2) {
    let pocket = 0;
    let l1C = l1
    let l2C = l2
    let temp = 0
    while (l1C !== null) {
        if (l2C !== null) {
            temp = pocket + l1C.val + l2C.val
        } else {
            temp = pocket + l1C.val
        }
        pocket = 0
        if (temp > 9) {
            pocket = parseInt(temp.toString()[0])
            l1C.val = parseInt(temp.toString()[1])
        } else {
            l1C.val = temp
        }
        l1C = l1C.next
        if (l2C !== null)
            l2C = l2C.next
    }
    if (pocket > 0) {
        l1 = addNodeToList(l1, pocket)
    }

    return l1
}

function findLengthOfList(head) {
    var length = 0;
    var current = head;

    while (current !== null) {
        length++;
        current = current.next;
    }

    return length;
}
var addTwoNumbers = function (l1, l2) {
    let lengthL1 = findLengthOfList(l1)
    let lengthL2 = findLengthOfList(l2)
    if (lengthL1 > lengthL2) return helper(l1, l2)
    return helper(l2, l1)
};