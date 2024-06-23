const expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
];

const expectedResult = [40590, 33000, 709]; // Correct is [40590, 148200, 25709]

// Функция для расчета суммы затрат выше 1000
function calculateExpenses(yearlyExpences) {
  let sum = 0;
  for (let expense of yearlyExpences) {
    if (expense > 1000) {
      sum += expense;
    }
  }
  return sum;
}

function testCalculationExmp(expectedResult, yearlyExpences){
  let actualResult = calculateExpenses(yearlyExpences);
  if (actualResult === expectedResult) {
    console.log(`Test ${actualResult} - Calculation is correct.`);
  } else {
    console.log(`Test ${actualResult} - Calculation is incorrect.`);
  }
}
expencesExamples.forEach((monthExpences, index) => {
  testCalculationExmp(expectedResult[index], monthExpences.yearlyExpences)  
})


/* Рассчитываем сумму расходов > 1000 в каждом годовом списке и сохраняеем результат в массив
let expectedResult1 = 0;
for (let i = 0; i < expencesExamples[0].yearlyExpences.length; i++) {
    if (expencesExamples[0].yearlyExpences[i] > 1000) {
      expectedResult1 += expencesExamples[0].yearlyExpences[i];
    } 
} expectedResult.push(expectedResult1);

let expectedResult2 = 0;
for (let i = 0; i < expencesExamples[1].yearlyExpences.length; i++) {
    if (expencesExamples[1].yearlyExpences[i] > 1000) {
      expectedResult2 += expencesExamples[1].yearlyExpences[i];
    } 
} expectedResult.push(expectedResult2);

let expectedResult3 = 0;
for (let i = 0; i < expencesExamples[2].yearlyExpences.length; i++) {
    if (expencesExamples[2].yearlyExpences[i] > 1000) {
      expectedResult3 += expencesExamples[2].yearlyExpences[i];
    } 
} expectedResult.push(expectedResult3);

console.log(`Yearly expences are ${expectedResult}`); // 40590, 148200, 25709
*/



