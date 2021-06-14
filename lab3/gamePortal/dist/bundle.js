/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #cecece;\n  --pink-mode: #ffb5ca;\n  --border-radius: 10px;\n  --box-shadow:5px 5px 10px #de9db0, -5px -5px 10px #ffcde4;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: Karla, sans-serif;\n  background-color: var(--primary-color);\n}\n\n.main_container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.title {\n  align-items: flex-end;\n  display: flex;\n  margin: 30px;\n  justify-content: flex-end;\n  font-size: 40px;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.button {\n  margin: 30px;\n  margin-bottom: 0;\n  border-radius: var(--border-radius);\n  outline: none;\n  border: none;\n  height: 60px;\n  width: 300px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  font-size: 25px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  box-shadow: 8px 4px 15px rgba(0, 0, 0, 0.25), -8px -4px 15px white, 8px 4px 15px rgba(0, 0, 0, 0.1) inset, -8px -4px 15px rgba(255, 255, 255, 0.3) inset;\n}\n.button:hover {\n  background-color: #fff;\n}\n\n.game_container {\n  margin: 0 auto;\n  height: 100vh;\n  width: 100%;\n}\n.game_container table {\n  margin: 0 auto;\n}\n.game_container .cell {\n  width: 100px;\n  height: 100px;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  font-size: 40px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  box-shadow: 8px 4px 15px rgba(0, 0, 0, 0.25), -8px -4px 15px white, 8px 4px 15px rgba(0, 0, 0, 0.1) inset, -8px -4px 15px rgba(255, 255, 255, 0.3) inset;\n}\n.game_container .cell:hover {\n  background-color: #fff;\n}\n.game_container tr {\n  display: flex;\n  grid-gap: 30px;\n  margin: 30px;\n}\n\n.menu_container {\n  height: 200px;\n}\n\n.gamesWrapper {\n  display: flex;\n}\n\n.item {\n  margin: 30px;\n  height: 60px;\n  width: 300px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 22px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 8px 4px 15px rgba(0, 0, 0, 0.25), -8px -4px 15px white, 8px 4px 15px rgba(0, 0, 0, 0.1) inset, -8px -4px 15px rgba(255, 255, 255, 0.3) inset;\n  border-radius: var(--border-radius);\n}\n.item:hover {\n  background-color: #fff;\n}\n\n.green_mode {\n  background: var(--pink-mode);\n}\n.green_mode .title {\n  color: #fff;\n}\n.green_mode .item {\n  background: var(--pink-mode);\n  box-shadow: var(--box-shadow);\n}\n.green_mode .button {\n  background: var(--pink-mode);\n  box-shadow: var(--box-shadow);\n}", "",{"version":3,"sources":["webpack://./src/styles/_vars.scss","webpack://./src/styles/styles.scss","webpack://./src/styles/_global.scss"],"names":[],"mappings":"AACA;EACI,wBAAA;EACA,oBAAA;EACA,qBAAA;EACA,yDAAA;ACCJ;;ACNA;EACI,sBAAA;ADSJ;;ACNA;EACI,SAAA;EACA,8BAAA;EACA,sCAAA;ADSJ;;AAZA;EACI,aAAA;EACA,8BAAA;AAeJ;;AAbA;EACI,qBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,eAAA;EACA,qCAAA;AAgBJ;;AAdA;EACI,YAAA;EACA,gBAAA;EACA,mCAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,oCAAA;EACA,yBAAA;EACA,eAAA;EACA,qCAAA;EACA,gBAAA;EACA,wJAAA;AAiBJ;AAhBI;EACI,sBAAA;AAkBR;;AAfA;EACC,cAAA;EACA,aAAA;EACA,WAAA;AAkBD;AAjBI;EACI,cAAA;AAmBR;AAjBI;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,oCAAA;EACA,yBAAA;EACA,eAAA;EACA,qCAAA;EACA,gBAAA;EACA,wJAAA;AAmBR;AAjBI;EACI,sBAAA;AAmBR;AAhBI;EACI,aAAA;EACA,cAAA;EACA,YAAA;AAkBR;;AAdA;EACG,aAAA;AAiBH;;AAfA;EACI,aAAA;AAkBJ;;AAfA;EACI,YAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,qCAAA;EACA,eAAA;EACA,oCAAA;EACA,wJAAA;EACA,mCAAA;AAkBJ;AAjBI;EACI,sBAAA;AAmBR;;AAhBA;EACI,4BAAA;AAmBJ;AAlBI;EACI,WAAA;AAoBR;AAlBI;EACI,4BAAA;EACA,6BAAA;AAoBR;AAlBI;EACI,4BAAA;EACA,6BAAA;AAoBR","sourcesContent":["\r\n:root {\r\n    --primary-color: #cecece;\r\n    --pink-mode: #ffb5ca;\r\n    --border-radius: 10px;\r\n    --box-shadow:5px 5px 10px #de9db0, -5px -5px 10px #ffcde4;\r\n}","@import \"_vars\";\r\n@import \"_global\";\r\n@import \"_fonts\";\r\n\r\n.main_container{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.title{\r\n    align-items: flex-end;\r\n    display: flex;\r\n    margin: 30px;\r\n    justify-content: flex-end;\r\n    font-size: 40px;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.button{\r\n    margin: 30px;\r\n    margin-bottom: 0;\r\n    border-radius: var(--border-radius);\r\n    outline: none;\r\n    border: none;\r\n    height: 60px;\r\n    width: 300px;\r\n    overflow: hidden;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    background: rgba(255, 255, 255, .2);\r\n    transition: all .3s ease;\r\n    font-size: 25px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 300;\r\n    box-shadow: 8px 4px 15px rgba(0, 0, 0, .25), -8px -4px 15px rgba(255, 255, 255, 1), 8px 4px 15px rgba(0, 0, 0, .1) inset, -8px -4px 15px rgba(255, 255, 255, .3) inset;\r\n    &:hover{\r\n        background-color: #fff;\r\n    }\r\n}\r\n.game_container{\r\n margin: 0 auto;\r\n height: 100vh;\r\n width: 100%;\r\n    table{\r\n        margin: 0 auto;\r\n    }\r\n    .cell {\r\n        width: 100px;\r\n        height: 100px;\r\n        border-radius: 10px;\r\n        overflow: hidden;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        cursor: pointer;\r\n        background: rgba(255, 255, 255, .2);\r\n        transition: all .3s ease;\r\n        font-size: 40px;\r\n        font-family: 'Montserrat', sans-serif;\r\n        font-weight: 300;\r\n        box-shadow: 8px 4px 15px rgba(0, 0, 0, .25), -8px -4px 15px rgba(255, 255, 255, 1), 8px 4px 15px rgba(0, 0, 0, .1) inset, -8px -4px 15px rgba(255, 255, 255, .3) inset;\r\n    }\r\n    .cell:hover{\r\n        background-color: #fff;\r\n    }\r\n\r\n    tr {\r\n        display: flex;\r\n        grid-gap: 30px;\r\n        margin: 30px;\r\n    }\r\n\r\n}\r\n.menu_container{\r\n   height: 200px;\r\n}\r\n.gamesWrapper{\r\n    display: flex;\r\n}\r\n\r\n.item {\r\n    margin: 30px;\r\n    height: 60px;\r\n    width: 300px;\r\n    overflow: hidden;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 22px;\r\n    background: rgba(255, 255, 255, .2);\r\n    box-shadow: 8px 4px 15px rgba(0, 0, 0, .25), -8px -4px 15px rgba(255, 255, 255, 1), 8px 4px 15px rgba(0, 0, 0, .1) inset, -8px -4px 15px rgba(255, 255, 255, .3) inset;\r\n    border-radius: var(--border-radius);\r\n    &:hover{\r\n        background-color: #fff;\r\n    }\r\n}\r\n.green_mode{\r\n    background: var(--pink-mode);\r\n    .title{\r\n        color:#fff\r\n    }\r\n    .item{\r\n        background: var(--pink-mode);\r\n        box-shadow: var(--box-shadow);\r\n    }\r\n    .button{\r\n        background: var(--pink-mode);\r\n        box-shadow: var(--box-shadow); \r\n    }\r\n}","html {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: Karla, sans-serif;\r\n    background-color: var(--primary-color);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./battleShips/battleShips.ts":
/*!************************************!*\
  !*** ./battleShips/battleShips.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.BattleShips = void 0;
var BattleShips = /** @class */ (function () {
    function BattleShips() {
        this.name = "Statki";
    }
    BattleShips.prototype.getGameElement = function () {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello BattleShips"));
        return div;
    };
    return BattleShips;
}());
exports.BattleShips = BattleShips;


