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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"NEXT_URL\": () => (/* binding */ NEXT_URL),\n/* harmony export */   \"PER_PAGE\": () => (/* binding */ PER_PAGE)\n/* harmony export */ });\nconst API_URL = \"https://wild-gold-sea-urchin-sock.cyclic.app\";\n// process.env.NEXT_PUBLIC_API_URL || 'http://192.168.1.7:5000'\n// process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'\nconst NEXT_URL = // process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://192.168.1.7:3000'\nprocess.env.NEXT_PUBLIC_FRONTEND_URL || \"http://localhost:3000\";\nconst PER_PAGE = 5;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsVUFBVSwrQ0FBOEM7QUFDckUsK0RBQStEO0FBQy9ELDZEQUE2RDtBQUV0RCxNQUFNQyxXQUNaLG9FQUFvRTtBQUNwRUMsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0IsSUFBSSx3QkFBdUI7QUFFekQsTUFBTUMsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb25maWcvaW5kZXguanM/YTFiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3dpbGQtZ29sZC1zZWEtdXJjaGluLXNvY2suY3ljbGljLmFwcCdcclxuLy8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovLzE5Mi4xNjguMS43OjUwMDAnXHJcbi8vIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCdcclxuXHJcbmV4cG9ydCBjb25zdCBORVhUX1VSTCA9XHJcblx0Ly8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIHx8ICdodHRwOi8vMTkyLjE2OC4xLjc6MzAwMCdcclxuXHRwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcclxuXHJcbmV4cG9ydCBjb25zdCBQRVJfUEFHRSA9IDVcclxuIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJORVhUX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GUk9OVEVORF9VUkwiLCJQRVJfUEFHRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./context/Authcontext.js":
/*!********************************!*\
  !*** ./context/Authcontext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/index */ \"./config/index.js\");\n\n\n\n// create a auth context\nconst AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\n// create a provider\nconst AuthProvider = ({ children  })=>{\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const checkUserLoggedIn = async ()=>{\n        setLoading(true);\n        try {\n            await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_2__.API_URL}/api/checkuser`, {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                credentials: \"include\"\n            }).then((res)=>res.json()).then((data)=>{\n                setUser(data.user);\n                setLoading(false);\n                console.log(\"logging from authcontext\");\n                console.log(data);\n            });\n        } catch (error) {\n            console.log(error);\n        // setLoading(false)\n        }\n    };\n    const logOut = async ()=>{\n        setLoading(true);\n        try {\n            await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_2__.API_URL}/api/logout`, {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                credentials: \"include\"\n            }).then((res)=>res.json()).then((data)=>{\n                setUser(null);\n                setLoading(false);\n                console.log(\"logging from authcontext\");\n                console.log(data);\n            });\n        } catch (error) {\n            console.log(error);\n            setLoading(false);\n        }\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        checkUserLoggedIn();\n        console.log(\"I'm in the auth context\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            logOut,\n            checkUserLoggedIn\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Desktop\\\\React\\\\cloudapp\\\\frontend\\\\context\\\\Authcontext.js\",\n        lineNumber: 61,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhjb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUN5QjtBQUNsRCx3QkFBd0I7QUFDeEIsTUFBTUcsNEJBQWNILDBEQUFtQjtBQUN2QyxvQkFBb0I7QUFDYixNQUFNSyxlQUFlLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDN0MsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLHFEQUFjLENBQUMsSUFBSTtJQUMzQyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gscURBQWMsQ0FBQyxLQUFLO0lBQ2xELE1BQU1ZLG9CQUFvQixVQUFZO1FBQ3JDRCxXQUFXLElBQUk7UUFDZixJQUFJO1lBQ0gsTUFBTUUsTUFBTSxDQUFDLEVBQUVYLGtEQUFPQSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUN2Q1ksUUFBUTtnQkFDUkMsU0FBUztvQkFDUixnQkFBZ0I7Z0JBQ2pCO2dCQUNBQyxhQUFhO1lBQ2QsR0FDRUMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRyxPQUFTO2dCQUNmWixRQUFRWSxLQUFLYixJQUFJO2dCQUNqQkksV0FBVyxLQUFLO2dCQUNoQlUsUUFBUUMsR0FBRyxDQUFDO2dCQUNaRCxRQUFRQyxHQUFHLENBQUNGO1lBQ2I7UUFDRixFQUFFLE9BQU9HLE9BQU87WUFDZkYsUUFBUUMsR0FBRyxDQUFDQztRQUNaLG9CQUFvQjtRQUNyQjtJQUNEO0lBRUEsTUFBTUMsU0FBUyxVQUFZO1FBQzFCYixXQUFXLElBQUk7UUFDZixJQUFJO1lBQ0gsTUFBTUUsTUFBTSxDQUFDLEVBQUVYLGtEQUFPQSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNwQ1ksUUFBUTtnQkFDUkMsU0FBUztvQkFDUixnQkFBZ0I7Z0JBQ2pCO2dCQUNBQyxhQUFhO1lBQ2QsR0FDRUMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRyxPQUFTO2dCQUNmWixRQUFRLElBQUk7Z0JBQ1pHLFdBQVcsS0FBSztnQkFDaEJVLFFBQVFDLEdBQUcsQ0FBQztnQkFDWkQsUUFBUUMsR0FBRyxDQUFDRjtZQUNiO1FBQ0YsRUFBRSxPQUFPRyxPQUFPO1lBQ2ZGLFFBQVFDLEdBQUcsQ0FBQ0M7WUFDWlosV0FBVyxLQUFLO1FBQ2pCO0lBQ0Q7SUFFQVgsc0RBQWUsQ0FBQyxJQUFNO1FBQ3JCWTtRQUNBUyxRQUFRQyxHQUFHLENBQUM7SUFDYixHQUFHLEVBQUU7SUFFTCxxQkFDQyw4REFBQ25CLFlBQVl1QixRQUFRO1FBQUNDLE9BQU87WUFBRXBCO1lBQU1pQjtZQUFRWjtRQUFrQjtrQkFDN0ROOzs7Ozs7QUFHSixFQUFDO0FBRUQsaUVBQWVILFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbnRleHQvQXV0aGNvbnRleHQuanM/YzFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5FWFRfVVJMLCBBUElfVVJMIH0gZnJvbSAnQC9jb25maWcvaW5kZXgnXHJcbi8vIGNyZWF0ZSBhIGF1dGggY29udGV4dFxyXG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxyXG4vLyBjcmVhdGUgYSBwcm92aWRlclxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgY2hlY2tVc2VyTG9nZ2VkSW4gPSBhc3luYyAoKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpXHJcblx0XHR0cnkge1xyXG5cdFx0XHRhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9hcGkvY2hlY2t1c2VyYCwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcblx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuXHRcdFx0XHQudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0VXNlcihkYXRhLnVzZXIpXHJcblx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2xvZ2dpbmcgZnJvbSBhdXRoY29udGV4dCcpXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRcdH0pXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdFx0Ly8gc2V0TG9hZGluZyhmYWxzZSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGxvZ091dCA9IGFzeW5jICgpID0+IHtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSlcclxuXHRcdHRyeSB7XHJcblx0XHRcdGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2FwaS9sb2dvdXRgLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0XHQudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRVc2VyKG51bGwpXHJcblx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2xvZ2dpbmcgZnJvbSBhdXRoY29udGV4dCcpXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0XHRcdH0pXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjaGVja1VzZXJMb2dnZWRJbigpXHJcblx0XHRjb25zb2xlLmxvZyhcIkknbSBpbiB0aGUgYXV0aCBjb250ZXh0XCIpXHJcblx0fSwgW10pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9nT3V0LCBjaGVja1VzZXJMb2dnZWRJbiB9fT5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5FWFRfVVJMIiwiQVBJX1VSTCIsIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2hlY2tVc2VyTG9nZ2VkSW4iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImxvZ091dCIsInVzZUVmZmVjdCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/Authcontext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_Authcontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/Authcontext */ \"./context/Authcontext.js\");\n// import '../styles/globals.css'\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_Authcontext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Desktop\\\\React\\\\cloudapp\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Desktop\\\\React\\\\cloudapp\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDakM7QUFBb0Q7QUFDckMsU0FBU0MsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3JELHFCQUNDLDhEQUFDSCw4REFBWUE7a0JBQ1osNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHM0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0L0F1dGhjb250ZXh0J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxBdXRoUHJvdmlkZXI+XG5cdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0PC9BdXRoUHJvdmlkZXI+XG5cdClcbn1cbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();