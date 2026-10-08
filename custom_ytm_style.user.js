// ==UserScript==
// @name         Custom YTM Player
// @namespace    none
// @version      1.0
// @description  none
// @author       none
// @match        https://music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=music.youtube.com
// @updateURL    https://raw.githubusercontent.com/In5perat0r/userscripts/refs/heads/main/custom_ytm_style.meta.js
// @downloadURL  https://raw.githubusercontent.com/In5perat0r/userscripts/refs/heads/main/custom_ytm_style.user.js
// @tag          Customize
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
#primaryProgress {
    position: relative;
    overflow: hidden;
    background: transparent !important;
}

#primaryProgress::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 6000px;
    background: linear-gradient(
        90deg,
        hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%),
        hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%)
    ) !important;
    background-size: 6000px 100% !important;
    background-repeat: no-repeat !important;
    animation: primaryProgressSlide 3s linear infinite;
}

ytmusic-player-bar[enable-cairo-refresh-signature-moments-web] #progress-bar.ytmusic-player-bar {
}

@keyframes primaryProgressSlide {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-3000px);
    }
}`);
})();