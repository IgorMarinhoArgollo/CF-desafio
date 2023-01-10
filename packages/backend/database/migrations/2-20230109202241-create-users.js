/* eslint-disable no-unused-vars */
/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      phoneNumber: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      mobile: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      departament: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      verificationCode: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      emailChecked: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cashforceAdm: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
    }, {
      initialAutoIncrement: 122,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};