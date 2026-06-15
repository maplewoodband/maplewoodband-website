import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div>
      <SEO
        title="Contact Us"
        description="Get in touch with Maplewood Ceilidh Band to book us for your wedding, party or event. Call or email us today."
      />
      <Navbar />
      <div className="page-title">Contact Us</div>
      <div className="main-text">
        <p>
          <a href="mailto:info@maplewoodband.co.uk">info@maplewoodband.co.uk</a>
        </p>
        <p>
          <a href="tel:+447776483017">07776 483017</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
