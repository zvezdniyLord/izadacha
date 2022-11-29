const cartAppendPlace = document.querySelector(".carts");
const date = new Date();
class Cart {
    #id;
    #author;
    #date;
    #root;
    constructor(id, author, date, root) {
        this.#id = id;
        this.#author = author;
        this.#date = date;
        this.#root = root;
    }

    createCart() {
        this.#root.insertAdjacentHTML("afterbegin", `
        <section class="cart">
            <h2 class="cart-title">PON-${this.#id}: Добавил фильтр на товары</h2>
            <h3 class="cart-author">Автор: ${this.#author}</h3>
            <p class="cart-date">Дата:${this.#date}</p>
        </section> 
        `);
    }
}

const cart = new Cart(8849, "Первый автор", date, cartAppendPlace);
cart.createCart();
cart.createCart();