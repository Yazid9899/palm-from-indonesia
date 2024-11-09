// NAVIGATION
export const NAV_LINKS = [
  { href: '#aboutUs', key: 'about_us', label: 'About Us' },
  { href: '/products', key: 'products', label: 'Products', list:[{ name:'Vanilla Beans', tag: 'vanilla'}, {name:'Coconut Derivative', tag: 'coconut'}, {name: 'Organic Palm Sugar', tag: 'palm'}, {name: 'Indonesian Spices', tag: 'spices'}] },
  { href: '#contactUs', key: 'contacts ', label: 'Contact Us' },
];

export const PRODUCTS_DATA = [
  {
    slug: 'vanilla',
    name: 'VANILLA BEANS',
    title: 'Enhance the flavor in every dish',
    description: 'We source our vanilla beans from several origins in Indonesia such as Sulawesi, Nusa Tenggara, Maluku, Bali, and Papua. Traditionally curing processing by direct sunlight and good maintaining packing and storing. We offer the whole vanilla beans, vanilla caviar, and also vanilla powder with gourmet and extract grade.',
    devarative: [
      {
        name: "powder",
        imageSrc: "/vanilla-powder.jpg"
      },
      {
        name: "Extract & Paste",
        imageSrc: "/vanilla-extract.jpg"
      },
       {
        name: "Whole Beans",
        imageSrc: "/vanilla-whole.jpg"
      },
      {
        name: "Caviar",
        imageSrc: "/vanilla-caviar.jpg"
      }
    ],
    type : [
      {
      name: "Planifolia Vanilla",
      origin: "Sulawesi, Nusa Tenggara, Maluku, Bali.",
      imageSrc: "/planifolia-vanilla.jpg",
      profile: "Smooth, creamy, and rich flavor profile. Commonly used for baked goods, chocolate, cream dessert, beverages, savory dishes and more."
      },
      {
      name: "Tahitensis Vanilla",
      origin: "Papua.",
      imageSrc: "/tahitensis-vanilla.jpg",
      profile: "Cherries, delicate licorice, raisins, red wine, floral, fruity, sweet notes. Based on our customer, they prefer to use with fresh fruit, cream dessert, baked goods, beverages, savory cream sauce and more."
      }
    ],
    spesification: ["Gourmet Grade (grade A)","Extract Grade (grade B)","Cutting Grade (grade C)"],
    productionCapacity: "800-1500 Kg/month",
    certification: ["Phytosanitary", "Halal"],
    origin: ["Sulawesi","Nusa Tenggara","Maluku","Papua"]
  },
  {
    slug: 'coconut',
    name: 'COCONUT DERIVATIVE',
    title: 'The Authentic taste from archipelago',
    description: 'Coconut (Cocos nucifera L.) is a tropical plant that has long been known to the Indonesian people. This can be seen from the spread of coconut plants in almost all regions of the archipelago. The coconut plant is often called ‘the tree of life’ because it’s a multipurpose plant and it has high economic value.',
    devarative: [
      {
        name: "Desiccated Coconut",
        imageSrc: "/card-pict-2.jpg"
      },
      {
        name: "Virgin Coconut Oil",
        imageSrc: "/coconut-VCO.jpg"
      }
    ],
    type : [],
    spesification: ["High Fat DC - fat content 63-67%","Low Fat DC - fat content 42-45%"],
    productionCapacity: ["100-150 MT/month (DC)", "20 kl/month (VCO)"],
    certification: ["Phytosanitary", "CoA", "MSDS"],
    origin: ["South Sumatra","Banten"]
  }
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
  }
];

export const VALUES = [
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

// PRODUCT LINE UP
export const PRODUCT_LINEUP = [
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
]









export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'yazidsiddiq9899@gmail.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};