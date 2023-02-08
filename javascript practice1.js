
/* var N;

for(N=1; N<=5; N++) {
 t = "*".repeat(N)
 document.write(t)
 document.write("<br>")
}



/* 
<<<<별찍기>>>>
for (let i = 1; i < 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
} */

/* <<<<별찍기2>>>>
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write("&nbsp")
  }
  for (let j = 1; j <= i; j++) {
    document.write("*")
  }
  document.write("<br>")
}
 */
/* 
<<<<별찍기3>>>>

for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    document.write("*")
  }
  document.write("<br>")
}
*/
/* 
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write("*")
  }
  for (let j = 1; j <= i; j++) {
    document.write("*")
  }
  document.write("<br>")
} */

//짝수
for(let i=1; i<=10; i++) {
  if(i % 2 == 1) continue;
  document.write(i);
  document.write("<br>")
}

document.write("<br>")
//홀수

for(let i = 1; i <= 10; i++) {
  if(i % 2 ==0) continue;
  document.write(i)
  document.write("<br>")
}

document.write("<br>")

//짝수 거꾸로
for(let i=10; i>0; i--) {
  if(i % 2 == 1) continue;
  document.write(i);
  document.write("<br>")
}
document.write("<br>")

//홀수 거꾸로
for(let i = 10; i >= 0; i--) {
  if(i % 2 ==0) continue;
  document.write(i)
  document.write("<br>")
}

document.write("<br>")

//짝수 합구하기
let sum;
sum = 0

for(let i=1; i<=10; i++) {
  if(i % 2 == 1) continue;
  document.write(i + "--");
  sum += i;
  document.write(sum);  
  document.write("<br>")
}

document.write("<br>")

//반복문연습 3번 -- 짝수열을 string으로

let a;

for(let i=1; i<=10; i++) {
  if(i % 2 == 1) continue;
  a = i.toString();
  console.log(a);
}

console.log(typeof a);

// 반복문연습 1번 -- 10보다크고20보다작은 변수 x 출력

var x = 15;

if( 10 < x < 20) {
 console.log(x)
} ;

// 반복문연습 7번 -- 0부터 10미만의 정수의 합

let b;
let summ;
summ = 0;

for(b=0; b<10; b++) {
  summ += b
};
  console.log(summ);

  // 반복문연습 8번 -- 1부터 20미만의 정수 중 2또는3의배수가 아닌 수의 총합

let k, ksum;
ksum = 0;

for(k=1; k<20; k++){
  if(k%2 === 0 || k%3 === 0) continue;
  ksum += k;
  };

console.log(ksum);