/***/ }),

/***/ "./games.enum.ts":
/*!***********************!*\
  !*** ./games.enum.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Games = void 0;
var Games;
(function (Games) {
    Games[Games["TicTacToe"] = 1] = "TicTacToe";
    Games[Games["BattleShips"] = 2] = "BattleShips";
})(Games = exports.Games || (exports.Games = {}));


/***/ }),

/***/ "./tictactoe/Board.ts":
/*!****************************!*\
  !*** ./tictactoe/Board.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.Board = void 0;
var Cell_1 = __webpack_require__(/*! ./Cell */ "./tictactoe/Cell.ts");
var Board = /** @class */ (function () {
    function Board(size) {
        var _this = this;
        this.currentSymbol = 1;
        this.cells = new Array(size);
        this.table = document.createElement("table");
        this.table.id = "gameBoard";
        for (var r = 0; r < size; r++) {
            var row = this.table.insertRow(r);
            row.className = "row";
            this.cells[r] = new Array(size);
            var _loop_1 = function (c) {
                var cell = row.insertCell(c);
                cell.className = "cell";
                var newCell = new Cell_1.Cell(cell);
                this_1.cells[r][c] = newCell;
                cell.addEventListener("click", function () { return _this.makeMove(newCell); });
            };
            var this_1 = this;
            for (var c = 0; c < size; c++) {
                _loop_1(c);
            }
        }
    }
    Board.prototype.makeMove = function (cell) {
        if (cell.cellValue !== 1 && cell.cellValue !== -1) {
            cell.setCellValue(this.currentSymbol);
            this.currentSymbol *= -1;
            cell.fillCell(this.currentSymbol);
        }
        this.checkWin();
    };
    Board.prototype.checkRow = function (row) {
        var rowArray = this.cells[row];
        var X = true;
        rowArray.forEach(function (cell) {
            if (cell.cellValue !== 1) {
                X = false;
            }
        });
        if (X)
            return 1;
        var O = true;
        rowArray.forEach(function (cell) {
            if (cell.cellValue !== -1) {
                O = false;
            }
        });
        if (O)
            return -1;
        return 0;
    };
    Board.prototype.checkColumn = function (column) {
        var X = true;
        for (var i = 0; i < this.cells.length; i++) {
            var cellValue = this.cells[i][column].cellValue;
            if (cellValue !== 1) {
                X = false;
            }
        }
        if (X)
            return 1;
        var O = true;
        for (var i = 0; i < this.cells.length; i++) {
            var cellValue = this.cells[i][column].cellValue;
            if (cellValue !== -1) {
                O = false;
            }
        }
        if (O)
            return -1;
        return 0;
    };
    Board.prototype.crossCheck = function () {
        var X = true;
        for (var i = 0; i < this.cells.length; i++) {
            var cellValue = this.cells[i][i].cellValue;
            if (cellValue !== 1) {
                X = false;
            }
        }
        if (X)
            return 1;
        var O = true;
        for (var i = 0; i < this.cells.length; i++) {
            var cellValue = this.cells[i][i].cellValue;
            if (cellValue !== -1) {
                O = false;
            }
        }
        if (O)
            return -1;
        return 0;
    };
    Board.prototype.reverseCrossCheck = function () {
        var X = true;
        for (var i = 0; i < this.cells.length; i++) {
            var cellValue = this.cells[i][this.cells.length - 1 - i].cellValue;
            if (cellValue !== 1) {
                X = false;
            }
        }
        if (X)
            return 1;
        var O = true;
        for (var i = 0; i < this.cells.length; i++) {
            var cellValue = this.cells[i][this.cells.length - 1 - i].cellValue;
            if (cellValue !== -1) {
                O = false;
            }
        }
        if (O)
            return -1;
        return 0;
    };
    Board.prototype.checkWin = function () {
        for (var i = 0; i < this.cells.length; i++) {
            if (this.checkRow(i) === 1 || this.checkColumn(i) === 1)
                alert("Gratulacje, wygrał użytkownik X");
            else if (this.checkRow(i) === -1 || this.checkColumn(i) === -1)
                alert("Gratulacje, wygrał użytkownik O");
        }
        if (this.crossCheck() === 1 || this.reverseCrossCheck() === 1)
            alert("Gratulacje, wygrał użytkownik X");
        else if (this.crossCheck() === -1 || this.reverseCrossCheck() === -1)
            alert("Gratulacje, wygrał użytkownik O");
    };
    return Board;
}());
exports.Board = Board;


