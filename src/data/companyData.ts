import { CompanyProfile, InquiryLead, KbliItem, ProductItem, PageMediaAssets } from '../types';

export interface OfficialAffiliationItem {
  id: string;
  logoUrl: string;
  titleId: string;
  titleEn: string;
  descId: string;
  descEn: string;
  showInStrip?: boolean;
}

// 9 Official Affiliations & Regulatory Standards (100% Matching Page 2, Page 9 & Page 10 of Company Profile v8.0)
export const officialAffiliations: OfficialAffiliationItem[] = [
  {
    id: 'halal',
    logoUrl: '/assets/logos/halal_indonesia.svg',
    titleId: 'Halal Indonesia (BPJPH)',
    titleEn: 'Halal Indonesia (BPJPH)',
    descId: 'ID32110005461900623',
    descEn: 'Cert. ID32110005461900623',
    showInStrip: true
  },
  {
    id: 'bkpm',
    logoUrl: '/assets/logos/bkpm_investasi.png',
    titleId: 'Kementerian Investasi / BKPM',
    titleEn: 'Ministry of Investment / BKPM',
    descId: 'NIB OSS 3012220035204 & API-P',
    descEn: 'NIB OSS 3012220035204 & API-P',
    showInStrip: true
  },
  {
    id: 'kemen-umkm',
    logoUrl: '/assets/logos/kemen_umkm.svg',
    titleId: 'Kementerian UMKM RI',
    titleEn: 'Ministry of MSMEs RI',
    descId: 'Pembinaan & Ekosistem Nasional',
    descEn: 'National MSME Empowerment',
    showInStrip: true
  },
  {
    id: 'kemenperin',
    logoUrl: '/assets/logos/kemenperin.svg',
    titleId: 'Kementerian Perindustrian',
    titleEn: 'Ministry of Industry RI',
    descId: 'Sertifikat Standar KBLI 10750',
    descEn: 'Standard Cert. KBLI 10750',
    showInStrip: false
  },
  {
    id: 'cinta-indonesia',
    logoUrl: '/assets/logos/cinta_indonesia.svg',
    titleId: '100% Cinta Indonesia',
    titleEn: '100% Cinta Indonesia',
    descId: 'Produk Kebanggaan Nasional',
    descEn: 'Proud Indonesian Export Brand',
    showInStrip: true
  },
  {
    id: 'dekranasda',
    logoUrl: '/assets/logos/dekranasda_bekasi.svg',
    titleId: 'Dekranasda Kota Bekasi',
    titleEn: 'Dekranasda Bekasi City',
    descId: 'Dewan Kerajinan Nasional Daerah',
    descEn: 'Regional National Crafts Council',
    showInStrip: true
  },
  {
    id: 'umkm-naik-kelas',
    logoUrl: '/assets/logos/umkm_naik_kelas.svg',
    titleId: 'UMKM Naik Kelas',
    titleEn: 'UMKM Naik Kelas',
    descId: 'Program Akselerasi & Inkubasi',
    descEn: 'Business Scaling & Incubation',
    showInStrip: true
  },
  {
    id: 'komunitas-tda',
    logoUrl: '/assets/logos/komunitas_tda.png',
    titleId: 'Komunitas TDA',
    titleEn: 'TDA Community',
    descId: 'Komunitas Pengusaha Tangan Di Atas',
    descEn: 'Tangan Di Atas Entrepreneur Network',
    showInStrip: true
  },
  {
    id: 'linkumkm',
    logoUrl: '/assets/logos/linkumkm.svg',
    titleId: 'LinkUMKM (BRI)',
    titleEn: 'LinkUMKM (BRI)',
    descId: 'Pemberdayaan & Skoring UMKM',
    descEn: 'Digital MSME Scoring & Network',
    showInStrip: true
  }
];

