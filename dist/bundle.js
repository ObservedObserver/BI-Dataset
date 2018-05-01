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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.js */ \"./src/index.js\");\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_index_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_index_js__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/dimension.js":
/*!**************************!*\
  !*** ./src/dimension.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar dimensionStatistic = function dimensionStatistic(rawData, dimensions) {\n  var result = [];\n  dimensions.forEach(function (dim) {\n    var set = new Set();\n    rawData.forEach(function (val) {\n      set.add(val[dim]);\n    });\n    result.push([].concat(_toConsumableArray(set)));\n  });\n  console.log('dimensionStatistic[result]', result);\n  if (result.length > 0) {\n    result[0] = result[0].map(function (val) {\n      return [val];\n    });\n  }\n  return result;\n};\n\nvar dimensionMultiply = function dimensionMultiply(dimX, dimY) {\n  var result = [];\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = dimX[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var dimXItem = _step.value;\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = dimY[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var dimYItem = _step2.value;\n\n          if (Array.isArray(dimXItem)) {\n            result.push([].concat(_toConsumableArray(dimXItem), [dimYItem]));\n          } else {\n            result.push([dimXItem, dimYItem]);\n          }\n        }\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2.return) {\n            _iterator2.return();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return result;\n};\n/**\n * @param {Array} rawData\n * @param {Array} dimensions\n * @param {Array} measures\n * @return {Array} [matrix of mixed dimensions]\n */\nvar dimensionMixer = function dimensionMixer(_ref) {\n  var rawData = _ref.rawData,\n      dimensions = _ref.dimensions,\n      measures = _ref.measures;\n\n  var stat = dimensionStatistic(rawData, dimensions);\n  var result = stat[0];\n  var lowerstat = dimensionStatistic(rawData, dimensions.slice(1)); //[]\n  var lowerresult = lowerstat[0]; //undefined\n  for (var i = 1; i < stat.length; i++) {\n    result = dimensionMultiply(result, stat[i]);\n  }\n  for (var _i = 1; _i < lowerstat.length; _i++) {\n    lowerresult = dimensionMultiply(lowerresult, lowerstat[_i]);\n  }\n  result.unshift([].concat(_toConsumableArray(dimensions)));\n  if (typeof lowerresult !== 'undefined') {\n    lowerresult.unshift(dimensions.slice(1));\n  }\n  return { result: result, stat: stat, lowerresult: lowerresult };\n};\nexports.dimensionStatistic = dimensionStatistic;\nexports.dimensionMultiply = dimensionMultiply;\nexports.default = dimensionMixer;\n\n//# sourceURL=webpack:///./src/dimension.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _label = __webpack_require__(/*! ./label.js */ \"./src/label.js\");\n\nvar _label2 = _interopRequireDefault(_label);\n\nvar _dimension = __webpack_require__(/*! ./dimension.js */ \"./src/dimension.js\");\n\nvar _dimension2 = _interopRequireDefault(_dimension);\n\nvar _matrix = __webpack_require__(/*! ./matrix.js */ \"./src/matrix.js\");\n\nvar _matrix2 = _interopRequireDefault(_matrix);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Core = function () {\n  function Core(_ref) {\n    var rawData = _ref.rawData,\n        xlabels = _ref.xlabels,\n        ylabels = _ref.ylabels;\n\n    _classCallCheck(this, Core);\n\n    this.rawData = rawData;\n    this.xlabels = xlabels;\n    this.ylabels = ylabels;\n  }\n\n  _createClass(Core, [{\n    key: 'transLabel',\n    value: function transLabel() {\n      var _labelProcesser = (0, _label2.default)({ xlabels: this.xlabels, ylabels: this.ylabels }),\n          dimensions = _labelProcesser.dimensions,\n          measures = _labelProcesser.measures;\n\n      this.dimensions = dimensions;\n      this.measures = measures;\n    }\n  }, {\n    key: 'transDimension',\n    value: function transDimension() {\n      // 默认度量维度均存在\n      if (typeof this.dimensions !== 'undefined' && typeof this.measures !== 'undefined') {\n        var _dimensionMixer = (0, _dimension2.default)({ rawData: this.rawData, dimensions: this.dimensions, measures: this.measures }),\n            result = _dimensionMixer.result,\n            stat = _dimensionMixer.stat,\n            lowerresult = _dimensionMixer.lowerresult;\n\n        console.log('transDimension', { result: result, stat: stat, lowerresult: lowerresult });\n        this.mixDim = result;\n        this.lowerMixDim = lowerresult;\n        this.stat = stat;\n      } else {\n        throw 'dimensions or measures not defined, you must use transLabel()to get it';\n      }\n    }\n  }, {\n    key: 'transData',\n    value: function transData() {\n      if (typeof this.mixDim !== 'undefined') {\n        this.data = (0, _matrix2.default)({ rawData: this.rawData, mixDim: this.mixDim, measures: this.measures });\n      } else {\n        throw 'mixDim not defined, you must use transDimension to get it.';\n      }\n    }\n  }]);\n\n  return Core;\n}();\n\nexports.default = Core;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/label.js":
/*!**********************!*\
  !*** ./src/label.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * @param {Array} xlabels [array contains label object of x axis]\n * @param {Array} ylabels [array contains label object of y axis]\n * @return {Object} [dimensions and measures]\n */\nvar labelProcesser = function labelProcesser(_ref) {\n  var xlabels = _ref.xlabels,\n      ylabels = _ref.ylabels;\n\n  var dimensions = [];\n  var measures = [];\n\n  xlabels.forEach(function (val) {\n    val.type === 'string' ? dimensions.push(val.name) : measures.push(val.name);\n  });\n\n  ylabels.forEach(function (val) {\n    val.type === 'string' ? dimensions.push(val.name) : measures.push(val.name);\n  });\n\n  return { dimensions: dimensions, measures: measures };\n};\n\nexports.default = labelProcesser;\n\n//# sourceURL=webpack:///./src/label.js?");

/***/ }),

