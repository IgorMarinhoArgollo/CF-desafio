/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nDup: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dVenc: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      vDup: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      availableToMarket: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.TINYINT,
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
        onUpdate: 'SET NULL',
        onDelete: 'CASCADE',
        references: {
          model: 'orders',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
    }, {
      initialAutoIncrement: 612,
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('orderportions');
  },
};