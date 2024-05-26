/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./analytics.js ***!
  \**********************/
//import * as $ from 'jquery';
//подсчет кликов на странице


console.log('аналитика загружена')
function createAnalutics () {
    let counter = 0
    const listener = () => counter++
    let isDestroed = false

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDestroed = true
        },

        getClicks() {
            if (isDestroed) {
                return 'analytics is destroed'
            }
            return counter;
        }
    }

}

window.analytics  = createAnalutics();  // в глобальную переменную  analytics помещаем нашу функцию подсчета кликов 
/******/ })()
;
//# sourceMappingURL=analytics.js.map