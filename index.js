const cartAppendPlace = document.querySelector(".carts");
const date = new Date();

class Cart {
    #root;
    constructor(root) {
        this.#root = root;
    }

    createCart(id, author, date) {
        this.#root.insertAdjacentHTML("afterbegin", `
        <section class="cart">
            <h2 class="cart-title">${createId(id)}: Добавил фильтр на товары</h2>
            <h3 class="cart-author">Автор: ${author}</h3>
            <p class="cart-date">Дата:${date.getFullYear()}</p>
        </section> 
        `);
        return {id, author, date};
    }
}

const cart = new Cart(cartAppendPlace);
cart.createCart(8849, "Первый автор", date);
cart.createCart(8850, "Второй автор", date);
cart.createCart(8851, "Давиденко Александр", date);
console.log(cart)

function createId(salt) {
    const result = `PON-${Math.random(salt) * 36}`;
    console.log(result);
    return result;
}
