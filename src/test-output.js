// 테스트 케이스 1: 기본 사용
const numbers = [1, 2, 3, 4, 5];
(function (_ret) {
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    {
      _ret = console.log(num);
    }
  }
  return _ret;
})();

// 테스트 케이스 2: index 사용
const fruits = ['apple', 'banana', 'orange'];
(function (_ret2) {
  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i],
      index = i;
    {
      _ret2 = console.log(`${index}: ${fruit}`);
    }
  }
  return _ret2;
})();

// 테스트 케이스 3: array 파라미터 사용
const letters = ['a', 'b', 'c'];
(function (_ret3) {
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i],
      index = i,
      array = letters;
    {
      _ret3 = console.log(`Current: ${letter}, Full array: ${array}`);
    }
  }
  return _ret3;
})();

// 테스트 케이스 4: 블록 스코프와 함께 사용
const users = [{
  name: 'John'
}, {
  name: 'Jane'
}];
(function (_ret4) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    {
      const greeting = `Hello ${user.name}`;
      _ret4 = console.log(greeting);
    }
  }
  return _ret4;
})();

// 테스트 케이스 5: 중첩 forEach
const matrix = [[1, 2], [3, 4]];
(function (_ret5) {
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    {
      _ret5 = function (_ret6) {
        for (let i = 0; i < row.length; i++) {
          const num = row[i];
          {
            _ret6 = console.log(num);
          }
        }
        return _ret6;
      }();
    }
  }
  return _ret5;
})();

// 테스트 케이스 6: 메소드 체이닝
const data = [1, 2, 3];
(function (_ret7) {
  for (let i = 0; i < data.filter(n => n > 1).length; i++) {
    const n = data.filter(n => n > 1)[i];
    {
      _ret7 = console.log(n);
    }
  }
  return _ret7;
})();
