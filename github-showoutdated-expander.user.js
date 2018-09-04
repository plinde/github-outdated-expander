// ==UserScript==
// @name         GitHub PR "Show Outdated" Expander
// @namespace    https://github.com/plinde/github-showoutdated-expander
// @version      1.0.1
// @description  Script for automatically expanding all GitHub PR "Show Outdated" tabs
// @author       plinde
// @match        https://github.com/*/*/pull/*
// @match        https://github.com/*/*/pull/*#*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        setTimeout(function() {
            Array.from(document.getElementsByClassName('outdated-comment')).forEach(l => l.setAttribute('open', 'open'));
        }, 100);
    }, false);

})();