/***/ }),

/***/ "./tictactoe/Cell.ts":
/*!***************************!*\
  !*** ./tictactoe/Cell.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Cell = void 0;
var Cell = /** @class */ (function () {
    function Cell(cell) {
        this.htmlElement = cell;
    }
    Cell.prototype.setCellValue = function (value) {
        this.cellValue = value;
        if (this.cellValue === -1) {
            this.htmlElement.innerText = "O";
        }
        if (this.cellValue === 1) {
            this.htmlElement.innerText = "X";
        }
        if (this.cellValue === 0) {
            this.htmlElement.innerText = "";
        }
    };
    Cell.prototype.fillCell = function (value) {
        this.htmlElement.style.backgroundColor = value === 1 ? '#BBBAFF' : '#F0B2D3';
    };
    return Cell;
}());
exports.Cell = Cell;


/***/ }),

/***/ "./tictactoe/tictactoe.ts":
/*!********************************!*\
  !*** ./tictactoe/tictactoe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.TicTacToe = void 0;
var Board_1 = __webpack_require__(/*! ./Board */ "./tictactoe/Board.ts");
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.name = "Kółko i krzyżyk";
    }
    TicTacToe.prototype.getGameElement = function () {
        var board = new Board_1.Board(3);
        return board.table;
    };
    return TicTacToe;
}());
exports.TicTacToe = TicTacToe;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

