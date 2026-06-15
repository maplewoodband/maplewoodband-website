import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const Locations = () => {
  return (
    <div>
      <SEO
        title="Venues"
        description="Venues and locations where Maplewood Ceilidh Band regularly performs across Cheshire, Derbyshire and Greater Manchester."
      />
      <Navbar />
      <div className="page-title">Venues</div>
      <div className="main-text">
        <p>Frequently asked questions</p>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Locations;
