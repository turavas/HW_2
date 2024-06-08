/* Опишите кнопку отправки сообщений в чат с помощью конструктора класса, 
кнопка должна иметь определенный размер - ширина и высота числовое значение, 
тип кнопки (type = button), цвет кнопки (green), 
создайте метод кнопки (onClick, выводящий в консоль информацию о нашей кнопке в формате 
    
не забудьте создать экземпляр класса button и передать аргументы в наш конструктор класса. 

А также, проверьте в отдельной функции testButton(), что свойства этого экземпляра класса соответствуют заданным.

*/

class Button {
    constructor(width, height, type, color) {
        this.width = width;
        this.height = height;
        this.type = type;
        this.color = color;
    }

    onClick() {
        console.log(this.props);
    }
}

// Создаем экземпляр класса Button
const clickButton = new Button(100, 40, 'button', 'green');
clickButton.onClick();

// Функция для проверки свойств кнопки
function testButton() {
    console.log('Ширина кнопки:', clickButton.width);
    console.log('Высота кнопки:', clickButton.height);
    console.log('Тип кнопки:', clickButton.type);
    console.log('Цвет кнопки:', clickButton.color);
}

// Проверяем свойства кнопки
testButton(clickButton, 100, 40, "button", "green")

function testButton (button, expectedWidth, expectedHeight, expectedType, expectedColor) {
if (
    button.width === expectedWidth && 
    button.height === expectedHeight && 
    button.type === expectedType && 
    button.color === expectedColor
 ) {
    console.log("Correct") 
} else {
    console.log("Incorrect")
}
}   