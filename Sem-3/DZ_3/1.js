const a = Number.parseFloat(prompt("Введите температуру в градусах: "));

function celsius(a) {
    return Math.round((9 / 5) * a + 32);
}

alert(`Температура по цельсию: ${a} \nТемпература по Фаренгейту: ${celsius(a)}`);