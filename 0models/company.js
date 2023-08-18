const Sequelize = require('sequelize');

class Company extends Sequelize.Model {
  static initiate(sequelize) {
    Company.init(
      {
        companyId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        companyName: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        phoneNumber: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Company',
        tableName: 'companies',
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

module.exports = Company;
