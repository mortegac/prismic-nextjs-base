"use strict";
exports.id = 848;
exports.ids = [848];
exports.modules = {

/***/ 2848:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AF": () => (/* binding */ repositoryName),
/* harmony export */   "eI": () => (/* binding */ createClient),
/* harmony export */   "kG": () => (/* binding */ linkResolver)
/* harmony export */ });
/* unused harmony exports endpoint, repository, locales */
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4582);
/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2055);
/* harmony import */ var _sm_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__, _prismicio_next__WEBPACK_IMPORTED_MODULE_1__]);
([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__, _prismicio_next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const endpoint = _sm_json__WEBPACK_IMPORTED_MODULE_2__/* .apiEndpoint */ ._d;
const repositoryName = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.getRepositoryName(endpoint);
// Update the Link Resolver to match your project's route structure
function linkResolver(doc) {
    switch(doc.type){
        case "page":
            return `/${doc.uid}`;
        default:
            return null;
    }
}
let repository = {};
let locales = (/* unused pure expression or super */ null && ([]));
// This factory function allows smooth preview setup
const createClient = async (config = {})=>{
    const client = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.createClient(endpoint, {
        ...config
    });
    repository = await client.getRepository();
    (0,_prismicio_next__WEBPACK_IMPORTED_MODULE_1__/* .enableAutoPreviews */ .Lu)({
        client,
        previewData: config.previewData,
        req: config.req
    });
    return client;
};
(async ()=>{
    const client = createClient();
    repository = await (await client).getRepository();
    locales = repository.languages.map((lang)=>lang.id);
})();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 125:
/***/ ((module) => {

module.exports = JSON.parse('{"_d":"https://test-nextmanu.prismic.io/api/v2"}');

/***/ })

};
;