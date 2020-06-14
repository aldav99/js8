describe("Dock", function () {

    describe("Проверка создания  дока", function () {

        beforeEach(() => {
            dock1 = new Dock({ x: 20, y: 20 });
            ship2 = new Ship('Ship2', 'Model2');
            ship3 = new Ship('Ship3', 'Model3', { x: 20, y: 20 });
        });

        it("Соответствие свойств экземпляра", function () {
            assert.deepEqual(dock1.position, { x: 20, y: 20 });
            assert.deepEqual(dock1.ships, []);
        });

        it("Проверка методов швартования и наоборот", function () {
            let expect = chai.expect;

            expect(() => dock1.moor(ship2)).to.throw('Ship is not hier');

            ship2.setSpeed(5);
            ship2.moveTo({ x: 20, y: 20 });
            expect(() => dock1.moor(ship2)).to.throw('Stop');

            ship2.setSpeed(0);
            dock1.moor(ship2);
            assert.deepEqual(dock1.ships, [ship2]);

            expect(() => dock1.unmoor(ship3)).to.throw('Ship is not found');

            assert.equal(dock1.mooredShipsList(), ship2.name);

            assert.deepEqual(dock1.ships, [ship2]);

            assert.equal(dock1.unmoor(ship2), ship2);

            assert.deepEqual(dock1.ships, []);
        });
    });
});



