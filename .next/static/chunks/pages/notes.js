/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/notes"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshaan%2FDesktop%2FProgramming%2FWebsites%2Fcs-igcse%2Fpages%2Fnotes.js&page=%2Fnotes!":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshaan%2FDesktop%2FProgramming%2FWebsites%2Fcs-igcse%2Fpages%2Fnotes.js&page=%2Fnotes! ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/notes\",\n      function () {\n        return __webpack_require__(/*! ./pages/notes.js */ \"./pages/notes.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/notes\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRnNoYWFuJTJGRGVza3RvcCUyRlByb2dyYW1taW5nJTJGV2Vic2l0ZXMlMkZjcy1pZ2NzZSUyRnBhZ2VzJTJGbm90ZXMuanMmcGFnZT0lMkZub3RlcyEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDekM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzJlMjgiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9ub3Rlc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvbm90ZXMuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL25vdGVzXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshaan%2FDesktop%2FProgramming%2FWebsites%2Fcs-igcse%2Fpages%2Fnotes.js&page=%2Fnotes!\n"));

/***/ }),

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 0\n    },\n    enter: {\n        opacity: 1,\n        x: 0\n    },\n    exit: {\n        opacity: 1,\n        x: 30\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_node_modules_framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.5,\n            type: \"easeInOut\"\n        },\n        style: {\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            title,\n                            \" - Shaan Dussoye\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shaan/Desktop/Programming/Websites/cs-igcse/components/layouts/article.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/shaan/Desktop/Programming/Websites/cs-igcse/components/layouts/article.js\",\n                    lineNumber: 14,\n                    columnNumber: 21\n                }, _this),\n                children\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/shaan/Desktop/Programming/Websites/cs-igcse/components/layouts/article.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBeUQ7QUFDN0I7QUFFNUIsSUFBTUUsUUFBUSxHQUFHO0lBQ2JDLE1BQU0sRUFBRTtRQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztLQUFFO0lBQzNCQyxLQUFLLEVBQUU7UUFBRUYsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7S0FBQztJQUMxQkUsSUFBSSxFQUFFO1FBQUVILE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxFQUFFO0tBQUM7Q0FDN0I7QUFFRCxJQUFNRyxNQUFNLEdBQUc7UUFBR0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEtBQUssU0FBTEEsS0FBSzt5QkFDN0IsOERBQUNWLHVFQUFjO1FBQ2ZZLE9BQU8sRUFBRyxRQUFRO1FBQUNDLE9BQU8sRUFBRyxPQUFPO1FBQUNOLElBQUksRUFBRyxNQUFNO1FBQUNMLFFBQVEsRUFBSUEsUUFBUTtRQUFFWSxVQUFVLEVBQUk7WUFBQ0MsUUFBUSxFQUFFLEdBQUc7WUFBRUMsSUFBSSxFQUFFLFdBQVc7U0FBQztRQUFFQyxLQUFLLEVBQUk7WUFBQ0MsUUFBUSxFQUFFLFVBQVU7U0FBQztrQkFDMUo7O2dCQUNLUixLQUFLLGtCQUFNLDhEQUFDVCxrREFBSTs4QkFDakIsNEVBQUNTLE9BQUs7OzRCQUFFQSxLQUFLOzRCQUFDLGtCQUFnQjs7Ozs7OzZCQUFROzs7Ozt5QkFBTztnQkFDNUNELFFBQVE7O3dCQUNWOzs7OzthQUNjO0NBQ3BCO0FBVEtELEtBQUFBLE1BQU07QUFXWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcz9lZjc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7b3BhY2l0eTogMCwgeDogMCB9LFxuICAgIGVudGVyOiB7IG9wYWNpdHk6IDEsIHg6IDB9LFxuICAgIGV4aXQ6IHsgb3BhY2l0eTogMSwgeDogMzB9XG59XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiAgKFxuICAgIDxtb3Rpb24uYXJ0aWNsZVxuICAgIGluaXRpYWwgPSBcImhpZGRlblwiIGFuaW1hdGUgPSBcImVudGVyXCIgZXhpdCA9IFwiZXhpdFwiIHZhcmlhbnRzID0ge3ZhcmlhbnRzfSB0cmFuc2l0aW9uID0ge3tkdXJhdGlvbjogMC41LCB0eXBlOiBcImVhc2VJbk91dFwifX0gc3R5bGUgPSB7e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCJ9fT5cbiAgICA8PlxuICAgICAgICB7dGl0bGUgJiYgKCA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX0gLSBTaGFhbiBEdXNzb3llPC90aXRsZT48L0hlYWQ+KX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvPlxuICAgIDwvbW90aW9uLmFydGljbGU+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdLCJuYW1lcyI6WyJtb3Rpb24iLCJIZWFkIiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieCIsImVudGVyIiwiZXhpdCIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJhcnRpY2xlIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0eXBlIiwic3R5bGUiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n"));

