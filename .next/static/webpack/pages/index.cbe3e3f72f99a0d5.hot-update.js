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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_BaseScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/BaseScreen */ \"./src/components/BaseScreen/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst CurrencyRate = (param)=>{\n    let { initialRate, availableCurrencies } = param;\n    _s();\n    const [selectedCurrency, setSelectedCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"USD\");\n    const [rate, setRate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialRate);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchRate = async ()=>{\n            const apiKey = \"d9ccd108bf6e44b99ba5a9e372df73c1\";\n            const res = await fetch(\"https://openexchangerates.org/api/latest.json?app_id=\".concat(apiKey, \"&base=\").concat(selectedCurrency));\n            const data = await res.json();\n            console.log(\"data.rates.JPY\", data.rates.JPY);\n            if (!data.rates || !data.rates.JPY) {\n                console.error(\"Failed to fetch the exchange rate.\");\n                return;\n            }\n            setRate(data.rates.JPY);\n        };\n        fetchRate();\n    }, [\n        selectedCurrency\n    ]);\n    const handleCurrencyChange = (event)=>{\n        setSelectedCurrency(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_BaseScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        handleCurrencyChange: handleCurrencyChange,\n        selectedCurrency: selectedCurrency,\n        rate: rate,\n        availableCurrencies: availableCurrencies\n    }, void 0, false, {\n        fileName: \"/Users/yuki/github/currency-exchange-webapp/pages/index.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CurrencyRate, \"4StO+cFrQ3zPaECKHkImc+lcPsg=\");\n_c = CurrencyRate;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrencyRate);\nvar _c;\n$RefreshReg$(_c, \"CurrencyRate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDRztBQXdDdEQsTUFBTUksZUFBZTtRQUFDLEVBQ3BCQyxXQUFXLEVBQ1hDLG1CQUFtQixFQUNEOztJQUNsQixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQ0k7SUFFakNILGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsWUFBWTtZQUNoQixNQUFNQyxTQUFTQyxrQ0FBbUQ7WUFDbEUsTUFBTUcsTUFBTSxNQUFNQyxNQUNoQix3REFBdUVWLE9BQWZLLFFBQU8sVUFBeUIsT0FBakJMO1lBRXpFLE1BQU1XLE9BQXFCLE1BQU1GLElBQUlHLElBQUk7WUFFekNDLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JILEtBQUtJLEtBQUssQ0FBQ0MsR0FBRztZQUM1QyxJQUFJLENBQUNMLEtBQUtJLEtBQUssSUFBSSxDQUFDSixLQUFLSSxLQUFLLENBQUNDLEdBQUcsRUFBRTtnQkFDbENILFFBQVFJLEtBQUssQ0FBQztnQkFDZDtZQUNGO1lBRUFkLFFBQVFRLEtBQUtJLEtBQUssQ0FBQ0MsR0FBRztRQUN4QjtRQUVBWjtJQUNGLEdBQUc7UUFBQ0o7S0FBaUI7SUFFckIsTUFBTWtCLHVCQUF1QixDQUMzQkM7UUFFQWxCLG9CQUFvQmtCLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUN4QztJQUVBLHFCQUNFLDhEQUFDekIsa0VBQVVBO1FBQ1RzQixzQkFBc0JBO1FBQ3RCbEIsa0JBQWtCQTtRQUNsQkUsTUFBTUE7UUFDTkgscUJBQXFCQTs7Ozs7O0FBRzNCO0dBekNNRjtLQUFBQTs7QUEyQ04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmFzZVNjcmVlbiBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQmFzZVNjcmVlblwiO1xuXG5pbnRlcmZhY2UgQ3VycmVuY3lSYXRlUHJvcHMge1xuICBpbml0aWFsUmF0ZTogbnVtYmVyO1xuICBhdmFpbGFibGVDdXJyZW5jaWVzOiBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIEN1cnJlbmN5RGF0YSB7XG4gIHJhdGVzOiB7XG4gICAgW2N1cnJlbmN5OiBzdHJpbmddOiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczxcbiAgQ3VycmVuY3lSYXRlUHJvcHNcbj4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09QRU5fRVhDSEFOR0VfUkFURVNfQVBJX0tFWTtcblxuICAvLyBHZXQgaW5pdGlhbCBVU0QgdG8gSlBZIHJhdGVcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vb3BlbmV4Y2hhbmdlcmF0ZXMub3JnL2FwaS9sYXRlc3QuanNvbj9hcHBfaWQ9JHthcGlLZXl9YFxuICApO1xuICBjb25zdCBkYXRhOiBDdXJyZW5jeURhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCBpbml0aWFsUmF0ZSA9IGRhdGEucmF0ZXMuSlBZO1xuXG4gIC8vIEdldCBhdmFpbGFibGUgY3VycmVuY2llc1xuICBjb25zdCByZXNDdXJyZW5jaWVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vb3BlbmV4Y2hhbmdlcmF0ZXMub3JnL2FwaS9jdXJyZW5jaWVzLmpzb25gXG4gICk7XG4gIGNvbnN0IGN1cnJlbmNpZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSBhd2FpdCByZXNDdXJyZW5jaWVzLmpzb24oKTtcbiAgY29uc3QgYXZhaWxhYmxlQ3VycmVuY2llcyA9IE9iamVjdC5rZXlzKGN1cnJlbmNpZXMpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGluaXRpYWxSYXRlLFxuICAgICAgYXZhaWxhYmxlQ3VycmVuY2llcyxcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgQ3VycmVuY3lSYXRlID0gKHtcbiAgaW5pdGlhbFJhdGUsXG4gIGF2YWlsYWJsZUN1cnJlbmNpZXMsXG59OiBDdXJyZW5jeVJhdGVQcm9wcykgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDdXJyZW5jeSwgc2V0U2VsZWN0ZWRDdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlVTRFwiKTtcbiAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFJhdGUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hSYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT1BFTl9FWENIQU5HRV9SQVRFU19BUElfS0VZO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL29wZW5leGNoYW5nZXJhdGVzLm9yZy9hcGkvbGF0ZXN0Lmpzb24/YXBwX2lkPSR7YXBpS2V5fSZiYXNlPSR7c2VsZWN0ZWRDdXJyZW5jeX1gXG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YTogQ3VycmVuY3lEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgY29uc29sZS5sb2coXCJkYXRhLnJhdGVzLkpQWVwiLCBkYXRhLnJhdGVzLkpQWSk7XG4gICAgICBpZiAoIWRhdGEucmF0ZXMgfHwgIWRhdGEucmF0ZXMuSlBZKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdGhlIGV4Y2hhbmdlIHJhdGUuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldFJhdGUoZGF0YS5yYXRlcy5KUFkpO1xuICAgIH07XG5cbiAgICBmZXRjaFJhdGUoKTtcbiAgfSwgW3NlbGVjdGVkQ3VycmVuY3ldKTtcblxuICBjb25zdCBoYW5kbGVDdXJyZW5jeUNoYW5nZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ3VycmVuY3koZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCYXNlU2NyZWVuXG4gICAgICBoYW5kbGVDdXJyZW5jeUNoYW5nZT17aGFuZGxlQ3VycmVuY3lDaGFuZ2V9XG4gICAgICBzZWxlY3RlZEN1cnJlbmN5PXtzZWxlY3RlZEN1cnJlbmN5fVxuICAgICAgcmF0ZT17cmF0ZX1cbiAgICAgIGF2YWlsYWJsZUN1cnJlbmNpZXM9e2F2YWlsYWJsZUN1cnJlbmNpZXN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbmN5UmF0ZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQmFzZVNjcmVlbiIsIkN1cnJlbmN5UmF0ZSIsImluaXRpYWxSYXRlIiwiYXZhaWxhYmxlQ3VycmVuY2llcyIsInNlbGVjdGVkQ3VycmVuY3kiLCJzZXRTZWxlY3RlZEN1cnJlbmN5IiwicmF0ZSIsInNldFJhdGUiLCJmZXRjaFJhdGUiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfT1BFTl9FWENIQU5HRV9SQVRFU19BUElfS0VZIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyYXRlcyIsIkpQWSIsImVycm9yIiwiaGFuZGxlQ3VycmVuY3lDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});