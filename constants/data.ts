// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  {
    href: "/products",
    key: "products",
    label: "Products",
    list: [
      { name: "Vanilla Beans", tag: "vanilla" },
      { name: "Coconut Derivative", tag: "coconut" },
      { name: "Organic Palm Sugar", tag: "palm" },
      { name: "Indonesian Spices", tag: "spices" },
    ],
  },
];

export const PRODUCTS_DATA = [
  {
    slug: "vanilla",
    name: "VANILLA BEANS",
    title: "Enhance the flavor in every dish",
    description1:
      "We proudly source our premium vanilla beans from diverse regions across Indonesia, including Sulawesi, Nusa Tenggara, Maluku, Bali, and Papua. Our vanilla is cured using traditional methods, with the beans naturally sun-dried to ensure optimal flavor and aroma. We take meticulous care in packing and storage to maintain the highest quality standards.",
    description2:
      "Our offerings include whole vanilla beans, vanilla caviar, and vanilla powder, available in both gourmet and extract grades to suit various culinary and commercial needs.",
    greenBoxDesc:
      "Sourced from multiple regions across Indonesia and traditionally sun-cured, our vanilla beans are selected for aroma, moisture, and visual consistency. Explore the specifications below for packaging options, production capacity, certifications, and origin to support reliable culinary and commercial use.",
   
      derivative: [
      {
        name: "powder",
        imageSrc: "/vanilla-powder.jpg",
      },
      {
        name: "Extract & Paste",
        imageSrc: "/vanilla-extract.jpg",
      },
      {
        name: "Whole Beans",
        imageSrc: "/vanilla-whole.jpg",
      },
      {
        name: "Caviar",
        imageSrc: "/vanilla-caviar.jpg",
      },
    ],
    type: [
      {
        name: "Planifolia Vanilla",
        Origin: "Sulawesi, Nusa Tenggara, Maluku, Bali.",
        imageSrc: "/planifolia-vanilla.jpg",
        profile:
          "Smooth, creamy, and rich flavor profile. Commonly used for baked goods, chocolate, cream dessert, beverages, savory dishes and more.",
      },
      {
        name: "Tahitensis Vanilla",
        Origin: "Papua.",
        imageSrc: "/tahitensis-vanilla.jpg",
        profile:
          "Cherries, delicate licorice, raisins, red wine, floral, fruity, sweet notes. Based on our customer, they prefer to use with fresh fruit, cream dessert, baked goods, beverages, savory cream sauce and more.",
      },
    ],
    spesification: [
      {
        name: "Specifications",
        description: [
          "Gourmet Grade (grade A)",
          "Extract Grade (grade B)",
          "Cutting Grade (grade C)",
        ],
      },
      {
        name: "Production capacity",
        description: ["800-1500 Kg/month"],
      },
      {
        name: "Certification",
        description: ["Phytosanitary", "Halal"],
      },
      {
        name: "Origin",
        description: ["Sulawesi", "Nusa Tenggara", "Maluku", "Papua"],
      },
    ],
  },
  {
    slug: "coconut",
    name: "COCONUT DERIVATIVE",
    title: "The authentic taste from the archipelago",
    description1:
      "The coconut (Cocos nucifera L.) is a tropical plant deeply rooted in Indonesian culture, visible from its widespread presence across the archipelago. Often referred to as ‘the tree of life,’ the coconut plant is prized for its versatility and high economic value.",
    description2:
      "Our coconut-based offerings include Desiccated Coconut and Virgin Coconut Oil, both crafted with a commitment to quality to meet various culinary and commercial needs.",
    greenBoxDesc:
      "Derived from Indonesia's abundant coconut resources, our coconut products are processed with care to preserve quality and versatility. Review the specifications below for detailed information on packaging, capacity, certifications, and sourcing.",
    derivative: [
      {
        name: "Desiccated Coconut",
        imageSrc: "/card-pict-2.jpg",
      },
      {
        name: "Virgin Coconut Oil",
        imageSrc: "/coconut-VCO.jpg",
      },
    ],
    type: [],
    spesification: [
      {
        name: "Specifications",
        description: [
          "High Fat DC - fat content 63-67%",
          "Low Fat DC - fat content 42-45%",
        ],
      },
      {
        name: "Production capacity",
        description: ["100-150 MT/month (DC)", "20 kl/month (VCO)"],
      },
      {
        name: "Certification",
        description: ["Phytosanitary", "CoA", "MSDS"],
      },
      {
        name: "Origin",
        description: ["South Sumatra", "Banten"],
      },
    ],
  },
  {
    slug: "palm",
    name: "PALM SUGAR",
    title: "Organically Sweet",
    description1:
      "Palm sugar is a natural product derived from the sugar palm plant, made from the sap tapped from the flower stalks of Arenga pinnata or Cocos nucifera. The sap is heated to evaporate water, transforming into a thick liquid that can either be molded into solid shapes or cooled and stirred to create fine crystal palm sugar.",
    description2:
      "We offer a variety of palm sugar forms to suit different needs: Granulated Palm Sugar, Block Palm Sugar, and Liquid Palm Sugar.",
    greenBoxDesc:
      "Naturally produced from palm sap and traditionally processed to retain its rich character, our palm sugar is available in multiple forms. Explore the specifications below for packaging types, capacity, certifications, and sourcing information.",
   derivative: [
      {
        name: "Granulated",
        imageSrc: "/vanilla-powder.jpg",
      },
      {
        name: "Block Palm Sugar",
        imageSrc: "/vanilla-extract.jpg",
      },
      {
        name: "Liquid Palm Sugar",
        imageSrc: "/vanilla-whole.jpg",
      },
    ],
    type: [
      {
        name: "Diabetic-friendly",
        Origin: "",
        imageSrc: "/palm-type1.png",
        profile: "Glycemic Index 35",
      },
      {
        name: "Distinctive sweetness",
        Origin: "",
        imageSrc: "/palm-type2.png",
        profile: "Suitable for any food and drinks",
      },
    ],
    spesification: [
      {
        name: "Specifications",
        description: [
          "Granulated: Mesh size 12-18, water content <2%, color golden brown",
          "Block: Coin or cube shape, water content 9%, color red brown",
        ],
      },
      {
        name: "Production capacity",
        description: ["50-150 MT/month"],
      },
      {
        name: "Certification",
        description: [
          "Organic Certificate-EU Organic",
          "Organic Certificate-USDA Organic",
          "HACCP",
          "Halal",
        ],
      },
      {
        name: "Origin",
        description: ["Banten", "West Java", "Central Java"],
      },
    ],
  },
  {
    slug: "spices",
    name: "Indonesian Spices",
    title: "Spice up the culinary experience",
    description1:
      "Spices are one of the wealth of the nation. Indonesia plays an important role in the life of the nation. Historically, spices have even played a role important in the global economy.",
    description2:
      "Soil and climate are key aspects of plant growth, including spices and herbs. The land is fertile with the stable weather throughout the year, which means that various types of spices and herbs can grow abundantly in Indonesia.",
    greenBoxDesc:
      "Grown in fertile soil and stable tropical conditions, our Indonesian spices reflect the country's long-standing agricultural heritage. Review the sections below for specifications covering packaging, production capacity, certifications, and origin.",
   derivative: [
      {
        name: "Ginger",
        imageSrc: "/ginger-spices.jpg",
      },
      {
        name: "Clove",
        imageSrc: "/clove-spices.jpg",
      }
    ],
    type: [
    ],
    spesification: [
      {
        name: "Specifications",
        description: [
          "Elephant Ginger - 100g up & 150g up",
          "Paris Ginger - 100g",
          "Clove - AB6 & stem mix grade"
        ],
      },
      {
        name: "Production capacity",
        description: ["20-45 ton/month"],
      },
      {
        name: "Certification",
        description: [
          "Phytosanitary",
        ],
      },
      {
        name: "Origin",
        description: ["West Java", "Central Java", "Sulawesi"],
      },
    ],
  },
];
// ABOUT US SECTION
export const FOUNDERS = [
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

export const VALUES = [
  {
    id: 1,
    svgSrc: "/icon-1.svg",
    title: "Quality Control",
    text: "From sourcing to shipment, ensuring satisfaction.",
  },
  {
    id: 2,
    svgSrc: "/icon-2.svg",
    title: "Free Sample",
    text: "Experience our quality firsthand. Request a free sample today.",
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

// PRODUCT LINE UP
export const PRODUCT_LINEUP = [
  {
    id: 1,
    slug: "vanilla",
    name: "Vanilla",
    derivative: "whole . powder . caviar . extract",
    iconSrc: "/vanilla-icon.png",
  },
  {
    id: 2,
    slug: "coconut",
    name: "Coconut",
    derivative: "V C O . Desiccated Coco",
    iconSrc: "/coconut-icon.png",
  },
  {
    id: 3,
    slug: "palm",
    name: "palm sugar",
    derivative: "granulated . liquid . block",
    iconSrc: "/palm-sugar-icon.png",
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "yazidsiddiq9899@gmail.com" },
  ],
};

export const SOCIALS = [
  {
    label: "LinkedIn",
    logo: "/linkedIn-icon.svg",
    link: "https://www.linkedin.com",
  },
  {
    label: "Instagram",
    logo: "/ig-icon.svg",
    link: "https://www.instagram.com/yourcompanyprofile",
  },
  {
    label: "Whatsapp",
    logo: "/whatsapp-icon.svg",
    link: "https://wa.me/6281281748771",
  },
];



