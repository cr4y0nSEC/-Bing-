// ==UserScript==
// @name         去除Bing搜索中的知乎
// @namespace    huelse/js-scripts/bing-filter
// @version      1.0.2
// @description  Filters Bing search results based on keywords.
// @author       crayon
// @match        https://*.bing.com/*
// @grant        none
// @license      GPLv3 License
// ==/UserScript==
 
(function() {
    'use strict';
 
    // 屏蔽关键词列表
    const block_list = [ 'zhihu', 'ZHIHU', '知乎'];
 
    function filterResults() {
        const item_list = document.querySelectorAll('.b_algo');
 
        item_list.forEach(item => {
            const text = item.textContent;
            if (block_list.some(keyword => text.includes(keyword))) {
                item.style.display = 'none';
            }
        });
    }
 
    // 在页面加载完成后执行过滤
    window.addEventListener('load', function() {
        filterResults();
    });
})();
