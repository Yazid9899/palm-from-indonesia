import Image from "next/image";

const testimonials = [
  {
    body: "Vanillin content is impressive and the beans are consistent in aroma and moisture.",
    product: "Tahitensis Vanilla Gourmet Grade 16-17 cm",
    customer: {
      name: "Buyer, Japan",
      imageUrl: "/japan-flag.png",
    },
  },
  {
    body: "Reliable packing, clear documentation, and steady quality across shipments.",
    product: "Tahitensis Vanilla Gourmet Grade 16-17 cm",
    customer: {
      name: "Buyer, Canada",
      imageUrl: "/canada-flag.png",
    },
  },
  {
    body: "Extraction yield and sensory profile were strong for our lab-scale trials.",
    product: "Planifolia Vanilla Extract Grade 13-15 cm",
    customer: {
      name: "Buyer, Malaysia",
      imageUrl: "/malaysia-flag.png",
    },
  },
];

export default function Testimonial() {
  return (
    <section className="section-pad">
      <div className="container-main">
        <div className="text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="display-2 mt-3">What our customers say</h2>
          <p className="lead mt-4 mx-auto max-w-2xl">
            Feedback from global buyers across food, beverage, and ingredient
            manufacturing.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.customer.name} className="soft-panel p-6">
              <blockquote className="text-sm text-[#3d352d]">
                "{testimonial.body}"
              </blockquote>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#8a7d6d]">
                {testimonial.product}
              </p>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  className="h-8 w-12 rounded-sm object-cover"
                  width={64}
                  height={40}
                  src={testimonial.customer.imageUrl}
                  alt={testimonial.customer.name}
                />
                <p className="text-sm font-semibold text-[#1f3a2a]">
                  {testimonial.customer.name}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
