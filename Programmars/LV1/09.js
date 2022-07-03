// lv1, 두 개 뽑아서 더하기

function solution(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
      arr.sort((a, b) => a - b);
    }
  }
  const answer = [...new Set(arr)];
  return answer;
}

let numbers = [2, 1, 3, 4, 1];
solution(numbers);
