class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const newS = s.replace(" ", "");
        let leftIndex = 0;
        let rightIndex = newS.length - 1;
        while(leftIndex<rightIndex) {
            const leftStr = newS[leftIndex].toLowerCase();
            const rightStr = newS[rightIndex].toLowerCase();
            const isLeftValid = this.isValidAToZString(leftStr);
            const isRightValid = this.isValidAToZString(rightStr);
            console.log(leftStr, isLeftValid, rightStr, isRightValid)

            if(!isLeftValid) {
                leftIndex++;
                continue;
            }

            if(!isRightValid) {
                rightIndex--;
                continue;
            }

            if(leftStr === rightStr) {
                leftIndex++;
                rightIndex--;
                continue;
            }
            return false;
        }
        return true;
    }

    isValidAToZString(s){
        const asciiOfA = 'a'.charCodeAt();
        const asciiOfParam = s.charCodeAt();
        const isNumber = asciiOfParam >= 48 && asciiOfParam<=57;
        if(isNumber){
            return true;
        }
        if(asciiOfParam-asciiOfA > 25 || asciiOfParam < asciiOfA) {
            return false;
        }
        return true;
    }
}
