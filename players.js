/* Задача: 
выведите в консоль игрока с максимальным значением scorePoints. 
Используйте цикл, обращение к свойству через точку и метод глобального объекта Math, 
позволяющий найти большее число из всех возможных.
*/

// Тестовые данные - массив объектов players 
const players = [
    {
      id: 1,
      name: "Ivan",
      scorePoints: 4500,
    },
    {
      id: 2,
      name: "Petr",
      scorePoints: 3600,
    },
    {
      id: 3,
      name: "Vadim",
      scorePoints: 3433,
    },
    {
      id: 4,
      name: "Olga",
      scorePoints: 2356,
    },
  ];
  
let score = []; // Создаем пустой массив для хранения очков

for (playerKey in players) {
    score.push(players[playerKey].scorePoints);
}

let maxScore = Math.max(...score); // ищем max score 
 
let playerIndex = score.indexOf(maxScore); // получаем index игрока с максимальным score
 
let playerName = players[playerIndex].name; //получаем имя игрока с максимальным score
  
console.log(playerName + " has the highest score " + maxScore);

