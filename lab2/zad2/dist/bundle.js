/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.Board = void 0;\r\nvar Cell_1 = __webpack_require__(/*! ./Cell */ \"./src/Cell.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board(size) {\r\n        var _this = this;\r\n        this.currentSymbol = 1;\r\n        this.cells = new Array(size);\r\n        var table = document.getElementById(\"tictactoe\");\r\n        table.innerHTML = \"\";\r\n        for (var r = 0; r < size; r++) {\r\n            var row = table.insertRow(r);\r\n            row.className = \"row\";\r\n            this.cells[r] = new Array(size);\r\n            var _loop_1 = function (c) {\r\n                var cell = row.insertCell(c);\r\n                cell.className = \"cell\";\r\n                var newCell = new Cell_1.Cell(cell);\r\n                this_1.cells[r][c] = newCell;\r\n                cell.addEventListener(\"click\", function () { return _this.makeMove(newCell); });\r\n            };\r\n            var this_1 = this;\r\n            for (var c = 0; c < size; c++) {\r\n                _loop_1(c);\r\n            }\r\n        }\r\n    }\r\n    Board.prototype.makeMove = function (cell) {\r\n        if (cell.cellValue !== 1 && cell.cellValue !== -1) {\r\n            cell.setCellValue(this.currentSymbol);\r\n            this.currentSymbol *= -1;\r\n            cell.fillCell(this.currentSymbol);\r\n        }\r\n        this.checkWin();\r\n    };\r\n    Board.prototype.checkRow = function (row) {\r\n        var rowArray = this.cells[row];\r\n        var X = true;\r\n        rowArray.forEach(function (cell) {\r\n            if (cell.cellValue !== 1) {\r\n                X = false;\r\n            }\r\n        });\r\n        if (X)\r\n            return 1;\r\n        var O = true;\r\n        rowArray.forEach(function (cell) {\r\n            if (cell.cellValue !== -1) {\r\n                O = false;\r\n            }\r\n        });\r\n        if (O)\r\n            return -1;\r\n        return 0;\r\n    };\r\n    Board.prototype.checkColumn = function (column) {\r\n        var X = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][column].cellValue;\r\n            if (cellValue !== 1) {\r\n                X = false;\r\n            }\r\n        }\r\n        if (X)\r\n            return 1;\r\n        var O = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][column].cellValue;\r\n            if (cellValue !== -1) {\r\n                O = false;\r\n            }\r\n        }\r\n        if (O)\r\n            return -1;\r\n        return 0;\r\n    };\r\n    Board.prototype.crossCheck = function () {\r\n        var X = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][i].cellValue;\r\n            if (cellValue !== 1) {\r\n                X = false;\r\n            }\r\n        }\r\n        if (X)\r\n            return 1;\r\n        var O = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][i].cellValue;\r\n            if (cellValue !== -1) {\r\n                O = false;\r\n            }\r\n        }\r\n        if (O)\r\n            return -1;\r\n        return 0;\r\n    };\r\n    Board.prototype.reverseCrossCheck = function () {\r\n        var X = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][this.cells.length - 1 - i].cellValue;\r\n            if (cellValue !== 1) {\r\n                X = false;\r\n            }\r\n        }\r\n        if (X)\r\n            return 1;\r\n        var O = true;\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            var cellValue = this.cells[i][this.cells.length - 1 - i].cellValue;\r\n            if (cellValue !== -1) {\r\n                O = false;\r\n            }\r\n        }\r\n        if (O)\r\n            return -1;\r\n        return 0;\r\n    };\r\n    Board.prototype.checkWin = function () {\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            if (this.checkRow(i) === 1 || this.checkColumn(i) === 1)\r\n                alert(\"Gratulacje, wygrał użytkownik X\");\r\n            else if (this.checkRow(i) === -1 || this.checkColumn(i) === -1)\r\n                alert(\"Gratulacje, wygrał użytkownik O\");\r\n        }\r\n        if (this.crossCheck() === 1 || this.reverseCrossCheck() === 1)\r\n            alert(\"Gratulacje, wygrał użytkownik X\");\r\n        else if (this.crossCheck() === -1 || this.reverseCrossCheck() === -1)\r\n            alert(\"Gratulacje, wygrał użytkownik O\");\r\n    };\r\n    return Board;\r\n}());\r\nexports.Board = Board;\r\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Cell.ts":
/*!*********************!*\
  !*** ./src/Cell.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Cell = void 0;\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(cell) {\r\n        this.htmlElement = cell;\r\n    }\r\n    Cell.prototype.setCellValue = function (value) {\r\n        this.cellValue = value;\r\n        if (this.cellValue === -1) {\r\n            this.htmlElement.innerText = \"O\";\r\n        }\r\n        if (this.cellValue === 1) {\r\n            this.htmlElement.innerText = \"X\";\r\n        }\r\n        if (this.cellValue === 0) {\r\n            this.htmlElement.innerText = \"\";\r\n        }\r\n    };\r\n    Cell.prototype.fillCell = function (value) {\r\n        this.htmlElement.style.backgroundColor = value === 1 ? '#BBBAFF' : '#F0B2D3';\r\n    };\r\n    return Cell;\r\n}());\r\nexports.Cell = Cell;\r\n\n\n//# sourceURL=webpack:///./src/Cell.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\r\nvar board = new Board_1.Board(3);\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;