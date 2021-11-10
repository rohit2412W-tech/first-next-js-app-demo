"use strict";
(() => {
var exports = {};
exports.id = 266;
exports.ids = [266];
exports.modules = {

/***/ 4604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetups)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetups.js

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const connectedClient = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://rohit4java:rohitnext241292@cluster0.icluy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        const db = connectedClient.db();
        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data);
        connectedClient.close();
        res.status(201).json({
            message: "meetup inserted!"
        });
    }
}
/* harmony default export */ const new_meetups = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4604));
module.exports = __webpack_exports__;

})();