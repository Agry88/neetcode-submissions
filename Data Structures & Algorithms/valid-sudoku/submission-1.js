class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Check column
        for(let column = 0; column<9;column++) {
            const thisColumnValues = board.map(rows => rows[column])
            const isColumnValid = this.isSpaceValid(thisColumnValues);
            if(!isColumnValid) return false;
        }
        // Check row 
        for(let row = 0; row<9;row++) {
            const thisRowValues = board[row];
            const isRowValid = this.isSpaceValid(thisRowValues);
            if(!isRowValid) return false;
        }
        // Check every center
        const options = [1,4,7]
        const resultMap = new Map();
        for(let columnOptionIndex = 0; columnOptionIndex<options.length; columnOptionIndex++) {
            for(let rowOptionIndex = 0; rowOptionIndex<options.length; rowOptionIndex++) {
                const values = [];
                const columnIndex = options[columnOptionIndex];
                const rowIndex = options[rowOptionIndex];
                for(let aroundCols = -1; aroundCols<2;aroundCols++){
                    values.push(board[columnIndex+aroundCols][rowIndex-1])
                    values.push(board[columnIndex+aroundCols][rowIndex])
                    values.push(board[columnIndex+aroundCols][rowIndex+1])
                }
                const isCached = resultMap.get(values);
                if(isCached) {
                    continue;
                }
                const isThisCenterValid = this.isSpaceValid(values);
                if(!isThisCenterValid) return false;
                resultMap.set(values, true)
            }
        }

        return true;
    }

    /**
     * @param {character[]} board
     * @return {boolean}
     */
    isSpaceValid(character) {
        const map = new Map();
        for(const c of character) {
            const isEmpty = c==="."
            if(isEmpty) {
                continue;
            }
            const isAlreadyExist = map.get(c);
            if(isAlreadyExist != null) {
                return false;
            }
            map.set(c,true);
        }
        return true;
    }
}
