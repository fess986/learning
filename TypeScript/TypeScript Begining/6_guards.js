"use strict";
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
class MyResponse {
    constructor() {
        this.header = 'response header';
        this.result = 'responce result';
    }
}
class MyError {
    constructor() {
        this.header = 'error header';
        this.mesage = 'error mesage';
    }
}
function handler(res) {
    if (res instanceof MyResponse) {
        return { info: res.header + res.result };
    }
    else {
        return { info: res.header + res.mesage };
    }
}
function setType(value) {
}
setType('ass');
setType('big ass');
//# sourceMappingURL=6_guards.js.map