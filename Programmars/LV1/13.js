// lv1, 최소직사각형
// 긴길이 중 최대값, 짧은길이 중에 최대값

function solution(sizes) {
  let big = 0;
  let small = 0;
  for (let x of sizes) {
    if (x[0] > x[1]) {
      // 가로가 더 길다면
      if (big < x[0]) big = x[0];
      if (small < x[1]) small = x[1];
    } else {
      // 세로가 더 길다면
      if (big < x[1]) big = x[1];
      if (small < x[0]) small = x[0];
    }
  }
  console.log(big * small)
  return big * small;
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
