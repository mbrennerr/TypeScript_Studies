enum StatusCodes {
  Ok =200,
  BadRequest = 400,
  Unauthorized,
  NotFound,

}


const ok = StatusCodes.Ok;
const indiceOk = StatusCodes["Ok"];
const stringBadRequest = StatusCodes[400];

console.log(ok);
console.log(indiceOk);
console.log(stringBadRequest);

