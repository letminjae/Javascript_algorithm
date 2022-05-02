function solution(a, b, c){
    let answer = "YES";
    let max;
    let total = a + b + c;
    if(a > b){
        max = a
    } else{
        max = b
    };
    if(c > max){
        max = c
    }
    if(total - max <= max ) {
        answer = "NO";
    } 
    return answer;
}
console.log(solution(6, 5, 11));

// 삼각형을 만들 수 있는 조건 : 가장 긴 막대 <= 짧은막대 a + 짧은막대 b