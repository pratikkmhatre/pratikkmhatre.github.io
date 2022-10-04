import "../../css/homepage.css";

import Dawat from "./dawat.jpg";
import Devaya from "./devaya.jpg";
import Fortune from "./fortune.jpg";
import Indiagate from "./indiagate.jpg";

const CatRice = () => {
  const products = [
    {
      title: "Daawat Super, Perfectly Aged, Long Grain Basmati Rice, 5 Kg ",
      url: Dawat,
      price: "Rs 1000 / 5kg",
    },
    {
      title:
        "Daawat Devaaya, Long & Fluffy Grains Biryani Basmati Rice Bag, 5 Kg",
      url: Devaya,
      price: "Rs 730 / 5kg",
    },
    {
      title: "Fortune Everyday Basmati Rice, Full Grain, 1 kg",
      url: Fortune,
      price: "Rs 170 / Kg",
    },
    {
      title: "India Gate Basmati Rice Bag, Mogra, 5kg (Broken Rice) ",
      url: Indiagate,
      price: "Rs 744 / 5kg",
    },
  ];
  return (
    <section class="product" id="product">
      <h1 class="heading">
        Aromatic <span>Basmati Rice</span>
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

export default CatRice;
