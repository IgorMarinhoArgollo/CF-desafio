/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'buyers',
    [
      {
        id: 1,
        name: 'SACADO 001',
        tradingName: 'SACADO 001 LTDA',
        cashforceTax: '0',
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
        phoneNumber: null,
        situation: null,
        situationDate: null,
        createdAt: '2020-10-29 21:20:33',
        updatedAt: '2020-10-29 21:20:34',
        cnpjId: 1,
        confirm: 1,
        email: null,
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('buyers', null, {}),
};