'use strict';

function SailingShip(name, model, masts, sailArea, color = 'White') {
    this.name = name;
    this.model = model;
    this.color = color;
    this.masts = masts;
    this.sailArea = sailArea;
}

SailingShip.prototype = new Ship();
SailingShip.prototype.constructor = SailingShip;
