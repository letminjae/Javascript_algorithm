// lv1, 문자열 마음대로 정렬하기

function solution(strings, n) {
  strings.sort((a, b) => {
    let first = a[n];
    let second = b[n];
    if (first === second) {
      return (a > b) - (a < b);
    } else {
      return (first > second) - (first < second);
    }
  });

  return strings;
}

solution(["sun", "bed", "car"], 1);
