class Solution {
    /**
     * @param {string} string
     * @return {Map<string, number>}
     */
    convertStringToMap(string) {
        const map = new Map();
        for(const str of string) {
            const strCount = map.get(str);
            if(strCount != null) {
                map.set(str, strCount + 1);
                continue
            }
            map.set(str, 1);
        }
        return map;
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const answers = [];
        const usedIndex = [];

        for(let i = 0; i<strs.length;i++) {
            const newArray = [];
            if(usedIndex.includes(i)) {
                continue;
            }
            const str = strs[i];
            newArray.push(str);
            usedIndex.push(i);

            const strHash = this.convertStringToMap(str);
            console.log(strHash)

            // loop after to length item
            for(let u = i+1; u<strs.length; u++) {
                const afterStr = strs[u];
                // if not same length continue
                if(str.length !== afterStr.length) {
                    continue;
                }
                // convert `str` to hash, and make sure the destination string has all item
                const afterStrHash = this.convertStringToMap(afterStr);
                let returned = false;
                strHash.forEach((value,key) => {
                    if(afterStrHash.get(key) !== value) {
                        returned = true;
                        return;
                    }
                })
                if(returned) {
                    continue;
                }
                // push to same array and set usedIndex then continue
                newArray.push(afterStr);
                usedIndex.push(u);
            }
            answers.push(newArray);
        }

        return answers;
    }
}
