let area1 = getArea(130, 20);
console.log(area1);
let area2 = getArea(230, 20);
console.log(area2);

// 함수선언: 호출보다 밑에 선언해도됨.
// 호이스팅
// -> 최상단으로 끌어올리다. 라는 뜻
function getArea(w, h) {
  function another() {
    // 중첩 함수
    console.log("another");
  }

  another();
  let area = w * h;
  return area;
}
