import Header from "./header";
import HeroCard from "./hero_card";
// import "./App.css";
import Categories from "./categories";
import HomeProducts from "./home_products";
import Newsletter from "./newsletter";
import ContactCard from "./contactform";
import Deal from "./deal";

import Login from "./login";
import Signup from "./signup";
import Cart from "./cart";
import CatVegetables from "./catvegetable";
import CatBiscuits from "./catbiscuit";
import CatNoodles from "./catnoodles";
import CatOil from "./catoil";
import CatRice from "./catrice";

const Routes = (path) => {
  switch ((path = window.location.pathname)) {
    case "/":
      return (
        <>
          <Header />
          <HeroCard />
          <Categories />
          <HomeProducts />
          <Deal />
          <ContactCard />
          <Newsletter />
        </>
      );

    case "/login":
      return (
        <>
          <Header />
          <Login />
        </>
      );

    case "/signup":
      return (
        <>
          <Header />
          <Signup />
        </>
      );
    case "/cart":
      return (
        <>
          <Header />
          <Cart />
        </>
      );
    case "/category/vegetables":
      return (
        <>
          <Header />
          <CatVegetables />
        </>
      );
    case "/category/biscuits":
      return (
        <>
          <Header />
          <CatBiscuits />
        </>
      );
    case "/category/noodles":
      return (
        <>
          <Header />
          <CatNoodles />
        </>
      );
    case "/category/oils":
      return (
        <>
          <Header />
          <CatOil />
        </>
      );
    case "/category/rice":
      return (
        <>
          <Header />
          <CatRice />
        </>
      );
    default:
      return (
        <>
          <Header />
          <h1>Under development</h1>
        </>
      );
  }
};

export default Routes;
