/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./star.jpg */ "./src/star.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-color: bisque;
}

/* Tab part. */

#page {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    border-radius: 20%;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 500px;
    background-color: rgba(207, 221, 17, 0.795);
}

#tabs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 7px;
    height: 50px;
    width: 100%;
    gap: 25px;
}

#home,
#menu,
#contact {   
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 65px;
    width: 130px;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 15%;
    background-color: rgb(66, 190, 190);
    font-size: 25px;
    font-weight: 900;
    box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.75);
}

/* Home content. */

#content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 820px;
    width: 1300px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10%;
    background-color: rgba(31, 163, 224, 0.3);
    backdrop-filter: blur(20px);
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
    gap: 40px;
}

#content > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 20px;
    background-color: rgba(15, 47, 61, 0.3);
    border-radius: 15%;
}

#topContent,
#bottomContent {
    height: 270px;
}

#titleContent {
    height: 100px;
}

/* Title styling. */

#title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 30%;
    border: 3px solid black;
    font-size: 250%;
    border-radius: 20px;
    background-color: rgb(248, 0, 227);
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

/* Top content styling. */

#topContent > div,
#topContent > img {
    height: 95%;
    width: 70%;
    border: 3px solid black;
}

#hours {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: rgb(170, 170, 15);
}

#hoursTitle,
#locationTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 50%;
    border: 3px solid black;
    font-size: 250%;
    border-radius: 20px;
    background-color: rgb(0, 0, 0);
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-bottom: 30px;
}

#hours > p {
    margin-bottom: 4px;
    font-size: 15px;
    font-weight: 700;
    color: white;
}

#location {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius: 30px;
    background-color: rgb(170, 170, 15);
}

#locationTitle {
    margin-top: 15px;
}

#locationContent {
    margin-top: 30px;
    color: white;
    font-size: 30px;
    font-weight: 900;
}

#restaurantImage {
    object-fit: fill;
}

/* Bottom content styling. */

#bottomContent > div {
    height: 94%;
    width: 98%;
    border: 3px solid black;
}

#social {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius: 30px;
    background-color: rgb(170, 170, 15);
}

#socialTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 21%;
    border: 3px solid black;
    font-size: 250%;
    border-radius: 20px;
    background-color: rgb(0, 0, 0);
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-bottom: 30px;
    margin-top: 20px;
}

#socialContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#socialContent > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 65%;
    width: 100%;
    font-size: 250%;
    border-radius: 20px;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-bottom: 30px;
    gap: 20px;
}

#instagramTitle,
#twitterTitle,
#facebookTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 200px;
    border: 3px solid black;
    border-radius: 20px;
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
}

#instagramTitle {
    background-color: #833AB4;
}

#twitterTitle {
    background-color: #1DA1F2;
}

#facebookTitle {
    background-color: #4267B2;
}

#twitter {
    margin-right: 40px;
}

#instagram {
    margin-right: 40px;
    margin-left: -40px;
}

/* Tab styling. */

button {
    cursor: pointer;
}

#home:active,
#menu:active,
#contact:active {
    background-color: #ffffff;
}

/* Menu Content */

#menuTitleContainer,
#contactTitleContainer {
    height: 100px;
}

#topMenuContent,
#bottomMenuContent {
    height: 320px;
}

#menuTitle,
#contactTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 30%;
    border: 3px solid black;
    background-color: rgb(248, 0, 227);
    color: white;
    border-radius: 20px;
    margin-top: 10px;
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 250%;
}

#topMenuContent,
#topContactContent {
    margin-top: -30px;
}

#topMenuContent > div,
#bottomMenuContent > div {
    height: 95%;
    width: 40%;
}

#blueMilkContainer,
#rontoContainer,
#katSakaContainer,
#felucianKeftaContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 200%;
    gap: 10px;
}

#blueMilkTitle,
#rontoTitle,
#katSakaTitle,
#felucianKeftaTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px rgb(0, 0, 0);
    height: 50px;
    width: 280px;
    background-color: whitesmoke;
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
}

#blueMilkContent,
#rontoContent,
#katSakaContent,
#felucianKeftaContent {
    border: solid 3px black;
    height: 200px;
    width: 370px;
    object-fit: fill;
}

/* Contact tab styling. */

#hisuContainer,
#irqroiContainer,
#anzathContainer,
#fotullContainer {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 300px;
    width: 600px;
    border: 3px solid black;
    gap: 20px;
    background-color: beige;
}

#irqroiContainer {
    gap: 50px;
}

#anzathContainer {
    gap: 30px;
}

#topContactContent,
#bottomContactContent {
    height: 1000px;
    width: 1100px;
}

#hisuPhoto,
#irqroiPhoto,
#anzathPhoto,
#fotullPhoto {
    object-fit: fill;
    border: 5px solid rgb(0, 0, 0);
    height: 200px;
    width: 250px;
    flex-shrink: 0;
    margin-left: 20px;
}

#hisuInfo,
#irqroiInfo,
#anzathInfo,
#fotullInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 900;
}

#hisuName,
#irqroiName,
#anzathName,
#fotullName {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #299fc4;
    height: 40px;
    width: 100px;
    margin-bottom: 20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    font-size: 30px;
}

#contactTitleContainer {
    margin-top: 40px;
    margin-bottom: 30px;
}

