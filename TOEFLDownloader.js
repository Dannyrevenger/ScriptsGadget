// ==UserScript==
// @name         TOEFLDownloader
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  This is a JavaScript file that helps to download TOEFL vocabulary audio from a specific website.
// @author       Daniel
// @match        *//download.dogwood.com.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      MIT 
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js
// ==/UserScript==

(function () {
  'use strict';
  alert('w')
  // Your code here...
  $('<button>').attr({
    text: 'Download',
    target: '_blank',
    href: $(location).attr('href')
  }
  )
})();