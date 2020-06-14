function distance(position1, position2) {

    let dx = position1.x - position2.x;
    let dy = position1.y - position2.y;

    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}