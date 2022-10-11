// generate store
export const generateStore = (m,n) => {
    let store = new Array(m).fill(0)
                            .map(item => new Array(n).fill(0))

    for (let i=0; i<=4; i++) {
        for (let j=0; j<=4; j++) {
            store[i][j] = Math.round(Math.random())
        }
    }
    return store;
}


// game of life logic
export const gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;
 
    const result = new Array(m).fill(0).map(item => new Array(n).fill(0));
    const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
 
    const count_live = (i,j) => {
        let count = 0
        for (const dir of dirs) {
            let x = i + dir[0];
            let y = j + dir[1];
            if( x >= 0 && x < m && y >= 0 && y < n) {
                if(board[x][y] === 1) {
                    count++;
                }
            }
        }
        return count;
    }
 
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            const live = count_live(i,j);
            if (live === 3) {
                result[i][j] = 1
            } else if (live === 2) {
                result[i][j] = (board[i][j] === 1)? 1:0
            }
           //  console.log(i, j, live, result[i][j])
        }
    }
 
  
    // for (let i = 0; i< m; i++) {
    //     for (let j=0; j<n;j++) {
    //         board[i][j] = result[i][j]
    //     }
    // }
   // console.log('result',board, result)

    return result;
 };