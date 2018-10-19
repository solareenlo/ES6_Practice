var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(sum, desk) {
    if(desk.type==='sitting') { sum.sitting++ }
    if(desk.type==='standing') { sum.standing++ }
    return sum;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);
