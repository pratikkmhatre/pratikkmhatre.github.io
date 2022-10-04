import "../../css/homepage.css";
import HomeImg from "./heroimage.png";
const HeroCard = () => {
  return (
    <section class="home" id="home">
      <div class="image">
        <img src={HomeImg} alt="" />
      </div>

      <div class="content">
        <span>Your daily need products</span>
        <h3>Delivered to your doorstep</h3>
      </div>
    </section>
  );
};

export default HeroCard;
