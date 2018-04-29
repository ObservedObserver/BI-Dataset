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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.js */ \"./src/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/dimension.js":
/*!**************************!*\
  !*** ./src/dimension.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar dimensionMixer = ({ rawData, dimensions, measures }) => {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dimensionMixer);\n\n//# sourceURL=webpack:///./src/dimension.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _label_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label.js */ \"./src/label.js\");\n/* harmony import */ var _dimension_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimension.js */ \"./src/dimension.js\");\n/* harmony import */ var _matrix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix.js */ \"./src/matrix.js\");\n\n\n\nclass Core {\n  constructor({ rawData, xlabels, ylabels }) {\n    this.rawData = rawData;\n    this.xlabels = xlabels;\n    this.ylabels = ylabels;\n  }\n  transLabel() {\n    let { dimensions, measures } = Object(_label_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ xlabels, ylabels });\n    this.dimensions = dimensions;\n    this.measures = measures;\n  }\n  transDimension() {\n    // 默认度量维度均存在\n    if (typeof this.dimensions !== 'undefined' && typeof this.measures !== 'undefined') {\n      this.mixDim = Object(_dimension_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ rawData, dimensions: this.dimensions, measures: this.measures });\n    } else {\n      throw 'dimensions or measures not defined, you must use transLabel()to get it';\n    }\n  }\n  transData() {\n    if (typeof this.matrixProducer !== 'undefined') {\n      this.data = Object(_matrix_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ rawData, mixDim: this.mixDim });\n    } else {\n      throw 'mixDim not defined, you must use transDimension to get it.';\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Core);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/label.js":
/*!**********************!*\
  !*** ./src/label.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar labelProcesser = ({ xlabels, ylabels }) => {\n  let dimensions = [];\n  let measures = [];\n\n  // xlabels.forEach\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (labelProcesser);\n\n//# sourceURL=webpack:///./src/label.js?");

/***/ }),

/***/ "./src/matrix.js":
/*!***********************!*\
  !*** ./src/matrix.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar matrixProducer = ({ rawData, mixDim }) => {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (matrixProducer);\n\n//# sourceURL=webpack:///./src/matrix.js?");

/***/ })

/******/ });