/***/ }),

/***/ "./components/layouts/section.js":
/*!***************************************!*\
  !*** ./components/layouts/section.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\nvar _this = undefined;\n\n\n\nvar StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n    shouldForwardProp: function(prop) {\n        return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.shouldForwardProp)(prop) || prop === \"transition\";\n    }\n});\n_c = StyledDiv;\nvar Section = function(param) {\n    var children = param.children, _delay = param.delay, delay = _delay === void 0 ? 0 : _delay;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv, {\n        initial: {\n            x: -250,\n            opacity: 0\n        },\n        animate: {\n            x: 0,\n            opacity: 1\n        },\n        transition: {\n            duration: 0.8,\n            delay: delay\n        },\n        mb: 6,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/shaan/Desktop/Programming/Websites/cs-igcse/components/layouts/section.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Section;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledDiv\");\n$RefreshReg$(_c1, \"Section\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvc2VjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFvQztBQUNzQjtBQUUxRCxJQUFNRyxTQUFTLEdBQUdGLHdEQUFNLENBQUNELHFEQUFVLEVBQUU7SUFDakNFLGlCQUFpQixFQUFFRyxTQUFBQSxJQUFJLEVBQUk7UUFDdkIsT0FBT0gsbUVBQWlCLENBQUNHLElBQUksQ0FBQyxJQUFJQSxJQUFJLEtBQUssWUFBWTtLQUMxRDtDQUNKLENBQUM7QUFKSUYsS0FBQUEsU0FBUztBQU1mLElBQU1HLE9BQU8sR0FBRztRQUFFQyxRQUFRLFNBQVJBLFFBQVEsaUJBQUVDLEtBQUssRUFBTEEsS0FBSyx1QkFBRyxDQUFDO3lCQUNqQyw4REFBQ0wsU0FBUztRQUNWTSxPQUFPLEVBQUk7WUFBQ0MsQ0FBQyxFQUFFLENBQUMsR0FBRztZQUFFQyxPQUFPLEVBQUUsQ0FBQztTQUFDO1FBQ2hDQyxPQUFPLEVBQUk7WUFBQ0YsQ0FBQyxFQUFDLENBQUM7WUFBRUMsT0FBTyxFQUFFLENBQUM7U0FBQztRQUM1QkUsVUFBVSxFQUFJO1lBQUNDLFFBQVEsRUFBRSxHQUFHO1lBQUVOLEtBQUssRUFBTEEsS0FBSztTQUFDO1FBQ3BDTyxFQUFFLEVBQUksQ0FBQztrQkFDTlIsUUFBUTs7Ozs7YUFDRztDQUNmO0FBUktELE1BQUFBLE9BQU87QUFVYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvc2VjdGlvbi5qcz9mNzExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQge2NoYWtyYSwgc2hvdWxkRm9yd2FyZFByb3B9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcblxuY29uc3QgU3R5bGVkRGl2ID0gY2hha3JhKG1vdGlvbi5kaXYsIHtcbiAgICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiB7XG4gICAgICAgIHJldHVybiBzaG91bGRGb3J3YXJkUHJvcChwcm9wKSB8fCBwcm9wID09PSBcInRyYW5zaXRpb25cIlxuICAgIH1cbn0pXG5cbmNvbnN0IFNlY3Rpb24gPSAoe2NoaWxkcmVuLCBkZWxheSA9IDB9KSA9PiAoXG4gICAgPFN0eWxlZERpdlxuICAgIGluaXRpYWwgPSB7e3g6IC0yNTAsIG9wYWNpdHk6IDB9fVxuICAgIGFuaW1hdGUgPSB7e3g6MCwgb3BhY2l0eTogMX19XG4gICAgdHJhbnNpdGlvbiA9IHt7ZHVyYXRpb246IDAuOCwgZGVsYXl9fVxuICAgIG1iID0gezZ9PlxuICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0eWxlZERpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJjaGFrcmEiLCJzaG91bGRGb3J3YXJkUHJvcCIsIlN0eWxlZERpdiIsImRpdiIsInByb3AiLCJTZWN0aW9uIiwiY2hpbGRyZW4iLCJkZWxheSIsImluaXRpYWwiLCJ4Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/section.js\n"));

/***/ }),

