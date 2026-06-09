let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

/* {코딩부분} */

function changeLink(url){
    
    // console.log(url.includes("://"));  //true false
    // console.log(url.indexOf("://"));  // 4 5   -1

    // if(url.includes("://")) {  //정상 주소 확인
    // } else { //주소 잘못됨
    // }

    //주소 필터링
    if(url.includes("://") == false){
        return "경로가 잘못되었습니다.";
    }

    // 정상 작업 시작

    // https -> https://secure          .human.or.kr
    // http ->  https://open            .human.or.kr

    // people.or.kr  -> htts://secure.people.or.kr 

    // console.log( url.indexOf("://"));
    // console.log( url.substring(url.indexOf("://")));
    // console.log( url.substring( url.indexOf("://")+3 ));

    let splitStr = url.split("://");

    // console.log(splitStr[0]);
    // console.log(splitStr[1]);

    if(splitStr[0] == 'https'){  //https
        //return splitStr[0] + "://secure." + splitStr[1];
        return "https://secure." + splitStr[1] ;
    } else { //http
        return "https://open." + splitStr[1] ;
        //return splitStr[0] + "s://open." + splitStr[1];
    }
    
}
/*
조건1. :// 형식이 없으면 경로가 잘못되었습니다.
조건2. https로 접속시 secure가 추가됨
조건3. http 로 접속시 open이 추가됨
조건4. http 접속, https 접속 모두 https 경로로 변경되어 출력됨
*/

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));

console.log(changeLink("http://test.ac.kr"));
console.log(changeLink("http://samplesiteurl.co.kr"));
console.log(changeLink("https://today.weather.com"));
console.log(changeLink("https:/today.weather.com"));
console.log(changeLink("https//today.weather.com"));