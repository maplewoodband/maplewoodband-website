import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const faqs = [
  {
    q: "Do I need any experience of ceilidh dancing?",
    a: "None at all. Our caller Steve explains every dance from scratch before the music starts, walks everyone through the moves, and keeps calling throughout so nobody gets lost. We have played for complete beginners of all ages — from young children to grandparents — and had them all on the dancefloor within the first dance. If you can follow simple instructions and move in time to music, you can ceilidh.",
  },
  {
    q: "What band options do you offer?",
    a: "We usually perform as a three or four piece band plus our caller Steve. The full band is fiddle, melodeons, acoustic guitar, piano and English concertina. Smaller line-ups are available for more intimate settings or where budget is a consideration — just ask and we can discuss what would work best for your event.",
  },
  {
    q: "What kind of music do you play?",
    a: "We have a broad repertoire drawn from several folk traditions. We particularly enjoy music from North America and Québec — there is something about a driving Québécois reel that gets people moving without them quite knowing why — but we also play a wide range of traditional English, Scottish and Irish tunes. We include some listening sets between dances as well, so there is plenty of variety across the evening.",
  },
  {
    q: "How long will you play for?",
    a: "A typical evening booking runs for around three to four hours with a break in the middle. We are flexible and happy to work around your event's timings — if you let us know how the evening is structured we can suggest the best way to fit the ceilidh in. We find it works well to start the dancing while energy levels are still high, rather than leaving it too late in the evening.",
  },
  {
    q: "Do you bring your own PA and sound equipment?",
    a: "Yes. We bring our own high-quality Bose PA system to every gig, so you do not need to arrange any sound equipment separately. We are self-contained and will set up and take down without needing anything from the venue beyond a power supply.",
  },
  {
    q: "Do you have public liability insurance and PAT tested equipment?",
    a: "Yes to both. We carry full public liability insurance and all our equipment is PAT tested. We can provide documentation on request, which many venues ask for in advance.",
  },
  {
    q: "Our venue has a noise limiter — is that a problem?",
    a: "Not usually. We are used to performing in venues with limiters and will work with you and the venue in advance to make sure everything runs smoothly. Getting the PA positioned and levelled correctly makes a big difference, and our experience across a wide range of venues means we know how to get a good sound without pushing the limits.",
  },
  {
    q: "Where are you based and how far will you travel?",
    a: "We are based in Macclesfield, Buxton and Leek and regularly play across Cheshire, Derbyshire, Staffordshire and Greater Manchester. We are happy to travel further for the right event — have a look at our Areas page for the full range of places we have played, and get in touch if you are not sure whether we can reach you.",
  },
  {
    q: "Can we come and see you before we book?",
    a: "Yes — we play a number of public ceilidhs throughout the year, including regular appearances at Poynton Ceilidh and events at Bollington Arts Centre. Follow our Facebook page for the latest dates, or drop us a message and we will let you know when we are next playing somewhere you can come along.",
  },
  {
    q: "Can you play for children's events and school ceilidhs?",
    a: "Yes. We have played many school and children's ceilidhs over the years, including an annual hoe down at Hurst Head Primary School in Cheadle Hulme. We adjust our dance selection to suit the age group and keep things lively and fun. Children usually take to ceilidh dancing very quickly — often better than the adults.",
  },
  {
    q: "Can you play acoustic, without the PA?",
    a: "Yes, subsets of the band are available for smaller or more intimate settings — garden parties, acoustic pub sessions and the like — where a full PA would be too much. Let us know the kind of event you have in mind and we can suggest the right format.",
  },
  {
    q: "How do we go about booking you?",
    a: "Just get in touch via the Contact page with your event date, location and a rough idea of numbers. We will check availability and come back to you as quickly as we can. We are happy to chat through the details before you commit to anything.",
  },
];

const FAQ = () => {
  return (
    <div>
      <SEO
        title="FAQ"
        description="Frequently asked questions about booking Maplewood Ceilidh Band — experience needed, music, equipment, travel, pricing and more."
      />
      <Navbar />
      <div className="page-title">FAQ</div>

      <div className="main-text">
        <p>
          Planning an event and not sure what to expect from a ceilidh? Here are the
          questions we get asked most often. If yours isn&apos;t here, just{' '}
          <Link href="/contact">get in touch</Link> — we&apos;re happy to help.
        </p>

        {faqs.map((item, i) => (
          <div key={i}>
            <h2>{item.q}</h2>
            <p>{item.a}</p>
          </div>
        ))}

        <p>
          Still have a question?{' '}
          <Link href="/contact">Drop us a message</Link> and we&apos;ll get back to you.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
