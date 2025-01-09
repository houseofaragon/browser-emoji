/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/*
    background.js - Handles requests from the UI, transforms text, then sends back a response
*/
// Add a listener to create the initial context menu items,
// context menu items only need to be created at runtime.onInstalled
chrome.runtime.onInstalled.addListener(function () {
    // Register a context menu item that will only show up for selection text.
    chrome.contextMenus.create({
        id: 'emojifi-selection',
        title: 'Emojify "%s"',
        contexts: ['emojify'],
    });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    let result = await emojify(info.selectionText);

    chrome.scripting.executeScript({
        target: { tabId: tab.id },    // Run in the tab that the user clicked in
        args: [result],               // The arguments to pass to the function
        function: (result) => {       // The function to run
            // NOTE: This function is run in the context of the web page, meaning that `document` is available.
            console.log('result', result)
            console.log('document', document)
        },
        files: ["content.js"]
    });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vc3JjL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4gICAgYmFja2dyb3VuZC5qcyAtIEhhbmRsZXMgcmVxdWVzdHMgZnJvbSB0aGUgVUksIHRyYW5zZm9ybXMgdGV4dCwgdGhlbiBzZW5kcyBiYWNrIGEgcmVzcG9uc2VcbiovXG4vLyBBZGQgYSBsaXN0ZW5lciB0byBjcmVhdGUgdGhlIGluaXRpYWwgY29udGV4dCBtZW51IGl0ZW1zLFxuLy8gY29udGV4dCBtZW51IGl0ZW1zIG9ubHkgbmVlZCB0byBiZSBjcmVhdGVkIGF0IHJ1bnRpbWUub25JbnN0YWxsZWRcbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZWdpc3RlciBhIGNvbnRleHQgbWVudSBpdGVtIHRoYXQgd2lsbCBvbmx5IHNob3cgdXAgZm9yIHNlbGVjdGlvbiB0ZXh0LlxuICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICAgICAgaWQ6ICdlbW9qaWZpLXNlbGVjdGlvbicsXG4gICAgICAgIHRpdGxlOiAnRW1vamlmeSBcIiVzXCInLFxuICAgICAgICBjb250ZXh0czogWydlbW9qaWZ5J10sXG4gICAgfSk7XG59KTtcblxuY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoYXN5bmMgKGluZm8sIHRhYikgPT4ge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBlbW9qaWZ5KGluZm8uc2VsZWN0aW9uVGV4dCk7XG5cbiAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYi5pZCB9LCAgICAvLyBSdW4gaW4gdGhlIHRhYiB0aGF0IHRoZSB1c2VyIGNsaWNrZWQgaW5cbiAgICAgICAgYXJnczogW3Jlc3VsdF0sICAgICAgICAgICAgICAgLy8gVGhlIGFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBmdW5jdGlvblxuICAgICAgICBmdW5jdGlvbjogKHJlc3VsdCkgPT4geyAgICAgICAvLyBUaGUgZnVuY3Rpb24gdG8gcnVuXG4gICAgICAgICAgICAvLyBOT1RFOiBUaGlzIGZ1bmN0aW9uIGlzIHJ1biBpbiB0aGUgY29udGV4dCBvZiB0aGUgd2ViIHBhZ2UsIG1lYW5pbmcgdGhhdCBgZG9jdW1lbnRgIGlzIGF2YWlsYWJsZS5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9jdW1lbnQnLCBkb2N1bWVudClcbiAgICAgICAgfSxcbiAgICAgICAgZmlsZXM6IFtcImNvbnRlbnQuanNcIl1cbiAgICB9KTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==