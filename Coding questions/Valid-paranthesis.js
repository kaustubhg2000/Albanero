var isValid = function (s) {

    let myArr = [];
    let parenthese = ["()", "[]", "{}"];
    let i = 0;

    while (i < s.length) {
        myArr.push(s[i]);
        i++;

        let open = myArr[myArr.length - 2];
        let close = myArr[myArr.length - 1];

        openAndCloseparentheses = open + close;

        if (parenthese.includes(openAndCloseparentheses)) {
            myArr.pop();
            myArr.pop();
        }

    }
    return myArr.length === 0;

};