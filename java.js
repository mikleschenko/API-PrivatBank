// 'use strict'
function clickOn1() {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then(function (data) {
            return data.json() //сюда попадает массив с объектами
        }).then(function (result) { //в резалт попадает return data.json()
        console.log(result);
        createHTML(result); //сначала создаем  ф-цию createHTML(внизу) а потом прописівем её сюда
    })

}
document.querySelector(".btn-info").addEventListener('click', clickOn1);


function clickOn2() {
    fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
        .then(data => data.json()).then(result => createHTML(result))
        // console.log("Безнал", result));
}
document.querySelector(".btn-light").addEventListener('click', clickOn2);


function createHTML(info) {
    let reduceResult = info.reduce(function (acc, element, i) { //в элемент попадает обїект из массива info
        //редюс выведет построчно element.ccy, element.buy и т.д.
        return acc + `<tr>
        <th scope="row">${i + 1}</th>
        <td>${element.ccy}</td>
        <td>${element.buy}</td>
        <td>${element.sale}</td>
    </tr>`
    }, "")
    let table = `<table class="table">
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Валюта</th>
        <th scope="col">Покупка</th>
        <th scope="col">Продажа</th>
    </tr>
    </thead>
    <tbody>
      ${reduceResult}
    </tbody>
    </table>`;
    document.querySelector('.container').innerHTML = table;
}

createHTML();



