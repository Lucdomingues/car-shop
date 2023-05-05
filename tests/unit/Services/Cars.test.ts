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

  // it('checks if cars are not successfully registered', async function () {
  //   // Arrange
  //   const inputCar: ICar = {
  //     model: 'Fiat',
  //     year: 2021,
  //     color: 'White',
  //     status: true,
  //     buyValue: 12,
  //     doorsQty: 20,
  //     seatsQty: 30,
  //   };
  //   sinon.stub(Model, 'create').resolves({});
  //   // Act

  //   try {
  //     const service = new ServiceCar();
  //     await service.create(inputCar);
  //   } catch (error) {
  //     // Assert

  //     expect((error as Error).message).to.be.deep.equal('could not create!'); 
  //   }
  // });

  // --------------------------------------------- Find --------------------------------------------------

  // it('checks if the cars route brings a list of cars', async function () {
  //   // Arrange
  //   const outputCar: ICar[] = [
  //     {
  //       id: '634852326b35b59438fbea2f',
  //       model: 'Marea',
  //       year: 2002,
  //       color: 'Black',
  //       status: true,
  //       buyValue: 15.99,
  //       doorsQty: 4,
  //       seatsQty: 5,
  //     },
  //     {
  //       id: '634852326b35b59438fbea31',
  //       model: 'Tempra',
  //       year: 1995,
  //       color: 'Black',
  //       buyValue: 39,
  //       doorsQty: 2,
  //       seatsQty: 5,
  //     },
  //   ];

  //   sinon.stub(Model, 'find').resolves(outputCar);
  //   // Act

  //   const service = new ServiceCar();
  //   const result = await service.find();
  //   // Assert

  //   expect(result).to.be.deep.equal(outputCar);
  // });

  // it('checks if it did not find the cars an error is raised', async function () {
  //   // Arrange
  //   sinon.stub(Model, 'find').resolves([]);
  //   // Act

  //   try {
  //     const service = new ServiceCar();
  //     await service.find();
  //   } catch (error) {
  //     // Assert

  //     expect((error as Error).message).to.be.deep.equal('Cars not found!');
  //   }
  // });

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

  // it('checks if the car with the specific id does not exist', async function () {
  //   // Arrange
  //   sinon.stub(Model, 'findById').resolves({});
  //   // Act

  //   try {
  //     const service = new ServiceCar();
  //     await service.findById('634852326b35b59438fbea2c'); // Id do carro que não existe
  //   } catch (error) {
  //     // Assert

  //     expect((error as Error).message).to.be.deep.equal({ message: 'Car not found' });
  //   }

  //   it('check if the id is not valid', async function () {
  //     // Arrange
  //     sinon.stub(Model, 'findById').resolves({});
  //     // Act

  //     try {
  //       const service = new ServiceCar();
  //       await service.findById(32); // Id do carro que não existe
  //     } catch (error) {
  //       // Assert

  //       expect((error as Error).message).to.be.deep.equal({ message: 'Invalid mongo id' });
  //     }

  // }); it('checks if the cars route brings a list of cars', async function () {
  //   // Arrange
  //   const outputCar: ICar[] = [
  //     {
  //       id: '634852326b35b59438fbea2f',
  //       model: 'Marea',
  //       year: 2002,
  //       color: 'Black',
  //       status: true,
  //       buyValue: 15.99,
  //       doorsQty: 4,
  //       seatsQty: 5,
  //     },
  //     {
  //       id: '634852326b35b59438fbea31',
  //       model: 'Tempra',
  //       year: 1995,
  //       color: 'Black',
  //       buyValue: 39,
  //       doorsQty: 2,
  //       seatsQty: 5,
  //     },
  //   ];

  //   sinon.stub(Model, 'find').resolves(outputCar);
  //   // Act

  //   const service = new ServiceCar();
  //   const result = await service.find();
  //   // Assert

  //   expect(result).to.be.deep.equal(outputCar);
  // });

  // it('checks if it did not find the cars an error is raised', async function () {
  //   // Arrange
  //   sinon.stub(Model, 'find').resolves([]);
  //   // Act

  //   try {
  //     const service = new ServiceCar();
  //     await service.find();
  //   } catch (error) {
  //     // Assert

  //     expect((error as Error).message).to.be.deep.equal('Cars not found!');
  //   }
  // });
    
  afterEach(function () {
    sinon.restore();
  });
});