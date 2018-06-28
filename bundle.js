/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/styles/game.css":
/*!*******************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/game.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".game {\\n    display: none;\\n    position: relative;\\n    font-family: \\\"Open Sans\\\",sans-serif;\\n}\\n\\n.game-startScreen {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n}\\n\\n.game-activeScreen {\\n    display: none;\\n}\\n\\n.game-start-bot {\\n    background-color: rgba(0, 0, 0, 0.7);\\n    box-shadow: 0 5px 100px rgba(243, 189, 12, 0.9);\\n    width: 10em;\\n    margin: 5em auto;\\n    padding: 1em;\\n    font-size: 1.5em;\\n    font-weight: 500;\\n    color: rgb(214, 201, 21);\\n    border: .1em solid rgb(214, 201, 21);\\n    border-radius: .3em;\\n}\\n\\n.game-start-bot:hover {\\n    background-color: rgba(0, 0, 0, 0.9);\\n    box-shadow: 0 5px 60px rgba(243, 189, 12, 0.9);\\n    color: rgb(239, 225, 23);\\n    border: .1em solid rgb(239, 225, 23);\\n}\\n\\n.wrapperLogoGame {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    width: 1200px;\\n    height: 800px;\\n    margin: 50px;\\n    background-image: url(\" + escape(__webpack_require__(/*! ../img/MainBg.png */ \"./src/img/MainBg.png\")) + \");\\n    box-shadow: 0 0 100px rgba(0,0,0,0.6);\\n    background-repeat: no-repeat;\\n    border-radius: 20px\\n}\\n\\n.game-rules {\\n    background-color: rgba(0, 0, 0, 0.2);\\n    padding: 1em;\\n    margin: 0 auto;\\n    font-size: 1.7em;\\n    text-align: center;\\n    width: 25em;\\n    height: 17em;\\n    color: rgba(214, 201, 21, 0.9);\\n    box-shadow: 0 0 120px rgb(214, 201, 21);\\n    border: .1em solid rgba(214, 201, 21, 0.8);\\n}\\n\\n.canvas {\\n    margin-top: 14em;\\n    background-size: cover;\\n    box-shadow: 0 0 150px rgba(0,0,0,0.6);\\n    border: .2em solid rgb(25, 20, 7);\\n    border-radius: .8em;\\n}\\n\\n.attack {\\n    width: 6em;\\n    position: absolute;\\n    top: 55%;\\n    left: 50%;\\n    transform: translate(-50%,-50%);\\n    background-color: rgb(128, 14, 14);\\n    box-shadow: 0 0 67px rgb(169, 55, 55);\\n    font-weight: 700;\\n    font-size: 2em;\\n    color: rgb(218, 207, 207);\\n    padding: .25em;\\n    border-radius: .2em;\\n    border: 3px solid rgb(224, 169, 169);\\n}\\n\\n.attack:hover {\\n    background-color: rgb(170, 27, 27);\\n    box-shadow: 0 0 67px rgb(241, 42, 42);\\n    border: 3px solid rgb(252, 209, 209);\\n    color: rgb(240, 231, 231);\\n}\\n\\n.pickMagic {\\n    display: none;\\n    justify-content: center;\\n    align-items: center;\\n    flex-wrap: wrap;\\n    position: absolute;\\n    top: 70%;\\n    left: 50%;\\n    transform: translate(-50%,-50%);\\n    background-color: #f4cbad;\\n    background-image: url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%23e59661' fill-opacity='0.59' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E\\\");\\n    width: 43em;\\n    height: 22em;\\n    border: .5em solid rgb(76, 44, 29);\\n    padding: 2%;\\n    box-sizing: border-box;\\n    z-index: 1;\\n}\\n\\n.magic-but {\\n    background-color: rgba(129, 104, 143, 0.93);\\n    box-shadow: 0 5px 40px rgba(0,0,0,0.9);\\n    width: 7em;\\n    font-size: 1.3em;\\n    color: rgb(234, 221, 239);\\n    padding: .35em;\\n    margin: .3em;\\n    border-radius: .2em;\\n    border: 2px solid rgb(76, 44, 29);\\n}\\n\\n.magic-but:hover {\\n    background: rgba(161, 133, 177, 0.93);\\n    color: rgb(242, 234, 245);\\n    border: 2px solid rgb(88, 52, 35);    \\n} \\n\\n.totalScore {\\n    display: none;\\n    position: absolute;\\n    top: 20%;\\n    left: 50%;\\n    transform: translate(-50%,-50%);\\n    background-color: red;\\n    width: 3em;\\n    height: 2em;\\n}\\n\\n.task {\\n    display: none;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: #f4cbad;\\n    background-image: url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%23e59661' fill-opacity='0.59' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E\\\");\\n    position: absolute;\\n    min-width: 25em;\\n    height: 20em;\\n    border: .5em solid rgb(86, 77, 101);\\n    top: 71%;\\n    left: 50%;\\n    transform: translate(-50%,-50%);\\n}\\n\\n.task-container {\\n    display: none;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.gragTask {\\n    display: none;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.cells-container {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.reorder-cell {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    border: 1px solid grey;\\n    padding: 0 10px;\\n    min-width: 60px;\\n    height: 50px;\\n    margin: 10px;\\n}\\n\\n.task p {\\n    font-size: 1em;\\n}\\n\\n.task-answer {\\n    background-color: rgb(234, 221, 239);\\n    text-align: center;\\n    border-radius: 5px;\\n    border: 2px solid rgb(35, 9, 9);\\n    box-shadow: inset 0 1px 8px rgb(63, 21, 78);\\n    font-size: 1em;\\n    font-weight: bold;\\n    color: rgb(35, 9, 9);\\n    margin-bottom: .75em;\\n    padding: .2em .2em;\\n    width: 50%;\\n}\\n\\n::placeholder { \\n    font-weight: 600;\\n    color: rgb(119, 119, 115);\\n}\\n\\n.task-but {\\n    background-color: rgba(129, 104, 143, 0.93);\\n    box-shadow: 0 5px 40px rgba(0,0,0,0.9);\\n    width: 5em;\\n    font-size: 1.5em;\\n    padding: .25em;\\n    color: rgb(234, 221, 239);\\n    margin-top: 1em;\\n    border-radius: .2em;\\n    border: 2px solid rgb(76, 44, 29);    \\n}\\n\\n.task-but:hover{\\n    background: rgba(161, 133, 177, 0.93);\\n    color: rgb(242, 234, 245);\\n    border: 2px solid rgb(88, 52, 35);   \\n}\\n\\n.nextEnemy {\\n    display: none;\\n    font-weight: 800;\\n    position: absolute;\\n    top: 65%;\\n    left: 50%;\\n    width: 6em;\\n    height: 6em;\\n    transform: translate(-50%,-50%);\\n    background: radial-gradient( rgb(83, 169, 90) 30%, rgb(119, 221, 117) 100%);\\n    box-shadow: 0 0 30px rgb(102, 206, 79);\\n    font-size: 1.1em;\\n    color: rgb(228, 234, 225);\\n    padding: .25em;\\n    margin-top: 1em;\\n    border-radius: 50%;\\n    border: 3px solid rgba(13, 14, 12, 0.13);\\n}\\n\\n.nextEnemy:hover {\\n    background: radial-gradient( rgb(83, 169, 90) 30%, rgb(164, 245, 162) 100%);\\n    box-shadow: 0 0 30px rgb(139, 241, 115);\\n    border: 3px solid rgba(13, 14, 12, 0.13);\\n    color: rgb(236, 245, 231);\\n}\\n\\n.lost-screen {\\n    display: none;\\n    position: absolute;\\n    background-color: red;\\n    width: 900px;\\n    height: 506px;\\n    top: 65%;\\n    left: 50%;\\n    transform: translate(-50%,-50%);\\n    opacity: 0.2;\\n    z-index: 100;\\n}\\n\\n.won-screen {\\n    display: none;\\n    position: absolute;\\n    background-color: green;\\n    width: 900px;\\n    height: 506px;\\n    top: 65%;\\n    left: 50%;\\n    transform: translate(-50%,-50%);\\n    opacity: 0.2;\\n    z-index: 100;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles/game.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/index.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/index.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"*:focus {\\n    outline: none;\\n}\\n\\nbody {   \\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    background: rgb(133, 2, 11);\\n    background-image: url(\" + escape(__webpack_require__(/*! ../img/skulls.png */ \"./src/img/skulls.png\")) + \");\\n    height: 100%;\\n}\\n\\n\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles/index.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/landingPage.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/landingPage.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".content {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    width: 100%;\\n    flex: 1 0 auto;\\n}\\n\\n.header {\\n    display: flex;\\n    justify-content: center;\\n    background-color: rgb(0,0,0);\\n    align-items: center;\\n    width: 100%;\\n    height: 7em;\\n    font-family: 'Cinzel', serif;\\n    user-select: none;\\n    box-shadow: 0 0 80px rgba(0,0,0, 1);\\n\\n}\\n\\n.wrapper {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    max-width: 1200px;\\n    font-family: 'Cinzel', serif;\\n}\\n\\n.header-logo {\\n    border: .4em solid rgb(106, 2, 9);\\n    border-radius: .1em;\\n}\\n\\n.navigation {\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n.nav-menu{\\n    display: flex;\\n    width: 100%;\\n    justify-content: space-around;\\n    font-size: 2em;\\n    list-style-type: none;\\n}\\n\\n.nav-item {\\n    padding: 1em 1em;\\n    border: .1em solid rgba(0,0,0, 0.9);\\n}\\n\\n.nav-item:hover {\\n    border: .1em solid #d0b99c;\\n    border-radius: .1em;\\n    background-color: rgba(224, 7, 29, 0.1);\\n}\\n\\n.nav-item a {\\n    text-decoration:none; \\n    color: #d0b99c;\\n}\\n\\n.about {\\n    font-size: 1.4em;\\n    color: #d0b99c;\\n    margin: 4em 0;\\n}\\n\\n.about-wrapper {\\n    display: flex;\\n    margin: 0 auto;\\n    flex-direction: column;\\n    text-align: center;\\n    font-weight: 900;\\n    width: 1000px;\\n    font-family: 'Cinzel', serif;\\n}\\n\\n.about h2{\\n    font-size: 2em;\\n    margin: 0;\\n}\\n\\n.screenshots-container {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: 1100px;\\n    margin: 0 auto;\\n}\\n\\n.screenshots-wrapper {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    max-width: 1200px;\\n    font-family: 'Cinzel', serif;\\n}\\n\\n.screenshots-wrapper h2{\\n    font-size: 3em;\\n    color: #d0b99c;\\n    margin: 0 0 1em;\\n}\\n\\n.left-button {\\n    transform: scale(-1, 1);\\n    cursor: pointer;\\n}\\n\\n.right-button {\\n    cursor: pointer;\\n}\\n\\n.visible-slide {\\n    display: block;\\n    margin: 10px;\\n}\\n\\n.sartGame {\\n    display: flex;\\n    justify-content: center;\\n    position: relative;\\n}\\n\\n.sartGameBut {\\n    background-color: rgb(156, 10, 22);\\n    box-shadow: inset 0 0 60px rgb(49, 7, 7);\\n    width: 7em;\\n    color: rgb(32, 11, 11);\\n    padding: .5em;\\n    font-size: 4em;\\n    margin: 2em;\\n    border: 2px solid rgb(0,0,0);\\n    border-radius: 2%;\\n    font-family: 'Cinzel', serif;\\n}\\n\\n.sartGameBut:hover{\\n    box-shadow:inset 0 0 30px rgb(49, 7, 7);  \\n}\\n\\n.game-section {\\n    display: none;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\nfooter {\\n    display: flex;\\n    justify-content: center;\\n    height: 6em;\\n    width: 100%;\\n    background-color: #d0b99c;\\n    flex-shrink: 0;\\n}\\n\\n.content-text {\\n    text-align: center;\\n    font-family: 'Cinzel', serif;\\n    width: 22em;\\n}\\n\\nfooter img{\\n    margin-left: 2em;\\n    width: 6em;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles/landingPage.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/loader.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/loader.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".loader {\\n    display: none;\\n    color: rgb(112, 15, 23);\\n    font-size: 20px;\\n    margin: 20em auto;\\n    width: 1.5em;\\n    height: 1.5em;\\n    border-radius: 50%;\\n    position: relative;\\n    text-indent: -9999em;\\n    -webkit-animation: load4 1.3s infinite linear;\\n    animation: load4 1.3s infinite linear;\\n    -webkit-transform: translateZ(0);\\n    -ms-transform: translateZ(0);\\n    transform: translateZ(0);\\n  }\\n  @-webkit-keyframes load4 {\\n    0%,\\n    100% {\\n      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\\n    }\\n    12.5% {\\n      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\\n    }\\n    25% {\\n      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\\n    }\\n    37.5% {\\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\\n    }\\n    50% {\\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\\n    }\\n    62.5% {\\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\\n    }\\n    75% {\\n      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\\n    }\\n    87.5% {\\n      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\\n    }\\n  }\\n  @keyframes load4 {\\n    0%,\\n    100% {\\n      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\\n    }\\n    12.5% {\\n      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\\n    }\\n    25% {\\n      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\\n    }\\n    37.5% {\\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\\n    }\\n    50% {\\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\\n    }\\n    62.5% {\\n      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\\n    }\\n    75% {\\n      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\\n    }\\n    87.5% {\\n      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\\n    }\\n  }\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles/loader.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/login.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/login.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".login {\\n    font-family: \\\"Open Sans\\\",sans-serif;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    margin-top: 23em;\\n    width: 15em;\\n    height: 18em;\\n    padding: 1em;\\n    border-radius: 1em;\\n    border: 2px solid rgb(0,0,0);\\n    background: rgba(112, 94, 94,0.5);\\n}\\n\\n.login h2 {\\n    margin: 0 0 1em 0;\\n}\\n.login form {\\n    display: block;\\n    width: 100%;\\n}\\n\\n.login div {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.login label {\\n    text-align: left;\\n    font-weight: 800;\\n    margin-bottom: .375em;\\n\\n}\\n\\n.login input {\\n    background-color: rgba(154, 24, 24, 0.7);\\n    border-radius: 5px;\\n    border: 2px solid rgb(0,0,0);\\n    box-shadow: inset 0 0 40px rgb(49, 7, 7);\\n    text-align: center;\\n    font-size: 1em;\\n    color: rgb(35, 9, 9);\\n    margin-bottom: .75em;\\n    padding: .2em .2em;\\n    width: 93%;\\n}\\n\\n::placeholder { \\n    font-weight: 600;\\n    color: rgb(44, 3, 54);\\n}\\n\\n\\n.login input:hover {\\n    box-shadow: inset 0 0 25px rgb(49, 7, 7);\\n}\\n\\n.login-but {\\n    background-color: rgb(156, 10, 22);\\n    box-shadow: inset 0 0 60px rgb(49, 7, 7);    \\n    width: 50%;\\n    color: rgb(32, 11, 11);\\n    padding: .5em;\\n    margin-top: .4em;\\n    border: 2px solid rgb(0,0,0);\\n    border-radius: .8em;\\n}\\n\\n.login-but:hover{\\n    box-shadow:inset 0 0 30px rgb(49, 7, 7);  \\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles/login.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/newGame.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/newGame.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".newGame {\\n    display: none;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles/newGame.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/normalize.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/normalize.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\n html {\\n    line-height: 1.15; /* 1 */\\n    -webkit-text-size-adjust: 100%; /* 2 */\\n  }\\n  \\n  /* Sections\\n     ========================================================================== */\\n  \\n  /**\\n   * Remove the margin in all browsers.\\n   */\\n  \\n  body {\\n    margin: 0;\\n  }\\n  \\n  /**\\n   * Correct the font size and margin on `h1` elements within `section` and\\n   * `article` contexts in Chrome, Firefox, and Safari.\\n   */\\n  \\n  h1 {\\n    font-size: 2em;\\n    margin: 0.67em 0;\\n  }\\n  \\n  /* Grouping content\\n     ========================================================================== */\\n  \\n  /**\\n   * 1. Add the correct box sizing in Firefox.\\n   * 2. Show the overflow in Edge and IE.\\n   */\\n  \\n  hr {\\n    box-sizing: content-box; /* 1 */\\n    height: 0; /* 1 */\\n    overflow: visible; /* 2 */\\n  }\\n  \\n  /**\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\n   * 2. Correct the odd `em` font sizing in all browsers.\\n   */\\n  \\n  pre {\\n    font-family: monospace, monospace; /* 1 */\\n    font-size: 1em; /* 2 */\\n  }\\n  \\n  /* Text-level semantics\\n     ========================================================================== */\\n  \\n  /**\\n   * Remove the gray background on active links in IE 10.\\n   */\\n  \\n  a {\\n    background-color: transparent;\\n  }\\n  \\n  /**\\n   * 1. Remove the bottom border in Chrome 57-\\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n   */\\n  \\n  abbr[title] {\\n    border-bottom: none; /* 1 */\\n    text-decoration: underline; /* 2 */\\n    text-decoration: underline dotted; /* 2 */\\n  }\\n  \\n  /**\\n   * Add the correct font weight in Chrome, Edge, and Safari.\\n   */\\n  \\n  b,\\n  strong {\\n    font-weight: bolder;\\n  }\\n  \\n  /**\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\n   * 2. Correct the odd `em` font sizing in all browsers.\\n   */\\n  \\n  code,\\n  kbd,\\n  samp {\\n    font-family: monospace, monospace; /* 1 */\\n    font-size: 1em; /* 2 */\\n  }\\n  \\n  /**\\n   * Add the correct font size in all browsers.\\n   */\\n  \\n  small {\\n    font-size: 80%;\\n  }\\n  \\n  /**\\n   * Prevent `sub` and `sup` elements from affecting the line height in\\n   * all browsers.\\n   */\\n  \\n  sub,\\n  sup {\\n    font-size: 75%;\\n    line-height: 0;\\n    position: relative;\\n    vertical-align: baseline;\\n  }\\n  \\n  sub {\\n    bottom: -0.25em;\\n  }\\n  \\n  sup {\\n    top: -0.5em;\\n  }\\n  \\n  /* Embedded content\\n     ========================================================================== */\\n  \\n  /**\\n   * Remove the border on images inside links in IE 10.\\n   */\\n  \\n  img {\\n    border-style: none;\\n  }\\n  \\n  /* Forms\\n     ========================================================================== */\\n  \\n  /**\\n   * 1. Change the font styles in all browsers.\\n   * 2. Remove the margin in Firefox and Safari.\\n   */\\n  \\n  button,\\n  input,\\n  optgroup,\\n  select,\\n  textarea {\\n    font-family: inherit; /* 1 */\\n    font-size: 100%; /* 1 */\\n    line-height: 1.15; /* 1 */\\n    margin: 0; /* 2 */\\n  }\\n  \\n  /**\\n   * Show the overflow in IE.\\n   * 1. Show the overflow in Edge.\\n   */\\n  \\n  button,\\n  input { /* 1 */\\n    overflow: visible;\\n  }\\n  \\n  /**\\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n   * 1. Remove the inheritance of text transform in Firefox.\\n   */\\n  \\n  button,\\n  select { /* 1 */\\n    text-transform: none;\\n  }\\n  \\n  /**\\n   * Correct the inability to style clickable types in iOS and Safari.\\n   */\\n  \\n  button,\\n  [type=\\\"button\\\"],\\n  [type=\\\"reset\\\"],\\n  [type=\\\"submit\\\"] {\\n    -webkit-appearance: button;\\n  }\\n  \\n  /**\\n   * Remove the inner border and padding in Firefox.\\n   */\\n  \\n  button::-moz-focus-inner,\\n  [type=\\\"button\\\"]::-moz-focus-inner,\\n  [type=\\\"reset\\\"]::-moz-focus-inner,\\n  [type=\\\"submit\\\"]::-moz-focus-inner {\\n    border-style: none;\\n    padding: 0;\\n  }\\n  \\n  /**\\n   * Restore the focus styles unset by the previous rule.\\n   */\\n  \\n  button:-moz-focusring,\\n  [type=\\\"button\\\"]:-moz-focusring,\\n  [type=\\\"reset\\\"]:-moz-focusring,\\n  [type=\\\"submit\\\"]:-moz-focusring {\\n    outline: 1px dotted ButtonText;\\n  }\\n  \\n  /**\\n   * Correct the padding in Firefox.\\n   */\\n  \\n  fieldset {\\n    padding: 0.35em 0.75em 0.625em;\\n  }\\n  \\n  /**\\n   * 1. Correct the text wrapping in Edge and IE.\\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\\n   * 3. Remove the padding so developers are not caught out when they zero out\\n   *    `fieldset` elements in all browsers.\\n   */\\n  \\n  legend {\\n    box-sizing: border-box; /* 1 */\\n    color: inherit; /* 2 */\\n    display: table; /* 1 */\\n    max-width: 100%; /* 1 */\\n    padding: 0; /* 3 */\\n    white-space: normal; /* 1 */\\n  }\\n  \\n  /**\\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n   */\\n  \\n  progress {\\n    vertical-align: baseline;\\n  }\\n  \\n  /**\\n   * Remove the default vertical scrollbar in IE 10+.\\n   */\\n  \\n  textarea {\\n    overflow: auto;\\n  }\\n  \\n  /**\\n   * 1. Add the correct box sizing in IE 10.\\n   * 2. Remove the padding in IE 10.\\n   */\\n  \\n  [type=\\\"checkbox\\\"],\\n  [type=\\\"radio\\\"] {\\n    box-sizing: border-box; /* 1 */\\n    padding: 0; /* 2 */\\n  }\\n  \\n  /**\\n   * Correct the cursor style of increment and decrement buttons in Chrome.\\n   */\\n  \\n  [type=\\\"number\\\"]::-webkit-inner-spin-button,\\n  [type=\\\"number\\\"]::-webkit-outer-spin-button {\\n    height: auto;\\n  }\\n  \\n  /**\\n   * 1. Correct the odd appearance in Chrome and Safari.\\n   * 2. Correct the outline style in Safari.\\n   */\\n  \\n  [type=\\\"search\\\"] {\\n    -webkit-appearance: textfield; /* 1 */\\n    outline-offset: -2px; /* 2 */\\n  }\\n  \\n  /**\\n   * Remove the inner padding in Chrome and Safari on macOS.\\n   */\\n  \\n  [type=\\\"search\\\"]::-webkit-search-decoration {\\n    -webkit-appearance: none;\\n  }\\n  \\n  /**\\n   * 1. Correct the inability to style clickable types in iOS and Safari.\\n   * 2. Change font properties to `inherit` in Safari.\\n   */\\n  \\n  ::-webkit-file-upload-button {\\n    -webkit-appearance: button; /* 1 */\\n    font: inherit; /* 2 */\\n  }\\n  \\n  /* Interactive\\n     ========================================================================== */\\n  \\n  /*\\n   * Add the correct display in Edge, IE 10+, and Firefox.\\n   */\\n  \\n  details {\\n    display: block;\\n  }\\n  \\n  /*\\n   * Add the correct display in all browsers.\\n   */\\n  \\n  summary {\\n    display: list-item;\\n  }\\n  \\n  /* Misc\\n     ========================================================================== */\\n  \\n  /**\\n   * Add the correct display in IE 10+.\\n   */\\n  \\n  template {\\n    display: none;\\n  }\\n  \\n  /**\\n   * Add the correct display in IE 10.\\n   */\\n  \\n  [hidden] {\\n    display: none;\\n  }\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles/normalize.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/score.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/score.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".score {\\n    display: none;\\n    flex-direction: column;\\n    /* justify-content: center; */\\n    /* align-items: center; */\\n    position: absolute;\\n    background-color: #f4cbad;\\n    background-image: url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%23e59661' fill-opacity='0.59' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E\\\");\\n    width: 25em;\\n    height: 20em;\\n    border: .5em solid rgb(86, 77, 101);\\n    top: 22.5em;\\n}\\n\\n.your-score {\\n    display: flex;\\n    /* margin-top: 8%; */\\n    flex-direction: column;\\n    align-items: center;\\n    font-family: cursive, sans-serif;\\n    font-size: 1.2em;\\n}\\n\\n.your-score h2 {\\n    margin: 0.5em;\\n}\\n\\n.table-score {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    height: 10em;\\n}\\n\\n.table-score-item {\\n    display: flex;\\n    width: 100%;\\n    justify-content: space-between;\\n}\\n\\n.scoreValue {\\n    font-size: 2em;\\n    margin-bottom: .2em;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles/score.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/AttackEnemy.js":
/*!****************************!*\
  !*** ./src/AttackEnemy.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AttackEnemy; });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n\nclass AttackEnemy {\n    constructor(ctx, img) {\n        this.ctx = ctx;\n        this.position = [340, 380];\n\n        this.enemyAttackSprites = {};\n        this.currentAttackState = 'slash ';\n        this.initAttackEnemy(img);\n\n        this.isAttack = false;\n    }\n\n    initAttackEnemy(img) {\n        const enemyAttackImage = new Image();\n        enemyAttackImage.src = img;\n        this.enemyAttackSprites['slash'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 3800, 200, 150, enemyAttackImage, 15, [0, 1, 2, 3, 4, 5, 6, 7, 8], true);\n    }\n\n    changeCurrrentAttackposition() {\n        this.position[0] = this.position[0] - 3;\n    }\n\n    changeCurrrentAttackEnemy(key) {\n        this.currentAttackState = key;\n    }\n\n    triggerAttack(callback) {\n        this.isAttack = true;\n        setTimeout(() => {\n            callback();\n            this.isAttack = false;\n            this.position = [300, 380];\n        }, 600);\n    }\n\n    update(diff) {\n        if (this.isAttack) {\n            this.enemyAttackSprites['slash'].update(diff);\n            this.changeCurrrentAttackposition();\n        }\n    }\n\n    render() {\n        if (this.isAttack) {\n            this.enemyAttackSprites['slash'].render(this.position);\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/AttackEnemy.js?");

/***/ }),

/***/ "./src/AttackHero.js":
/*!***************************!*\
  !*** ./src/AttackHero.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AttackHero; });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n\nclass AttackHero {\n    constructor(ctx, img) {\n        this.ctx = ctx;\n        this.position = [310, 400];\n\n        this.heroAttackSprites = {};\n        this.currentAttackState = 'pinkFire';\n        this.initAttackHero(img);\n\n        this.isAttack = false;\n    }\n\n    initAttackHero(img) {\n        const heroAttackImage = new Image();\n        heroAttackImage.src = img;\n        this.heroAttackSprites['pinkFire'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 10, 80, 40, heroAttackImage, 10, [0, 1, 2, 3, 4, 5], true);\n        this.heroAttackSprites['greenFire'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 80, 80, 40, heroAttackImage, 10, [0, 1, 2, 3, 4, 5], true);\n        this.heroAttackSprites['redFire'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 160, 80, 40, heroAttackImage, 10, [0, 1, 2, 3, 4, 5], true);\n        this.heroAttackSprites['fireball'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 240, 80, 40, heroAttackImage, 10, [0, 1, 2, 3, 4, 5], true);\n        this.heroAttackSprites['fireArrow'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 320, 80, 40, heroAttackImage, 10, [0], true);\n        this.heroAttackSprites['fire'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 400, 80, 40, heroAttackImage, 10, [0], true);\n        this.heroAttackSprites['fireRay'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 480, 80, 40, heroAttackImage, 10, [0], true);\n        this.heroAttackSprites['blueDrop'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 560, 80, 40, heroAttackImage, 10, [0], true);\n    }\n    changeCurrrentAttackposition() {\n        this.position[0] = this.position[0] + 4;\n    }\n\n    changeCurrrentAttackHero(key) {\n        this.currentAttackState = key;\n    }\n\n    triggerAttack(callback, attackKey) {\n        this.isAttack = true;\n        this.changeCurrrentAttackHero(attackKey);\n        setTimeout(() => {\n            callback();\n            this.isAttack = false;\n            this.position = [310, 400];\n        }, 700);\n    }\n\n    update(diff) {\n        if (this.isAttack) {\n            this.heroAttackSprites[this.currentAttackState].update(diff);\n            this.changeCurrrentAttackposition();\n        }\n    }\n\n    render() {\n        if (this.isAttack) {\n            this.heroAttackSprites[this.currentAttackState].render(this.position);\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/AttackHero.js?");

/***/ }),

