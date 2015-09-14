// 1. 원소가 100, 200, 300으로 3개인 배열을 만들어서 numbers 라는 변수에 저장하는 코드를 작성하세요.
var numbers = [100, 200, 300];
console.log('Problem 1');
console.log('numbers : ' + numbers);

// 2. 원소가 2개인 배열을 만드는데, 두 원소의 종류는 모두 배열입니다. 첫 번째 원소에는 숫자 3개가 원소로 포함되어 있고, 두 번째 원소에는 문자열 3개가 원소로 포함되어 있어야 합니다. 
// 이 조건을 만족하는 배열을 만들어서 nested 라는 변수에 저장하세요.
var nested = [[1, 2, 3], ['one', 'two', 'three']];
console.log('Problem 2');
console.log('nested[0] : ' + nested[0]);
console.log('nested[1] : ' + nested[1]);

// 3. "이름", "성별", "개발자"을 키(key)로 가지는 오브젝트 타입의 값 "수강생" 변수를 작성하세요. 각 키에 해당하는 값은 임의로 작성하되, 
// "이름", "성별"은 문자열 타입, "개발자"는 불리언 타입의 값이어야 합니다.
var 수강생 = { 이름: '최임성', 성별: '남자', 개발자: true };
console.log('Problem 3');
console.log('수강생.이름 : ' + 수강생.이름);
console.log('수강생.성별 : ' + 수강생.성별);
console.log('수강생.개발자 : ' + 수강생.개발자);

// 4. 배열과 인덱스 숫자를 인수로 전달하면 전달한 배열에서 전달한 인덱스 숫자에 해당하는 원소를 반환하는 함수를 만드세요. 함수 이름을 "원소"라고 하면 다음과 같이 동작해야 합니다.
// ex)
// var arr = [10, 20, 30];
// console.log( 원소(arr, 0) ); // 10 출력
// console.log( 원소(arr, 2) ); // 30 출력
function 원소(array, index) {
	return array[index];
}
console.log('Problem 4');
var arr = [10, 20, 30];
console.log('arr[0] : ' + 원소(arr, 0));
console.log('aar[2] : ' + 원소(arr, 2));

// 5. 숫자를 인수로 전달하면 그 숫자의 세 제곱을 반환하는 함수 "세제곱"을 작성하세요.
// ex)
// console.log( 세제곱(2) ); // 8
// console.log( 세제곱(3) ); // 27
function 세제곱(input) {
	return Math.pow(input, 3);
}
console.log('Problem 5');
console.log('2의 세제곱 : ' + 세제곱(2));
console.log('3의 세제곱 : ' + 세제곱(3)); 

// 6. 날짜를 전달하면 연월일과 요일을 문자열로 반환하는 함수 "날짜"를 작성하세요. 이 함수는 다음과 같이 동작해야 합니다.
// ex)
// var today = new Date();
// console.log( 날짜(today) ); // "2015년 9월 13일 (일)"
function 날짜(date) {
	//return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일 (' + '일월화수목금토'[date.getDay()] + ')';
	return `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 (${'일월화수목금토'[date.getDay()]})`;
}
console.log('Problem 6');
var today = new Date();
console.log('오늘 날짜 : ' + 날짜(today));