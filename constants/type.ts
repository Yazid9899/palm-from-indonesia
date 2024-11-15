// types.ts
export interface NavLink {
  href: string;
  key: string;
  label: string;
  list?: { name: string; tag: string }[];
}

export interface ProductType {
  slug: string;
  name: string;
  title: string;
  description1: string;
  description2: string;
  devarative: ProductDerivative[];
  type: { name: string; origin: string; imageSrc: string; profile: string }[];
  spesification: { name: string; description: string[] }[];
}

export interface ProductDerivative {
  name: string;
  imageSrc: string;
}

export interface Founder {
  id: number;
  imageSrc: string;
  name: string;
  position: string;
}

export interface Value {
  id: number;
  svgSrc: string;
  title: string;
  text: string;
}

export interface ProductLineup {
  id: number;
  name: string;
  derivative: string;
  iconSrc: string;
}

export interface ContactInfo {
  label: string;
  value: string;
}

export interface FooterContactInfo {
  title: string;
  links: ContactInfo[];
}

export interface Social {
  label: string;
  logo: string;
  link: string;
}
