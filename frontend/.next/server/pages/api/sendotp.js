"use strict";
(() => {
var exports = {};
exports.id = 324;
exports.ids = [324];
exports.modules = {

/***/ 8193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./config/index.js
const API_URL = "http://localhost:5000";
// process.env.NEXT_PUBLIC_API_URL || 'http://192.168.1.7:5000'
// process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://192.168.1.7:3000";
// process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'
const PER_PAGE = 5;

;// CONCATENATED MODULE: ./pages/api/sendotp.js
// call end point: http://localhost:5000/api/sendOTP

async function handler(req, res) {
    console.log(API_URL);
    console.log(req.body);
    const { phone  } = req.body;
    const response = await fetch(`${API_URL}/api/otp/sendotp`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            phone
        })
    });
    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8193));
module.exports = __webpack_exports__;

})();