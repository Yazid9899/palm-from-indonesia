export default function Hero() {
  return (
    <section className="landing-section">
      <div className="hero-bg bg-cover bg-no-repeat bg-right absolute  h-full w-full top-0 z-0" />
      <div className="flexBetween flex-col h-[100%] relative z-10">
        <div></div>
        <div className="flexCenter flex-col text-center">
          <h1 className="type-hero">
            From The <span>Best Farmers</span> for a Better World
          </h1>
          <p className="type-subHero mx-60 flexCenter">
            With years of export experience and certified products, we bring the
            best quality goods to many countries, ensuring you get top-notch
            products every time
          </p>
        </div>
        <div className="flexCenter flex-col mb-4">
          <p className="text-sm text-gray-200">Discover More</p>
          <svg
            width="50"
            height="20"
            viewBox="0 0 56 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L28 25L55 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
