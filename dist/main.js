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
(0,_home__WEBPACK_IMPORTED_MODULE_3__.createHomeTab)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlHQUE2QjtBQUN6RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLGFBQWEsT0FBTyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsT0FBTyxPQUFPLFlBQVksT0FBTyxhQUFhLE9BQU8sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sUUFBUSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sUUFBUSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxh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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUhPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQk87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQzVKTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUNoRk87O0FBRVA7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDb0I7QUFDQztBQUNIO0FBQ0E7QUFDTTs7QUFFN0Msc0RBQVU7QUFDVix1REFBVTtBQUNWLG9EQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFnQjtBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9leHRyYS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3N0YXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG59XG5cbi8qIFRhYiBwYXJ0LiAqL1xuXG4jcGFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDIyMSwgMTcsIDAuNzk1KTtcbn1cblxuI3RhYnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4jaG9tZSxcbiNtZW51LFxuI2NvbnRhY3QgeyAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIGhlaWdodDogNjVweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDE5MCwgMTkwKTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG5cbi8qIEhvbWUgY29udGVudC4gKi9cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogODIwcHg7XG4gICAgd2lkdGg6IDEzMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDE2MywgMjI0LCAwLjMpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBnYXA6IDQwcHg7XG59XG5cbiNjb250ZW50ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGdhcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCA0NywgNjEsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xufVxuXG4jdG9wQ29udGVudCxcbiNib3R0b21Db250ZW50IHtcbiAgICBoZWlnaHQ6IDI3MHB4O1xufVxuXG4jdGl0bGVDb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4vKiBUaXRsZSBzdHlsaW5nLiAqL1xuXG4jdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDAsIDIyNyk7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBUb3AgY29udGVudCBzdHlsaW5nLiAqL1xuXG4jdG9wQ29udGVudCA+IGRpdixcbiN0b3BDb250ZW50ID4gaW1nIHtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG4jaG91cnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMTcwLCAxNSk7XG59XG5cbiNob3Vyc1RpdGxlLFxuI2xvY2F0aW9uVGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuI2hvdXJzID4gcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2xvY2F0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMTcwLCAxNSk7XG59XG5cbiNsb2NhdGlvblRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4jbG9jYXRpb25Db250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuI3Jlc3RhdXJhbnRJbWFnZSB7XG4gICAgb2JqZWN0LWZpdDogZmlsbDtcbn1cblxuLyogQm90dG9tIGNvbnRlbnQgc3R5bGluZy4gKi9cblxuI2JvdHRvbUNvbnRlbnQgPiBkaXYge1xuICAgIGhlaWdodDogOTQlO1xuICAgIHdpZHRoOiA5OCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG59XG5cbiNzb2NpYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxNzAsIDE1KTtcbn1cblxuI3NvY2lhbFRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgd2lkdGg6IDIxJTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IDI1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuI3NvY2lhbENvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNzb2NpYWxDb250ZW50ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDY1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDI1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGdhcDogMjBweDtcbn1cblxuI2luc3RhZ3JhbVRpdGxlLFxuI3R3aXR0ZXJUaXRsZSxcbiNmYWNlYm9va1RpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuI2luc3RhZ3JhbVRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODMzQUI0O1xufVxuXG4jdHdpdHRlclRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURBMUYyO1xufVxuXG4jZmFjZWJvb2tUaXRsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjdCMjtcbn1cblxuI3R3aXR0ZXIge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuI2luc3RhZ3JhbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuLyogVGFiIHN0eWxpbmcuICovXG5cbmJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jaG9tZTphY3RpdmUsXG4jbWVudTphY3RpdmUsXG4jY29udGFjdDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi8qIE1lbnUgQ29udGVudCAqL1xuXG4jbWVudVRpdGxlQ29udGFpbmVyLFxuI2NvbnRhY3RUaXRsZUNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuI3RvcE1lbnVDb250ZW50LFxuI2JvdHRvbU1lbnVDb250ZW50IHtcbiAgICBoZWlnaHQ6IDMyMHB4O1xufVxuXG4jbWVudVRpdGxlLFxuI2NvbnRhY3RUaXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMCwgMjI3KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbn1cblxuI3RvcE1lbnVDb250ZW50LFxuI3RvcENvbnRhY3RDb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuI3RvcE1lbnVDb250ZW50ID4gZGl2LFxuI2JvdHRvbU1lbnVDb250ZW50ID4gZGl2IHtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICB3aWR0aDogNDAlO1xufVxuXG4jYmx1ZU1pbGtDb250YWluZXIsXG4jcm9udG9Db250YWluZXIsXG4ja2F0U2FrYUNvbnRhaW5lcixcbiNmZWx1Y2lhbktlZnRhQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICBnYXA6IDEwcHg7XG59XG5cbiNibHVlTWlsa1RpdGxlLFxuI3JvbnRvVGl0bGUsXG4ja2F0U2FrYVRpdGxlLFxuI2ZlbHVjaWFuS2VmdGFUaXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigwLCAwLCAwKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIwJSAwJSwgODAlIDAlLCAxMDAlIDIwJSwgMTAwJSA4MCUsIDgwJSAxMDAlLCAyMCUgMTAwJSwgMCUgODAlLCAwJSAyMCUpO1xufVxuXG4jYmx1ZU1pbGtDb250ZW50LFxuI3JvbnRvQ29udGVudCxcbiNrYXRTYWthQ29udGVudCxcbiNmZWx1Y2lhbktlZnRhQ29udGVudCB7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMzcwcHg7XG4gICAgb2JqZWN0LWZpdDogZmlsbDtcbn1cblxuLyogQ29udGFjdCB0YWIgc3R5bGluZy4gKi9cblxuI2hpc3VDb250YWluZXIsXG4jaXJxcm9pQ29udGFpbmVyLFxuI2FuemF0aENvbnRhaW5lcixcbiNmb3R1bGxDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xufVxuXG4jaXJxcm9pQ29udGFpbmVyIHtcbiAgICBnYXA6IDUwcHg7XG59XG5cbiNhbnphdGhDb250YWluZXIge1xuICAgIGdhcDogMzBweDtcbn1cblxuI3RvcENvbnRhY3RDb250ZW50LFxuI2JvdHRvbUNvbnRhY3RDb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICB3aWR0aDogMTEwMHB4O1xufVxuXG4jaGlzdVBob3RvLFxuI2lycXJvaVBob3RvLFxuI2FuemF0aFBob3RvLFxuI2ZvdHVsbFBob3RvIHtcbiAgICBvYmplY3QtZml0OiBmaWxsO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuI2hpc3VJbmZvLFxuI2lycXJvaUluZm8sXG4jYW56YXRoSW5mbyxcbiNmb3R1bGxJbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuI2hpc3VOYW1lLFxuI2lycXJvaU5hbWUsXG4jYW56YXRoTmFtZSxcbiNmb3R1bGxOYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5OWZjNDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDAlLCA4MCUgMCUsIDEwMCUgMjAlLCAxMDAlIDgwJSwgODAlIDEwMCUsIDIwJSAxMDAlLCAwJSA4MCUsIDAlIDIwJSk7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4jY29udGFjdFRpdGxlQ29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbiNib3R0b21Db250YWN0Q29udGVudCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlEQUFtQztJQUNuQyx3QkFBd0I7QUFDNUI7O0FBRUEsY0FBYzs7QUFFZDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7OztJQUdJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lB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QVM7QUFDYjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTs7OztJQUlJLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBOzs7O0lBSUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0VBQXNFO0lBQ3RFLDBGQUEwRjtJQUMxRixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3N0YXIuanBnJyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG59XFxuXFxuLyogVGFiIHBhcnQuICovXFxuXFxuI3BhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgMjIxLCAxNywgMC43OTUpO1xcbn1cXG5cXG4jdGFicyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuI2hvbWUsXFxuI21lbnUsXFxuI2NvbnRhY3QgeyAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTkwLCAxOTApO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcbn1cXG5cXG4vKiBIb21lIGNvbnRlbnQuICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MjBweDtcXG4gICAgd2lkdGg6IDEzMDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDE2MywgMjI0LCAwLjMpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4jY29udGVudCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDQ3LCA2MSwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xcbn1cXG5cXG4jdG9wQ29udGVudCxcXG4jYm90dG9tQ29udGVudCB7XFxuICAgIGhlaWdodDogMjcwcHg7XFxufVxcblxcbiN0aXRsZUNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4vKiBUaXRsZSBzdHlsaW5nLiAqL1xcblxcbiN0aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMCwgMjI3KTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIFRvcCBjb250ZW50IHN0eWxpbmcuICovXFxuXFxuI3RvcENvbnRlbnQgPiBkaXYsXFxuI3RvcENvbnRlbnQgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDk1JTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNob3VycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxNzAsIDE1KTtcXG59XFxuXFxuI2hvdXJzVGl0bGUsXFxuI2xvY2F0aW9uVGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDI1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbiNob3VycyA+IHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbG9jYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxNzAsIDE1KTtcXG59XFxuXFxuI2xvY2F0aW9uVGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4jbG9jYXRpb25Db250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiNyZXN0YXVyYW50SW1hZ2Uge1xcbiAgICBvYmplY3QtZml0OiBmaWxsO1xcbn1cXG5cXG4vKiBCb3R0b20gY29udGVudCBzdHlsaW5nLiAqL1xcblxcbiNib3R0b21Db250ZW50ID4gZGl2IHtcXG4gICAgaGVpZ2h0OiA5NCU7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc29jaWFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMTcwLCAxNSk7XFxufVxcblxcbiNzb2NpYWxUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgd2lkdGg6IDIxJTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI3NvY2lhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNzb2NpYWxDb250ZW50ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2luc3RhZ3JhbVRpdGxlLFxcbiN0d2l0dGVyVGl0bGUsXFxuI2ZhY2Vib29rVGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbiNpbnN0YWdyYW1UaXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzNBQjQ7XFxufVxcblxcbiN0d2l0dGVyVGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURBMUYyO1xcbn1cXG5cXG4jZmFjZWJvb2tUaXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjY3QjI7XFxufVxcblxcbiN0d2l0dGVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbn1cXG5cXG4jaW5zdGFncmFtIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTQwcHg7XFxufVxcblxcbi8qIFRhYiBzdHlsaW5nLiAqL1xcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hvbWU6YWN0aXZlLFxcbiNtZW51OmFjdGl2ZSxcXG4jY29udGFjdDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4vKiBNZW51IENvbnRlbnQgKi9cXG5cXG4jbWVudVRpdGxlQ29udGFpbmVyLFxcbiNjb250YWN0VGl0bGVDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jdG9wTWVudUNvbnRlbnQsXFxuI2JvdHRvbU1lbnVDb250ZW50IHtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG59XFxuXFxuI21lbnVUaXRsZSxcXG4jY29udGFjdFRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMCwgMjI3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjUwJTtcXG59XFxuXFxuI3RvcE1lbnVDb250ZW50LFxcbiN0b3BDb250YWN0Q29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xcbn1cXG5cXG4jdG9wTWVudUNvbnRlbnQgPiBkaXYsXFxuI2JvdHRvbU1lbnVDb250ZW50ID4gZGl2IHtcXG4gICAgaGVpZ2h0OiA5NSU7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbiNibHVlTWlsa0NvbnRhaW5lcixcXG4jcm9udG9Db250YWluZXIsXFxuI2thdFNha2FDb250YWluZXIsXFxuI2ZlbHVjaWFuS2VmdGFDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNibHVlTWlsa1RpdGxlLFxcbiNyb250b1RpdGxlLFxcbiNrYXRTYWthVGl0bGUsXFxuI2ZlbHVjaWFuS2VmdGFUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMCwgMCwgMCk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDAlLCA4MCUgMCUsIDEwMCUgMjAlLCAxMDAlIDgwJSwgODAlIDEwMCUsIDIwJSAxMDAlLCAwJSA4MCUsIDAlIDIwJSk7XFxufVxcblxcbiNibHVlTWlsa0NvbnRlbnQsXFxuI3JvbnRvQ29udGVudCxcXG4ja2F0U2FrYUNvbnRlbnQsXFxuI2ZlbHVjaWFuS2VmdGFDb250ZW50IHtcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggYmxhY2s7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAzNzBweDtcXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcXG59XFxuXFxuLyogQ29udGFjdCB0YWIgc3R5bGluZy4gKi9cXG5cXG4jaGlzdUNvbnRhaW5lcixcXG4jaXJxcm9pQ29udGFpbmVyLFxcbiNhbnphdGhDb250YWluZXIsXFxuI2ZvdHVsbENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxufVxcblxcbiNpcnFyb2lDb250YWluZXIge1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbiNhbnphdGhDb250YWluZXIge1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbiN0b3BDb250YWN0Q29udGVudCxcXG4jYm90dG9tQ29udGFjdENvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMDBweDtcXG4gICAgd2lkdGg6IDExMDBweDtcXG59XFxuXFxuI2hpc3VQaG90byxcXG4jaXJxcm9pUGhvdG8sXFxuI2FuemF0aFBob3RvLFxcbiNmb3R1bGxQaG90byB7XFxuICAgIG9iamVjdC1maXQ6IGZpbGw7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNoaXN1SW5mbyxcXG4jaXJxcm9pSW5mbyxcXG4jYW56YXRoSW5mbyxcXG4jZm90dWxsSW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiNoaXN1TmFtZSxcXG4jaXJxcm9pTmFtZSxcXG4jYW56YXRoTmFtZSxcXG4jZm90dWxsTmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk5ZmM0O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIwJSAwJSwgODAlIDAlLCAxMDAlIDIwJSwgMTAwJSA4MCUsIDgwJSAxMDAlLCAyMCUgMTAwJSwgMCUgODAlLCAwJSAyMCUpO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbiNjb250YWN0VGl0bGVDb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jYm90dG9tQ29udGFjdENvbnRlbnQge1xcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0VGFiKCkge1xuXG4gICAgY29uc3QgY29udGFjdFRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9wQ29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib3R0b25Db250YWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29udGFjdFRpdGxlQ29udGFpbmVyLmlkID0gJ2NvbnRhY3RUaXRsZUNvbnRhaW5lcic7XG4gICAgdG9wQ29udGFjdENvbnRlbnQuaWQgPSAndG9wQ29udGFjdENvbnRlbnQnO1xuICAgIGJvdHRvbkNvbnRhY3RDb250ZW50LmlkID0gJ2JvdHRvbUNvbnRhY3RDb250ZW50JztcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvcENvbnRhY3RDb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvdHRvbkNvbnRhY3RDb250ZW50KTtcblxuICAgIC8vIEFkZGluZyBjaGlsZHJlbiB0byB0aXRsZSBjb250YWluZXIuXG5cbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0VGl0bGUuaWQgPSAnY29udGFjdFRpdGxlJztcbiAgICBjb250YWN0VGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnVW5pdmVyc2FsIENvbnRhY3QnO1xuXG4gICAgLy8gQWRkaW5nIGNoaWxkcmVuIHRvIHRvcCBjb250YWN0IGNvbnRhaW5lci5cblxuICAgIGNvbnN0IGhpc3VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoaXN1UGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBoaXN1SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhpc3VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGhpc3VOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaGlzdUVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGlycXJvaUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlycXJvaVBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaXJxcm9pSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlycXJvaU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaXJxcm9pTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGlycXJvaUVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaGlzdUNvbnRhaW5lci5pZCA9ICdoaXN1Q29udGFpbmVyJztcbiAgICBoaXN1UGhvdG8uaWQgPSAnaGlzdVBob3RvJztcbiAgICBoaXN1SW5mby5pZCA9ICdoaXN1SW5mbyc7XG4gICAgaGlzdU5hbWUuaWQgPSAnaGlzdU5hbWUnO1xuICAgIGhpc3VOdW1iZXIuaWQgPSAnaGlzdU51bWJlcic7XG4gICAgaGlzdUVtYWlsLmlkID0gJ2hpc3VFbWFpbCc7XG4gICAgaXJxcm9pQ29udGFpbmVyLmlkID0gJ2lycXJvaUNvbnRhaW5lcic7XG4gICAgaXJxcm9pUGhvdG8uaWQgPSAnaXJxcm9pUGhvdG8nO1xuICAgIGlycXJvaUluZm8uaWQgPSAnaXJxcm9pSW5mbyc7XG4gICAgaXJxcm9pTmFtZS5pZCA9ICdpcnFyb2lOYW1lJztcbiAgICBpcnFyb2lOdW1iZXIuaWQgPSAnaXJxcm9pTnVtYmVyJztcbiAgICBpcnFyb2lFbWFpbC5pZCA9ICdpcnFyb2lFbWFpbCc7XG5cbiAgICBoaXN1TmFtZS50ZXh0Q29udGVudCA9ICdIaXN1JztcbiAgICBoaXN1TnVtYmVyLnRleHRDb250ZW50ID0gJzU0Ny00MzgtOTI1Nic7XG4gICAgaGlzdUVtYWlsLnRleHRDb250ZW50ID0gJ3RoZWhpc3VtYW5AdGhlZGluZXIuY29tJztcbiAgICBpcnFyb2lOYW1lLnRleHRDb250ZW50ID0gJ0lycXJvaSc7XG4gICAgaXJxcm9pTnVtYmVyLnRleHRDb250ZW50ID0gJzQzMi03MjUtMzc0NSc7XG4gICAgaXJxcm9pRW1haWwudGV4dENvbnRlbnQgPSAnbXJpcnFyb2lAZ2FsYXh5LmNvbSc7XG5cbiAgICBoaXN1UGhvdG8uc3JjID0gJy4vaW1hZ2VzL2hpc3Uud2VicCc7XG4gICAgaXJxcm9pUGhvdG8uc3JjID0gJy4vaW1hZ2VzL2lycXJvaS53ZWJwJztcblxuICAgIHRvcENvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGhpc3VDb250YWluZXIpO1xuICAgIHRvcENvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGlycXJvaUNvbnRhaW5lcik7XG4gICAgaGlzdUNvbnRhaW5lci5hcHBlbmRDaGlsZChoaXN1UGhvdG8pO1xuICAgIGhpc3VDb250YWluZXIuYXBwZW5kQ2hpbGQoaGlzdUluZm8pO1xuICAgIGhpc3VJbmZvLmFwcGVuZENoaWxkKGhpc3VOYW1lKTtcbiAgICBoaXN1SW5mby5hcHBlbmRDaGlsZChoaXN1TnVtYmVyKTtcbiAgICBoaXN1SW5mby5hcHBlbmRDaGlsZChoaXN1RW1haWwpO1xuICAgIGlycXJvaUNvbnRhaW5lci5hcHBlbmRDaGlsZChpcnFyb2lQaG90byk7XG4gICAgaXJxcm9pQ29udGFpbmVyLmFwcGVuZENoaWxkKGlycXJvaUluZm8pO1xuICAgIGlycXJvaUluZm8uYXBwZW5kQ2hpbGQoaXJxcm9pTmFtZSk7XG4gICAgaXJxcm9pSW5mby5hcHBlbmRDaGlsZChpcnFyb2lOdW1iZXIpO1xuICAgIGlycXJvaUluZm8uYXBwZW5kQ2hpbGQoaXJxcm9pRW1haWwpO1xuXG4gICAgLy8gQWRkaW5nIGNoaWxkcmVuIHRvIGJvdHRvbSBjb250YWN0IGNvbnRhaW5lci5cblxuICAgIGNvbnN0IGFuemF0aENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFuemF0aFBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgYW56YXRoSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFuemF0aE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYW56YXRoTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGFuemF0aEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGZvdHVsbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvdHVsbFBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgZm90dWxsSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvdHVsbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZm90dWxsTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGZvdHVsbEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgYW56YXRoQ29udGFpbmVyLmlkID0gJ2FuemF0aENvbnRhaW5lcic7XG4gICAgYW56YXRoUGhvdG8uaWQgPSAnYW56YXRoUGhvdG8nO1xuICAgIGFuemF0aEluZm8uaWQgPSAnYW56YXRoSW5mbyc7XG4gICAgYW56YXRoTmFtZS5pZCA9ICdhbnphdGhOYW1lJztcbiAgICBhbnphdGhOdW1iZXIuaWQgPSAnYW56YXRoTnVtYmVyJztcbiAgICBhbnphdGhFbWFpbC5pZCA9ICdhbnphdGhFbWFpbCc7XG4gICAgZm90dWxsQ29udGFpbmVyLmlkID0gJ2ZvdHVsbENvbnRhaW5lcic7XG4gICAgZm90dWxsUGhvdG8uaWQgPSAnZm90dWxsUGhvdG8nO1xuICAgIGZvdHVsbEluZm8uaWQgPSAnZm90dWxsSW5mbyc7XG4gICAgZm90dWxsTmFtZS5pZCA9ICdmb3R1bGxOYW1lJztcbiAgICBmb3R1bGxOdW1iZXIuaWQgPSAnZm90dWxsTnVtYmVyJztcbiAgICBmb3R1bGxFbWFpbC5pZCA9ICdmb3R1bGxFbWFpbCc7XG5cbiAgICBhbnphdGhOYW1lLnRleHRDb250ZW50ID0gJ0FuemF0aCc7XG4gICAgYW56YXRoTnVtYmVyLnRleHRDb250ZW50ID0gJzM0NS0zODQtNTY1Nic7XG4gICAgYW56YXRoRW1haWwudGV4dENvbnRlbnQgPSAnaG9seWFuemF0aEByZW5kZXIuY29tJztcbiAgICBmb3R1bGxOYW1lLnRleHRDb250ZW50ID0gJ0ZvdHVsbCc7XG4gICAgZm90dWxsTnVtYmVyLnRleHRDb250ZW50ID0gJzM0NS05OTktMzQzNCc7XG4gICAgZm90dWxsRW1haWwudGV4dENvbnRlbnQgPSAnZm90dWxsdGhlY29ucXVlcm9yQGFsaWVuLmNvbSc7XG5cbiAgICBhbnphdGhQaG90by5zcmMgPSAnLi9pbWFnZXMvYW56YXRoLmpwZyc7XG4gICAgZm90dWxsUGhvdG8uc3JjID0gJy4vaW1hZ2VzL2ZvdHVsbC5qcGcnO1xuXG4gICAgYm90dG9uQ29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoYW56YXRoQ29udGFpbmVyKTtcbiAgICBib3R0b25Db250YWN0Q29udGVudC5hcHBlbmRDaGlsZChmb3R1bGxDb250YWluZXIpO1xuICAgIGFuemF0aENvbnRhaW5lci5hcHBlbmRDaGlsZChhbnphdGhQaG90byk7XG4gICAgYW56YXRoQ29udGFpbmVyLmFwcGVuZENoaWxkKGFuemF0aEluZm8pO1xuICAgIGFuemF0aEluZm8uYXBwZW5kQ2hpbGQoYW56YXRoTmFtZSk7XG4gICAgYW56YXRoSW5mby5hcHBlbmRDaGlsZChhbnphdGhOdW1iZXIpO1xuICAgIGFuemF0aEluZm8uYXBwZW5kQ2hpbGQoYW56YXRoRW1haWwpO1xuICAgIGZvdHVsbENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3R1bGxQaG90byk7XG4gICAgZm90dWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvdHVsbEluZm8pO1xuICAgIGZvdHVsbEluZm8uYXBwZW5kQ2hpbGQoZm90dWxsTmFtZSk7XG4gICAgZm90dWxsSW5mby5hcHBlbmRDaGlsZChmb3R1bGxOdW1iZXIpO1xuICAgIGZvdHVsbEluZm8uYXBwZW5kQ2hpbGQoZm90dWxsRW1haWwpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xuXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGFicy5pZCA9ICd0YWJzJztcbiAgICBob21lLmlkID0gJ2hvbWUnO1xuICAgIG1lbnUuaWQgPSAnbWVudSc7XG4gICAgY29udGFjdC5pZCA9ICdjb250YWN0JztcblxuICAgIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0YWJzKTtcbiAgICB0YWJzLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIHRhYnMuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgdGFicy5hcHBlbmRDaGlsZChjb250YWN0KTtcblxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lVGFiKCkge1xuXG4gICAgLy8gTWFpbiBwbGF0ZS5cblxuICAgIGNvbnN0IHRpdGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib3R0b21Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJlc3RhdXJhbnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc29jaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5zdGFncmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZhY2Vib29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0aXRsZUNvbnRlbnQuaWQgPSAndGl0bGVDb250ZW50JztcbiAgICB0aXRsZS5pZCA9ICd0aXRsZSc7XG4gICAgdG9wQ29udGVudC5pZCA9ICd0b3BDb250ZW50JztcbiAgICBib3R0b21Db250ZW50LmlkID0gJ2JvdHRvbUNvbnRlbnQnO1xuICAgIGhvdXJzLmlkID0gJ2hvdXJzJztcbiAgICByZXN0YXVyYW50SW1hZ2UuaWQgPSAncmVzdGF1cmFudEltYWdlJztcbiAgICBsb2NhdGlvbi5pZCA9ICdsb2NhdGlvbic7XG4gICAgc29jaWFsLmlkID0gJ3NvY2lhbCc7XG4gICAgaW5zdGFncmFtLmlkID0gJ2luc3RhZ3JhbSc7XG4gICAgdHdpdHRlci5pZCA9ICd0d2l0dGVyJztcbiAgICBmYWNlYm9vay5pZCA9ICdmYWNlYm9vayc7XG5cbiAgICAvLyBBZGRpbmcgY2hpbGRyZW4gdG8gaG91cnMgY29udGFpbmVyLlxuXG4gICAgY29uc3QgaG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1vbmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0dWVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHdlZG5lc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0aHVyc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBmcmlkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgc2F0dXJkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgc3VuZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaG91cnNUaXRsZS5pZCA9ICdob3Vyc1RpdGxlJztcbiAgICBtb25kYXkuaWQgPSAnbW9uZGF5JztcbiAgICB0dWVzZGF5LmlkID0gJ3R1ZXNkYXknO1xuICAgIHdlZG5lc2RheS5pZCA9ICd3ZWRuZXNkYXknO1xuICAgIHRodXJzZGF5LmlkID0gJ3RodXJzZGF5JztcbiAgICBmcmlkYXkuaWQgPSAnZnJpZGF5JztcbiAgICBzYXR1cmRheS5pZCA9ICdzYXR1cmRheSc7XG4gICAgc3VuZGF5LmlkID0gJ3N1bmRheSc7XG5cbiAgICAvLyBBZGRpbmcgY29udGVudCB0byB0aGUgaG91cnMgY29udGFpbmVyIGRpdnMuXG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdJbnRlcmdhbGFjdGljIERpbmVyJztcbiAgICBob3Vyc1RpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJzJztcbiAgICBtb25kYXkudGV4dENvbnRlbnQgPSAnTW9uZGF5OiA2IEEuTS4gLSA2IFAuTS4nO1xuICAgIHR1ZXNkYXkudGV4dENvbnRlbnQgPSAnVHVlc2RheTogNiBBLk0uIC0gNiBQLk0uJztcbiAgICB3ZWRuZXNkYXkudGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5OiA2IEEuTS4gLSA2IFAuTS4nO1xuICAgIHRodXJzZGF5LnRleHRDb250ZW50ID0gJ1RodXJzZGF5OiA2IEEuTS4gLSAxMCBQLk0uJztcbiAgICBmcmlkYXkudGV4dENvbnRlbnQgPSAnRnJpZGF5OiA2IEEuTS4gLSAxMCBQLk0uJztcbiAgICBzYXR1cmRheS50ZXh0Q29udGVudCA9ICdTYXR1cmRheTogOCBBLk0uIC0gMTAgUC5NLic7XG4gICAgc3VuZGF5LnRleHRDb250ZW50ID0gJ1N1bmRheTogOCBBLk0uIC0gOCBQLk0uJztcblxuICAgIC8vIEFkZGluZyBjaGlsZHJlbiB0byBsb2NhdGlvbiBjb250YWluZXIuXG5cbiAgICBjb25zdCBsb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9jYXRpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsb2NhdGlvblRpdGxlLmlkID0gJ2xvY2F0aW9uVGl0bGUnO1xuICAgIGxvY2F0aW9uQ29udGVudC5pZCA9ICdsb2NhdGlvbkNvbnRlbnQnO1xuXG4gICAgLy8gQWRkaW5nIGNvbnRlbnQgdG8gdGhlIGxvY2F0aW9uIGNvbnRhaW5lciBkaXZzLlxuXG4gICAgbG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gICAgbG9jYXRpb25Db250ZW50LnRleHRDb250ZW50ID0gJzE0NDggUG9pbnQgU3RyZWV0IDYwNjA1JztcblxuICAgIC8vIEFkZGluZyBjaGlsZHJlbiB0byBzb2NpYWwgY29udGFpbmVyLlxuXG4gICAgY29uc3Qgc29jaWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzb2NpYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5zdGFncmFtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0d2l0dGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmYWNlYm9va1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5zdGFncmFtQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHR3aXR0ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmFjZWJvb2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgIHNvY2lhbFRpdGxlLmlkID0gJ3NvY2lhbFRpdGxlJztcbiAgICBzb2NpYWxDb250ZW50LmlkID0gJ3NvY2lhbENvbnRlbnQnO1xuICAgIGluc3RhZ3JhbVRpdGxlLmlkID0gJ2luc3RhZ3JhbVRpdGxlJztcbiAgICB0d2l0dGVyVGl0bGUuaWQgPSAndHdpdHRlclRpdGxlJztcbiAgICBmYWNlYm9va1RpdGxlLmlkID0gJ2ZhY2Vib29rVGl0bGUnO1xuICAgIGluc3RhZ3JhbUNvbnRlbnQuaWQgPSAnaW5zdGFncmFtQ29udGVudCc7XG4gICAgdHdpdHRlckNvbnRlbnQuaWQgPSAndHdpdHRlckNvbnRlbnQnO1xuICAgIGZhY2Vib29rQ29udGVudC5pZCA9ICdmYWNlYm9va0NvbnRlbnQnO1xuXG4gICAgLy8gQWRkaW5nIGNvbnRlbnQgdG8gc29jaWFsIGNvbnRhaW5lci5cblxuICAgIHNvY2lhbFRpdGxlLnRleHRDb250ZW50ID0gJ1NvY2lhbCBNZWRpYSc7XG4gICAgaW5zdGFncmFtVGl0bGUudGV4dENvbnRlbnQgPSAnSW5zdGFncmFtJztcbiAgICB0d2l0dGVyVGl0bGUudGV4dENvbnRlbnQgPSAnVHdpdHRlcic7XG4gICAgZmFjZWJvb2tUaXRsZS50ZXh0Q29udGVudCA9ICdGYWNlYm9vayc7XG4gICAgaW5zdGFncmFtQ29udGVudC50ZXh0Q29udGVudCA9ICdAaW50ZXJnYWxhY3RpY2RpbmVyJztcbiAgICB0d2l0dGVyQ29udGVudC50ZXh0Q29udGVudCA9ICdASW50ZXJnYWxhdGljRGluZXInO1xuICAgIGZhY2Vib29rQ29udGVudC50ZXh0Q29udGVudCA9ICdJbnRlcmdhbGF0aWMgRGluZXInO1xuXG4gICAgLy8gQWRkaW5nIGltYWdlIHRvIGltZyBjb250YWluZXIuXG5cbiAgICByZXN0YXVyYW50SW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL3RhdmVybi5qcGVnJztcblxuICAgIC8vIFRocmVlIGNoaWxkcmVuIHRvIGNvbnRlbnQuXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlQ29udGVudCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BDb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvdHRvbUNvbnRlbnQpO1xuXG4gICAgLy8gRmlyc3QgY2hpbGQsIHRpdGxlLlxuXG4gICAgdGl0bGVDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIC8vIFNlY29uZCBjaGlsZCwgdG9wIGNvbnRlbnQuXG5cbiAgICB0b3BDb250ZW50LmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgICB0b3BDb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWFnZSk7XG4gICAgdG9wQ29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbiAgICAvLyBUaGlyZCBjaGlsZCwgYm90dG9tIGNvbnRlbnQuXG5cbiAgICBib3R0b21Db250ZW50LmFwcGVuZENoaWxkKHNvY2lhbCk7XG4gICAgc29jaWFsLmFwcGVuZENoaWxkKHNvY2lhbFRpdGxlKTtcbiAgICBzb2NpYWwuYXBwZW5kQ2hpbGQoc29jaWFsQ29udGVudCk7XG4gICAgc29jaWFsQ29udGVudC5hcHBlbmRDaGlsZChpbnN0YWdyYW0pO1xuICAgIHNvY2lhbENvbnRlbnQuYXBwZW5kQ2hpbGQodHdpdHRlcik7XG4gICAgc29jaWFsQ29udGVudC5hcHBlbmRDaGlsZChmYWNlYm9vayk7XG4gICAgaW5zdGFncmFtLmFwcGVuZENoaWxkKGluc3RhZ3JhbVRpdGxlKTtcbiAgICBpbnN0YWdyYW0uYXBwZW5kQ2hpbGQoaW5zdGFncmFtQ29udGVudCk7XG4gICAgdHdpdHRlci5hcHBlbmRDaGlsZCh0d2l0dGVyVGl0bGUpO1xuICAgIHR3aXR0ZXIuYXBwZW5kQ2hpbGQodHdpdHRlckNvbnRlbnQpO1xuICAgIGZhY2Vib29rLmFwcGVuZENoaWxkKGZhY2Vib29rVGl0bGUpO1xuICAgIGZhY2Vib29rLmFwcGVuZENoaWxkKGZhY2Vib29rQ29udGVudCk7XG5cbiAgICAvLyBIb3VycyBjb250YWluZXIgY2hpbGRyZW4uXG5cbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1RpdGxlKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChtb25kYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHR1ZXNkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHdlZG5lc2RheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQodGh1cnNkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGZyaWRheSk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoc2F0dXJkYXkpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHN1bmRheSk7XG5cbiAgICAvLyBMb2NhdGlvbiBjb250YWluZXIgY2hpbGRyZW4uXG5cbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblRpdGxlKTtcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRlbnQpO1xuXG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudVRhYigpIHtcblxuICAgIGNvbnN0IG1lbnVUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcE1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm90dG9tTWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG1lbnVUaXRsZUNvbnRhaW5lci5pZCA9ICdtZW51VGl0bGVDb250YWluZXInO1xuICAgIHRvcE1lbnVDb250ZW50LmlkID0gJ3RvcE1lbnVDb250ZW50JztcbiAgICBib3R0b21NZW51Q29udGVudC5pZCA9ICdib3R0b21NZW51Q29udGVudCc7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVUaXRsZUNvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BNZW51Q29udGVudCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib3R0b21NZW51Q29udGVudCk7XG5cbiAgICAvLyBBZGRpbmcgY2hpbGRyZW4gdG8gdGl0bGUgY29udGFpbmVyLlxuXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVRpdGxlLmlkID0gJ21lbnVUaXRsZSc7XG4gICAgbWVudVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ0ludGVyZ2FsYWN0aWMgTWVudSc7XG5cbiAgICAvLyBBZGRpbmcgY2hpbGRyZW4gdG8gdG9wIG1lbnUgY29udGFpbmVyLlxuXG4gICAgY29uc3QgYmx1ZU1pbGtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBibHVlTWlsa1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYmx1ZU1pbGtDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3Qgcm9udG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByb250b1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgcm9udG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBibHVlTWlsa0NvbnRhaW5lci5pZCA9ICdibHVlTWlsa0NvbnRhaW5lcic7XG4gICAgYmx1ZU1pbGtUaXRsZS5pZCA9ICdibHVlTWlsa1RpdGxlJztcbiAgICBibHVlTWlsa0NvbnRlbnQuaWQgPSAnYmx1ZU1pbGtDb250ZW50JztcbiAgICByb250b0NvbnRhaW5lci5pZCA9ICdyb250b0NvbnRhaW5lcic7XG4gICAgcm9udG9UaXRsZS5pZCA9ICdyb250b1RpdGxlJztcbiAgICByb250b0NvbnRlbnQuaWQgPSAncm9udG9Db250ZW50JztcblxuICAgIGJsdWVNaWxrVGl0bGUudGV4dENvbnRlbnQgPSAnQmx1ZSBNaWxrIC0gJDYnO1xuICAgIHJvbnRvVGl0bGUudGV4dENvbnRlbnQgPSAnUm9udG8gLSAkMjInO1xuXG4gICAgYmx1ZU1pbGtDb250ZW50LnNyYyA9ICcuL2ltYWdlcy9ibHVlbWlsay53ZWJwJztcbiAgICByb250b0NvbnRlbnQuc3JjID0gJy4vaW1hZ2VzL3JvbnRvLndlYnAnO1xuXG4gICAgdG9wTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoYmx1ZU1pbGtDb250YWluZXIpO1xuICAgIHRvcE1lbnVDb250ZW50LmFwcGVuZENoaWxkKHJvbnRvQ29udGFpbmVyKTtcbiAgICBibHVlTWlsa0NvbnRhaW5lci5hcHBlbmRDaGlsZChibHVlTWlsa1RpdGxlKTtcbiAgICBibHVlTWlsa0NvbnRhaW5lci5hcHBlbmRDaGlsZChibHVlTWlsa0NvbnRlbnQpO1xuICAgIHJvbnRvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvbnRvVGl0bGUpO1xuICAgIHJvbnRvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvbnRvQ29udGVudCk7XG5cbiAgICAvLyBBZGRpbmcgY2hpbGRyZW4gdG8gYm90dG9tIG1lbnUgY29udGFpbmVyLlxuXG4gICAgY29uc3Qga2F0U2FrYUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGthdFNha2FUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGthdFNha2FDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgZmVsdWNpYW5LZWZ0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZlbHVjaWFuS2VmdGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZlbHVjaWFuS2VmdGFDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBrYXRTYWthQ29udGFpbmVyLmlkID0gJ2thdFNha2FDb250YWluZXInO1xuICAgIGthdFNha2FUaXRsZS5pZCA9ICdrYXRTYWthVGl0bGUnO1xuICAgIGthdFNha2FDb250ZW50LmlkID0gJ2thdFNha2FDb250ZW50JztcbiAgICBmZWx1Y2lhbktlZnRhQ29udGFpbmVyLmlkID0gJ2ZlbHVjaWFuS2VmdGFDb250YWluZXInO1xuICAgIGZlbHVjaWFuS2VmdGFUaXRsZS5pZCA9ICdmZWx1Y2lhbktlZnRhVGl0bGUnO1xuICAgIGZlbHVjaWFuS2VmdGFDb250ZW50LmlkID0gJ2ZlbHVjaWFuS2VmdGFDb250ZW50JztcblxuICAgIGthdFNha2FUaXRsZS50ZXh0Q29udGVudCA9ICdLYXQgU2FrYSAtICQxMic7XG4gICAgZmVsdWNpYW5LZWZ0YVRpdGxlLnRleHRDb250ZW50ID0gJ0ZlbHVjaWFuIEtlZnRhIC0gJDE3JztcblxuICAgIGthdFNha2FDb250ZW50LnNyYyA9ICcuL2ltYWdlcy9rYXRzYWthLndlYnAnO1xuICAgIGZlbHVjaWFuS2VmdGFDb250ZW50LnNyYyA9ICcuL2ltYWdlcy9mZWx1Y2lhbmtlZnRhLndlYnAnO1xuXG4gICAgYm90dG9tTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoa2F0U2FrYUNvbnRhaW5lcik7XG4gICAgYm90dG9tTWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZmVsdWNpYW5LZWZ0YUNvbnRhaW5lcik7XG4gICAga2F0U2FrYUNvbnRhaW5lci5hcHBlbmRDaGlsZChrYXRTYWthVGl0bGUpO1xuICAgIGthdFNha2FDb250YWluZXIuYXBwZW5kQ2hpbGQoa2F0U2FrYUNvbnRlbnQpO1xuICAgIGZlbHVjaWFuS2VmdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoZmVsdWNpYW5LZWZ0YVRpdGxlKTtcbiAgICBmZWx1Y2lhbktlZnRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGZlbHVjaWFuS2VmdGFDb250ZW50KTtcblxuXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhUTUwoKSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBwYWdlLmlkID0gJ3BhZ2UnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShwYWdlLCBjb250ZW50KTtcblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVIVE1MIH0gZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5pbXBvcnQgeyBjcmVhdGVUYWJzIH0gZnJvbSAnLi9leHRyYS1sb2FkJztcbmltcG9ydCB7IGNyZWF0ZUhvbWVUYWIgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgY3JlYXRlTWVudVRhYiB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0VGFiIH0gZnJvbSAnLi9jb250YWN0JztcblxuY3JlYXRlSFRNTCgpO1xuY3JlYXRlVGFicygpO1xuY3JlYXRlSG9tZVRhYigpO1xuY29uc29sZS5sb2coJ0V2ZXJ5dGhpbmcgaXMgd29ya2luZyEnKTtcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY3JlYXRlSG9tZVRhYigpO1xufSlcblxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY3JlYXRlTWVudVRhYigpO1xufSlcblxuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY3JlYXRlQ29udGFjdFRhYigpO1xufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==