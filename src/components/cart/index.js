import "./style.css";
import Tomato from "./product-2.png";
import Waiwai from "./product-4.png";
import Sunflower from "./category-7.png";
const Cart = () => {
  return (
    <div className="containercart">
      <h1>Shopping Cart</h1>

      <div className="cart">
        <div className="productscart">
          <div className="productcart">
            <img src={Tomato} />

            <div className="productcart-info">
              <h2 className="productcart-name">Fresh Tomatoes</h2>
              <h4 className="productcart-price">₹ 70</h4>
              {/* <h4 className="productcart-offer">Discount Applied - 8%</h4> */}
              <p className="productcart-quantity" />
              <h4>
                Qty: <input value="2kg" name="" />
              </h4>
              <p className="productcart-remove">
                <i className="fa fa-trash" aria-hidden="true"></i>

                <span className="remove">Remove</span>
              </p>
            </div>
          </div>

          <div className="productcart">
            <img src={Sunflower} />

            <div className="productcart-info">
              <h2 className="productcart-name">Refined Sunflower Oil</h2>
              <h4 className="productcart-price">₹ 180</h4>
              {/* <h4 className="productcart-offer">Discount Applied - 6%</h4> */}
              <p className="productcart-quantity" />
              <h4>
                Qty: <input value="1" name="" />
              </h4>
              <p className="productcart-remove">
                <i className="fa fa-trash" aria-hidden="true"></i>

                <span className="remove">Remove</span>
              </p>
            </div>
          </div>

          <div className="productcart">
            <img src={Waiwai} />

            <div className="productcart-info">
              <h2 className="productcart-name">Waiwai Noodles</h2>
              <h4 className="productcart-price">₹ 50</h4>
              {/* <h4 className="productcart-offer">10%</h4> */}
              <p className="productcart-quantity" />
              <h4>
                Qty: <input value="1" name="" />
              </h4>
              <p className="productcart-remove">
                <i className="fa fa-trash" aria-hidden="true"></i>

                <span className="remove">Remove</span>
              </p>
            </div>
          </div>
        </div>

        <div className="cart-total">
          <p>
            <span>Number of Items</span>

            <span>3</span>
          </p>

          <p>
            <span>Total Price</span>

            <span>Rs. 300</span>
          </p>

          <p>
            <span>Discount Applied </span>

            <span>10%</span>
          </p>

          <p>
            <span>Net Total</span>

            <span>Rs. 270</span>
          </p>

          <a href="#">Proceed to Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
