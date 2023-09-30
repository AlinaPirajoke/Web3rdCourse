function resetForm(form) {
    // clearing inputs
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        switch (inputs[i].type) {
            // case 'hidden':
            case 'text':
                inputs[i].value = '';
                break;
            case 'radio':
            case 'checkbox':
                inputs[i].checked = false;
        }
    }

    // clearing selects
    var selects = form.getElementsByTagName('select');
    for (var i = 0; i < selects.length; i++)
        selects[i].selectedIndex = 0;

    // clearing textarea
    var text = form.getElementsByTagName('textarea');
    for (var i = 0; i < text.length; i++)
        text[i].innerHTML = '';

    return false;
}

function createPhotoTable() {
    // Предположим, что у вас есть массив URL-адресов изображений
    let miniImages = ["./images_mini/otter.jpf", "./images_mini/lake1.jpg", "./images_mini/mountains.jpg", "./images_mini/river1.jpg", "./images_mini/lake2.jpg", "./images_mini/river2.png", "./images_mini/lake3.jpg", "./images_mini/lake4.png", "./images_mini/lake5.png", "./images_mini/waterfall.png", "./images_mini/sea.png", "./images_mini/swamp.png", "./images_mini/mountains2.jpg", "./images_mini/river3.png", "./images_mini/forest.png"];
    let fullImages = ["./images/otter.jfif", "./images/lake1.jpg", "./images/mountains.jpeg", "./images/river1.jpg", "./images/lake2.jpg", "./images/river2.jpeg", "./images/lake3.jpg", "./images/lake4.jpeg", "./images/lake5.jpg", "./images/waterfall.jpg", "./images/sea.jpg", "./images/swamp.webp", "./images/mountains2.jpg", "./images/river3.jpg", "./images/forest.webp"];
    let description = ["Выдра", "Озеро и горы", "Цветочки и гора", "Красивое светлое местечко", "Озеро вобще жесть", "Пруд в парке", "Ещё одно озеро, но на восходе", "Озеро, но уже с высоты", "Да сколько тут горных озёр?", "Водопадик", "Море (уже не озеро)", "Болото какое-то", "Мне кажется где-то я это уже видел", "Деревья отражаются в речке", "Поляна"];

    let table = document.createElement('table');
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
        link.href = fullImage[index]; // Устанавливаем URL-адрес ссылки
        let img = document.createElement('img');
        img.src = miniImage[index];
        img.title = description[index]
        img.alt = description[index]

        let descr = document.createElement("p")
        descr.text = description[index]

        link.appendChild(img); // Добавляем изображение в ссылку
        cell.appendChild(link); // Добавляем ссылку в ячейку
        cell.appendChild(desct); // Добавляем текст в ячейку
        row.appendChild(cell);
    });

    document.body.appendChild(table); //h
}