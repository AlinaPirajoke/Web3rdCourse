function createPhotoTable() {
    // Предположим, что у вас есть массив URL-адресов изображений
    let miniImages = ["../images_mini/otter.jpg", "../images_mini/lake1.jpg", "../images_mini/mountains.jpg", "../images_mini/river1.jpg", "../images_mini/lake2.jpg", "../images_mini/river2.png", "../images_mini/lake3.jpg", "../images_mini/lake4.png", "../images_mini/lake5.png", "../images_mini/waterfall.png", "../images_mini/sea.png", "../images_mini/swamp.png", "../images_mini/mountains2.jpg", "../images_mini/river3.png", "../images_mini/forest.png"];
    let fullImages = ["../images/otter.png", "../images/lake1.jpg", "../images/mountains.jpeg", "../images/river1.jpg", "../images/lake2.jpg", "../images/river2.jpeg", "../images/lake3.jpg", "../images/lake4.jpeg", "../images/lake5.jpg", "../images/waterfall.jpg", "../images/sea.jpg", "../images/swamp.webp", "../images/mountains2.jpg", "../images/river3.jpg", "../images/forest.webp"];
    let description = ["Выдра", "Озеро и горы", "Цветочки и гора", "Красивое светлое местечко", "Озеро вобще жесть", "Пруд в парке", "Ещё одно озеро, но на восходе", "Озеро, но уже с высоты", "Да сколько тут горных озёр?", "Водопадик", "Море (уже не озеро)", "Болото какое-то", "Мне кажется где-то я это уже видел", "Деревья отражаются в речке", "Поляна"];
    let mdiv = document.getElementById('photos');
    let table = document.getElementById('photoTable');
    mdiv.appendChild(table);
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    let row;
    miniImages.forEach((image, index) => {
        if (index % 3 === 0) {
            row = document.createElement('tr');
            tbody.appendChild(row);
        }
        let cell = document.createElement('td');
        let link = document.createElement('a');
        link.href = fullImages[index]; // Устанавливаем URL-адрес ссылки
        let img = document.createElement('img');
        img.src = miniImages[index];
        img.title = description[index];
        img.alt = description[index];

        let descr = document.createElement("p");
        descr.innerText = description[index];

        link.appendChild(img); // Добавляем изображение в ссылку
        cell.appendChild(link); // Добавляем ссылку в ячейку
        cell.appendChild(descr); // Добавляем текст в ячейку
        row.appendChild(cell);
    });
    
    
    //let img = document.createElement('img');
    //img.src = miniImage[7];
    //div.appendChild(img);
    
    //document.body.appendChild(img); //h
}

function createPhotoTable2() {
    var div = document.getElementById("photos");
    var title = document.createElement("h1");
    title.innerText = "Мои картинки (Я не любитель снимать себя)";
    div.appendChild(title);
}