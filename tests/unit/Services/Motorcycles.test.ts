import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ServiceMotorcycles from '../../../src/Services/Motorcycles.service';
import IMotorcycles from '../../../src/Interfaces/IMotorcycle';
import Motorcycles from '../../../src/Domains/Motorcycle';

describe('Check /motorcycles route', function () {
  // ---------------------------------------------------- Create ----------------------------------------------------
  it('Check if motorcycles are successfully registered', async function () {
    // Arrange
    const inputMotorcycles: IMotorcycles = {
      model: 'Honda Cb 600f',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const outputMotorcycles: Motorcycles = new Motorcycles({
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });

    sinon.stub(Model, 'create').resolves(outputMotorcycles);
    // Act

    const service = new ServiceMotorcycles();
    const result = await service.create(inputMotorcycles);
    // Assert

    expect(result).to.be.deep.equal(outputMotorcycles);
  });

  // --------------------------------------------- Find --------------------------------------------------

  it('checks if the motorcycles route brings a list of motorcycles', async function () {
    // Arrange
    const outputMotorcycles: IMotorcycles[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];

    sinon.stub(Model, 'find').resolves(outputMotorcycles);
    // Act

    const service = new ServiceMotorcycles();
    const result = await service.find();
    // Assert

    expect(result).to.be.deep.equal(outputMotorcycles);
  });

  // ----------------------------------------------- Find Id -------------------------------------------------------

  it('checks if it returns the specific motorcycle based on id', async function () {
    // Arrange
    const outputMotorcycles: IMotorcycles = {
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findById').resolves(outputMotorcycles);
    // Act

    const service = new ServiceMotorcycles();
    const result = await service.findById('634852326b35b59438fbea2f');
    // Assert

    expect(result).to.be.deep.equal(outputMotorcycles);
  });

  it('check if the id is not valid', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves({});
    // Act

    try {
      const service = new ServiceMotorcycles();
      await service.findById('id_invalid'); // Id inválido
    } catch (error) {
      // Assert

      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  });

  // ------------------------------------------------ Update -------------------------------------------------

  it('checks if it updates the motorcycle with the specific id', async function () {
    // Arrange
    const inputMotorcycles: IMotorcycles = {
      model: 'Honda Cb 600f',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const outputMotorcycles: IMotorcycles = {
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const outputMotorcyclesUpdate: IMotorcycles = {
      id: '634852326b35b59438fbea2f',
      model: 'Pmv 600v',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findById').resolves(outputMotorcycles);
    sinon.stub(Model, 'findOneAndUpdate').resolves(outputMotorcyclesUpdate);
    // Act

    const service = new ServiceMotorcycles();
    const result = await service.update('634852326b35b59438fbea2f', inputMotorcycles); // atualiza e retorna o valor atualizado
    // Assert

    expect(result).to.be.deep.equal(outputMotorcyclesUpdate);
  });

  afterEach(function () {
    sinon.restore();
  });
});