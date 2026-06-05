
//함수 JS

//js 에서는 함수도 전달가능


function func01(a){
    console.log(a);
}
func01(1231);

function func02(f){ //f: 함수
    console.log('func02()');
    f();// 함수 호출,   f : 함수  f();
}

const temp1= ()=>{
    console.log('temp1()함수호출');
}
const temp2=()=> {
    console.log('temp2() 함수 호출  temp2()');
}

func02(temp1); //함수전달
func02(temp2);//함수 전달


//콜백 함수 call back 나중에 /특정 시점에 실행할 함수

function reserve(name,callback) {
    console.log("예약 종류 확인");
     console.log("예약 가능 여부 확인");
    console.log("예약 스케쥴 조정");

      //
      //....
    console.log(name+'님 예약 가능 확인->예약완료처리');
      //....
    console.log('예약 완료 안내');
    callback();
}

function sendMsg(){
    console.log('문자로 안내문자 전송');
}

reserve('김부장',sendMsg);

reserve('최이사',function(){
    console.log('전화로 안내해주기');
});

reserve('강회장',()=>{
    console.log('카톤안내메세지 전달');
});