export const initialCompanyProfile: CompanyProfile = {
  name: "PT Kizy Barakah Orbis",
  legalEntity: "PT Kizy Barakah Orbis",
  tagline: "Integritas Usaha, Cita Rasa Nusantara, & Kemitraan Berkelanjutan.",
  taglineEn: "Business Integrity, Authentic Culinary Heritage, & Sustainable Partnership.",
  shortDesc: "Berdiri sejak tahun 2022 di Kota Bekasi, Jawa Barat, PT Kizy Barakah Orbis adalah perusahaan yang berfokus utama pada industri pengolahan pangan Nusantara serta layanan katering dan kudapan acara, yang dilengkapi oleh lini usaha perdagangan ritel gaya hidup terkurasi. Bisnis utama kami bertumpu pada manufaktur Pempek Kizy—yang kini telah rutin diekspor ke Singapura serta pernah berpengalaman dikirim ke berbagai negara seperti Australia, Dubai (UEA), dan Arab Saudi—serta layanan boga PesenSamaSarah Catering & Snack berkapasitas up to 1.000 porsi/hari yang didukung aplikasi EasyCatering, dilengkapi lini pendukung PesenSamaSarah Curated Retail.",
  shortDescEn: "Founded in 2022 in Bekasi, West Java (Greater Jakarta Area), PT Kizy Barakah Orbis is an enterprise primarily focused on Indonesian culinary manufacturing and event catering & snack services, complemented by a curated lifestyle retail division. Our core business is anchored by Pempek Kizy—which is routinely exported to Singapore with prior international shipping experience to countries such as Australia, Dubai (UAE), and Saudi Arabia—and PesenSamaSarah Catering & Snack (up to 1,000 portions/day) supported by our EasyCatering mobile app, alongside our secondary retail line, PesenSamaSarah Curated Retail.",
  vision: "Menjadi perusahaan kuliner Nusantara dan layanan jasa boga terintegrasi yang terpercaya, inovatif, serta membawa keberkahan melalui keunggulan kualitas produk dan kemitraan yang berkelanjutan.",
  visionEn: "To be a trusted, innovative Indonesian culinary and integrated catering enterprise that delivers lasting value through product excellence and sustainable partnerships.",
  mission: [
    "Keunggulan Mutu & Kehalalan Pangan: Menghadirkan produk pangan olahan Nusantara, sajian katering, dan kudapan acara berkualitas tinggi yang diolah secara higienis serta bersertifikat Halal BPJPH RI.",
    "Layanan Boga Berdukungan Teknologi: Menyediakan layanan katering dan snack berkapasitas up to 1.000 porsi per hari yang didukung kemudahan aplikasi digital EasyCatering.",
    "Pengembangan Lini Ritel Terkurasi: Mengelola lini usaha pendukung di bidang perdagangan ritel tas, busana, jam tangan bermerek, dan bingkisan korporat dengan jaminan keaslian produk.",
    "Kemitraan Jangka Panjang: Membangun kolaborasi bisnis yang transparan dan saling menguntungkan bersama klien korporat, jaringan Horeca, agen reseller, serta mitra pemasok."
  ],
  missionEn: [
    "Culinary Quality & Halal Assurance: Deliver authentic Indonesian processed foods, catering dishes, and event snacks prepared hygienically under BPJPH RI Halal standards.",
    "Tech-Supported Catering Hospitality: Provide dependable catering and snack services up to 1,000 portions per day supported by our EasyCatering digital platform.",
    "Curated Retail Commerce: Operate our complementary curated retail line offering authentic branded bags, modern apparel, wristwatches, and corporate hampers.",
    "Enduring Partnerships: Cultivate transparent, mutually beneficial collaborations with corporate clients, Horeca networks, resellers, and suppliers."
  ],
  values: [
    {
      title: "Amanah & Integritas",
      titleEn: "Trust & Integrity",
      description: "Kejujuran bahan baku, keaslian produk, dan ketepatan komitmen waktu pengiriman.",
      descriptionEn: "Honest ingredients, verified product authenticity, and punctual delivery."
    },
    {
      title: "Disiplin Mutu",
      titleEn: "Quality Discipline",
      description: "Kontrol kebersihan dan cita rasa dari dapur produksi hingga pengemasan akhir.",
      descriptionEn: "Strict hygiene and flavor control from kitchen preparation to final packaging."
    },
    {
      title: "Inovasi Layanan",
      titleEn: "Service Innovation",
      description: "Pemanfaatan teknologi vakum beku dan aplikasi digital demi kemudahan pelanggan.",
      descriptionEn: "Leveraging vacuum-freezing and mobile technology for client convenience."
    },
    {
      title: "Tumbuh Bersama",
      titleEn: "Mutual Growth",
      description: "Menciptakan nilai tambah komersial yang berkelanjutan bagi mitra usaha.",
      descriptionEn: "Creating sustainable commercial value for clients and business partners."
    }
  ],
  ceo: {
    name: "Depati Sarah",
    roleId: "Founder & Chief Executive Officer",
    roleEn: "Founder & Chief Executive Officer",
    photoUrl: "/assets/depati_sarah_ceo_executive.jpg",
    quoteId: "Bagi perusahaan kami, kualitas bahan baku yang jujur, proses pengolahan yang higienis serta halal, dan ketulusan dalam menjaga kepercayaan pelanggan adalah fondasi utama dari setiap kemitraan jangka panjang.",
    quoteEn: "For our company, honest ingredient quality, hygienic and Halal-certified preparation, and sincerity in honoring our clients’ trust are the foundations of every lasting partnership.",
    greetingId: "Salam hangat untuk seluruh Pelanggan dan Mitra Bisnis kami,",
    greetingEn: "Warm greetings to our Valued Clients and Business Partners,",
    paragraphsId: [
      "Sejak mendirikan usaha ini pada tahun 2022, kami meyakini bahwa produk pangan dan layanan yang baik selalu berawal dari komitmen terhadap mutu tanpa kompromi. Nilai tersebut menjadi pegangan utama bagi PT Kizy Barakah Orbis dalam menghadirkan produk dan layanan yang memberikan manfaat nyata bagi keluarga, instansi, maupun mitra usaha.",
      "Fokus utama perusahaan kami bertumpu pada dua lini bisnis kuliner dan jasa boga. Pertama, melalui Pempek Kizy, kami memproduksi pempek Palembang autentik berbahan 100% Ikan Tenggiri segar dan Cuko Gula Batok Linggau dalam kemasan vakum beku bersertifikat Halal BPJPH RI yang kini telah rutin diekspor ke Singapura serta pernah dikirim ke berbagai negara seperti Australia, Dubai, dan Arab Saudi. Kedua, melalui PesenSamaSarah Catering & Snack, kami melayani katering prasmanan, nasi kotak eksekutif, dimsum, dan kue tampah berkapasitas up to 1.000 porsi per hari yang didukung aplikasi EasyCatering di Google Play Store, serta diperkuat keanggotaan kami di UMKM Naik Kelas, Dekranasda Kota Bekasi, Komunitas TDA (Tangan Di Atas), dan LinkUMKM.",
      "Sebagai lini bisnis tambahan yang melengkapi grup usaha kami, kami juga menghadirkan divisi perdagangan ritel terkurasi melalui PesenSamaSarah Curated Retail yang melayani kebutuhan tas bermerek, busana modern, jam tangan bermerek, dan paket bingkisan korporat. Kami membuka pintu kolaborasi seluas-luasnya untuk bertumbuh bersama secara berkelanjutan."
    ],
    paragraphsEn: [
      "Since establishing our operations in 2022, we have held a firm conviction that exceptional food products and services begin with an uncompromising commitment to quality. This principle guides PT Kizy Barakah Orbis in delivering trusted solutions for households, corporate institutions, and commercial partners.",
      "Our core business is anchored by two primary Food & Beverage lines. First, through Pempek Kizy, we manufacture authentic Palembang fishcakes crafted from 100% authentic fresh Tenggiri fish and Linggau palm sugar Cuko in BPJPH RI Halal-certified vacuum-frozen packaging—now routinely exported to Singapore with a proven international shipping track record to Australia, Dubai (UAE), and Saudi Arabia. Second, through PesenSamaSarah Catering & Snack, we provide corporate buffet catering, executive meal boxes, dimsum, and traditional snacks up to 1,000 portions per day supported by our EasyCatering app on Google Play Store, while actively participating in UMKM Naik Kelas, Dekranasda Bekasi City, TDA (Tangan Di Atas) Community, and LinkUMKM.",
      "Complementing our core culinary operations, we also operate a secondary lifestyle commerce line under PesenSamaSarah Curated Retail, offering authentic branded bags, modern apparel, wristwatches, and corporate hampers. We warmly welcome enduring collaborations with all our clients and business partners."
    ]
  },
  legalities: {
    nib: "3012220035204",
    standardCert: "30122200352040001 (KBLI 10750 — Industri Makanan dan Masakan Olahan)",
    skKemenkumham: "Perseroan Terbatas (PT) Terdaftar Resmi Kemenkumham RI (Berdiri 2022)",
    npwp: "Terdaftar Resmi DJP RI · API-P & Hak Akses Kepabeanan",
    halalBpjph: "ID32110005461900623",
    halalDecree: "KF-SD-202307081042 (13 Juli 2023)",
    pirtIzin: "Sertifikat Standar Kemenperin RI & BPJPH RI"
  },
  contacts: {
    address: "Kawasan Wisma Jaya, Kusuma Utara, Bekasi Timur",
    city: "Kota Bekasi, Jawa Barat 17111, Indonesia",
    email: "depatisarah86@gmail.com",
    whatsapp: "+6281908131278",
    phone: "+62 819-0813-1278",
    instagram: "@pempek_kizy · @pesensamasarah",
    instagramPempek: "https://www.instagram.com/pempek_kizy",
    instagramPesenSamaSarah: "https://www.instagram.com/pesensamasarah",
    websiteDomain: "kizybarakah.id",
    playStoreUrl: "https://play.google.com/store/apps/details?id=id.easycatering.app",
    easyCateringWebUrl: "https://easycatering-web.onrender.com",
    companyProfileUrl: "/company-profile.html"
  }
};

