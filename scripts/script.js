const btn = document.querySelector('#btn-check');
const date = document.querySelector('#txt-date');
const output = document.querySelector('.txt-output');

//Setting max date to today
let today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
let maxDate = today.getFullYear() + '-' + mm + '-' + dd;
date.setAttribute("max", maxDate);
date.setAttribute("value", maxDate);

//Find the nearest Palindrome
const findPalindrome = function (dateString) {
    let curDate = new Date(dateString);
    console.log(curDate);
}

//Calculate if palindrome
const isPalindrome = (str1, str2, str3, dateFormat, dateString) => {
    let dateStr = str1 + str2 + str3;
    let revStr = dateStr.split('').reverse().join('');
    if (dateStr === revStr) {
        output.innerText += (dateFormat + " is a palindrome");
        document.querySelector('.txt-congo').innerText = "Congratulations! It's a palindrome\n";
    } else {
        let nextDate = findPalindrome(dateString);
        output.innerText += (dateFormat + ` is not a palindrome\nThe next palindrome value after your birthday is: ${nextDate}\n`);
        if (!document.querySelector('.txt-congo').innerText) {
            document.querySelector('.txt-congo').innerText = "None of the following could create a palindrome";
        }
    }
}
//Calls the function in different date format
function callPalindrome() {
    let dateVal = (date.value).split('-');
    isPalindrome(dateVal[1], dateVal[2], dateVal[0], 'MM/DD/YYYY', dateVal.join('-'));
    isPalindrome(dateVal[2], dateVal[1], dateVal[0], 'DD/MM/YYYY', dateVal.join('-'));
    isPalindrome(dateVal[2], dateVal[1], dateVal[0].substring(2), 'MM/DD/YY', dateVal.join('-'));
    isPalindrome(dateVal[1], dateVal[2], dateVal[0].substring(2), 'DD/MM/YY', dateVal.join('-'));
}

//Button trigger to check
btn.addEventListener('click', callPalindrome);

// let startDate = new Date("01/01/2021"); 
//   let todayDate = new Date();
//   let diffInDays = Math.ceil((todayDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));