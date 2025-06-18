import TestimoneyCard from "../../components/testimony-card/testimoney-card";
import "./testimony.styles.scss";

const testimonies = [
  {
    id: 1,
    content: "The service at Beauty Salon is exceptional! I've never felt more pampered. The staff is professional and the results are always amazing.",
    author: "Sarah Johnson",
    title: "Regular Client",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    content: "I've been coming here for years and they never disappoint. The attention to detail and customer service is outstanding. Highly recommend!",
    author: "Michael Brown",
    title: "VIP Member",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    content: "The best salon experience I've ever had. The stylists are talented and the atmosphere is so relaxing. Worth every penny!",
    author: "Emily Davis",
    title: "New Client",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimony = () => {
  return (
    <div className="testimony-container">
      <div className="testimony-header">
        <h2>What Our Clients Say</h2>
        <p>Discover why our clients love our services and keep coming back for more.</p>
      </div>
      
      <div className="testimonies-grid">
        {testimonies.map((testimony) => (
          <TestimoneyCard key={testimony.id} testimony={testimony} />
        ))}
      </div>
    </div>
  );
};

export default Testimony;
