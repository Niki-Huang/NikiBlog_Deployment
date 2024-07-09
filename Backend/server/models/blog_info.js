const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blog_info', {
    bid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "博文ID"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "标题"
    },
    fileName: {
      type: DataTypes.STRING(31),
      allowNull: true,
      comment: "文件名"
    },
    type: {
      type: DataTypes.ENUM('feature','none'),
      allowNull: true,
      defaultValue: "none"
    },
    permission: {
      type: DataTypes.ENUM('public','private'),
      allowNull: true,
      defaultValue: "public"
    },
    status: {
      type: DataTypes.ENUM('draft','published'),
      allowNull: true,
      defaultValue: "draft"
    },
    tags: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "标签"
    },
    likeCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    viewCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "描述信息"
    }
  }, {
    sequelize,
    tableName: 'blog_info',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bid" },
        ]
      },
    ]
  });
};
