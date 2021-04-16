let amount = +prompt("số lượng số muốn kiểm tra")

function checkPrime(a) {
    let flag = true;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            flag = false;
        }
    }
    return flag;
}


for (let n = 3; n < amount; n++) {
    flag = checkPrime(n);
    if (flag === true) {
        document.write(n + "<br>")
    }
}


