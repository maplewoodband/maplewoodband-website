import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const testimonials = [
  {
    quote:
      'Hiring Maplewood was honestly one of the best decisions we made for our wedding. You guys are fabulous. Thank you for playing.',
    event: 'Wedding, Manchester, July 2024',
  },
  {
    quote:
      'Leek Arts Festival Ceilidh went with a swing last night. Enthusiastic dancing to calling by Steve Hodgskiss, great music from Maplewood Ceilidh Band and lots of smiles and laughter. Thank you all for coming along, dancing so well and the band playing lovely music.',
    event: 'Leek Arts Festival, May 2024',
  },
  {
    quote:
      'Just a quick message to say thanks ever so much for being such good fun and for getting people up and dancing. We had a great time and far more people were on the dance floor than would have been with any other type of band.',
    event: 'Wedding, Barlaston, Stoke-on-Trent, January 2024',
  },
  {
    quote:
      "The mists of the hangover are just clearing (!) and we wanted to email and say thank you so so much for making it a brilliant evening! We've had so many comments about how much people enjoyed the ceilidh and there were people on the dance floor we never expected to see up and joining in, so you did an absolutely brilliant job, thank you so much!",
    event: 'Wedding, Buxton, May 2019',
  },
  {
    quote: 'Thanks to you and the band. Everyone had a great time.',
    event: 'Birthday party, Saddleworth, September 2023',
  },
  {
    quote:
      "Thanks for your assistance in staging the Maplewood Ceilidh at St John's School last night. It was a complete success, everyone had a marvellous time and everything went off without a hitch. Steve and the Maplewood band were fabulous and did an amazing job of including the diverse group of dancers from young and old. I'm seriously considering the Poynton Ceilidhs now.",
    event: 'Festival Ceilidh, Bollington, May 2019',
  },
  {
    quote:
      "Wow, what a party! Thank you so much for giving us a fantastic ceilidh which absolutely everyone enjoyed (as you could probably tell!). Chas as a fellow musician particularly relished the way you all just enjoyed playing together, whether for the reels etc or just as incidental music before anyone even arrived! And your calling was exactly right, gentle but clear. I know it's only just February but it has already been called the party of the year and that's how it felt. Thank you all for making it possible.",
    event: 'Birthday Party, Sutton, near Macclesfield, February 2017',
  },
  {
    quote:
      'In the evening, we had a brilliant local ceilidh band, Maplewood. They are a wonderful bunch of chaps and the caller Steve is really great at explaining the dances to the first time ceilidh dancers.',
    event: 'Wedding, Ilam, September 2016 — write-up in the Boho Wedding Blog',
  },
];

const Feedback = () => {
  return (
    <div>
      <SEO
        title="Feedback"
        description="What people say about Maplewood Ceilidh Band — testimonials from weddings, parties and festivals across the North of England."
      />
      <Navbar />
      <div className="page-title">Feedback</div>
      {testimonials.map((t, i) => (
        <div key={i} className="main-text">
          <p>&ldquo;{t.quote}&rdquo;</p>
          <p>
            <strong>{t.event}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
