import Image from "next/image";
export default function ProductLineup() {
  return (
    <section className="flexCenter landing-section">
      <div className="h-full w-[75rem] flexCenter flex-col lineUp-bg">
        <div className="products-title">
          <p className="regular-b-20">Only Organic Product</p>
          <h1 className="bold-48 capitalize">Our Products</h1>
        </div>
        <div className="border-b-4 w-3/4 border-green-1 my-9"></div>
        <div className="flexCenter gap-20 product-cards-container">
          <div className="flexCenter flex-col">
            <Image
              src="/product-1.png"
              alt="product-1"
              height={300}
              width={300}
              className=""
            />

            <div className=" relative bottom-6 bg-white p-4  rounded-lg drop-shadow-lg">
              <div className="w-0 h-0 relative bottom-10">
                <div className="flexCenter bg-orange-1 w-14 h-14 p-[0.1rem] drop-shadow-lg rounded-md">
                  <Image
                    src="/vanilla-icon.png"
                    alt="product-1"
                    height={50}
                    width={50}
                    className=""
                  />
                </div>
              </div>
              <div className="flexCenter flex-col gap-1">
                <h5 className="regular-20">Vanilla Beans</h5>
                <div className="border-b-[1px] w-full border-black"></div>
                <p className="regular-16">whole . powder . caviar . extract </p>
              </div>
            </div>
          </div>
          <div className="flexCenter flex-col">
            <Image
              src="/product-1.png"
              alt="product-1"
              height={300}
              width={300}
              className=""
            />

            <div className=" relative bottom-6 bg-white p-4  rounded-lg drop-shadow-lg">
              <div className="w-0 h-0 relative bottom-10">
                <div className="flexCenter bg-orange-1 w-14 h-14 p-[0.1rem] drop-shadow-lg rounded-md">
                  <Image
                    src="/vanilla-icon.png"
                    alt="product-1"
                    height={50}
                    width={50}
                    className=""
                  />
                </div>
              </div>
              <div className="flexCenter flex-col gap-1">
                <h5 className="regular-20">Vanilla Beans</h5>
                <div className="border-b-[1px] w-full border-black"></div>
                <p className="regular-16">whole . powder . caviar . extract </p>
              </div>
            </div>
          </div>
          <div className="flexCenter flex-col">
            <Image
              src="/product-1.png"
              alt="product-1"
              height={300}
              width={300}
              className=""
            />

            <div className=" relative bottom-6 bg-white p-4  rounded-lg drop-shadow-lg">
              <div className="w-0 h-0 relative bottom-10">
                <div className="flexCenter bg-orange-1 w-14 h-14 p-[0.1rem] drop-shadow-lg rounded-md">
                  <Image
                    src="/vanilla-icon.png"
                    alt="product-1"
                    height={50}
                    width={50}
                    className=""
                  />
                </div>
              </div>
              <div className="flexCenter flex-col gap-1">
                <h5 className="regular-20">Vanilla Beans</h5>
                <div className="border-b-[1px] w-full border-black"></div>
                <p className="regular-16">whole . powder . caviar . extract </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
