function getTimeOfDay(hour) {
    if (hour < 6) return "Доброй ночи";
    if (hour < 12) return "Доброе утро";
    if (hour < 18) return "Добрый день";
    return "Добрый вечер";
}

function showTimeOfDay() {
    const username = document.getElementById("username").value;
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const timeOfDayMessage = getTimeOfDay(currentHour);
    document.getElementById("timeOfDay").innerText = `${timeOfDayMessage}, ${username}!`;
}