/***/ "./src/Background.js":
/*!***************************!*\
  !*** ./src/Background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\nclass Background {\n    constructor(sprite, position) {\n        this.sprite = sprite;\n        this.position = position;\n    }\n\n    update(diff) {\n        this.sprite.update(diff);\n    }\n\n    render() {\n        this.sprite.render(this.position);\n    }\n}\n\n//# sourceURL=webpack:///./src/Background.js?");

/***/ }),

/***/ "./src/Enemy.js":
/*!**********************!*\
  !*** ./src/Enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n/* harmony import */ var _RandomingEnemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RandomingEnemy */ \"./src/RandomingEnemy.js\");\n/* harmony import */ var _AttackEnemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttackEnemy */ \"./src/AttackEnemy.js\");\n/* harmony import */ var _Health__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Health */ \"./src/Health.js\");\n/* harmony import */ var _EnemyName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EnemyName */ \"./src/EnemyName.js\");\n\n\n\n\n\n\nclass Enemy {\n    constructor(ctx, imgs, soundPlay) {\n        this.ctx = ctx;\n        this.soundPlay = soundPlay;\n        this.images = {\n            'idle': imgs['spriteTrollStaticImg'],\n            'die': imgs['spriteTrollDieImg'],\n            'hurt': imgs['spriteTrollHurtImg'],\n            'attack': imgs['spriteTrollAttackImg']\n        };\n        this.sprites = {};\n        this.currentState = 'idle';\n        this.isDead = false;\n        this.positions = {\n            rightLeg: [560, 325],\n            leftLeg: [595, 325],\n            rightArm: [485, 275],\n            body: [575, 255],\n            lefrArm: [630, 265],\n            head: [570, 215]\n        };\n\n        this.enemyName = new _EnemyName__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n        this.enemyHealth = new _Health__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx, [635, 15], this.enemyName.fullName);\n\n        this.randomingEnemy = new _RandomingEnemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 2);\n        this.init();\n    }\n\n    init() {\n        Object.entries(this.images).forEach(entrie => {\n            const enemyImage = new Image();\n            enemyImage.src = entrie[1];\n            this.sprites[entrie[0]] = {\n                rightLeg: new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.randomingEnemy.rightLeg, 210, 210, enemyImage, 7, [0, 1, 2, 3, 4], false),\n                leftLeg: new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.randomingEnemy.leftLeg, 210, 210, enemyImage, 7, [0, 1, 2, 3, 4], false),\n                rightArm: new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.randomingEnemy.rightArm, 210, 210, enemyImage, 7, [0, 1, 2, 3, 4], false),\n                body: new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.randomingEnemy.body, 210, 210, enemyImage, 7, [0, 1, 2, 3, 4], false),\n                lefrArm: new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.randomingEnemy.leftArm, 210, 210, enemyImage, 7, [0, 1, 2, 3, 4], false),\n                head: new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.randomingEnemy.head, 210, 210, enemyImage, 7, [0, 1, 2, 3, 4], false)\n            };\n\n            this.attackEnemy = new _AttackEnemy__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, this.images['attack']);\n        });\n        Object.values(this.sprites['idle']).forEach(value => {\n            value.isInfinite = true;\n        });\n    }\n\n    changeCurrrentEnemySprite(key) {\n        this.currentState = key;\n    }\n\n    attack(callback, attack) {\n        this.changeCurrrentEnemySprite('attack');\n        setTimeout(() => {\n            this.attackEnemy.triggerAttack(callback, attack);\n            this.changeCurrrentEnemySprite('idle');\n            this.soundPlay('cuseMe', false);\n        }, 400);\n    }\n\n    triggerHurt() {\n        this.changeCurrrentEnemySprite('hurt');\n        this.enemyHealth.triggerHealthReduce();\n        setTimeout(() => {\n            this.changeCurrrentEnemySprite('idle');\n            this.soundPlay('enemyHurt', false);\n        }, 400);\n    }\n\n    triggerDie() {\n        this.changeCurrrentEnemySprite('die');\n        this.soundPlay('enemyDead', false);\n        this.isDead = true;\n    }\n\n    update(diff) {\n        this.attackEnemy.update(diff);\n        this.enemyHealth.update(diff);\n        Object.values(this.sprites[this.currentState]).forEach(value => value.update(diff));\n\n        if (this.enemyHealth.health <= 0 && !this.isDead) {\n            this.triggerDie();\n            document.getElementById('attack').style.display = \"none\";\n            setTimeout(() => {\n                document.getElementById('nextEnemy').style.display = \"block\";\n            }, 1000);\n        }\n    }\n\n    render() {\n        this.attackEnemy.render();\n        this.enemyHealth.render();\n        Object.entries(this.sprites[this.currentState]).forEach(entrie => {\n            entrie[1].render(this.positions[entrie[0]]);\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/Enemy.js?");

