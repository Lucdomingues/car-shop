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
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const outputMotorcycles: Motorcycles = new Motorcycles({
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
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

  afterEach(function () {
    sinon.restore();
  });
});