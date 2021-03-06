<!--강의내용-->
<h1>스크립트프로그래밍 정리
<p>

<h2>[21.06.01일 강의 정리]

## let키워드 & const키워드
### 최신버전의 JS Code
```jsx
let variable = 273;
const constant = "Hello";
```

### IE에서의 Code 
```jsx
var variableA = 273;
var variable = "Hello";
```

## 템플릿 문자열
### 최신버전의 JS Code

```jsx
let variable = 273;
console.log("변수값은 ${variable} 이다");
```

### IE에서의 Code 

```jsx
var variableA = 273;
console.log("변수값은" +variable+"이다");
```

## 사용 불가능한 코드
### 화살표 함수
### 최신버전의 JS Code

```jsx
const functionLiteral = () => {

};
```
### IE에서의 Code
```jsx
const functionLiteral = () => {

};
```

### for of 반복문
### 최신버전의 JS Code

```jsx
const array = ['가', '나', '다'];
for (let item of array) {
	console.log(item);
}
```
### IE에서의 Code

```jsx
var array = ['가', '나', '다'];
for (var item in array) {
	console.log(array[i]);
}
```

### 사용할수 없는 메소드를 사용한 코드
### 최신버전의 JS Code

```jsx
const array = [1, 2, 3, 4, 5];
array.forEach(item, index) => {
	console.log('${item}: ${index}');
});
```
### IE에서의 Code

```jsx
var array = [1,2,3,4,5];
for (var i = 0; i < array.length; i++) {
	var index - i;
	var item = arrat[i];
	console.log(item + ' : '+index);
}
```

## Window 객체
### window 객체 : 웹 페이지 그 자체를 상징.
* 새로운 화면을 열거나 웹 브라우저의 크기를 변경하는 등의 일
* 대표적으로 경고 출력을 하는 경고창과 입력을 하는 프롬프트 제공

>alert(<message>) --------------> 경고창을 출력<br>
>prompt(<message>, <임시글자>)---> 프롬프트를 출력<br>

### 예제:경고와 입력

```html
<!DOCTYPE html>
<html>
	<head>
		<title>alert and prompt</title>
		<script>
			//입력을 받습니다.
			var input = prompt('글자를 입력해주세요 ', '여기에 입력하세요 : ');

			//출력합니다.
			alert(input);
		</script>
	</head>
</html>
```

## screen 객체
### 웹 브라우저에서 공통으로 활용할 수 있는 속성

1. width ==> 화면의 너비
2. height ==> 화면의 높이
3. availWidth ==> 실제 화면에서 사용 가능한 너비
4. availHeight ==> 실제 화면에서 사용 가능한 높이
5. colorDepth ==> 사용 가능한 색상 수
6. pixelDepth ==> 한 픽셀당 비트 수

## location 객체와 history 객체
### 웹 브라우저에서 공통으로 사용 가능한 속성

