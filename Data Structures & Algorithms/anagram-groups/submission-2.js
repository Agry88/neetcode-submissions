class Solution {
    /**
     * @param {string} string
     * @return {Array<number>}
     */
    convertStringToArray(string) {
        const array = new Array(26).fill(0);
        for(const str of string) {
            array[str.charCodeAt()-'a'.charCodeAt()] += 1;
        }
        return array;
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const answers = new Map();

        for(let i = 0; i<strs.length;i++) {
            const str = strs[i];
            const strArray = this.convertStringToArray(str);
            const strArrayString = strArray.join(",");
            console.log(strArrayString)
            const keyItem = answers.get(strArrayString);
            if(keyItem != null) {
                keyItem.push(str);
                answers.set(strArrayString, keyItem);
            } else {
                answers.set(strArrayString, [str]);
            }
        }

        return Array.from(answers.values());
    }
}
