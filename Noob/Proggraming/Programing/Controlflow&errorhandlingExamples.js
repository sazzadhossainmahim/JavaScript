function checkDate() {
    if (document.form1.threeChar.value.length == 3) {
        return true;
    } else {
        alert('Enter exactly three charecters. ' + `${document.form1.threeChar.value}is not valid.`);
        return false
    }
}