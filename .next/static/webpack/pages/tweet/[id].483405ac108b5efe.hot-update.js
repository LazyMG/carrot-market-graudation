"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[id]",{

/***/ "./pages/tweet/[id].tsx":
/*!******************************!*\
  !*** ./pages/tweet/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Detail = function() {\n    var ref, ref1, ref2;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref3 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(router.query.id ? \"/api/tweets/\".concat(router.query.id) : null), data = ref3.data, mutate = ref3.mutate;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[100vw] h-[100vh]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-[#1DA1F2] flex h-screen w-full items-center justify-around px-10 py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[40rem] w-[25rem] rounded-md shadow-2xl bg-[#FCFCFC]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-14 h-14 bg-slate-500 rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"font-bold text-lg\",\n                                            children: data === null || data === void 0 ? void 0 : (ref = data.tweet) === null || ref === void 0 ? void 0 : ref.user.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm text-slate-400\",\n                                            children: data === null || data === void 0 ? void 0 : (ref1 = data.tweet) === null || ref1 === void 0 ? void 0 : ref1.user.email\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-xl\",\n                                    children: data === null || data === void 0 ? void 0 : (ref2 = data.tweet) === null || ref2 === void 0 ? void 0 : ref2.text\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-xs text-slate-400\",\n                                    children: String(data === null || data === void 0 ? void 0 : data.tweet.createdAt)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Detail, \"vWR+zoTcPcFv0Pztqd6zJCr1vAc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUN3QztBQUNkO0FBQ0Q7O0FBV3pCLElBQU1HLE1BQU0sR0FBRyxXQUFNO1FBY0ZDLEdBQVcsRUFHWEEsSUFBVyxFQUtVQSxJQUFXOztJQXJCakQsSUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBQzFCLElBQXlCRSxJQUV4QixHQUZ3QkEsK0NBQU0sQ0FDN0JHLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxFQUFFLEdBQUcsY0FBYSxDQUFrQixPQUFoQkYsTUFBTSxDQUFDQyxLQUFLLENBQUNDLEVBQUUsQ0FBRSxHQUFHLElBQUksQ0FDMUQsRUFGT0gsSUFBSSxHQUFhRixJQUV4QixDQUZPRSxJQUFJLEVBQUVJLE1BQU0sR0FBS04sSUFFeEIsQ0FGYU0sTUFBTTtJQUdwQixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMscUJBQXFCO2tCQUNsQyw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsMkVBQTJFO3NCQUN4Riw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHdEQUF3RDswQkFDckUsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxLQUFLOztzQ0FDbEIsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyw2QkFBNkI7OzhDQUMxQyw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLHFDQUFxQzs7Ozs7eUNBQU87OENBQzNELDhEQUFDRCxLQUFHOztzREFDRiw4REFBQ0EsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLG1CQUFtQjtzREFDL0JOLElBQUksYUFBSkEsSUFBSSxXQUFPLEdBQVhBLEtBQUFBLENBQVcsR0FBWEEsQ0FBQUEsR0FBVyxHQUFYQSxJQUFJLENBQUVPLEtBQUssY0FBWFAsR0FBVyxjQUFYQSxLQUFBQSxDQUFXLEdBQVhBLEdBQVcsQ0FBRVEsSUFBSSxDQUFDQyxJQUFJOzs7OztpREFDbkI7c0RBQ04sOERBQUNKLEtBQUc7NENBQUNDLFNBQVMsRUFBQyx3QkFBd0I7c0RBQ3BDTixJQUFJLGFBQUpBLElBQUksV0FBTyxHQUFYQSxLQUFBQSxDQUFXLEdBQVhBLENBQUFBLElBQVcsR0FBWEEsSUFBSSxDQUFFTyxLQUFLLGNBQVhQLElBQVcsY0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxJQUFXLENBQUVRLElBQUksQ0FBQ0UsS0FBSzs7Ozs7aURBQ3BCOzs7Ozs7eUNBQ0Y7Ozs7OztpQ0FDRjtzQ0FDTiw4REFBQ0wsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLE1BQU07OzhDQUNuQiw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLFNBQVM7OENBQUVOLElBQUksYUFBSkEsSUFBSSxXQUFPLEdBQVhBLEtBQUFBLENBQVcsR0FBWEEsQ0FBQUEsSUFBVyxHQUFYQSxJQUFJLENBQUVPLEtBQUssY0FBWFAsSUFBVyxjQUFYQSxLQUFBQSxDQUFXLEdBQVhBLElBQVcsQ0FBRVcsSUFBSTs7Ozs7eUNBQU87OENBQ2xELDhEQUFDTixLQUFHO29DQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzhDQUNwQ00sTUFBTSxDQUFDWixJQUFJLGFBQUpBLElBQUksV0FBTyxHQUFYQSxLQUFBQSxDQUFXLEdBQVhBLElBQUksQ0FBRU8sS0FBSyxDQUFDTSxTQUFTLENBQUM7Ozs7O3lDQUMxQjs7Ozs7O2lDQUNGOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzs7OztpQkFDRjs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FoQ0tkLE1BQU07O1FBQ0tILGtEQUFTO1FBQ0NFLDJDQUFNOzs7QUFGM0JDLEtBQUFBLE1BQU07QUFrQ1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR3ZWV0LCBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuaW50ZXJmYWNlIFR3ZWV0V2l0aFVzZXIgZXh0ZW5kcyBUd2VldCB7XHJcbiAgdXNlcjogVXNlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFR3ZWV0RGV0YWlsIHtcclxuICBvazogYm9vbGVhbjtcclxuICB0d2VldDogVHdlZXRXaXRoVXNlcjtcclxufVxyXG5cclxuY29uc3QgRGV0YWlsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlIH0gPSB1c2VTV1I8VHdlZXREZXRhaWw+KFxyXG4gICAgcm91dGVyLnF1ZXJ5LmlkID8gYC9hcGkvdHdlZXRzLyR7cm91dGVyLnF1ZXJ5LmlkfWAgOiBudWxsXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxMDB2d10gaC1bMTAwdmhdXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxREExRjJdIGZsZXggaC1zY3JlZW4gdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCBweC0xMCBweS0yMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNDByZW1dIHctWzI1cmVtXSByb3VuZGVkLW1kIHNoYWRvdy0yeGwgYmctWyNGQ0ZDRkNdXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNCBoLTE0IGJnLXNsYXRlLTUwMCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YT8udHdlZXQ/LnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhPy50d2VldD8udXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+e2RhdGE/LnR3ZWV0Py50ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAge1N0cmluZyhkYXRhPy50d2VldC5jcmVhdGVkQXQpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVNXUiIsIkRldGFpbCIsImRhdGEiLCJyb3V0ZXIiLCJxdWVyeSIsImlkIiwibXV0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwidHdlZXQiLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwidGV4dCIsIlN0cmluZyIsImNyZWF0ZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});