"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getTweets";
exports.ids = ["pages/api/getTweets"];
exports.modules = {

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "(api)/./pages/api/getTweets.ts":
/*!********************************!*\
  !*** ./pages/api/getTweets.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.js\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nconst feedQuery = next_sanity__WEBPACK_IMPORTED_MODULE_1__.groq`\n*[_type == \"tweet\" && !blockTweet ] {\n  _id,\n  ...\n} | order(_createdAt desc)\n\n`;\nasync function handler(req, res) {\n  const tweets = await _sanity__WEBPACK_IMPORTED_MODULE_0__.sanityClient.fetch(feedQuery);\n  res.status(200).json({\n    tweets\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VHdlZXRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFHQSxNQUFNRSxTQUFTLEdBQUdELDZDQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO0FBWWUsZUFBZUUsT0FBZixDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtBQUVBLFFBQU1DLE1BQWUsR0FBRyxNQUFNTix1REFBQSxDQUFtQkUsU0FBbkIsQ0FBOUI7QUFDQUcsRUFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUgsSUFBQUE7QUFBRixHQUFyQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2dldFR3ZWV0cy50cz9jNWYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IHNhbml0eUNsaWVudCB9IGZyb20gJy4uLy4uL3Nhbml0eSdcclxuaW1wb3J0IHsgVHdlZXQgfSBmcm9tICcuLi8uLi90eXBpbmdzJ1xyXG5pbXBvcnQgeyBncm9xIH0gZnJvbSAnbmV4dC1zYW5pdHknXHJcblxyXG5cclxuY29uc3QgZmVlZFF1ZXJ5ID0gZ3JvcWBcclxuKltfdHlwZSA9PSBcInR3ZWV0XCIgJiYgIWJsb2NrVHdlZXQgXSB7XHJcbiAgX2lkLFxyXG4gIC4uLlxyXG59IHwgb3JkZXIoX2NyZWF0ZWRBdCBkZXNjKVxyXG5cclxuYFxyXG5cclxudHlwZSBEYXRhID0ge1xyXG4gIHR3ZWV0czogVHdlZXRbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cclxuKSB7XHJcblxyXG4gIGNvbnN0IHR3ZWV0czogVHdlZXRbXSA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChmZWVkUXVlcnkpXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0d2VldHMgfSlcclxufVxyXG4iXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwiZ3JvcSIsImZlZWRRdWVyeSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0d2VldHMiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTweets.ts\n");

/***/ }),

/***/ "(api)/./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n  dataset: \"production\" || 0,\n  projectId: \"i05u6o5t\",\n  apiVersion: '2021-10-21',\n  useCdn: false\n};\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBSU8sTUFBTUMsTUFBTSxHQUFHO0FBQ2xCQyxFQUFBQSxPQUFPLEVBQUVDLFlBQUEsSUFBMEMsQ0FEakM7QUFFbEJHLEVBQUFBLFNBQVMsRUFBRUgsVUFGTztBQUdsQkssRUFBQUEsVUFBVSxFQUFFLFlBSE07QUFJbEJDLEVBQUFBLE1BQU07QUFKWSxDQUFmO0FBT0UsTUFBTUMsWUFBWSxHQUFHVix5REFBWSxDQUFDQyxNQUFELENBQWpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2FuaXR5LmpzPzg1ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIGNyZWF0ZUNsaWVudCxcclxufSBmcm9tICduZXh0LXNhbml0eSdcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCAncHJvZHVjdGlvbicsXHJcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxyXG4gICAgYXBpVmVyc2lvbjogJzIwMjEtMTAtMjEnLCBcclxuICAgIHVzZUNkbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBjcmVhdGVDbGllbnQoY29uZmlnKSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwic2FuaXR5Q2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./sanity.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getTweets.ts"));
module.exports = __webpack_exports__;

})();