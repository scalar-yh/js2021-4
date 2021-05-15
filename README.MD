<!--강의내용-->
<h1>스크립트프로그래밍 정리
<p>
<h2>[21.05.11일 강의 정리]

## 예외처리
## [예외와 기본 예외처리]
### 예외란? => 실행에 문제가 발생할 경우, 자동 중단되는데 이렇게 발생한 오류를 뜻함.

### 예외처리 => 오류에 대처할 수 있도록 하는 것.

## [TypeError 기본 예외 처리 예제]
undefined 자료형을 일반적 객체 / 함수처럼 다루면 TypeError 예외가 발생함.

```jsx
//함수선언
function callThreeTimes(callback) {
	for (let i = 0; i < 3; i++) {
		callback();
	}
}
//정상실행
callThreeTimes(function () {
	console.log("안녕하세요");
});
//예외발생
callThreeTimes();
```

### [기본예외처리]<br>사전에 해당 데이터가 undefined인지 조건문으로 확인.
```jsx
//함수선언
function callThreeTimes(callback) {
	if (callback) {
		for (let i = 0; i < 10; i++) {
			callback();
	}
} else {
	console.log("매개변수 callback이 지정되지 않았습니다.");
	}
}
//정상실행
callThreeTimes(function () {
	console.log("안녕하세요");
});
//예외발생
callThreeTimes();
```
### try catch finally 구문
```jsx
try {
	//예외가 발생
} catch (exception) {
	//처리 시작
} finally {
	//무조건적인 처리 실행
}
```

### catch 구문 / finally 구문은 생략이 가능하다?
```jsx
try {
	//예외가 발생
} catch (exception) {
	//처리 시작
}
혹은
try {
	//예외가 발생
} finally {
	//무조건적인 처리 실행
}
```







<h2>[21.04.13일 강의 정리]

## 함수

[익명함수]
```jsx
let <변수이름> = function () {};
```
함수가 코드의 집합=중괄호 내부에 코드를 삽입하라는 의미.
이름을 붙이지 않고 함수생성
함수를 호출하면 함수 내부의 코드가 모두 실행

EX)
```jsx
let 함수 = function () {
	console.log("함수의 첫번째 줄");
	console.log("함수의 두번째 줄");
};
함수();
console.log(함수);
```
[화살표함수]
하나의 표현식을 리턴하는 함수를 만들때 중괄호 생략 가능
익명함수 -> 화살표함수 변환가능

[함수-기본활용의형태]
매개변수와 리턴




<h2>[21.03.30일 강의 정리]

## 중첩 조건

조건문 안에 또 다른 조건문을 중첩 시키는 경우. 

```jsx
/*중첩조건문의 기본형*/
if (불 표현식){ 
	if (불 표현식){
} else { 
		문장;
}
	if (불 표현식){
		문장;
} else {
		문장;
	}
}
```

## if else if 조건문

중복되지 않는 세가지 이상의 조건을 구분할 때 사용한다. 

```jsx
/*if else if조건문의 기본형*/
if (불 표현식){
} else if (불 표현식){
} else if (불 표현식){
} else {
}
```

## switch 조건문

break키워드는 switch조건문이나 반복문을 탈출 해야 할 때 사용.

```jsx
let input = 32;
switch (input %2) {
	case 0:
		console.log("짝수입니다.");
		break;
	case 1:
		console.log("홀수입니다");
		break;
}
```
## 4.반복문

[배열]

배열은 여러 자료를 한번에 다룰 수 있는 자료형. 선언 형태는 아래와 같다.

```jsx
>let 이름 = [자료,자료,자료,자료]
```

**대괄호 내부의 자료는 쉼표로 구분한다.

**배열에는 여러 자료형이 섞여있을 수 있다.

다음과 같은 예제를 입력한 뒤, array를 입력하면 [52, 73, '아침밥', '점심밥', true, false] 가 출력된다.

```jsx
>let array = [52, 73, '아침밥', '점심밥', true, false]
	undefined
>array
	[52, 73, '아침밥', '점심밥', true, false]
```

배열 안에 들어있는 각 자료를 "요소" 라 한다. 배열의 요소에 접근 할 때는 대괄호 사용.

## type script 관련 오류

react native project를 개발하다보면 이런 오류가 발생한다.

vs code → file → preferences → settings → javaScript validate → disable상태

typescript가 아닌 javascript에만 해제.
