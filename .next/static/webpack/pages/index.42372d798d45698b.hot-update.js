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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_BaseScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/BaseScreen */ \"./src/components/BaseScreen/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst CurrencyRate = (param)=>{\n    let { initialRate, availableCurrencies } = param;\n    _s();\n    const [selectedCurrency, setSelectedCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"JPY\");\n    const [rate, setRate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialRate);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchRate = async ()=>{\n            const apiKey = \"d9ccd108bf6e44b99ba5a9e372df73c1\";\n            const res = await fetch(\"https://openexchangerates.org/api/latest.json?app_id=\".concat(apiKey, \"&symbols=\").concat(selectedCurrency));\n            const data = await res.json();\n            setRate(data.rates[selectedCurrency]);\n        };\n        fetchRate();\n    }, [\n        selectedCurrency\n    ]);\n    const handleCurrencyChange = (event)=>{\n        setSelectedCurrency(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_BaseScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        handleCurrencyToChange: handleCurrencyChange,\n        availableCurrencies: availableCurrencies,\n        rate: rate,\n        selectedCurrencyTo: selectedCurrency\n    }, void 0, false, {\n        fileName: \"/Users/yuki/github/currency-exchange-webapp/pages/index.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CurrencyRate, \"ghQcltAnfTHNNwqsmsB7AgHI5cU=\");\n_c = CurrencyRate;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrencyRate);\nvar _c;\n$RefreshReg$(_c, \"CurrencyRate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDRztBQXdDdEQsTUFBTUksZUFBZTtRQUFDLEVBQ3BCQyxXQUFXLEVBQ1hDLG1CQUFtQixFQUNEOztJQUNsQixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQ0k7SUFFakNILGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsWUFBWTtZQUNoQixNQUFNQyxTQUFTQyxrQ0FBbUQ7WUFDbEUsTUFBTUcsTUFBTSxNQUFNQyxNQUNoQix3REFBMEVWLE9BQWxCSyxRQUFPLGFBQTRCLE9BQWpCTDtZQUU1RSxNQUFNVyxPQUFxQixNQUFNRixJQUFJRyxJQUFJO1lBQ3pDVCxRQUFRUSxLQUFLRSxLQUFLLENBQUNiLGlCQUFpQjtRQUN0QztRQUVBSTtJQUNGLEdBQUc7UUFBQ0o7S0FBaUI7SUFFckIsTUFBTWMsdUJBQXVCLENBQzNCQztRQUVBZCxvQkFBb0JjLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUN4QztJQUVBLHFCQUNFLDhEQUFDckIsa0VBQVVBO1FBQ1RzQix3QkFBd0JKO1FBQ3hCZixxQkFBcUJBO1FBQ3JCRyxNQUFNQTtRQUNOaUIsb0JBQW9CbkI7Ozs7OztBQUcxQjtHQWxDTUg7S0FBQUE7O0FBb0NOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJhc2VTY3JlZW4gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0Jhc2VTY3JlZW5cIjtcblxuaW50ZXJmYWNlIEN1cnJlbmN5UmF0ZVByb3BzIHtcbiAgaW5pdGlhbFJhdGU6IG51bWJlcjtcbiAgYXZhaWxhYmxlQ3VycmVuY2llczogc3RyaW5nW107XG59XG5cbmludGVyZmFjZSBDdXJyZW5jeURhdGEge1xuICByYXRlczoge1xuICAgIFtjdXJyZW5jeTogc3RyaW5nXTogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8XG4gIEN1cnJlbmN5UmF0ZVByb3BzXG4+ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PUEVOX0VYQ0hBTkdFX1JBVEVTX0FQSV9LRVk7XG5cbiAgLy8gR2V0IGluaXRpYWwgVVNEIHRvIEpQWSByYXRlXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL29wZW5leGNoYW5nZXJhdGVzLm9yZy9hcGkvbGF0ZXN0Lmpzb24/YXBwX2lkPSR7YXBpS2V5fWBcbiAgKTtcbiAgY29uc3QgZGF0YTogQ3VycmVuY3lEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgaW5pdGlhbFJhdGUgPSBkYXRhLnJhdGVzLkpQWTtcblxuICAvLyBHZXQgYXZhaWxhYmxlIGN1cnJlbmNpZXNcbiAgY29uc3QgcmVzQ3VycmVuY2llcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL29wZW5leGNoYW5nZXJhdGVzLm9yZy9hcGkvY3VycmVuY2llcy5qc29uYFxuICApO1xuICBjb25zdCBjdXJyZW5jaWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gYXdhaXQgcmVzQ3VycmVuY2llcy5qc29uKCk7XG4gIGNvbnN0IGF2YWlsYWJsZUN1cnJlbmNpZXMgPSBPYmplY3Qua2V5cyhjdXJyZW5jaWVzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpbml0aWFsUmF0ZSxcbiAgICAgIGF2YWlsYWJsZUN1cnJlbmNpZXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IEN1cnJlbmN5UmF0ZSA9ICh7XG4gIGluaXRpYWxSYXRlLFxuICBhdmFpbGFibGVDdXJyZW5jaWVzLFxufTogQ3VycmVuY3lSYXRlUHJvcHMpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkQ3VycmVuY3ksIHNldFNlbGVjdGVkQ3VycmVuY3ldID0gdXNlU3RhdGUoXCJKUFlcIik7XG4gIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKGluaXRpYWxSYXRlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUmF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09QRU5fRVhDSEFOR0VfUkFURVNfQVBJX0tFWTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9vcGVuZXhjaGFuZ2VyYXRlcy5vcmcvYXBpL2xhdGVzdC5qc29uP2FwcF9pZD0ke2FwaUtleX0mc3ltYm9scz0ke3NlbGVjdGVkQ3VycmVuY3l9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGE6IEN1cnJlbmN5RGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBzZXRSYXRlKGRhdGEucmF0ZXNbc2VsZWN0ZWRDdXJyZW5jeV0pO1xuICAgIH07XG5cbiAgICBmZXRjaFJhdGUoKTtcbiAgfSwgW3NlbGVjdGVkQ3VycmVuY3ldKTtcblxuICBjb25zdCBoYW5kbGVDdXJyZW5jeUNoYW5nZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ3VycmVuY3koZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCYXNlU2NyZWVuXG4gICAgICBoYW5kbGVDdXJyZW5jeVRvQ2hhbmdlPXtoYW5kbGVDdXJyZW5jeUNoYW5nZX1cbiAgICAgIGF2YWlsYWJsZUN1cnJlbmNpZXM9e2F2YWlsYWJsZUN1cnJlbmNpZXN9XG4gICAgICByYXRlPXtyYXRlfVxuICAgICAgc2VsZWN0ZWRDdXJyZW5jeVRvPXtzZWxlY3RlZEN1cnJlbmN5fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW5jeVJhdGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJhc2VTY3JlZW4iLCJDdXJyZW5jeVJhdGUiLCJpbml0aWFsUmF0ZSIsImF2YWlsYWJsZUN1cnJlbmNpZXMiLCJzZWxlY3RlZEN1cnJlbmN5Iiwic2V0U2VsZWN0ZWRDdXJyZW5jeSIsInJhdGUiLCJzZXRSYXRlIiwiZmV0Y2hSYXRlIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX09QRU5fRVhDSEFOR0VfUkFURVNfQVBJX0tFWSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJyYXRlcyIsImhhbmRsZUN1cnJlbmN5Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUN1cnJlbmN5VG9DaGFuZ2UiLCJzZWxlY3RlZEN1cnJlbmN5VG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});