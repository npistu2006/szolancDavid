const words = ["ház", "kár", "lap", "nap", "rak", "tál", "fut", "rög",
    "döf", "nép", "kép", "tol", "húz", "bál", "jár", "rák", "láb", "tép",
    "kút", "búg", "túr", "lép", "súg", "nől", "fől", "baj", "vaj", "haj", "raj",
    "víg", "díj", "vív", "fal", "hal", "hév", "vad", "vád", "rag", "fűt",
    "fűz", "fúr", "dúl", "dől", "kár", "tőr", "lúd", "lég", "lát", "sál"];
export let inputValueList = [];
const startWord = "";
const endWord = "";
export function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}
export function setStartWord() {
    startWord;
}
