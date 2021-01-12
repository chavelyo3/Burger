const orm = require("../Config/orm.js");

let burgers = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
 
  createUno: function (cols, vals, cb) {
    orm.createUno("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  insertOne: function (objColVals, boolean, condition, cb) {
    orm.insertOne("burgers", objColVals, boolean, condition, function (res) {
      cb(res);
    });
  },
  deleteUno: function (condition, cb) {
    orm.deleteUno("burgers", condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
