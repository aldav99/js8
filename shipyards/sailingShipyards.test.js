describe("SailingShipyard", function () {

    describe("Проверка создания корабля", function () {

        beforeEach(() => {
            sailingShipyard1 = new SailingShipyard('SailingShipyard1');
            motor1 = new MotorShip('Motor1', 'Model1', 15, 'Steel');
            sailing1 = new SailingShip('Sailing1', 'Model1', 5, 100);
        });

        it("Соответствие свойств экземпляра", function () {
            assert.equal(sailingShipyard1.name, 'SailingShipyard1');
        });

        it("Проверка прототипа", function () {
            assert.instanceOf(sailingShipyard1, Shipyard);
        });

        it("Проверка createShip", function () {

            let obj = sailingShipyard1.createShip(('Sailing1', 'Model1', 5, 100));

            assert.instanceOf(obj, SailingShip);
            assert.notInstanceOf(obj, MotorShip);
        });

        it("Проверка repairShip", function () {

            sailing1.damage();
            sailingShipyard1.repairShip(sailing1);

            assert.isFalse(sailing1.isDamaged());

            motor1.damage();

            let expect = chai.expect;

            expect(() => sailingShipyard1.repairShip(motor1).to.throw('Repair only Sailing'));

            assert.isTrue(motor1.isDamaged());
        });

        it("Проверка Paint", function () {
            sailingShipyard1.paint(motor1, 'Green');
            sailingShipyard1.paint(sailing1, 'Green');

            assert.equal(motor1.color, 'Green');

            assert.equal(sailing1.color, 'Green');
        });

        it("Проверка exchangeShip", function () {

            let obj = sailingShipyard1.exchangeShip(sailing1, 'Sailing2', 'Model1', 4, 90);

            assert.instanceOf(obj, SailingShip);
            assert.notInstanceOf(obj, MotorShip);

            assert.equal(obj.name, 'Sailing2');

            assert.isTrue(sailing1.outOfUse());

            let expect = chai.expect;
            expect(() => sailingShipyard1.exchangeShip(motor1, 'Sailing3', 'Model1', 4, 90)
                .to.throw('Exchange only Sailing'));

            assert.isFalse(motor1.stateOfUse());
        });

    });
});
