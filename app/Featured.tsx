import Image from "next/image";
export default function Featured() {
  return (
    <>
      <section className="">
        <div className="flex flex-col md:flexCenter md:flex-row md:mx-5 lg:mx-20 my-10">
          <Image
            src="/features-1.png"
            alt="texture"
            height={500}
            width={500}
            className="self-center"
          />
          <div className="m-3 md:m-10">
            <p className="regular-b-16 md:regular-b-20">Quality Product</p>
            <h1 className="bold-20 md:bold-48">Only The Finest productss</h1>
            <h2 className="regular-16 lg:regular-20 text-green-1 my-5 md:mb-10">
              bridging the gap between global demand and Indonesia’s exceptional
              agriculture products
            </h2>
            <p className="text-xs text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <div className="mt-10">
              <button className="text-xs flexCenter gap-2 rounded-full border border-green-200 bg-green-1 px-4 py-2 text-white">
                Learn More
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Arrow 1"
                    d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="">
        <div className="line-x" />
        <div className="flexCenter flex-wrap gap-10 md:gap-20">
          <Image
            src="/certificate-1.jpg"
            alt="texture"
            height={100}
            width={100}
            className=""
          />{" "}
          <Image
            src="/certificate-2.jpg"
            alt="texture"
            height={100}
            width={100}
            className=""
          />{" "}
          <Image
            src="/certificate-3.jpg"
            alt="texture"
            height={100}
            width={100}
            className=""
          />{" "}
          <Image
            src="/certificate-4.jpg"
            alt="texture"
            height={100}
            width={100}
            className=""
          />
        </div>
        <div className="line-x" />
      </div>
    </>
  );
}
