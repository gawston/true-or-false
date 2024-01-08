const digitdisplay = document.querySelector(".maindigit");
const startbtn = document.querySelector(".startbtn");
const random_num = document.querySelectorAll(".random-num");
const btntrue = document.querySelector(".btntrue");
const btnfalse = document.querySelector(".btnfalse");
const bottom = document.getElementById("bottom");
const time_progress = document.getElementById("time-progress");
const modal = document.querySelector(".modal");
const okbtn = document.querySelector(".okbtn");
const content_text = document.querySelector(".content-text");

digitdisplay.style.letterSpacing = "0.5rem";

const lostword = [
    'เล่นได้แค่นี้จริงดิ',
    'อ่อนเกิ๊นนนนนนนนนนนนน',
    'ไปฝึกมาใหม่เหอะจริง',
    'เคยชนะบ้างยัง',
    'ว๊าาา แพ้อีกละ',
    'เลิกเล่นเหอะ',
    'กลับไปเล่นออดิชั่นเหอะ',
    'เอาดี๊',
    'ถามจริง 🤣',
    'เด็กน้อยยังเก่งกว่า',
    'ต้องให้สอนมั้ย ?',
    'แหมแกก็',
    'เอาจริงได้ยัง หรือได้แค่นี้',
    'เห็นแล้วเครียดแทนเลยว่ะ',
    'โหแกยังไม่เลิกเล่นอีกจริงดิ'
]

const winword = [
    'เก่งจังเลยยยยย',
    'เล่นมาตั้งนานพึ่งชนะเองเหรอ',
    'เก่งมัก ✌️😂😀😰😢😥🤔🤔😘🧐🙍‍♂️👌🫥🧐😘👉💦',
    'เฉยๆนะผมว่า',
    'ปล่อยให้ชนะเฉยๆหรอก 555'
]

let speed = 10;

let alldigit = 0;
let arrrandom_num = [];
let coutarr = 0;
const adio1 = new Audio('click.wav');
const adio2 = new Audio('stop.mp3');

startbtn.addEventListener("click",() => {
    adio1.play();
    startbtn.style.visibility = "hidden";
    bottom.classList.remove("invisible");
    bottom.classList.add("flex");
    time_progress.style.animation = `progress ${speed}s linear forwards`;
    for (let i = 0 ; i < arrrandom_num.length ; i++) {
        arrrandom_num.splice(i,1);
    }
    for (let i = 0 ; i < random_num.length ; i++) {
        arrrandom_num.push(Math.floor(Math.random() * 10));
    }
    alldigit = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    digitdisplay.innerHTML = alldigit;
    random_num[0].innerHTML = arrrandom_num[0];

    time_progress.addEventListener("animationend",() => {
        adio2.play();
        alldigit = 0;
        arrrandom_num = [];
        coutarr = 0;
        bottom.classList.add("invisible");
        bottom.classList.remove("flex");
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        content_text.innerHTML = lostword[Math.floor(Math.random() * lostword.length)];
    });
});

btntrue.addEventListener("click",() => {
    adio1.play();
    if (alldigit.toString().includes(arrrandom_num[coutarr])) {
        random_num[coutarr].classList.add("border-blue-400");
        coutarr++;
        if (coutarr < random_num.length) {
            random_num[coutarr].innerHTML = arrrandom_num[coutarr];
        }
    }
    else if (!alldigit.toString().includes(arrrandom_num[coutarr])) {
        adio2.play();
        modal.classList.remove("hidden");
        if (coutarr <= random_num.length - 1) {
            random_num[coutarr].classList.add("border-red-500");
        }
        modal.classList.add("flex");
        bottom.classList.add("invisible");
        bottom.classList.remove("flex");
        time_progress.style.animation = `progress ${speed}s linear forwards paused`;
        content_text.innerHTML = lostword[Math.floor(Math.random() * lostword.length)];
    }
    if (coutarr > 7) {
        adio2.play();
        modal.classList.remove("hidden");
        if (coutarr < random_num.length -1) {
            random_num[coutarr].classList.add("border-blue-400");
        }
        modal.classList.add("flex");
        bottom.classList.add("invisible");
        bottom.classList.remove("flex");
        time_progress.style.animation = `progress ${speed}s linear forwards paused`;
        content_text.innerHTML = winword[Math.floor(Math.random() * winword.length)];
    }
});

btnfalse.addEventListener("click",() => {
    adio1.play();
    if (!alldigit.toString().includes(arrrandom_num[coutarr])) {
        random_num[coutarr].classList.add("border-blue-400");
        coutarr++;
        if (coutarr < random_num.length) {
            random_num[coutarr].innerHTML = arrrandom_num[coutarr];
        }
    }
    else if (alldigit.toString().includes(arrrandom_num[coutarr])) {
        adio2.play();
        modal.classList.remove("hidden");
        if (coutarr <= random_num.length - 1) {
            random_num[coutarr].classList.add("border-red-500");
        }
        modal.classList.add("flex");
        bottom.classList.add("invisible");
        bottom.classList.remove("flex");
        time_progress.style.animation = `progress ${speed}s linear forwards paused`;
        content_text.innerHTML = lostword[Math.floor(Math.random() * lostword.length)];
    }
    if (coutarr > 7) {
        adio2.play();
        modal.classList.remove("hidden");
        if (coutarr < random_num.length -1) {
            random_num[coutarr].classList.add("border-blue-400");
        }
        modal.classList.add("flex");
        bottom.classList.add("invisible");
        bottom.classList.remove("flex");
        time_progress.style.animation = `progress ${speed}s linear forwards paused`;
        content_text.innerHTML = winword[Math.floor(Math.random() * winword.length)];
    }
});

//ok new game
okbtn.addEventListener("click",() => {
    alldigit = 0;
    arrrandom_num = [];
    coutarr = 0;

    adio1.play();
    time_progress.style.animation = "unset";
    startbtn.style.visibility = "visible";
    bottom.classList.add("invisible");
    bottom.classList.remove("flex");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    digitdisplay.innerHTML = "????";
    random_num.forEach(e => {
        e.innerHTML = "?";
        e.classList.remove("border-blue-400");
        e.classList.remove("border-red-500");
    });
});