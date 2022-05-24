function solution(test) {
    let answer = 0;
    let m = test.length; //test본 횟수 : 3번
    let n = test[0].length; //학생수 :4명
    for(let i = 1; i<=n; i++){ // 1번 학생부터 n번 학생 까지 for문 (멘토 학생)
        for(let j = 1; j<=n; j++){ // 1번 학생부터 n번 학생 까지 for문 (멘티 학생)
            // console.log(i, j) // 멘토 멘티가 될 수 있는 경우
            let cnt = 0;
            for(let k = 0; k < m; k++){ // test를 본 행
                let pi = pj = 0; // 확실한 등수
                for(let s = 0; s < n; s++){ // test를 한번 볼 때 힉생들의 등수 (열)
                    if(test[k][s] === i) pi = s; //k번째 테스트의 s위치(몇 등)에 i번 학생이 있으면 i번학생의 등수는 s다 
                    if(test[k][s] === j) pj = s; //k번째 테스트의 s위치(몇 등)에 j번 학생이 있으면 j번학생의 등수는 s다
                }
                if(pi<pj) cnt++; // k번째 test를 다 거치고 난 이후 멘티 등수가 멘토 등수보다 낮으면 카운트 ++
            }
            if(cnt === m) answer++;
        }
    }
    return answer;
}

// 학생수는 4명, 테스트는 3번 본 경우
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

// 첫째줄의 배열에서 