/*
    Sucesión / Secuencia de fibonacci
    1, 1, 2, 3, 5, 8, 13 ,21 ,34, etc....

    Entrada: "n" elemento a mostrar
*/

export const fib = (n: number): number => {
    // 1. condición de corte -- stack overflow
    // fib(3)
    if(n<= 2) return 1
    return fib(n-1) + fib(n-2)
}

// ¿Como mejoramos este algoritmo?

type MemoType = Record<number, number>
export const memoizedFib = (n: number, memo: MemoType ={}): number => {
    /*
        {
            3: 2,
            4: 3,
            5: 5
        }
    
    */ 
    if(n in memo) return memo[n]
    if(n<= 2) return 1
    memo[n] = memoizedFib(n-1, memo) + memoizedFib(n-2, memo)
    return memo[n]


}
// fib(7) -- 13
// fib(3) -- 2