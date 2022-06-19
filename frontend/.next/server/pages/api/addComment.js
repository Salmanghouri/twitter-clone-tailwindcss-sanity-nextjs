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
exports.id = "pages/api/addComment";
exports.ids = ["pages/api/addComment"];
exports.modules = {

/***/ "(api)/./pages/api/addComment.ts":
/*!*********************************!*\
  !*** ./pages/api/addComment.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function handler(req, res) {\n  const comment = JSON.parse(req.body);\n  const mutations = {\n    mutations: [{\n      create: {\n        _type: 'comment',\n        comment: comment.comment,\n        username: comment.username,\n        profileImg: comment.profileImg,\n        tweet: {\n          _type: 'reference',\n          _ref: comment.tweetId\n        }\n      }\n    }]\n  };\n  const result = await fetch(`https://${\"i05u6o5t\"}.api.sanity.io/v2021-06-07/data/mutate/${\"production\"}`, {\n    headers: {\n      'content-type': 'application/json',\n      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`\n    },\n    body: JSON.stringify(mutations),\n    method: 'POST'\n  });\n  const json = await result.json();\n  console.log(json);\n  res.status(200).json({\n    message: 'Done!'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkQ29tbWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFRZSxlQUFlQSxPQUFmLENBQ2JDLEdBRGEsRUFFYkMsR0FGYSxFQUdiO0FBQ0EsUUFBTUMsT0FBb0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEdBQUcsQ0FBQ0ssSUFBZixDQUE3QjtBQUVBLFFBQU1DLFNBQVMsR0FBRztBQUNoQkEsSUFBQUEsU0FBUyxFQUFFLENBQ1Q7QUFDRUMsTUFBQUEsTUFBTSxFQUFFO0FBQ05DLFFBQUFBLEtBQUssRUFBRSxTQUREO0FBRU5OLFFBQUFBLE9BQU8sRUFBRUEsT0FBTyxDQUFDQSxPQUZYO0FBR05PLFFBQUFBLFFBQVEsRUFBRVAsT0FBTyxDQUFDTyxRQUhaO0FBSU5DLFFBQUFBLFVBQVUsRUFBRVIsT0FBTyxDQUFDUSxVQUpkO0FBS05DLFFBQUFBLEtBQUssRUFBRTtBQUNMSCxVQUFBQSxLQUFLLEVBQUUsV0FERjtBQUVMSSxVQUFBQSxJQUFJLEVBQUVWLE9BQU8sQ0FBQ1c7QUFGVDtBQUxEO0FBRFYsS0FEUztBQURLLEdBQWxCO0FBaUJBLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQ3ZCLFdBQVVDLFVBQTBDLDBDQUF5Q0EsWUFBdUMsRUFEN0csRUFFeEI7QUFDRUksSUFBQUEsT0FBTyxFQUFFO0FBQ1Asc0JBQWdCLGtCQURUO0FBRVBDLE1BQUFBLGFBQWEsRUFBRyxVQUFTTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssZ0JBQWlCO0FBRi9DLEtBRFg7QUFLRWpCLElBQUFBLElBQUksRUFBRUYsSUFBSSxDQUFDb0IsU0FBTCxDQUFlakIsU0FBZixDQUxSO0FBTUVrQixJQUFBQSxNQUFNLEVBQUU7QUFOVixHQUZ3QixDQUExQjtBQVlBLFFBQU1DLElBQUksR0FBRyxNQUFNWCxNQUFNLENBQUNXLElBQVAsRUFBbkI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFFQXhCLEVBQUFBLEdBQUcsQ0FBQzJCLE1BQUosQ0FBVyxHQUFYLEVBQWdCSCxJQUFoQixDQUFxQjtBQUFFSSxJQUFBQSxPQUFPLEVBQUU7QUFBWCxHQUFyQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2FkZENvbW1lbnQudHM/ZWQ1NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBDb21tZW50Qm9keSB9IGZyb20gJy4uLy4uL3R5cGluZ3MnXHJcblxyXG50eXBlIERhdGEgPSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4pIHtcclxuICBjb25zdCBjb21tZW50OiBDb21tZW50Qm9keSA9IEpTT04ucGFyc2UocmVxLmJvZHkpXHJcblxyXG4gIGNvbnN0IG11dGF0aW9ucyA9IHtcclxuICAgIG11dGF0aW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY3JlYXRlOiB7XHJcbiAgICAgICAgICBfdHlwZTogJ2NvbW1lbnQnLFxyXG4gICAgICAgICAgY29tbWVudDogY29tbWVudC5jb21tZW50LFxyXG4gICAgICAgICAgdXNlcm5hbWU6IGNvbW1lbnQudXNlcm5hbWUsXHJcbiAgICAgICAgICBwcm9maWxlSW1nOiBjb21tZW50LnByb2ZpbGVJbWcsXHJcbiAgICAgICAgICB0d2VldDoge1xyXG4gICAgICAgICAgICBfdHlwZTogJ3JlZmVyZW5jZScsXHJcbiAgICAgICAgICAgIF9yZWY6IGNvbW1lbnQudHdlZXRJZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfVxyXG5cclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovLyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUR9LmFwaS5zYW5pdHkuaW8vdjIwMjEtMDYtMDcvZGF0YS9tdXRhdGUvJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTn1gLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtdXRhdGlvbnMpLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIH1cclxuICApXHJcblxyXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXN1bHQuanNvbigpXHJcbiAgY29uc29sZS5sb2coanNvbilcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnRG9uZSEnIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb21tZW50IiwiSlNPTiIsInBhcnNlIiwiYm9keSIsIm11dGF0aW9ucyIsImNyZWF0ZSIsIl90eXBlIiwidXNlcm5hbWUiLCJwcm9maWxlSW1nIiwidHdlZXQiLCJfcmVmIiwidHdlZXRJZCIsInJlc3VsdCIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIlNBTklUWV9BUElfVE9LRU4iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addComment.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addComment.ts"));
module.exports = __webpack_exports__;

})();