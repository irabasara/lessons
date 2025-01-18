// Задача №1
const body = document.body;

// Задача №2
let quantityAnswer = Number(prompt("Веедіть кількість елементів <li> що має бути на сайті"));

function addItems(quantity) {
    if (!quantity) {
        alert('Введене значення було не числом тому відображаю 5 <li>');
        quantity = 5;
    }
    console.log(quantity);
    for (let i = 0; i < quantity; i += 1) {
        body.insertAdjacentHTML("beforeend", `<li>item №${i + 1}</li>`)
    }
}

addItems(quantityAnswer);

// Задача №3
body.classList.add("loaded");

if (body.classList.contains("loaded")) {
    body.style.color = "green";
}

//     Задача №4
const items = document.querySelectorAll('.item');
items.forEach((item, i) => {
    item.classList.add('active');
    item.textContent = `Елемент №${i + 1}`;
})

//     Задача №5
const button = document.querySelector('.button');

button.scrollIntoView({
    behavior: "smooth"
});

// Задача №6
const link = document.querySelector('.link');
const dataTest = link.dataset.test;
if (dataTest < 200) {
    link.style.color = "red";
}
