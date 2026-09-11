import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero-image-section">
      <div className="hero-image">
        <picture>
          <source media="(min-width:768px)" srcSet={imageDesktop} />
          <img className="image" src={imageMobile} alt="" />
        </picture>
      </div>
      <div className="hero-description">
        <div className="hero-description-heading">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="hero-description-text">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button type="button">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
