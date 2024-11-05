import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="">
      <Image
        src="/about-txture.png"
        alt="texture"
        height={200}
        width={144}
        className="absolute top-[100vh]"
      />
      <div className="containerLanding z-30">
        <div className="pt-20 mb-5">
          <h1 className="bold-48">ABOUT US</h1>
          <p className="regular-b-20">THE TWO EMERALD FROM INDONESIA</p>
        </div>
        <div className="flexStart gap-10">
          <div className="text-sm flex-grow-0 w-[60%]">
            <p className="regular-16 mb-4 mt-7">
              Palm From Indonesia is an agricultural product brand of PT Dua
              Zamrud Khatulistiwa, located in Tangerang, Banten, Indonesia.
              Founded by Haidar and Iqbal in 2021, we are committed to support
              the sustainable agriculture concept by providing the best of
              Indonesia’s natural resources to the world.
            </p>
            <p className="regular-16 mb-7">
              Palm From Indonesia connect the world to the Indonesia’s finest
              agriculture products. Our mission is to enhance lives by bridging
              the gap between global demand and Indonesia’s exceptional
              agriculture products, brings a secure international trade, and
              open the opportunity for farmers to develop & grow.
            </p>
            <h3 className="regular-16 text-green-1">Export Experience</h3>
            <p className="regular-16">
              Brand of Palm From Indonesia founded in 2021 as representative to
              our first product, the Organic Palm Sugar. After previously using
              the undername company, in August 2022 we registered our own
              company under the name PT. Dua Zamrud Khatlistiwa. By having our
              own company, we start to add other product such as vanilla and
              other coconut derivatives products. At the same time, we succeed
              to build our first business relation with company from Japan and
              we start to supply the vanilla beans until now.
            </p>
          </div>
          <div className="flexStart flex-col">
            <Image
              src="/aboutUs-1.jpg"
              alt="texture"
              height={180}
              width={300}
              className=""
            />
            <div className="mb-10">
              <p className="bold-16">Haidar Ali Al Mushaffa</p>
              <p className="italic-16">Founder & Director</p>
            </div>
            <Image
              src="/aboutUs-2.jpg"
              alt="texture"
              height={180}
              width={300}
              className=""
            />
            <div>
              <p className="bold-16">Muhammad Iqbal Akbar</p>
              <p className="italic-16">Co-Founder & BD</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flexCenter  bg-green-1 h-[10rem] mt-20 text-xs text-white ">
        <div className="flexCenter max-w-[18.75rem]">
          <svg
            width="77"
            height="77"
            viewBox="0 0 77 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame">
              <path
                id="Vector"
                d="M32.9584 6.83325H44.0417C47.7084 6.83325 50.7284 9.6032 51.123 13.1648L56.7084 13.1666C60.6433 13.1666 63.8334 16.3566 63.8334 20.2916V36.9109C61.3963 35.8944 58.722 35.3333 55.9167 35.3333C44.5487 35.3333 35.3334 44.5486 35.3334 55.9166C35.3334 61.4472 37.5146 66.4682 41.0638 70.1666H20.2917C16.3567 70.1666 13.1667 66.9765 13.1667 63.0416V20.2916C13.1667 16.3566 16.3567 13.1666 20.2917 13.1666L25.877 13.1648C26.2717 9.6032 29.2915 6.83325 32.9584 6.83325ZM44.0417 11.5833H32.9584C31.6467 11.5833 30.5834 12.6466 30.5834 13.9583C30.5834 15.2699 31.6467 16.3333 32.9584 16.3333H44.0417C45.3533 16.3333 46.4167 15.2699 46.4167 13.9583C46.4167 12.6466 45.3533 11.5833 44.0417 11.5833ZM73.3334 55.9166C73.3334 65.5357 65.5358 73.3333 55.9167 73.3333C46.2976 73.3333 38.5 65.5357 38.5 55.9166C38.5 46.2975 46.2976 38.4999 55.9167 38.4999C65.5358 38.4999 73.3334 46.2975 73.3334 55.9166ZM66.5364 48.4635C65.918 47.8454 64.9154 47.8454 64.297 48.4635L52.75 60.0108L47.5364 54.7969C46.918 54.1787 45.9154 54.1787 45.297 54.7969C44.6788 55.4153 44.6788 56.4179 45.297 57.0363L51.6303 63.3697C52.2487 63.9878 53.2513 63.9878 53.8698 63.3697L66.5364 50.703C67.1545 50.0845 67.1545 49.082 66.5364 48.4635Z"
                fill="white"
              />
            </g>
          </svg>
          <div className=" ">
            <p className="bold-16">Quality Control</p>
            <p>We only give the best brodi ku, siap abangkuuh</p>
          </div>
        </div>
        <div className="line-y"></div>
        <div className="flexCenter max-w-[18.75rem]">
          <svg
            width="82"
            height="88"
            viewBox="0 0 82 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Box Multiple Arrow Right / undefined / Glyph: undefined">
              <path
                id="Vector"
                d="M53.5871 8.94687C50.5461 7.82305 47.2039 7.82305 44.1629 8.94687L28.551 14.7163C26.0602 15.6369 24.4062 18.0113 24.4062 20.6668V30.7921C27.3088 30.3281 30.3017 30.6119 33.0939 31.6438L48.7057 37.4134C50.5693 38.1021 52.135 39.3089 53.2638 40.835C54.7747 40.5309 56.3374 40.3714 57.9375 40.3714C63.8278 40.3714 69.2131 42.5326 73.3438 46.1054V20.6668C73.3438 18.0113 71.6897 15.6369 69.1989 14.7163L53.5871 8.94687ZM37.1634 26.6293C35.7442 26.1387 34.9916 24.5906 35.4821 23.1715C35.9725 21.7524 37.5208 20.9996 38.94 21.4901L48.577 24.8214C48.7691 24.8877 48.9779 24.8877 49.1697 24.8211L58.7778 21.4919C60.1966 21.0003 61.7452 21.7519 62.2368 23.1707C62.7283 24.5894 61.9768 26.1381 60.558 26.6297L50.9503 29.9589C49.6062 30.4246 48.1449 30.4251 46.8008 29.9605L37.1634 26.6293ZM47.4489 40.8136C48.1779 41.083 48.8351 41.4766 49.4003 41.9657C45.577 43.4526 42.2376 45.9089 39.6845 49.0326C38.9751 48.4272 37.9725 48.2032 37.0278 48.5309L27.1235 51.9627L17.1898 48.5291C15.7706 48.0383 14.2225 48.7912 13.732 50.2104C13.2415 51.6295 13.9942 53.1774 15.4134 53.6682L24.4059 56.7763V66.5598C24.4059 68.0613 25.6231 69.2786 27.1246 69.2786C28.6261 69.2786 29.8434 68.0613 29.8434 66.5598V56.7749L36.3271 54.5281C35.0714 57.4092 34.375 60.5902 34.375 63.9339C34.375 68.6431 35.7565 73.0294 38.1359 76.7098L31.8371 79.0378C28.7962 80.1616 25.4538 80.1616 22.4128 79.0378L6.80097 73.2683C4.31016 72.3479 2.65625 69.9731 2.65625 67.3178V46.7641C2.65625 44.1084 4.31016 41.734 6.80097 40.8136L22.4128 35.044C25.4538 33.9202 28.7962 33.9202 31.8371 35.044L47.4489 40.8136ZM77.875 63.9339C77.875 74.9452 68.9488 83.8714 57.9375 83.8714C46.9262 83.8714 38 74.9452 38 63.9339C38 52.9229 46.9262 43.9964 57.9375 43.9964C68.9488 43.9964 77.875 52.9229 77.875 63.9339ZM47.0625 62.1214C46.0616 62.1214 45.25 62.933 45.25 63.9339C45.25 64.9351 46.0616 65.7464 47.0625 65.7464H64.4368L58.4682 71.7149C57.7606 72.4225 57.7606 73.5702 58.4682 74.2782C59.1762 74.9858 60.3238 74.9858 61.0318 74.2782L70.0943 65.2157C70.8019 64.5077 70.8019 63.36 70.0943 62.6524L61.0318 53.5899C60.3238 52.882 59.1762 52.882 58.4682 53.5899C57.7606 54.2975 57.7606 55.4452 58.4682 56.1532L64.4368 62.1214H47.0625Z"
                fill="white"
              />
            </g>
          </svg>
          <div className="">
            <p className="bold-16">Free Sample</p>
            <p>We are willing to send you free sample to assure our quality.</p>
          </div>
        </div>
        <div className="line-y "></div>

        <div className="flexCenter max-w-[18.75rem]">
          <svg
            width="85"
            height="86"
            viewBox="0 0 85 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame">
              <rect x="0.5" y="0.5" width="84" height="85" stroke="none" />
              <ellipse
                id="Ellipse 65"
                cx="58.7061"
                cy="63.3072"
                rx="7.98"
                ry="8.075"
                stroke="white"
                strokeWidth="4"
              />
              <ellipse
                id="Ellipse 66"
                cx="31.4061"
                cy="63.3072"
                rx="7.56"
                ry="8.075"
                stroke="white"
                strokeWidth="4"
              />
              <path
                id="Vector 582"
                d="M15.9712 43.4029H39.2812V16.1321M39.2812 16.1321V23.9237H12.0862V60.8821C12.0862 61.9866 12.9816 62.8821 14.0862 62.8821H23.7412M39.2812 16.1321H54.8212L73.872 31.4152C74.1085 31.605 74.2462 31.8919 74.2462 32.1952V39.5071M62.5912 23.9237H58.7062V39.5071H74.2462M74.2462 39.5071V60.8821C74.2462 61.9866 73.3508 62.8821 72.2462 62.8821H66.4762M50.9362 62.8821H39.2812"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <div className="">
            <p className="bold-16">Reliable Shipping</p>
            <p>Adaptability & Just-in-time delivery</p>
          </div>
        </div>
        <div className="line-y"></div>

        <div className="flexCenter max-w-[18.75rem]">
          <svg
            width="88"
            height="88"
            viewBox="0 0 88 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="People Call / undefined / Glyph: undefined">
              <path
                id="Vector"
                d="M30.25 37.5C38.258 37.5 44.75 31.0081 44.75 23C44.75 14.9919 38.258 8.5 30.25 8.5C22.2419 8.5 15.75 14.9919 15.75 23C15.75 31.0081 22.2419 37.5 30.25 37.5ZM62.875 37.5C68.8813 37.5 73.75 32.6311 73.75 26.625C73.75 20.6189 68.8813 15.75 62.875 15.75C56.8687 15.75 52 20.6189 52 26.625C52 32.6311 56.8687 37.5 62.875 37.5ZM16.6562 44.75C12.1517 44.75 8.5 48.4018 8.5 52.9062V53.8125C8.5 53.8125 8.5 70.125 30.25 70.125C52 70.125 52 53.8125 52 53.8125V52.9062C52 48.4018 48.3482 44.75 43.8438 44.75H16.6562ZM67.1974 48.3565L68.9211 43.9898C69.8002 41.7623 72.2587 40.6059 74.5334 41.3505L76.0961 41.8616C78.7213 42.7207 80.9007 44.7837 80.9891 47.5481C81.3487 58.8255 72.0154 75.0351 62.0924 80.3729C59.652 81.6858 56.7698 80.8173 54.7133 78.9548L53.4928 77.8491C51.7212 76.2444 51.4965 73.5387 52.9795 71.666L55.8791 68.004C56.9311 66.6754 58.6584 66.0809 60.3045 66.4804L64.9855 67.6165C68.9842 64.9702 71.1273 61.2499 71.4144 56.4558L68.0932 52.9613C66.9241 51.7317 66.5747 49.9341 67.1974 48.3565Z"
                fill="white"
              />
            </g>
          </svg>
          <div className="">
            <p className="bold-16">Available 24/7</p>
            <p>Anytime you contacted us, our team always ready.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
