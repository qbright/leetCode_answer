var addTwoNumbers = function (l1, l2) {
    let temp = [];
    let upFlag = false;
    while ((l1 && l1.val !== null) || (l2 && l2.val !== null)) {
        let t = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0);
        if (upFlag) {
            t += 1;
        }
        temp.push(t % 10);
        upFlag = (t > 9);
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    upFlag && temp.push(1);

    return temp;
};


console.log(addTwoNumbers(
    {
        val: 5,
        next: null
    }, {
        val: 5,
        next: null
    }));