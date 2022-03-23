"use strict";
var STATUS;
(function (STATUS) {
    STATUS[STATUS["completed"] = 0] = "completed";
    STATUS[STATUS["notCompleted"] = 1] = "notCompleted";
    STATUS[STATUS["not"] = 2] = "not";
})(STATUS || (STATUS = {}));
console.log(STATUS.not);
