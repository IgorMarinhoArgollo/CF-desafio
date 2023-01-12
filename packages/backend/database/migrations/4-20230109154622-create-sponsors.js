/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sponsors', {
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
      tradingName: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      cashforceTax: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      responsibleName: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      responsibleEmail: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      responsiblePosition: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      responsiblePhone: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      responsibleMobile: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      website: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      postalCode: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      address: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      number: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      complement: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      neighborhood: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      city: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      state: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      bank: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      bankAgency: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      account: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      phoneNumber: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      situation: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      situationDate: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cnpjId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        onUpdate: 'SET NULL',
        onDelete: 'CASCADE',
        references: {
          model: 'cnpjs',
          key: 'id',
        },
      },
      email: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
    }, {
      initialAutoIncrement: 17,
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sponsors');
  },
};