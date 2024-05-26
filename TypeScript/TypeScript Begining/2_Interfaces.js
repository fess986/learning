"use strict";
const myRect = {
    id: '123',
    size: {
        width: 10,
        height: 20,
    },
    color: 'blue',
};
const myRect2 = {
    id: '123',
    size: {
        width: 10,
        height: 20,
    },
};
myRect2.color = '12';
myRect2.color = 'white';
const myRect3 = {};
const myRect4 = {};
const rect5 = {
    id: '123',
    size: {
        width: 10,
        height: 20,
    },
    getArea() {
        return this.size.width * this.size.height;
    }
};
class MyClock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const ass = {
    border: '123',
};
//# sourceMappingURL=2_Interfaces.js.map