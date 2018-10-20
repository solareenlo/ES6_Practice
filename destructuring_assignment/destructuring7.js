const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

let point = points.map(point => {
    const x = point[0];
    const y = point[1];
    return { x: x, y: y };
});
console.log(point);

let point2 = points.map(point => {
    const [x, y] = point;
    return { x: x, y: y };
});
console.log(point2);

let point3 = points.map(([ x, y ]) => {
    return { x: x, y: y };
});
console.log(point3);

let point4 = points.map(([ x, y ]) => {
    return { x, y };
});
console.log(point4);
