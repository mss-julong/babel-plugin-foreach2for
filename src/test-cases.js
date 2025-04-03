// 테스트 케이스 1: 기본 사용
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
  console.log(num);
});

// 테스트 케이스 2: index 사용
const fruits = ['apple', 'banana', 'orange'];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// 테스트 케이스 3: array 파라미터 사용
const letters = ['a', 'b', 'c'];
letters.forEach((letter, index, array) => {
  console.log(`Current: ${letter}, Full array: ${array}`);
});

// 테스트 케이스 4: 블록 스코프와 함께 사용
const users = [{ name: 'John' }, { name: 'Jane' }];
users.forEach(user => {
  const greeting = `Hello ${user.name}`;
  console.log(greeting);
});

// 테스트 케이스 5: 중첩 forEach
const matrix = [[1, 2], [3, 4]];
matrix.forEach(row => {
  row.forEach(num => {
    console.log(num);
  });
});

// 테스트 케이스 6: 메소드 체이닝
const data = [1, 2, 3];
data
  .filter(n => n > 1)
  .forEach(n => {
    console.log(n);
  });