import { getRandomWord, spliceRandomWord } from "./model.js";
import { startButtonManager, displayInputTemplate, evaluateButtonManager } from "./view.js";

export function init(){
    startButtonManager();
}

export function buttonClickHandler(){
    getRandomWord();
    spliceRandomWord();
    displayInputTemplate();
    evaluateButtonManager();
    // Console.log() -- ellenőrzések
    const rndW = getRandomWord();
    const rndWList = spliceRandomWord();
    console.log('Kitalálandó szó: ',rndW, 'Tagolva: ', rndWList);
}