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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/*!***********************************!*\
  !*** ./src/davy-donation-form.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("var Davy = function Davy() {\n\tvar forms = [];\n\n\t/**\n  * Form object.\n  */\n\tthis.form = function (form) {\n\t\tvar continue_btn = form.querySelector('.davy-donation-form--continue-button');\n\t\tvar return_btn = form.querySelector('.davy-donation-form--return-button');\n\t\tvar donate_btn = form.querySelector('.davy-donation-form--donate-button');\n\t\tvar runner = {\n\n\t\t\t/**\n    * Event handler. This is the event listener for all the button\n    * click actions. It checks the targets and then routes to the\n    * correct function.\n    */\n\t\t\thandleEvent: function handleEvent(e) {\n\t\t\t\tconsole.log(e.target);\n\t\t\t\tswitch (e.target) {\n\t\t\t\t\tcase donate_btn:\n\t\t\t\t\t\treturn this.submit();\n\t\t\t\t\t\tbreak;\n\t\t\t\t}\n\n\t\t\t\treturn false;\n\t\t\t},\n\n\t\t\t/**\n    * Handle form submissions.\n    */\n\t\t\tsubmit: function submit() {\n\t\t\t\tvar url = 'https://www.sandbox.paypal.com/cgi-bin/webscr?';\n\t\t\t\tvar query = 'business=' + this.get_submitted_value('paypal');\n\t\t\t\tquery += '&email=' + this.get_submitted_value('email');\n\t\t\t\tquery += '&first_name=' + this.get_submitted_value('first_name');\n\t\t\t\tquery += '&last_name=' + this.get_submitted_value('last_name');\n\t\t\t\tquery += '&amount=' + this.get_submitted_amount();\n\n\t\t\t\turl += encodeURIComponent(query);\n\n\t\t\t\twindow.open(url);\n\n\t\t\t\treturn false;\n\t\t\t},\n\n\t\t\t/**\n    * Get the submitted amount.\n    */\n\t\t\tget_submitted_amount: function get_submitted_amount() {\n\t\t\t\tvar suggested = this.form.querySelectorAll('[name=suggested_amount]');\n\t\t\t\tvar amount = void 0;\n\n\t\t\t\tsuggested.forEach(function (suggestion) {\n\t\t\t\t\tif (suggestion.checked) {\n\t\t\t\t\t\tamount = suggestion.value;\n\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t\t\treturn amount;\n\t\t\t},\n\n\t\t\t/**\n    * Get the submitted value.\n    */\n\t\t\tget_submitted_value: function get_submitted_value(key) {\n\t\t\t\treturn this.form.querySelector('[name=' + key + ']').value;\n\t\t\t},\n\n\t\t\t/**\n    * This form object.\n    */\n\t\t\tform: form\n\t\t};\n\n\t\tcontinue_btn.addEventListener('click', runner, false);\n\t\treturn_btn.addEventListener('click', runner, false);\n\t\tdonate_btn.addEventListener('click', runner, false);\n\t};\n\n\t/**\n  * Set up form.\n  */\n\t(function (self) {\n\t\tvar load = function load() {\n\t\t\tvar forms = document.querySelectorAll('.davy-donation-form');\n\n\t\t\tforms.forEach(function (form) {\n\t\t\t\tforms.push = self.form(form);\n\t\t\t});\n\t\t};\n\n\t\tif (document.readyState != 'loading') {\n\t\t\tload();\n\t\t} else {\n\t\t\tdocument.addEventListener('DOMContentLoaded', load);\n\t\t}\n\t})(this);\n\n\treturn {\n\t\tforms: forms,\n\t\tForm: this.form\n\t};\n};\n\nwindow.DAVY = new Davy();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF2eS1kb25hdGlvbi1mb3JtLmpzPzlkMzciXSwic291cmNlc0NvbnRlbnQiOlsidmFyIERhdnkgPSBmdW5jdGlvbiBEYXZ5KCkge1xuXHR2YXIgZm9ybXMgPSBbXTtcblxuXHQvKipcbiAgKiBGb3JtIG9iamVjdC5cbiAgKi9cblx0dGhpcy5mb3JtID0gZnVuY3Rpb24gKGZvcm0pIHtcblx0XHR2YXIgY29udGludWVfYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZGF2eS1kb25hdGlvbi1mb3JtLS1jb250aW51ZS1idXR0b24nKTtcblx0XHR2YXIgcmV0dXJuX2J0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmRhdnktZG9uYXRpb24tZm9ybS0tcmV0dXJuLWJ1dHRvbicpO1xuXHRcdHZhciBkb25hdGVfYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZGF2eS1kb25hdGlvbi1mb3JtLS1kb25hdGUtYnV0dG9uJyk7XG5cdFx0dmFyIHJ1bm5lciA9IHtcblxuXHRcdFx0LyoqXG4gICAgKiBFdmVudCBoYW5kbGVyLiBUaGlzIGlzIHRoZSBldmVudCBsaXN0ZW5lciBmb3IgYWxsIHRoZSBidXR0b25cbiAgICAqIGNsaWNrIGFjdGlvbnMuIEl0IGNoZWNrcyB0aGUgdGFyZ2V0cyBhbmQgdGhlbiByb3V0ZXMgdG8gdGhlXG4gICAgKiBjb3JyZWN0IGZ1bmN0aW9uLlxuICAgICovXG5cdFx0XHRoYW5kbGVFdmVudDogZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlLnRhcmdldCk7XG5cdFx0XHRcdHN3aXRjaCAoZS50YXJnZXQpIHtcblx0XHRcdFx0XHRjYXNlIGRvbmF0ZV9idG46XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zdWJtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG4gICAgKiBIYW5kbGUgZm9ybSBzdWJtaXNzaW9ucy5cbiAgICAqL1xuXHRcdFx0c3VibWl0OiBmdW5jdGlvbiBzdWJtaXQoKSB7XG5cdFx0XHRcdHZhciB1cmwgPSAnaHR0cHM6Ly93d3cuc2FuZGJveC5wYXlwYWwuY29tL2NnaS1iaW4vd2Vic2NyPyc7XG5cdFx0XHRcdHZhciBxdWVyeSA9ICdidXNpbmVzcz0nICsgdGhpcy5nZXRfc3VibWl0dGVkX3ZhbHVlKCdwYXlwYWwnKTtcblx0XHRcdFx0cXVlcnkgKz0gJyZlbWFpbD0nICsgdGhpcy5nZXRfc3VibWl0dGVkX3ZhbHVlKCdlbWFpbCcpO1xuXHRcdFx0XHRxdWVyeSArPSAnJmZpcnN0X25hbWU9JyArIHRoaXMuZ2V0X3N1Ym1pdHRlZF92YWx1ZSgnZmlyc3RfbmFtZScpO1xuXHRcdFx0XHRxdWVyeSArPSAnJmxhc3RfbmFtZT0nICsgdGhpcy5nZXRfc3VibWl0dGVkX3ZhbHVlKCdsYXN0X25hbWUnKTtcblx0XHRcdFx0cXVlcnkgKz0gJyZhbW91bnQ9JyArIHRoaXMuZ2V0X3N1Ym1pdHRlZF9hbW91bnQoKTtcblxuXHRcdFx0XHR1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KTtcblxuXHRcdFx0XHR3aW5kb3cub3Blbih1cmwpO1xuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuICAgICogR2V0IHRoZSBzdWJtaXR0ZWQgYW1vdW50LlxuICAgICovXG5cdFx0XHRnZXRfc3VibWl0dGVkX2Ftb3VudDogZnVuY3Rpb24gZ2V0X3N1Ym1pdHRlZF9hbW91bnQoKSB7XG5cdFx0XHRcdHZhciBzdWdnZXN0ZWQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9c3VnZ2VzdGVkX2Ftb3VudF0nKTtcblx0XHRcdFx0dmFyIGFtb3VudCA9IHZvaWQgMDtcblxuXHRcdFx0XHRzdWdnZXN0ZWQuZm9yRWFjaChmdW5jdGlvbiAoc3VnZ2VzdGlvbikge1xuXHRcdFx0XHRcdGlmIChzdWdnZXN0aW9uLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdGFtb3VudCA9IHN1Z2dlc3Rpb24udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gYW1vdW50O1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG4gICAgKiBHZXQgdGhlIHN1Ym1pdHRlZCB2YWx1ZS5cbiAgICAqL1xuXHRcdFx0Z2V0X3N1Ym1pdHRlZF92YWx1ZTogZnVuY3Rpb24gZ2V0X3N1Ym1pdHRlZF92YWx1ZShrZXkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT0nICsga2V5ICsgJ10nKS52YWx1ZTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuICAgICogVGhpcyBmb3JtIG9iamVjdC5cbiAgICAqL1xuXHRcdFx0Zm9ybTogZm9ybVxuXHRcdH07XG5cblx0XHRjb250aW51ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBydW5uZXIsIGZhbHNlKTtcblx0XHRyZXR1cm5fYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcnVubmVyLCBmYWxzZSk7XG5cdFx0ZG9uYXRlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJ1bm5lciwgZmFsc2UpO1xuXHR9O1xuXG5cdC8qKlxuICAqIFNldCB1cCBmb3JtLlxuICAqL1xuXHQoZnVuY3Rpb24gKHNlbGYpIHtcblx0XHR2YXIgbG9hZCA9IGZ1bmN0aW9uIGxvYWQoKSB7XG5cdFx0XHR2YXIgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF2eS1kb25hdGlvbi1mb3JtJyk7XG5cblx0XHRcdGZvcm1zLmZvckVhY2goZnVuY3Rpb24gKGZvcm0pIHtcblx0XHRcdFx0Zm9ybXMucHVzaCA9IHNlbGYuZm9ybShmb3JtKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSAnbG9hZGluZycpIHtcblx0XHRcdGxvYWQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxvYWQpO1xuXHRcdH1cblx0fSkodGhpcyk7XG5cblx0cmV0dXJuIHtcblx0XHRmb3JtczogZm9ybXMsXG5cdFx0Rm9ybTogdGhpcy5mb3JtXG5cdH07XG59O1xuXG53aW5kb3cuREFWWSA9IG5ldyBEYXZ5KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGF2eS1kb25hdGlvbi1mb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ })

/******/ });