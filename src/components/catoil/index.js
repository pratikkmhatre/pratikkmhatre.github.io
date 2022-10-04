import "../../css/homepage.css";

import Gemini from "./gemini.jpg";
import Saffola from "./safola.jpg";
import Dhara from "./dhara.jpg";
import Fortune from "./fortune.jpg";

const CatOil = () => {
  const products = [
    {
      title: "Gemini Refined Sunflower Oil Pouch, 1L",
      url: Gemini,
      price: "Rs 201 / L",
    },
    {
      title: "Saffola Rice Bran Cooking oil, 1L",
      url: Saffola,
      price: "Rs 191 / L",
    },
    {
      title: "Dhara Soyabean Oil, 1L Pouch",
      url: Dhara,
      price: "Rs 205 / L",
    },
    {
      title: "Fortune Soyabean Oil, 1L Pouch",
      url: Fortune,
      price: "Rs 141 / L",
    },
  ];
  return (
    <section class="product" id="product">
      <h1 class="heading">
        Cooking <span>Oils</span>
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

export default CatOil;
