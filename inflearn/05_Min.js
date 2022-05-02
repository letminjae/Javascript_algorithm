function solution(arr) {
    // arr.sort((a,b) => a - b);
    // return arr[0];
    // sort 메소드를 이용해 내림차순 정렬후 arr의 0번쨰 값 출력 한 코드
    let answer;
    let min = Number.MAX_SAFE_INTEGER; // 가장 큰 숫자로 미리 초기화를 시켜놓음
    for(let i = 0; i < arr.length; i++){ // 배열 탐색이니 0부터 for문 돌림
        if(arr[i] < min){
            min = arr[i];
        }
    }
    answer = min;
    return answer;
}
let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
