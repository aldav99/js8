describe("SailingShip", function () {

    describe("Проверка создания корабля", function () {

        before(() => {
            sailing1 = new SailingShip('Sailing1', 'Model1', 5, 100);
        });

        it("Соответствие свойств экземпляра", function () {
            assert.deepEqual(sailing1.position, { x: 0, y: 0 });

            assert.equal(sailing1.name, 'Sailing1');
            assert.equal(sailing1.model, 'Model1');
            assert.equal(sailing1.color, 'White');
            assert.equal(sailing1.masts, 5);
            assert.equal(sailing1.sailArea, 100);

            assert.equal(sailing1.speed, 0);
            assert.equal(sailing1.distance, 0);
        });

        it("Соответствие внутренних пер-х экземпляра", function () {
            assert.isFalse(sailing1.isAnchorDroped());
            assert.isFalse(sailing1.isDamaged());
            assert.isFalse(sailing1.stateOfUse());
        });

        it("Проверка прототипа", function () {
            assert.instanceOf(sailing1, Ship);
        });

        it("Проверка одной из фунуций, унаследованной от Ship", function () {

            let expect = chai.expect;
            expect(() => sailing1.move('q')).to.throw('Directon is not know');

            sailing1.riseAnchor();
            sailing1.setSpeed(10);
            sailing1.move('n');
            assert.deepEqual(sailing1.position, { x: 0, y: 1 });
        });
    });
});


