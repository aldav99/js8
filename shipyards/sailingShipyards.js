'use strict';

function SailingShipyard(name) {
    this.name = name;

    this.createShip = function (name, model, color, masts, sailArea) {
        return new SailingShip(name, model, color, masts, sailArea);
    };

    this.repairShip = function (ship) {
        if (this.defineType(ship) != 0)
            throw new Error('Repair only Sailing');

        ship.repair();
    };

    this.exchangeShip = function (oldShip, name, model,
        color, masts, sailArea) {

        if (this.defineType(oldShip) != 0)
            throw new Error('Exchange only Sailing');

        let newShip = this.createShip(name, model, color,
            masts, sailArea);

        oldShip.outOfUse();

        return newShip;
    };


}

SailingShipyard.prototype = new Shipyard();
SailingShipyard.prototype.constructor = SailingShipyard;
