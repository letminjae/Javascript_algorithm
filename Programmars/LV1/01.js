// LV1, 최대공약수와 최소공배수
function solution(n, m) {
  let GCD = getGCD(n, m);
  let LCM = (n * m) / GCD;
  return [GCD, LCM];
}

function getGCD(a, b) {
  if (a % b === 0) {
    return b;
  } else {
    return getGCD(b, a % b);
  }
}

console.log(solution(3, 12));