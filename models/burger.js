var orm = require("../config/orm.js");


// orm.insertOne("burgers", "Ham and Cheese", true);

// orm.update("test", 2, "test2", function(res){
// 	cb(res);
// });

var burger = {
	all: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	// The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;