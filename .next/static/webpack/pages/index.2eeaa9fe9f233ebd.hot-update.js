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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_BaseScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/BaseScreen */ \"./src/components/BaseScreen/index.tsx\");\n// pages/index.tsx\n\nvar _s = $RefreshSig$();\n\n\nconst CurrencyRate = (param)=>{\n    let { initialRate, availableCurrencies } = param;\n    _s();\n    const [selectedCurrency, setSelectedCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"USD\");\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [rate, setRate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialRate);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchRate = async ()=>{\n            const apiKey = \"d9ccd108bf6e44b99ba5a9e372df73c1\";\n            const res = await fetch(\"https://openexchangerates.org/api/latest.json?app_id=\".concat(apiKey, \"&base=\").concat(selectedCurrency));\n            const data = await res.json();\n            console.log(\"data.rates.JPY\", data.rates);\n            if (data && data.rates && data.rates.JPY) {\n                setRate(data.rates.JPY);\n            } else {\n                console.error(\"Failed to fetch the exchange rate.\");\n            }\n        };\n        fetchRate();\n    }, [\n        selectedCurrency\n    ]);\n    const handleCurrencyChange = (event)=>{\n        setSelectedCurrency(event.target.value);\n    };\n    const handleAmountChange = (event)=>{\n        setAmount(Number(event.target.value));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_BaseScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        handleCurrencyChange: handleCurrencyChange,\n        handleAmountChange: handleAmountChange,\n        selectedCurrency: selectedCurrency,\n        amount: amount,\n        rate: rate,\n        availableCurrencies: availableCurrencies\n    }, void 0, false, {\n        fileName: \"/Users/yuki/github/currency-exchange-webapp/pages/index.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CurrencyRate, \"2AL1PZ5mueFXfAnsOok0ScZNVvc=\");\n_c = CurrencyRate;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrencyRate);\nvar _c;\n$RefreshReg$(_c, \"CurrencyRate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0JBQWtCOzs7QUFFaUM7QUFDRztBQXdDdEQsTUFBTUksZUFBNEM7UUFBQyxFQUNqREMsV0FBVyxFQUNYQyxtQkFBbUIsRUFDcEI7O0lBQ0MsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDSTtJQUVqQ0gsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxZQUFZO1lBQ2hCLE1BQU1DLFNBQVNDLGtDQUFtRDtZQUNsRSxNQUFNRyxNQUFNLE1BQU1DLE1BQ2hCLHdEQUF1RVosT0FBZk8sUUFBTyxVQUF5QixPQUFqQlA7WUFFekUsTUFBTWEsT0FBcUIsTUFBTUYsSUFBSUcsSUFBSTtZQUN6Q0MsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkgsS0FBS0ksS0FBSztZQUV4QyxJQUFJSixRQUFRQSxLQUFLSSxLQUFLLElBQUlKLEtBQUtJLEtBQUssQ0FBQ0MsR0FBRyxFQUFFO2dCQUN4Q2IsUUFBUVEsS0FBS0ksS0FBSyxDQUFDQyxHQUFHO1lBQ3hCLE9BQU87Z0JBQ0xILFFBQVFJLEtBQUssQ0FBQztZQUNoQjtRQUNGO1FBRUFiO0lBQ0YsR0FBRztRQUFDTjtLQUFpQjtJQUVyQixNQUFNb0IsdUJBQXVCLENBQzNCQztRQUVBcEIsb0JBQW9Cb0IsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3hDO0lBRUEsTUFBTUMscUJBQXFCLENBQUNIO1FBQzFCbEIsVUFBVXNCLE9BQU9KLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNyQztJQUVBLHFCQUNFLDhEQUFDM0Isa0VBQVVBO1FBQ1R3QixzQkFBc0JBO1FBQ3RCSSxvQkFBb0JBO1FBQ3BCeEIsa0JBQWtCQTtRQUNsQkUsUUFBUUE7UUFDUkUsTUFBTUE7UUFDTkwscUJBQXFCQTs7Ozs7O0FBRzNCO0dBL0NNRjtLQUFBQTs7QUFpRE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXgudHN4XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYXNlU2NyZWVuIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9CYXNlU2NyZWVuXCI7XG5cbmludGVyZmFjZSBDdXJyZW5jeVJhdGVQcm9wcyB7XG4gIGluaXRpYWxSYXRlOiBudW1iZXI7XG4gIGF2YWlsYWJsZUN1cnJlbmNpZXM6IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgQ3VycmVuY3lEYXRhIHtcbiAgcmF0ZXM6IHtcbiAgICBbY3VycmVuY3k6IHN0cmluZ106IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPFxuICBDdXJyZW5jeVJhdGVQcm9wc1xuPiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1BFTl9FWENIQU5HRV9SQVRFU19BUElfS0VZO1xuXG4gIC8vIEdldCBpbml0aWFsIFVTRCB0byBKUFkgcmF0ZVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9vcGVuZXhjaGFuZ2VyYXRlcy5vcmcvYXBpL2xhdGVzdC5qc29uP2FwcF9pZD0ke2FwaUtleX1gXG4gICk7XG4gIGNvbnN0IGRhdGE6IEN1cnJlbmN5RGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IGluaXRpYWxSYXRlID0gZGF0YS5yYXRlcy5KUFk7XG5cbiAgLy8gR2V0IGF2YWlsYWJsZSBjdXJyZW5jaWVzXG4gIGNvbnN0IHJlc0N1cnJlbmNpZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9vcGVuZXhjaGFuZ2VyYXRlcy5vcmcvYXBpL2N1cnJlbmNpZXMuanNvbmBcbiAgKTtcbiAgY29uc3QgY3VycmVuY2llczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IGF3YWl0IHJlc0N1cnJlbmNpZXMuanNvbigpO1xuICBjb25zdCBhdmFpbGFibGVDdXJyZW5jaWVzID0gT2JqZWN0LmtleXMoY3VycmVuY2llcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaW5pdGlhbFJhdGUsXG4gICAgICBhdmFpbGFibGVDdXJyZW5jaWVzLFxuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBDdXJyZW5jeVJhdGU6IFJlYWN0LkZDPEN1cnJlbmN5UmF0ZVByb3BzPiA9ICh7XG4gIGluaXRpYWxSYXRlLFxuICBhdmFpbGFibGVDdXJyZW5jaWVzLFxufSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDdXJyZW5jeSwgc2V0U2VsZWN0ZWRDdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlVTRFwiKTtcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsUmF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFJhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUEVOX0VYQ0hBTkdFX1JBVEVTX0FQSV9LRVk7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vb3BlbmV4Y2hhbmdlcmF0ZXMub3JnL2FwaS9sYXRlc3QuanNvbj9hcHBfaWQ9JHthcGlLZXl9JmJhc2U9JHtzZWxlY3RlZEN1cnJlbmN5fWBcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhOiBDdXJyZW5jeURhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJkYXRhLnJhdGVzLkpQWVwiLCBkYXRhLnJhdGVzKTtcblxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5yYXRlcyAmJiBkYXRhLnJhdGVzLkpQWSkge1xuICAgICAgICBzZXRSYXRlKGRhdGEucmF0ZXMuSlBZKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdGhlIGV4Y2hhbmdlIHJhdGUuXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFJhdGUoKTtcbiAgfSwgW3NlbGVjdGVkQ3VycmVuY3ldKTtcblxuICBjb25zdCBoYW5kbGVDdXJyZW5jeUNoYW5nZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ3VycmVuY3koZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbW91bnRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW1vdW50KE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCYXNlU2NyZWVuXG4gICAgICBoYW5kbGVDdXJyZW5jeUNoYW5nZT17aGFuZGxlQ3VycmVuY3lDaGFuZ2V9XG4gICAgICBoYW5kbGVBbW91bnRDaGFuZ2U9e2hhbmRsZUFtb3VudENoYW5nZX1cbiAgICAgIHNlbGVjdGVkQ3VycmVuY3k9e3NlbGVjdGVkQ3VycmVuY3l9XG4gICAgICBhbW91bnQ9e2Ftb3VudH1cbiAgICAgIHJhdGU9e3JhdGV9XG4gICAgICBhdmFpbGFibGVDdXJyZW5jaWVzPXthdmFpbGFibGVDdXJyZW5jaWVzfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW5jeVJhdGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJhc2VTY3JlZW4iLCJDdXJyZW5jeVJhdGUiLCJpbml0aWFsUmF0ZSIsImF2YWlsYWJsZUN1cnJlbmNpZXMiLCJzZWxlY3RlZEN1cnJlbmN5Iiwic2V0U2VsZWN0ZWRDdXJyZW5jeSIsImFtb3VudCIsInNldEFtb3VudCIsInJhdGUiLCJzZXRSYXRlIiwiZmV0Y2hSYXRlIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX09QRU5fRVhDSEFOR0VfUkFURVNfQVBJX0tFWSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicmF0ZXMiLCJKUFkiLCJlcnJvciIsImhhbmRsZUN1cnJlbmN5Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUFtb3VudENoYW5nZSIsIk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ }),

