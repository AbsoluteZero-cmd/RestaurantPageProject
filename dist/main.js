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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/intro-bg.jpg */ \"./assets/intro-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/stats-2.jpg */ \"./assets/stats-2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/stats-1.jpg */ \"./assets/stats-1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/stats-3.jpg */ \"./assets/stats-3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: \"Kanit\", sans-serif;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.box {\r\n    width: 500px;\r\n    height: 500px;\r\n    background: #000;\r\n}\r\n\r\n\r\n.container {\r\n    width: 100%;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\nbutton {\r\n    background: none;\r\n    color: black;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px 20px;\r\n\r\n    transition: all linear 0.2s;\r\n}\r\n\r\nbutton:hover {\r\n    color: white;\r\n    background: black;\r\n    \r\n}\r\n\r\n/* Header */\r\n\r\n.header {\r\n    padding-top: 20px;\r\n    width: 100%;\r\n    max-width: 1200px;\r\n\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 10000;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.logo {\r\n    font-weight: 700;\r\n    font-size: 36px;\r\n    color: white;\r\n}\r\n\r\n/* Nav */\r\n\r\n.nav:last-child {\r\n    margin-left: 30px;\r\n}\r\n\r\n.nav__item {\r\n    color: white;\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-right: 20px;\r\n\r\n    transition: color linear 0.1s;\r\n}\r\n\r\n.nav__item:hover {\r\n    color: grey;\r\n}\r\n\r\n.nav__button {\r\n    color: black;\r\n    background: white;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n    text-decoration: none;\r\n\r\n    transition: all linear 0.2s;\r\n}\r\n\r\n.nav__button:hover {\r\n    color: #fff;\r\n    background: #000;\r\n}\r\n\r\n/* Intro */\r\n\r\n.intro {\r\n    width: 100%;\r\n    height: 100vh;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n\r\n    background: no-repeat center url(${___CSS_LOADER_URL_REPLACEMENT_0___}) #4b565d;\r\n}\r\n\r\n.intro__inner {\r\n    max-width: 880px;\r\n    margin: 0 auto;\r\n\r\n    text-align: center;\r\n}\r\n\r\n.intro__button {\r\n    text-decoration: none;\r\n    color: white;\r\n    text-transform: uppercase;\r\n    padding: 15px 40px;\r\n    background: #000;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n\r\n    transition: all linear 0.3s;\r\n}\r\n\r\n.intro__button:hover {\r\n    color: black;\r\n    background: white;\r\n    border: 2px solid black;\r\n}\r\n\r\n.title {\r\n    font-size: 142px;\r\n    color: #ffe900;\r\n\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 900;\r\n    font-style: normal;\r\n    text-transform: uppercase;\r\n    line-height: 0.9;\r\n}\r\n\r\n.subtitle {\r\n    font-size: 32px;\r\n    font-weight: 600;\r\n\r\n    margin: 0 0 40px;\r\n}\r\n\r\n.intro__bottom {\r\n    position: absolute;\r\n    bottom: 0;\r\n    z-index: 10000;\r\n\r\n    margin-bottom: 20px;\r\n\r\n    width: 100%;\r\n    max-width: 1200px;\r\n\r\n    /* background: white; */\r\n    color: white;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n}\r\n\r\n.bottom_left {\r\n    display: block;\r\n}\r\n\r\n.bottom__text {\r\n    width: 100%;\r\n    max-width: 400px;\r\n    text-align: left;\r\n    line-height: 1.7;\r\n}\r\n\r\n/* Schedule */\r\n\r\n.schedule__item {\r\n    display: block;\r\n    width: 400px;\r\n    padding: 5px;\r\n    border: 1px solid white;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.schedule__item:last-child {\r\n    margin-top: 10px;\r\n}\r\n\r\n.schedule__item:first-child {\r\n    background: white;\r\n    color: black;\r\n}\r\n\r\n\r\n/* Stats */\r\n\r\n.stats {\r\n    padding: 60px 0;\r\n    background: #ffe900;\r\n}\r\n\r\n.stats__inner {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n.stats__images {\r\n    position: relative;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.stats__images img {\r\n    border-radius: 5px;\r\n}\r\n\r\n.stats__image {\r\n    width: 300px;\r\n    height: 200px;\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n}\r\n\r\n.stats__image:first-child {\r\n    width: 240px;\r\n    height: 180px;\r\n\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n}\r\n\r\n.stats__image:last-child {\r\n    width: 240px;\r\n    height: 180px;\r\n\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n}\r\n\r\n.stats__text {\r\n    max-width: 800px;\r\n    text-align: center;\r\n\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    color: black;\r\n\r\n    margin: 15px 0;\r\n}\r\n\r\n/* Info */\r\n\r\n.stats__info {\r\n    width: 100%;\r\n}\r\n\r\n.info__inner {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    position: relative;\r\n}\r\n\r\n.stats__info:before {\r\n    content: '';\r\n    display: block;\r\n    height: 2px;\r\n    width: 100%;\r\n    background: #000;\r\n    margin: 25px 0;\r\n}\r\n\r\n.info__item {\r\n    font-size: 28px;\r\n}\r\n\r\n.info__item span {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 900;\r\n    font-style: normal;\r\n    font-size: 32px;\r\n\r\n    margin-right: 10px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpageproject/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpageproject/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurantpageproject/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpageproject/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpageproject/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpageproject/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpageproject/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpageproject/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpageproject/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpageproject/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpageproject/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_intro_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/intro-bg.jpg */ \"./assets/intro-bg.jpg\");\n/* harmony import */ var _tabs_AboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/AboutPage */ \"./src/tabs/AboutPage.js\");\n/* harmony import */ var _tabs_MenuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/MenuPage */ \"./src/tabs/MenuPage.js\");\n/* harmony import */ var _tabs_ContactUsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/ContactUsPage */ \"./src/tabs/ContactUsPage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\nconst nav = document.querySelector('.nav');\r\n\r\n\r\nconst navButtons = [\r\n    {\r\n        'text': 'About',\r\n        'content': (0,_tabs_AboutPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\r\n    },\r\n    {\r\n        'text': 'Menu',\r\n        'content': (0,_tabs_MenuPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\r\n    },\r\n    {\r\n        'text': 'Contact Us',\r\n        'content': (0,_tabs_ContactUsPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\r\n    }\r\n];\r\n\r\n\r\nfor(let i = 0; i < navButtons.length; i++){\r\n    console.log(navButtons[i]);\r\n    let navButton = document.createElement('a');\r\n    navButton.textContent = navButtons[i].text;\r\n    navButton.classList.add('nav__item');\r\n    navButton.addEventListener('click', (e) => {\r\n        content.replaceChildren();\r\n        content.appendChild(navButtons[i].content);\r\n    })\r\n\r\n    nav.appendChild(navButton);\r\n}\r\n\r\nlet navButton = document.createElement('a');\r\nnavButton.classList.add('nav__button');\r\nnavButton.href = '#';\r\nnavButton.textContent = 'Book Online';\r\nnav.appendChild(navButton);\r\n\r\ncontent.appendChild((0,_tabs_AboutPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n//# sourceURL=webpack://restaurantpageproject/./src/index.js?");