export const initialPageMediaAssets: PageMediaAssets = {
  heroImage: "/assets/pempek_kizy_hero.jpg",
  aboutImage: "/assets/depati_sarah_ceo_executive.jpg",
  cateringDivisionImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=85",
  snacksDivisionImage: "/assets/pempek_campur_vacuum.jpg",
  luxuryDivisionImage: "/assets/curated_retail_trio_gradient.jpg"
};

export const internalKbliNotes: KbliItem[] = [
  {
    code: "10750",
    title: "Industri Makanan dan Masakan Olahan",
    division: "Bisnis Utama 01: Manufaktur Kuliner (Sertifikat Standar 30122200352040001)",
    scope: "Pengolahan makanan siap saji dan masakan olahan Nusantara beku/vakum (Pempek Kizy 100% Ikan Tenggiri Segar Pilihan, Tekwan, Cuko Gula Batok Linggau).",
    regulator: "Kemenperin / BPJPH Kemenag / OSS BKPM"
  },
  {
    code: "56210",
    title: "Jasa Boga Untuk Suatu Event Tertentu (Event Catering)",
    division: "Bisnis Utama 02: PesenSamaSarah Catering & Snack",
    scope: "Penyediaan jasa boga prasmanan acara korporat, jamuan VIP, seminar, dan syukuran berkapasitas up to 1.000 porsi per hari.",
    regulator: "Kemenparekraf / Kemenkes / OSS"
  },
  {
    code: "56290",
    title: "Penyediaan Jasa Boga Periode Tertentu (Contract & Executive Box)",
    division: "Bisnis Utama 02: PesenSamaSarah Catering & Snack",
    scope: "Penyediaan nasi kotak eksekutif (Executive Meal Box), katering harian kantor/instansi, dimsum, dan kue tampah didukung aplikasi EasyCatering.",
    regulator: "Kemenkes / Dinkes / OSS"
  },
  {
    code: "47713",
    title: "Perdagangan Eceran Barang Dari Kulit dan Tas Bermerek",
    division: "Lini Bisnis Pendukung: PesenSamaSarah Curated Retail",
    scope: "Kurasi tas tangan dan dompet kulit bermerek dengan jaminan keaslian 100%.",
    regulator: "Kemendag / OSS"
  },
  {
    code: "47735",
    title: "Perdagangan Eceran Jam Tangan & Busana Terkurasi",
    division: "Lini Bisnis Pendukung: PesenSamaSarah Curated Retail",
    scope: "Perdagangan jam tangan bermerek pria & wanita, busana modern pilihan, serta Executive Corporate Hampers.",
    regulator: "Kemendag / OSS"
  }
];

