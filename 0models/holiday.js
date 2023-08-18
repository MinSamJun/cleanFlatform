const Sequelize = require('sequelize');

class Holiday extends Sequelize.Model {
  static initiate(sequelize) {
    Holiday.init(
      {
        holidayId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        companyId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Holiday',
        tableName: 'hodidays',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  // static associate(db) {
  //   db.Board.belongsTo(db.User, {
  //     foreignKey: 'ownerId',
  //     targetKey: 'userId',
  //   });
  //   db.Board.hasMany(db.BoardGroup, {
  //     foreignKey: 'boardId',
  //     sourceKey: 'boardId',
  //   });
  //   db.Board.hasMany(db.Column, {
  //     foreignKey: 'boardId',
  //     sourceKey: 'boardId',
  //   });
  // }
}

module.exports = Holiday;
