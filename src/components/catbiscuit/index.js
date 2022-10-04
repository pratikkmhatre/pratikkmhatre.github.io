import "../../css/homepage.css";

import Darkfantasy from "./darkfantasy.jpg";
import Jimjam from "./jimjam.jpg";
import Maskachaska from "./maskachaska.jpg";
import Vitamarie from "./vitamarie.jpg";

const CatBiscuits = () => {
  const products = [
    {
      title: "Sunfeast Dark Fantasy Choco Fills, 600g",
      url: Darkfantasy,
      price: "Rs 225.00",
    },
    {
      title: "Britannia Treat Jim Jam Biscuits, 138g ",
      url: Jimjam,
      price: "Rs 25.00",
    },
    {
      title: "Britannia 50-50, Maska Chaska, 105 gram",
      url: Maskachaska,
      price: "Rs 27.00",
    },
    {
      title: "Britannia Vita Marie Gold Biscuits, 61gms",
      url: Vitamarie,
      price: "Rs 10.00",
    },
  ];
  return (
    <section class="product" id="product">
      <h1 class="heading">
        crunchy <span>biscuits</span>
      </h1>

      <div class="box-container">
        {products.map((product) => (
          <div class="box">
            <div class="icons">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
            <img src={product.url} alt="" />
            <h3>{product.title}</h3>
            <div class="price">{product.price}</div>
            {/* <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons--> */}
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

export default CatBiscuits;
