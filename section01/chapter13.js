// 1. 콜백 함수: 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미 한다. main 함수가 언제든지 실행시킬 수 있다.
function main(value) {
  //   console.log(1);
  value();
  //   console.log(2);
}

// function sub() {
//   console.log("i am sub");
// }

// main(sub);

main(() => {
  //   console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
