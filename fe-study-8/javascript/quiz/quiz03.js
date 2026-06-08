let arr1=[10,'20',30];
let arr2=[10,'20',30];
let arr3=[10,20,30];
let arr4=['10','20','30'];

let arr5=[10,20,30,40];

const compareArr = (arr1,arr2)=> {
    for (let i =0; i<arr1.length; i++) {
        console.log( arr1[i] == arr2 [i]);
    }
}

console.log ('비교 1');
compareArr(arr1,arr2);
console.log ('비교 2');
compareArr(arr3,arr4);
console.log ('비교 3');
compareArr(arr2,arr4);



const compareArr2 = (arr1,arr5)=> {
    // 배열 길이가 다를때 비교하기..
    const maxLength= Math.max(arr1.length,arr5.length); 
    for (let i =0; i<maxLength; i++) {
        console.log( arr1[i] == arr5[i]);
    }
}
console.log ('비교 5');
compareArr2(arr1,arr5);




