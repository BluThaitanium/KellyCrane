/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["app_page_module_css"],{

/***/ "./app/page.module.css":
/*!*****************************!*\
  !*** ./app/page.module.css ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// extracted by mini-css-extract-plugin\n    if(true) {\n      // 1666965546746\n      var cssReload = __webpack_require__(/*! ./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js */ \"./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js\")(module.id, {\"publicPath\":\"/_next/\",\"esModule\":false,\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \nmodule.exports.__checksum = \"\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcGFnZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsb0xBQTJJLGNBQWMsdURBQXVEO0FBQzlPLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBO0FBQ0EseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLm1vZHVsZS5jc3M/Y2EyYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjY2OTY1NTQ2NzQ2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9Vc2Vycy90aGFpcC9EZXNrdG9wL1R1cmJvUGFjay9hcmNoaWlfY3JhbmVfdHVyYm9wYWNrL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiL19uZXh0L1wiLFwiZXNNb2R1bGVcIjpmYWxzZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gIFxubW9kdWxlLmV4cG9ydHMuX19jaGVja3N1bSA9IFwiXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/page.module.css\n"));

/***/ }),

/***/ "./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js ***!
  \*********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __dirname = \"/\";\n(()=>{\"use strict\";var e={10:(e,r,t)=>{var n=t(818);var i=Object.create(null);var a=typeof document===\"undefined\";var o=Array.prototype.forEach;function debounce(e,r){var t=0;return function(){var n=this;var i=arguments;var a=function functionCall(){return e.apply(n,i)};clearTimeout(t);t=setTimeout(a,r)}}function noop(){}function getCurrentScriptUrl(e){var r=i[e];if(!r){if(document.currentScript){r=document.currentScript.src}else{var t=document.getElementsByTagName(\"script\");var a=t[t.length-1];if(a){r=a.src}}i[e]=r}return function(e){if(!r){return null}var t=r.split(/([^\\\\/]+)\\.js$/);var i=t&&t[1];if(!i){return[r.replace(\".js\",\".css\")]}if(!e){return[r.replace(\".js\",\".css\")]}return e.split(\",\").map((function(e){var t=new RegExp(\"\".concat(i,\"\\\\.js$\"),\"g\");return n(r.replace(t,\"\".concat(e.replace(/{fileName}/g,i),\".css\")))}))}}function updateCss(e,r){if(!r){if(!e.href){return}r=e.href.split(\"?\")[0]}if(!isUrlRequest(r)){return}if(e.isLoaded===false){return}if(!r||!(r.indexOf(\".css\")>-1)){return}e.visited=true;var t=e.cloneNode();t.isLoaded=false;t.addEventListener(\"load\",(function(){if(t.isLoaded){return}t.isLoaded=true;e.parentNode.removeChild(e)}));t.addEventListener(\"error\",(function(){if(t.isLoaded){return}t.isLoaded=true;e.parentNode.removeChild(e)}));t.href=\"\".concat(r,\"?\").concat(Date.now());if(e.nextSibling){e.parentNode.insertBefore(t,e.nextSibling)}else{e.parentNode.appendChild(t)}}function getReloadUrl(e,r){var t;e=n(e,{stripWWW:false});r.some((function(n){if(e.indexOf(r)>-1){t=n}}));return t}function reloadStyle(e){if(!e){return false}var r=document.querySelectorAll(\"link\");var t=false;o.call(r,(function(r){if(!r.href){return}var n=getReloadUrl(r.href,e);if(!isUrlRequest(n)){return}if(r.visited===true){return}if(n){updateCss(r,n);t=true}}));return t}function reloadAll(){var e=document.querySelectorAll(\"link\");o.call(e,(function(e){if(e.visited===true){return}updateCss(e)}))}function isUrlRequest(e){if(!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(e)){return false}return true}e.exports=function(e,r){if(a){console.log(\"no window.document found, will not HMR CSS\");return noop}var t=getCurrentScriptUrl(e);function update(){var e=t(r.filename);var n=reloadStyle(e);if(r.locals){console.log(\"[HMR] Detected local css modules. Reload all css\");reloadAll();return}if(n){console.log(\"[HMR] css reload %s\",e.join(\" \"))}else{console.log(\"[HMR] Reload all css\");reloadAll()}}return debounce(update,50)}},818:e=>{function normalizeUrl(e){return e.reduce((function(e,r){switch(r){case\"..\":e.pop();break;case\".\":break;default:e.push(r)}return e}),[]).join(\"/\")}e.exports=function(e){e=e.trim();if(/^data:/i.test(e)){return e}var r=e.indexOf(\"//\")!==-1?e.split(\"//\")[0]+\"//\":\"\";var t=e.replace(new RegExp(r,\"i\"),\"\").split(\"/\");var n=t[0].toLowerCase().replace(/\\.$/,\"\");t[0]=\"\";var i=normalizeUrl(t);return r+n+i}}};var r={};function __nccwpck_require__(t){var n=r[t];if(n!==undefined){return n.exports}var i=r[t]={exports:{}};var a=true;try{e[t](i,i.exports,__nccwpck_require__);a=false}finally{if(a)delete r[t]}return i.exports}if(typeof __nccwpck_require__!==\"undefined\")__nccwpck_require__.ab=__dirname+\"/\";var t=__nccwpck_require__(10);module.exports=t})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxhQUFhLE9BQU8sYUFBYSxhQUFhLDBCQUEwQixvQ0FBb0MsOEJBQThCLHVCQUF1QixRQUFRLGtCQUFrQixXQUFXLGdCQUFnQiw4QkFBOEIscUJBQXFCLGdCQUFnQixtQkFBbUIsaUJBQWlCLGdDQUFnQyxXQUFXLE9BQU8sMkJBQTJCLDZCQUE2QixLQUFLLDhDQUE4QyxvQkFBb0IsTUFBTSxTQUFTLE9BQU8sbUJBQW1CLE9BQU8sWUFBWSxnQ0FBZ0MsY0FBYyxPQUFPLGdDQUFnQyxPQUFPLGdDQUFnQyxxQ0FBcUMsNENBQTRDLDJDQUEyQyxTQUFTLGdCQUFnQixJQUFJLHdCQUF3QixPQUFPLFlBQVksT0FBTyx1QkFBdUIscUJBQXFCLE9BQU8sdUJBQXVCLE9BQU8sZ0NBQWdDLE9BQU8sZUFBZSxvQkFBb0IsaUJBQWlCLHNDQUFzQyxlQUFlLE9BQU8sZ0JBQWdCLDRCQUE0QixHQUFHLHVDQUF1QyxlQUFlLE9BQU8sZ0JBQWdCLDRCQUE0QixHQUFHLDJDQUEyQyxrQkFBa0IsMkNBQTJDLEtBQUssNkJBQTZCLDJCQUEyQixNQUFNLE9BQU8sZUFBZSxFQUFFLG9CQUFvQixvQkFBb0IsS0FBSyxHQUFHLFNBQVMsd0JBQXdCLE9BQU8sYUFBYSx3Q0FBd0MsWUFBWSxzQkFBc0IsWUFBWSxPQUFPLDZCQUE2QixxQkFBcUIsT0FBTyxxQkFBcUIsT0FBTyxNQUFNLGVBQWUsUUFBUSxHQUFHLFNBQVMscUJBQXFCLHdDQUF3QyxzQkFBc0IscUJBQXFCLE9BQU8sYUFBYSxHQUFHLHlCQUF5Qix5Q0FBeUMsYUFBYSxZQUFZLHdCQUF3QixNQUFNLDBEQUEwRCxZQUFZLDZCQUE2QixrQkFBa0Isb0JBQW9CLHFCQUFxQixhQUFhLGdFQUFnRSxZQUFZLE9BQU8sTUFBTSwrQ0FBK0MsS0FBSyxvQ0FBb0MsYUFBYSw0QkFBNEIsU0FBUyx5QkFBeUIsK0JBQStCLFVBQVUsaUJBQWlCLE1BQU0sY0FBYyxrQkFBa0IsU0FBUyxnQkFBZ0Isc0JBQXNCLFdBQVcsc0JBQXNCLFNBQVMsb0RBQW9ELGlEQUFpRCwyQ0FBMkMsUUFBUSxzQkFBc0IsZ0JBQWdCLFNBQVMsZ0NBQWdDLFdBQVcsa0JBQWtCLGlCQUFpQixZQUFZLFlBQVksV0FBVyxJQUFJLHNDQUFzQyxRQUFRLFFBQVEsaUJBQWlCLGlCQUFpQixtRUFBbUUsU0FBUyxLQUFLLDhCQUE4QixpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanM/NWQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17MTA6KGUscix0KT0+e3ZhciBuPXQoODE4KTt2YXIgaT1PYmplY3QuY3JlYXRlKG51bGwpO3ZhciBhPXR5cGVvZiBkb2N1bWVudD09PVwidW5kZWZpbmVkXCI7dmFyIG89QXJyYXkucHJvdG90eXBlLmZvckVhY2g7ZnVuY3Rpb24gZGVib3VuY2UoZSxyKXt2YXIgdD0wO3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXRoaXM7dmFyIGk9YXJndW1lbnRzO3ZhciBhPWZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbCgpe3JldHVybiBlLmFwcGx5KG4saSl9O2NsZWFyVGltZW91dCh0KTt0PXNldFRpbWVvdXQoYSxyKX19ZnVuY3Rpb24gbm9vcCgpe31mdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0VXJsKGUpe3ZhciByPWlbZV07aWYoIXIpe2lmKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpe3I9ZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmN9ZWxzZXt2YXIgdD1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTt2YXIgYT10W3QubGVuZ3RoLTFdO2lmKGEpe3I9YS5zcmN9fWlbZV09cn1yZXR1cm4gZnVuY3Rpb24oZSl7aWYoIXIpe3JldHVybiBudWxsfXZhciB0PXIuc3BsaXQoLyhbXlxcXFwvXSspXFwuanMkLyk7dmFyIGk9dCYmdFsxXTtpZighaSl7cmV0dXJuW3IucmVwbGFjZShcIi5qc1wiLFwiLmNzc1wiKV19aWYoIWUpe3JldHVybltyLnJlcGxhY2UoXCIuanNcIixcIi5jc3NcIildfXJldHVybiBlLnNwbGl0KFwiLFwiKS5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBSZWdFeHAoXCJcIi5jb25jYXQoaSxcIlxcXFwuanMkXCIpLFwiZ1wiKTtyZXR1cm4gbihyLnJlcGxhY2UodCxcIlwiLmNvbmNhdChlLnJlcGxhY2UoL3tmaWxlTmFtZX0vZyxpKSxcIi5jc3NcIikpKX0pKX19ZnVuY3Rpb24gdXBkYXRlQ3NzKGUscil7aWYoIXIpe2lmKCFlLmhyZWYpe3JldHVybn1yPWUuaHJlZi5zcGxpdChcIj9cIilbMF19aWYoIWlzVXJsUmVxdWVzdChyKSl7cmV0dXJufWlmKGUuaXNMb2FkZWQ9PT1mYWxzZSl7cmV0dXJufWlmKCFyfHwhKHIuaW5kZXhPZihcIi5jc3NcIik+LTEpKXtyZXR1cm59ZS52aXNpdGVkPXRydWU7dmFyIHQ9ZS5jbG9uZU5vZGUoKTt0LmlzTG9hZGVkPWZhbHNlO3QuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoZnVuY3Rpb24oKXtpZih0LmlzTG9hZGVkKXtyZXR1cm59dC5pc0xvYWRlZD10cnVlO2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0pKTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLChmdW5jdGlvbigpe2lmKHQuaXNMb2FkZWQpe3JldHVybn10LmlzTG9hZGVkPXRydWU7ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSkpO3QuaHJlZj1cIlwiLmNvbmNhdChyLFwiP1wiKS5jb25jYXQoRGF0ZS5ub3coKSk7aWYoZS5uZXh0U2libGluZyl7ZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfWVsc2V7ZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHQpfX1mdW5jdGlvbiBnZXRSZWxvYWRVcmwoZSxyKXt2YXIgdDtlPW4oZSx7c3RyaXBXV1c6ZmFsc2V9KTtyLnNvbWUoKGZ1bmN0aW9uKG4pe2lmKGUuaW5kZXhPZihyKT4tMSl7dD1ufX0pKTtyZXR1cm4gdH1mdW5jdGlvbiByZWxvYWRTdHlsZShlKXtpZighZSl7cmV0dXJuIGZhbHNlfXZhciByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO3ZhciB0PWZhbHNlO28uY2FsbChyLChmdW5jdGlvbihyKXtpZighci5ocmVmKXtyZXR1cm59dmFyIG49Z2V0UmVsb2FkVXJsKHIuaHJlZixlKTtpZighaXNVcmxSZXF1ZXN0KG4pKXtyZXR1cm59aWYoci52aXNpdGVkPT09dHJ1ZSl7cmV0dXJufWlmKG4pe3VwZGF0ZUNzcyhyLG4pO3Q9dHJ1ZX19KSk7cmV0dXJuIHR9ZnVuY3Rpb24gcmVsb2FkQWxsKCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7by5jYWxsKGUsKGZ1bmN0aW9uKGUpe2lmKGUudmlzaXRlZD09PXRydWUpe3JldHVybn11cGRhdGVDc3MoZSl9KSl9ZnVuY3Rpb24gaXNVcmxSZXF1ZXN0KGUpe2lmKCEvXlthLXpBLVpdW2EtekEtWlxcZCtcXC0uXSo6Ly50ZXN0KGUpKXtyZXR1cm4gZmFsc2V9cmV0dXJuIHRydWV9ZS5leHBvcnRzPWZ1bmN0aW9uKGUscil7aWYoYSl7Y29uc29sZS5sb2coXCJubyB3aW5kb3cuZG9jdW1lbnQgZm91bmQsIHdpbGwgbm90IEhNUiBDU1NcIik7cmV0dXJuIG5vb3B9dmFyIHQ9Z2V0Q3VycmVudFNjcmlwdFVybChlKTtmdW5jdGlvbiB1cGRhdGUoKXt2YXIgZT10KHIuZmlsZW5hbWUpO3ZhciBuPXJlbG9hZFN0eWxlKGUpO2lmKHIubG9jYWxzKXtjb25zb2xlLmxvZyhcIltITVJdIERldGVjdGVkIGxvY2FsIGNzcyBtb2R1bGVzLiBSZWxvYWQgYWxsIGNzc1wiKTtyZWxvYWRBbGwoKTtyZXR1cm59aWYobil7Y29uc29sZS5sb2coXCJbSE1SXSBjc3MgcmVsb2FkICVzXCIsZS5qb2luKFwiIFwiKSl9ZWxzZXtjb25zb2xlLmxvZyhcIltITVJdIFJlbG9hZCBhbGwgY3NzXCIpO3JlbG9hZEFsbCgpfX1yZXR1cm4gZGVib3VuY2UodXBkYXRlLDUwKX19LDgxODplPT57ZnVuY3Rpb24gbm9ybWFsaXplVXJsKGUpe3JldHVybiBlLnJlZHVjZSgoZnVuY3Rpb24oZSxyKXtzd2l0Y2gocil7Y2FzZVwiLi5cIjplLnBvcCgpO2JyZWFrO2Nhc2VcIi5cIjpicmVhaztkZWZhdWx0OmUucHVzaChyKX1yZXR1cm4gZX0pLFtdKS5qb2luKFwiL1wiKX1lLmV4cG9ydHM9ZnVuY3Rpb24oZSl7ZT1lLnRyaW0oKTtpZigvXmRhdGE6L2kudGVzdChlKSl7cmV0dXJuIGV9dmFyIHI9ZS5pbmRleE9mKFwiLy9cIikhPT0tMT9lLnNwbGl0KFwiLy9cIilbMF0rXCIvL1wiOlwiXCI7dmFyIHQ9ZS5yZXBsYWNlKG5ldyBSZWdFeHAocixcImlcIiksXCJcIikuc3BsaXQoXCIvXCIpO3ZhciBuPXRbMF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC4kLyxcIlwiKTt0WzBdPVwiXCI7dmFyIGk9bm9ybWFsaXplVXJsKHQpO3JldHVybiByK24raX19fTt2YXIgcj17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHQpe3ZhciBuPXJbdF07aWYobiE9PXVuZGVmaW5lZCl7cmV0dXJuIG4uZXhwb3J0c312YXIgaT1yW3RdPXtleHBvcnRzOnt9fTt2YXIgYT10cnVlO3RyeXtlW3RdKGksaS5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2E9ZmFsc2V9ZmluYWxseXtpZihhKWRlbGV0ZSByW3RdfXJldHVybiBpLmV4cG9ydHN9aWYodHlwZW9mIF9fbmNjd3Bja19yZXF1aXJlX18hPT1cInVuZGVmaW5lZFwiKV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3ZhciB0PV9fbmNjd3Bja19yZXF1aXJlX18oMTApO21vZHVsZS5leHBvcnRzPXR9KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js\n"));

/***/ })

}]);