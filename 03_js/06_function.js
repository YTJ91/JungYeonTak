/* 
    함수(function)
        - 코드블록 단위로 실행할 코드 작성.
            => 함수 정의. function 키워드와 함께 작성.
        - 만든 함수를 재사용을 할 수 있다.
            => 함수이름 또한 식별자이기 때문에 중복될 수 없다.

    매개 변수 (parameter)
        - 함수를 실행하는데 필요할 값을 호출 시점에 전달받는 변수.
            => 함수 내부에서 사용하는 변수처럼 사용.
            => 함수 내부에서만 유효한 범위를 가진다.
        - 매개 변수를 통해서 전달된 실제값을 인자(argument)라고 한다.

    return
        - 함수의 실행결과로 값을 반환한다.
            => 전달받은 매개변수에 연산을 해서 값을 받고자 할 때 사용한다.
            => 함수의 실행결과를 다른 함수의 인자로 사용하기도 한다.
        -return은 함수의 종료를 의미하기도 한다.
            => return 이후의 코드는 실행하지 않는다.
*/

// 매개 변수가 없는 함수, 반환 값이 없는 함수. => 기본적으로 반복해서 사용할 코드를 작성.
function sum() {
  var num1 = 3;
  var num2 = 4;
  var result = num1 + num2;
  console.log(result);
}
sum();

// 매개변수가 있는 함수, 반환 값이 없는 함수.
function sum02(a, b) {
  console.log(a + b);
}
sum02(10, 5);
sum02(7, 9);

console.log(sum02(2, 3));
// return(반환값)이 있는 함수
function sum03(a, b) {
  return a + b;
}
var result = sum03(10, 12);
console.log(result);

function sub(a, b) {
  return a - b;
  //return 이후의 코드는 실행되지 않는다.
  console.log(a - b);
}

// 두 숫자를 곱하는 함수와 나누는 함수 만들기

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// 함수로 두 숫자의 평균 구하기
var result02 = divide(sum03(2, 3), 2);
console.log(result02);

/* 
    호이스팅(hoisting)
        - js는 코드를 실행하기 전에 식별자에 대한 정보를 파악하는 과정을 거친다.
        - 식별자들을 고드의 최상단에 끌어올리는 동작을 한다.
            => 변수 , 함수 선언 이전에 참조해도 오류가 발생하지 않는다.
            => 실제 코드가 실행되기 이전에 오류가 발생되지 않기 때문에 발견이 늦어진다.
        -변수는 선언부만 끌어올려진다. 즉, 할당 부분은 호이스팅 되지 않는다.
        - 함수는 함수 선언문으로 작성한 코드는 실행부분도 끌어올려진다.
*/
console.log(a); // 변수 호이스팅 발생. undefined 출력.

console.log(a + 1); // 선언부만 호이스팅 되기 때문에 undefined + 1의 결과 NaN 출력.
var a = 10;

console.log(square(3)); // 함수 호이스팅 발생 square 함수 선언문으로 작성했기 때문에 실행도 된다.
function square(num) {
  return num * num;
}

/* 
    가명 함수와 익명 함수

    가명 함수, 함수 선언문
        - 이름이 있는 함수
        - 함수 호이스팅이 일어난다.

    익명 함수, 함수 표현식
        - 이름이 없는 함수
        - 함수 호이스팅이 일어나지 않는다. 
        - JS 에서 함수는 값으로 취급된다. => 변수에 담긴다.
        - 다른 함수의 인자로 전달되는 함수 (콜백 함수)에 주로 사용된다.
*/
foo(); // foo 함수는 함수 선언문으로 작성했기 때문에 호이스팅 발생.
function foo() {
  console.log("foo 함수 실행");
}

let bar = function () {
  console.log("bar 함수 실행");
};
bar();
