import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import ServiceCar from '../../../src/Services/Car.service';

describe('Check /cars route', function () {
  // ---------------------------------------------------- Create ----------------------------------------------------
  it('Check if cars are successfully registered', async function () {
    // Arrange
    const inputCar: ICar = {
      model: 'Fiat',
      year: 2021,
      color: 'White',
      status: true,
      buyValue: 12,
      doorsQty: 20,
      seatsQty: 30,
    };
      
    const outputCar: Car = new Car({
      id: '1',
      model: 'Fiat',
      year: 2021,
      color: 'White',
      status: true,
      buyValue: 12,
      doorsQty: 20,
      seatsQty: 30,
    }); 
      
    sinon.stub(Model, 'create').resolves(outputCar);
    // Act
      
    const service = new ServiceCar();
    const result = await service.create(inputCar);
    // Assert
      
    expect(result).to.be.deep.equal(outputCar);
  });

  // --------------------------------------------- Find --------------------------------------------------

  it('checks if the cars route brings a list of cars', async function () {
    // Arrange
    const outputCar: ICar[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        status: false,
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];

    sinon.stub(Model, 'find').resolves(outputCar);
    // Act

    const service = new ServiceCar();
    const result = await service.find();
    // Assert

    expect(result).to.be.deep.equal(outputCar);
  });

  // ----------------------------------------------- Find Id -------------------------------------------------------

  it('checks if it returns the specific car based on id', async function () {
    // Arrange
    const outputCar: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
  
    sinon.stub(Model, 'findById').resolves(outputCar);
    // Act

    const service = new ServiceCar();
    const result = await service.findById('634852326b35b59438fbea2f');
    // Assert

    expect(result).to.be.deep.equal(outputCar);
  });

  it('check if the id is not valid', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves({});
    // Act

    try {
      const service = new ServiceCar();
      await service.findById('id_invalid'); // Id inválido
    } catch (error) {
      // Assert

      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  }); 

  // ------------------------------------------------ Update -------------------------------------------------

  it('checks if it updates the car with the specific id', async function () {
    // Arrange
    const inputCar: ICar = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    const outputCar: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findOneAndUpdate').resolves(outputCar);
    // Act

    const service = new ServiceCar();
    const result = await service.update('634852326b35b59438fbea2f', inputCar); // atualiza e retorna o valor atualizado
    // Assert

    expect(result).to.be.deep.equal(outputCar);
  }); 

  afterEach(function () {
    sinon.restore();
  });
});