/***/ "./src/matrix.js":
/*!***********************!*\
  !*** ./src/matrix.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\n * @param {Array} rawData\n * @param {Array} mixDim\n * @return {Array} [dataset]\n */\nvar matrixProducer = function matrixProducer(_ref) {\n  var _result$;\n\n  var rawData = _ref.rawData,\n      mixDim = _ref.mixDim,\n      measures = _ref.measures;\n\n  // let _length = mixDim[0].length\n  var result = mixDim;\n  var dimLen = mixDim[0].length;\n  (_result$ = result[0]).push.apply(_result$, _toConsumableArray(measures));\n\n  var _loop = function _loop(i) {\n    // let pos = rawData.findIndex((item) => {\n    //   return mixDim[i].every((val, index) => {\n    //     // console.log(val, item[mixDim[0][index]])\n    //     return val === item[mixDim[0][index]]\n    //   })\n    // })\n    var items = rawData.filter(function (item) {\n      return mixDim[i].every(function (val, index) {\n        return val === item[mixDim[0][index]];\n      });\n    });\n    measures.forEach(function (meas) {\n      result[i].push(0);\n    });\n    measures.forEach(function (meas, index) {\n      items.forEach(function (item) {\n        result[i][dimLen + index] += item[meas];\n      });\n    });\n    // if (pos !== -1) {\n    //   measures.forEach((meas) => {\n    //     result[i].push(rawData[pos][meas])\n    //   })\n    // } else {\n    //   measures.forEach((meas) => {\n    //     result[i].push('null')\n    //   })\n    // }\n  };\n\n  for (var i = 1; i < mixDim.length; i++) {\n    _loop(i);\n  }\n  return result;\n};\nexports.default = matrixProducer;\n\n//# sourceURL=webpack:///./src/matrix.js?");

/***/ })

/******/ });