// lv1, 소수 찾기
function solution(n) {
  let arr = [];

  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  return arr.filter((v) => v !== 0).length;
}