/***/ }),

/***/ "./src/EnemyName.js":
/*!**************************!*\
  !*** ./src/EnemyName.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EnemyName; });\nclass EnemyName {\n    constructor() {\n        this.names = ['Crag', 'Straker', 'Sandro', 'Dace', 'Gunnar', 'Jabarkas', 'Galthran', 'Vokial', 'Xyron', 'Calh', 'Solmyr'];\n        this.characters = ['vile', 'awful', 'creepy', 'rotten', 'gruesome', 'hateful', 'horrific', 'cloying', 'nasty', 'icky'];\n        this.nouns = ['goblin', 'orc', 'troll', 'monster', 'bastard', 'warrior', 'freak', 'flayer', 'butcher', 'cannibal'];\n        this.fullName = this.generatePart(this.names) + ' ' + this.generatePart(this.characters) + ' ' + this.generatePart(this.nouns);\n    }\n\n    generatePart(arr) {\n        let rand = Math.random() * arr.length;\n        rand = Math.floor(rand);\n        return arr[rand];\n    }\n}\n\n//# sourceURL=webpack:///./src/EnemyName.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/game.css */ \"./src/styles/game.css\");\n/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_game_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_score_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/score.css */ \"./src/styles/score.css\");\n/* harmony import */ var _styles_score_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_score_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Background */ \"./src/Background.js\");\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Enemy */ \"./src/Enemy.js\");\n/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hero */ \"./src/Hero.js\");\n/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tasks */ \"./src/Tasks.js\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n\n\n\n\n\n// import AttackHero from './AttackHero';\n\n\n\nclass Game {\n    constructor(forward) {\n        this.forward = forward;\n        this.gameRules = document.getElementById('game-rules');\n        this.canvas = document.getElementById('canvas');\n        this.canvas.width = 900;\n        this.canvas.height = 506;\n        this.ctx = canvas.getContext('2d');\n        this.isStart = false;\n        this.mainLoop = this.mainLoop.bind(this);\n\n        this.initGame();\n        document.addEventListener('updateState', e => {\n            if (e.detail.images && !this.isStart) {\n                this.images = e.detail.images;\n                this.sounds = e.detail.sounds;\n                this.name = e.detail.firstName + ' ' + e.detail.lastName;\n                this.createSprites();\n                this.isStart = true;\n            }\n        });\n    }\n\n    initGame() {\n        this.pickMagic = document.getElementById('pickMagic');\n        this.nextEnemy = document.getElementById('nextEnemy');\n        this.attackButt = document.getElementById('attack');\n        this.attackButt.addEventListener('click', () => {\n            this.pickMagic.style.display = 'flex';\n        });\n\n        document.getElementById('start').addEventListener('click', () => {\n            this.soundPlay('mainSound', true);\n            document.getElementById('game-startScreen').style.display = 'none';\n            document.getElementById('game-activeScreen').style.display = 'flex';\n            this.start = Date.now();\n            this.mainLoop();\n        });\n\n        this.pickMagic.addEventListener('click', e => {\n            if (e.target.tagName === 'BUTTON') {\n                this.Task = new _Tasks__WEBPACK_IMPORTED_MODULE_5__[\"default\"](e.srcElement.id, this.Hero, this.Enemy, this.disableAtckBtn.bind(this), this.soundPlay.bind(this));\n            }\n        });\n\n        this.nextEnemy.addEventListener('click', () => {\n            this.soundPlay('enemyOK', false);\n            this.Enemy = new _Enemy__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ctx, this.images, this.soundPlay.bind(this));\n            setTimeout(() => {\n                document.getElementById('nextEnemy').style.display = 'none';\n                this.attackButt.style.display = 'block';\n            }, 100);\n        });\n\n        document.getElementById('toGame').addEventListener('click', () => {\n            this.isStart = false;\n            window.updateState();\n            document.getElementById('totalScore').innerHTML = \"0\";\n            document.getElementById('score').style.display = \"none\";\n        });\n    }\n\n    disableAtckBtn() {\n        this.attackButt.disabled = true;\n        setTimeout(() => {\n            this.attackButt.disabled = false;\n        }, 4000);\n    }\n\n    mainLoop() {\n        if (this.isStart) {\n            const now = Date.now();\n            const diff = (now - this.start) / 1000;\n            this.updateAll(diff);\n            this.renderAll();\n            this.start = now;\n            requestAnimationFrame(this.mainLoop);\n        }\n    }\n\n    soundPlay(sound, repeatSound) {\n        this.sound = new Audio();\n        this.sound.src = this.sounds[sound];\n        this.sound.volume = 0.1;\n        if (repeatSound) {\n            this.sound.loop = true;\n        }\n        this.sound.play();\n    }\n\n    createSprites() {\n        this.Hero = new _Hero__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.ctx, [190, 355], this.images, this.name, this.soundPlay.bind(this));\n        this.Enemy = new _Enemy__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ctx, this.images, this.soundPlay.bind(this));\n        const backgroundImage = new Image();\n        backgroundImage.src = this.images['bgdImg'];\n\n        this.background = new _Background__WEBPACK_IMPORTED_MODULE_2__[\"default\"](new _Sprite__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.ctx, 0, 900, 506, backgroundImage, 1, [0]), [0, 0]);\n    }\n\n    updateAll(diff) {\n        this.background.update(diff);\n        this.Hero.update(diff);\n        this.Enemy.update(diff);\n    }\n\n    renderAll() {\n        this.ctx.clearRect(0, 0, 900, 506);\n        this.background.render();\n        this.Hero.render();\n        this.Enemy.render();\n    }\n}\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/Health.js":
