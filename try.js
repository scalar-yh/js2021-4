// try {
// 	//예외가 발생
// 	const array = new Array(-2000);
// } catch (exception) {
// 	console.log(`${exception.name} 예외가 발생했습니다.`);
// } finally {
// 	console.log('finally 구문이 실행되었습니다.');
// }

try {
	error.error.error();
} catch (e) {
	console.log(e.name);
	console.log(e.message);
}