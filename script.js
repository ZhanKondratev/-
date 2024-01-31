function changeBackgroundColor() {
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff3399"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

setInterval(changeBackgroundColor, 3000); // Меняем цвет фона каждые 3 секунды
