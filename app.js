let todayD = new Date().getDate();
let todayM = new Date().getMonth();
let today = todayD + "/" + todayM;
if (today == new Date().getDate('30') + "/" + new Date().getMonth('11')){
    console.log('Y');
} else {
    console.log('N');
}
console.log(today);