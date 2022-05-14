function solution(s){  
    let answer="";
    // for(let i = 0; i < s.length; i++){
        // if(s.indexOf(s[i]) === i){
        //     answer += s[i];
        // }
    // }
    for (let x of s){
        if(!answer.includes(x)){
            answer += x
        }
    }
    return answer;
}
console.log(solution("ksekkset"));
