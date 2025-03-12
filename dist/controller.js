import { getRandomWord } from "./model.js";
import { renderBoxes, startButtonManager } from "./view.js";
export function init() {
    startButtonManager();
}
export function startBtnClickHandler() {
    renderBoxes();
    getRandomWord();
    const w = getRandomWord();
    console.log(w);
}
