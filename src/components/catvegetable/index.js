import "../../css/homepage.css";

import Carrot from "./product-1.png";
import Tomato from "./product-2.png";
import Corriander from "./product-3.png";
import Lemon from "./product-4.png";

const CatVegetables = () => {
  const products = [
    {
      title: "Fresh Carrot",
      url: Carrot,
      price: "Rs 30 / Kg",
    },
    {
      title: "Fresh Tomato",
      url: Tomato,
      price: "Rs 45 / Kg",
    },
    {
      title: "Coriander Bunch ",
      url: Corriander,
      price: "Rs 70 / 200g",
    },
    {
      title: "Lemon (Limbu)",
      url: Lemon,
      price: "Rs 30 / 6pcs",
    },
  ];
  return (
    <section class="product" id="product">
      <h1 class="heading">
        Organic <span>Vegetables</span>
      </h1>

      <div class="box-container">
        {products.map((product) => (
          <div class="box">
            <span class="discount">{product.discount}</span>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
            <img src={product.url} alt="" />
            <h3>{product.title}</h3>
            <div class="price">{product.price}</div>
            <div class="quantity">
              <span>Qty:</span>
              <input type="number" min="1" max="1000" placeholder="1" />
            </div>
            <a href="#" class="btn">
              add to cart
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CatVegetables;