/***/ "./src/components/BaseScreen/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/BaseScreen/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst BaseScreen = (param)=>{\n    let { selectedCurrency, handleCurrencyChange, handleAmountChange, amount, availableCurrencies, rate } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Currency Exchange Rate\"\n            }, void 0, false, {\n                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"From:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: selectedCurrency,\n                        onChange: handleCurrencyChange,\n                        children: availableCurrencies.map((currency)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: currency,\n                                children: currency\n                            }, currency, false, {\n                                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Amount:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        value: amount,\n                        onChange: handleAmountChange\n                    }, void 0, false, {\n                        fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    amount,\n                    \" \",\n                    selectedCurrency,\n                    \" is approximately \",\n                    amount * rate,\n                    \" JPY.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yuki/github/currency-exchange-webapp/src/components/BaseScreen/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BaseScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseScreen);\nvar _c;\n$RefreshReg$(_c, \"BaseScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CYXNlU2NyZWVuL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFXMUIsTUFBTUMsYUFBYTtRQUFDLEVBQ2xCQyxnQkFBZ0IsRUFDaEJDLG9CQUFvQixFQUNwQkMsa0JBQWtCLEVBQ2xCQyxNQUFNLEVBQ05DLG1CQUFtQixFQUNuQkMsSUFBSSxFQUNZO0lBQ2hCLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztvQkFBTTtrQ0FFTCw4REFBQ0M7d0JBQU9DLE9BQU9WO3dCQUFrQlcsVUFBVVY7a0NBQ3hDRyxvQkFBb0JRLEdBQUcsQ0FBQyxDQUFDQyx5QkFDeEIsOERBQUNDO2dDQUFzQkosT0FBT0c7MENBQzNCQTsrQkFEVUE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTW5CLDhEQUFDTDs7b0JBQU07a0NBRUwsOERBQUNPO3dCQUFNQyxNQUFLO3dCQUFTTixPQUFPUDt3QkFBUVEsVUFBVVQ7Ozs7Ozs7Ozs7OzswQkFFaEQsOERBQUNlOztvQkFDRWQ7b0JBQU87b0JBQUVIO29CQUFpQjtvQkFBbUJHLFNBQVNFO29CQUFLOzs7Ozs7Ozs7Ozs7O0FBSXBFO0tBOUJNTjtBQWdDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CYXNlU2NyZWVuL2luZGV4LnRzeD9iYmY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEJhc2VTY3JlZW5Qcm9wcyB7XG4gIHNlbGVjdGVkQ3VycmVuY3k6IHN0cmluZztcbiAgaGFuZGxlQ3VycmVuY3lDaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB2b2lkO1xuICBoYW5kbGVBbW91bnRDaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG4gIGFtb3VudDogbnVtYmVyO1xuICBhdmFpbGFibGVDdXJyZW5jaWVzOiBzdHJpbmdbXTtcbiAgcmF0ZTogbnVtYmVyO1xufVxuXG5jb25zdCBCYXNlU2NyZWVuID0gKHtcbiAgc2VsZWN0ZWRDdXJyZW5jeSxcbiAgaGFuZGxlQ3VycmVuY3lDaGFuZ2UsXG4gIGhhbmRsZUFtb3VudENoYW5nZSxcbiAgYW1vdW50LFxuICBhdmFpbGFibGVDdXJyZW5jaWVzLFxuICByYXRlLFxufTogQmFzZVNjcmVlblByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DdXJyZW5jeSBFeGNoYW5nZSBSYXRlPC9oMT5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgRnJvbTpcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRDdXJyZW5jeX0gb25DaGFuZ2U9e2hhbmRsZUN1cnJlbmN5Q2hhbmdlfT5cbiAgICAgICAgICB7YXZhaWxhYmxlQ3VycmVuY2llcy5tYXAoKGN1cnJlbmN5KSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17Y3VycmVuY3l9IHZhbHVlPXtjdXJyZW5jeX0+XG4gICAgICAgICAgICAgIHtjdXJyZW5jeX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIEFtb3VudDpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17YW1vdW50fSBvbkNoYW5nZT17aGFuZGxlQW1vdW50Q2hhbmdlfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxwPlxuICAgICAgICB7YW1vdW50fSB7c2VsZWN0ZWRDdXJyZW5jeX0gaXMgYXBwcm94aW1hdGVseSB7YW1vdW50ICogcmF0ZX0gSlBZLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZVNjcmVlbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJhc2VTY3JlZW4iLCJzZWxlY3RlZEN1cnJlbmN5IiwiaGFuZGxlQ3VycmVuY3lDaGFuZ2UiLCJoYW5kbGVBbW91bnRDaGFuZ2UiLCJhbW91bnQiLCJhdmFpbGFibGVDdXJyZW5jaWVzIiwicmF0ZSIsImRpdiIsImgxIiwibGFiZWwiLCJzZWxlY3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwibWFwIiwiY3VycmVuY3kiLCJvcHRpb24iLCJpbnB1dCIsInR5cGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/BaseScreen/index.tsx\n"));

/***/ })

});