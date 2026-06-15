import Link from 'next/link';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const areas = [
  {
    name: "Cheshire",
    towns: [
      "Macclesfield", "Bollington", "Poynton", "Prestbury", "Congleton",
      "Knutsford", "Northwich", "Wilmslow", "Disley", "Astbury",
      "Winsford", "Lymm", "Bowdon", "Cheadle",
    ],
    venues: [
      { name: "Bollington Arts Centre", url: "https://bollingtonartscentre.org.uk/" },
      { name: "Bollington Civic Hall" },
      { name: "Macclesfield Town Hall" },
      { name: "Silklife Centre, Macclesfield" },
      { name: "Astbury Village Hall" },
      { name: "Prestbury Village Hall" },
      { name: "Bramhall Park Golf Club" },
      { name: "The Deanwater Hotel, Woodford" },
      { name: "Bowdon Rooms" },
      { name: "Styal Mill (Quarry Bank), Styal", url: "https://www.nationaltrust.org.uk/visit/cheshire-greater-manchester/quarry-bank/" },
      { name: "Alcumlow Wedding Barn, near Congleton" },
      { name: "Hunting Lodge, Adlington" },
    ],
  },
  {
    name: "Greater Manchester",
    towns: [
      "Manchester", "Salford", "Stretford", "Didsbury", "Cheadle Hulme",
      "Hazel Grove", "Marple", "Bramhall", "Saddleworth",
      "Broadbottom", "Mottram-in-Longdendale",
    ],
    venues: [
      { name: "Stretford Town Hall" },
      { name: "Emmanuel Parish Centre, Didsbury" },
      { name: "Brunswick Church, Manchester" },
      { name: "Northern Lawn Tennis Club, West Didsbury" },
      { name: "Hurst Head Primary School, Cheadle Hulme" },
      { name: "Cheadle Civic Hall" },
      { name: "Mottram Village Hall" },
    ],
  },
  {
    name: "Derbyshire",
    towns: [
      "Buxton", "Ashbourne", "Glossop", "New Mills",
      "Chapel-en-le-Frith", "Grindleford", "South Darley", "Tissington",
    ],
    venues: [
      { name: "Ashbourne Town Hall" },
      { name: "The Playhouse, Chapel-en-le-Frith" },
      { name: "South Darley Village Hall" },
    ],
  },
  {
    name: "Staffordshire",
    towns: [
      "Leek", "Longsdon", "Meerbrook", "Foxt", "Ilam",
      "Barlaston", "Cheddleton", "Brown Edge",
    ],
    venues: [
      { name: "Foxlowe Arts Centre, Leek", url: "https://www.foxlowe.co.uk/" },
      { name: "Longsdon Memorial Hall", url: "https://www.longsdonmemorialhall.com/" },
      { name: "Lower Damgate Farm, Ilam" },
      { name: "Ilam Hall (YHA)", url: "https://www.yha.org.uk/hostel/yha-ilam-hall" },
      { name: "Meerbrook Village Hall" },
    ],
  },
  {
    name: "Yorkshire & beyond",
    towns: [
      "Sheffield", "Holmfirth", "Huddersfield",
      "Warrington", "Wigan", "St Helens", "Derby", "Stafford",
    ],
    venues: [
      { name: "Whirlowbrook Hall, Sheffield" },
      { name: "Samlesbury Hall, Lancashire", url: "https://www.samlesburyhall.co.uk/" },
      { name: "West Mill, Derby" },
      { name: "Alsager Golf Club" },
    ],
  },
];

const Locations = () => {
  return (
    <div>
      <SEO
        title="Areas & Venues"
        description="Maplewood Ceilidh Band play across Cheshire, Derbyshire, Staffordshire and Greater Manchester — and beyond. See the venues and areas we cover."
      />
      <Navbar />
      <div className="page-title">Areas &amp; Venues</div>

      <div className="main-text">
        <p>
          Since 2013 we have played over 160 gigs across the North of England and Midlands.
          We are based in Macclesfield, Buxton and Leek and regularly perform across
          Cheshire, Derbyshire, Staffordshire and Greater Manchester — though we are
          happy to travel further for the right event.
        </p>

        {areas.map((area) => (
          <div key={area.name}>
            <h2>{area.name}</h2>
            <p>
              <strong>Towns: </strong>
              {area.towns.join(', ')}
            </p>
            <p><strong>Some venues we&apos;ve played:</strong></p>
            <ul>
              {area.venues.map((v) => (
                <li key={v.name}>
                  {v.url ? (
                    <a href={v.url} target="_blank" rel="noopener noreferrer">{v.name}</a>
                  ) : (
                    v.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p>
          Don&apos;t see your area listed? We&apos;re always happy to discuss travelling further —{' '}
          <Link href="/contact">get in touch</Link> and we&apos;ll let you know if we can make it work.
        </p>
      </div>
    </div>
  );
};

export default Locations;
