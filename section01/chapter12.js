// 1. 함수 표현식: 함수를 변수에 담아서 사용하는 방식
// -> 호이스팅 불가
function funcA() {
  //   console.log("funcA");
}

// javaScript는 함수도 문자나 숫자 취급
let varA = funcA;
varA();

let varB = function () {
  // 익명 함수
  //   console.log("funcB");
};

varB();

// 2. 화살표 함수: 함수 표현식을 줄여서 사용하는 방식
// let varC = () => {
//   return 1;
// };

// let varC = () => 1;
// let varC = (value) => value + 1;
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
