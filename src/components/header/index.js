import "../../css/homepage.css";

const Header = () => {
  return (
    <header>
      <div class="header-1">
        <a href="/" class="logo">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          Grocify
        </a>

        <form action="" class="search-box-container">
          <input type="search" id="search-box" placeholder="search here..." />
          {/* <label  class="fas fa-search"></label> */}
          <button class="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>

      <div class="header-2">
        <div id="menu-bar" class="fas fa-bars"></div>

        <div class="icons">
          {/* <a href="#" class="fas fa-shopping-cart"></a>
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-user-circle"></a> */}
        </div>
        <nav class="navbar">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
          <a href="/cart">Cart</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
