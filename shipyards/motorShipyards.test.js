describe("MotorShipyard", function () {

    describe("Проверка создания корабля", function () {

        beforeEach(() => {
            motorShipyard1 = new MotorShipyard('MotorShipyard1');
            motor1 = new MotorShip('Motor1', 'Model1', 15, 'Steel');
            sailing1 = new SailingShip('Sailing1', 'Model1', 5, 100);
        });

        it("Соответствие свойств экземпляра", function () {
            assert.equal(motorShipyard1.name, 'MotorShipyard1');
        });

        it("Проверка прототипа", function () {
            assert.instanceOf(motorShipyard1, Shipyard);
        });

        it("Проверка createShip", function () {

            let obj = motorShipyard1.createShip(('Motor1', 'Model1', 15, 'Steel'));

            assert.instanceOf(obj, MotorShip);
            assert.notInstanceOf(obj, SailingShip);
        });

        it("Проверка repairShip", function () {

            motor1.damage();
            motorShipyard1.repairShip(motor1);

            assert.isFalse(motor1.isDamaged());

            sailing1.damage();

            let expect = chai.expect;

            expect(() => motorShipyard1.repairShip(sailing1).to.throw('Repair only motor'));

            assert.isTrue(sailing1.isDamaged());
        });

        it("Проверка Paint", function () {
            motorShipyard1.paint(motor1, 'Green');
            motorShipyard1.paint(sailing1, 'Green');

            assert.equal(motor1.color, 'Green');

            assert.equal(sailing1.color, 'Green');
        });

        it("Проверка exchangeShip", function () {

            let obj = motorShipyard1.exchangeShip(motor1, 'Motor2', 'Model1', 15, 'Steel');

            assert.instanceOf(obj, MotorShip);
            assert.notInstanceOf(obj, SailingShip);

            assert.equal(obj.name, 'Motor2');

            assert.isTrue(motor1.outOfUse());

            let expect = chai.expect;
            expect(() => motorShipyard1.exchangeShip(sailing1, 'Motor3', 'Model1', 15, 'Steel')
                .to.throw('Exchange only motor'));

            assert.isFalse(sailing1.stateOfUse());
        });

    });
});