export const initialProducts: ProductItem[] = [
  // CORE BUSINESS 01: PEMPEK KIZY (@pempek_kizy) — Exact Wording from Page 6 of v8.0
  {
    id: "pk-01",
    pillarId: "snacks",
    category: "Pempek Kizy (@pempek_kizy)",
    categoryEn: "Pempek Kizy (@pempek_kizy)",
    name: "Paket Pempek Campur Spesial (Lenjer, Telor, Adaan & Kulit)",
    nameEn: "Signature Assorted Pempek Pack (Lenjer, Telor, Adaan & Kulit)",
    tagline: "Varian Utama · Vacuum Frozen Pack",
    taglineEn: "Signature Assortment · Vacuum Frozen",
    description: "Kombinasi lengkap Pempek Lenjer, Pempek Telor Kecil, Pempek Adaan berbumbu santan-bawang yang gurih, serta Pempek Kulit renyah dari 100% Ikan Tenggiri segar, lengkap dengan kemasan Cuko Gula Batok Linggau.",
    descriptionEn: "Complete assortment of Lenjer, Egg-filled Telor, savory aromatic Adaan, and crispy Kulit fishcakes crafted from 100% authentic fresh Tenggiri fish, complete with Linggau palm sugar Cuko sauce.",
    priceFormatted: "Rp 165.000",
    priceNum: 165000,
    unit: "per paket vacuum frozen (+ Cuko)",
    unitEn: "per vacuum frozen pack (+ Cuko)",
    imageUrl: "/assets/pempek_campur_vacuum.jpg",
    badges: ["Bisnis Utama 01", "Halal BPJPH RI"],
    badgesEn: ["Core Business 01", "Halal BPJPH RI"],
    inStock: true,
    featured: true,
    specifications: [
      "100% Ikan Tenggiri Segar Pilihan",
      "Rutin Diekspor ke Singapura 🇸🇬",
      "Pernah Dikirim ke Australia, Dubai & Arab Saudi",
      "Halal BPJPH RI: ID32110005461900623"
    ],
    specificationsEn: [
      "100% Authentic Fresh Tenggiri Fish",
      "Routinely Exported to Singapore 🇸🇬",
      "Prior Shipping Experience: Australia, Dubai & Saudi Arabia",
      "Halal BPJPH RI: ID32110005461900623"
    ],
    halalCertified: true,
    externalUrl: "https://www.instagram.com/pempek_kizy"
  },
  {
    id: "pk-02",
    pillarId: "snacks",
    category: "Pempek Kizy (@pempek_kizy)",
    categoryEn: "Pempek Kizy (@pempek_kizy)",
    name: "Pempek Kapal Selam Besar & Pempek Lenggang Panggang",
    nameEn: "Large Pempek Kapal Selam & Grilled Pempek Lenggang",
    tagline: "Hidangan Favorit Keluarga & Jamuan",
    taglineEn: "Family & Banquet Specialties",
    description: "Varian Pempek Kapal Selam dengan isian telur utuh yang lembut serta Pempek Lenggang Panggang beraroma khas yang praktis disajikan kapan saja dengan digoreng, dikukus, maupun menggunakan air-fryer.",
    descriptionEn: "Generous egg-filled Kapal Selam and aromatic grilled Lenggang fishcakes engineered for effortless preparation by pan-frying, steaming, or air-frying.",
    priceFormatted: "Rp 185.000",
    priceNum: 185000,
    unit: "per paket vacuum frozen",
    unitEn: "per vacuum frozen pack",
    imageUrl: "/assets/pempek_kapal_selam.jpg",
    badges: ["Favorit Jamuan", "Vacuum Frozen"],
    badgesEn: ["Banquet Favorite", "Vacuum Frozen"],
    inStock: true,
    featured: true,
    specifications: [
      "100% Ikan Tenggiri Segar Tanpa Pengawet",
      "Kemasan Vacuum-Sealed Frozen Tahan 6 Bulan",
      "Praktis: Goreng, Kukus, atau Air-Fryer",
      "Tersedia Harga Grosir Horeca & Reseller"
    ],
    specificationsEn: [
      "100% Fresh Tenggiri Fish, Zero Preservatives",
      "Vacuum-Sealed Frozen Pack (6 Months Shelf Life)",
      "Ready to Fry, Steam, or Air-Fry",
      "B2B Horeca & Reseller Pricing Available"
    ],
    halalCertified: true,
    externalUrl: "https://www.instagram.com/pempek_kizy"
  },
  {
    id: "pk-03",
    pillarId: "snacks",
    category: "Pempek Kizy (@pempek_kizy)",
    categoryEn: "Pempek Kizy (@pempek_kizy)",
    name: "Paket Tekwan Ikan Tenggiri Lengkap Bumbu Kuah Udang",
    nameEn: "Authentic Tekwan Fish-Ball Soup Complete Kit",
    tagline: "Sajian Kuah Khas Palembang",
    taglineEn: "Palembang Heritage Soup Kit",
    description: "Paket bola-bola ikan tenggiri Tekwan lembut yang dikemas praktis bersama bumbu kaldu udang asli, jamur kuping, bunga sedap malam, soun, dan sambal—terdaftar resmi dalam Sertifikat Halal BPJPH RI kami.",
    descriptionEn: "Tender authentic Tenggiri fish Tekwan fish balls packed complete with savory shrimp broth seasoning, wood-ear mushrooms, tuberose buds, vermicelli, and chili paste.",
    priceFormatted: "Rp 150.000",
    priceNum: 150000,
    unit: "per paket keluarga (5–6 porsi)",
    unitEn: "per family kit (5–6 servings)",
    imageUrl: "/assets/pempek_tekwan.jpg",
    badges: ["Kuah Kaldu Udang Asli", "Halal BPJPH RI"],
    badgesEn: ["Authentic Shrimp Broth", "Halal BPJPH RI"],
    inStock: true,
    featured: true,
    specifications: [
      "Bola Tekwan 100% Ikan Tenggiri Segar",
      "Lengkap Jamur Kuping, Sedap Malam & Soun",
      "Bumbu Kaldu Udang Asli Siap Masak",
      "Terdaftar di Sertifikat Halal ID32110005461900623"
    ],
    specificationsEn: [
      "100% Fresh Tenggiri Fish Tekwan Balls",
      "Includes Mushrooms, Tuberose Buds & Vermicelli",
      "Ready-to-Cook Authentic Shrimp Broth Paste",
      "Listed on Halal Certificate ID32110005461900623"
    ],
    halalCertified: true,
    externalUrl: "https://www.instagram.com/pempek_kizy"
  },

  // CORE BUSINESS 02: PESENSAMASARAH CATERING & SNACK (@pesensamasarah + EasyCatering)
  {
    id: "cat-01",
    pillarId: "culinary",
    category: "PesenSamaSarah Catering (@pesensamasarah)",
    categoryEn: "PesenSamaSarah Catering (@pesensamasarah)",
    name: "Paket Katering Prasmanan Nusantara & Jamuan VIP",
    nameEn: "Indonesian Buffet Catering & VIP Banquet Hospitality",
    tagline: "Kapasitas Produksi Dapur Up to 1.000 Porsi / Hari",
    taglineEn: "Kitchen Production Capacity Up to 1,000 Portions / Day",
    description: "Penyediaan prasmanan lengkap untuk acara kantor, seminar, rapat tahunan, dan syukuran keluarga dengan pilihan menu daging, ayam, ikan, sup hangat, hidangan penutup, serta penataan meja saji yang rapi.",
    descriptionEn: "Full-service buffet spreads for corporate gatherings, conferences, annual meetings, and family celebrations complete with main courses, warm soups, desserts, and professional buffet setup.",
    priceFormatted: "Rp 85.000 – Rp 125.000",
    priceNum: 85000,
    unit: "per porsi (Kapasitas up to 1.000 porsi/hari)",
    unitEn: "per pax (Capacity up to 1,000 portions/day)",
    imageUrl: "https://images.unsplash.com/photo-1583338917496-7ea264c374ce?auto=format&fit=crop&w=900&q=85",
    badges: ["Bisnis Utama 02", "EasyCatering App"],
    badgesEn: ["Core Business 02", "EasyCatering App"],
    inStock: true,
    featured: true,
    specifications: [
      "Kapasitas Dapur: Up to 1.000 Porsi / Hari",
      "Termasuk Set Meja Buffet, Pemanas & Pramusaji",
      "Dimasak Segar di Hari Pengiriman",
      "Didukung Aplikasi EasyCatering (Google Play)"
    ],
    specificationsEn: [
      "Kitchen Capacity: Up to 1,000 Portions / Day",
      "Includes Chafing Dishes, Buffet Setup & Waitstaff",
      "Freshly Prepared on the Day of Delivery",
      "Supported by EasyCatering App (Google Play)"
    ],
    halalCertified: true,
    externalUrl: "https://www.instagram.com/pesensamasarah"
  },
  {
    id: "cat-02",
    pillarId: "culinary",
    category: "PesenSamaSarah Catering (@pesensamasarah)",
    categoryEn: "PesenSamaSarah Catering (@pesensamasarah)",
    name: "Nasi Kotak Eksekutif (Executive Meal Box) & Katering Rutin",
    nameEn: "Executive Meal Boxes & Recurring Staff Catering",
    tagline: "Konsumsi Rapat & Katering Harian Kantor",
    taglineEn: "Executive Meal Boxes & Daily Office Meals",
    description: "Paket nasi kotak higienis bersekat dengan komposisi gizi seimbang dan rotasi menu Nusantara harian untuk kebutuhan rapat direksi, pelatihan karyawan, maupun kontrak makan siang rutin kantor/instansi.",
    descriptionEn: "Hygienic compartmentalized meal boxes with balanced nutrition and rotating Indonesian menus tailored for boardroom meetings, corporate trainings, and daily employee meal contracts.",
    priceFormatted: "Rp 35.000 – Rp 55.000",
    priceNum: 45000,
    unit: "per kotak (Min. 30 kotak)",
    unitEn: "per box (Min. 30 boxes)",
    imageUrl: "/assets/snackbox_enhanced.jpg",
    badges: ["Executive Box", "Higienis & Tepat Waktu"],
    badgesEn: ["Executive Box", "Hygienic & Punctual"],
    inStock: true,
    featured: true,
    specifications: [
      "Kemasan Eksekutif Bersekat Food-Grade",
      "Rotasi Menu Harian Nusantara & Kudapan Segar",
      "Kapasitas Up to 1.000 Porsi / Hari",
      "Pemesanan Mudah via Aplikasi EasyCatering"
    ],
    specificationsEn: [
      "Food-Grade Compartmentalized Executive Box",
      "Rotating Daily Indonesian Menus & Fresh Snacks",
      "Up to 1,000 Portions / Day Capacity",
      "Seamless Ordering via EasyCatering App"
    ],
    halalCertified: true,
    externalUrl: "https://play.google.com/store/apps/details?id=id.easycatering.app"
  },
  {
    id: "cat-03",
    pillarId: "culinary",
    category: "PesenSamaSarah Snack (@pesensamasarah)",
    categoryEn: "PesenSamaSarah Snack (@pesensamasarah)",
    name: "Aneka Dimsum Premium, Kue Tampah Tradisional & Snack Box",
    nameEn: "Handcrafted Dimsum, Traditional Kue Tampah & Snack Boxes",
    tagline: "Spesialis Kudapan Acara · Dimsum & Jajanan Pasar",
    taglineEn: "Artisan Snack Specialties · Dimsum & Platters",
    description: "Ragam kudapan segar di luar lini pempek: Dimsum Ayam & Udang lembut dengan saus spesial, Kue Tampah Jajanan Pasar untuk jamuan tamu VIP, risoles/pastel premium, serta paket coffee break snack box.",
    descriptionEn: "Freshly prepared snacks beyond our Pempek line: tender Chicken & Shrimp Dimsum, curated Kue Tampah Traditional Platters for VIP meetings, savoury pastries, and coffee-break snack boxes.",
    priceFormatted: "Rp 25.000 – Rp 275.000",
    priceNum: 25000,
    unit: "per porsi / per tampah VIP",
    unitEn: "per portion / per VIP platter",
    imageUrl: "/assets/dimsum_enhanced.jpg",
    badges: ["Dimsum & Kue Tampah", "Freshly Made"],
    badgesEn: ["Dimsum & Kue Tampah", "Freshly Made"],
    inStock: true,
    featured: true,
    specifications: [
      "Dimsum Ayam & Udang Segar Pilihan",
      "Kue Tampah Jajanan Pasar Dibuat Hari H",
      "Cocok untuk Live Stall, Rapat & Hantaran VIP",
      "Tersedia via @pesensamasarah & EasyCatering"
    ],
    specificationsEn: [
      "Handcrafted Fresh Chicken & Shrimp Dimsum",
      "Same-Day Freshly Prepared Kue Tampah Platters",
      "Ideal for Live Stalls, Boardrooms & VIP Gifting",
      "Available via @pesensamasarah & EasyCatering"
    ],
    halalCertified: true,
    externalUrl: "https://www.instagram.com/pesensamasarah"
  },

  // OTHER BUSINESS LINE: PESENSAMASARAH CURATED RETAIL (@pesensamasarah)
  {
    id: "lux-01",
    pillarId: "luxury",
    category: "PesenSamaSarah Curated Retail",
    categoryEn: "PesenSamaSarah Curated Retail",
    name: "Tas Kulit & Dompet Bermerek (Branded Leather Bags & Wallets)",
    nameEn: "Branded Leather Bags & Wallets",
    tagline: "Lini Bisnis Pendukung · Jaminan Keaslian Produk 100%",
    taglineEn: "Complementary Retail Line · 100% Authentic Selection",
    description: "Kurasi tas tangan dan dompet kulit bermerek dengan jaminan keaslian 100% dan kelengkapan resmi.",
    descriptionEn: "Curated authentic leather handbags and wallets with full completeness.",
    priceFormatted: "Kurasi Eksklusif",
    priceNum: 15000000,
    unit: "100% Authentic Selection (@pesensamasarah)",
    unitEn: "100% Authentic Selection (@pesensamasarah)",
    imageUrl: "/assets/branded_luxury_handbag.jpg",
    badges: ["Lini Pendukung", "100% Authentic"],
    badgesEn: ["Complementary Line", "100% Authentic"],
    inStock: true,
    featured: true,
    specifications: [
      "Jaminan Keaslian Produk 100%",
      "Kelengkapan Resmi (Box, Dustbag, Care Card)",
      "Inspeksi Fisik & Kurasi Ketat",
      "Katalog Update di Instagram @pesensamasarah"
    ],
    specificationsEn: [
      "100% Guaranteed Product Authenticity",
      "Full Official Completeness (Box, Dustbag, Card)",
      "Strict Physical Quality & Authenticity Curation",
      "Catalog Updates on Instagram @pesensamasarah"
    ],
    authenticityGuaranteed: true,
    externalUrl: "https://www.instagram.com/pesensamasarah"
  },
  {
    id: "lux-02",
    pillarId: "luxury",
    category: "PesenSamaSarah Curated Retail",
    categoryEn: "PesenSamaSarah Curated Retail",
    name: "Jam Tangan Bermerek Pria & Wanita (Branded Wristwatches)",
    nameEn: "Men’s & Women’s Branded Watches",
    tagline: "Koleksi Arloji Eksekutif & Kasual Orisinal",
    taglineEn: "Original Executive & Casual Timepieces",
    description: "Koleksi jam tangan orisinal bergaya eksekutif maupun kasual lengkap dengan kotak resmi.",
    descriptionEn: "Original executive and casual wristwatches complete with official box.",
    priceFormatted: "Kurasi Eksklusif",
    priceNum: 12000000,
    unit: "Original Box & Papers (@pesensamasarah)",
    unitEn: "Original Box & Papers (@pesensamasarah)",
    imageUrl: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?auto=format&fit=crop&w=800&q=85",
    badges: ["Lini Pendukung", "100% Authentic"],
    badgesEn: ["Complementary Line", "100% Authentic"],
    inStock: true,
    featured: true,
    specifications: [
      "Arloji Orisinal Pria & Wanita",
      "Lengkap Kotak Resmi & Kartu Garansi",
      "Kurasi Kualitas Movement & Fisik",
      "Tersedia Layanan Paket Gift / Hampers"
    ],
    specificationsEn: [
      "Authentic Men's & Women's Timepieces",
      "Complete with Official Box & Warranty Card",
      "Movement & Physical Condition Verified",
      "Executive Gift Packaging Available"
    ],
    authenticityGuaranteed: true,
    externalUrl: "https://www.instagram.com/pesensamasarah"
  },
  {
    id: "lux-03",
    pillarId: "luxury",
    category: "PesenSamaSarah Curated Retail",
    categoryEn: "PesenSamaSarah Curated Retail",
    name: "Busana Modern & Hampers VIP",
    nameEn: "Modern Apparel & VIP Hampers",
    tagline: "Koleksi Pakaian Pilihan & Hampers Hari Raya / Korporasi",
    taglineEn: "Selected Fashion Apparel & Festive / Corporate Gift Hampers",
    description: "Koleksi pakaian pilihan serta paket bingkisan hari raya dan korporasi.",
    descriptionEn: "Selected fashion apparel and bespoke festive or corporate gift hampers.",
    priceFormatted: "Kustom / Kurasi",
    priceNum: 1500000,
    unit: "Bespoke Retail & Corporate Hampers",
    unitEn: "Bespoke Retail & Corporate Hampers",
    imageUrl: "/assets/curated_retail_trio_gradient.jpg",
    badges: ["Executive Hampers", "Curated Retail"],
    badgesEn: ["Executive Hampers", "Curated Retail"],
    inStock: true,
    featured: true,
    specifications: [
      "Busana Modern & Aksesoris Terkurasi",
      "Paket Hampers Lebaran, Natal & Tahun Baru",
      "Kustomisasi Kartu Ucapan & Logo Instansi",
      "Konsultasi via @pesensamasarah & WhatsApp"
    ],
    specificationsEn: [
      "Curated Contemporary Apparel & Accessories",
      "Bespoke Festive & Corporate VIP Hampers",
      "Custom Corporate Greeting Cards & Branding",
      "Consultation via @pesensamasarah & WhatsApp"
    ],
    authenticityGuaranteed: true,
    externalUrl: "https://www.instagram.com/pesensamasarah"
  }
];

