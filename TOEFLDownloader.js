// ==UserScript==
// @name         HelloWorld
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  This is a test script.
// @author       Daniel
// @match        http://download.dogwood.com.cn//*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      MIT 
// @require       https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js
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