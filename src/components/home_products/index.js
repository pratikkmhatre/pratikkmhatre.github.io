import "../../css/homepage.css";

import Banana from "./product-1.png";
import Tomato from "./product-2.png";
import Orange from "./product-3.png";
import Waiwai from "./product-4.png";
import Blueberry from "./product-5.png";
import Almonds from "./product-6.png";
import Apple from "./product-7.png";
import Carrot from "./product-8.png";

const HomeProducts = () => {
  const products = [
    {
      title: "Organic Banana",
      discount: "-8%",
      url: Banana,
      price: "Rs 60 / Kg",
    },
    {
      title: "Fresh Tomato",
      discount: "-15%",
      url: Tomato,
      price: "Rs 45 / Kg",
    },
    {
      title: "Nagpur Orange",
      discount: "-22%",
      url: Orange,
      price: "Rs 124 / Kg",
    },
    {
      title: "Wai Wai Noodles",
      discount: "-18%",
      url: Waiwai,
      price: "Rs 25 / 75g",
    },
    {
      title: "Organic Blueberry",
      discount: "-20%",
      url: Blueberry,
      price: "Rs 160 / 100g",
    },
    {
      title: "Roasted Almonds",
      discount: "-13%",
      url: Almonds,
      price: "Rs 300 / 200g",
    },
    {
      title: "Fresh Apples",
      discount: "-12%",
      url: Apple,
      price: "Rs 120 / Kg",
    },
    {
      title: "Fresh Carrot",
      discount: "-10%",
      url: Carrot,
      price: "Rs 45 / Kg",
    },
  ];
  return (
    <section class="product" id="product">
      <h1 class="heading">
        shop by <span>products</span>
      </h1>

      <div class="box-container">
        {products.map((product) => (
          <div class="box">
            <span class="discount">{product.discount}</span>
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-share"></a>
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

export default HomeProducts;
