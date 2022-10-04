import "../../css/homepage.css";
const Deal = () => {
  return (
    <section class="deal" id="deal">
      <div class="content">
        <h3 class="title">deal of the day</h3>
        <p>
          Grocery Super Sale is ON!! Buy any product at minimum 10% discount
        </p>

        <div class="count-down">
          <div class="box">
            <h3 id="hour">3</h3>
            <span>day</span>
          </div>
          <div class="box">
            <h3 id="hour">12</h3>
            <span>hour</span>
          </div>
          <div class="box">
            <h3 id="minute">20</h3>
            <span>minute</span>
          </div>
          <div class="box">
            <h3 id="second">60</h3>
            <span>second</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deal;
