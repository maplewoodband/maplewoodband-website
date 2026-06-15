import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const Music = () => {
  return (
    <div>
      <SEO
        title="Music"
        description="Listen to Maplewood Ceilidh Band — a selection of our folk and ceilidh tunes on SoundCloud."
      />
      <Navbar />
      <div className="page-title">Music</div>
      <div className="page-content">
        <div className="responsive-iframe-container">
          <iframe
            title="Maplewood music player"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F15607052&show_artwork=true&maxwidth=780&maxheight=1000&dnt=1"
          />
        </div>
      </div>
    </div>
  );
};

export default Music;
