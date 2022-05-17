const reverseSeq = n => {
    let result = [];
    for (let i = n; i > 0; i -= 1) {
        result.push(i);
    }
    return result;
};