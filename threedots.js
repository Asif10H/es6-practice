const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);

const allAges2 = [ages, ages2, 5, ages3];
console.log(allAges2);
const allAges3 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges3);

const a = 540;
const b = 444;
const c = 2345;
const maximum = Math.max(a, b, c);
console.log(maximum);
const takaPoisa = [33, 444, 235, 450, 333, 3333,  3330];
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);