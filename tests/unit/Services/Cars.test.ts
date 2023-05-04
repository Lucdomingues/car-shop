import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import ServiceCar from '../../../src/Services/Car.service';

describe('Check /cars route', function () {
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
  it('checks if cars are not successfully registered', async function () {
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
    sinon.stub(Model, 'create').resolves({});
    // Act

    try {
      const service = new ServiceCar();
      await service.create(inputCar);
    } catch (error) {
      // Assert

      expect((error as Error).message).to.be.deep.equal('could not create!'); 
    }
  });
    
  afterEach(function () {
    sinon.restore();
  });
});