/***/ }),

/***/ "./src/tabs/AboutPage.js":
/*!*******************************!*\
  !*** ./src/tabs/AboutPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Intro = () => {\r\n    const intro = document.createElement('div');\r\n    intro.classList.add('intro');\r\n\r\n    const intro__inner = document.createElement('div');\r\n    intro__inner.classList.add('intro__inner');\r\n\r\n    const title = document.createElement('div');\r\n    title.textContent = 'Qazaq Kitchen';\r\n    title.classList.add('title');\r\n\r\n    intro__inner.appendChild(title);\r\n\r\n    const intro__bottom = document.createElement('div');\r\n    intro__bottom.classList.add('intro__bottom');\r\n\r\n    const bottom_left = document.createElement('div');\r\n    bottom_left.classList.add('bottom_left')\r\n\r\n    const schedule__item = document.createElement('div');\r\n    schedule__item.classList.add('schedule__item')\r\n\r\n    let text1 = document.createElement('div');\r\n    text1.textContent = 'Monday-Friday';\r\n    text1.classList.add('schedule__text');\r\n    schedule__item.appendChild(text1);\r\n\r\n    text1 = document.createElement('div');\r\n    text1.textContent = '09.00-22.00';\r\n    text1.classList.add('schedule__text');\r\n    schedule__item.appendChild(text1);\r\n    bottom_left.appendChild(schedule__item);\r\n\r\n    const schedule__item_ = document.createElement('div');\r\n    schedule__item_.classList.add('schedule__item')\r\n\r\n    text1 = document.createElement('div');\r\n    text1.textContent = 'Saturday';\r\n    text1.classList.add('schedule__text');\r\n    schedule__item_.appendChild(text1);\r\n\r\n    text1 = document.createElement('div');\r\n    text1.textContent = '09.00-18.00';\r\n    text1.classList.add('schedule__text');\r\n    schedule__item_.appendChild(text1);\r\n\r\n    bottom_left.appendChild(schedule__item);\r\n    bottom_left.appendChild(schedule__item_);\r\n\r\n    intro__bottom.appendChild(bottom_left);\r\n\r\n    const bottom__text = document.createElement('div');\r\n    bottom__text.textContent = 'Rich flavor of tradition Praesent ut sem iaculis, facilisis nisi eget, commodo velit. Sed blandit elit ac vulputate. Praesentn orci condimentum ultrices quis eget urna.';\r\n    bottom__text.classList.add('bottom__text');\r\n    intro__bottom.appendChild(bottom__text);\r\n\r\n    intro.appendChild(intro__inner);\r\n    intro.appendChild(intro__bottom);\r\n\r\n    return intro;\r\n};\r\n\r\nconst Stats = () => {\r\n    const stats = document.createElement('div');\r\n    stats.classList.add('stats');\r\n\r\n    const container = document.createElement('div');\r\n    container.classList.add('container');\r\n    \r\n    const stats__inner = document.createElement('div');\r\n    stats__inner.classList.add('stats__inner');\r\n\r\n    const stats__images = document.createElement('div');\r\n    stats__images.classList.add('stats__images');\r\n\r\n    let img = document.createElement('img');\r\n    img.classList.add('stats__image')\r\n    stats__images.appendChild(img);\r\n\r\n    img = document.createElement('img');\r\n    img.classList.add('stats__image')\r\n    stats__images.appendChild(img);\r\n\r\n    img = document.createElement('img');\r\n    img.classList.add('stats__image')\r\n    stats__images.appendChild(img);\r\n    \r\n    stats__inner.appendChild(stats__images);\r\n\r\n    const stats__text = document.createElement('div');\r\n    stats__text.classList.add('stats__text');\r\n    stats__text.textContent = 'Rich flavor of tradition Praesent ut sem iaculis, facilisis nisi eget, commodo velit. Sed blandit elit ac vulputate. Praesentn orci condimentum ultrices quis eget urna. Praesent ut sem iaculis, facilisis nisi eget, commodo velit. Sed blandit elit ac vulputate. Praesentn orci condimentum ultrices quis eget urna';\r\n    stats__inner.appendChild(stats__text);\r\n\r\n\r\n    const stats__info = document.createElement('div');\r\n    stats__info.classList.add('stats__info');\r\n\r\n    const info__inner = document.createElement('div');\r\n    info__inner.classList.add('info__inner');\r\n\r\n    let info__item = document.createElement('div');\r\n    info__item.classList.add('info__item');\r\n    let num = document.createElement('span')\r\n    num.classList.add('info__number');\r\n    num.textContent = '10,000+';\r\n    info__item.appendChild(num);\r\n    info__item.appendChild(document.createTextNode('Satisfied Customers'));\r\n    info__inner.appendChild(info__item);\r\n\r\n    info__item = document.createElement('div');\r\n    info__item.classList.add('info__item');\r\n    num = document.createElement('span')\r\n    num.classList.add('info__number');\r\n    num.textContent = '200+';\r\n    info__item.appendChild(num);\r\n    info__item.appendChild(document.createTextNode('Menu'));\r\n    info__inner.appendChild(info__item);\r\n\r\n    info__item = document.createElement('div');\r\n    info__item.classList.add('info__item');\r\n    num = document.createElement('span');\r\n    num.classList.add('info__number');\r\n    num.textContent = '95%';\r\n    info__item.appendChild(num);\r\n    info__item.appendChild(document.createTextNode('Users report healthier'));\r\n    info__inner.appendChild(info__item);\r\n\r\n    stats__info.appendChild(info__inner);\r\n\r\n    stats__inner.appendChild(stats__info);\r\n\r\n    container.appendChild(stats__inner);\r\n    stats.appendChild(container);\r\n\r\n\r\n    return stats;\r\n}\r\n\r\nconst AboutPage = () => {\r\n    const aboutPage = document.createElement('div');\r\n    aboutPage.appendChild(Intro());\r\n    aboutPage.appendChild(Stats());\r\n\r\n    return aboutPage;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);\n\n//# sourceURL=webpack://restaurantpageproject/./src/tabs/AboutPage.js?");

/***/ }),

