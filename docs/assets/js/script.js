/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/_module/tableOfContents.js":
/*!*******************************************!*\
  !*** ./src/js/_module/tableOfContents.js ***!
  \*******************************************/
/*! exports provided: tableOfContents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tableOfContents\", function() { return tableOfContents; });\nfunction tableOfContents() {\n  var targetId = 'tableOfContents'; // 目次を表示させる枠となるdivのid\n\n  var entryId = 'entry'; // 見出しを取得するdivのid\n\n  var listId = 'indexList'; // 目次ol要素につけるid\n  // targetが無ければ何もしない\n\n  var target = document.querySelector('#' + targetId);\n  if (!target) return; // ol要素を追加\n\n  target.insertAdjacentHTML('beforeend', '<ol id=\"' + listId + '\"></ol>'); // h2, h3を取得する\n\n  var list = document.querySelector('#' + listId);\n  var entry = document.querySelector('#' + entryId);\n  var nodeList = entry.querySelectorAll('h2, h3'); // for IE\n\n  var arr = Array.prototype.slice.call(nodeList); // 見出しレベルがh2ならtrue、h3にネストしているならfalse\n\n  var topLevel = true;\n  var html = ''; // 見出しごとにループする\n\n  arr.forEach(function (elm, index) {\n    // 見出しにidを付与する\n    var titleId = 'title' + index;\n    elm.setAttribute('id', titleId); // 目次の要素を作成\n\n    var linkElm = '<a href=\"#' + titleId + '\">' + elm.innerText + '</a>'; // h2なら0、h3なら1で分岐する\n\n    var level = elm.nodeName === 'H2' ? 0 : 1;\n    var startTag = '';\n    var lastTag = ''; // h2\n\n    if (level === 0) {\n      // 直前がh2かどうか\n      startTag = topLevel ? '</li><li>' : '</li></ol></li><li>'; // 見出しレベルを戻す\n\n      topLevel = true;\n    } // h3\n\n\n    if (level === 1) {\n      // 直前がh2かどうか\n      startTag = topLevel ? '<ol><li>' : '</li><li>'; // 見出しレベルをネストする\n\n      topLevel = false;\n    } // 最初の要素の開始タグ\n\n\n    if (index === 0) {\n      startTag = '<li>';\n    } // 最後の要素の終了タグ\n\n\n    if (index === arr.length - 1) {\n      lastTag = level === 0 ? '</li>' : '</li></ol></li>';\n    } // 条件に応じたHTMLを結合\n\n\n    var listElm = startTag + linkElm + lastTag; // 変数に追加\n\n    html += listElm;\n  }); // 目次のHTMLを表示させる\n\n  list.insertAdjacentHTML('beforeend', html);\n}\n\n//# sourceURL=webpack:///./src/js/_module/tableOfContents.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_tableOfContents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_module/tableOfContents.js */ \"./src/js/_module/tableOfContents.js\");\n\nObject(_module_tableOfContents_js__WEBPACK_IMPORTED_MODULE_0__[\"tableOfContents\"])();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });