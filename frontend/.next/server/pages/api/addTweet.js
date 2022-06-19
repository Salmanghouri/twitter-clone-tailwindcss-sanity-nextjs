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
exports.id = "pages/api/addTweet";
exports.ids = ["pages/api/addTweet"];
exports.modules = {

/***/ "(api)/./pages/api/addTweet.ts":
/*!*******************************!*\
  !*** ./pages/api/addTweet.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function handler(req, res) {\n  const data = JSON.parse(req.body); //2.54\n\n  const mutations = {\n    mutations: [{\n      create: {\n        _type: 'tweet',\n        text: data.text,\n        username: data.username,\n        blockTweet: false,\n        profileImg: data.profileImg,\n        image: data.image\n      }\n    }]\n  };\n  const apiEndpoint = `https://${\"i05u6o5t\"}.api.sanity.io/v2021-06-07/data/mutate/${\"production\"}`;\n  const result = await fetch(apiEndpoint, {\n    headers: {\n      'content-type': 'application/json',\n      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`\n    },\n    body: JSON.stringify(mutations),\n    method: 'POST'\n  });\n  const json = await result.json();\n  console.log(json);\n  res.status(200).json({\n    message: 'Added!'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkVHdlZXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBUWUsZUFBZUEsT0FBZixDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtBQUNFLFFBQU1DLElBQWUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEdBQUcsQ0FBQ0ssSUFBZixDQUF4QixDQURGLENBRUY7O0FBQ0ksUUFBTUMsU0FBUyxHQUFHO0FBQ2RBLElBQUFBLFNBQVMsRUFBRSxDQUNQO0FBQ0lDLE1BQUFBLE1BQU0sRUFBRTtBQUNKQyxRQUFBQSxLQUFLLEVBQUUsT0FESDtBQUVKQyxRQUFBQSxJQUFJLEVBQUVQLElBQUksQ0FBQ08sSUFGUDtBQUdKQyxRQUFBQSxRQUFRLEVBQUVSLElBQUksQ0FBQ1EsUUFIWDtBQUlKQyxRQUFBQSxVQUFVLEVBQUUsS0FKUjtBQUtKQyxRQUFBQSxVQUFVLEVBQUVWLElBQUksQ0FBQ1UsVUFMYjtBQU1KQyxRQUFBQSxLQUFLLEVBQUVYLElBQUksQ0FBQ1c7QUFOUjtBQURaLEtBRE87QUFERyxHQUFsQjtBQWdCQSxRQUFNQyxXQUFXLEdBQUksV0FBVUMsVUFBMEMsMENBQXlDQSxZQUF1QyxFQUF6SjtBQUNBLFFBQU1JLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQUNOLFdBQUQsRUFBYztBQUNwQ08sSUFBQUEsT0FBTyxFQUFDO0FBQ0osc0JBQWdCLGtCQURaO0FBRUpDLE1BQUFBLGFBQWEsRUFBRyxVQUFTUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU8sZ0JBQWlCO0FBRmxELEtBRDRCO0FBS3BDbEIsSUFBQUEsSUFBSSxFQUFFRixJQUFJLENBQUNxQixTQUFMLENBQWVsQixTQUFmLENBTDhCO0FBTXBDbUIsSUFBQUEsTUFBTSxFQUFFO0FBTjRCLEdBQWQsQ0FBMUI7QUFXQSxRQUFNQyxJQUFJLEdBQUcsTUFBTVAsTUFBTSxDQUFDTyxJQUFQLEVBQW5CO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBRUZ6QixFQUFBQSxHQUFHLENBQUM0QixNQUFKLENBQVcsR0FBWCxFQUFnQkgsSUFBaEIsQ0FBcUI7QUFBRUksSUFBQUEsT0FBTyxFQUFFO0FBQVgsR0FBckI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hZGRUd2VldC50cz8zNWJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IFR3ZWV0Qm9keSB9IGZyb20gJy4uLy4uL3R5cGluZ3MnXHJcblxyXG50eXBlIERhdGEgPSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4pIHtcclxuICAgIGNvbnN0IGRhdGE6IFR3ZWV0Qm9keSA9IEpTT04ucGFyc2UocmVxLmJvZHkpXHJcbi8vMi41NFxyXG4gICAgY29uc3QgbXV0YXRpb25zID0ge1xyXG4gICAgICAgIG11dGF0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBfdHlwZTogJ3R3ZWV0JyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBkYXRhLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUd2VldDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUltZzogZGF0YS5wcm9maWxlSW1nLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBkYXRhLmltYWdlLFxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcGlFbmRwb2ludCA9IGBodHRwczovLyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUR9LmFwaS5zYW5pdHkuaW8vdjIwMjEtMDYtMDcvZGF0YS9tdXRhdGUvJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVH1gXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChhcGlFbmRwb2ludCwge1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtdXRhdGlvbnMpLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuICAgIGNvbnNvbGUubG9nKGpzb24pXHJcbiAgXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnQWRkZWQhJyB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJtdXRhdGlvbnMiLCJjcmVhdGUiLCJfdHlwZSIsInRleHQiLCJ1c2VybmFtZSIsImJsb2NrVHdlZXQiLCJwcm9maWxlSW1nIiwiaW1hZ2UiLCJhcGlFbmRwb2ludCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicmVzdWx0IiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIlNBTklUWV9BUElfVE9LRU4iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addTweet.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addTweet.ts"));
module.exports = __webpack_exports__;

})();