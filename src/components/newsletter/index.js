import "../../css/homepage.css";
const Newsletter = () => {
  return (
    <section class="newsletter">
      <h3>subscribe us for latest updates</h3>

      <form action="">
        <input class="box" type="email" placeholder="enter your email" />
        <input type="submit" value="subscribe" class="btn" />
      </form>
    </section>
  );
};

export default Newsletter;
