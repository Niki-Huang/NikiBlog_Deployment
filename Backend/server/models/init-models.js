var DataTypes = require("sequelize").DataTypes;
var _blog_info = require("./blog_info");
var _blog_info_test = require("./blog_info_test");
var _pic_info = require("./pic_info");
var _pic_info_test = require("./pic_info_test");

function initModels(sequelize) {
  var blog_info = _blog_info(sequelize, DataTypes);
  var blog_info_test = _blog_info_test(sequelize, DataTypes);
  var pic_info = _pic_info(sequelize, DataTypes);
  var pic_info_test = _pic_info_test(sequelize, DataTypes);

  pic_info.belongsTo(blog_info, { as: "bid_blog_info", foreignKey: "bid"});
  blog_info.hasMany(pic_info, { as: "pic_infos", foreignKey: "bid"});
  pic_info_test.belongsTo(blog_info_test, { as: "bid_blog_info_test", foreignKey: "bid"});
  blog_info_test.hasMany(pic_info_test, { as: "pic_info_tests", foreignKey: "bid"});

  return {
    blog_info,
    blog_info_test,
    pic_info,
    pic_info_test,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
