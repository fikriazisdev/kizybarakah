export type PillarType = 'all' | 'culinary' | 'snacks' | 'luxury';

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
  name: string;
  tagline: string;
  description: string;
  priceFormatted: string;
  priceNum: number;
  unit: string;
  imageUrl: string;
  badges: string[];
  inStock: boolean;
  featured: boolean;
  specifications: string[];
  halalCertified?: boolean;
  authenticityGuaranteed?: boolean;
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
  shortDesc: string;
  vision: string;
  mission: string[];
  values: {
    title: string;
    description: string;
  }[];
  legalities: {
    nib: string;
    skKemenkumham: string;
    npwp: string;
    halalBpjph: string;
    pirtIzin: string;
  };
  contacts: {
    address: string;
    city: string;
    email: string;
    whatsapp: string;
    phone: string;
    instagram: string;
  };
}

export interface PageMediaAssets {
  heroImage: string;
  aboutImage: string;
  cateringDivisionImage: string;
  snacksDivisionImage: string;
  luxuryDivisionImage: string;
}

