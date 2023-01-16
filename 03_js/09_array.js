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

function printElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printElements(fruts);
