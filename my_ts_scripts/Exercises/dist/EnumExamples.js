"use strict";
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Ok"] = 200] = "Ok";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["NotFound"] = 402] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
const ok = StatusCodes.Ok;
const indiceOk = StatusCodes["Ok"];
const stringBadRequest = StatusCodes[400];
console.log(ok);
console.log(indiceOk);
console.log(stringBadRequest);
