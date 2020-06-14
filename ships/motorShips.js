'use strict';

function MotorShip(name, model, enginePower, material, color = 'Sebous') {
    this.name = name;
    this.model = model;
    this.color = color;
    this.enginePower = enginePower;
    this.material = material;
}

MotorShip.prototype = new Ship();
MotorShip.prototype.constructor = MotorShip;
