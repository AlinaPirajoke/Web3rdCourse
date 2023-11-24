function showDate() {
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    var date = new Date();
    var label = document.getElementById('dateLabel')
    console.log(date);
    label.textContent = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
   }