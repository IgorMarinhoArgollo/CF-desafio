/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'providers',
    [
      {
        id: 1,
        name: 'provider1',
        tradingName: null,
        cashforceTax: null,
        responsibleName: null,
        responsibleEmail: null,
        responsiblePosition: null,
        responsiblePhone: null,
        responsibleMobile: null,
        website: null,
        postalCode: null,
        address: null,
        number: null,
        complement: null,
        neighborhood: null,
        city: null,
        state: null,
        bank: null,
        bankAgency: null,
        account: null,
        documents: null,
        phoneNumber: null,
        situation: null,
        situationDate: null,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        cnpjId: null,
        email: null,
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('providers', null, {}),
};