/*!***********************!*\
  !*** ./src/Health.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Health; });\nclass Health {\n    constructor(ctx, position, name) {\n        this.ctx = ctx;\n        this.position = position;\n        this.name = name;\n\n        this.health = 250;\n        this.speed = 1;\n\n        this.reduce = 50;\n        this.duration = 0;\n        this.makeReduce = false;\n    }\n\n    triggerHealthReduce() {\n        this.makeReduce = true;\n    }\n\n    render() {\n        this.ctx.fillStyle = \"rgb(0, 0, 0)\";\n        this.ctx.fillRect(this.position[0] - 5, this.position[1] - 5, 260, 85);\n        this.ctx.fillStyle = \"rgb(104, 71, 165)\";\n        this.ctx.fillRect(this.position[0], this.position[1] + 45, 250, 30);\n        this.ctx.fillStyle = \"rgb(214, 84, 62)\";\n        this.ctx.fillRect(this.position[0], this.position[1], 250, 40);\n        this.ctx.fillStyle = \"rgb(119, 221, 117)\";\n        this.ctx.fillRect(this.position[0], this.position[1], this.health, 40);\n        this.ctx.fillStyle = \"rgb(0, 0, 0)\";\n        this.ctx.font = \"20px cursive, sans-serif\";\n        this.ctx.fillText(`${this.name}`, this.position[0] + 10, this.position[1] + 67);\n        this.ctx.font = \"20px cursive, sans-serif\";\n        this.ctx.fillText(`${this.health}`, this.position[0] + 10, this.position[1] + 27);\n    }\n\n    update(diff) {\n        if (this.makeReduce) {\n            this.duration += this.speed * diff;\n            this.reduce = this.reduce - Math.round(this.duration);\n            this.health = this.health - Math.round(this.duration);\n            if (this.reduce <= 0) {\n                this.makeReduce = false;\n                this.duration = 0;\n                this.reduce = 50;\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/Health.js?");

/***/ }),