/***/ "./src/tabs/ContactUsPage.js":
/*!***********************************!*\
  !*** ./src/tabs/ContactUsPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ContactUsPage = () => {\r\n    const text = document.createElement('div');\r\n    text.textContent = 'Contact Us';\r\n    text.classList.add('title');\r\n\r\n    const intro = document.createElement('div');\r\n    intro.classList.add('intro');\r\n\r\n    const intro__inner = document.createElement('div');\r\n    intro__inner.classList.add('intro__inner');\r\n\r\n    intro__inner.appendChild(text);\r\n    intro.appendChild(intro__inner);\r\n\r\n    return intro;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUsPage);\n\n//# sourceURL=webpack://restaurantpageproject/./src/tabs/ContactUsPage.js?");

/***/ }),

/***/ "./src/tabs/MenuPage.js":
/*!******************************!*\
  !*** ./src/tabs/MenuPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst MenuPage = () => {\r\n    const text = document.createElement('div');\r\n    text.textContent = 'Menu';\r\n    text.classList.add('title');\r\n\r\n    const intro = document.createElement('div');\r\n    intro.classList.add('intro');\r\n\r\n    const intro__inner = document.createElement('div');\r\n    intro__inner.classList.add('intro__inner');\r\n\r\n    intro__inner.appendChild(text);\r\n    intro.appendChild(intro__inner);\r\n\r\n    return intro;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPage);\n\n//# sourceURL=webpack://restaurantpageproject/./src/tabs/MenuPage.js?");

/***/ }),

/***/ "./assets/intro-bg.jpg":
/*!*****************************!*\
  !*** ./assets/intro-bg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fed840e35decd99b74f0.jpg\";\n\n//# sourceURL=webpack://restaurantpageproject/./assets/intro-bg.jpg?");

/***/ }),

/***/ "./assets/stats-1.jpg":
/*!****************************!*\
  !*** ./assets/stats-1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"56b3a24ac9f9c2df9da4.jpg\";\n\n//# sourceURL=webpack://restaurantpageproject/./assets/stats-1.jpg?");

/***/ }),

/***/ "./assets/stats-2.jpg":
/*!****************************!*\
  !*** ./assets/stats-2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"adf0405aadf49ed05278.jpg\";\n\n//# sourceURL=webpack://restaurantpageproject/./assets/stats-2.jpg?");

/***/ }),

/***/ "./assets/stats-3.jpg":
/*!****************************!*\
  !*** ./assets/stats-3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"60eb2f80c378d1778b2c.jpg\";\n\n//# sourceURL=webpack://restaurantpageproject/./assets/stats-3.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;