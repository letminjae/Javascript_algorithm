// lv1, 체육복

function solution(n, lost, reserve) {
  var answer = n - lost.length;
  // 처음 가능한 학생수 = n - lost.length

  let realLost = lost.filter((lostEl) => !reserve.includes(lostEl));
  let realReserve = reserve.filter((reserveEl) => !lost.includes(reserveEl));
  answer += lost.length - realLost.length;

  realLost.sort((a, b) => a - b);

  realLost.forEach((l) => {
    if (realReserve.length === 0) {
      return;
    }
    if (realReserve.includes(l - 1)) {
      realReserve = realReserve.filter((r) => r !== l - 1);
      answer++;
    } else if (realReserve.includes(l + 1)) {
      realReserve = realReserve.filter((r) => r !== l + 1);
      answer++;
    }
  });
  return answer;
}
