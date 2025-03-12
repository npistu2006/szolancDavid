import { startBtnClickHandler } from "./controller.js";
import { setEndWord, setStartWord, startWord, endWord } from "./model.js";

export function startButtonManager() {
    const button = document.querySelector(".start");
    button?.addEventListener("click", startBtnClickHandler);
}

export function renderBoxes() {
    const wrapperTag = document.querySelector(".wrapper");
    const idList = ["start-word", "intermediate-word", "end-word"];
    if (wrapperTag instanceof HTMLElement) {
        const inputElements = document.createElement("div");
        inputElements.className = "input-elements";
        let middleInput = null;
        for (let i = 0; i < idList.length; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 3;
            input.id = idList[i];
            if (i === 0 || i === idList.length - 1) {
                input.disabled = true;
            }
            else {
                middleInput = input;
            }
            inputElements.append(input);
        }
        wrapperTag.appendChild(inputElements);
        if (middleInput) {
            middleInput.focus();
        }
        
    }
    const button = document.querySelector(".start");
    button?.removeEventListener("click", startBtnClickHandler);
}

export function displayStartEnd(){
    const startInput = document.querySelector("#start-word") as HTMLInputElement;
    const endInput = document.querySelector("#end-word") as HTMLInputElement;
    startInput.value = startWord;
    endInput.value = endWord;
}