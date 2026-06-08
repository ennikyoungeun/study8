
//내장객체

//문자열

let str = "hellohi@gmail.com";

console.log( str.length); //문자길이
console.log( str.includes("@")); //문자열에 특정문자(매개변수)가 포함?
console.log( str.includes("!")); //문자가 없으면 false

console.log( str.indexOf("@")); //해당문자가 있는 인덱스 찾기
console.log( str.indexOf("!"));//문자가 없으면-1

if(str.indexOf("!")==-1){ }

console.log(str.substring(0,4)); //특정 위치문자 잘라내기 (뽑아내기)
                // 0<= 인덱스 <4
console.log(str.substring(5,10)); // 5 <=     인덱스   <10 비파괴적 함수
console.log(str); //원본변형?

//이메일 아이디 : 앞 @
//이메일 도메인 :@ 뒤

console.log(str.indexOf("@"));
console.log(str.substring(0,str.indexOf("@")));
console.log(str.substring(str.indexOf("@")+1)); //substring(시작인덱스)~
console.log(str.substring(str.indexOf("@")+1,str.length));//substring(시작인덱스,끝인덱스)


//문자 앞뒤 공백제거 trim()
//가입 -> 아이디 입력 "abc" 가입 진행
//" abc" 

let test =" abc ";
console.log("|"+ test + "|");
console.log("|"+ test.trim() + "|");

console.log("|"+ test + "|");
test=test.trim();
console.log("|"+ test + "|");

//문자 분리 split
let phone ="010-1234-5678";
let spt = phone.split("-"); //split(매개변수)매개변수 문자 기준으로 자르겠다.
console.log(spt); // 문자 불리한 배열형태
console.log(spt[1]);
console.log(spt[2]);

console.log("------------------");

//날짜 Date
let today =new Date();

console.log(today);
console.log(today.getFullYear()); //년도
console.log(today.getMonth());   //월 0-11(1월~12월) 10?-> 11월
console.log(today.getMonth()+1+"월");
console.log(today.getDate()); //일
console.log(today.getHours()); //시
console.log(today.getMinutes()); //분
console.log(today. getSeconds()); //초

console.log(today.getDay()); //요일 0~6 ( 일 월 화 수 목 금 토)


//MAth
console.log(Math.abs(-10));//절대값
console.log(Math.round(123.56));//반올림
console.log(Math.ceil(123.01)); //올림
console.log(Math.floor(123.999));//내림 123.999->123
console.log(Math.floor(-123.999)); //내림 -123.999->124

console.log(Math.trunc(123.55)); //소수점 제거
console.log(Math.trunc(-123.55)); //-123.55   -123

console.log(Math.max(10,50)); //최대값
console.log(Math.min(10,50));//최소값

let arr =[10,30,50,90];
console.log(Math.max(...arr)); //console.log(Math.max(10,30,50,90));

console.log(Math.random()); //0보다 크면서 1보다 작은
//랜덤* 범위 갯수 +시작값   (랜덤*45+1)

console.log(Math.floor(Math.random()*45)+1);
console.log(Math.floor(Math.random()*45)+1);
console.log(Math.floor(Math.random()*45)+1);

console.log( Math.sqrt(225)); //루크 제곱근
console.log( Math.sqrt(25));  //루트

