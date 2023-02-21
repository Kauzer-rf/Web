const product = prompt("Введите название продукта").toLowerCase();

switch (product) {
    case "мандарины":
        alert('Мандарины стоят 100 руб/кг.');
        break;
    case "бананы":
    case "груши":
        alert('Бананы и груши стоят 70 руб/кг.');
        break;
    default:
        alert('Нет такого продукта.');
}