exports.__esModule = true;
var games_enum_1 = __webpack_require__(/*! ../games.enum */ "./games.enum.ts");
var tictactoe_1 = __webpack_require__(/*! ../tictactoe/tictactoe */ "./tictactoe/tictactoe.ts");
var battleShips_1 = __webpack_require__(/*! ../battleShips/battleShips */ "./battleShips/battleShips.ts");
__webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
var App = /** @class */ (function () {
    function App(gameFactory) {
        this.gameFactory = gameFactory;
        this.init();
    }
    App.prototype.init = function () {
        var menuContainer = (document.createElement('div')); // kontener menu dostępnych gier
        var gameContainer = (document.createElement('div'));
        var mainContainer = (document.createElement('div'));
        var title = (document.createElement('h1')); // kontener główny ekranu z grą
        gameContainer.classList.add('game_container');
        menuContainer.classList.add('menu_container');
        mainContainer.classList.add('main_container');
        title.classList.add('title');
        title.textContent = 'Game Portal';
        var gamesWrapper = document.createElement('div'); // lista pozycji w menu dostępnych gier
        var _loop_1 = function (gameKind) {
            if (isNaN(Number(gameKind))) {
                return "continue";
            }
            var game = this_1.gameFactory.getGame(Number(gameKind));
            var item = document.createElement("div");
            item.appendChild(document.createTextNode(game.name));
            item.classList.add('item');
            item.addEventListener("click", function () {
                gameContainer.appendChild(game.getGameElement());
            });
            gamesWrapper.appendChild(item);
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(games_enum_1.Games); _i < _a.length; _i++) {
            var gameKind = _a[_i];
            _loop_1(gameKind);
        }
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a
        var switcher = document.createElement("button");
        switcher.textContent = 'Pink Mode Switcher';
        switcher.classList.add('button');
        switcher.addEventListener("click", function () { return document.body.classList.toggle("green_mode"); });
        menuContainer.appendChild(gamesWrapper);
        mainContainer.appendChild(menuContainer);
        mainContainer.appendChild(gameContainer);
        document.body.append(title, switcher);
        document.body.appendChild(mainContainer);
    };
    return App;
}());
var GameFactory = /** @class */ (function () {
    function GameFactory() {
    }
    GameFactory.prototype.getGame = function (game) {
        switch (game) {
            case games_enum_1.Games.TicTacToe:
                return new tictactoe_1.TicTacToe();
            case games_enum_1.Games.BattleShips:
                return new battleShips_1.BattleShips();
            default:
                throw new Error("Invalid game!");
        }
    };
    return GameFactory;
}());
new App(new GameFactory());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzcz8yMDNiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9iYXR0bGVTaGlwcy9iYXR0bGVTaGlwcy50cyIsIndlYnBhY2s6Ly8vLi9nYW1lcy5lbnVtLnRzIiwid2VicGFjazovLy8uL3RpY3RhY3RvZS9Cb2FyZC50cyIsIndlYnBhY2s6Ly8vLi90aWN0YWN0b2UvQ2VsbC50cyIsIndlYnBhY2s6Ly8vLi90aWN0YWN0b2UvdGljdGFjdG9lLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Ysd0lBQXdJO0FBQ3hJO0FBQ0EsaURBQWlELDZCQUE2Qix5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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOERBQThELGdCQUFnQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxxREFBcUQsRUFBRTtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMSwyMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjY2VjZWNlO1xcbiAgLS1waW5rLW1vZGU6ICNmZmI1Y2E7XFxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtLWJveC1zaGFkb3c6NXB4IDVweCAxMHB4ICNkZTlkYjAsIC01cHggLTVweCAxMHB4ICNmZmNkZTQ7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogS2FybGEsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50aXRsZSB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5idXR0b24ge1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYm94LXNoYWRvdzogOHB4IDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIC04cHggLTRweCAxNXB4IHdoaXRlLCA4cHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpIGluc2V0LCAtOHB4IC00cHggMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XFxufVxcbi5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmdhbWVfY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uZ2FtZV9jb250YWluZXIgdGFibGUge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5nYW1lX2NvbnRhaW5lciAuY2VsbCB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYm94LXNoYWRvdzogOHB4IDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIC04cHggLTRweCAxNXB4IHdoaXRlLCA4cHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpIGluc2V0LCAtOHB4IC00cHggMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XFxufVxcbi5nYW1lX2NvbnRhaW5lciAuY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uZ2FtZV9jb250YWluZXIgdHIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtZ2FwOiAzMHB4O1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cXG4ubWVudV9jb250YWluZXIge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmdhbWVzV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaXRlbSB7XFxuICBtYXJnaW46IDMwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBib3gtc2hhZG93OiA4cHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgLThweCAtNHB4IDE1cHggd2hpdGUsIDhweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQsIC04cHggLTRweCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG4uaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZ3JlZW5fbW9kZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1waW5rLW1vZGUpO1xcbn1cXG4uZ3JlZW5fbW9kZSAudGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5ncmVlbl9tb2RlIC5pdGVtIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXBpbmstbW9kZSk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG59XFxuLmdyZWVuX21vZGUgLmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1waW5rLW1vZGUpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fZ2xvYmFsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx5REFBQTtBQ0NKOztBQ05BO0VBQ0ksc0JBQUE7QURTSjs7QUNOQTtFQUNJLFNBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0FEU0o7O0FBWkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFlSjs7QUFiQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQWdCSjs7QUFkQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0pBQUE7QUFpQko7QUFoQkk7RUFDSSxzQkFBQTtBQWtCUjs7QUFmQTtFQUNDLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQWtCRDtBQWpCSTtFQUNJLGNBQUE7QUFtQlI7QUFqQkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3SkFBQTtBQW1CUjtBQWpCSTtFQUNJLHNCQUFBO0FBbUJSO0FBaEJJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBa0JSOztBQWRBO0VBQ0csYUFBQTtBQWlCSDs7QUFmQTtFQUNJLGFBQUE7QUFrQko7O0FBZkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0Esd0pBQUE7RUFDQSxtQ0FBQTtBQWtCSjtBQWpCSTtFQUNJLHNCQUFBO0FBbUJSOztBQWhCQTtFQUNJLDRCQUFBO0FBbUJKO0FBbEJJO0VBQ0ksV0FBQTtBQW9CUjtBQWxCSTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUFvQlI7QUFsQkk7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0FBb0JSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbjpyb290IHtcXHJcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjY2VjZWNlO1xcclxcbiAgICAtLXBpbmstbW9kZTogI2ZmYjVjYTtcXHJcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAtLWJveC1zaGFkb3c6NXB4IDVweCAxMHB4ICNkZTlkYjAsIC01cHggLTVweCAxMHB4ICNmZmNkZTQ7XFxyXFxufVwiLFwiQGltcG9ydCBcXFwiX3ZhcnNcXFwiO1xcclxcbkBpbXBvcnQgXFxcIl9nbG9iYWxcXFwiO1xcclxcbkBpbXBvcnQgXFxcIl9mb250c1xcXCI7XFxyXFxuXFxyXFxuLm1haW5fY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi50aXRsZXtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLmJ1dHRvbntcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBib3gtc2hhZG93OiA4cHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAuMjUpLCAtOHB4IC00cHggMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLCA4cHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAuMSkgaW5zZXQsIC04cHggLTRweCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xcclxcbiAgICAmOmhvdmVye1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uZ2FtZV9jb250YWluZXJ7XFxyXFxuIG1hcmdpbjogMCBhdXRvO1xcclxcbiBoZWlnaHQ6IDEwMHZoO1xcclxcbiB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGFibGV7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAuY2VsbCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDhweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIC4yNSksIC04cHggLTRweCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksIDhweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIC4xKSBpbnNldCwgLThweCAtNHB4IDE1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNlbGw6aG92ZXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBncmlkLWdhcDogMzBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG4ubWVudV9jb250YWluZXJ7XFxyXFxuICAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuLmdhbWVzV3JhcHBlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xcclxcbiAgICBib3gtc2hhZG93OiA4cHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAuMjUpLCAtOHB4IC00cHggMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLCA4cHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAuMSkgaW5zZXQsIC04cHggLTRweCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgJjpob3ZlcntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmdyZWVuX21vZGV7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXBpbmstbW9kZSk7XFxyXFxuICAgIC50aXRsZXtcXHJcXG4gICAgICAgIGNvbG9yOiNmZmZcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBpbmstbW9kZSk7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gICAgfVxcclxcbiAgICAuYnV0dG9ue1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGluay1tb2RlKTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpOyBcXHJcXG4gICAgfVxcclxcbn1cIixcImh0bWwge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogS2FybGEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkJhdHRsZVNoaXBzID0gdm9pZCAwO1xyXG52YXIgQmF0dGxlU2hpcHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCYXR0bGVTaGlwcygpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIlN0YXRraVwiO1xyXG4gICAgfVxyXG4gICAgQmF0dGxlU2hpcHMucHJvdG90eXBlLmdldEdhbWVFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIZWxsbyBCYXR0bGVTaGlwc1wiKSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmF0dGxlU2hpcHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQmF0dGxlU2hpcHMgPSBCYXR0bGVTaGlwcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuR2FtZXMgPSB2b2lkIDA7XHJcbnZhciBHYW1lcztcclxuKGZ1bmN0aW9uIChHYW1lcykge1xyXG4gICAgR2FtZXNbR2FtZXNbXCJUaWNUYWNUb2VcIl0gPSAxXSA9IFwiVGljVGFjVG9lXCI7XHJcbiAgICBHYW1lc1tHYW1lc1tcIkJhdHRsZVNoaXBzXCJdID0gMl0gPSBcIkJhdHRsZVNoaXBzXCI7XHJcbn0pKEdhbWVzID0gZXhwb3J0cy5HYW1lcyB8fCAoZXhwb3J0cy5HYW1lcyA9IHt9KSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkJvYXJkID0gdm9pZCAwO1xyXG52YXIgQ2VsbF8xID0gcmVxdWlyZShcIi4vQ2VsbFwiKTtcclxudmFyIEJvYXJkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9hcmQoc2l6ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3ltYm9sID0gMTtcclxuICAgICAgICB0aGlzLmNlbGxzID0gbmV3IEFycmF5KHNpemUpO1xyXG4gICAgICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgdGhpcy50YWJsZS5pZCA9IFwiZ2FtZUJvYXJkXCI7XHJcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBzaXplOyByKyspIHtcclxuICAgICAgICAgICAgdmFyIHJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KHIpO1xyXG4gICAgICAgICAgICByb3cuY2xhc3NOYW1lID0gXCJyb3dcIjtcclxuICAgICAgICAgICAgdGhpcy5jZWxsc1tyXSA9IG5ldyBBcnJheShzaXplKTtcclxuICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNlbGwgPSByb3cuaW5zZXJ0Q2VsbChjKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjZWxsXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2VsbCA9IG5ldyBDZWxsXzEuQ2VsbChjZWxsKTtcclxuICAgICAgICAgICAgICAgIHRoaXNfMS5jZWxsc1tyXVtjXSA9IG5ld0NlbGw7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5tYWtlTW92ZShuZXdDZWxsKTsgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHNpemU7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgX2xvb3BfMShjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEJvYXJkLnByb3RvdHlwZS5tYWtlTW92ZSA9IGZ1bmN0aW9uIChjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbFZhbHVlICE9PSAxICYmIGNlbGwuY2VsbFZhbHVlICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjZWxsLnNldENlbGxWYWx1ZSh0aGlzLmN1cnJlbnRTeW1ib2wpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTeW1ib2wgKj0gLTE7XHJcbiAgICAgICAgICAgIGNlbGwuZmlsbENlbGwodGhpcy5jdXJyZW50U3ltYm9sKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja1dpbigpO1xyXG4gICAgfTtcclxuICAgIEJvYXJkLnByb3RvdHlwZS5jaGVja1JvdyA9IGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICB2YXIgcm93QXJyYXkgPSB0aGlzLmNlbGxzW3Jvd107XHJcbiAgICAgICAgdmFyIFggPSB0cnVlO1xyXG4gICAgICAgIHJvd0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcclxuICAgICAgICAgICAgaWYgKGNlbGwuY2VsbFZhbHVlICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBYID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoWClcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgdmFyIE8gPSB0cnVlO1xyXG4gICAgICAgIHJvd0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcclxuICAgICAgICAgICAgaWYgKGNlbGwuY2VsbFZhbHVlICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgTyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKE8pXHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbiAgICBCb2FyZC5wcm90b3R5cGUuY2hlY2tDb2x1bW4gPSBmdW5jdGlvbiAoY29sdW1uKSB7XHJcbiAgICAgICAgdmFyIFggPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2VsbFZhbHVlID0gdGhpcy5jZWxsc1tpXVtjb2x1bW5dLmNlbGxWYWx1ZTtcclxuICAgICAgICAgICAgaWYgKGNlbGxWYWx1ZSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgWCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChYKVxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB2YXIgTyA9IHRydWU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjZWxsVmFsdWUgPSB0aGlzLmNlbGxzW2ldW2NvbHVtbl0uY2VsbFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFZhbHVlICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgTyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChPKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgQm9hcmQucHJvdG90eXBlLmNyb3NzQ2hlY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIFggPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2VsbFZhbHVlID0gdGhpcy5jZWxsc1tpXVtpXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIFggPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoWClcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgdmFyIE8gPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2VsbFZhbHVlID0gdGhpcy5jZWxsc1tpXVtpXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBPID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE8pXHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbiAgICBCb2FyZC5wcm90b3R5cGUucmV2ZXJzZUNyb3NzQ2hlY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIFggPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2VsbFZhbHVlID0gdGhpcy5jZWxsc1tpXVt0aGlzLmNlbGxzLmxlbmd0aCAtIDEgLSBpXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIFggPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoWClcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgdmFyIE8gPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2VsbFZhbHVlID0gdGhpcy5jZWxsc1tpXVt0aGlzLmNlbGxzLmxlbmd0aCAtIDEgLSBpXS5jZWxsVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjZWxsVmFsdWUgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBPID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE8pXHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbiAgICBCb2FyZC5wcm90b3R5cGUuY2hlY2tXaW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUm93KGkpID09PSAxIHx8IHRoaXMuY2hlY2tDb2x1bW4oaSkgPT09IDEpXHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkdyYXR1bGFjamUsIHd5Z3JhxYIgdcW8eXRrb3duaWsgWFwiKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jaGVja1JvdyhpKSA9PT0gLTEgfHwgdGhpcy5jaGVja0NvbHVtbihpKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkdyYXR1bGFjamUsIHd5Z3JhxYIgdcW8eXRrb3duaWsgT1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3Jvc3NDaGVjaygpID09PSAxIHx8IHRoaXMucmV2ZXJzZUNyb3NzQ2hlY2soKSA9PT0gMSlcclxuICAgICAgICAgICAgYWxlcnQoXCJHcmF0dWxhY2plLCB3eWdyYcWCIHXFvHl0a293bmlrIFhcIik7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jcm9zc0NoZWNrKCkgPT09IC0xIHx8IHRoaXMucmV2ZXJzZUNyb3NzQ2hlY2soKSA9PT0gLTEpXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiR3JhdHVsYWNqZSwgd3lncmHFgiB1xbx5dGtvd25payBPXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb2FyZDtcclxufSgpKTtcclxuZXhwb3J0cy5Cb2FyZCA9IEJvYXJkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5DZWxsID0gdm9pZCAwO1xyXG52YXIgQ2VsbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENlbGwoY2VsbCkge1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBjZWxsO1xyXG4gICAgfVxyXG4gICAgQ2VsbC5wcm90b3R5cGUuc2V0Q2VsbFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jZWxsVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5jZWxsVmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJPXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNlbGxWYWx1ZSA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmlubmVyVGV4dCA9IFwiWFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jZWxsVmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudC5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDZWxsLnByb3RvdHlwZS5maWxsQ2VsbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdmFsdWUgPT09IDEgPyAnI0JCQkFGRicgOiAnI0YwQjJEMyc7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENlbGw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLlRpY1RhY1RvZSA9IHZvaWQgMDtcclxudmFyIEJvYXJkXzEgPSByZXF1aXJlKFwiLi9Cb2FyZFwiKTtcclxudmFyIFRpY1RhY1RvZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRpY1RhY1RvZSgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkvDs8WCa28gaSBrcnp5xbx5a1wiO1xyXG4gICAgfVxyXG4gICAgVGljVGFjVG9lLnByb3RvdHlwZS5nZXRHYW1lRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYm9hcmQgPSBuZXcgQm9hcmRfMS5Cb2FyZCgzKTtcclxuICAgICAgICByZXR1cm4gYm9hcmQudGFibGU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRpY1RhY1RvZTtcclxufSgpKTtcclxuZXhwb3J0cy5UaWNUYWNUb2UgPSBUaWNUYWNUb2U7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIGdhbWVzX2VudW1fMSA9IHJlcXVpcmUoXCIuLi9nYW1lcy5lbnVtXCIpO1xyXG52YXIgdGljdGFjdG9lXzEgPSByZXF1aXJlKFwiLi4vdGljdGFjdG9lL3RpY3RhY3RvZVwiKTtcclxudmFyIGJhdHRsZVNoaXBzXzEgPSByZXF1aXJlKFwiLi4vYmF0dGxlU2hpcHMvYmF0dGxlU2hpcHNcIik7XHJcbnJlcXVpcmUoXCIuL3N0eWxlcy9zdHlsZXMuc2Nzc1wiKTtcclxudmFyIEFwcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcChnYW1lRmFjdG9yeSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUZhY3RvcnkgPSBnYW1lRmFjdG9yeTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIEFwcC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWVudUNvbnRhaW5lciA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7IC8vIGtvbnRlbmVyIG1lbnUgZG9zdMSZcG55Y2ggZ2llclxyXG4gICAgICAgIHZhciBnYW1lQ29udGFpbmVyID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgICAgICB2YXIgbWFpbkNvbnRhaW5lciA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XHJcbiAgICAgICAgdmFyIHRpdGxlID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJykpOyAvLyBrb250ZW5lciBnxYLDs3dueSBla3JhbnUgeiBncsSFXHJcbiAgICAgICAgZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudV9jb250YWluZXInKTtcclxuICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW5fY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdHYW1lIFBvcnRhbCc7XHJcbiAgICAgICAgdmFyIGdhbWVzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBsaXN0YSBwb3p5Y2ppIHcgbWVudSBkb3N0xJlwbnljaCBnaWVyXHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoZ2FtZUtpbmQpIHtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKE51bWJlcihnYW1lS2luZCkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBnYW1lID0gdGhpc18xLmdhbWVGYWN0b3J5LmdldEdhbWUoTnVtYmVyKGdhbWVLaW5kKSk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShnYW1lLm5hbWUpKTtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZS5nZXRHYW1lRWxlbWVudCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGdhbWVzV3JhcHBlci5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhnYW1lc19lbnVtXzEuR2FtZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgZ2FtZUtpbmQgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIF9sb29wXzEoZ2FtZUtpbmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUT0RPOiBaYWltcGxlbWVudHVqIHd6b3J6ZWMgZmFicnlraS9tZXRvZHkgZmFicnlrdWrEhWNlaiwgdGFrIGFieSBuYSBwb2RzdGF3aWUga29ua3JldG5laiB3YXJ0b8WbY2kgeiBlbnVtXHJcbiAgICAgICAgLy8gendyw7NjacSHIG9iaWVrdCBncnkuIFogdGVnbyBvYmlla3R1IG1vxbxuYSBuYXN0xJlwbmllIHBvYnJhxIcgbmF6d8SZIGdyeSBpIGRvZGHEhyBkbyBtZW51IG9yYXogbWV0b2TEmSB6d3JhY2FqxIVjxIVcclxuICAgICAgICAvLyBzYW3EhSBncsSZIGkgcG8ga2xpa25pxJljaXUgdyB3eWJyYW55IGVsZW1lbnQgbGlzdHkgd3l3b8WCeXdhxIcgasSFLCBhYnkgZG9rbGVqYcSHIHphd2FydG/Fm8SHIGRvIGdhbWVDb250YWluZXIuXHJcbiAgICAgICAgLy8gQWJ5IHd5xZt3aWV0bGnEhyBtZW51IG5hbGXFvHkgbmFwaXNhxIcgcMSZdGzEmSwga3TDs3RhIHByemVpdGVydWplIHBvIHdzenlzdGtpY2ggd2FydG/Fm2NpYWNoIGVudW0nYVxyXG4gICAgICAgIHZhciBzd2l0Y2hlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgc3dpdGNoZXIudGV4dENvbnRlbnQgPSAnUGluayBNb2RlIFN3aXRjaGVyJztcclxuICAgICAgICBzd2l0Y2hlci5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICAgICAgICBzd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZ3JlZW5fbW9kZVwiKTsgfSk7XHJcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lc1dyYXBwZXIpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lQ29udGFpbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aXRsZSwgc3dpdGNoZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFwcDtcclxufSgpKTtcclxudmFyIEdhbWVGYWN0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZUZhY3RvcnkoKSB7XHJcbiAgICB9XHJcbiAgICBHYW1lRmFjdG9yeS5wcm90b3R5cGUuZ2V0R2FtZSA9IGZ1bmN0aW9uIChnYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChnYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZ2FtZXNfZW51bV8xLkdhbWVzLlRpY1RhY1RvZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGljdGFjdG9lXzEuVGljVGFjVG9lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgZ2FtZXNfZW51bV8xLkdhbWVzLkJhdHRsZVNoaXBzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBiYXR0bGVTaGlwc18xLkJhdHRsZVNoaXBzKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGdhbWUhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZUZhY3Rvcnk7XHJcbn0oKSk7XHJcbm5ldyBBcHAobmV3IEdhbWVGYWN0b3J5KCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9