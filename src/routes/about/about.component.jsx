import About_Us from "../../assets/images/about-us.jpg";
import About_Us1 from "../../assets/images/about-us1.jpg";
import "./about.styles.scss";

const About = () => {
  return (
    <div className="about_container">
      <img className="image_conatiner1" src={About_Us} alt="about_us_image" />
      <div className="about_details_container">
        <h2 className="about_container_header">About Us</h2>
        <p className="about_details">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. 
        </p>
        <img
          className="image_conatiner2"
          src={About_Us1}
          alt="about_us_image"
        />
        <p className="about_details">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
          <br />
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>
    </div>
  );
};

export default About;
