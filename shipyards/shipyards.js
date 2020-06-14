'use strict';

function Shipyard(name, repairType) {
    this.name = name;
    this.repairType = repairType;

    this.paint = function (ship, color) {
        ship.color = color;
        return ship;
    };

    this.defineType = function (ship) {
        if (ship.hasOwnProperty('enginePower')) return 1;
        if (ship.hasOwnProperty('masts')) return 0;
        throw new Error('Unknown type');
    };

    this.isDamaged = function (ship) {
        return ship.isDamaged();
    };

}
