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
exports.id = "pages/create-account";
exports.ids = ["pages/create-account"];
exports.modules = {

/***/ "./pages/create-account.tsx":
/*!**********************************!*\
  !*** ./pages/create-account.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const onValid = async (data)=>{\n        if (!loading) {\n            setLoading(true);\n            const request = await fetch(\"/api/users/create-account\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            });\n            if (request.status === 200) {\n                alert(\"Account already exists! Please log in!\");\n            }\n            if (request.status === 201) {\n                alert(\"Account created! Please log in!\");\n            }\n            if (request.status !== 405) {\n                router.push(\"/login\");\n            }\n            setLoading(false);\n        }\n    };\n    const gotoLogin = ()=>{\n        router.push(\"/log-in\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[100vw] h-[100vh]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-[#1DA1F2] flex h-screen w-full items-center justify-around px-10 py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[40rem] w-[25rem] rounded-md shadow-2xl bg-[#FCFCFC]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center font-bold text-2xl\",\n                            children: \"Create Account\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \" space-y-4\",\n                                    onSubmit: handleSubmit(onValid),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"space-x-2 flex justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"border-b focus:border-[#1DA1F2] focus:outline-none\",\n                                                    placeholder: \"Write your name please.\",\n                                                    type: \"text\",\n                                                    ...register(\"name\", {\n                                                        required: \"Write your name please.\"\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: errors?.name?.message\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"space-x-2 flex justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"border-b focus:border-[#1DA1F2] focus:outline-none\",\n                                                    type: \"email\",\n                                                    ...register(\"email\", {\n                                                        required: \"Write your email please.\"\n                                                    }),\n                                                    placeholder: \"Write your email please.\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: errors?.email?.message\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"rounded-xl px-4 py-1 cursor-pointer text-white \" + \"bg-[#1DA1F2] hover:bg-blue-500\",\n                                                children: \"Create Account\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-2 text-center text-lg\",\n                                            children: \"If you already have an account\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-2 flex justify-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: gotoLogin,\n                                                className: \"rounded-xl px-4 py-1 cursor-pointer text-white \" + \"bg-[#1DA1F2] hover:bg-blue-500\",\n                                                children: \"Login\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LMG\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint-forked\\\\pages\\\\create-account.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkYsV0FBVyxFQUFDLDBCQUEwQjs7Ozs7NkRBQ3RDOzhEQUNGLDhEQUFDRyxNQUFJOzhEQUFFekIsTUFBTSxFQUFFNEIsS0FBSyxFQUFFRCxPQUFPOzs7Ozs2REFBUTs7Ozs7O3FEQUNqQztzREFDTiw4REFBQ1YsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLHFCQUFxQjtzREFDbEMsNEVBQUNXLFFBQU07Z0RBQ0xYLFNBQVMsRUFDUCxpREFBaUQsR0FDakQsZ0NBQWdDOzBEQUVuQyxnQkFFRDs7Ozs7eURBQVM7Ozs7O3FEQUNMOzs7Ozs7NkNBQ0Q7OENBRVAsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxNQUFNOztzREFDbkIsOERBQUNZLElBQUU7Ozs7cURBQUc7c0RBQ04sOERBQUNiLEtBQUc7NENBQUNDLFNBQVMsRUFBQywwQkFBMEI7c0RBQUMsZ0NBRTFDOzs7OztxREFBTTtzREFDTiw4REFBQ0QsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLDBCQUEwQjtzREFDdkMsNEVBQUNXLFFBQU07Z0RBQ0xFLE9BQU8sRUFBRWYsU0FBUztnREFDbEJFLFNBQVMsRUFDUCxpREFBaUQsR0FDakQsZ0NBQWdDOzBEQUVuQyxPQUVEOzs7Ozt5REFBUzs7Ozs7cURBQ0w7Ozs7Ozs2Q0FDRjs7Ozs7O3FDQUNGOzs7Ozs7NkJBQ0Y7Ozs7O3lCQUNGOzs7OztxQkFDRjs7Ozs7aUJBQ0YsQ0FDTjtDQUNILEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvY3JlYXRlLWFjY291bnQudHN4PzQ1MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuaW50ZXJmYWNlIElGb3JtIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxyXG4gIH0gPSB1c2VGb3JtPElGb3JtPigpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBvblZhbGlkID0gYXN5bmMgKGRhdGE6IElGb3JtKSA9PiB7XHJcbiAgICBpZiAoIWxvYWRpbmcpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2Vycy9jcmVhdGUtYWNjb3VudFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBhbGVydChcIkFjY291bnQgYWxyZWFkeSBleGlzdHMhIFBsZWFzZSBsb2cgaW4hXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgYWxlcnQoXCJBY2NvdW50IGNyZWF0ZWQhIFBsZWFzZSBsb2cgaW4hXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gNDA1KSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ290b0xvZ2luID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvbG9nLWluXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTAwdnddIGgtWzEwMHZoXVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMURBMUYyXSBmbGV4IGgtc2NyZWVuIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmQgcHgtMTAgcHktMjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzQwcmVtXSB3LVsyNXJlbV0gcm91bmRlZC1tZCBzaGFkb3ctMnhsIGJnLVsjRkNGQ0ZDXVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC0yeGxcIj5DcmVhdGUgQWNjb3VudDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCIgc3BhY2UteS00XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblZhbGlkKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtMiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iIGZvY3VzOmJvcmRlci1bIzFEQTFGMl0gZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgbmFtZSBwbGVhc2UuXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwibmFtZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJXcml0ZSB5b3VyIG5hbWUgcGxlYXNlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXJyb3JzPy5uYW1lPy5tZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYiBmb2N1czpib3JkZXItWyMxREExRjJdIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJXcml0ZSB5b3VyIGVtYWlsIHBsZWFzZS5cIixcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgZW1haWwgcGxlYXNlLlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntlcnJvcnM/LmVtYWlsPy5tZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3VuZGVkLXhsIHB4LTQgcHktMSBjdXJzb3ItcG9pbnRlciB0ZXh0LXdoaXRlIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiYmctWyMxREExRjJdIGhvdmVyOmJnLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgQWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWNlbnRlciB0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgIElmIHlvdSBhbHJlYWR5IGhhdmUgYW4gYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Z290b0xvZ2lufVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdW5kZWQteGwgcHgtNCBweS0xIGN1cnNvci1wb2ludGVyIHRleHQtd2hpdGUgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJiZy1bIzFEQTFGMl0gaG92ZXI6YmctYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsIm9uVmFsaWQiLCJkYXRhIiwicmVxdWVzdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiYWxlcnQiLCJwdXNoIiwiZ290b0xvZ2luIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJyZXF1aXJlZCIsInNwYW4iLCJuYW1lIiwibWVzc2FnZSIsImVtYWlsIiwiYnV0dG9uIiwiaHIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/create-account.tsx"));
module.exports = __webpack_exports__;

})();