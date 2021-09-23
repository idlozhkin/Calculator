let num1, num2;
let op;
let strOut = "0";
let end_flag = false;
const MAX_VALUE = 99999999;

function set_value(num) {
    strOut = document.getElementsByClassName('input-line')[0].textContent;
    if (strOut.length < 8) {
        if (end_flag || num !== '.' && (strOut === "0" || strOut === "Error!")) {
            strOut = num;
            end_flag = false;
        } else {
            if (num === '.' && !strOut.includes('.') || num !== '.') {
                strOut += num;
            }
        }
        document.getElementsByClassName('input-line')[0].textContent = strOut;
    }
    else if (end_flag && strOut.length >= 8) {
        end_flag = false;
        document.getElementsByClassName('input-line')[0].textContent = num;
    }
}

function clear_value() {
    document.getElementsByClassName('input-line')[0].textContent = 0;
}

function set_op(str) {
    op = str;
    if (document.getElementsByClassName('input-line')[0].textContent === "Error!") {
        num1 = 0;
    }
    else
        num1 = Number(document.getElementsByClassName('input-line')[0].textContent);
    document.getElementsByClassName('input-line')[0].textContent = 0;
    num2 = 0;
}

function res() {
    num2 = Number(document.getElementsByClassName('input-line')[0].textContent);
    if (document.getElementsByClassName('input-line')[0].textContent === "Error!") {
        num1 = 0;
        num2 = 0;
    }
    if (num1 > MAX_VALUE || num2 > MAX_VALUE) {
        document.getElementsByClassName('input-line')[0].textContent = "Error!";
    }
    else {
        switch (op) {
            case '-':
                document.getElementsByClassName('input-line')[0].textContent = num1 - num2;
                break
            case '+':
                document.getElementsByClassName('input-line')[0].textContent = num1 + num2;
                break
            case 'X':
                document.getElementsByClassName('input-line')[0].textContent = (num1 * num2).toFixed(5);
                break
            case '/':
                if (num2 !== 0) {
                    document.getElementsByClassName('input-line')[0].textContent = (num1 / num2).toFixed(5);
                } else {
                    document.getElementsByClassName('input-line')[0].textContent = "Error!";
                }
                break
        }
    }
    if (Number(document.getElementsByClassName('input-line')[0].textContent) % 1 === 0) {
        document.getElementsByClassName('input-line')[0].textContent = parseInt(document.getElementsByClassName('input-line')[0].textContent)
    }
    console.log(num1, num2);
    end_flag = true;
}