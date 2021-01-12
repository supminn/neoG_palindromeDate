const btn = document.querySelector('#btn-check');
const date = document.querySelector('#txt-date');
const output = document.querySelector('.txt-output');

//Convert Date to String
function dateToString(date) {
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
    let trueFlag = '',dayCount = 0;
    while(!trueFlag){
        curDate.setDate(curDate.getDate() + 1);
        dayCount++;
        console.log(dateToString(curDate));
        [trueFlag, palDate] = isPalindrome(dateToString(curDate).split('-'));
    }
    return [trueFlag,palDate,dayCount];
}

//Check if palindrome
const isPalindrome = function (dateList) {
    dateFormats = [
        dateList[1] + dateList[2] + dateList[0],
        dateList[2] + dateList[1] + dateList[0],
        dateList[1] + dateList[2] + dateList[0].substring(2),
        dateList[2] + dateList[1] + dateList[0].substring(2)
    ];
    for(let index=0;index<dateFormats.length;index++) {
        let revstr = dateFormats[index].split('').reverse().join('');
        if(dateFormats[index] === revstr){
            switch(index){
                case 0: console.log('matched'+ index); return ['MM/DD/YYYY',`${dateList[1]}-${dateList[2]}-${dateList[0]}`];
                case 1: console.log('matched'+ index); return [`DD/MM/YYYY`,`${dateList[2]}-${dateList[1]}-${dateList[0]}`];
                case 2: console.log('matched'+ index); return [`MM/DD/YY`,`${dateList[1]}-${dateList[2]}-${dateList[0].substring(2)}`];
                case 3: console.log('matched'+ index); return [`DD/MM/YY`,`${dateList[2]}-${dateList[1]}-${dateList[0].substring(2)}`];
            }
        }
    }
    return ['',''];
}

//Calls the function in different date format
function callPalindrome(date) {
    let dateVal = (date).split('-');
    //Check if palindrome in 4 formats
    let [flagFormat, palDate] = isPalindrome(dateVal);
    console.log(flagFormat);
    if (flagFormat) {
        output.innerHTML = `Congratulations😃! Your birthday forms a palindrome string in the <span class='highlight'>${flagFormat}</span> format as <span class='highlight'>${palDate}</span>.`;
    }
    else{
        let [dateFormat, nextDate, days] = findNextPalindrome(dateVal);
        output.innerHTML = `Oh Snap😕, Your birthday does not form a palindrome.\nThe next palindrome date is <span class='highlight'>${nextDate}</span> in <span class='highlight'>${dateFormat}</span> format which occurs in <span class='highlight'>${days}</span> days from your birthday.`;
    }
}

//Button trigger to check
btn.addEventListener('click', () => {
    output.innerText = '';
    if (!date.value) {
        output.innerText = `Provide a valid date.`;
    }
    callPalindrome(date.value);
});





//isPalindrome function

// let dateStr = "";
// switch (formatStr) {
//     case 'MM/DD/YYYY':
//         dateStr = dateList[1] + dateList[2] + dateList[0];
//         break;
//     case 'DD/MM/YYYY':
//         dateStr = dateList[2] + dateList[1] + dateList[0];
//         break;
//     case 'MM/DD/YY':
//         dateStr = dateList[1] + dateList[2] + dateList[0].substring(2);
//         break;
//     case 'DD/MM/YY':
//         dateStr = dateList[2] + dateList[1] + dateList[0].substring(2);
//         break;
// }
// let revStr = dateStr.split('').reverse().join('');
// if (dateStr === revStr) {
//     output.innerText += (formatStr + " is a palindrome\n");
//     document.querySelector('.txt-congo').innerText = "Congratulations! It's a palindrome\n";
// } else {
//     let nextDate = findNextPalindrome(dateList);
//     output.innerText += (formatStr + ` is not a palindrome\nThe next palindrome value after your birthday is: ${nextDate}\n`);
//     if (!document.querySelector('.txt-congo').innerText) {
//         document.querySelector('.txt-congo').innerText = "None of the following could create a palindrome";
//     }
// }

// isPalindrome(dateVal, 'MM/DD/YYYY');
// isPalindrome(dateVal, 'DD/MM/YYYY');
// isPalindrome(dateVal, 'MM/DD/YY');
// isPalindrome(dateVal, 'DD/MM/YY');
// }

// let startDate = new Date("01/01/2021"); 
//   let todayDate = new Date();
//   let diffInDays = Math.ceil((todayDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));