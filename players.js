const players = [
    {
      id: 1,
      name: "Lora",
      scorePoints: 380,
    },
    {
      id: 2,
      name: "Petr",
      scorePoints: 2,
    },
    {
      id: 3,
      name: "Mona",
      scorePoints: 13,
    },
    {
      id: 4,
      name: "Poul",
      scorePoints: 2356,
    },
    {
      id: 5,
      name: "Dima",
      scorePoints: 2357,
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

