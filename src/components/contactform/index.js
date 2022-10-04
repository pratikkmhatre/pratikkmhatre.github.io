import "../../css/homepage.css";
const ContactCard = () => {
  return (
    <section class="contact" id="contact">
      <h1 class="heading">
        <span>contact</span> us
        <h4>We would love to hear from you. Please drop a message if you have any query.</h4>
      </h1>
    
      <form action="">
        <div class="inputBox">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>

        <div class="inputBox">
          <input type="number" placeholder="Contact" />
          <input type="text" placeholder="Subject" />
        </div>

        <textarea
          placeholder="Message"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <input type="Submit" value="send message" class="btn" />
      </form>
    </section>
  );
};

export default ContactCard;
