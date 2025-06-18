import About_Us from "../../assets/icons/images/about-us.jpg";
import About_Us1 from "../../assets/icons/images/about-us1.jpg";
import "./about.styles.scss";

const About = () => {
  return (
    <div className="about_container">
      <div className="about_hero">
        <img className="image_container1" src={About_Us} alt="Beauty salon interior" />
        <div className="hero_content">
          <h1>Welcome to Beauty Salon</h1>
          <p>Where Beauty Meets Excellence</p>
        </div>
      </div>

      <div className="about_details_container">
        <section className="about_section">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Beauty Salon has been at the forefront of beauty and wellness services in New York City. 
            What started as a small family-owned business has grown into a premier destination for beauty enthusiasts, 
            thanks to our unwavering commitment to quality, innovation, and customer satisfaction.
          </p>
        </section>

        <section className="about_section">
          <h2>Our Mission</h2>
          <p>
            At Beauty Salon, we believe that everyone deserves to feel beautiful and confident. Our mission is to provide 
            exceptional beauty services in a welcoming environment where clients can relax, rejuvenate, and transform. 
            We combine traditional techniques with modern innovations to deliver outstanding results that exceed expectations.
          </p>
        </section>

        <div className="image_section">
          <img
            className="image_container2"
            src={About_Us1}
            alt="Beauty salon services"
          />
        </div>

        <section className="about_section">
          <h2>Our Expertise</h2>
          <p>
            Our team of highly skilled professionals brings years of experience and continuous training to every service. 
            From hair styling and coloring to skincare and nail care, our experts stay updated with the latest trends and 
            techniques in the beauty industry. We pride ourselves on our attention to detail and personalized approach to 
            each client's unique needs.
          </p>
        </section>

        <section className="about_section">
          <h2>Our Commitment</h2>
          <p>
            We are committed to using only the highest quality products and maintaining the highest standards of hygiene 
            and safety. Our salon is equipped with state-of-the-art facilities and premium products from leading brands 
            in the beauty industry. We continuously invest in our team's development and our facility's improvement to 
            ensure the best possible experience for our clients.
          </p>
        </section>

        <section className="about_section">
          <h2>Why Choose Us</h2>
          <ul className="features_list">
            <li>Experienced and certified professionals</li>
            <li>Premium quality products and equipment</li>
            <li>Personalized service and attention</li>
            <li>Relaxing and welcoming atmosphere</li>
            <li>Convenient location and flexible hours</li>
            <li>Competitive pricing and value for money</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
