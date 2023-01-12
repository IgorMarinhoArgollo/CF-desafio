/* eslint-disable sonarjs/no-duplicate-string */
const Sinon = require('sinon');
const chai = require('chai');
const { Order } = require('../database/models');
const orderModel = require('../models/orders.model');
const orderService = require('../services/orders.service');
const orderController = require('../controllers/orders.controller');

const { expect } = chai;

const ordersMock = [
  {
    id: 1,
    orderNfId: '1605181324132',
    orderNumber: '18153',
    orderPath: null,
    orderFileName: null,
    orderOriginalName: null,
    emissionDate: '2020-10-30T11:00:00-03:00',
    pdfFile: null,
    emitedTo: '22843980000127',
    nNf: '18153',
    CTE: '',
    value: '198450',
    createdAt: '2020-10-30T17:54:18.000Z',
    updatedAt: '2020-10-30T17:54:18.000Z',
    cnpjId: 1,
    userId: 1,
    buyerId: 1,
    providerId: 1,
    orderStatusBuyer: '0',
    orderStatusProvider: '0',
    deliveryReceipt: null,
    cargoPackingList: null,
    deliveryCtrc: null,
    cnpj: {
      id: 1,
      cnpj: '00000000000001',
      companyType: '2',
      createdAt: '2020-10-29T21:20:33.000Z',
      updatedAt: '2020-10-29T21:20:33.000Z',
    },
    user: {
      id: 1,
      name: 'ALLAN SOUZA',
      email: 'allan@cashforce.com.br',
      phoneNumber: null,
      mobile: null,
      departament: null,
      verificationCode: '',
      emailChecked: 1,
      createdAt: '2020-10-01T21:31:37.000Z',
      updatedAt: '2020-10-01T22:41:23.000Z',
      cashforceAdm: 1,
    },
    buyer: {
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
      createdAt: '2020-10-29T21:20:33.000Z',
      updatedAt: '2020-10-29T21:20:34.000Z',
      cnpjId: 1,
      confirm: 1,
      email: null,
    },
    provider: {
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
      createdAt: '2023-01-12T15:31:05.000Z',
      updatedAt: '2023-01-12T15:31:05.000Z',
      cnpjId: null,
      email: null,
    },
    orderPortion: [],
    offer: [],
  },
  {
    id: 2,
    orderNfId: '160518132413',
    orderNumber: '18157',
    orderPath: null,
    orderFileName: null,
    orderOriginalName: null,
    emissionDate: '2020-11-04T15:32:35-02:00',
    pdfFile: null,
    emitedTo: '35705180000272',
    nNf: '18157',
    CTE: '',
    value: '168850',
    createdAt: '2020-11-10T18:33:46.000Z',
    updatedAt: '2020-11-10T18:33:46.000Z',
    cnpjId: 1,
    userId: 1,
    buyerId: 1,
    providerId: 1,
    orderStatusBuyer: '0',
    orderStatusProvider: '0',
    deliveryReceipt: null,
    cargoPackingList: null,
    deliveryCtrc: null,
    cnpj: {
      id: 1,
      cnpj: '00000000000001',
      companyType: '2',
      createdAt: '2020-10-29T21:20:33.000Z',
      updatedAt: '2020-10-29T21:20:33.000Z',
    },
    user: {
      id: 1,
      name: 'ALLAN SOUZA',
      email: 'allan@cashforce.com.br',
      phoneNumber: null,
      mobile: null,
      departament: null,
      verificationCode: '',
      emailChecked: 1,
      createdAt: '2020-10-01T21:31:37.000Z',
      updatedAt: '2020-10-01T22:41:23.000Z',
      cashforceAdm: 1,
    },
    buyer: {
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
      createdAt: '2020-10-29T21:20:33.000Z',
      updatedAt: '2020-10-29T21:20:34.000Z',
      cnpjId: 1,
      confirm: 1,
      email: null,
    },
    provider: {
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
      createdAt: '2023-01-12T15:31:05.000Z',
      updatedAt: '2023-01-12T15:31:05.000Z',
      cnpjId: null,
      email: null,
    },
    orderPortion: [],
    offer: [],
  },
  {
    id: 3,
    orderNfId: '1605181324130',
    orderNumber: '18184',
    orderPath: null,
    orderFileName: null,
    orderOriginalName: null,
    emissionDate: '2020-11-10',
    pdfFile: null,
    emitedTo: '00418477002640',
    nNf: '18184',
    CTE: '',
    value: '222795',
    createdAt: '2020-11-12T11:42:06.000Z',
    updatedAt: '2020-11-18T12:22:14.000Z',
    cnpjId: 1,
    userId: 1,
    buyerId: 1,
    providerId: 1,
    orderStatusBuyer: '7',
    orderStatusProvider: '3',
    deliveryReceipt: null,
    cargoPackingList: null,
    deliveryCtrc: null,
    cnpj: {
      id: 1,
      cnpj: '00000000000001',
      companyType: '2',
      createdAt: '2020-10-29T21:20:33.000Z',
      updatedAt: '2020-10-29T21:20:33.000Z',
    },
    user: {
      id: 1,
      name: 'ALLAN SOUZA',
      email: 'allan@cashforce.com.br',
      phoneNumber: null,
      mobile: null,
      departament: null,
      verificationCode: '',
      emailChecked: 1,
      createdAt: '2020-10-01T21:31:37.000Z',
      updatedAt: '2020-10-01T22:41:23.000Z',
      cashforceAdm: 1,
    },
    buyer: {
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
      createdAt: '2020-10-29T21:20:33.000Z',
      updatedAt: '2020-10-29T21:20:34.000Z',
      cnpjId: 1,
      confirm: 1,
      email: null,
    },
    provider: {
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
      createdAt: '2023-01-12T15:31:05.000Z',
      updatedAt: '2023-01-12T15:31:05.000Z',
      cnpjId: null,
      email: null,
    },
    orderPortion: [],
    offer: [],
  },
];

describe('Test the /orders route', function () {
  // unit tests
  describe('/get model success', function () {
    before(async function () {
      Sinon.stub(Order, 'findAll').resolves(ordersMock);
    });

    after(async function () {
      Sinon.restore();
    });
    it('Verify the correct return of orders model function', async function () {
      const response = await orderModel.getAllOrders();
      expect(response).to.deep.equal(ordersMock);
    });
  });

  describe('/get service success', function () {
    before(async function () {
      Sinon.stub(orderModel, 'getAllOrders').resolves(ordersMock);
    });
  
    after(async function () {
      Sinon.restore();
    });
    it('Verify the correct return of orders service function', async function () {
      const response = await orderService.getAllOrders();
      expect(response).to.deep.equal(ordersMock);
    });
  });

  describe('/get controller success', function () {
    const req = {};
    const res = {};
    let next = {};

    before(async function () {
      req.body = {};

      next = Sinon.stub().returns();
      res.status = Sinon.stub().returns(res);
      res.send = Sinon.stub().returns();
      res.body = ordersMock;

      Sinon.stub(orderService, 'getAllOrders').resolves(ordersMock);
    });

    after(async function () {
      orderService.getAllOrders.restore();
    });

    it('Verify the correct return and status of orders controller', async function () {
      await orderController.getAllOrders(req, res, next);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.body).to.deep.equal(ordersMock);
    });
  });
});
