"use client";
import Image from "next/image";
import { useState } from "react";

type FounderProps = {
  id: number;
  imageSrc: string;
  name: string;
  position: string;
};
type OurValueProps = {
  id: number;
  svgSrc: string;
  title: string;
  text: string;
};
const Founders: FounderProps[] = [
  {
    id: 1,
    imageSrc: "/aboutUs-1.jpg",
    name: "Haidar Ali Al Mushaffa",
    position: "Founder & Director",
  },
  {
    id: 2,
    imageSrc: "/aboutUs-2.jpg",
    name: "Muhammad Iqbal Akbar",
    position: "Co-Founder & BD",
  },
];
const OurValues: OurValueProps[] = [
  {
    id: 1,
    svgSrc: "/icon-1.svg",
    title: "Quality Control",
    text: "We only give the best, neverlet you down",
  },
  {
    id: 2,
    svgSrc: "/icon-2.svg",
    title: "Free Sample",
    text: "We are willing to send you free sample to assure our quality",
  },
  {
    id: 3,
    svgSrc: "/icon-3.svg",
    title: "Reliable Shipping",
    text: "Adaptability & Just-in-time delivery",
  },
  {
    id: 4,
    svgSrc: "/icon-4.svg",
    title: "Available 24/7",
    text: "Anytime you contacted us, our team always ready.",
  },
];

export default function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <section className="" id="aboutUs">
      <Image
        src="/about-txture.png"
        alt="texture"
        sizes="(max-width: 768px) 50vw, 25vw"
        className="absolute md:h-[150px] md:w-[144px]  top-[100vh]"
        height={100}
        width={75}
      />
      <div className=" lg:mx-40 z-30">
        <div className="ml-20 mt-10 mb-5 md:ml-48 lg:ml-5">
          <h1 className="bold-20 md:bold-48">ABOUT US</h1>
          <p className="regular-b-20">THE TWO EMERALD FROM INDONESIA</p>
        </div>
        <div className="text-xs md:flexStart gap-10 mx-5">
          {/* TEXT RESPONSIVE */}
          <div className=" text-justify w-full lg:regular-16">
            <p className=" mb-4 mt-7">
              Palm From Indonesia is an agricultural product brand of PT Dua
              Zamrud Khatulistiwa, located in Tangerang, Banten, Indonesia.
              Founded by Haidar and Iqbal in 2021, we are committed to support
              the sustainable agriculture concept by providing the best of
              Indonesia’s natural resources to the world.
            </p>
            <p className=" mb-3">
              Palm From Indonesia connect the world to the Indonesia’s finest
              agriculture products. Our mission is to enhance lives by bridging
              the gap between global demand and Indonesia’s exceptional
              agriculture products, brings a secure international trade, and
              open the opportunity for farmers to develop & grow.
            </p>

            <div
              className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                showMore ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <h3 className=" text-green-1">Export Experience</h3>
              <p className="">
                Brand of Palm From Indonesia founded in 2021 as representative
                to our first product, the Organic Palm Sugar. After previously
                using the undername company, in August 2022 we registered our
                own company under the name PT. Dua Zamrud Khatlistiwa. By having
                our own company, we start to add other product such as vanilla
                and other coconut derivatives products. At the same time, we
                succeed to build our first business relation with company from
                Japan and we start to supply the vanilla beans until now.
              </p>
              <div className="m-1 md:mt-3" onClick={toggleShowMore}>
                <p className=" leading-4 text-orange-1 cursor-pointer">
                  Show Less
                </p>
              </div>
            </div>
            {!showMore && (
              <div className="mb-4" onClick={toggleShowMore}>
                <a href="#aboutUs" className="flexStart">
                  <p className=" leading-4 text-orange-1 animate-bounce">
                    More
                  </p>

                  <svg
                    className="animate-bounce ml-1 self-center"
                    width="10"
                    height="10"
                    viewBox="0 0 56 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L28 25L55 1"
                      stroke="orange"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
          <div className="flexStart gap-2  md:flex-col">
            {Founders.map((founder) => (
              <div key={founder.id} className="mb-10">
                <Image
                  src={`/aboutUs-${founder.id}.jpg`}
                  alt={founder.name}
                  height={150}
                  width={150}
                  className="md:w-72"
                />
                <div>
                  <p className="font-semibold">{founder.name}</p>
                  <p className="italic">{founder.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Control section */}
      <div className="flexCenter flex-wrap  bg-green-1   text-xs text-white ">
        {OurValues.map((value) => (
          <div key={value.id} className="flexCenter">
            <div className="flexCenter max-w-[17rem] py-5 gap-4">
              <Image
                src={value.svgSrc}
                alt={value.title}
                height={77}
                width={77}
                className=""
              />

              <div className=" ">
                <p className="bold-16">{value.title}</p>
                <p>{value.text}</p>
              </div>
            </div>
            {value.id !== 4 ? (
              <div className="hidden border-l-2 h-20 mx-3"></div>
            ) : (
              <div className="hidden" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
