import "../../css/homepage.css";

import Maggi1 from "./maggi1.jpg";
import Maggi2 from "./maggi2.jpg";
import Yippie from "./yippie.jpg";
import Chings from "./chings.jpg";

const CatNoodles = () => {
  const products = [
    {
      title: "Maggi 2-Minute Special Masala Instant Noodles",

      url: Maggi1,
      price: "Rs 179.00",
    },
    {
      title: "MAGGI Masala Veg Atta Noodles ",

      url: Maggi2,
      price: "Rs 94.00",
    },
    {
      title: "Sunfeast YiPPee! Saucy Masala, Instant Noodles ",

      url: Yippie,
      price: "Rs 53.00",
    },
    {
      title: "Ching's Schezwan Noodles 36 x 240 gm",

      url: Chings,
      price: "Rs 55.00",
    },
  ];
  return (
    <section class="product" id="product">
      <h1 class="heading">
        Yummie <span>Noodles</span>
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

export default CatNoodles;
