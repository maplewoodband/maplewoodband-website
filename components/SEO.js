import Head from 'next/head';

const SEO = ({ title, description }) => {
  const siteName = 'Maplewood Ceilidh Band';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription =
    'Maplewood Ceilidh Band — folk musicians based in Macclesfield available for weddings, parties and events across Cheshire, Derbyshire, Staffordshire and Greater Manchester.';
  const metaDescription = description || defaultDescription;
  const siteUrl = 'https://maplewoodband.co.uk';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}/android-chrome-512x512.png`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <link rel="canonical" href={siteUrl} />
    </Head>
  );
};

export default SEO;
