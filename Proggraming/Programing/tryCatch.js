function getMonthName(m) {
    m = m - 1;

    let mon = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul',
        'a', 's', 'o', 'n ', ' d '
    ];
    if (mon[m]) {
        return mon[m];
    } else {
        throw 'invalid';
    }
}

try {
    mn = getMonthName(mm);

} catch (e) {
    mn = 'unknown';
    // logmyerror(e);
}