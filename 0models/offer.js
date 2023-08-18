const Sequelize = require('sequelize');

class Offer extends Sequelize.Model {
  static initiate(sequelize) {
    Service.init(
      {
        offerId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        companyId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        offerNumber: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        offerName: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Service',
        tableName: 'services',
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

module.exports = Offer;