#bottomContactContent {
    margin-bottom: 70px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    background-image: url('./star.jpg');\n    background-color: bisque;\n}\n\n/* Tab part. */\n\n#page {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid white;\n    border-radius: 20%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    height: 100px;\n    width: 500px;\n    background-color: rgba(207, 221, 17, 0.795);\n}\n\n#tabs {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 7px;\n    height: 50px;\n    width: 100%;\n    gap: 25px;\n}\n\n#home,\n#menu,\n#contact {   \n    display: flex;\n    justify-content: center; \n    align-items: center; \n    height: 65px;\n    width: 130px;\n    border: 2px solid rgb(0, 0, 0);\n    border-radius: 15%;\n    background-color: rgb(66, 190, 190);\n    font-size: 25px;\n    font-weight: 900;\n    box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.75);\n    -webkit-box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.75);\n    -moz-box-shadow: 0px 7px 5px 0px rgba(0,0,0,0.75);\n}\n\n/* Home content. */\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 820px;\n    width: 1300px;\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    border-radius: 10%;\n    background-color: rgba(31, 163, 224, 0.3);\n    backdrop-filter: blur(20px);\n    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);\n    margin-top: 10px;\n    gap: 40px;\n}\n\n#content > div {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 90%;\n    gap: 20px;\n    background-color: rgba(15, 47, 61, 0.3);\n    border-radius: 15%;\n}\n\n#topContent,\n#bottomContent {\n    height: 270px;\n}\n\n#titleContent {\n    height: 100px;\n}\n\n/* Title styling. */\n\n#title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 90%;\n    width: 30%;\n    border: 3px solid black;\n    font-size: 250%;\n    border-radius: 20px;\n    background-color: rgb(248, 0, 227);\n    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);\n    color: white;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\n/* Top content styling. */\n\n#topContent > div,\n#topContent > img {\n    height: 95%;\n    width: 70%;\n    border: 3px solid black;\n}\n\n#hours {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 30px;\n    background-color: rgb(170, 170, 15);\n}\n\n#hoursTitle,\n#locationTitle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 20%;\n    width: 50%;\n    border: 3px solid black;\n    font-size: 250%;\n    border-radius: 20px;\n    background-color: rgb(0, 0, 0);\n    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);\n    color: white;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    margin-bottom: 30px;\n}\n\n#hours > p {\n    margin-bottom: 4px;\n    font-size: 15px;\n    font-weight: 700;\n    color: white;\n}\n\n#location {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    border-radius: 30px;\n    background-color: rgb(170, 170, 15);\n}\n\n#locationTitle {\n    margin-top: 15px;\n}\n\n#locationContent {\n    margin-top: 30px;\n    color: white;\n    font-size: 30px;\n    font-weight: 900;\n}\n\n#restaurantImage {\n    object-fit: fill;\n}\n\n/* Bottom content styling. */\n\n#bottomContent > div {\n    height: 94%;\n    width: 98%;\n    border: 3px solid black;\n}\n\n#social {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    border-radius: 30px;\n    background-color: rgb(170, 170, 15);\n}\n\n#socialTitle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 20%;\n    width: 21%;\n    border: 3px solid black;\n    font-size: 250%;\n    border-radius: 20px;\n    background-color: rgb(0, 0, 0);\n    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);\n    color: white;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    margin-bottom: 30px;\n    margin-top: 20px;\n}\n\n#socialContent {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n#socialContent > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 65%;\n    width: 100%;\n    font-size: 250%;\n    border-radius: 20px;\n    color: white;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    margin-bottom: 30px;\n    gap: 20px;\n}\n\n#instagramTitle,\n#twitterTitle,\n#facebookTitle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n    width: 200px;\n    border: 3px solid black;\n    border-radius: 20px;\n    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);\n}\n\n#instagramTitle {\n    background-color: #833AB4;\n}\n\n#twitterTitle {\n    background-color: #1DA1F2;\n}\n\n#facebookTitle {\n    background-color: #4267B2;\n}\n\n#twitter {\n    margin-right: 40px;\n}\n\n#instagram {\n    margin-right: 40px;\n    margin-left: -40px;\n}\n\n/* Tab styling. */\n\nbutton {\n    cursor: pointer;\n}\n\n#home:active,\n#menu:active,\n#contact:active {\n    background-color: #ffffff;\n}\n\n/* Menu Content */\n\n#menuTitleContainer,\n#contactTitleContainer {\n    height: 100px;\n}\n\n#topMenuContent,\n#bottomMenuContent {\n    height: 320px;\n}\n\n#menuTitle,\n#contactTitle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 90%;\n    width: 30%;\n    border: 3px solid black;\n    background-color: rgb(248, 0, 227);\n    color: white;\n    border-radius: 20px;\n    margin-top: 10px;\n    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-size: 250%;\n}\n\n#topMenuContent,\n#topContactContent {\n    margin-top: -30px;\n}\n\n#topMenuContent > div,\n#bottomMenuContent > div {\n    height: 95%;\n    width: 40%;\n}\n\n#blueMilkContainer,\n#rontoContainer,\n#katSakaContainer,\n#felucianKeftaContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-size: 200%;\n    gap: 10px;\n}\n\n#blueMilkTitle,\n#rontoTitle,\n#katSakaTitle,\n#felucianKeftaTitle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: solid 1px rgb(0, 0, 0);\n    height: 50px;\n    width: 280px;\n    background-color: whitesmoke;\n    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);\n}\n\n#blueMilkContent,\n#rontoContent,\n#katSakaContent,\n#felucianKeftaContent {\n    border: solid 3px black;\n    height: 200px;\n    width: 370px;\n    object-fit: fill;\n}\n\n/* Contact tab styling. */\n\n#hisuContainer,\n#irqroiContainer,\n#anzathContainer,\n#fotullContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    align-items: center;\n    height: 300px;\n    width: 600px;\n    border: 3px solid black;\n    gap: 20px;\n    background-color: beige;\n}\n\n#irqroiContainer {\n    gap: 50px;\n}\n\n#anzathContainer {\n    gap: 30px;\n}\n\n#topContactContent,\n#bottomContactContent {\n    height: 1000px;\n    width: 1100px;\n}\n\n#hisuPhoto,\n#irqroiPhoto,\n#anzathPhoto,\n#fotullPhoto {\n    object-fit: fill;\n    border: 5px solid rgb(0, 0, 0);\n    height: 200px;\n    width: 250px;\n    flex-shrink: 0;\n    margin-left: 20px;\n}\n\n#hisuInfo,\n#irqroiInfo,\n#anzathInfo,\n#fotullInfo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 20px;\n    font-weight: 900;\n}\n\n#hisuName,\n#irqroiName,\n#anzathName,\n#fotullName {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #299fc4;\n    height: 40px;\n    width: 100px;\n    margin-bottom: 20px;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);\n    font-size: 30px;\n}\n\n#contactTitleContainer {\n    margin-top: 40px;\n    margin-bottom: 30px;\n}\n\n#bottomContactContent {\n    margin-bottom: 70px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactTab: () => (/* binding */ createContactTab)
/* harmony export */ });
function createContactTab() {

    const contactTitleContainer = document.createElement('div');
    const topContactContent = document.createElement('div');
    const bottonContactContent = document.createElement('div');

    contactTitleContainer.id = 'contactTitleContainer';
    topContactContent.id = 'topContactContent';
    bottonContactContent.id = 'bottomContactContent';

    content.appendChild(contactTitleContainer);
    content.appendChild(topContactContent);
    content.appendChild(bottonContactContent);

    // Adding children to title container.

    const contactTitle = document.createElement('div');
    contactTitle.id = 'contactTitle';
    contactTitleContainer.appendChild(contactTitle);
    contactTitle.textContent = 'Universal Contact';

    // Adding children to top contact container.

    const hisuContainer = document.createElement('div');
    const hisuPhoto = document.createElement('img');
    const hisuInfo = document.createElement('div');
    const hisuName = document.createElement('p');
    const hisuNumber = document.createElement('p');
    const hisuEmail = document.createElement('p');
    const irqroiContainer = document.createElement('div');
    const irqroiPhoto = document.createElement('img');
    const irqroiInfo = document.createElement('div');
    const irqroiName = document.createElement('p');
    const irqroiNumber = document.createElement('p');
    const irqroiEmail = document.createElement('p');

    hisuContainer.id = 'hisuContainer';
    hisuPhoto.id = 'hisuPhoto';
    hisuInfo.id = 'hisuInfo';
    hisuName.id = 'hisuName';
    hisuNumber.id = 'hisuNumber';
    hisuEmail.id = 'hisuEmail';
    irqroiContainer.id = 'irqroiContainer';
    irqroiPhoto.id = 'irqroiPhoto';
    irqroiInfo.id = 'irqroiInfo';
    irqroiName.id = 'irqroiName';
    irqroiNumber.id = 'irqroiNumber';
    irqroiEmail.id = 'irqroiEmail';

    hisuName.textContent = 'Hisu';
    hisuNumber.textContent = '547-438-9256';
    hisuEmail.textContent = 'thehisuman@thediner.com';
    irqroiName.textContent = 'Irqroi';
    irqroiNumber.textContent = '432-725-3745';
    irqroiEmail.textContent = 'mrirqroi@galaxy.com';

    hisuPhoto.src = './images/hisu.webp';
    irqroiPhoto.src = './images/irqroi.webp';

    topContactContent.appendChild(hisuContainer);
    topContactContent.appendChild(irqroiContainer);
    hisuContainer.appendChild(hisuPhoto);
    hisuContainer.appendChild(hisuInfo);
    hisuInfo.appendChild(hisuName);
    hisuInfo.appendChild(hisuNumber);
    hisuInfo.appendChild(hisuEmail);
    irqroiContainer.appendChild(irqroiPhoto);
    irqroiContainer.appendChild(irqroiInfo);
    irqroiInfo.appendChild(irqroiName);
    irqroiInfo.appendChild(irqroiNumber);
    irqroiInfo.appendChild(irqroiEmail);

    // Adding children to bottom contact container.

    const anzathContainer = document.createElement('div');
    const anzathPhoto = document.createElement('img');
    const anzathInfo = document.createElement('div');
    const anzathName = document.createElement('p');
    const anzathNumber = document.createElement('p');
    const anzathEmail = document.createElement('p');
    const fotullContainer = document.createElement('div');
    const fotullPhoto = document.createElement('img');
    const fotullInfo = document.createElement('div');
    const fotullName = document.createElement('p');
    const fotullNumber = document.createElement('p');
    const fotullEmail = document.createElement('p');

    anzathContainer.id = 'anzathContainer';
    anzathPhoto.id = 'anzathPhoto';
    anzathInfo.id = 'anzathInfo';
    anzathName.id = 'anzathName';
    anzathNumber.id = 'anzathNumber';
    anzathEmail.id = 'anzathEmail';
    fotullContainer.id = 'fotullContainer';
    fotullPhoto.id = 'fotullPhoto';
    fotullInfo.id = 'fotullInfo';
    fotullName.id = 'fotullName';
    fotullNumber.id = 'fotullNumber';
    fotullEmail.id = 'fotullEmail';

    anzathName.textContent = 'Anzath';
    anzathNumber.textContent = '345-384-5656';
    anzathEmail.textContent = 'holyanzath@render.com';
    fotullName.textContent = 'Fotull';
    fotullNumber.textContent = '345-999-3434';
    fotullEmail.textContent = 'fotulltheconqueror@alien.com';

    anzathPhoto.src = './images/anzath.jpg';
    fotullPhoto.src = './images/fotull.jpg';

    bottonContactContent.appendChild(anzathContainer);
    bottonContactContent.appendChild(fotullContainer);
    anzathContainer.appendChild(anzathPhoto);
    anzathContainer.appendChild(anzathInfo);
    anzathInfo.appendChild(anzathName);
    anzathInfo.appendChild(anzathNumber);
    anzathInfo.appendChild(anzathEmail);
    fotullContainer.appendChild(fotullPhoto);
    fotullContainer.appendChild(fotullInfo);
    fotullInfo.appendChild(fotullName);
    fotullInfo.appendChild(fotullNumber);
    fotullInfo.appendChild(fotullEmail);
}