/***/ "./src/Hero.js":
/*!*********************!*\
  !*** ./src/Hero.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hero; });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.js\");\n/* harmony import */ var _AttackHero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttackHero */ \"./src/AttackHero.js\");\n/* harmony import */ var _Health__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Health */ \"./src/Health.js\");\n\n\n\n\nclass Hero {\n    constructor(ctx, position, imgs, name, soundPlay) {\n        this.isDead = false;\n        this.score = 0;\n\n        this.tableScoreItems = document.getElementsByClassName('table-score-item');\n\n        this.soundPlay = soundPlay;\n        this.ctx = ctx;\n        this.position = position;\n        this.heroSprites = {};\n        this.currentState = 'idle';\n        this.initHero(imgs);\n        this.heroHealth = new _Health__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, [15, 15], `${name}`);\n\n        this.records = null;\n\n        document.addEventListener('updateState', e => {\n            if (e.detail.records) {\n                this.records = e.detail.records;\n                this.updateTableScore();\n            }\n        });\n    }\n\n    saveScore(score) {\n        window.updateState({ score });\n    }\n\n    initHero(imgs) {\n        const heroImage = new Image();\n        heroImage.src = imgs['spriteKnightImg'];\n        this.heroSprites['idle'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 5, 190, 110, heroImage, 20, [0, 1, 2, 3, 4, 5, 6], true);\n        this.heroSprites['die'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 200, 190, 110, heroImage, 16, [0, 1, 2, 3, 4, 5, 6], false);\n        this.heroSprites['hurt'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 400, 190, 110, heroImage, 12, [0, 1, 2, 3, 4, 5, 6], false);\n        this.heroSprites['attack'] = new _Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 800, 190, 110, heroImage, 12, [0, 1, 2, 3, 4, 5, 6, 7], false);\n\n        this.attackHero = new _AttackHero__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, imgs['spriteEffectsImg']);\n    }\n\n    changeCurrrentHeroSprite(key) {\n        this.currentState = key;\n    }\n\n    attack(callback, attackKey) {\n        this.changeCurrrentHeroSprite('attack');\n        setTimeout(() => {\n            this.score += 10;\n            this.attackHero.triggerAttack(callback, attackKey);\n            this.changeCurrrentHeroSprite('idle');\n            this.soundPlay('heroAttack', false);\n        }, 500);\n    }\n\n    triggerHurt() {\n        this.changeCurrrentHeroSprite('hurt');\n        setTimeout(() => {\n            this.changeCurrrentHeroSprite('idle');\n            this.heroHealth.triggerHealthReduce();\n            this.soundPlay('heroHurt', false);\n        }, 400);\n    }\n\n    triggerDie() {\n        this.changeCurrrentHeroSprite('die');\n        this.soundPlay('heroDead', false);\n        this.isDead = true;\n        this.saveScore(this.score);\n    }\n\n    clearScoreTable() {\n        for (let i = 0; i < 5; i++) {\n            this.tableScoreItems[i].innerHTML = '';\n        }\n    }\n\n    updateTableScore() {\n        this.clearScoreTable();\n        const values = Object.values(this.records).map(value => {\n            return {\n                name: value.firstName + value.lastName,\n                score: value.score\n            };\n        }).sort((a, b) => {\n            if (+a.score < +b.score) {\n                return 1;\n            }\n            if (+a.score > +b.score) {\n                return -1;\n            }\n            return 0;\n        });\n        values.forEach((value, i) => {\n            const name = document.createElement('span');\n            const score = document.createElement('span');\n            name.innerHTML = values[i].name;\n            score.innerHTML = values[i].score;\n            this.tableScoreItems[i].appendChild(name);\n            this.tableScoreItems[i].appendChild(score);\n        });\n    }\n\n    update(diff) {\n        this.heroHealth.update(diff);\n        this.heroSprites[this.currentState].update(diff);\n        this.attackHero.update(diff);\n\n        if (this.heroHealth.health <= 0 && !this.isDead) {\n            this.triggerDie();\n            setTimeout(() => {\n                document.getElementById('totalScore').innerHTML = `${this.score}`;\n                document.getElementById('score').style.display = \"flex\";\n            }, 1000);\n        }\n    }\n\n    render() {\n        this.heroHealth.render();\n        this.heroSprites[this.currentState].render(this.position);\n        this.attackHero.render();\n        this.ctx.font = \"30px cursive, sans-serif\";\n        this.ctx.fillText(`Score : ${this.score}`, 382, 70);\n    }\n}\n\n//# sourceURL=webpack:///./src/Hero.js?");

/***/ }),

/***/ "./src/LandingPage.js":
/*!****************************!*\
  !*** ./src/LandingPage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LandingPage; });\n/* harmony import */ var _styles_landingPage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/landingPage.css */ \"./src/styles/landingPage.css\");\n/* harmony import */ var _styles_landingPage_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_landingPage_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass LandingPage {\n    constructor(forward) {\n\n        this.leftBut = document.getElementById('left-slide').addEventListener('click', () => this.plusDivs(-1));\n        this.rightBut = document.getElementById('right-slide').addEventListener('click', () => this.plusDivs(1));\n        this.slideIndex = 1;\n        this.startGameBut = document.getElementById('sartGameBut').addEventListener('click', () => {\n            document.getElementById('header').style.display = 'none';\n            document.getElementById('about').style.display = 'none';\n            document.getElementById('screenshots').style.display = 'none';\n            document.getElementById('sartGame').style.display = 'none';\n            document.getElementById('footer').style.display = 'none';\n            document.getElementById('game-section').style.display = 'flex';\n        });\n\n        this.showDivs(this.slideIndex);\n    }\n\n    plusDivs(number) {\n        this.showDivs(this.slideIndex += number);\n    }\n\n    showDivs(number) {\n        let slide = document.getElementsByClassName(\"slide\");\n        if (number > slide.length) {\n            this.slideIndex = 1;\n        }\n        if (number < 1) {\n            this.slideIndex = slide.length;\n        }\n        for (let i = 0; i < slide.length; i++) {\n            slide[i].style.display = \"none\";\n        }\n        slide[this.slideIndex - 1].style.display = \"block\";\n    }\n}\n\n//# sourceURL=webpack:///./src/LandingPage.js?");

/***/ }),

/***/ "./src/Login.js":
/*!**********************!*\
  !*** ./src/Login.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/login.css */ \"./src/styles/login.css\");\n/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_login_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Login {\n    constructor(forward) {\n\n        this.firstName = '';\n        this.lastName = '';\n        this.email = '';\n\n        this.contionueButton = document.getElementById('continue');\n        this.contionueEvent = this.contionueButton.addEventListener('click', () => {\n            this.checkInputs(forward);\n        });\n\n        this.firstNameInput = document.getElementById('firstName');\n        this.lastNameInput = document.getElementById('lastName');\n        this.emailInput = document.getElementById('email');\n\n        this.firstNameInputEvent = this.firstNameInput.addEventListener('change', e => {\n            this.firstName = e.target.value.trim();\n        });\n        this.lastNameInputEvent = this.lastNameInput.addEventListener('change', e => {\n            this.lastName = e.target.value.trim();\n        });\n        this.emailInputEvent = this.emailInput.addEventListener('change', e => {\n            this.email = e.target.value.trim();\n        });\n    }\n\n    checkInputs(forward) {\n        if (this.firstName && this.lastName && this.email) {\n            forward({\n                firstName: this.firstName,\n                lastName: this.lastName,\n                email: this.email,\n                preload: true\n            });\n        } else {\n            console.log('name or email is empty');\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/Login.js?");

/***/ }),

