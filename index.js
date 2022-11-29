const cartAppendPlace = document.querySelector(".carts");
const date = new Date();
const inputTask = document.querySelector('.input-cart__task');
const inputAuthor = document.querySelector('.input-cart__author');
const inputBtn = document.querySelector(".input-btn");
console.log(inputAuthor.value);

inputBtn.addEventListener("click", e => {
    e.preventDefault();
    const cart = new Cart(cartAppendPlace);
    if(inputAuthor.value.length === 0 && inputTask.value.length === 0) {
        alert("Введите данные для создания задачи");
    } else {
        cart.createCart(1, inputAuthor.value, inputTask.value, date);
    }
    
});

class Cart {
    #root;
    constructor(root) {
        this.#root = root;
    }

    createCart(id, author, task, date) {
        this.#root.insertAdjacentHTML("afterbegin", `
        <section class="cart">
            <h2 class="cart-title">${createId(id)}: ${author}</h2>
            <h3 class="cart-author">Автор: ${task}</h3>
            <p class="cart-date">Дата:${date.getFullYear()}</p>
        </section> 
        `);
        return {id, author, task, date};
    }
}


function createId(salt) {
    const result = `PON-${Math.random(salt) * 36}`;
    console.log(result);
    return result;
}

function randomColor() {
    return Math.round(0xffffff * Math.random().toString(16));
}

console.log(randomColor())
