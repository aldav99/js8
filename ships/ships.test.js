describe("Ship", function () {

    describe("Проверка создания корабля", function () {

        before(() => {
            ship1 = new Ship('Ship1', 'Model1', { x: 20, y: 20 });
            ship2 = new Ship('Ship2', 'Model2');
        });

        it("Соответствие свойств экземпляра", function () {
            assert.deepEqual(ship1.position, { x: 20, y: 20 });
            assert.deepEqual(ship2.position, { x: 0, y: 0 });

            assert.equal(ship1.name, 'Ship1');
            assert.equal(ship1.model, 'Model1');

            assert.equal(ship1.speed, 0);
            assert.equal(ship1.distance, 0);
        });

        it("Соответствие внутренних пер-х экземпляра", function () {
            assert.isFalse(ship1.isAnchorDroped());
            assert.isFalse(ship1.isDamaged());
            assert.isFalse(ship1.stateOfUse());
        });
    });

    describe("Проверка функциональности корабля", function () {

        beforeEach(() => {
            ship1 = new Ship('Ship1', 'Model1', { x: 20, y: 20 });
            ship2 = new Ship('Ship2', 'Model2');
        });

        it("Бросание/Поднятие якоря", function () {
            ship1.dropAnchor();
            assert.isTrue(ship1.isAnchorDroped());

            ship1.riseAnchor();
            assert.isFalse(ship1.isAnchorDroped());
        });

        it("Нельзя менять скорость при опущенном якоре", function () {
            let expect = chai.expect;
            ship1.dropAnchor();
            expect(() => ship1.setSpeed(5)).to.throw();
        });

        it("Проверка изменения скорости", function () {
            assert.equal(ship1.setSpeed(5), 5);
        });

        it("Проверка функций группы DAMAGE и Repair", function () {
            ship1.damage();
            assert.isTrue(ship1.isDamaged());

            ship1.repair();
            assert.isFalse(ship1.isDamaged());

            let expect = chai.expect;
            expect(() => ship1.repair()).to.throw();
        });

        it("Проверка функций группы ofUse", function () {
            ship1.outOfUse();
            assert.isTrue(ship1.stateOfUse());
        });

        it("Проверка moveTo", function () {

            let expect = chai.expect;
            expect(() => ship2.moveTo({ x: 0, y: 10 })).to.throw();

            ship2.riseAnchor();
            expect(() => ship2.moveTo({ x: 0, y: 10 })).to.throw();

            ship2.setSpeed(10);
            ship2.moveTo({ x: 0, y: 10 });
            assert.deepEqual(ship2.position, { x: 0, y: 10 });
            assert.notDeepEqual(ship2.position, { x: 1, y: 10 });

            assert.equal(ship2.distance, 10);

            ship2.moveTo({ x: 0, y: 0 });
            assert.equal(ship2.distance, 20);
        });

        it("Проверка MOVE", function () {

            let expect = chai.expect;
            expect(() => ship2.move('q')).to.throw('Directon is not know');

            ship2.riseAnchor();
            ship2.setSpeed(10);
            ship2.move('n');
            assert.deepEqual(ship2.position, { x: 0, y: 1 });
        });

    });
});


