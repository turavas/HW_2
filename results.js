const VALUE1 = 7;
let value2 = Math.floor(Math.random() * 20);

console.log(value2);

let result = VALUE1 + value2 / 5 + 17;

console.log(result);

/* В этом примере наивысший приоритет у деления (/). Оно выполнится первым.
Потом сложение (+), и последнне будет присваивание (=).
*/
