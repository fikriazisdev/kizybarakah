export type PillarType = 'all' | 'culinary' | 'snacks' | 'luxury';
export type LangType = 'id' | 'en';

export interface KbliItem {
  code: string;
  title: string;
  division: string;
  scope: string;
  regulator: string;
}

export interface ProductItem {
  id: string;
  pillarId: 'culinary' | 'snacks' | 'luxury';
  category: string;
  categoryEn?: string;
  name: string;
  nameEn?: string;
  tagline: string;
  taglineEn?: string;
  description: string;
  descriptionEn?: string;
  priceFormatted: string;
  priceNum: number;
  unit: string;
  unitEn?: string;
  imageUrl: string;
  badges: string[];
  badgesEn?: string[];
  inStock: boolean;
  featured: boolean;
  specifications: string[];
  specificationsEn?: string[];
  halalCertified?: boolean;
  authenticityGuaranteed?: boolean;
  externalUrl?: string;
}

export interface BusinessPillar {
  id: 'culinary' | 'snacks' | 'luxury';
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  iconName: string;
  bannerImage: string;
  kbliCodes: string[];
  categories: string[];
  highlights: string[];
}

export type LeadStatus = 'NEW' | 'CONTACTED' | 'QUOTED' | 'CLOSED_DEAL';

export interface InquiryLead {
  id: string;
  createdAt: string;
  fullName: string;
  companyOrOrg?: string;
  email: string;
  phoneWhatsapp: string;
  pillarInterest: 'culinary' | 'snacks' | 'luxury';
  serviceCategory: string;
  estimatedVolumeOrPacks?: string;
  eventDateOrTarget?: string;
  message: string;
  status: LeadStatus;
}

export interface CompanyProfile {
  name: string;
  legalEntity: string;
  tagline: string;
  taglineEn?: string;
  shortDesc: string;
  shortDescEn?: string;
  vision: string;
  visionEn?: string;
  mission: string[];
  missionEn?: string[];
  values: {
    title: string;
    titleEn?: string;
    description: string;
    descriptionEn?: string;
  }[];
  ceo?: {
    name: string;
    roleId: string;
    roleEn: string;
    photoUrl: string;
    quoteId: string;
    quoteEn: string;
    greetingId: string;
    greetingEn: string;
    paragraphsId: string[];
    paragraphsEn: string[];
  };
  legalities: {
    nib: string;
    standardCert?: string;
    skKemenkumham: string;
    npwp: string;
    halalBpjph: string;
    halalDecree?: string;
    pirtIzin: string;
  };
  contacts: {
    address: string;
    city: string;
    email: string;
    whatsapp: string;
    phone: string;
    instagram: string;
    instagramPempek?: string;
    instagramPesenSamaSarah?: string;
    websiteDomain?: string;
    playStoreUrl?: string;
    easyCateringWebUrl?: string;
    companyProfileUrl?: string;
  };
}

export interface PageMediaAssets {
  heroImage: string;
  aboutImage: string;
  cateringDivisionImage: string;
  snacksDivisionImage: string;
  luxuryDivisionImage: string;
}
