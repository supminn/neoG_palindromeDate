const btn = document.querySelector('#btn-check');
const date = document.querySelector('#txt-date');
const output = document.querySelector('.txt-output');

//Convert Date to String
function dateToString(date){
let dd = date.getDate();
let mm = date.getMonth() + 1;
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
return date.getFullYear() + '-' + mm + '-' + dd;
}

//Setting max date to today
let today = new Date();
let maxDate = dateToString(today);
date.setAttribute("max", maxDate);
date.setAttribute("value", maxDate);

const findNextPalindrome = (dateList) => {
    let curDate = new Date(dateList.join('-'));
    curDate.setDate(curDate.getDate() + 1);
    console.log(dateToString(curDate));
    // isPalindrome(dateToString(curDate));
}

//Check if palindrome
const isPalindrome = function (dateList, formatStr) {
    let dateStr = "";
    switch (formatStr) {
        case 'MM/DD/YYYY':
            dateStr = dateList[1] + dateList[2] + dateList[0];
            break;
        case 'DD/MM/YYYY':
            dateStr = dateList[2] + dateList[1] + dateList[0];
            break;
        case 'MM/DD/YY':
            dateStr = dateList[1] + dateList[2] + dateList[0].substring(2);
            break;
        case 'DD/MM/YY':
            dateStr = dateList[2] + dateList[1] + dateList[0].substring(2);
            break;
    }
    let revStr = dateStr.split('').reverse().join('');
    if (dateStr === revStr) {
        output.innerText += (formatStr + " is a palindrome\n");
        document.querySelector('.txt-congo').innerText = "Congratulations! It's a palindrome\n";
    } else {
        let nextDate = findNextPalindrome(dateList);
        output.innerText += (formatStr + ` is not a palindrome\nThe next palindrome value after your birthday is: ${nextDate}\n`);
        if (!document.querySelector('.txt-congo').innerText) {
            document.querySelector('.txt-congo').innerText = "None of the following could create a palindrome";
        }
    }
}

//Calls the function in different date format
function callPalindrome() {
    output.innerText = '';
  if (!date.value) {
        output.innerText = `Provide a valid date.`;
    }
    let dateVal = (date.value).split('-');

    //Check if palindrome in 4 formats
    isPalindrome(dateVal, 'MM/DD/YYYY');
    isPalindrome(dateVal, 'DD/MM/YYYY');
    isPalindrome(dateVal, 'MM/DD/YY');
    isPalindrome(dateVal, 'DD/MM/YY');
}

//Button trigger to check
btn.addEventListener('click',() =>{
    output.innerText = '';
    if (!date.value) {
        output.innerText = `Provide a valid date.`;
    }
    callPalindrome(date.value);
});







// let startDate = new Date("01/01/2021"); 
//   let todayDate = new Date();
//   let diffInDays = Math.ceil((todayDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));