describe("distance", function () {

    describe("Проверка на корректных данных", function () {

        it("Расстояние между двумя точками", function () {
            assert.equal(distance({ x: 1, y: 5 }, { x: 4, y: 9 }), 5);
        });

    });

    describe("Проверка на пограничных данных", function () {

        it("Начало = Конец", function () {
            assert.equal(distance({ x: 1, y: 5 }, { x: 1, y: 5 }), 0);
        });

        it("Нулевые координаты", function () {
            assert.equal(distance({ x: 0, y: 0 }, { x: 0, y: 0 }), 0);
        });
    });

    describe("Ложные срабатывания", function () {

        it("Начало = Конец", function () {
            assert.notEqual(distance({ x: 1, y: 5 }, { x: 1, y: 5 }), 1);
        });

        it("Расстояние между двумя точками", function () {
            assert.notEqual(distance({ x: 1, y: 5 }, { x: 4, y: 9 }), 4);
        });
    });



});

