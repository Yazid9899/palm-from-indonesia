import Image from "next/image";
const testimonials = [
  {
    body: "Very high vanillin content! It is proof that your product is absolutely high quality.",
    product: "Tahitensis Vanilla Gourmet grade 16-17 cm",
    customer: {
      name: "Satisfied Customer, Japan",
      imageUrl: "/japan-flag.png",
    },
  },
  {
    body: "Very high vanillin content! It is proof that your product is absolutely high quality.",
    product: "Tahitensis Vanilla Gourmet grade 16-17 cm",
    customer: {
      name: "Satisfied Customer, Canada",
      imageUrl: "/canada-flag.png",
    },
  },
  {
    body: "We got maximum yield from the extraction process and for the sensory taste lab, lab scale is good.",
    product: "Planifolia Vanilla Extract grade 13-15 cm",
    customer: {
      name: "Satisfied Customer, Malaysia",
      imageUrl: "/malaysia-flag.png",
    },
  },
];

export default function Testimonial() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto px-6 ">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-2">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What did our customers say about us?
          </p>
        </div>
        <div className=" mt-16 flow-root sm:mt-20 w-full">
          <div className="flex flex-wrap">
            {testimonials.map((testimonial, n) => (
              <div key={n} className="pt-8 md:w-96 lg:w-1/3 sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-5 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                    <p className="mt-2">product: </p>
                    <p className="italic-12">
                      Tahitensis Vanilla Gourmet grade 16-17 cm
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-7 w-10 bg-gray-50"
                      width={111}
                      height={75}
                      src={testimonial.customer.imageUrl}
                      alt=""
                    />
                    <div className="font-semibold text-gray-900">
                      {testimonial.customer.name}
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
