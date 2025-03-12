import { buttonClickHandler } from "./controller.js";
import { inputManager } from "./model.js";

export function startButtonManager(){
    const button = document.querySelector(".start-button") as HTMLElement;
    button?.addEventListener("click", buttonClickHandler)
}

export function displayInputTemplate(){
    const fields = document.querySelector(".fields") as HTMLElement;
    const row = 
    `
    <div class="row row1">
        <input type="text" name="" id="" maxlength="1"><input type="text" name="" id=""maxlength="1" ><input type="text" name="" id="" maxlength="1"> <button type="button" class="evaluate">Értékel</button>
    </div>
    `
    fields.innerHTML = row;
}

export function evaluateButtonManager(){
    const button = document.querySelector(".evaluate") as HTMLElement;
    button?.addEventListener("click", evaluateHandler);
}

function evaluateHandler(){
    inputManager();
}

