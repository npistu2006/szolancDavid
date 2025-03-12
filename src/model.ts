import { domainMatch } from "tough-cookie";

const words = ["ház", "kár", "lap", "nap", "rak", "tál", "fut", "rög", "döf", "nép", "kép", "tol", "húz", "bál", "jár", "rák", "láb", "tép", "kút", "búg", "túr", "lép", "súg", "nől", "fől", "óra", "súly", "baj", "vaj", "haj", "raj", "víg", "díj", "vív", "fal", "hal", "hév", "vad", "vád", "rag", "fűt", "fűz", "fúr", "dúl", "dől", "kár", "tőr", "lúd", "lég", "lát", "sál"];

export let randomWord: string;

export let inputCharacters: string[] = [];

export let rndWordList: string[];

let rowList = [];

export function getRandomWord(){
   return randomWord = words[Math.floor(Math.random() * words.length)]
}

export function spliceRandomWord(){
    return rndWordList = [...randomWord];
}

export function resetDatas(){
    randomWord = "";
    rndWordList = [];
}

export function addRows(){
    const rows = document.querySelectorAll(".row");
    rows.forEach(element=>{
        rowList.push(element);
    })
}

export function inputManager(){
    const rows = document.querySelectorAll(".row");
    if( rows.length > 0 ){
        rows[rowList.length].querySelectorAll("[type='text']").forEach(f=>{
            if(f instanceof HTMLInputElement){
                const value = f.value
                inputCharacters.push(value);
                
            }
        })
    }
    console.log(inputCharacters);
}

export function validation(){
    const inputs = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
    
}



