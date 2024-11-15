import Image from "next/image";
export default function Featured() {
  return (
    <>
      <section className="">
        <div className="flex flex-col lg:flexCenter lg:flex-row md:mx-5 lg:mx-20 my-10">
          <Image
            src="/features-1.png"
            alt="texture"
            height={500}
            width={500}
            className="self-center"
          />
          <div className="m-3 md:m-10">
            <p className="regular-b-16 md:regular-b-20">
              A Commitment to Fair Practices and Community Development
            </p>
            <h1 className="bold-20 md:bold-48">
              Fair Trade with Reliable Producer & Growers
            </h1>
            <h2 className="regular-16 lg:regular-20 text-green-1 my-5 md:mb-10">
              helps them to access the education, health, and improve their
              social life for a better generation in the future.
            </h2>
            <p className="text-sm text-justify">
              One of the key aspects of fair trade is working with reliable
              producers and growers. This means building long-term relationship
              with farmers and cooperatives, and paing them a fair price for
              their products. By doing so, fair trade business can help to
              ensure that these communities have a stable income and can invest
              in their own development.
            </p>
            <p className="text-sm text-justify mt-5">
              Fair trade also involves providing an access to a training and
              resources to help them improve their practice and increase their
              yield in quantity and quality. This can include training on
              sustainable farming techniques, access to a credit and financing,
              and support for developing new products and markets.
            </p>
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
