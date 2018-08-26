// ==UserScript==
// @name         [Sankakucomplex] Auto-loading original image
// @icon         https://chan.sankakucomplex.com/favicon.png
// @namespace    https://github.com/JumpJets/Sankakucomplex-Auto-load-original-image
// @version      1.0
// @description  Replace sample image to original.
// @author       XCanG
// @match        https://chan.sankakucomplex.com/post/show/*
// @match        https://idol.sankakucomplex.com/post/show/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	let link = document.getElementById("highres");
	if (typeof link !== 'undefined') {
		let linkclick = document.getElementById("image-link");
		linkclick.removeAttribute("href");
		//1 linkclick.outerHTML = linkclick.outerHTML;
		//2 let new_element = linkclick.cloneNode(true);
		//2 linkclick.parentNode.replaceChild(new_element, linkclick);
		let page_img = document.getElementById("image");
		page_img.src = link.href;
		document.getElementById("resized_notice").remove();
	}
})();