1. href : 문서의 url주소
2. host : 호스트 이름과 포트번호
3. hostname : 호스트 이름
4. port : 포트번호
5. pathname : 디렉터리 경로
6. hash : 앵커이름(#~)
7. search : 요청 매개변수
8. protocol : 프로토콜 종류

### 메소드

1. assign(<링크>) : 매개변수로 전달한 위치로 이동합니다
2. reload() : 새로고침합니다
3. replace() : 매개변수로 전달한 위치로 이동합니다

### 페이지 이동

1. assign()메소드
2. replace()메소드 : 뒤로가기 버튼 사용 불가능

```jsx
location = 'http://hgggg.co.kr';
location.href = 'http://hgggg.co.kr';
location.assign('http://hgggg.co.kr');
location.replace('http://hgggg.co.kr');
```

### location 객체를 사용한 페이지 이동 예제

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Location</title>
		<script>
			//3 sec after
			setInterval(function () {
				location = 'http://hgggg.co.kr';
			}, 3000);
		</script>
	</head>
</html>
```

### history 객체의 메소드

1. forward() : 앞으로 이동
2. back() : 뒤로 이동

## navigator 객체
### 웹 페이지를 실행하는 웹 브라우저 정보가 들어있다
### 사용자의 웹 브라우저, OS를 구분할 수 있다

1. appCodeName : 웹 브라우저의 코드 이름
2. appName : 웹 브라우저의 이름
3. appVersion : 웹 브라우저의 버전
4. platform : 사용중인 OS의 시스템 환경
5. userAgent : 웹 브라우저의 전체적인 정보

### Desktop 웹 브라우저와 Phone 웹 브라우저 구분 예제

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Location</title>
		<script>
			// navigator 객체의 속성 출력
			var output = '';
			output += 'appCodeName: ' + navigator.appCodeName + '\n';
			output += 'appName: ' + navigator.appName + '\n';
			output += 'appVersion: ' + navigator.appVersion + '\n';
			output += 'platform: ' + navigator.platform + '\n';
			output += 'userAgent: ' + navigator.userAgent + '\n';		
			alert(output);
			// ios & android 웹 브라우저 구분
			if (navigator.userAgent.toLowerCase().indexOf('iphone') >= 0,
				navigator.userAgent.toLowerCase().indexOf('ipad') >= 0,
				navigator.userAgent.toLowerCase().indexOf('ipod') >= 0,
				navigator.userAgent.toLowerCase().indexOf('android') >= 0) {
					alert('모바일 웹 브라우저 입니다.');
				} else {
					alert('데스크탑 웹 브라우저 입니다');
				}
		</script>
	</head>
</html>
```


<br>


<h2>[21.05.18일 강의 정리]

## 전역변수
### 전역변수, 전역함수, 전역객체 : 모든 곳에서 사용 가능한 것들
__filename => 현재 실행중인 코드의 파일 경로를 나타냅니다<br>
__dirname => 현재 실행중인 코드의 폴더 경로를 나타냅니다<br>
```jsx
console.log(__filename);
console.log(__dirname);
```

## process 객체의 속성 & 이벤트
### Node.js는 process 전역 객체를 제공
** env => 컴퓨터의 환경정보를 나타냅니다<br>
** version => node.js의 버전을 나타냅니다<br>
** versions => node.js와 종소된 프로그램의 버전을 나타냅니다<br>
** arch => 프로세서의 아키택쳐를 나타냅니다<br>
** platform => 플랫폼을 나태냅니다<br>
<br>
** exit([exitCode=0]) => 프로그램을 종료합니다<br>
** memoryUsage() => 메모리 사용정보 객체를 리턴합니다<br>
** uptime() => 현재 프로그램이 실행된 시간을 리턴합니다<br>




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

### [기본예외처리]
사전에 해당 데이터가 undefined인지 조건문으로 확인.
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

### [고급 예외 처리-예외상황 확인]
배열 생성시 길이를 음수로 지정하면 RangeError 발생.
```jsx
//예외를 발생시킨다
>const array = new Array(-2000);
>RangeError : Invalid array length
```
### [고급 예외 처리-try catch finally구문 활용]
```jsx
try {
	//예외가 발생
	const array = new Array(-2000);
} catch (exception) {
	console.log(`${exception.name} 예외가 발생했습니다.`);
} finally {
	console.log('finally 구문이 실행되었습니다.');
}

>RangeError 예외가 발생했습니다.
finally 구문이 실행되었습니다.
```
### [예외객체]
*예외가 발생하면 어떤 예외가 발생했는지 정보 전달<br>
*catch 구문의 괄호 안의 변수<br>
*name속성과 message속성 존재<br>

### ReferenceError후에 예외객체의 name속성과 message속성을 출력함
```jsx
try {
	error.error.error();
} catch (e) {
	console.log(e.name);
	console.log(e.message);
}

>ReferenceError
error is not defined
```

### [예외강제발생]
* throw키워드 사용 
* throw키워드 뒤에는 문자열 혹은 Error객체 입력
```jsx
throw '강제예외';
```

### 자세한 예외출력은 Error객체를 사용한다
```jsx
//예외객체를 만듭니다
const error = new Error('message');
error.name = 'Error No.1';
error.message = 'Error`s Message';
//예외를 발생시킵니다
throw error;
```

*문자열을 사용할 때는 catch구문의 예외 객체에 간단한 문자열만 전달된다
```jsx
try {
	//예외를 강제로 발생
	throw '예외가 발생했습니다';
} catch (exception) {
	//예외객체를 출력
	console.log("예외가 발생했습니다.");
	console.log("exception");
}

>예외가 발생했습니다.
exception
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