/***/ }),

/***/ "./src/extra-load.js":
/*!***************************!*\
  !*** ./src/extra-load.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTabs: () => (/* binding */ createTabs)
/* harmony export */ });
function createTabs() {

    const tabs = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    tabs.id = 'tabs';
    home.id = 'home';
    menu.id = 'menu';
    contact.id = 'contact';

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    page.appendChild(tabs);
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomeTab: () => (/* binding */ createHomeTab)
/* harmony export */ });
function createHomeTab() {

    // Main plate.

    const titleContent = document.createElement('div');
    const topContent = document.createElement('div');
    const bottomContent = document.createElement('div');
    const title = document.createElement('div');
    const hours = document.createElement('div');
    const restaurantImage = document.createElement('img');
    const location = document.createElement('div');
    const social = document.createElement('div');
    const instagram = document.createElement('div');
    const twitter = document.createElement('div');
    const facebook = document.createElement('div');

    titleContent.id = 'titleContent';
    title.id = 'title';
    topContent.id = 'topContent';
    bottomContent.id = 'bottomContent';
    hours.id = 'hours';
    restaurantImage.id = 'restaurantImage';
    location.id = 'location';
    social.id = 'social';
    instagram.id = 'instagram';
    twitter.id = 'twitter';
    facebook.id = 'facebook';

    // Adding children to hours container.

    const hoursTitle = document.createElement('div');
    const monday = document.createElement('p');
    const tuesday = document.createElement('p');
    const wednesday = document.createElement('p');
    const thursday = document.createElement('p');
    const friday = document.createElement('p');
    const saturday = document.createElement('p');
    const sunday = document.createElement('p');

    hoursTitle.id = 'hoursTitle';
    monday.id = 'monday';
    tuesday.id = 'tuesday';
    wednesday.id = 'wednesday';
    thursday.id = 'thursday';
    friday.id = 'friday';
    saturday.id = 'saturday';
    sunday.id = 'sunday';

    // Adding content to the hours container divs.

    title.textContent = 'Intergalactic Diner';
    hoursTitle.textContent = 'Hours';
    monday.textContent = 'Monday: 6 A.M. - 6 P.M.';
    tuesday.textContent = 'Tuesday: 6 A.M. - 6 P.M.';
    wednesday.textContent = 'Wednesday: 6 A.M. - 6 P.M.';
    thursday.textContent = 'Thursday: 6 A.M. - 10 P.M.';
    friday.textContent = 'Friday: 6 A.M. - 10 P.M.';
    saturday.textContent = 'Saturday: 8 A.M. - 10 P.M.';
    sunday.textContent = 'Sunday: 8 A.M. - 8 P.M.';

    // Adding children to location container.

    const locationTitle = document.createElement('div');
    const locationContent = document.createElement('div');

    locationTitle.id = 'locationTitle';
    locationContent.id = 'locationContent';

    // Adding content to the location container divs.

    locationTitle.textContent = 'Location';
    locationContent.textContent = '1448 Point Street 60605';

    // Adding children to social container.

    const socialTitle = document.createElement('div');
    const socialContent = document.createElement('div');
    const instagramTitle = document.createElement('div');
    const twitterTitle = document.createElement('div');
    const facebookTitle = document.createElement('div');
    const instagramContent = document.createElement('div');
    const twitterContent = document.createElement('div');
    const facebookContent = document.createElement('div');


    socialTitle.id = 'socialTitle';
    socialContent.id = 'socialContent';
    instagramTitle.id = 'instagramTitle';
    twitterTitle.id = 'twitterTitle';
    facebookTitle.id = 'facebookTitle';
    instagramContent.id = 'instagramContent';
    twitterContent.id = 'twitterContent';
    facebookContent.id = 'facebookContent';

    // Adding content to social container.

    socialTitle.textContent = 'Social Media';
    instagramTitle.textContent = 'Instagram';
    twitterTitle.textContent = 'Twitter';
    facebookTitle.textContent = 'Facebook';
    instagramContent.textContent = '@intergalacticdiner';
    twitterContent.textContent = '@IntergalaticDiner';
    facebookContent.textContent = 'Intergalatic Diner';

    // Adding image to img container.

    restaurantImage.src = './images/tavern.jpeg';

    // Three children to content.

    content.appendChild(titleContent);
    content.appendChild(topContent);
    content.appendChild(bottomContent);

    // First child, title.

    titleContent.appendChild(title);

    // Second child, top content.

    topContent.appendChild(hours);
    topContent.appendChild(restaurantImage);
    topContent.appendChild(location);

    // Third child, bottom content.

    bottomContent.appendChild(social);
    social.appendChild(socialTitle);
    social.appendChild(socialContent);
    socialContent.appendChild(instagram);
    socialContent.appendChild(twitter);
    socialContent.appendChild(facebook);
    instagram.appendChild(instagramTitle);
    instagram.appendChild(instagramContent);
    twitter.appendChild(twitterTitle);
    twitter.appendChild(twitterContent);
    facebook.appendChild(facebookTitle);
    facebook.appendChild(facebookContent);

    // Hours container children.

    hours.appendChild(hoursTitle);
    hours.appendChild(monday);
    hours.appendChild(tuesday);
    hours.appendChild(wednesday);
    hours.appendChild(thursday);
    hours.appendChild(friday);
    hours.appendChild(saturday);
    hours.appendChild(sunday);

    // Location container children.

    location.appendChild(locationTitle);
    location.appendChild(locationContent);


}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuTab: () => (/* binding */ createMenuTab)
/* harmony export */ });
function createMenuTab() {

    const menuTitleContainer = document.createElement('div');
    const topMenuContent = document.createElement('div');
    const bottomMenuContent = document.createElement('div');

    menuTitleContainer.id = 'menuTitleContainer';
    topMenuContent.id = 'topMenuContent';
    bottomMenuContent.id = 'bottomMenuContent';

    content.appendChild(menuTitleContainer);
    content.appendChild(topMenuContent);
    content.appendChild(bottomMenuContent);

    // Adding children to title container.

    const menuTitle = document.createElement('div');
    menuTitle.id = 'menuTitle';
    menuTitleContainer.appendChild(menuTitle);
    menuTitle.textContent = 'Intergalactic Menu';

    // Adding children to top menu container.

    const blueMilkContainer = document.createElement('div');
    const blueMilkTitle = document.createElement('div');
    const blueMilkContent = document.createElement('img');
    const rontoContainer = document.createElement('div');
    const rontoTitle = document.createElement('div');
    const rontoContent = document.createElement('img');

    blueMilkContainer.id = 'blueMilkContainer';
    blueMilkTitle.id = 'blueMilkTitle';
    blueMilkContent.id = 'blueMilkContent';
    rontoContainer.id = 'rontoContainer';
    rontoTitle.id = 'rontoTitle';
    rontoContent.id = 'rontoContent';

    blueMilkTitle.textContent = 'Blue Milk - $6';
    rontoTitle.textContent = 'Ronto - $22';

    blueMilkContent.src = './images/bluemilk.webp';
    rontoContent.src = './images/ronto.webp';

    topMenuContent.appendChild(blueMilkContainer);
    topMenuContent.appendChild(rontoContainer);
    blueMilkContainer.appendChild(blueMilkTitle);
    blueMilkContainer.appendChild(blueMilkContent);
    rontoContainer.appendChild(rontoTitle);
    rontoContainer.appendChild(rontoContent);

    // Adding children to bottom menu container.

    const katSakaContainer = document.createElement('div');
    const katSakaTitle = document.createElement('div');
    const katSakaContent = document.createElement('img');
    const felucianKeftaContainer = document.createElement('div');
    const felucianKeftaTitle = document.createElement('div');
    const felucianKeftaContent = document.createElement('img');

    katSakaContainer.id = 'katSakaContainer';
    katSakaTitle.id = 'katSakaTitle';
    katSakaContent.id = 'katSakaContent';
    felucianKeftaContainer.id = 'felucianKeftaContainer';
    felucianKeftaTitle.id = 'felucianKeftaTitle';
    felucianKeftaContent.id = 'felucianKeftaContent';

    katSakaTitle.textContent = 'Kat Saka - $12';
    felucianKeftaTitle.textContent = 'Felucian Kefta - $17';

    katSakaContent.src = './images/katsaka.webp';
    felucianKeftaContent.src = './images/feluciankefta.webp';

    bottomMenuContent.appendChild(katSakaContainer);
    bottomMenuContent.appendChild(felucianKeftaContainer);
    katSakaContainer.appendChild(katSakaTitle);
    katSakaContainer.appendChild(katSakaContent);
    felucianKeftaContainer.appendChild(felucianKeftaTitle);
    felucianKeftaContainer.appendChild(felucianKeftaContent);


}

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHTML: () => (/* binding */ createHTML)
/* harmony export */ });
function createHTML() {

    const content = document.getElementById('content');
    const page = document.createElement('div');

    page.id = 'page';

    document.body.appendChild(page);
    document.body.insertBefore(page, content);

}