export const initialLeads: InquiryLead[] = [
  {
    id: "lead-101",
    createdAt: "2026-10-25 09:30",
    fullName: "Budi Santoso",
    companyOrOrg: "PT Nusantara Prima Energi",
    email: "budi.s@nusantaraprima.co.id",
    phoneWhatsapp: "08119827364",
    pillarInterest: "culinary",
    serviceCategory: "PesenSamaSarah Catering & Snack",
    estimatedVolumeOrPacks: "450 Porsi",
    eventDateOrTarget: "2026-11-15",
    message: "Mohon penawaran harga Paket Prasmanan Nusantara & Dimsum Stall untuk acara Townhall Akhir Tahun Direksi & Karyawan.",
    status: "QUOTED"
  },
  {
    id: "lead-102",
    createdAt: "2026-10-25 11:15",
    fullName: "Dewi Lestari",
    companyOrOrg: "Mitra Horeca & Reseller",
    email: "dewi.reseller@gmail.com",
    phoneWhatsapp: "081234567890",
    pillarInterest: "snacks",
    serviceCategory: "Pempek Kizy (@pempek_kizy)",
    estimatedVolumeOrPacks: "200 Paket Vacuum / Bulan",
    eventDateOrTarget: "Kemitraan Rutin",
    message: "Ingin mengajukan kemitraan grosir/reseller resmi Pempek Kizy 100% Ikan Tenggiri kemasan vacuum frozen.",
    status: "NEW"
  }
];
