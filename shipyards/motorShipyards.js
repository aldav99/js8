'use strict';

function MotorShipyard(name) {
    this.name = name;

    this.createShip = function (name, model, color, enginePower, material) {
        return new MotorShip(name, model, color, enginePower, material);
    };

    this.repairShip = function (ship) {
        if (this.defineType(ship) != 1)
            throw new Error('Repair only motor');

        ship.repair();
    };

    this.exchangeShip = function (oldShip, name, model,
        enginePower, material, color) {

        if (this.defineType(oldShip) != 1)
            throw new Error('Exchange only motor');

        let newShip = this.createShip(name, model,
            enginePower, material, color);

        oldShip.outOfUse();

        return newShip;
    };


}

MotorShipyard.prototype = new Shipyard();
MotorShipyard.prototype.constructor = MotorShipyard;
