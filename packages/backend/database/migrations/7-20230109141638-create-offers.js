/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tax: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tariff: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      adValorem: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      float: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      iof: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      expiresIn: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      paymentStatusSponsor: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      paymentStatusProvider: {
        allowNull: false,
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
      orderId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        onUpdate: 'SET NULL',
        onDelete: 'CASCADE',
        references: {
          model: 'orders',
          key: 'id',
        },
      },
      sponsorId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        onUpdate: 'SET NULL',
        onDelete: 'CASCADE',
        references: {
          model: 'sponsors',
          key: 'id',
        },
      },
    }, {
      initialAutoIncrement: 40,
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('offers');
  },
};