/***/ "./src/NewGame.js":
/*!************************!*\
  !*** ./src/NewGame.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NewGame; });\n/* harmony import */ var _styles_newGame_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/newGame.css */ \"./src/styles/newGame.css\");\n/* harmony import */ var _styles_newGame_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_newGame_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/loader.css */ \"./src/styles/loader.css\");\n/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_loader_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/background.png */ \"./src/img/background.png\");\n/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_background_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_hero_spriteKnight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/hero/spriteKnight.png */ \"./src/img/hero/spriteKnight.png\");\n/* harmony import */ var _img_hero_spriteKnight_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_hero_spriteKnight_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_hero_spriteEffects_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/hero/spriteEffects.png */ \"./src/img/hero/spriteEffects.png\");\n/* harmony import */ var _img_hero_spriteEffects_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_hero_spriteEffects_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _img_enemy_spriteTrollStatic_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/enemy/spriteTrollStatic.png */ \"./src/img/enemy/spriteTrollStatic.png\");\n/* harmony import */ var _img_enemy_spriteTrollStatic_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_enemy_spriteTrollStatic_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _img_enemy_spriteTrollAttack_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/enemy/spriteTrollAttack.png */ \"./src/img/enemy/spriteTrollAttack.png\");\n/* harmony import */ var _img_enemy_spriteTrollAttack_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_enemy_spriteTrollAttack_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _img_enemy_spriteTrollHurt_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/enemy/spriteTrollHurt.png */ \"./src/img/enemy/spriteTrollHurt.png\");\n/* harmony import */ var _img_enemy_spriteTrollHurt_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_enemy_spriteTrollHurt_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _img_enemy_spriteTrollDie_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/enemy/spriteTrollDie.png */ \"./src/img/enemy/spriteTrollDie.png\");\n/* harmony import */ var _img_enemy_spriteTrollDie_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_enemy_spriteTrollDie_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _sounds_hero_heroAttack_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sounds/hero/heroAttack.wav */ \"./src/sounds/hero/heroAttack.wav\");\n/* harmony import */ var _sounds_hero_heroAttack_wav__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sounds_hero_heroAttack_wav__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _sounds_hero_heroDead_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sounds/hero/heroDead.wav */ \"./src/sounds/hero/heroDead.wav\");\n/* harmony import */ var _sounds_hero_heroDead_wav__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sounds_hero_heroDead_wav__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _sounds_hero_heroHurt_wav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sounds/hero/heroHurt.wav */ \"./src/sounds/hero/heroHurt.wav\");\n/* harmony import */ var _sounds_hero_heroHurt_wav__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sounds_hero_heroHurt_wav__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _sounds_hero_forTheAlliance_wav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sounds/hero/forTheAlliance.wav */ \"./src/sounds/hero/forTheAlliance.wav\");\n/* harmony import */ var _sounds_hero_forTheAlliance_wav__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sounds_hero_forTheAlliance_wav__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _sounds_hero_asYouWish_wav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sounds/hero/asYouWish.wav */ \"./src/sounds/hero/asYouWish.wav\");\n/* harmony import */ var _sounds_hero_asYouWish_wav__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sounds_hero_asYouWish_wav__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _sounds_enemy_enemyAttack_wav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sounds/enemy/enemyAttack.wav */ \"./src/sounds/enemy/enemyAttack.wav\");\n/* harmony import */ var _sounds_enemy_enemyAttack_wav__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sounds_enemy_enemyAttack_wav__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _sounds_enemy_enemyDead_wav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sounds/enemy/enemyDead.wav */ \"./src/sounds/enemy/enemyDead.wav\");\n/* harmony import */ var _sounds_enemy_enemyDead_wav__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sounds_enemy_enemyDead_wav__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _sounds_enemy_enemyHurt_wav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sounds/enemy/enemyHurt.wav */ \"./src/sounds/enemy/enemyHurt.wav\");\n/* harmony import */ var _sounds_enemy_enemyHurt_wav__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_sounds_enemy_enemyHurt_wav__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _sounds_enemy_lokTar_wav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sounds/enemy/lokTar.wav */ \"./src/sounds/enemy/lokTar.wav\");\n/* harmony import */ var _sounds_enemy_lokTar_wav__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_sounds_enemy_lokTar_wav__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _sounds_enemy_cuseMe_wav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sounds/enemy/cuseMe.wav */ \"./src/sounds/enemy/cuseMe.wav\");\n/* harmony import */ var _sounds_enemy_cuseMe_wav__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_sounds_enemy_cuseMe_wav__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _sounds_enemy_enemyOK_wav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sounds/enemy/enemyOK.wav */ \"./src/sounds/enemy/enemyOK.wav\");\n/* harmony import */ var _sounds_enemy_enemyOK_wav__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_sounds_enemy_enemyOK_wav__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _sounds_game_mainSound_wav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sounds/game/mainSound.wav */ \"./src/sounds/game/mainSound.wav\");\n/* harmony import */ var _sounds_game_mainSound_wav__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_sounds_game_mainSound_wav__WEBPACK_IMPORTED_MODULE_20__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass NewGame {\n    constructor(forward) {\n        this.forward = forward;\n        this.loader = document.getElementById('loader');\n        this.wrapper = document.getElementById('wrapper-logo');\n        this.images = {};\n        this.sounds = {};\n\n        this.stateSubscrioption = document.addEventListener('updateState', e => {\n            if (e.detail.preload) {\n                this.loadAssets();\n            }\n        });\n    }\n\n    loadAssets() {\n        this.loader.style.display = 'block';\n        const idsImg = ['bgdImg', 'spriteKnightImg', 'spriteTrollStaticImg', 'spriteTrollAttackImg', 'spriteTrollHurtImg', 'spriteTrollDieImg', 'spriteEffectsImg'];\n        const idsSounds = ['heroAttack', 'heroDead', 'heroHurt', 'enemyAttack', 'enemyDead', 'enemyHurt', 'mainSound', 'asYouWish', 'forTheAlliance', 'lokTar', 'cuseMe', 'enemyOK'];\n        const promises = [fetch('/GameJavaScript/assets/background.png'), fetch('/GameJavaScript/assets/spriteKnight.png'), fetch('/GameJavaScript/assets/spriteTrollStatic.png'), fetch('/GameJavaScript/assets/spriteTrollAttack.png'), fetch('/GameJavaScript/assets/spriteTrollHurt.png'), fetch('/GameJavaScript/assets/spriteTrollDie.png'), fetch('/GameJavaScript/assets/spriteEffects.png')];\n        const promiseSounds = [fetch('/GameJavaScript/assets/heroAttack.wav'), fetch('/GameJavaScript/assets/heroDead.wav'), fetch('/GameJavaScript/assets/heroHurt.wav'), fetch('/GameJavaScript/assets/enemyAttack.wav'), fetch('/GameJavaScript/assets/enemyDead.wav'), fetch('/GameJavaScript/assets/enemyHurt.wav'), fetch('/GameJavaScript/assets/mainSound.wav'), fetch('/GameJavaScript/assets/asYouWish.wav'), fetch('/GameJavaScript/assets/forTheAlliance.wav'), fetch('/GameJavaScript/assets/lokTar.wav'), fetch('/GameJavaScript/assets/cuseMe.wav'), fetch('/GameJavaScript/assets/enemyOK.wav')];\n\n        Promise.all(promises).then(values => {\n            const arr = values.map(value => {\n                return value.blob();\n            });\n            return Promise.all(arr);\n        }).then(blobImages => {\n            blobImages.forEach((blob, index) => {\n                this.images[idsImg[index]] = URL.createObjectURL(blob);\n            });\n        }).then(() => {\n            return Promise.all(promiseSounds);\n        }).then(values => {\n            const arr = values.map(value => {\n                return value.blob();\n            });\n            return Promise.all(arr);\n        }).then(blobSounds => {\n            blobSounds.forEach((blob, index) => {\n                this.sounds[idsSounds[index]] = URL.createObjectURL(blob);\n            });\n        }).then(() => {\n            this.loader.style.display = 'none';\n            this.wrapper.style.display = 'none';\n            this.forward({ images: this.images, sounds: this.sounds, preload: false });\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/NewGame.js?");

/***/ }),

/***/ "./src/RandomingEnemy.js":
/*!*******************************!*\
  !*** ./src/RandomingEnemy.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RandomingEnemy; });\nclass RandomingEnemy {\n    constructor(min, max) {\n\n        this.randomEnemyForm(min, max);\n    }\n    randomNumder(min, max) {\n        let rand = min + Math.random() * (max + 1 - min);\n        return rand = Math.floor(rand);\n    }\n    randomEnemyForm(min, max) {\n        this.head = this.randomNumder(min, max) * 1260 + 10;\n        this.body = this.randomNumder(min, max) * 1260 + 215;\n        this.leftArm = this.randomNumder(min, max) * 1260 + 425;\n        this.rightArm = this.randomNumder(min, max) * 1260 + 635;\n        this.leftLeg = this.randomNumder(min, max) * 1260 + 845;\n        this.rightLeg = this.randomNumder(min, max) * 1260 + 1055;\n    }\n}\n\n//# sourceURL=webpack:///./src/RandomingEnemy.js?");

/***/ }),

/***/ "./src/Sprite.js":
/*!***********************!*\
  !*** ./src/Sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sprite; });\nclass Sprite {\n    constructor(context, width, imgWidth, imgHeight, image, speed, frames, isInfinite) {\n        this.context = context;\n        this.width = width;\n        this.imgWidth = imgWidth;\n        this.imgHeight = imgHeight;\n        this.image = image;\n        this.speed = speed;\n        this.frames = frames;\n        this.framesNum = frames.length;\n        this.duration = 0;\n\n        this.isInfinite = isInfinite;\n        this.lastFrame = frames[frames.length - 1];\n\n        this.frame = 0;\n        this.flag = true;\n    }\n\n    render(position) {\n        const roundedDuration = Math.round(this.duration);\n        if (this.flag) {\n            this.frame = this.frames[roundedDuration % this.framesNum];\n        }\n        if (!this.isInfinite && this.frame === this.lastFrame) {\n            this.flag = false;\n        }\n\n        const x = this.width;\n        const y = this.frame * this.imgHeight;\n\n        this.context.drawImage(this.image, x, y, this.imgWidth, this.imgHeight, position[0], position[1], this.imgWidth, this.imgHeight);\n    }\n\n    update(diff) {\n        this.duration += this.speed * diff;\n    }\n}\n\n//# sourceURL=webpack:///./src/Sprite.js?");

/***/ }),

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return State; });\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login */ \"./src/Login.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _NewGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewGame */ \"./src/NewGame.js\");\n\n\n\n\nclass State {\n    constructor() {\n        localStorage.removeItem('store');\n        this.state = {\n            firstName: '',\n            lastName: '',\n            score: 0,\n            email: '',\n            preload: false,\n            records: this.getRecords()\n        };\n        window.updateState = this.updateState.bind(this);\n    }\n\n    initApp() {\n\n        this.login = new _Login__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newState => {\n            this.updateState(newState);\n            this.goToScreen('login', 'newGame');\n        });\n\n        this.newGame = new _NewGame__WEBPACK_IMPORTED_MODULE_2__[\"default\"](newState => {\n            this.updateState(newState);\n            this.goToScreen('newGame', 'game');\n        });\n\n        this.game = new _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](newState => {\n            this.updateState(newState);\n            this.goToScreen('game', 'score');\n        });\n    }\n\n    goToScreen(idToHide, idToShow) {\n        document.getElementById(idToHide).style.display = \"none\";\n        document.getElementById(idToShow).style.display = \"flex\";\n    }\n\n    saveRecords() {\n        let totalScore = this.state.score;\n        if (this.state.records[this.state.email]) {\n            if (this.state.score < this.state.records[this.state.email].score) {\n                totalScore = this.state.records[this.state.email].score;\n            }\n        }\n\n        this.state.records = Object.assign(this.state.records, {\n            [this.state.email]: {\n                firstName: this.state.firstName,\n                lastName: this.state.lastName,\n                score: totalScore\n            }\n        });\n        localStorage.setItem('myStore', JSON.stringify(this.state.records));\n    }\n\n    getRecords() {\n        const store = localStorage.getItem('myStore');\n        if (store) {\n            return JSON.parse(store);\n        }\n        return {};\n    }\n\n    updateState(newState) {\n        if (newState) {\n            this.state = Object.assign(this.state, newState);\n\n            this.saveRecords();\n\n            this.updateStateEvent = new CustomEvent('updateState', { detail: this.state });\n            document.dispatchEvent(this.updateStateEvent);\n        } else {\n            this.updateStateEvent = new CustomEvent('updateState', { detail: this.state });\n            document.dispatchEvent(this.updateStateEvent);\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/State.js?");

