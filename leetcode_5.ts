function longestPalindrome(s: string): string {
    let temp = "";
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            temp = s.slice(i, j);
            // console.log(i, j + 1, temp);
            if (isPal(temp) && temp.length > longest.length) {
                longest = temp;
                // console.log("Longest", temp);
                if (j == s.length) {
                    // console.log("RETURN", longest);
                    return longest;
                }
            }
        }
    }
    return longest;
}
const isPal = (s: string): boolean => {
    for (let k = 0; k < s.length / 2; k++) {
        if (s[k] !== s[s.length - 1 - k]) {
            // console.log(k, s[k], s[s.length - 1 - k]);
            return false;
        }
    }

    return true;
};

let a: string[] = [
    "a",
    "aa",
    "aba",
    "ababa",
    "abba",
    "abbaba",
    "asdfasdf",
    "babad",
    "cbbd",
    "abcdefggg",
    "abcdefgggx",
    "abcdefgggxxxx",
    "abcdefgggxxxxdsa",
];

a.forEach((x) => {
    console.log(x);
    // console.log(isPal(x));
    console.log(longestPalindrome(x));

    console.log("___________");
});
