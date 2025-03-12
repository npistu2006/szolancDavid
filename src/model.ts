const words = ["ház", "kár", "lap", "nap", "rak", "tál", "fut", "rög",
    "döf", "nép", "kép", "tol", "húz", "bál", "jár", "rák", "láb", "tép",
    "kút", "búg", "túr", "lép", "súg", "nől", "fől","baj", "vaj", "haj", "raj",
    "víg", "díj", "vív", "fal", "hal", "hév", "vad", "vád", "rag", "fűt",
    "fűz", "fúr", "dúl", "dől", "kár", "tőr", "lúd", "lég", "lát", "sál"];
export let inputValue:string;
export let inputValueList: string[] = [];
export let startWord:string;
export let endWord:string;


export function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

export function setStartWord(){
    return startWord = words.splice(Math.floor(Math.random() * words.length), 1)[0];
}

export function setEndWord(){
    return endWord = words.splice(Math.floor(Math.random() * words.length), 1)[0];
}

export function getInputValue(target: HTMLInputElement){
    const input = document.querySelector("#intermediate-word") as HTMLInputElement;
    const value = input.value;
    return value;
}

export function fillInputValueList(value:string){
    if(value != "" || !value.includes(" ") || value.length === 3){
        return inputValueList.push(value);
    }
    else{
        alert("Legyen 3 karakter hosszú, és ne tartalmazzon szóközt!")
    }
}



