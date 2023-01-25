import wordBank from "../wordle-word.txt";

export const boardDefaultValue: string[][] = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const generateWordSet = async () => {
    let wordSet: string[] = [];
    let todaysWord: string = '';
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArr = result.split("\n");
            todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
            wordSet = wordArr;
        });
    return { wordSet, todaysWord };
};

