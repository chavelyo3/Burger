const orm = require("../Config/orm.js");

let burgers = {
  selectall: function (cb) {
    orm.selectall("burgers", function (res) {
      cb(res);
    });
  },
 
  createUno: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateUno: function (objColVals, boolean, condition, cb) {
    orm.updateUno("burgers", objColVals, boolean, condition, function (res) {
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
