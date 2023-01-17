/* 
    배열(array)
        - 여러 데이터를 순차적으로 나열한 자료 구조.
            => 배열의 각 자료를 요소(element)라고 한다.
            => 인덱스 값으로 참조하는 형태, 인덱스는 0부터 시작한다.
        - 배열의 총 크기를 배열의 길이라고하며, 배열.length 프로퍼티 참조 할 수 있다.
            => 일반적인 경우에는 배열의 크기와 요소의 개수가 동일하지만, 아닌 경우도 있다.

*/
let arr = [1, 2, 3, 4];
console.log(arr[3]); // 배열의 3번째 인덱스 참조.
arr[4] = 5;
console.log(arr[4]);
// arr[10] = 10;
console.log(arr);

console.log(arr.length); // 배열의 길이

// 배열의 맨 앞에 데이터 추가 및 제거
console.log("-----push, unpush-----");
arr.push(10); // 배열의 마지막에 요소를 추가, 원본 배열이 변경된다.
console.log(arr);
let popedNum = arr.pop(); // 배열의 마지막 요소를 제거하고 그 값을 반환다. 원본 배열이 변경된다.
console.log(arr);

console.log("-----shift,unshift-----");
// 배열에 맨 앞에 데이터에 추가 (unshift) 및 제거(shift)
arr.unshift(0); // 배열의 맨앞에 데이터 추가, 원본 배열이 변경된다.
console.log(arr);
let shiftNum = arr.shift(); // 배열의 첫번째 요소를 제거하고 그 값을 반환한다. 원본 배열이 변경된다.
console.log(arr, shiftNum);

console.log("-----splice-----");
// splice : 배열의 중간요소를 제거 및 추가.
let spliceNum = arr.splice(0, 3, 1, 4); // 0번째 부터 3개 삭제, 그 값을 배열로 반환, 원본 배열이 변경된다. 세번째 인자부터는 배열에 추가한다.
console.log(arr, spliceNum);

// slice : 배열의 중간요소를 복사.
let fruts = ["orange", "apple", "banana"];
let sliceNum = fruts.slice(0, 2); // 0부터 2전까지 복사. 원본배열이 변경되지 않는다.
console.log(fruts, sliceNum);

// fruts 배열 모든 요소 출력해보기
for (let i = 0; i < fruts.length; i++) {
  console.log(fruts[i]);
}

// 어떤 배열이 와도 모든 요소 출력하는 함수 만들기,
function printElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printElements(fruts);

/* 
  배열의 고차함수
    - 배열의 각 요소를 순화하며 요소를 인자로 받는 콜백함수를 실행한다.

  forEach()
    - 각 요소를 순화하며 콜백함수를 실행한다.
    - return되는 값이 없다.

  filter()
    - 각 요소를 순화하며 콜백함수를 실행햐며, 특정 조건을 만족하는 요소만을 새로운 배열로 모아서 반환한다.
    - 콜백함수의 return 값이 boolean(true,false)값이어야 한다.
    - 기본 배열은 변경되지 않는다.

  map()
    - 각 요소를 순화하며 콜백함수를 실행햐며, 요소의 값을 통해서 새로운 값을 만들어 내며 새로운 배열로 모아서 반환한다.
    - 해당 반복자의 콜백함수의 return 값이 곧 새로운 배열의 요소가 된다.
    - 기본 배열은 변경되지 않는다.
*/
let userList = [
  { id: 1, name: "seok", age: 31 },
  { id: 2, name: "minsu", age: 29 },
  { id: 3, name: "cheolsu", age: 38 },
];

console.log("-----forEach()-----");
userList.forEach(function (user) {
  console.log(user.name);
});

userList.forEach((user) => {
  console.log(user.name);
});

console.log("-----filter()-----"); //필터
const result = userList.filter(function (user) {
  return user.age > 30;
});
console.log(result);

userList.filter((user, idx) => {
  console.log("%d번째 유저", idx + 1);
  return user.age > 30;
});

// return 생략
userList.filter((user) => user.age > 30);

console.log("-----map()-----"); //바꾸는 목적
const result02 = userList.map(function (user) {
  return user.name;
});
console.log(result02);

userList.map((user) => {
  return user.name;
});

userList.map((user) => user.name);

// user 중에 짝수번째 유저만 모아서 result03에 담기

let result03 = userList.filter(function (_, idx) {
  return (idx + 1) % 2 === 0;
});

result03 = userList
  .filter((_, idx) => (idx + 1) % 2 === 0)
  .map((user) => user.name);

// const result03 = userList.filter((user, idx) => (user.idx + 1) % 2 === 0);
console.log(result03);
