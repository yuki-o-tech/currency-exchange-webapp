"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/BaseScreen/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/BaseScreen/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst BaseScreen = (param)=>{\n    let { selectedCurrencyFrom, selectedCurrencyTo, handleCurrencyFromChange, handleCurrencyToChange, handleAmountChange, amount, availableCurrencies, rate } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Currency Exchanger\"\n            }, void 0, false, {\n                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"From:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: selectedCurrencyFrom,\n                        onChange: handleCurrencyFromChange,\n                        children: availableCurrencies.map((currency)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: currency,\n                                children: currency\n                            }, currency, false, {\n                                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Amount:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: amount,\n                        onChange: handleAmountChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"To:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: selectedCurrencyTo,\n                        onChange: handleCurrencyToChange,\n                        children: availableCurrencies.map((currency)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: currency,\n                                children: currency\n                            }, currency, false, {\n                                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    amount,\n                    \" \",\n                    selectedCurrencyFrom,\n                    \" is approximately \",\n                    amount * rate,\n                    \" \",\n                    selectedCurrencyTo,\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BaseScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseScreen);\nvar _c;\n$RefreshReg$(_c, \"BaseScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CYXNlU2NyZWVuL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFlMUIsTUFBTUMsYUFBYTtRQUFDLEVBQ2xCQyxvQkFBb0IsRUFDcEJDLGtCQUFrQixFQUNsQkMsd0JBQXdCLEVBQ3hCQyxzQkFBc0IsRUFDdEJDLGtCQUFrQixFQUNsQkMsTUFBTSxFQUNOQyxtQkFBbUIsRUFDbkJDLElBQUksRUFDWTtJQUNoQixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7b0JBQU07a0NBRUwsOERBQUNDO3dCQUNDQyxPQUFPWjt3QkFDUGEsVUFBVVg7a0NBRVRJLG9CQUFvQlEsR0FBRyxDQUFDLENBQUNDLHlCQUN4Qiw4REFBQ0M7Z0NBQXNCSixPQUFPRzswQ0FDM0JBOytCQURVQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFNbkIsOERBQUNMOztvQkFBTTtrQ0FFTCw4REFBQ087d0JBQU1DLE1BQUs7d0JBQVNOLE9BQU9QO3dCQUFRUSxVQUFVVDs7Ozs7Ozs7Ozs7OzBCQUVoRCw4REFBQ2U7Ozs7OzBCQUNELDhEQUFDVDs7b0JBQU07a0NBRUwsOERBQUNDO3dCQUFPQyxPQUFPWDt3QkFBb0JZLFVBQVVWO2tDQUMxQ0csb0JBQW9CUSxHQUFHLENBQUMsQ0FBQ0MseUJBQ3hCLDhEQUFDQztnQ0FBc0JKLE9BQU9HOzBDQUMzQkE7K0JBRFVBOzs7Ozs7Ozs7Ozs7Ozs7OzBCQU1uQiw4REFBQ0s7O29CQUNFZjtvQkFBTztvQkFBRUw7b0JBQXFCO29CQUFtQkssU0FBU0U7b0JBQU07b0JBQ2hFTjtvQkFBbUI7Ozs7Ozs7Ozs7Ozs7QUFJNUI7S0EvQ01GO0FBaUROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jhc2VTY3JlZW4vaW5kZXgudHN4P2JiZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgQmFzZVNjcmVlblByb3BzIHtcbiAgc2VsZWN0ZWRDdXJyZW5jeUZyb206IHN0cmluZztcbiAgc2VsZWN0ZWRDdXJyZW5jeVRvOiBzdHJpbmc7XG4gIGhhbmRsZUN1cnJlbmN5RnJvbUNoYW5nZTogKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD5cbiAgKSA9PiB2b2lkO1xuICBoYW5kbGVDdXJyZW5jeVRvQ2hhbmdlOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4gdm9pZDtcbiAgaGFuZGxlQW1vdW50Q2hhbmdlOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgYXZhaWxhYmxlQ3VycmVuY2llczogc3RyaW5nW107XG4gIHJhdGU6IG51bWJlcjtcbn1cblxuY29uc3QgQmFzZVNjcmVlbiA9ICh7XG4gIHNlbGVjdGVkQ3VycmVuY3lGcm9tLFxuICBzZWxlY3RlZEN1cnJlbmN5VG8sXG4gIGhhbmRsZUN1cnJlbmN5RnJvbUNoYW5nZSxcbiAgaGFuZGxlQ3VycmVuY3lUb0NoYW5nZSxcbiAgaGFuZGxlQW1vdW50Q2hhbmdlLFxuICBhbW91bnQsXG4gIGF2YWlsYWJsZUN1cnJlbmNpZXMsXG4gIHJhdGUsXG59OiBCYXNlU2NyZWVuUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkN1cnJlbmN5IEV4Y2hhbmdlcjwvaDE+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIEZyb206XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRDdXJyZW5jeUZyb219XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUN1cnJlbmN5RnJvbUNoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIHthdmFpbGFibGVDdXJyZW5jaWVzLm1hcCgoY3VycmVuY3kpID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjdXJyZW5jeX0gdmFsdWU9e2N1cnJlbmN5fT5cbiAgICAgICAgICAgICAge2N1cnJlbmN5fVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgQW1vdW50OlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXthbW91bnR9IG9uQ2hhbmdlPXtoYW5kbGVBbW91bnRDaGFuZ2V9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIFRvOlxuICAgICAgICA8c2VsZWN0IHZhbHVlPXtzZWxlY3RlZEN1cnJlbmN5VG99IG9uQ2hhbmdlPXtoYW5kbGVDdXJyZW5jeVRvQ2hhbmdlfT5cbiAgICAgICAgICB7YXZhaWxhYmxlQ3VycmVuY2llcy5tYXAoKGN1cnJlbmN5KSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17Y3VycmVuY3l9IHZhbHVlPXtjdXJyZW5jeX0+XG4gICAgICAgICAgICAgIHtjdXJyZW5jeX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8cD5cbiAgICAgICAge2Ftb3VudH0ge3NlbGVjdGVkQ3VycmVuY3lGcm9tfSBpcyBhcHByb3hpbWF0ZWx5IHthbW91bnQgKiByYXRlfXtcIiBcIn1cbiAgICAgICAge3NlbGVjdGVkQ3VycmVuY3lUb30uXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlU2NyZWVuO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQmFzZVNjcmVlbiIsInNlbGVjdGVkQ3VycmVuY3lGcm9tIiwic2VsZWN0ZWRDdXJyZW5jeVRvIiwiaGFuZGxlQ3VycmVuY3lGcm9tQ2hhbmdlIiwiaGFuZGxlQ3VycmVuY3lUb0NoYW5nZSIsImhhbmRsZUFtb3VudENoYW5nZSIsImFtb3VudCIsImF2YWlsYWJsZUN1cnJlbmNpZXMiLCJyYXRlIiwiZGl2IiwiaDEiLCJsYWJlbCIsInNlbGVjdCIsInZhbHVlIiwib25DaGFuZ2UiLCJtYXAiLCJjdXJyZW5jeSIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsImJyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/BaseScreen/index.tsx\n"));

/***/ })

});