const empty = "";
const Ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lcase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "!@#$%^&*=+_-?/'";

const plength = document.getElementById("p-length");
const Uppercase = document.getElementById("p-uppercase");
const Lowercase = document.getElementById("p-lowercase");
const pnumbers = document.getElementById("p-numbers");
const pSymbol = document.getElementById("p-symbol");

const password = document.getElementById("Password");
const generate = document.getElementById("generate");

generate.addEventListener("click", () => {

    let initialPassword = empty;
    (Uppercase.checked) ? initialPassword += Ucase: " ";
    (Lowercase.checked) ? initialPassword += Lcase: " ";
    (pnumbers.checked) ? initialPassword += Numbers: " ";
    (pSymbol.checked) ? initialPassword += Symbols: " ";

    password.value = generatePassword(plength.value, initialPassword);

});

function generatePassword(k, initialPassword) {
    let pass = "";
    for (let i = 0; i < k; i++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass;
}

const copy = document.getElementById("copy");

copy.addEventListener("click", () => {

    if (password.value == "") {
        alert("Please generate a password!!!");

    } else {
        password.select();
        document.execCommand("copy");
        alert("Password has been copied to clipboard");
    }

});