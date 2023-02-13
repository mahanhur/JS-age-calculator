let a;
let today;
let year;

today = new Date();
year = today.getFullYear();

a = window.prompt("태어난 연도 입력")
document.write(`${year}년 현재 ` + "<br>" + `${a}년에 태어난 사람의 나이는 ` + (year - a + 1) + `세 입니다.`)