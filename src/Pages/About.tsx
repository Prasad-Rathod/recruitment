const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-black mb-6">
              About Lotus Talents
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 1995 at Raffles House, Singapore, LotusTalent has grown
              into one of Asia’s most respected and enduring HR and executive
              search firms, with over three decades of excellence in talent
              acquisition. Headquartered in Singapore and with a strong regional
              presence across Hong Kong and 14 other countries, LotusTalent
              continues to set the benchmark in headhunting and leadership
              recruitment for the Technology and Consulting sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left"></div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-display font-bold text-black mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                From its early beginnings as a boutique executive search firm,
                LotusTalent has evolved into a global recruitment powerhouse
                with 172+ professionals and 7 international offices. The firm’s
                consultants combine deep market intelligence, cultural insight,
                and precision-driven search methodologies to connect world-class
                organizations with top-tier talent. LotusTalent’s client
                portfolio includes some of the world’s most prestigious
                companies such as PayPal, McKinsey & Company, PwC, Deloitte,
                J.P. Morgan, Morgan Stanley, CRED, Red 2, Uber, Grab, and Arthur
                D. Little (ADL).
              </p>
              <p className="text-gray-600 mb-6">
                Recognized for its commitment to quality, diversity, and
                innovation in hiring, LotusTalent has been awarded “Recruitment
                Agency of the Year” at both the Singapore Talent Expo and the
                Hong Kong Talent Expo, reaffirming its reputation as a trusted
                partner in executive search and workforce strategy. With a
                legacy built on trust, performance, and relationships,
                LotusTalent continues to empower organizations and professionals
                alike — bridging opportunity with excellence across Asia and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
