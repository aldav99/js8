function Dock(position, ships) {
    this.position = position;
    this.ships = ships || [];

    this.moor = function (ship) {
        if (ship.position.x !== this.position.x || ship.position.y !== this.position.y)
            throw new Error('Ship is not hier');

        if (ship.speed !== 0)
            throw new Error('Stop');

        if (!ship.isAnchorDroped()) ship.dropAnchor();

        this.ships.push(ship);
    }

    this.unmoor = function (ship) {
        let index = this.ships.indexOf(ship);

        if (index == -1)
            throw new Error('Ship is not found');
        else
            this.ships.splice(index, 1);

        ship.riseAnchor();
        return ship;
    }

    this.mooredShipsList = function () {
        return this.ships.map(ship => ship.name);
    }
}
