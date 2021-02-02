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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tableOfContents\", function() { return tableOfContents; });\nfunction tableOfContents() {\n  var targetId = 'tableOfContents'; // 目次を表示させる枠となるdivのid\n\n  var entryId = 'entry'; // 見出しを取得するdivのid\n\n  var heading = 'h2, h3'; // 対象にするhタグをカンマ区切りで指定する\n  // targetが無ければ何もしない\n\n  var target = document.querySelector('#' + targetId);\n  if (!target) return; // 見出しを取得する\n\n  var entry = document.querySelector('#' + entryId);\n  var nodeList = entry.querySelectorAll(heading); // for IE\n\n  var arr = Array.prototype.slice.call(nodeList); // 基準となるレベル（見出しレベルと比較して処理する）\n\n  var baseLevel = 2; // 目次HTMLを格納する\n\n  var html = ''; // 見出しごとに処理する\n\n  arr.forEach(function (elm, index) {\n    // 見出しにidを付与する\n    var titleId = 'title' + index;\n    elm.setAttribute('id', titleId); // 目次の項目となる要素を作成\n\n    var linkElm = '<a href=\"#' + titleId + '\">' + elm.innerText + '</a>'; // 見出しレベル H2なら2、H3なら3\n\n    var headingNode = elm.nodeName.toLowerCase();\n    var level = Number(headingNode.split('h')[1]); // 目次の項目を挟むタグを格納する\n\n    var startTag = '';\n    var lastTag = '';\n\n    if (level === baseLevel) {\n      // 見出しレベルが同じ場合、liを続ける\n      startTag = '</li><li>';\n    } else if (level >= baseLevel) {\n      // 見出しレベルがネストした場合、olを入れ子にしてベースレベルもネストする\n      startTag = '<ol><li>';\n      baseLevel++;\n    } else {\n      // 見出しレベルが上がった場合、olを閉じてベースレベルを戻す\n      var closeTag = '';\n\n      for (var i = level; i < baseLevel; i++) {\n        closeTag += '</li></ol>';\n      }\n\n      startTag = closeTag + '</li><li>';\n      var count = Number(level - baseLevel);\n      baseLevel += count;\n    } // 最初の要素の開始タグ\n\n\n    if (index === 0) {\n      startTag = '<li>';\n    } // 最後の要素の終了タグ\n\n\n    if (index === arr.length - 1) {\n      var _closeTag = '';\n\n      for (var _i = 2; _i < baseLevel; _i++) {\n        _closeTag += '</li></ol>';\n      }\n\n      lastTag = level === 2 ? '</li>' : _closeTag + '</li>';\n    } // 条件に応じたHTMLを結合\n\n\n    var listElm = startTag + linkElm + lastTag; // 変数に追加\n\n    html += listElm;\n  }); // 目次のHTMLを表示させる\n\n  target.insertAdjacentHTML('beforeend', '<ol>' + html + '</ol>');\n}\n\n//# sourceURL=webpack:///./src/js/_module/tableOfContents.js?");

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