"use strict";
function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function pos(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log('empty: ', pos());
console.log('widh a: ', pos(15));
console.log('widh a and b: ', pos(15, 25));
//# sourceMappingURL=4_functions.js.map