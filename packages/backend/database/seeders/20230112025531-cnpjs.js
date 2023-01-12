/* eslint-disable no-unused-vars */
/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
'cnpjs',
    [
      {
        id: 1,
        cnpj: '00000000000001',
        companyType: '2',
        createdAt: '2020-10-29 21:20:33',
        updatedAt: '2020-10-29 21:20:33',
      },
      {
        id: 2,
        cnpj: '00000000000002',
        companyType: '2',
        createdAt: '2020-10-29 21:20:33',
        updatedAt: '2020-10-29 21:20:33',
      },
    ],

{},
),

  down: async (queryInterface) => queryInterface.bulkDelete('cnpjs', null, {}),
};