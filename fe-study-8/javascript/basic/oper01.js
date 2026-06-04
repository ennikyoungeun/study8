

let x =10;
let y =10;
let z ='10';

console.log(x+y);
console.log(x-y);
console.log(x+z);

console.log( 2**4 );//2의 4제곱

// ==   ===
// ==는 값이 같으면 true, ===는 값과 자료형이 모두 같아야 true
console.log( x==y ); //true
console.log( x==z ); //true

console.log( x===y ); //true
console.log( x===z ); //false

console.log( x>5 && y>0);
console.log( x==1 || y==='10');

let q = 10;
let w = 20;
let e = 30;

console.log(q+e);
console.log(q+w+e);

//형변환(타입변환)
//String() 
// Number() 

console.log( q+String(e) ); 
console.log( q+Number(w)+ e );

console.log( Number('425432') );
console.log( Number('425432.1232') );

if(q==10){
    console.log('q는 10입니다.');
}

//&&
q==11 && console.log('&& 11확인출력'); //q==11이 false이므로 && 뒤의 console.log는 실행되지 않음.
q==10 && console.log('&& 10확인출력'); //q==10이 true이므로 && 뒤의 console.log가 실행됨.
// true && true --> true
//false|| true --> true

console.log(10==10.0); //true.
console.log(10===10.0); //true. 자바스크립트에서는 정수와 실수를 구분하지 않음. 모두 Number 타입으로 취급됨.
console.log(Naumber('10')===Number('10.0')); 
//true. 자바스크립트에서는 정수와 실수를 구분하지 않음. 모두 Number 타입으로 취급됨.



