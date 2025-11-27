// 스코프
// -> 전역(전체 영역) 스코프, 지역(특정 영역)스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funB() {
    let c = 3;
  }
}

funA();

for (let idx = 0; idx < 10; idx++) {
  let d = 1;

  function funC() {
    // 함수 선언문은 함수 내에서는 지역 스코프를 가지지만, 반복문, 조건문에서는 전역 스코프를 가진다.
    // 꼭 함수 선언문을 이용해야한다. 함수 표현식, 화살표 함수는 불가!!!
    // 근데 함수는 반복문이나 조건문에서 선언하지 않기 때문에, 함수 안에서 지역 스코프를 가진다고 생각하자.
    let e = 2;
    console.log(e);
  }
}
funC();

if (true) {
  function funD() {
    let f = 3;
    console.log(f);
  }
}

funD();
