// ==UserScript==
// @name         indeedApplyOnCompanySite
// @namespace    https://github.com/numselli/indeedApplyOnCompanySite
// @version      2024-01-14
// @description  Bring back indeed apply on company site button
// @author       numselli
// @match        https://*.indeed.com/viewjob*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=indeed.com
// @grant        none
// ==/UserScript==

const addRedWarningBar = true;
const autoOpenCompanySite = false;
const renameButon = true;
const autoCloseTab = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const div = document.createElement("div");
div.style = "background-color: red;";
div.style.width = "100%";
div.style.height = "10px";

(async function () {
    'use strict';

    await sleep(250);
    await sleep(250);
    await sleep(250);

    const applyButton = document.querySelector('[aria-label^="Apply now"]');
    const applyButtonString = applyButton.outerHTML;
    const hasOpen = applyButtonString.includes("opens");
    const hasHref = applyButtonString.includes("href");
    const hasHttp = applyButtonString.includes("http");
    const url = applyButtonString.split(`href="`)[1].split(`"`)[0];

    if (hasOpen || hasHref || hasHttp) {
        if (renameButon) applyButton.children[0].innerHTML = "Apply On Company Site";
        if (addRedWarningBar) document.body.prepend(div);
        if (autoOpenCompanySite) location.replace(url);
        if (autoCloseTab) close();
    }
})();