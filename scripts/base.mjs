// import functions from other modules into all.mjs

import { initDarkMode } from "./modetoggle.mjs";

import { initFooterDate } from "./footer.mjs";

import { initLiveClock } from "./liveclock.mjs";


// event listener to load the initThankYou function when the DOM content is fully loaded
document.addEventListener(`DOMContentLoaded`, () => {
    initDarkMode();
    initFooterDate();
    initLiveClock();
    
});