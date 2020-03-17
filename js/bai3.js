let num = +prompt("Nhập vào một số nguyên");

function isFibon(n) {
    if (checkFibo(n)) {
        alert("True");
    } else {
        alert("False");
    }
}

function checkFibo(n) {
    let a = 0;
    let b = 1;
    let c = a + b;
    if (n == 0 || n == 1) {
        return true;
    }
    while (c <= n) {
        if (c == n) {
            return true;
        } else {
            a = b;
            b = c;
            c = a + b;
        }
    }
    return false;
}

isFibon(num);