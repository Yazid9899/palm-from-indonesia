import Image from "next/image";
type ProductsProps = {
  id: number;
  name: string;
  derivative: string;
  iconSrc: string;
};
const ProductsLineUp: ProductsProps[] = [
  {
    id: 1,
    name: "Vanilla",
    derivative: "whole . powder . caviar . extract",
    iconSrc: "/vanilla-icon.png",
  },
  {
    id: 2,
    name: "Coconut",
    derivative: "V C O . Desicated Coco",
    iconSrc: "/coconut-icon.png",
  },
  {
    id: 3,
    name: "palm sugar",
    derivative: "granulated . liquid . block",
    iconSrc: "/palm-sugar-icon.png",
  },
];
export default function roductLineup() {
  return (
    <section className="flexCenter landing-section ">
      <div className="h-full w-[75rem] flexCenter flex-col z-10">
        <div className="products-title flexCenter flex-col lineUp-bg w-3/4">
          <p className="regular-b-48">Only Organic Product</p>
          <h1 className="bold-48">OUR PRODUCTS</h1>
        </div>
        <div className="border-b-2 w-full border-black my-5"></div>
        <div className="flexCenter gap-20 product-cards-container">
          {ProductsLineUp.map((product) => (
            <div key={product.id} className="flexCenter flex-col">
              <Image
                src={`/card-pict-${product.id}.jpg`}
                alt={product.name}
                height={300}
                width={300}
                className=""
              />

              <div className=" relative bottom-6 w-[280px] bg-white p-4  rounded-lg drop-shadow-lg">
                <div className="w-0 h-0 relative bottom-10">
                  <div className="flexCenter bg-slate-600 w-14 h-14 p-[0.1rem] drop-shadow-lg rounded-md">
                    <Image
                      src={product.iconSrc}
                      alt={product.iconSrc}
                      height={50}
                      width={50}
                      className="drop-shadow-lg"
                    />
                  </div>
                </div>
                <div className="flexCenter flex-col gap-1">
                  <h5 className="regular-20">{product.name}</h5>
                  <div className="border-b-[1px] w-full border-black"></div>
                  <p className="regular-16">{product.derivative}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="productLineUp-bg absolute w-72 h-screen z-0" />  */}
    </section>
  );
}
