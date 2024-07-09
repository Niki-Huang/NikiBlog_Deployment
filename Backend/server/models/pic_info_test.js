const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pic_info_test', {
    pid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    picName: {
      type: DataTypes.STRING(31),
      allowNull: false
    },
    isCover: {
      type: DataTypes.ENUM('no','yes'),
      allowNull: true,
      defaultValue: "no"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    bid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'blog_info_test',
        key: 'bid'
      }
    }
  }, {
    sequelize,
    tableName: 'pic_info_test',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
      {
        name: "bid",
        using: "BTREE",
        fields: [
          { name: "bid" },
        ]
      },
    ]
  });
};
