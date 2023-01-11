"use strict";
exports.id = 72;
exports.ids = [72];
exports.modules = {

/***/ 1645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T5": () => (/* binding */ API_URL)
/* harmony export */ });
/* unused harmony exports NEXT_URL, PER_PAGE */
const API_URL = "http://localhost:5000";
// process.env.NEXT_PUBLIC_API_URL || 'http://192.168.1.7:5000'
// process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://192.168.1.7:3000";
// process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'
const PER_PAGE = 5;


/***/ }),

/***/ 7072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1645);



// create a auth context
const AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
// create a provider
const AuthProvider = ({ children  })=>{
    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const checkUserLoggedIn = async ()=>{
        setLoading(true);
        try {
            await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5}/api/checkuser`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            }).then((res)=>res.json()).then((data)=>{
                setUser(data.user);
                setLoading(false);
                console.log("logging from authcontext");
                console.log(data);
            });
        } catch (error) {
            console.log(error);
        // setLoading(false)
        }
    };
    const logOut = async ()=>{
        setLoading(true);
        try {
            await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5}/api/logout`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            }).then((res)=>res.json()).then((data)=>{
                setUser(null);
                setLoading(false);
                console.log("logging from authcontext");
                console.log(data);
            });
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        checkUserLoggedIn();
        console.log("I'm in the auth context");
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            logOut,
            checkUserLoggedIn
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);


/***/ })

};
;