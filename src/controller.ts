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

export function validateInput(event:Event){
    const target = event.target as HTMLInputElement;
    const value = getInputValue(target)
    fillInputValueList(value);
    const startInput = document.querySelector("#start-word") as HTMLInputElement;
    if( inputValueList.length > 0 ){
        startInput.value = inputValueList[inputValueList.length-1];
    }
    console.log(inputValueList);
}
