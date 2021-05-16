try {
	//예외를 강제로 발생
	throw '예외가 발생했습니다';
} catch (exception) {
	//예외객체를 출력
	console.log('예외가 발생했습니다.');
	console.log("exception");
}