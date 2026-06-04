
//javascript

console.log('basic01.js');
console.log('text');

//변수선언
// var let const

//일반적인 변수선언:let
//상수선언:const 

let a=10;
let b=200123;
let c= " 안녕하세요 ";
let d= '작은 따옴표';
let e= true;
let f= false;
const g= 30;
const h= "헬로우";

a=20;
//g=50; //const는 상수이므로 값 변경 불가

console.log('abc');
console.log("abc");
console.log('작은따옴표"안녕"');
console.log("큰따옴표'안녕'");
console.log(`백틱문자로 감싸면"큰따옴표"'작은따옴'편함`);

let x=20;
let y;

console.log(x); //20
console.log(y); //undefined. 값이 할당되지 않은 변수는 undefined로 출력됨.

z=50;
console.log(z); //50. var, let, const 없이 변수를 선언하면 자동으로 전역변수가 됨. 권장되지 않음.

//let z =30; //불가
//console.log(z); //30. let으로 z를 다시 선언하면 기존의 z는 가려지고 새로운 z가 생성됨. var로 선언하면 오류 발생.

var z=30;
console.log(z); //30. var로 z를 다시 선언하면 기존의 z는 가려지고 새로운 z가 생성됨. let으로 선언하면 오류 발생.
var z=20;
console.log(z); //20. var로 z를 다시 선언하면 기존의 z는 가려지고 새로운 z가 생성됨. let으로 선언하면 오류 발생.

//문제 발생시킬 리스크 높다 --> var는 사용하지 않는 것이 좋음---> let과 const를 사용하는 것이 좋음.