/***/ "./pages/notes.js":
/*!************************!*\
  !*** ./pages/notes.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var _components_layouts_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/section */ \"./components/layouts/section.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Notes = function() {\n    _s();\n    var textColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#1B1725\", \"#B9D8C2\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            maxW: \"container.lg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                delay: 0.1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    mt: 20,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                            as: \"h2\",\n                            variant: \"page-title\",\n                            fontWeight: \"normal\",\n                            color: textColor,\n                            children: \"Under Construction\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shaan/Desktop/Programming/Websites/cs-igcse/pages/notes.js\",\n                            lineNumber: 12,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            px: 10,\n                            mt: 8,\n                            fontFamily: \"Hibana\",\n                            fontSize: 23,\n                            children: \"The Notes section is still under construction and should be ready by 29/08/22. Please be patient until then.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shaan/Desktop/Programming/Websites/cs-igcse/pages/notes.js\",\n                            lineNumber: 15,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shaan/Desktop/Programming/Websites/cs-igcse/pages/notes.js\",\n                    lineNumber: 11,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/shaan/Desktop/Programming/Websites/cs-igcse/pages/notes.js\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/shaan/Desktop/Programming/Websites/cs-igcse/pages/notes.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/shaan/Desktop/Programming/Websites/cs-igcse/pages/notes.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, _this);\n};\n_s(Notes, \"3KqkYWrkKiXcCkY0R1m4+MhT+L8=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = Notes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notes);\nvar _c;\n$RefreshReg$(_c, \"Notes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3Rlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7O0FBQTZFO0FBQzNCO0FBQ0M7QUFFbkQsSUFBTU0sS0FBSyxHQUFHLFdBQU07O0lBQ2hCLElBQU1DLFNBQVMsR0FBR0osbUVBQWlCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQztJQUN6RCxxQkFDSSw4REFBQ0MsbUVBQU07a0JBQ0gsNEVBQUNKLHVEQUFTO1lBQUNRLElBQUksRUFBRyxjQUFjO3NCQUM1Qiw0RUFBQ0gsbUVBQU87Z0JBQUNJLEtBQUssRUFBSSxHQUFHOzBCQUNqQiw0RUFBQ1IsaURBQUc7b0JBQUNTLEVBQUUsRUFBSSxFQUFFOztzQ0FDVCw4REFBQ1IscURBQU87NEJBQUNTLEVBQUUsRUFBRyxJQUFJOzRCQUFDQyxPQUFPLEVBQUcsWUFBWTs0QkFBQ0MsVUFBVSxFQUFHLFFBQVE7NEJBQUNDLEtBQUssRUFBSVAsU0FBUztzQ0FBRSxvQkFFcEY7Ozs7O2lDQUFVO3NDQUNWLDhEQUFDTixpREFBRzs0QkFBRWMsRUFBRSxFQUFJLEVBQUU7NEJBQUVMLEVBQUUsRUFBSSxDQUFDOzRCQUFFTSxVQUFVLEVBQUcsUUFBUTs0QkFBQ0MsUUFBUSxFQUFJLEVBQUU7c0NBQUUsOEdBRS9EOzs7OztpQ0FBTTs7Ozs7O3lCQUNKOzs7OztxQkFDQTs7Ozs7aUJBQ0Y7Ozs7O2FBQ1AsQ0FDWjtDQUNKO0dBbEJLWCxLQUFLOztRQUNXSCwrREFBaUI7OztBQURqQ0csS0FBQUEsS0FBSztBQW9CWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ub3Rlcy5qcz85ZDE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlXCJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvc2VjdGlvblwiXG5cbmNvbnN0IE5vdGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRleHRDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzFCMTcyNVwiLCBcIiNCOUQ4QzJcIilcbiAgICByZXR1cm4oXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFcgPSBcImNvbnRhaW5lci5sZ1wiPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uIGRlbGF5ID0gezAuMX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbXQgPSB7MjB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXMgPSBcImgyXCIgdmFyaWFudCA9IFwicGFnZS10aXRsZVwiIGZvbnRXZWlnaHQgPSBcIm5vcm1hbFwiIGNvbG9yID0ge3RleHRDb2xvcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5kZXIgQ29uc3RydWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94ICBweCA9IHsxMH0gbXQgPSB7OH0gZm9udEZhbWlseSA9IFwiSGliYW5hXCIgZm9udFNpemUgPSB7MjN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBOb3RlcyBzZWN0aW9uIGlzIHN0aWxsIHVuZGVyIGNvbnN0cnVjdGlvbiBhbmQgc2hvdWxkIGJlIHJlYWR5IGJ5IDI5LzA4LzIyLiBQbGVhc2UgYmUgcGF0aWVudCB1bnRpbCB0aGVuLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIkJveCIsIkhlYWRpbmciLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkxheW91dCIsIlNlY3Rpb24iLCJOb3RlcyIsInRleHRDb2xvciIsIm1heFciLCJkZWxheSIsIm10IiwiYXMiLCJ2YXJpYW50IiwiZm9udFdlaWdodCIsImNvbG9yIiwicHgiLCJmb250RmFtaWx5IiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/notes.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fshaan%2FDesktop%2FProgramming%2FWebsites%2Fcs-igcse%2Fpages%2Fnotes.js&page=%2Fnotes!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);