import { endWord, getRandomWord, setEndWord, setStartWord, startWord , inputValueList, getInputValue, fillInputValueList} from "./model.js";
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

export function validateInput(){
    getInputValue();
    fillInputValueList();
    const startInput = document.querySelector("#start-word") as HTMLInputElement;
    if( inputValueList.length > 0 ){
        startInput.value = inputValueList[-1];
    }
    console.log(inputValueList);
}