/***/ }),

/***/ "./src/Task/DragTask.js":
/*!******************************!*\
  !*** ./src/Task/DragTask.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DragTask; });\n/* harmony import */ var _vocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vocabulary */ \"./src/Task/vocabulary.js\");\n\n\nclass DragTask {\n    constructor() {\n        this.dragStartHandler = e => this.dragStart(e);\n        this.dropHandler = e => this.drop(e);\n        this.allowDropHandler = e => this.allowDrop(e);\n\n        this.dragTask = document.getElementById('dragTaskContainer');\n        this.dragTask.addEventListener('dragstart', this.dragStartHandler);\n        this.dragTask.addEventListener('drop', this.dropHandler);\n        this.dragTask.addEventListener('dragover', this.allowDropHandler);\n\n        this.attackKey = 'fireball';\n\n        this.vocabulary = _vocabulary__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    }\n\n    init() {\n        this.dragTask.style.display = 'flex';\n        this.arrayOfCells = [];\n        this.dragElement = null;\n        let index = Math.floor(Math.random() * this.vocabulary.length);\n        this.phrase = this.vocabulary[index].word;\n        this.createField();\n    }\n\n    checkResult() {\n        const answer = this.arrayOfCells.map(cell => cell.innerHTML).join('');\n        return answer === this.phrase;\n    }\n\n    clearFileds() {\n        this.dragTask.style.display = 'none';\n        this.dragTask.removeChild(this.wordContainer);\n        this.dragTask.removeEventListener('dragstart', this.dragStartHandler);\n        this.dragTask.removeEventListener('drop', this.dropHandler);\n        this.dragTask.removeEventListener('dragover', this.allowDropHandler);\n    }\n\n    createField() {\n        this.wordContainer = document.createElement('div');\n        this.wordContainer.classList.add('cells-container');\n        let arrayOfLetters = this.phrase.split('');\n        this.shuffleArray(arrayOfLetters);\n        arrayOfLetters.forEach(item => {\n            let cell = document.createElement('div');\n            cell.classList.add('reorder-cell');\n            cell.textContent = item;\n            this.wordContainer.appendChild(cell);\n            cell.setAttribute('draggable', true);\n            this.arrayOfCells.push(cell);\n        });\n        this.dragTask.appendChild(this.wordContainer);\n    }\n\n    shuffleArray(array) {\n        let i = array.length - 1;\n        for (i; i > 0; i--) {\n            let j = Math.floor(Math.random() * (i + 1));\n            [array[i], array[j]] = [array[j], array[i]];\n        }\n    }\n\n    allowDrop(e) {\n        e.preventDefault();\n    }\n\n    dragStart(e) {\n        this.dragElement = e.target;\n    }\n\n    drop(e) {\n        e.preventDefault();\n        if (e.target.classList.contains('reorder-cell') && this.dragElement.classList.contains('reorder-cell')) {\n            let letter = e.target.textContent;\n            e.target.textContent = this.dragElement.textContent;\n            this.dragElement.textContent = letter;\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/Task/DragTask.js?");

/***/ }),

/***/ "./src/Task/ListenningTask.js":
/*!************************************!*\
  !*** ./src/Task/ListenningTask.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListenningTask; });\n/* harmony import */ var _vocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vocabulary */ \"./src/Task/vocabulary.js\");\n\n\n\nclass ListenningTask {\n    constructor() {\n        this.speechSynt = window.speechSynthesis;\n        this.listenningTask = document.getElementById('listenningTaskContainer');\n        this.playBut = document.getElementById('listen-button');\n        this.taskAnswer = document.getElementById('listen-answer');\n        this.vocabulary = _vocabulary__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        this.handleClick = this.playWord.bind(this);\n        this.playBut.addEventListener('click', this.handleClick);\n\n        this.attackKey = 'fireArrow';\n    }\n\n    init() {\n        this.listenningTask.style.display = 'flex';\n        let index = Math.floor(Math.random() * this.vocabulary.length);\n        this.word = this.vocabulary[index].word;\n    }\n\n    playWord() {\n        this.speech = new SpeechSynthesisUtterance(this.word);\n        this.voices = this.speechSynt.getVoices();\n        this.speech.voice = this.voices[2];\n        this.speechSynt.speak(this.speech);\n        console.log(1);\n    }\n\n    clearFileds() {\n        this.playBut.removeEventListener('click', this.handleClick);\n        this.listenningTask.style.display = 'none';\n        this.taskAnswer.value = '';\n    }\n\n    checkResult() {\n        let answer = this.taskAnswer.value.toLowerCase();\n        if (answer === this.word) {\n            return true;\n        } else return false;\n    }\n}\n\n//# sourceURL=webpack:///./src/Task/ListenningTask.js?");

/***/ }),

/***/ "./src/Task/MathTask.js":
/*!******************************!*\
  !*** ./src/Task/MathTask.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MathTask; });\nclass MathTask {\n    constructor(min, max) {\n        this.mathTask = document.getElementById('mathTaskContainer');\n\n        this.condition = document.getElementById('mathTask-condition');\n        this.taskAnswer = document.getElementById('mathTask-answer');\n\n        this.attackKey = 'pinkFire';\n        this.operators = ['+', '-', '*', '/'];\n        this.firstOperand = this.generateRandomInteger(min, max);\n        this.secondOperand = this.generateRandomInteger(min, max);\n        this.generateOperator();\n        this.generateResult(this.operator);\n        this.conditionText = `${this.firstOperand} ${this.operator} ${this.secondOperand}`;\n    }\n\n    init() {\n        this.mathTask.style.display = 'flex';\n        this.condition.innerHTML = this.conditionText;\n    }\n\n    checkResult() {\n        return +this.taskAnswer.value === this.result;\n    }\n\n    clearFileds() {\n        this.mathTask.style.display = 'none';\n        this.condition.innerHTML = '';\n        this.taskAnswer.value = '';\n    }\n\n    generateRandomInteger(min, max) {\n        let rand = min + Math.random() * (max + 1 - min);\n        return rand = Math.floor(rand);\n    }\n\n    generateOperator() {\n        this.operator = this.operators[this.generateRandomInteger(0, 3)];\n        if (this.operator === '/') {\n            this.firstOperand = this.firstOperand * this.secondOperand;\n        }\n    }\n\n    generateResult(operator) {\n        switch (operator) {\n            case '-':\n                this.result = this.firstOperand - this.secondOperand;\n                break;\n            case '+':\n                this.result = this.firstOperand + this.secondOperand;\n                break;\n            case '*':\n                this.result = this.firstOperand * this.secondOperand;\n                break;\n            case '/':\n                this.result = this.firstOperand / this.secondOperand;\n                break;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/Task/MathTask.js?");

/***/ }),

/***/ "./src/Task/TranslationTask.js":
/*!*************************************!*\
  !*** ./src/Task/TranslationTask.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TranslationTask; });\n/* harmony import */ var _vocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vocabulary */ \"./src/Task/vocabulary.js\");\n\n\nclass TranslationTask {\n    constructor() {\n        this.translationTask = document.getElementById('translationTaskContainer');\n        this.condition = document.getElementById('translation-condition');\n        this.taskAnswer = document.getElementById('translation-answer');\n\n        this.vocabulary = _vocabulary__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n        this.attackKey = 'greenFire';\n    }\n\n    init() {\n        this.translationTask.style.display = 'flex';\n        let index = Math.floor(Math.random() * this.vocabulary.length);\n        this.word = this.vocabulary[index].word;\n        this.translations = this.vocabulary[index].translation;\n        this.condition.innerHTML = this.word.toUpperCase();\n    }\n\n    clearFileds() {\n        this.translationTask.style.display = 'none';\n        this.condition.innerHTML = '';\n        this.taskAnswer.value = '';\n    }\n\n    checkResult() {\n        this.answer = this.taskAnswer.value.toLowerCase();\n        if (this.translations.indexOf(this.answer) !== -1) {\n            return true;\n        } else return false;\n    }\n}\n\n//# sourceURL=webpack:///./src/Task/TranslationTask.js?");

/***/ }),

/***/ "./src/Task/vocabulary.js":
/*!********************************!*\
  !*** ./src/Task/vocabulary.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n    word: 'children',\n    translation: ['дети', 'ребята']\n}, {\n    word: 'kitten',\n    translation: ['котенок']\n}, {\n    word: 'number',\n    translation: ['номер', 'количество', 'число', 'цифра']\n}, {\n    word: 'puppy',\n    translation: ['молокосос', 'щенок', 'молодой', 'юнец']\n}, {\n    word: 'house',\n    translation: ['дом', 'здание', 'жилище', 'семья', 'домик', 'постройка']\n}]);\n\n//# sourceURL=webpack:///./src/Task/vocabulary.js?");

/***/ }),

