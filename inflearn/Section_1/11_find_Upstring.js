function solution(s){         
    let answer = 0;
    for(let x of s){
        // 아스키 코드 변환 메서드 = charCodeAt();
        // 대문자 아스키 코드의 넘버는 65~90까지이다.
        // let num = x.charCodeAt();
        // if(num >= 65 && num <= 90){
        //     answer++;
        // }

        if(x === x.toUpperCase()){
            answer++;
        }
    }
    return answer;
}
let str="KoreaTimeGood";
console.log(solution(str));
