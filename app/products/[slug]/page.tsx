"use client";
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";
import Image from "next/image";
import { PRODUCTS_DATA } from "@/constants";
import Footer from "@/components/Footer";

export default function Page() {
  const params = useParams().slug;
  const product = PRODUCTS_DATA.find((product) => product.slug === params);

  if (!product) return <p>Product not found.</p>;

  return (
    <>
      <Navbar />
      <section className="mx-5 h-[200vh]">
        <div className="bg-vanillaBaner bg-cover bg-center bg-no-repeat w-full h-[377px] flex text-white">
          <div className="flex justify-between w-full">
            <div className="self-end">
              <h1 className="bold-48 w">{product.name}</h1>
            </div>
            <div className="self-start regular-b-60 w-80 pt-16">
              {product.title}
            </div>
          </div>
        </div>
        <Image
          src="/product-page-line.png"
          alt=""
          width={900}
          height={100}
          className="w-screen my-3"
        />
        <div className="md:flexBetween">
          <div className="self-start w-full flex flex-col">
            <p className=" md:regular-24  my-5 text-justify">
              <span className="font-bold text-orange-1">
                {product.description.split(" ").slice(0, 1).join(" ")}{" "}
              </span>
              {product.description.split(" ").slice(1).join(" ")}
            </p>
            <button className=" bold-20 flexCenter gap-2 rounded-md border border-green-200 bg-green-2 px-4 py-2 text-white">
              Request Sample
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
          <div className=" flex flex-row-reverse text-white flex-wrap gap-1 md:gap-4">
            {product.devarative.map((devarative, n) => (
              <div
                key={n}
                style={{ backgroundImage: `url(${devarative.imageSrc})` }}
                className={`bg-cover w-40 h-40 lg:w-[14.5rem] lg:h-[14.5rem] flexEnd`}
              >
                <p className="text-2xl font-extralight mb-2">
                  {devarative.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCT TYPE   */}
        {product.type ? (
          <div className="flex flex-col lg:flex-row gap-2 text-white my-10">
            {product.type.map((type, n) => (
              <div
                key={n}
                className="flex bg-[#00712D] w-full rounded-md drop-shadow-lg p-2"
              >
                <Image
                  src={type.imageSrc}
                  alt=""
                  width={200}
                  height={200}
                  className="h-full w-32"
                />
                <div className="ml-3 p-1">
                  <p className="bold-16">{type.name}</p>
                  <p className="italic-16">Origin: {type.origin}</p>
                  <p className="regular-12 mt-3">{type.profile}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </section>
      <Footer />
    </>
  );
}
