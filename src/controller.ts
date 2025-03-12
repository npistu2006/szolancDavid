import { endWord, getRandomWord, setEndWord, setStartWord, startWord } from "./model.js";
import { displayStartEnd, renderBoxes, startButtonManager } from "./view.js";


export function init(){
    startButtonManager();
}

export function startBtnClickHandler(){
    renderBoxes();
    setStartWord();
    setEndWord();
    displayStartEnd();

    console.log("Kezdő: ",startWord,"\n","Végső: ",endWord);
}