/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_module/tableOfContents.ts":
/*!*******************************************!*\
  !*** ./src/js/_module/tableOfContents.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tableOfContents\": function() { return /* binding */ tableOfContents; }\n/* harmony export */ });\nfunction tableOfContents() {\n    const targetId = 'tableOfContents'; // 目次を表示させる枠となるdivのid\n    const entryId = 'entry'; // 見出しを取得するdivのid\n    const heading = 'h2, h3'; // 対象にするhタグをカンマ区切りで指定する\n    // targetが無ければ何もしない\n    const target = document.querySelector('#' + targetId);\n    if (!target)\n        return;\n    // 見出しを取得する\n    const entry = document.querySelector('#' + entryId);\n    const nodeList = entry?.querySelectorAll(heading);\n    // 基準となるレベル（見出しレベルと比較して処理する）\n    let baseLevel = 2;\n    // 目次HTMLを格納する\n    let html = '';\n    // 見出しごとに処理する\n    if (nodeList?.length) {\n        nodeList.forEach((elm, index) => {\n            // 見出しにidを付与する\n            const element = elm;\n            const titleId = 'title' + index;\n            element.setAttribute('id', titleId);\n            // 目次の項目となる要素を作成\n            const linkElm = '<a href=\"#' + titleId + '\">' + element.innerText + '</a>';\n            // 見出しレベル H2なら2、H3なら3\n            const headingNode = elm.nodeName.toLowerCase();\n            const level = Number(headingNode.split('h')[1]);\n            // 目次の項目を挟むタグを格納する\n            let startTag = '';\n            let lastTag = '';\n            if (level === baseLevel) {\n                // 見出しレベルが同じ場合、liを続ける\n                startTag = '</li><li>';\n            }\n            else if (level >= baseLevel) {\n                // 見出しレベルがネストした場合、olを入れ子にしてベースレベルもネストする\n                startTag = '<ol><li>';\n                baseLevel++;\n            }\n            else {\n                // 見出しレベルが上がった場合、olを閉じてベースレベルを戻す\n                let closeTag = '';\n                for (let i = level; i < baseLevel; i++) {\n                    closeTag += '</li></ol>';\n                }\n                startTag = closeTag + '</li><li>';\n                const count = Number(level - baseLevel);\n                baseLevel += count;\n            }\n            // 最初の要素の開始タグ\n            if (index === 0) {\n                startTag = '<li>';\n            }\n            // 最後の要素の終了タグ\n            if (index === nodeList?.length - 1) {\n                let closeTag = '';\n                for (let i = 2; i < baseLevel; i++) {\n                    closeTag += '</li></ol>';\n                }\n                lastTag = level === 2 ? '</li>' : closeTag + '</li>';\n            }\n            // 条件に応じたHTMLを結合\n            const listElm = startTag + linkElm + lastTag;\n            // 変数に追加\n            html += listElm;\n        });\n        // 目次のHTMLを表示させる\n        target.insertAdjacentHTML('beforeend', '<ol>' + html + '</ol>');\n    }\n}\n\n\n//# sourceURL=webpack://gulp-sample/./src/js/_module/tableOfContents.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/_module/tableOfContents.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;