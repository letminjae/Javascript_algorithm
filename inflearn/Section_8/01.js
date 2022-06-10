function solution(n){
    function DFS(L){
        if(L == 0) return;
        else{
            // console.log(L) 위에다가 하면 3, 2, 1 스택대기가 없어 바로 나옴
            DFS(L-1)
            console.log(L) // DFS(L)이 끝나기전 DFS(L-1)이 먼저 호출, 스택 대기를 함에 있어서 1, 2, 3으로 출력
        }
    }
    DFS(n);
}
solution(3);