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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Detail = function() {\n    var ref, ref1, ref2;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref3 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(router.query.id ? \"/api/tweets/\".concat(router.query.id) : null), data = ref3.data, mutate = ref3.mutate;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[100vw] h-[100vh]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-[#1DA1F2] flex h-screen w-full items-center justify-around px-10 py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[40rem] w-[25rem] rounded-md shadow-2xl bg-[#FCFCFC]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-14 h-14 bg-slate-500 rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"font-bold text-lg\",\n                                            children: data === null || data === void 0 ? void 0 : (ref = data.tweet) === null || ref === void 0 ? void 0 : ref.user.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm text-slate-400\",\n                                            children: data === null || data === void 0 ? void 0 : (ref1 = data.tweet) === null || ref1 === void 0 ? void 0 : ref1.user.email\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4 space-y-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-xl\",\n                                    children: data === null || data === void 0 ? void 0 : (ref2 = data.tweet) === null || ref2 === void 0 ? void 0 : ref2.text\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-xs text-slate-400\",\n                                    children: String(data === null || data === void 0 ? void 0 : data.tweet.createdAt)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex space-x-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        fill: \"none\",\n                                        stroke: \"currentColor\",\n                                        strokeWidth: 1,\n                                        viewBox: \"0 0 24 24\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        \"aria-hidden\": \"true\",\n                                        className: \"w-7 h-7\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            d: \"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        fill: \"none\",\n                                        stroke: \"currentColor\",\n                                        strokeWidth: 1,\n                                        viewBox: \"0 0 24 24\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        \"aria-hidden\": \"true\",\n                                        className: \"w-7 h-7\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            d: \"M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    fill: \"none\",\n                                    stroke: \"currentColor\",\n                                    strokeWidth: 1,\n                                    viewBox: \"0 0 24 24\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    \"aria-hidden\": \"true\",\n                                    className: \"w-7 h-7\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        d: \"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    fill: \"none\",\n                                    stroke: \"currentColor\",\n                                    strokeWidth: 1,\n                                    viewBox: \"0 0 24 24\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    \"aria-hidden\": \"true\",\n                                    className: \"w-7 h-7\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        d: \"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\tweet\\\\[id].tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Detail, \"vWR+zoTcPcFv0Pztqd6zJCr1vAc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0QkMsQ0FBQyxFQUFDLHdHQUF3Rzs7Ozs7NkNBQzFHOzs7Ozt5Q0FDRTs7Ozs7O2lDQUNGOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzs7OztpQkFDRjs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FuR0t6QixNQUFNOztRQUNLSCxrREFBUztRQUNDRSwyQ0FBTTs7O0FBRjNCQyxLQUFBQSxNQUFNO0FBcUdaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHdlZXQvW2lkXS50c3g/ZjNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUd2VldCwgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmludGVyZmFjZSBUd2VldFdpdGhVc2VyIGV4dGVuZHMgVHdlZXQge1xyXG4gIHVzZXI6IFVzZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUd2VldERldGFpbCB7XHJcbiAgb2s6IGJvb2xlYW47XHJcbiAgdHdlZXQ6IFR3ZWV0V2l0aFVzZXI7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGRhdGEsIG11dGF0ZSB9ID0gdXNlU1dSPFR3ZWV0RGV0YWlsPihcclxuICAgIHJvdXRlci5xdWVyeS5pZCA/IGAvYXBpL3R3ZWV0cy8ke3JvdXRlci5xdWVyeS5pZH1gIDogbnVsbFxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTAwdnddIGgtWzEwMHZoXVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMURBMUYyXSBmbGV4IGgtc2NyZWVuIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmQgcHgtMTAgcHktMjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzQwcmVtXSB3LVsyNXJlbV0gcm91bmRlZC1tZCBzaGFkb3ctMnhsIGJnLVsjRkNGQ0ZDXVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTQgaC0xNCBiZy1zbGF0ZS01MDAgcm91bmRlZC1mdWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGE/LnR3ZWV0Py51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YT8udHdlZXQ/LnVzZXIuZW1haWx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBzcGFjZS15LTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj57ZGF0YT8udHdlZXQ/LnRleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICB7U3RyaW5nKGRhdGE/LnR3ZWV0LmNyZWF0ZWRBdCl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0xNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezF9XHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy03IGgtN1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIuMjUgMTIuNzZjMCAxLjYgMS4xMjMgMi45OTQgMi43MDcgMy4yMjcgMS4wNjguMTU3IDIuMTQ4LjI3OSAzLjIzOC4zNjQuNDY2LjAzNy44OTMuMjgxIDEuMTUzLjY3MUwxMiAyMWwyLjY1Mi0zLjk3OGMuMjYtLjM5LjY4Ny0uNjM0IDEuMTUzLS42NyAxLjA5LS4wODYgMi4xNy0uMjA4IDMuMjM4LS4zNjUgMS41ODQtLjIzMyAyLjcwNy0xLjYyNiAyLjcwNy0zLjIyOFY2Ljc0MWMwLTEuNjAyLTEuMTIzLTIuOTk1LTIuNzA3LTMuMjI4QTQ4LjM5NCA0OC4zOTQgMCAwMDEyIDNjLTIuMzkyIDAtNC43NDQuMTc1LTcuMDQzLjUxM0MzLjM3MyAzLjc0NiAyLjI1IDUuMTQgMi4yNSA2Ljc0MXY2LjAxOHpcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MX1cclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgaC03XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTkuNSAxMmMwLTEuMjMyLS4wNDYtMi40NTMtLjEzOC0zLjY2MmE0LjAwNiA0LjAwNiAwIDAwLTMuNy0zLjcgNDguNjc4IDQ4LjY3OCAwIDAwLTcuMzI0IDAgNC4wMDYgNC4wMDYgMCAwMC0zLjcgMy43Yy0uMDE3LjIyLS4wMzIuNDQxLS4wNDYuNjYyTTE5LjUgMTJsMy0zbS0zIDNsLTMtM20tMTIgM2MwIDEuMjMyLjA0NiAyLjQ1My4xMzggMy42NjJhNC4wMDYgNC4wMDYgMCAwMDMuNyAzLjcgNDguNjU2IDQ4LjY1NiAwIDAwNy4zMjQgMCA0LjAwNiA0LjAwNiAwIDAwMy43LTMuN2MuMDE3LS4yMi4wMzItLjQ0MS4wNDYtLjY2Mk00LjUgMTJsMyAzbS0zLTNsLTMgM1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxfVxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgaC03XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0yMSA4LjI1YzAtMi40ODUtMi4wOTktNC41LTQuNjg4LTQuNS0xLjkzNSAwLTMuNTk3IDEuMTI2LTQuMzEyIDIuNzMzLS43MTUtMS42MDctMi4zNzctMi43MzMtNC4zMTMtMi43MzNDNS4xIDMuNzUgMyA1Ljc2NSAzIDguMjVjMCA3LjIyIDkgMTIgOSAxMnM5LTQuNzggOS0xMnpcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezF9XHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNyBoLTdcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTMgMTYuNXYyLjI1QTIuMjUgMi4yNSAwIDAwNS4yNSAyMWgxMy41QTIuMjUgMi4yNSAwIDAwMjEgMTguNzVWMTYuNW0tMTMuNS05TDEyIDNtMCAwbDQuNSA0LjVNMTIgM3YxMy41XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU1dSIiwiRGV0YWlsIiwiZGF0YSIsInJvdXRlciIsInF1ZXJ5IiwiaWQiLCJtdXRhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0d2VldCIsInVzZXIiLCJuYW1lIiwiZW1haWwiLCJ0ZXh0IiwiU3RyaW5nIiwiY3JlYXRlZEF0Iiwic3ZnIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwidmlld0JveCIsInhtbG5zIiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});