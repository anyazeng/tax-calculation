const TAX_TABLE = [
  { min: 0, max: 18200, rate: 0, base: 0 },
  { min: 18200, max: 45000, rate: 0.29, base: 0 },
  { min: 45000, max: 120000, rate: 0.325, base: 5092 },
  { min: 120000, max: 180000, rate: 0.37, base: 29467 },
  { min: 180000, max: Number.POSITIVE_INFINITY, rate: 0.45, base: 51667 },
];

function calculateTax(taxTable, income) {
  //Using destructuring to compare 'income' with 'min' and 'max' properties of each object of the array when 'find' iterates over array elements
  const row = taxTable.find(({ min, max }) => income > min && income <= max);

  const tax = (income - row.min) * row.rate + row.base;
  return tax;
}

// test
console.log(calculateTax(TAX_TABLE, 100000));

// Solution B using for loop
// const calculateTax = function (income) {
//   const TAX_TABLE = [
//     { min: 0, max: 18200, rate: 0, base: 0 },
//     { min: 18200, max: 45000, rate: 0.29, base: 0 },
//     { min: 45000, max: 120000, rate: 0.325, base: 5092 },
//     { min: 120000, max: 180000, rate: 0.37, base: 29467 },
//     { min: 180000, max: Number.POSITIVE_INFINITY, rate: 0.45, base: 51667 },
//   ];

//   let row;
//   for (let i = 0; i < TAX_TABLE.length; i++) {
//     if (income > TAX_TABLE[i].min && income <= TAX_TABLE[i].max) {
//       row = TAX_TABLE[i];
//       break;
//     }
//   }
//   const { min, rate, base } = row;
//   tax = (income - min) * rate + base;
//   return tax;
// };

// console.log(calculateTax(100000));
