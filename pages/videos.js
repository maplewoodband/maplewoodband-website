import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const Videos = () => {
  return (
    <div>
      <SEO
        title="Videos"
        description="Watch Maplewood Ceilidh Band in action — videos from ceilidhs and folk dance events."
      />
      <Navbar />
      <div className="page-title">Videos</div>
      <div className="page-content">
        <div className="responsive-iframe-container">
          <iframe
            title="Maplewood Ceilidh Band video 1"
            src="https://www.youtube.com/embed/wHg2uafnxFU?enablejsapi=1&autoplay=0&iv_load_policy=1&loop=0&rel=1&fs=1&playsinline=0&controls=1"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="responsive-iframe-container">
          <iframe
            title="Maplewood Ceilidh Band video 2"
            src="https://www.youtube.com/embed/9eh-IZlDeLw?enablejsapi=1&autoplay=0&iv_load_policy=1&loop=0&rel=1&fs=1&playsinline=0&controls=1"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="responsive-iframe-container">
          <iframe
            title="Maplewood Ceilidh Band video 3"
            src="https://www.youtube.com/embed/CCj42RMx4iI?si=5cvrTTIXEL_tagCb"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Videos;
