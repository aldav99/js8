describe("Shipyard", function () {

    describe("Проверка создания корабля", function () {

        beforeEach(() => {
            shipyard1 = new Shipyard('Motor1', 'Motor')
            motor1 = new MotorShip('Motor1', 'Model1', 15, 'Steel');
            sailing1 = new SailingShip('Sailing1', 'Model1', 5, 100);
            ship1 = new Ship('Ship1', 'Model1', { x: 20, y: 20 });
        });

        it("Соответствие свойств экземпляра", function () {
            assert.equal(shipyard1.name, 'Motor1');
            assert.equal(shipyard1.repairType, 'Motor');
        });

        it("Проверка isDamaged", function () {
            assert.isFalse(shipyard1.isDamaged(motor1));

            motor1.damage();

            assert.isTrue(shipyard1.isDamaged(motor1));
        });

        it("Проверка defineType", function () {
            assert.equal(shipyard1.defineType(motor1), 1);

            assert.equal(shipyard1.defineType(sailing1), 0);

            let expect = chai.expect;
            expect(() => shipyard1.defineType(ship1).to.throw('Unknown type'));
        });

        it("Проверка Paint", function () {
            shipyard1.paint(motor1, 'Green');
            shipyard1.paint(sailing1, 'Green');

            assert.equal(motor1.color, 'Green');

            assert.equal(sailing1.color, 'Green');
        });
    });
});