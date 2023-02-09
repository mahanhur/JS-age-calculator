//for1
// document.write("1<br>");
// document.write("2<br>");
// document.write("3<br>");
// document.write("4<br>");
// document.write("5<br>");
// document.write("6<br>");
// document.write("7<br>");
//초기화(단 한번)->비교(조건식)->실행문->증감식
/*  for(var i=1; i<=10; i++){
document.write("*");
} */

//for2
/*         //사용자로부터 입력받는 부분
var data = prompt("어디까지 숫자를 출력할까요?", "숫자입력");
//string -> number
data = parseInt(data);

for(var i=1; i<=data; i++){ //초기값 조건값 증감실행문
document.write(i + "<br>");
} */

//for3

/*         //사용자로부터 입력받는 부분
var dan = prompt("몇 단을 출력할까요?");
//string -> number
dan = parseInt(dan);

for(var i=1; i<=9; i++){
document.write(dan + "*" + i + "=" + (dan*i) +"<br>");
}
*/


//while

/* let num = 1;
while(num <= 9999){
console.log(num);
num++;
} */

//do while문
/* do{
console.log("무조건");
console.log("한 번은 실행");
}while(false); */


//while

/*         //1~100까지의 합계
var sum = 0; //누적할 값
var i = 1;
//while문은 초기값, 조건식, 증감식이 따로 떨어져 있으므로 for문에 비하여 
//반복횟수를 가진다면, 가독성이 떨어진다.
//하여, while문은 무한루프 전용으로 사용을 한다.
//아울러, while문은 조건식이 앞에 있기 때문에 false라면 한 번도 수행을 안할 수가 있다.
while (i <= 100) {
sum += i; //복합대입연산자를 이용하여 값을 누적하고 있다.
document.write(sum + ", " + i + "<br/>");
i++;
}
document.write("1~" + (i - 1) + "까지의 합" + sum);
*/


//do while 2
/* 
//1~100까지의 합계
var sum = 0;  //누적할 값
var i = 1;
//do-while문은 while문의 파생된 것으로 초기값, 조건식, 증감식이 따로 떨어져 있으므로 
//for문에 비하여 반복횟수를 가지면 오히려 가독성이 떨어진다.
//하여, do-while문은 사용자에게 의사를 먼저 한번 물어보고 결정하는 
//프로그램 전용으로 사용을 한다.
//do-while문은 최소 1번은 실행한다는게 while문과의 차이점이다.(조건식이 뒤에)        
do{            
sum += i;  //복합대입연산자를 이용하여 값을 누적하고 있다.
document.write(sum + ", " + i + "<br/>");
i++;            
}while(i<=100)
document.write("1~" + (i-1) + "까지의 합" + sum);

*/
//do while 3
/* 
var inputString = null;
alert("메시지를 입력하세요");
alert("프로그램을 종료하려면 q를 입력하세요.");
//최소 한번은 무조건 실행된다.사용자의 의도를 물어보는 프로그램에 
//사용하면 될 것이다.
do{
inputString = prompt("메시지를 입력하세요.");
document.write(inputString + "<br/>");
}while(!(inputString == "q"));  //q를 입력하면 true가 되어 루프를 계속진행하기 때문에
//!(논리부정연산자)를 사용하여 false바꾸고 있다.

document.write("프로그램 종료!!");
*/



// switch문
/* let food = "carrot";
switch (food) {
case "melon":
console.log("fruit");
break;
case "apple":
console.log("fruit");
break;
case "banana":
console.log("fruit");
break;
case "carrot":
console.log("vegetable");
break;
default:
console.log("It's not fruits and vegetables.");
break;
} */

// switch문 2

/* let score = 89;
switch (score){
case 90:    
case 91:
case 92:
case 93:
case 94:
case 95:
case 96:
case 97:
case 98:
case 99:
console.log("A++ 학점");
break;
default: 
console.log("fail");
break;
} */

// switch문 3
/*         //사용자로부터 입력받는 부분
var rank = window.prompt("직급을 입력하세요.1-부장,2-차장,3-과장,4-대리,5-사원");
//switch문은 정형화, 한정된 데이터에 가독성을 좋게 하고자 한다면 switch문을 
//쓸 것을 고려해도 좋다.
switch (rank) {
case "1":
document.write("<p>부장의 급여는 <strong>700만원</strong>입니다.");
break; //break문이 없으면 입력한 부분아래에 있는 내용을 다 출력함.
case "2":
document.write("<p>차장의 급여는 <strong>600만원</strong>입니다.");
break;
case "3":
document.write("<p>과장의 급여는 <strong>500만원</strong>입니다.");
break;
case "4":
document.write("<p>대리의 급여는 <strong>350만원</strong>입니다.");
break;
case "5":
document.write("<p>사원의 급여는 <strong>200만원</strong>입니다.");
break;
//default는 옵션
default:
alert("잘못 입력하셨습니다.");
}*/

//if문
/*         //사용자로부터 값을 입력
var userID = window.prompt("사용자 아이디를 입력하세요.");
//값 비교하기 위한 코드
if (userID == "KB") {
alert(userID + "님 환영합니다.");
} else {
alert("아이디가 틀렸습니다.확인해 주세요.");
}*/

