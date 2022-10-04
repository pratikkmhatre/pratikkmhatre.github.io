import "../../css/homepage.css";
import Vegetable from "./categoryveg-1.png";
import Juices from "./category-2.png";
import Meat from "./category-3.png";
import Fruits from "./category-4.png";
import Biscuits from "./category-5.png";
import Noodles from "./category-6.png";
import Oils from "./category-7.png";
import Rice from "./category-8.png";

const Categories = () => {
  const categories = [
    {
      title: "vegetables",
      description: "upto 50% off",
      url: Vegetable,
      about: "shop now",
    },
    {
      title: "juices",
      description: "upto 44% off",
      url: Juices,
      about: "shop now",
    },
    {
      title: "meat",
      description: "upto 34% off",
      url: Meat,
      about: "shop now",
    },
    {
      title: "fruits",
      description: "upto 12% off",
      url: Fruits,
      about: "shop now",
    },
    {
      title: "biscuits",
      description: "upto 9% off",
      url: Biscuits,
      about: "shop now",
    },
    {
      title: "noodles",
      description: "upto 16% off",
      url: Noodles,
      about: "shop now",
    },
    {
      title: "oils",
      description: "upto 16% off",
      url: Oils,
      about: "shop now",
    },
    {
      title: "rice",
      description: "upto 16% off",
      url: Rice,
      about: "shop now",
    },
  ];
  return (
    <section class="category" id="category">
      <h1 class="heading">
        shop by <span>category</span>
      </h1>

      <div class="box-container">
        {categories.map((category) => (
          <div class="box">
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <img src={category.url} alt="" />
            <a href={`/category/${category.title}`} class="btn">
              {category.about}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
