import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Guide = () => {
  return (
    <div>
      <SEO
        title="What is a Ceilidh?"
        description="New to ceilidh dancing? Maplewood explain what a ceilidh is, what to expect, and why absolutely no experience is needed to have a brilliant time."
      />
      <Navbar />
      <div className="page-title">What is a Ceilidh?</div>

      <div className="main-text">

        <h1>A Beginner&apos;s Guide to Ceilidh Dancing</h1>

        <p>
          Never been to a ceilidh before? Perfect — you&apos;re in exactly the right place.
          A ceilidh (pronounced <em>kay-lee</em>) is a folk dance event where a caller
          explains a sequence of moves to the whole room, and everyone dances together
          to live music. It sounds simple because it is. The main aim is to have fun.
        </p>

        <h2>You Don&apos;t Need Any Experience</h2>

        <p>
          This is the most important thing to know. You do not need to have danced before,
          you do not need to know any steps, and you absolutely do not need a partner to
          arrive with. Our caller will walk everyone through each dance before the music
          starts, explain the moves in plain English, and keep calling the key moments
          throughout so nobody gets lost.
        </p>

        <p>
          We have played for first-timers of all ages — from school children to grandparents —
          and seen them all on the dancefloor within minutes of arriving. If you can walk
          in time to music, you can ceilidh.
        </p>

        <h2>The Caller</h2>

        <p>
          The caller is the person who makes a ceilidh work. They stand at the front, explain
          each dance, demonstrate the moves with the band, and keep calling the sequence
          throughout so the whole room stays together — even when things get gloriously
          chaotic.
        </p>

        <p>
          Our regular caller Steve has been calling dances for over a decade and has an
          instinct for reading a room. He knows when to slow things down for beginners,
          when to push the energy up, and which dances will have your guests whooping by
          the end. A good caller turns a nice evening into an unforgettable one.
        </p>

        <h2>The Music</h2>

        <p>
          Maplewood plays a wide variety of folk music, which is part of what makes us a
          little different. Most ceilidh bands draw mainly from Scottish or Irish traditions —
          and we play plenty of those too — but we particularly love the music of North America
          and Québec. There is something irresistible about a Québécois reel or a lively
          American contra tune that gets people moving without them quite knowing why.
        </p>

        <p>
          Our repertoire includes:
        </p>
        <ul>
          <li>North American and Québécois reels, jigs and contras</li>
          <li>Traditional English country dances and barn dances</li>
          <li>Scottish ceilidh favourites (Strip the Willow, Dashing White Sergeant, Gay Gordons)</li>
          <li>Irish jigs and reels</li>
          <li>Listening sets between dances — for when everyone needs a breather</li>
        </ul>

        <p>
          We perform as a three or four piece band — fiddle, melodeon, concertina, acoustic
          guitar and piano — and bring our own high-quality Bose PA system so the sound
          fills the room without overwhelming it.
        </p>

        <h2>What Kinds of Events?</h2>

        <p>
          Ceilidhs work brilliantly for almost any gathering. Over the years we&apos;ve played for:
        </p>
        <ul>
          <li><strong>Weddings</strong> — ceilidhs are one of the best ways to get all generations dancing together</li>
          <li><strong>Birthday parties</strong> — we&apos;ve helped celebrate everything from 21sts to 90ths</li>
          <li><strong>Fundraisers and charity events</strong></li>
          <li><strong>School and community ceilidhs</strong></li>
          <li><strong>Festivals and arts events</strong></li>
          <li><strong>Private parties and family celebrations</strong></li>
        </ul>

        <p>
          We can perform as a full band with caller for larger events, or as a smaller
          acoustic set for more intimate gatherings. We&apos;re flexible — just{' '}
          <Link href="/contact">get in touch</Link> and we can talk through what would
          work best for your event.
        </p>

        <h2>What Should I Expect on the Night?</h2>

        <p>
          A typical Maplewood ceilidh runs for around three to four hours with a break in
          the middle. We open with accessible dances that the whole room can pick up quickly,
          then build through the evening as everyone&apos;s confidence grows. By the end,
          the room is usually doing Strip the Willow at full speed and refusing to stop.
        </p>

        <p>
          We find it works best when there&apos;s a decent amount of floor space — tables
          pushed to the sides, a good-sized area cleared for dancing. If you&apos;re not
          sure about the layout of your venue, we&apos;re happy to advise.
        </p>

        <h2>See Us in Action</h2>

        <p>
          The best way to get a feel for what we do is to watch us play. Head to our{' '}
          <Link href="/videos">Videos page</Link> to see the band and the dancing, or
          listen to some of our tunes on the{' '}
          <Link href="/music">Music page</Link>.
        </p>

        <p>
          Ready to book, or just want to check our availability?{' '}
          <Link href="/contact">Get in touch</Link> — we&apos;d love to hear about your event.
        </p>

      </div>
      <Footer />
    </div>
  );
};

export default Guide;
