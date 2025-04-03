const numbers = [1, 2, 3, 4, 5];
(function (_ret) {
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i],
      index = i,
      sources = numbers;
    {
      console.log(num);
      console.log(index);
      _ret = console.log(sources);
    }
  }
  return _ret;
})();