/***/ "./src/Tasks.js":
/*!**********************!*\
  !*** ./src/Tasks.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tasks; });\n/* harmony import */ var _Task_MathTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task/MathTask */ \"./src/Task/MathTask.js\");\n/* harmony import */ var _Task_DragTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task/DragTask */ \"./src/Task/DragTask.js\");\n/* harmony import */ var _Task_TranslationTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task/TranslationTask */ \"./src/Task/TranslationTask.js\");\n/* harmony import */ var _Task_ListenningTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task/ListenningTask */ \"./src/Task/ListenningTask.js\");\n\n\n\n\n\nclass Tasks {\n    constructor(id, hero, enemy, callback, soundPlay) {\n        this.soundPlay = soundPlay;\n\n        switch (id) {\n            case \"mathTask\":\n                this.currentTask = new _Task_MathTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, 10);\n                break;\n            case \"dragTask\":\n                this.currentTask = new _Task_DragTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n                break;\n            case \"translationTask\":\n                this.currentTask = new _Task_TranslationTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n                break;\n            case \"listenningTask\":\n                this.currentTask = new _Task_ListenningTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n                break;\n            default:\n                this.currentTask = new _Task_MathTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, 10);\n        }\n\n        this.disableAtckBtn = callback;\n        this.task = document.getElementById('task');\n\n        this.acceptTaskButton = document.getElementById('accept-task');\n        this.lostScreen = document.getElementById('lost-screen');\n        this.wonScreen = document.getElementById('won-screen');\n        this.pickMagic = document.getElementById('pickMagic');\n\n        this.init(this.currentTask, hero, enemy);\n    }\n\n    init(currentTask, hero, enemy) {\n        currentTask.init();\n        this.heroAttackKey = currentTask.attackKey;\n        this.task.style.display = 'flex';\n        this.pickMagic.style.display = 'none';\n\n        this.temp = (hero, enemy) => {\n            this.disableAtckBtn();\n            this.checkResult.call(this, hero, enemy);\n        };\n\n        this.handleClick = this.temp.bind(this, hero, enemy);\n\n        this.acceptTaskButton.addEventListener('click', this.handleClick);\n    }\n\n    checkResult(hero, enemy) {\n        if (this.currentTask.checkResult()) {\n            this.task.style.display = 'none';\n            this.wonScreen.style.display = 'block';\n            this.soundPlay('forTheAlliance', false);\n            setTimeout(() => {\n                this.wonScreen.style.display = 'none';\n                hero.attack(enemy.triggerHurt.bind(enemy), this.heroAttackKey);\n            }, 500);\n        } else {\n            this.task.style.display = 'none';\n            this.lostScreen.style.display = 'block';\n            this.soundPlay('lokTar', false);\n            setTimeout(() => {\n                this.lostScreen.style.display = 'none';\n                enemy.attack(hero.triggerHurt.bind(hero));\n            }, 500);\n        }\n\n        this.currentTask.clearFileds();\n\n        this.acceptTaskButton.removeEventListener('click', this.handleClick);\n    }\n\n}\n\n//# sourceURL=webpack:///./src/Tasks.js?");

/***/ }),

/***/ "./src/img/MainBg.png":
/*!****************************!*\
  !*** ./src/img/MainBg.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/MainBg.png\";\n\n//# sourceURL=webpack:///./src/img/MainBg.png?");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/background.png\";\n\n//# sourceURL=webpack:///./src/img/background.png?");

/***/ }),

/***/ "./src/img/enemy/spriteTrollAttack.png":
/*!*********************************************!*\
  !*** ./src/img/enemy/spriteTrollAttack.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/spriteTrollAttack.png\";\n\n//# sourceURL=webpack:///./src/img/enemy/spriteTrollAttack.png?");

/***/ }),

/***/ "./src/img/enemy/spriteTrollDie.png":
/*!******************************************!*\
  !*** ./src/img/enemy/spriteTrollDie.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/spriteTrollDie.png\";\n\n//# sourceURL=webpack:///./src/img/enemy/spriteTrollDie.png?");

/***/ }),

/***/ "./src/img/enemy/spriteTrollHurt.png":
/*!*******************************************!*\
  !*** ./src/img/enemy/spriteTrollHurt.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/spriteTrollHurt.png\";\n\n//# sourceURL=webpack:///./src/img/enemy/spriteTrollHurt.png?");

/***/ }),

/***/ "./src/img/enemy/spriteTrollStatic.png":
/*!*********************************************!*\
  !*** ./src/img/enemy/spriteTrollStatic.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/spriteTrollStatic.png\";\n\n//# sourceURL=webpack:///./src/img/enemy/spriteTrollStatic.png?");

/***/ }),

/***/ "./src/img/hero/spriteEffects.png":
/*!****************************************!*\
  !*** ./src/img/hero/spriteEffects.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/spriteEffects.png\";\n\n//# sourceURL=webpack:///./src/img/hero/spriteEffects.png?");

/***/ }),

/***/ "./src/img/hero/spriteKnight.png":
/*!***************************************!*\
  !*** ./src/img/hero/spriteKnight.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/spriteKnight.png\";\n\n//# sourceURL=webpack:///./src/img/hero/spriteKnight.png?");

/***/ }),

/***/ "./src/img/skulls.png":
/*!****************************!*\
  !*** ./src/img/skulls.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/skulls.png\";\n\n//# sourceURL=webpack:///./src/img/skulls.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ \"./src/State.js\");\n/* harmony import */ var _LandingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingPage */ \"./src/LandingPage.js\");\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/normalize.css */ \"./src/styles/normalize.css\");\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nconst landingPage = new _LandingPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst state = new _State__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nstate.initApp();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sounds/enemy/cuseMe.wav":
/*!*************************************!*\
  !*** ./src/sounds/enemy/cuseMe.wav ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/cuseMe.wav\";\n\n//# sourceURL=webpack:///./src/sounds/enemy/cuseMe.wav?");

/***/ }),

/***/ "./src/sounds/enemy/enemyAttack.wav":
/*!******************************************!*\
  !*** ./src/sounds/enemy/enemyAttack.wav ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/enemyAttack.wav\";\n\n//# sourceURL=webpack:///./src/sounds/enemy/enemyAttack.wav?");

/***/ }),

/***/ "./src/sounds/enemy/enemyDead.wav":
/*!****************************************!*\
  !*** ./src/sounds/enemy/enemyDead.wav ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/enemyDead.wav\";\n\n//# sourceURL=webpack:///./src/sounds/enemy/enemyDead.wav?");

/***/ }),

/***/ "./src/sounds/enemy/enemyHurt.wav":
/*!****************************************!*\
  !*** ./src/sounds/enemy/enemyHurt.wav ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/enemyHurt.wav\";\n\n//# sourceURL=webpack:///./src/sounds/enemy/enemyHurt.wav?");

/***/ }),

/***/ "./src/sounds/enemy/enemyOK.wav":
/*!**************************************!*\
  !*** ./src/sounds/enemy/enemyOK.wav ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/enemyOK.wav\";\n\n//# sourceURL=webpack:///./src/sounds/enemy/enemyOK.wav?");

/***/ }),

/***/ "./src/sounds/enemy/lokTar.wav":
/*!*************************************!*\
  !*** ./src/sounds/enemy/lokTar.wav ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/lokTar.wav\";\n\n//# sourceURL=webpack:///./src/sounds/enemy/lokTar.wav?");

/***/ }),

/***/ "./src/sounds/game/mainSound.wav":
/*!***************************************!*\
  !*** ./src/sounds/game/mainSound.wav ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/mainSound.wav\";\n\n//# sourceURL=webpack:///./src/sounds/game/mainSound.wav?");

/***/ }),

/***/ "./src/sounds/hero/asYouWish.wav":
/*!***************************************!*\
  !*** ./src/sounds/hero/asYouWish.wav ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/asYouWish.wav\";\n\n//# sourceURL=webpack:///./src/sounds/hero/asYouWish.wav?");

/***/ }),

/***/ "./src/sounds/hero/forTheAlliance.wav":
/*!********************************************!*\
  !*** ./src/sounds/hero/forTheAlliance.wav ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/forTheAlliance.wav\";\n\n//# sourceURL=webpack:///./src/sounds/hero/forTheAlliance.wav?");

/***/ }),

/***/ "./src/sounds/hero/heroAttack.wav":
/*!****************************************!*\
  !*** ./src/sounds/hero/heroAttack.wav ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/heroAttack.wav\";\n\n//# sourceURL=webpack:///./src/sounds/hero/heroAttack.wav?");

/***/ }),

/***/ "./src/sounds/hero/heroDead.wav":
/*!**************************************!*\
  !*** ./src/sounds/hero/heroDead.wav ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/heroDead.wav\";\n\n//# sourceURL=webpack:///./src/sounds/hero/heroDead.wav?");

/***/ }),

/***/ "./src/sounds/hero/heroHurt.wav":
/*!**************************************!*\
  !*** ./src/sounds/hero/heroHurt.wav ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./assets/heroHurt.wav\";\n\n//# sourceURL=webpack:///./src/sounds/hero/heroHurt.wav?");

/***/ }),

/***/ "./src/styles/game.css":
/*!*****************************!*\
  !*** ./src/styles/game.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./game.css */ \"./node_modules/css-loader/index.js!./src/styles/game.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/game.css?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./index.css */ \"./node_modules/css-loader/index.js!./src/styles/index.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/index.css?");

/***/ }),

/***/ "./src/styles/landingPage.css":
/*!************************************!*\
  !*** ./src/styles/landingPage.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./landingPage.css */ \"./node_modules/css-loader/index.js!./src/styles/landingPage.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/landingPage.css?");

/***/ }),

/***/ "./src/styles/loader.css":
/*!*******************************!*\
  !*** ./src/styles/loader.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./loader.css */ \"./node_modules/css-loader/index.js!./src/styles/loader.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/loader.css?");

/***/ }),

/***/ "./src/styles/login.css":
/*!******************************!*\
  !*** ./src/styles/login.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./login.css */ \"./node_modules/css-loader/index.js!./src/styles/login.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/login.css?");

/***/ }),

/***/ "./src/styles/newGame.css":
/*!********************************!*\
  !*** ./src/styles/newGame.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./newGame.css */ \"./node_modules/css-loader/index.js!./src/styles/newGame.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/newGame.css?");

/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./normalize.css */ \"./node_modules/css-loader/index.js!./src/styles/normalize.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/normalize.css?");

/***/ }),

/***/ "./src/styles/score.css":
/*!******************************!*\
  !*** ./src/styles/score.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./score.css */ \"./node_modules/css-loader/index.js!./src/styles/score.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/score.css?");

/***/ })

/******/ });