//if문 2
/*  //사용자로부터 입력받는 부분
var userID = window.prompt("아이디를 입력하세요.");
var userPW = window.prompt("패스워드를 입력하세요.");
//값 비교 
if (userID == "KB" && userPW == "0209") { //연산자 우선순위 == 는 동등, && AND
  alert(userID + "님이 로그인 하셨습니다.");
} else if (userID == "KB") {
  alert("패스워드가 잘못 입력되었습니다.");
} else {
  alert("아이디가 잘못 입력되었습니다.");
} */

/* //---> 수정
var userID = window.prompt("아이디를 입력하세요.");
if (userID == "KB") {
  var userPW = window.prompt("패스워드를 입력하세요.");
  if (userPW == "0209") {
    alert(`${userID} 님이 로그인하셨습니다`)
  } else {
    alert("패스워드가 잘못 입력되었습니다")
  }
} else {
  alert("아이디가 잘못 입력되었습니다")
} */

//if문 3
/*         //사용자로부터 입력받는 부분
var value = window.prompt("행운의 번호를 고르세요.");

//값 비교 
if (value == "1") {
document.write("당첨! 머그컵");
} else if (value == "2") {
document.write("당첨! 비스포크 냉장고");
} else if (value == "3") {
document.write("당첨! 3D 펜");
} else {
document.write("꽝!!!!!");
}*/


// 난수 맞추기 게임

/* let low = 0;
let high = 100;
let card = 0; //정답
let a = 0; // 입력

alert("난수 맞추기 게임을 시작합니다. 난수를 먼저 뽑겠습니다.")
  let tryCount = 1; //시도횟수
  card =  Math.floor(Math.random() * 100); // 0-99까지 난수 생성
  alert(`난수를 설정하였습니다. 지금부터 시작합니다.`)
  while (true) {
    alert(`${tryCount}번째 시도입니다.`)
    alert(`범위는 ${low} - ${high} 입니다. 숫자를 입력하세요`)
    a = window.prompt()
    if(a == card) {
      alert(`축하합니다. 정답입니다.`)
      break;
    }
    else {
      if(a > card){
        alert(`틀렸습니다. 정답은 더 낮은 수 입니다.`)
        high = a;
      tryCount ++; }
      else if( a < card) {
        alert(`틀렸습니다. 정답은 더 높은 수 입니다.`)
        low = a;
      tryCount ++;
      }
      }
    } */
  
// 업그레이드

/* let low = 0;
let high = 100;
let card = 0; //정답
let a = 0; // 입력

alert("난수 맞추기 게임을 시작합니다. 난수를 먼저 뽑겠습니다.")
let tryCount = 1; //시도횟수
card = Math.floor(Math.random() * 100); // 0-99까지 난수 생성
alert(`난수를 설정하였습니다. 지금부터 시작합니다.`)
while (true) {
  alert(`${tryCount}번째 시도입니다.`)
  alert(`범위는 ${low} - ${high} 사이입니다. 숫자를 입력하세요`)
  a = window.prompt()
  if (a == card) {
    alert(`축하합니다. 정답입니다.`)
    document.write("<h3>게임 리뷰</h3>")
    document.write("정답 :" + card)
    document.write("<br>")
    document.write("시도횟수 :" + tryCount)
    break;
  } else {
    if (a > card && a < high) {
      alert(`틀렸습니다. 정답은 더 낮은 수 입니다.`)
      high = a;
      tryCount++;
    } else if (a < card && a > low) {
      alert(`틀렸습니다. 정답은 더 높은 수 입니다.`)
      low = a;
      tryCount++;
    } else if (a >= high || a <= low) {
      alert(`잘못 입력하셨습니다. 다시 입력해주세요.`)
    }
  }
} */

// 업그레이드2

let low = 0;
let high = 100;
let card = 0; //정답
let a = 0; // 입력
let b = 1; // n번째 게임
let yes = ""; // 더할지말지

alert("난수 맞추기 게임을 시작합니다. 난수를 먼저 뽑겠습니다.")
while (true) {
  alert(`${b}번째 게임입니다.`)
  document.write(`${b}번째 게임.`)
  let tryCount = 1; //시도횟수
  card = Math.floor(Math.random() * 100); // 0-99까지 난수 생성
  alert(`난수를 설정하였습니다. 지금부터 시작합니다.`)
  /* while (true) {
    alert(`${tryCount}번째 시도입니다.`)
    alert(`범위는 ${low} - ${high} 사이입니다. 숫자를 입력하세요`)
    a = window.prompt()
    if (a == card) {
      alert(`축하합니다. 정답입니다.`)
      document.write("<h3>게임 리뷰</h3>")
      document.write("정답 :" + card)
      document.write("<br>")
      document.write("시도횟수 :" + tryCount)
      document.write("<br>")
      break;
    } else {
      if (a > card && a < high) {
        alert(`틀렸습니다. 정답은 더 낮은 수 입니다.`)
        high = a;
        tryCount++;
      } else if (a < card && a > low) {
        alert(`틀렸습니다. 정답은 더 높은 수 입니다.`)
        low = a;
        tryCount++;
      } else if (a >= high || a <= low) {
        alert(`잘못 입력하셨습니다. 다시 입력해주세요.`)
      }
    }
  } */
  b++;
  while(true) {
    yes = window.prompt("게임을 더 하시려면 y를 입력하세요. 그만하시려면 n를 입력하세요.")
    if (yes == "n") {
      break;
    }
    else {if (yes == "y") {
    }
          else {
            alert("잘못 입력하셨습니다. 다시 입력해주세요.")
    }
  }
}
}
