import { startBtnClickHandler } from "./controller.js";

export function startButtonManager() {
    const button = document.querySelector(".start");
    button?.addEventListener("click", startBtnClickHandler);
}

export function renderBoxes(){
    const wrapperTag = document.querySelector(".wrapper");
    const idList = ["start-word","intermediate-word","end-word"];
    if(wrapperTag instanceof HTMLElement){
        const inputElements = document.createElement("div");
        inputElements.className = "input-elements";
        for (let i = 0; i < idList.length; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 3;
            input.id = idList[i]; // ID hozzárendelése
            inputElements.append(input);
        }
        wrapperTag.appendChild(inputElements);
    }
    const button =  document.querySelector(".start");
    button?.removeEventListener("click",startBtnClickHandler)
}