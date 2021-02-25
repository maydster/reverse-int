module.exports = function reverse (n) {
    if (n < 0) n = -n;
    let arr = [];
    n = String(n);
    for(let i = n.length; i>=0; i-- ) {
        arr.push(n[i]);
    }
    return Number(arr.join(''))
}
