const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    // В функцтю переданы значения 15 и 10, сумма посчитана, но бонус еще underfined
    debugger;
    sum > 50 ? (bonus = 50) : (bonus = sum);
    // пауза для проверки значения суммы, чтобы определить даем бонус = 50 или бонус = сумме
    debugger;
    return bonus;
    };

//Вызываем функцию и выводим бонус в консоль
console.log(calculateBonus(15, 10));
 