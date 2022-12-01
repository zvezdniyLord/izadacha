const cartAppendPlace = document.querySelector(".carts");
const date = new Date().getFullYear();
const inputTask = document.querySelector('.input-cart__task');
const inputAuthor = document.querySelector('.input-cart__author');
const inputBtn = document.querySelector(".input-btn");
const edits = document.querySelector('.edit');
const editBlock = document.querySelector('.edit-block');

class Cart {
    #root;
    constructor(root) {
        this.#root = root;
    }

    createCart(id, author, task, date) {
        this.#root.insertAdjacentHTML("afterbegin", `
        <section class="cart">
            <div class="img"></div>
            <div class="cart-block">
                <h2 class="cart-title">${createId(id)} ${task}</h2>
                <h3 class="cart-author">Автор: ${author}</h3>
                <p class="cart-date">Дата: ${date}</p>
            </div>
            <div class="delete-cart">X</div>
        </section>
        `);
        const cartObject = {
            id: id,
            author: author,
            task: task,
            date: date
        }
        return cartObject;
    }

    deleteCart(handler, target) {
        handler.addEventListener("click", () => {
        target.remove();
        });
    }
}

const cart = new Cart(cartAppendPlace);

inputBtn.addEventListener("click", e => {
    e.preventDefault();
    if(inputAuthor.value.length === 0 || inputTask.value.length === 0) {
        alert("Введите данные для создания задачи");
    } else {
        cart.createCart(1, inputAuthor.value, inputTask.value, date);
        inputTask.value = "";
        inputAuthor.value = "";
        const delCart = document.querySelector('.delete-cart');
        const carts = document.querySelector('.cart');
        cart.deleteCart(delCart, carts);
    }
});


function createId(salt) {
    const result = `PON-${Math.random(salt) * 4}`;
    console.log(result);
    return result;
}

function randomColor() {
    return Math.round(0xffffff * Math.random().toString(16));
}

