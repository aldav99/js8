describe("MotorShip", function () {

    describe("Проверка создания корабля", function () {

        before(() => {
            motor1 = new MotorShip('Motor1', 'Model1', 15, 'Steel');
        });

        it("Соответствие свойств экземпляра", function () {
            assert.deepEqual(motor1.position, { x: 0, y: 0 });

            assert.equal(motor1.name, 'Motor1');
            assert.equal(motor1.model, 'Model1');
            assert.equal(motor1.color, 'Sebous');
            assert.equal(motor1.enginePower, 15);
            assert.equal(motor1.material, 'Steel');

            assert.equal(motor1.speed, 0);
            assert.equal(motor1.distance, 0);
        });

        it("Соответствие внутренних пер-х экземпляра", function () {
            assert.isFalse(motor1.isAnchorDroped());
            assert.isFalse(motor1.isDamaged());
            assert.isFalse(motor1.stateOfUse());
        });

        it("Проверка прототипа", function () {
            assert.instanceOf(motor1, Ship);
        });

        it("Проверка одной из фунуций, унаследованной от Ship", function () {

            let expect = chai.expect;
            expect(() => motor1.move('q')).to.throw('Directon is not know');

            motor1.riseAnchor();
            motor1.setSpeed(10);
            motor1.move('n');
            assert.deepEqual(motor1.position, { x: 0, y: 1 });
        });
    });
});



