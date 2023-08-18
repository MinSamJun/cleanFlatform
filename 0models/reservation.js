const Sequelize = require('sequelize');

class Reservation extends Sequelize.Model {
  static initiate(sequelize) {
    Company.init(
      {
        reservationId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        serviceId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        memo: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        state: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        reason: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        beginDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Reservation',
        tableName: 'reservations',
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

module.exports = Reservation;