/***/ }),

/***/ "./src/star.jpg":
/*!**********************!*\
  !*** ./src/star.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/star.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _extra_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extra-load */ "./src/extra-load.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.createHTML)();
(0,_extra_load__WEBPACK_IMPORTED_MODULE_2__.createTabs)();
(0,_contact__WEBPACK_IMPORTED_MODULE_5__.createContactTab)();
console.log('Everything is working!');

home.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    (0,_home__WEBPACK_IMPORTED_MODULE_3__.createHomeTab)();
})

menu.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    (0,_menu__WEBPACK_IMPORTED_MODULE_4__.createMenuTab)();
})

contact.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    (0,_contact__WEBPACK_IMPORTED_MODULE_5__.createContactTab)();
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlHQUE2QjtBQUN6RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLGFBQWEsT0FBTyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsT0FBTyxPQUFPLFlBQVksT0FBTyxhQUFhLE9BQU8sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sUUFBUSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sUUFBUSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxh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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUhPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQk87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQzVKTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUNoRk87O0FBRVA7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDb0I7QUFDQztBQUNIO0FBQ0E7QUFDTTs7QUFFN0Msc0RBQVU7QUFDVix1REFBVTtBQUNWLDBEQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQWE7QUFDakIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQWE7QUFDakIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWdCO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2V4dHJhLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc3Rhci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbn1cblxuLyogVGFiIHBhcnQuICovXG5cbiNwYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgMjIxLCAxNywgMC43OTUpO1xufVxuXG4jdGFicyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDI1cHg7XG59XG5cbiNob21lLFxuI21lbnUsXG4jY29udGFjdCB7ICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTkwLCAxOTApO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cblxuLyogSG9tZSBjb250ZW50LiAqL1xuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MjBweDtcbiAgICB3aWR0aDogMTMwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMTYzLCAyMjQsIDAuMyk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGdhcDogNDBweDtcbn1cblxuI2NvbnRlbnQgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDQ3LCA2MSwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNSU7XG59XG5cbiN0b3BDb250ZW50LFxuI2JvdHRvbUNvbnRlbnQge1xuICAgIGhlaWdodDogMjcwcHg7XG59XG5cbiN0aXRsZUNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi8qIFRpdGxlIHN0eWxpbmcuICovXG5cbiN0aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAyNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMCwgMjI3KTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG59XG5cbi8qIFRvcCBjb250ZW50IHN0eWxpbmcuICovXG5cbiN0b3BDb250ZW50ID4gZGl2LFxuI3RvcENvbnRlbnQgPiBpbWcge1xuICAgIGhlaWdodDogOTUlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG59XG5cbiNob3VycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxNzAsIDE1KTtcbn1cblxuI2hvdXJzVGl0bGUsXG4jbG9jYXRpb25UaXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMjAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAyNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4jaG91cnMgPiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jbG9jYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxNzAsIDE1KTtcbn1cblxuI2xvY2F0aW9uVGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbiNsb2NhdGlvbkNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4jcmVzdGF1cmFudEltYWdlIHtcbiAgICBvYmplY3QtZml0OiBmaWxsO1xufVxuXG4vKiBCb3R0b20gY29udGVudCBzdHlsaW5nLiAqL1xuXG4jYm90dG9tQ29udGVudCA+IGRpdiB7XG4gICAgaGVpZ2h0OiA5NCU7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbn1cblxuI3NvY2lhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDE3MCwgMTUpO1xufVxuXG4jc29jaWFsVGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICB3aWR0aDogMjElO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jc29jaWFsQ29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3NvY2lhbENvbnRlbnQgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNjUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4jaW5zdGFncmFtVGl0bGUsXG4jdHdpdHRlclRpdGxlLFxuI2ZhY2Vib29rVGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4jaW5zdGFncmFtVGl0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzNBQjQ7XG59XG5cbiN0d2l0dGVyVGl0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREExRjI7XG59XG5cbiNmYWNlYm9va1RpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2N0IyO1xufVxuXG4jdHdpdHRlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG4jaW5zdGFncmFtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xufVxuXG4vKiBUYWIgc3R5bGluZy4gKi9cblxuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNob21lOmFjdGl2ZSxcbiNtZW51OmFjdGl2ZSxcbiNjb250YWN0OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLyogTWVudSBDb250ZW50ICovXG5cbiNtZW51VGl0bGVDb250YWluZXIsXG4jY29udGFjdFRpdGxlQ29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4jdG9wTWVudUNvbnRlbnQsXG4jYm90dG9tTWVudUNvbnRlbnQge1xuICAgIGhlaWdodDogMzIwcHg7XG59XG5cbiNtZW51VGl0bGUsXG4jY29udGFjdFRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAwLCAyMjcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNTAlO1xufVxuXG4jdG9wTWVudUNvbnRlbnQsXG4jdG9wQ29udGFjdENvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4jdG9wTWVudUNvbnRlbnQgPiBkaXYsXG4jYm90dG9tTWVudUNvbnRlbnQgPiBkaXYge1xuICAgIGhlaWdodDogOTUlO1xuICAgIHdpZHRoOiA0MCU7XG59XG5cbiNibHVlTWlsa0NvbnRhaW5lcixcbiNyb250b0NvbnRhaW5lcixcbiNrYXRTYWthQ29udGFpbmVyLFxuI2ZlbHVjaWFuS2VmdGFDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIGdhcDogMTBweDtcbn1cblxuI2JsdWVNaWxrVGl0bGUsXG4jcm9udG9UaXRsZSxcbiNrYXRTYWthVGl0bGUsXG4jZmVsdWNpYW5LZWZ0YVRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDAsIDAsIDApO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDAlLCA4MCUgMCUsIDEwMCUgMjAlLCAxMDAlIDgwJSwgODAlIDEwMCUsIDIwJSAxMDAlLCAwJSA4MCUsIDAlIDIwJSk7XG59XG5cbiNibHVlTWlsa0NvbnRlbnQsXG4jcm9udG9Db250ZW50LFxuI2thdFNha2FDb250ZW50LFxuI2ZlbHVjaWFuS2VmdGFDb250ZW50IHtcbiAgICBib3JkZXI6IHNvbGlkIDNweCBibGFjaztcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAzNzBweDtcbiAgICBvYmplY3QtZml0OiBmaWxsO1xufVxuXG4vKiBDb250YWN0IHRhYiBzdHlsaW5nLiAqL1xuXG4jaGlzdUNvbnRhaW5lcixcbiNpcnFyb2lDb250YWluZXIsXG4jYW56YXRoQ29udGFpbmVyLFxuI2ZvdHVsbENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBnYXA6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG59XG5cbiNpcnFyb2lDb250YWluZXIge1xuICAgIGdhcDogNTBweDtcbn1cblxuI2FuemF0aENvbnRhaW5lciB7XG4gICAgZ2FwOiAzMHB4O1xufVxuXG4jdG9wQ29udGFjdENvbnRlbnQsXG4jYm90dG9tQ29udGFjdENvbnRlbnQge1xuICAgIGhlaWdodDogMTAwMHB4O1xuICAgIHdpZHRoOiAxMTAwcHg7XG59XG5cbiNoaXN1UGhvdG8sXG4jaXJxcm9pUGhvdG8sXG4jYW56YXRoUGhvdG8sXG4jZm90dWxsUGhvdG8ge1xuICAgIG9iamVjdC1maXQ6IGZpbGw7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDAsIDAsIDApO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4jaGlzdUluZm8sXG4jaXJxcm9pSW5mbyxcbiNhbnphdGhJbmZvLFxuI2ZvdHVsbEluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4jaGlzdU5hbWUsXG4jaXJxcm9pTmFtZSxcbiNhbnphdGhOYW1lLFxuI2ZvdHVsbE5hbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk5ZmM0O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigyMCUgMCUsIDgwJSAwJSwgMTAwJSAyMCUsIDEwMCUgODAlLCA4MCUgMTAwJSwgMjAlIDEwMCUsIDAlIDgwJSwgMCUgMjAlKTtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbiNjb250YWN0VGl0bGVDb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuI2JvdHRvbUNvbnRhY3RDb250ZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1oseURBQW1DO0lBQ25DLHdCQUF3QjtBQUM1Qjs7QUFFQSxjQUFjOztBQUVkO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7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U0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBOztJQUVJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBOzs7O0lBSUksZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTs7OztJQUlJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzRUFBc0U7SUFDdEUsMEZBQTBGO0lBQzFGLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vc3Rhci5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbn1cXG5cXG4vKiBUYWIgcGFydC4gKi9cXG5cXG4jcGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCAyMjEsIDE3LCAwLjc5NSk7XFxufVxcblxcbiN0YWJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4jaG9tZSxcXG4jbWVudSxcXG4jY29udGFjdCB7ICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxOTAsIDE5MCk7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XFxufVxcblxcbi8qIEhvbWUgY29udGVudC4gKi9cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgyMHB4O1xcbiAgICB3aWR0aDogMTMwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMTYzLCAyMjQsIDAuMyk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbiNjb250ZW50ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgNDcsIDYxLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNSU7XFxufVxcblxcbiN0b3BDb250ZW50LFxcbiNib3R0b21Db250ZW50IHtcXG4gICAgaGVpZ2h0OiAyNzBweDtcXG59XFxuXFxuI3RpdGxlQ29udGVudCB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi8qIFRpdGxlIHN0eWxpbmcuICovXFxuXFxuI3RpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAyNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAwLCAyMjcpO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogVG9wIGNvbnRlbnQgc3R5bGluZy4gKi9cXG5cXG4jdG9wQ29udGVudCA+IGRpdixcXG4jdG9wQ29udGVudCA+IGltZyB7XFxuICAgIGhlaWdodDogOTUlO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2hvdXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDE3MCwgMTUpO1xcbn1cXG5cXG4jaG91cnNUaXRsZSxcXG4jbG9jYXRpb25UaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI2hvdXJzID4gcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNsb2NhdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDE3MCwgMTUpO1xcbn1cXG5cXG4jbG9jYXRpb25UaXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiNsb2NhdGlvbkNvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuI3Jlc3RhdXJhbnRJbWFnZSB7XFxuICAgIG9iamVjdC1maXQ6IGZpbGw7XFxufVxcblxcbi8qIEJvdHRvbSBjb250ZW50IHN0eWxpbmcuICovXFxuXFxuI2JvdHRvbUNvbnRlbnQgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDk0JTtcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzb2NpYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxNzAsIDE1KTtcXG59XFxuXFxuI3NvY2lhbFRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICB3aWR0aDogMjElO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAyNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4jc29jaWFsQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3NvY2lhbENvbnRlbnQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2NSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDI1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jaW5zdGFncmFtVGl0bGUsXFxuI3R3aXR0ZXJUaXRsZSxcXG4jZmFjZWJvb2tUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuI2luc3RhZ3JhbVRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzM0FCNDtcXG59XFxuXFxuI3R3aXR0ZXJUaXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxREExRjI7XFxufVxcblxcbiNmYWNlYm9va1RpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjdCMjtcXG59XFxuXFxuI3R3aXR0ZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxufVxcblxcbiNpbnN0YWdyYW0ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcXG59XFxuXFxuLyogVGFiIHN0eWxpbmcuICovXFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaG9tZTphY3RpdmUsXFxuI21lbnU6YWN0aXZlLFxcbiNjb250YWN0OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi8qIE1lbnUgQ29udGVudCAqL1xcblxcbiNtZW51VGl0bGVDb250YWluZXIsXFxuI2NvbnRhY3RUaXRsZUNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiN0b3BNZW51Q29udGVudCxcXG4jYm90dG9tTWVudUNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG5cXG4jbWVudVRpdGxlLFxcbiNjb250YWN0VGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAwLCAyMjcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNTAlO1xcbn1cXG5cXG4jdG9wTWVudUNvbnRlbnQsXFxuI3RvcENvbnRhY3RDb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XFxufVxcblxcbiN0b3BNZW51Q29udGVudCA+IGRpdixcXG4jYm90dG9tTWVudUNvbnRlbnQgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDk1JTtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuI2JsdWVNaWxrQ29udGFpbmVyLFxcbiNyb250b0NvbnRhaW5lcixcXG4ja2F0U2FrYUNvbnRhaW5lcixcXG4jZmVsdWNpYW5LZWZ0YUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwMCU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2JsdWVNaWxrVGl0bGUsXFxuI3JvbnRvVGl0bGUsXFxuI2thdFNha2FUaXRsZSxcXG4jZmVsdWNpYW5LZWZ0YVRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigwLCAwLCAwKTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigyMCUgMCUsIDgwJSAwJSwgMTAwJSAyMCUsIDEwMCUgODAlLCA4MCUgMTAwJSwgMjAlIDEwMCUsIDAlIDgwJSwgMCUgMjAlKTtcXG59XFxuXFxuI2JsdWVNaWxrQ29udGVudCxcXG4jcm9udG9Db250ZW50LFxcbiNrYXRTYWthQ29udGVudCxcXG4jZmVsdWNpYW5LZWZ0YUNvbnRlbnQge1xcbiAgICBib3JkZXI6IHNvbGlkIDNweCBibGFjaztcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDM3MHB4O1xcbiAgICBvYmplY3QtZml0OiBmaWxsO1xcbn1cXG5cXG4vKiBDb250YWN0IHRhYiBzdHlsaW5nLiAqL1xcblxcbiNoaXN1Q29udGFpbmVyLFxcbiNpcnFyb2lDb250YWluZXIsXFxuI2FuemF0aENvbnRhaW5lcixcXG4jZm90dWxsQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XFxuXFxuI2lycXJvaUNvbnRhaW5lciB7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuI2FuemF0aENvbnRhaW5lciB7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuI3RvcENvbnRhY3RDb250ZW50LFxcbiNib3R0b21Db250YWN0Q29udGVudCB7XFxuICAgIGhlaWdodDogMTAwMHB4O1xcbiAgICB3aWR0aDogMTEwMHB4O1xcbn1cXG5cXG4jaGlzdVBob3RvLFxcbiNpcnFyb2lQaG90byxcXG4jYW56YXRoUGhvdG8sXFxuI2ZvdHVsbFBob3RvIHtcXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuI2hpc3VJbmZvLFxcbiNpcnFyb2lJbmZvLFxcbiNhbnphdGhJbmZvLFxcbiNmb3R1bGxJbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuI2hpc3VOYW1lLFxcbiNpcnFyb2lOYW1lLFxcbiNhbnphdGhOYW1lLFxcbiNmb3R1bGxOYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTlmYzQ7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDAlLCA4MCUgMCUsIDEwMCUgMjAlLCAxMDAlIDgwJSwgODAlIDEwMCUsIDIwJSAxMDAlLCAwJSA4MCUsIDAlIDIwJSk7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI2NvbnRhY3RUaXRsZUNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbiNib3R0b21Db250YWN0Q29udGVudCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RUYWIoKSB7XG5cbiAgICBjb25zdCBjb250YWN0VGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b3BDb250YWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvdHRvbkNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb250YWN0VGl0bGVDb250YWluZXIuaWQgPSAnY29udGFjdFRpdGxlQ29udGFpbmVyJztcbiAgICB0b3BDb250YWN0Q29udGVudC5pZCA9ICd0b3BDb250YWN0Q29udGVudCc7XG4gICAgYm90dG9uQ29udGFjdENvbnRlbnQuaWQgPSAnYm90dG9tQ29udGFjdENvbnRlbnQnO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGVDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wQ29udGFjdENvbnRlbnQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm90dG9uQ29udGFjdENvbnRlbnQpO1xuXG4gICAgLy8gQWRkaW5nIGNoaWxkcmVuIHRvIHRpdGxlIGNvbnRhaW5lci5cblxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RUaXRsZS5pZCA9ICdjb250YWN0VGl0bGUnO1xuICAgIGNvbnRhY3RUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdVbml2ZXJzYWwgQ29udGFjdCc7XG5cbiAgICAvLyBBZGRpbmcgY2hpbGRyZW4gdG8gdG9wIGNvbnRhY3QgY29udGFpbmVyLlxuXG4gICAgY29uc3QgaGlzdUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhpc3VQaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGhpc3VJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGlzdU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaGlzdU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBoaXN1RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaXJxcm9pQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXJxcm9pUGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpcnFyb2lJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXJxcm9pTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBpcnFyb2lOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaXJxcm9pRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBoaXN1Q29udGFpbmVyLmlkID0gJ2hpc3VDb250YWluZXInO1xuICAgIGhpc3VQaG90by5pZCA9ICdoaXN1UGhvdG8nO1xuICAgIGhpc3VJbmZvLmlkID0gJ2hpc3VJbmZvJztcbiAgICBoaXN1TmFtZS5pZCA9ICdoaXN1TmFtZSc7XG4gICAgaGlzdU51bWJlci5pZCA9ICdoaXN1TnVtYmVyJztcbiAgICBoaXN1RW1haWwuaWQgPSAnaGlzdUVtYWlsJztcbiAgICBpcnFyb2lDb250YWluZXIuaWQgPSAnaXJxcm9pQ29udGFpbmVyJztcbiAgICBpcnFyb2lQaG90by5pZCA9ICdpcnFyb2lQaG90byc7XG4gICAgaXJxcm9pSW5mby5pZCA9ICdpcnFyb2lJbmZvJztcbiAgICBpcnFyb2lOYW1lLmlkID0gJ2lycXJvaU5hbWUnO1xuICAgIGlycXJvaU51bWJlci5pZCA9ICdpcnFyb2lOdW1iZXInO1xuICAgIGlycXJvaUVtYWlsLmlkID0gJ2lycXJvaUVtYWlsJztcblxuICAgIGhpc3VOYW1lLnRleHRDb250ZW50ID0gJ0hpc3UnO1xuICAgIGhpc3VOdW1iZXIudGV4dENvbnRlbnQgPSAnNTQ3LTQzOC05MjU2JztcbiAgICBoaXN1RW1haWwudGV4dENvbnRlbnQgPSAndGhlaGlzdW1hbkB0aGVkaW5lci5jb20nO1xuICAgIGlycXJvaU5hbWUudGV4dENvbnRlbnQgPSAnSXJxcm9pJztcbiAgICBpcnFyb2lOdW1iZXIudGV4dENvbnRlbnQgPSAnNDMyLTcyNS0zNzQ1JztcbiAgICBpcnFyb2lFbWFpbC50ZXh0Q29udGVudCA9ICdtcmlycXJvaUBnYWxheHkuY29tJztcblxuICAgIGhpc3VQaG90by5zcmMgPSAnLi9pbWFnZXMvaGlzdS53ZWJwJztcbiAgICBpcnFyb2lQaG90by5zcmMgPSAnLi9pbWFnZXMvaXJxcm9pLndlYnAnO1xuXG4gICAgdG9wQ29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoaGlzdUNvbnRhaW5lcik7XG4gICAgdG9wQ29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoaXJxcm9pQ29udGFpbmVyKTtcbiAgICBoaXN1Q29udGFpbmVyLmFwcGVuZENoaWxkKGhpc3VQaG90byk7XG4gICAgaGlzdUNvbnRhaW5lci5hcHBlbmRDaGlsZChoaXN1SW5mbyk7XG4gICAgaGlzdUluZm8uYXBwZW5kQ2hpbGQoaGlzdU5hbWUpO1xuICAgIGhpc3VJbmZvLmFwcGVuZENoaWxkKGhpc3VOdW1iZXIpO1xuICAgIGhpc3VJbmZvLmFwcGVuZENoaWxkKGhpc3VFbWFpbCk7XG4gICAgaXJxcm9pQ29udGFpbmVyLmFwcGVuZENoaWxkKGlycXJvaVBob3RvKTtcbiAgICBpcnFyb2lDb250YWluZXIuYXBwZW5kQ2hpbGQoaXJxcm9pSW5mbyk7XG4gICAgaXJxcm9pSW5mby5hcHBlbmRDaGlsZChpcnFyb2lOYW1lKTtcbiAgICBpcnFyb2lJbmZvLmFwcGVuZENoaWxkKGlycXJvaU51bWJlcik7XG4gICAgaXJxcm9pSW5mby5hcHBlbmRDaGlsZChpcnFyb2lFbWFpbCk7XG5cbiAgICAvLyBBZGRpbmcgY2hpbGRyZW4gdG8gYm90dG9tIGNvbnRhY3QgY29udGFpbmVyLlxuXG4gICAgY29uc3QgYW56YXRoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYW56YXRoUGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBhbnphdGhJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYW56YXRoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBhbnphdGhOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYW56YXRoRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZm90dWxsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm90dWxsUGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBmb3R1bGxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm90dWxsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBmb3R1bGxOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZm90dWxsRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBhbnphdGhDb250YWluZXIuaWQgPSAnYW56YXRoQ29udGFpbmVyJztcbiAgICBhbnphdGhQaG90by5pZCA9ICdhbnphdGhQaG90byc7XG4gICAgYW56YXRoSW5mby5pZCA9ICdhbnphdGhJbmZvJztcbiAgICBhbnphdGhOYW1lLmlkID0gJ2FuemF0aE5hbWUnO1xuICAgIGFuemF0aE51bWJlci5pZCA9ICdhbnphdGhOdW1iZXInO1xuICAgIGFuemF0aEVtYWlsLmlkID0gJ2FuemF0aEVtYWlsJztcbiAgICBmb3R1bGxDb250YWluZXIuaWQgPSAnZm90dWxsQ29udGFpbmVyJztcbiAgICBmb3R1bGxQaG90by5pZCA9ICdmb3R1bGxQaG90byc7XG4gICAgZm90dWxsSW5mby5pZCA9ICdmb3R1bGxJbmZvJztcbiAgICBmb3R1bGxOYW1lLmlkID0gJ2ZvdHVsbE5hbWUnO1xuICAgIGZvdHVsbE51bWJlci5pZCA9ICdmb3R1bGxOdW1iZXInO1xuICAgIGZvdHVsbEVtYWlsLmlkID0gJ2ZvdHVsbEVtYWlsJztcblxuICAgIGFuemF0aE5hbWUudGV4dENvbnRlbnQgPSAnQW56YXRoJztcbiAgICBhbnphdGhOdW1iZXIudGV4dENvbnRlbnQgPSAnMzQ1LTM4NC01NjU2JztcbiAgICBhbnphdGhFbWFpbC50ZXh0Q29udGVudCA9ICdob2x5YW56YXRoQHJlbmRlci5jb20nO1xuICAgIGZvdHVsbE5hbWUudGV4dENvbnRlbnQgPSAnRm90dWxsJztcbiAgICBmb3R1bGxOdW1iZXIudGV4dENvbnRlbnQgPSAnMzQ1LTk5OS0zNDM0JztcbiAgICBmb3R1bGxFbWFpbC50ZXh0Q29udGVudCA9ICdmb3R1bGx0aGVjb25xdWVyb3JAYWxpZW4uY29tJztcblxuICAgIGFuemF0aFBob3RvLnNyYyA9ICcuL2ltYWdlcy9hbnphdGguanBnJztcbiAgICBmb3R1bGxQaG90by5zcmMgPSAnLi9pbWFnZXMvZm90dWxsLmpwZyc7XG5cbiAgICBib3R0b25Db250YWN0Q29udGVudC5hcHBlbmRDaGlsZChhbnphdGhDb250YWluZXIpO1xuICAgIGJvdHRvbkNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGZvdHVsbENvbnRhaW5lcik7XG4gICAgYW56YXRoQ29udGFpbmVyLmFwcGVuZENoaWxkKGFuemF0aFBob3RvKTtcbiAgICBhbnphdGhDb250YWluZXIuYXBwZW5kQ2hpbGQoYW56YXRoSW5mbyk7XG4gICAgYW56YXRoSW5mby5hcHBlbmRDaGlsZChhbnphdGhOYW1lKTtcbiAgICBhbnphdGhJbmZvLmFwcGVuZENoaWxkKGFuemF0aE51bWJlcik7XG4gICAgYW56YXRoSW5mby5hcHBlbmRDaGlsZChhbnphdGhFbWFpbCk7XG4gICAgZm90dWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvdHVsbFBob3RvKTtcbiAgICBmb3R1bGxDb250YWluZXIuYXBwZW5kQ2hpbGQoZm90dWxsSW5mbyk7XG4gICAgZm90dWxsSW5mby5hcHBlbmRDaGlsZChmb3R1bGxOYW1lKTtcbiAgICBmb3R1bGxJbmZvLmFwcGVuZENoaWxkKGZvdHVsbE51bWJlcik7XG4gICAgZm90dWxsSW5mby5hcHBlbmRDaGlsZChmb3R1bGxFbWFpbCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYnMoKSB7XG5cbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICB0YWJzLmlkID0gJ3RhYnMnO1xuICAgIGhvbWUuaWQgPSAnaG9tZSc7XG4gICAgbWVudS5pZCA9ICdtZW51JztcbiAgICBjb250YWN0LmlkID0gJ2NvbnRhY3QnO1xuXG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBwYWdlLmFwcGVuZENoaWxkKHRhYnMpO1xuICAgIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgdGFicy5hcHBlbmRDaGlsZChtZW51KTtcbiAgICB0YWJzLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVUYWIoKSB7XG5cbiAgICAvLyBNYWluIHBsYXRlLlxuXG4gICAgY29uc3QgdGl0bGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9wQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvdHRvbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmVzdGF1cmFudEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzb2NpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnN0YWdyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0d2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRpdGxlQ29udGVudC5pZCA9ICd0aXRsZUNvbnRlbnQnO1xuICAgIHRpdGxlLmlkID0gJ3RpdGxlJztcbiAgICB0b3BDb250ZW50LmlkID0gJ3RvcENvbnRlbnQnO1xuICAgIGJvdHRvbUNvbnRlbnQuaWQgPSAnYm90dG9tQ29udGVudCc7XG4gICAgaG91cnMuaWQgPSAnaG91cnMnO1xuICAgIHJlc3RhdXJhbnRJbWFnZS5pZCA9ICdyZXN0YXVyYW50SW1hZ2UnO1xuICAgIGxvY2F0aW9uLmlkID0gJ2xvY2F0aW9uJztcbiAgICBzb2NpYWwuaWQgPSAnc29jaWFsJztcbiAgICBpbnN0YWdyYW0uaWQgPSAnaW5zdGFncmFtJztcbiAgICB0d2l0dGVyLmlkID0gJ3R3aXR0ZXInO1xuICAgIGZhY2Vib29rLmlkID0gJ2ZhY2Vib29rJztcblxuICAgIC8vIEFkZGluZyBjaGlsZHJlbiB0byBob3VycyBjb250YWluZXIuXG5cbiAgICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbW9uZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHR1ZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgd2VkbmVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGZyaWRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzYXR1cmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzdW5kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBob3Vyc1RpdGxlLmlkID0gJ2hvdXJzVGl0bGUnO1xuICAgIG1vbmRheS5pZCA9ICdtb25kYXknO1xuICAgIHR1ZXNkYXkuaWQgPSAndHVlc2RheSc7XG4gICAgd2VkbmVzZGF5LmlkID0gJ3dlZG5lc2RheSc7XG4gICAgdGh1cnNkYXkuaWQgPSAndGh1cnNkYXknO1xuICAgIGZyaWRheS5pZCA9ICdmcmlkYXknO1xuICAgIHNhdHVyZGF5LmlkID0gJ3NhdHVyZGF5JztcbiAgICBzdW5kYXkuaWQgPSAnc3VuZGF5JztcblxuICAgIC8vIEFkZGluZyBjb250ZW50IHRvIHRoZSBob3VycyBjb250YWluZXIgZGl2cy5cblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0ludGVyZ2FsYWN0aWMgRGluZXInO1xuICAgIGhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICAgIG1vbmRheS50ZXh0Q29udGVudCA9ICdNb25kYXk6IDYgQS5NLiAtIDYgUC5NLic7XG4gICAgdHVlc2RheS50ZXh0Q29udGVudCA9ICdUdWVzZGF5OiA2IEEuTS4gLSA2IFAuTS4nO1xuICAgIHdlZG5lc2RheS50ZXh0Q29udGVudCA9ICdXZWRuZXNkYXk6IDYgQS5NLiAtIDYgUC5NLic7XG4gICAgdGh1cnNkYXkudGV4dENvbnRlbnQgPSAnVGh1cnNkYXk6IDYgQS5NLiAtIDEwIFAuTS4nO1xuICAgIGZyaWRheS50ZXh0Q29udGVudCA9ICdGcmlkYXk6IDYgQS5NLiAtIDEwIFAuTS4nO1xuICAgIHNhdHVyZGF5LnRleHRDb250ZW50ID0gJ1NhdHVyZGF5OiA4IEEuTS4gLSAxMCBQLk0uJztcbiAgICBzdW5kYXkudGV4dENvbnRlbnQgPSAnU3VuZGF5OiA4IEEuTS4gLSA4IFAuTS4nO1xuXG4gICAgLy8gQWRkaW5nIGNoaWxkcmVuIHRvIGxvY2F0aW9uIGNvbnRhaW5lci5cblxuICAgIGNvbnN0IGxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2NhdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxvY2F0aW9uVGl0bGUuaWQgPSAnbG9jYXRpb25UaXRsZSc7XG4gICAgbG9jYXRpb25Db250ZW50LmlkID0gJ2xvY2F0aW9uQ29udGVudCc7XG5cbiAgICAvLyBBZGRpbmcgY29udGVudCB0byB0aGUgbG9jYXRpb24gY29udGFpbmVyIGRpdnMuXG5cbiAgICBsb2NhdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICBsb2NhdGlvbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnMTQ0OCBQb2ludCBTdHJlZXQgNjA2MDUnO1xuXG4gICAgLy8gQWRkaW5nIGNoaWxkcmVuIHRvIHNvY2lhbCBjb250YWluZXIuXG5cbiAgICBjb25zdCBzb2NpYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNvY2lhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnN0YWdyYW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHR3aXR0ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZhY2Vib29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnN0YWdyYW1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdHdpdHRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmYWNlYm9va0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgc29jaWFsVGl0bGUuaWQgPSAnc29jaWFsVGl0bGUnO1xuICAgIHNvY2lhbENvbnRlbnQuaWQgPSAnc29jaWFsQ29udGVudCc7XG4gICAgaW5zdGFncmFtVGl0bGUuaWQgPSAnaW5zdGFncmFtVGl0bGUnO1xuICAgIHR3aXR0ZXJUaXRsZS5pZCA9ICd0d2l0dGVyVGl0bGUnO1xuICAgIGZhY2Vib29rVGl0bGUuaWQgPSAnZmFjZWJvb2tUaXRsZSc7XG4gICAgaW5zdGFncmFtQ29udGVudC5pZCA9ICdpbnN0YWdyYW1Db250ZW50JztcbiAgICB0d2l0dGVyQ29udGVudC5pZCA9ICd0d2l0dGVyQ29udGVudCc7XG4gICAgZmFjZWJvb2tDb250ZW50LmlkID0gJ2ZhY2Vib29rQ29udGVudCc7XG5cbiAgICAvLyBBZGRpbmcgY29udGVudCB0byBzb2NpYWwgY29udGFpbmVyLlxuXG4gICAgc29jaWFsVGl0bGUudGV4dENvbnRlbnQgPSAnU29jaWFsIE1lZGlhJztcbiAgICBpbnN0YWdyYW1UaXRsZS50ZXh0Q29udGVudCA9ICdJbnN0YWdyYW0nO1xuICAgIHR3aXR0ZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUd2l0dGVyJztcbiAgICBmYWNlYm9va1RpdGxlLnRleHRDb250ZW50ID0gJ0ZhY2Vib29rJztcbiAgICBpbnN0YWdyYW1Db250ZW50LnRleHRDb250ZW50ID0gJ0BpbnRlcmdhbGFjdGljZGluZXInO1xuICAgIHR3aXR0ZXJDb250ZW50LnRleHRDb250ZW50ID0gJ0BJbnRlcmdhbGF0aWNEaW5lcic7XG4gICAgZmFjZWJvb2tDb250ZW50LnRleHRDb250ZW50ID0gJ0ludGVyZ2FsYXRpYyBEaW5lcic7XG5cbiAgICAvLyBBZGRpbmcgaW1hZ2UgdG8gaW1nIGNvbnRhaW5lci5cblxuICAgIHJlc3RhdXJhbnRJbWFnZS5zcmMgPSAnLi9pbWFnZXMvdGF2ZXJuLmpwZWcnO1xuXG4gICAgLy8gVGhyZWUgY2hpbGRyZW4gdG8gY29udGVudC5cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVDb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvcENvbnRlbnQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm90dG9tQ29udGVudCk7XG5cbiAgICAvLyBGaXJzdCBjaGlsZCwgdGl0bGUuXG5cbiAgICB0aXRsZUNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy8gU2Vjb25kIGNoaWxkLCB0b3AgY29udGVudC5cblxuICAgIHRvcENvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIHRvcENvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltYWdlKTtcbiAgICB0b3BDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICAgIC8vIFRoaXJkIGNoaWxkLCBib3R0b20gY29udGVudC5cblxuICAgIGJvdHRvbUNvbnRlbnQuYXBwZW5kQ2hpbGQoc29jaWFsKTtcbiAgICBzb2NpYWwuYXBwZW5kQ2hpbGQoc29jaWFsVGl0bGUpO1xuICAgIHNvY2lhbC5hcHBlbmRDaGlsZChzb2NpYWxDb250ZW50KTtcbiAgICBzb2NpYWxDb250ZW50LmFwcGVuZENoaWxkKGluc3RhZ3JhbSk7XG4gICAgc29jaWFsQ29udGVudC5hcHBlbmRDaGlsZCh0d2l0dGVyKTtcbiAgICBzb2NpYWxDb250ZW50LmFwcGVuZENoaWxkKGZhY2Vib29rKTtcbiAgICBpbnN0YWdyYW0uYXBwZW5kQ2hpbGQoaW5zdGFncmFtVGl0bGUpO1xuICAgIGluc3RhZ3JhbS5hcHBlbmRDaGlsZChpbnN0YWdyYW1Db250ZW50KTtcbiAgICB0d2l0dGVyLmFwcGVuZENoaWxkKHR3aXR0ZXJUaXRsZSk7XG4gICAgdHdpdHRlci5hcHBlbmRDaGlsZCh0d2l0dGVyQ29udGVudCk7XG4gICAgZmFjZWJvb2suYXBwZW5kQ2hpbGQoZmFjZWJvb2tUaXRsZSk7XG4gICAgZmFjZWJvb2suYXBwZW5kQ2hpbGQoZmFjZWJvb2tDb250ZW50KTtcblxuICAgIC8vIEhvdXJzIGNvbnRhaW5lciBjaGlsZHJlbi5cblxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKG1vbmRheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQodHVlc2RheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQod2VkbmVzZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZCh0aHVyc2RheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoZnJpZGF5KTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChzYXR1cmRheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoc3VuZGF5KTtcblxuICAgIC8vIExvY2F0aW9uIGNvbnRhaW5lciBjaGlsZHJlbi5cblxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29udGVudCk7XG5cblxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51VGFiKCkge1xuXG4gICAgY29uc3QgbWVudVRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9wTWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib3R0b21NZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbWVudVRpdGxlQ29udGFpbmVyLmlkID0gJ21lbnVUaXRsZUNvbnRhaW5lcic7XG4gICAgdG9wTWVudUNvbnRlbnQuaWQgPSAndG9wTWVudUNvbnRlbnQnO1xuICAgIGJvdHRvbU1lbnVDb250ZW50LmlkID0gJ2JvdHRvbU1lbnVDb250ZW50JztcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVRpdGxlQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvcE1lbnVDb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvdHRvbU1lbnVDb250ZW50KTtcblxuICAgIC8vIEFkZGluZyBjaGlsZHJlbiB0byB0aXRsZSBjb250YWluZXIuXG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51VGl0bGUuaWQgPSAnbWVudVRpdGxlJztcbiAgICBtZW51VGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnSW50ZXJnYWxhY3RpYyBNZW51JztcblxuICAgIC8vIEFkZGluZyBjaGlsZHJlbiB0byB0b3AgbWVudSBjb250YWluZXIuXG5cbiAgICBjb25zdCBibHVlTWlsa0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJsdWVNaWxrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBibHVlTWlsa0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCByb250b0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJvbnRvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByb250b0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGJsdWVNaWxrQ29udGFpbmVyLmlkID0gJ2JsdWVNaWxrQ29udGFpbmVyJztcbiAgICBibHVlTWlsa1RpdGxlLmlkID0gJ2JsdWVNaWxrVGl0bGUnO1xuICAgIGJsdWVNaWxrQ29udGVudC5pZCA9ICdibHVlTWlsa0NvbnRlbnQnO1xuICAgIHJvbnRvQ29udGFpbmVyLmlkID0gJ3JvbnRvQ29udGFpbmVyJztcbiAgICByb250b1RpdGxlLmlkID0gJ3JvbnRvVGl0bGUnO1xuICAgIHJvbnRvQ29udGVudC5pZCA9ICdyb250b0NvbnRlbnQnO1xuXG4gICAgYmx1ZU1pbGtUaXRsZS50ZXh0Q29udGVudCA9ICdCbHVlIE1pbGsgLSAkNic7XG4gICAgcm9udG9UaXRsZS50ZXh0Q29udGVudCA9ICdSb250byAtICQyMic7XG5cbiAgICBibHVlTWlsa0NvbnRlbnQuc3JjID0gJy4vaW1hZ2VzL2JsdWVtaWxrLndlYnAnO1xuICAgIHJvbnRvQ29udGVudC5zcmMgPSAnLi9pbWFnZXMvcm9udG8ud2VicCc7XG5cbiAgICB0b3BNZW51Q29udGVudC5hcHBlbmRDaGlsZChibHVlTWlsa0NvbnRhaW5lcik7XG4gICAgdG9wTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQocm9udG9Db250YWluZXIpO1xuICAgIGJsdWVNaWxrQ29udGFpbmVyLmFwcGVuZENoaWxkKGJsdWVNaWxrVGl0bGUpO1xuICAgIGJsdWVNaWxrQ29udGFpbmVyLmFwcGVuZENoaWxkKGJsdWVNaWxrQ29udGVudCk7XG4gICAgcm9udG9Db250YWluZXIuYXBwZW5kQ2hpbGQocm9udG9UaXRsZSk7XG4gICAgcm9udG9Db250YWluZXIuYXBwZW5kQ2hpbGQocm9udG9Db250ZW50KTtcblxuICAgIC8vIEFkZGluZyBjaGlsZHJlbiB0byBib3R0b20gbWVudSBjb250YWluZXIuXG5cbiAgICBjb25zdCBrYXRTYWthQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qga2F0U2FrYVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qga2F0U2FrYUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBmZWx1Y2lhbktlZnRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmVsdWNpYW5LZWZ0YVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmVsdWNpYW5LZWZ0YUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGthdFNha2FDb250YWluZXIuaWQgPSAna2F0U2FrYUNvbnRhaW5lcic7XG4gICAga2F0U2FrYVRpdGxlLmlkID0gJ2thdFNha2FUaXRsZSc7XG4gICAga2F0U2FrYUNvbnRlbnQuaWQgPSAna2F0U2FrYUNvbnRlbnQnO1xuICAgIGZlbHVjaWFuS2VmdGFDb250YWluZXIuaWQgPSAnZmVsdWNpYW5LZWZ0YUNvbnRhaW5lcic7XG4gICAgZmVsdWNpYW5LZWZ0YVRpdGxlLmlkID0gJ2ZlbHVjaWFuS2VmdGFUaXRsZSc7XG4gICAgZmVsdWNpYW5LZWZ0YUNvbnRlbnQuaWQgPSAnZmVsdWNpYW5LZWZ0YUNvbnRlbnQnO1xuXG4gICAga2F0U2FrYVRpdGxlLnRleHRDb250ZW50ID0gJ0thdCBTYWthIC0gJDEyJztcbiAgICBmZWx1Y2lhbktlZnRhVGl0bGUudGV4dENvbnRlbnQgPSAnRmVsdWNpYW4gS2VmdGEgLSAkMTcnO1xuXG4gICAga2F0U2FrYUNvbnRlbnQuc3JjID0gJy4vaW1hZ2VzL2thdHNha2Eud2VicCc7XG4gICAgZmVsdWNpYW5LZWZ0YUNvbnRlbnQuc3JjID0gJy4vaW1hZ2VzL2ZlbHVjaWFua2VmdGEud2VicCc7XG5cbiAgICBib3R0b21NZW51Q29udGVudC5hcHBlbmRDaGlsZChrYXRTYWthQ29udGFpbmVyKTtcbiAgICBib3R0b21NZW51Q29udGVudC5hcHBlbmRDaGlsZChmZWx1Y2lhbktlZnRhQ29udGFpbmVyKTtcbiAgICBrYXRTYWthQ29udGFpbmVyLmFwcGVuZENoaWxkKGthdFNha2FUaXRsZSk7XG4gICAga2F0U2FrYUNvbnRhaW5lci5hcHBlbmRDaGlsZChrYXRTYWthQ29udGVudCk7XG4gICAgZmVsdWNpYW5LZWZ0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChmZWx1Y2lhbktlZnRhVGl0bGUpO1xuICAgIGZlbHVjaWFuS2VmdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoZmVsdWNpYW5LZWZ0YUNvbnRlbnQpO1xuXG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSFRNTCgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHBhZ2UuaWQgPSAncGFnZSc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHBhZ2UsIGNvbnRlbnQpO1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUhUTUwgfSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcbmltcG9ydCB7IGNyZWF0ZVRhYnMgfSBmcm9tICcuL2V4dHJhLWxvYWQnO1xuaW1wb3J0IHsgY3JlYXRlSG9tZVRhYiB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBjcmVhdGVNZW51VGFiIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RUYWIgfSBmcm9tICcuL2NvbnRhY3QnO1xuXG5jcmVhdGVIVE1MKCk7XG5jcmVhdGVUYWJzKCk7XG5jcmVhdGVDb250YWN0VGFiKCk7XG5jb25zb2xlLmxvZygnRXZlcnl0aGluZyBpcyB3b3JraW5nIScpO1xuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjcmVhdGVIb21lVGFiKCk7XG59KVxuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjcmVhdGVNZW51VGFiKCk7XG59KVxuXG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjcmVhdGVDb250YWN0VGFiKCk7XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9