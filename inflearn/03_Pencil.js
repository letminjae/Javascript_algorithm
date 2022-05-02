function solution(n){
    // let answer = 0;
    // answer = Math.ceil(n/12); 정석 방법
    if(n % 12 !== 0){
        return Math.floor(n / 12) + 1;
    } else {
        return n / 12
    }
    // return answer;
    
}
console.log(solution(13));

// 학생들이 다 연필을 받을 수 있도록 나머지가 있으면 +1 을 한다.