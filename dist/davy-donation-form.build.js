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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/*!***********************************!*\
  !*** ./src/davy-donation-form.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("var Davy = function Davy() {\n\tvar forms = [];\n\n\t/**\n  * Form object.\n  */\n\tthis.form = function (form) {\n\t\tvar continue_btn = form.querySelector('.davy-donation-form--continue-button');\n\t\tvar return_btn = form.querySelector('.davy-donation-form--return-button');\n\t\tvar donate_btn = form.querySelector('.davy-donation-form--donate-button');\n\n\t\tdonate_btn.addEventListener('click', function () {\n\t\t\tconsole.log('clicked donate');\n\t\t\treturn false;\n\t\t});\n\t};\n\n\t/**\n  * Set up form.\n  */\n\t(function (self) {\n\t\tvar load = function load() {\n\t\t\tvar forms = document.querySelectorAll('.davy-donation-form');\n\n\t\t\tforms.forEach(function (form) {\n\t\t\t\tforms.push = self.form(form);\n\t\t\t});\n\t\t};\n\n\t\tif (document.readyState != 'loading') {\n\t\t\tload();\n\t\t} else {\n\t\t\tdocument.addEventListener('DOMContentLoaded', load);\n\t\t}\n\t})(this);\n\n\treturn {\n\t\tforms: forms,\n\t\tForm: this.form\n\t};\n};\n\nwindow.DAVY = new Davy();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF2eS1kb25hdGlvbi1mb3JtLmpzPzlkMzciXSwic291cmNlc0NvbnRlbnQiOlsidmFyIERhdnkgPSBmdW5jdGlvbiBEYXZ5KCkge1xuXHR2YXIgZm9ybXMgPSBbXTtcblxuXHQvKipcbiAgKiBGb3JtIG9iamVjdC5cbiAgKi9cblx0dGhpcy5mb3JtID0gZnVuY3Rpb24gKGZvcm0pIHtcblx0XHR2YXIgY29udGludWVfYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZGF2eS1kb25hdGlvbi1mb3JtLS1jb250aW51ZS1idXR0b24nKTtcblx0XHR2YXIgcmV0dXJuX2J0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmRhdnktZG9uYXRpb24tZm9ybS0tcmV0dXJuLWJ1dHRvbicpO1xuXHRcdHZhciBkb25hdGVfYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZGF2eS1kb25hdGlvbi1mb3JtLS1kb25hdGUtYnV0dG9uJyk7XG5cblx0XHRkb25hdGVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2NsaWNrZWQgZG9uYXRlJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSk7XG5cdH07XG5cblx0LyoqXG4gICogU2V0IHVwIGZvcm0uXG4gICovXG5cdChmdW5jdGlvbiAoc2VsZikge1xuXHRcdHZhciBsb2FkID0gZnVuY3Rpb24gbG9hZCgpIHtcblx0XHRcdHZhciBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXZ5LWRvbmF0aW9uLWZvcm0nKTtcblxuXHRcdFx0Zm9ybXMuZm9yRWFjaChmdW5jdGlvbiAoZm9ybSkge1xuXHRcdFx0XHRmb3Jtcy5wdXNoID0gc2VsZi5mb3JtKGZvcm0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9ICdsb2FkaW5nJykge1xuXHRcdFx0bG9hZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9hZCk7XG5cdFx0fVxuXHR9KSh0aGlzKTtcblxuXHRyZXR1cm4ge1xuXHRcdGZvcm1zOiBmb3Jtcyxcblx0XHRGb3JtOiB0aGlzLmZvcm1cblx0fTtcbn07XG5cbndpbmRvdy5EQVZZID0gbmV3IERhdnkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kYXZ5LWRvbmF0aW9uLWZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ })

/******/ });