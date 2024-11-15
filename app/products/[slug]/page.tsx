"use client";
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PRODUCTS_DATA } from "@/constants/data";
import Footer from "@/components/Footer";
import { ProductType } from "@/constants/type";
export default function Page() {
  const params = useParams().slug;
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const newProduct = PRODUCTS_DATA.find((product) => product.slug === params);
    setProduct(newProduct);
  }, [product, params]);

  if (!product) return <p>Product not found.</p>;

  const toggleDropdown = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <>
      <Navbar />
      <section key={product.slug} className="mx-10 flex flex-col">
        <div
          style={{ backgroundImage: `url(/${product?.slug}-banner.jpg)` }}
          className={` bg-cover bg-center bg-no-repeat w-full h-[377px] flex text-white`}
        >
          <div className="flex justify-between w-full">
            <div className="self-end regular-b-60 bg-black/50 p-3 w-full text-orange-1">
              {product.title}
            </div>
          </div>
        </div>
        <h1 className="bold-48 p-4 text-slate-800">{product?.name}</h1>
        <Image
          src="/product-page-line.png"
          alt=""
          width={900}
          height={100}
          className="w-screen my-3"
        />
        <div className="gap-5">
          <div className="self-start flex flex-col">
            <p className=" md:regular-16  mt-5 text-justify">
              <span className="font-bold text-orange-1">
                {product.description1.split(" ").slice(0, 1).join(" ")}{" "}
              </span>
              {product.description1.split(" ").slice(1).join(" ")}
            </p>
            <p className=" md:regular-16 text-justify mt-2">
              {product.description2}
            </p>
          </div>
          <div className="py-20">
            <h1 className="text-slate-950 bold-48 py-5">PRODUCT LINE UP</h1>
            <div className="line-x"></div>
            <div className="flexStart  py-5 w-full text-white flex-wrap gap-1 md:gap-4">
              {product.devarative.map((devarative, n) => (
                <div
                  key={n}
                  className="w-40 h-40 lg:w-[20rem] lg:h-[17rem] flexEnd relative"
                >
                  <Image
                    src={devarative.imageSrc}
                    alt={devarative.name}
                    layout="fill"
                    objectFit="cover"
                    className="text-center"
                  />
                  <p className="bg-black/75 text-center w-full text-2xl font-extralight mb-2 absolute bottom-1 px-1 z-10 ">
                    {devarative.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT TYPE   */}
        {product.type ? (
          <>
            <div className="line-x"></div>
            <div className="flex flex-col lg:flex-row gap-2 my-10 py-20">
              {product.type.map((type, n) => (
                <div
                  key={n}
                  className="flex w-full bg-slate-100 m-2 rounded-md drop-shadow-lg p-2"
                >
                  <Image
                    src={type.imageSrc}
                    alt=""
                    width={200}
                    height={200}
                    className="h-full w-52"
                  />
                  <div className="ml-3 p-1 flex flex-col justify-center">
                    <p className="bold-16">{type.name}</p>
                    <p className="italic-16">
                      {type.origin ? `Origin: ${type.origin}` : ``}
                    </p>
                    <p className="regular-12 mt-3">{type.profile}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="line-x"></div>
          </>
        ) : (
          <div></div>
        )}
        {/* SPESIFICATION */}
        <div className="md:flex md:flex-row-reverse py-10">
          <div className="md:w-1/2 flexCenter flex-col border-solid border-5 border-black">
            <Image
              src={`/${product?.slug}-sample.png`}
              alt={product.slug}
              width={200}
              height={200}
              className="h-[200px]"
            />
            <button
              onClick={() => {
                window.location.href = `/contact?message=Request%20sample%20for%20${product.title}`;
              }}
              className="mt-5 regular-16 bold-20 flexCenter gap-2 rounded-md bg-green-2 px-4 py-2 text-white"
            >
              Request Sample
              <svg
                width="15"
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
          <div className="md:w-1/2 flexStart flex-col w-full max-h-screen  text-white">
            {product.spesification.map((spec, n) => (
              <div key={n} className="p-1 w-full">
                <div
                  onClick={() => toggleDropdown(n)}
                  className="bg-slate-900 p-2 flexBetween rounded-lg drop-shadow-lg"
                >
                  <h1 className="text-xl font-semibold ">{spec.name}</h1>
                  <Image
                    src="/drop_vector.svg"
                    alt=""
                    width={25}
                    height={50}
                    className="mx-4"
                  />
                </div>
                <div
                  className={`bg-gray-200 rounded-lg overflow-hidden  duration-1000 ${
                    openIndexes[n] ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {spec.description.map((text, o) => (
                    <p className="p-3 text-black regular-16" key={o}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
