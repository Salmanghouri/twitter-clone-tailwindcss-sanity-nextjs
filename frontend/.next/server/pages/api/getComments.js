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
exports.id = "pages/api/getComments";
exports.ids = ["pages/api/getComments"];
exports.modules = {

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "(api)/./pages/api/getComments.ts":
/*!**********************************!*\
  !*** ./pages/api/getComments.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nconst commentQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\n*[_type == \"comment\" && references(*[_type== 'tweet' && _id== $tweetId]._id)] {\n    _id,\n    ...\n  } | order(_createdAt desc)\n  \n`;\nasync function handler(req, res) {\n  const {\n    tweetId\n  } = req.query;\n  const comments = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(commentQuery, {\n    tweetId\n  });\n  res.status(200).json(comments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29tbWVudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUlBLE1BQU1FLFlBQVksR0FBR0YsNkNBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTkE7QUFXZSxlQUFlRyxPQUFmLENBQ2JDLEdBRGEsRUFFYkMsR0FGYSxFQUdiO0FBRUQsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWNGLEdBQUcsQ0FBQ0csS0FBeEI7QUFFQSxRQUFNQyxRQUFtQixHQUFHLE1BQU1QLHVEQUFBLENBQW1CQyxZQUFuQixFQUFpQztBQUMvREksSUFBQUE7QUFEK0QsR0FBakMsQ0FBbEM7QUFJQ0QsRUFBQUEsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJILFFBQXJCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0Q29tbWVudHMudHM/MTc4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBncm9xIH0gZnJvbSAnbmV4dC1zYW5pdHknXHJcbmltcG9ydCB7IHNhbml0eUNsaWVudCB9IGZyb20gJy4uLy4uL3Nhbml0eSc7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi8uLi90eXBpbmdzJ1xyXG5cclxuXHJcbmNvbnN0IGNvbW1lbnRRdWVyeSA9IGdyb3FgXHJcbipbX3R5cGUgPT0gXCJjb21tZW50XCIgJiYgcmVmZXJlbmNlcygqW190eXBlPT0gJ3R3ZWV0JyAmJiBfaWQ9PSAkdHdlZXRJZF0uX2lkKV0ge1xyXG4gICAgX2lkLFxyXG4gICAgLi4uXHJcbiAgfSB8IG9yZGVyKF9jcmVhdGVkQXQgZGVzYylcclxuICBcclxuYFxyXG5cclxudHlwZSBEYXRhID0gQ29tbWVudFtdO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4pIHtcclxuXHJcbiBjb25zdCB7IHR3ZWV0SWQgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiBjb25zdCBjb21tZW50czogQ29tbWVudFtdID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKGNvbW1lbnRRdWVyeSwge1xyXG4gICAgIHR3ZWV0SWQsXHJcbiB9KVxyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihjb21tZW50cylcclxufVxyXG4iXSwibmFtZXMiOlsiZ3JvcSIsInNhbml0eUNsaWVudCIsImNvbW1lbnRRdWVyeSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0d2VldElkIiwicXVlcnkiLCJjb21tZW50cyIsImZldGNoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getComments.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getComments.ts"));
module.exports = __webpack_exports__;

})();