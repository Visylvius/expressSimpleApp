function oddBall(arr) {
  return arr.filter(function(x) {
    return x % 2 === 1;
  }).reduce(function(a, b) {
    return a + b;
  });
}
console.log(oddBall([1,2,3,4,5,6,7,8]));
