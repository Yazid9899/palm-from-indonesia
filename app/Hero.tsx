export default function Hero() {
  return (
    <section className="landing-section">
      <div className="hero-bg  absolute  h-full w-full top-0 z-0" />
      <div className="flexBetween flex-col h-[100%] relative z-10 mx-2">
        <div></div>
        <div className="flexCenter flex-col text-center">
          <h1 className="text-[1.75rem] font-bold leading-15 text-white drop-shadow-xl md:text-[2rem] lg:text-[3rem]">
            From The <span>Best Farmers</span> for a Better World
          </h1>
          <p className="text-[0.75rem] leading-5 font-['Schoolbell'] text-orange-1 drop-shadow-xl md:text-[1rem] md:mx-20 lg:text-[1.25rem] flexCenter">
            With years of export experience and certified products, we bring the
            best quality goods to many countries, ensuring you get top-notch
            products every time
          </p>
        </div>
        <div className=" mb-4">
          <a href="#aboutUs" className="flexCenter flex-col gap-4">
            <p className="text-sm text-gray-200 animate-pulse">Discover More</p>
            <svg
              className="animate-bounce"
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
          </a>
        </div>
      </div>
    </section>
  );
}
