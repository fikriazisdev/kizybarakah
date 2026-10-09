import { CompanyProfile, InquiryLead, KbliItem, ProductItem, PageMediaAssets } from '../types';

export const initialCompanyProfile: CompanyProfile = {
  name: "PT Kizy Barakah Orbis",
  legalEntity: "Perseroan Terbatas (PT) Kizy Barakah Orbis",
  tagline: "Integritas Usaha, Cita Rasa Nusantara, & Kemitraan Berkelanjutan",
  shortDesc: "Perusahaan nasional terpercaya yang bergerak di bidang penyediaan jasa boga berskala besar, manufaktur makanan khas nusantara & kudapan olahan, serta portofolio perdagangan retail gaya hidup terkurasi.",
  vision: "Menjadi grup usaha nasional terkemuka yang menghadirkan keberkahan dan nilai tambah nyata melalui standar mutu kuliner terpadu, produk pangan olahan bermutu tinggi, dan kemitraan perdagangan yang terpercaya.",
  mission: [
    "Menyediakan layanan jasa boga (food service & catering) profesional berstandar higienitas tinggi untuk instansi, korporasi, dan perayaan istimewa.",
    "Mengembangkan industri pengolahan pangan khas nusantara yang higienis, halal, dan berdaya saing pasar.",
    "Mengelola portofolio perdagangan retail barang gaya hidup terkurasi dengan jaminan integritas transaksi dan keaslian produk.",
    "Membangun hubungan kemitraan jangka panjang yang berlandaskan transparansi, tata kelola yang baik, dan kepatuhan regulasi."
  ],
  values: [
    {
      title: "Integritas & Amanah",
      description: "Menjaga kejujuran dan ketepatan janji dalam setiap komitmen bisnis serta kemitraan jangka panjang."
    },
    {
      title: "Standar Mutu Tertinggi",
      description: "Konsistensi penerapan standar higienitas pangan, bahan baku pilihan, dan sertifikasi resmi."
    },
    {
      title: "Transparansi Usaha",
      description: "Kepatuhan penuh terhadap hukum, etika berusaha, dan kejelasan alur kerja operasional."
    },
    {
      title: "Pelayanan Profesional",
      description: "Responsif, solutif, dan berorientasi pada kepuasan mitra bisnis maupun konsumen."
    }
  ],
  legalities: {
    nib: "0220260908129 (OSS Berbasis Risiko)",
    skKemenkumham: "AHU-0042918.AH.01.01.TAHUN 2024",
    npwp: "42.819.301.4-012.000",
    halalBpjph: "Sertifikasi Halal Resmi BPJPH RI",
    pirtIzin: "Dinkes P-IRT Terdaftar"
  },
  contacts: {
    address: "Kusuma Utara, Bekasi, Jawa Barat",
    city: "Indonesia",
    email: "depatisarah86@gmail.com",
    whatsapp: "+6281908131278",
    phone: "+62 819-0813-1278",
    instagram: "@kizybarakah.official"
  }
};

export const initialPageMediaAssets: PageMediaAssets = {
  heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
  aboutImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
  cateringDivisionImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
  snacksDivisionImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
  luxuryDivisionImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85"
};

// Catatan KBLI 2020 ini sekarang khusus diarsipkan untuk WebAdmin internal
export const internalKbliNotes: KbliItem[] = [
  {
    code: "56210",
    title: "Jasa Boga Untuk Suatu Event Tertentu (Event Catering)",
    division: "Divisi Utama: Penyediaan Makanan & Minuman",
    scope: "Penyediaan jasa boga atas dasar kontrak untuk pesta, jamuan kenegaraan, rapat besar instansi, resepsi di lokasi pemesan.",
    regulator: "Kemenparekraf / Kemenkes / OSS"
  },
  {
    code: "56290",
    title: "Penyediaan Jasa Boga Periode Tertentu (Contract/Industrial Catering)",
    division: "Divisi Utama: Penyediaan Makanan & Minuman",
    scope: "Penyediaan katering harian teratur atas dasar kontrak untuk kantin perkantoran, pabrik, instansi, dan proyek.",
    regulator: "Kemenkes / Dinkes / OSS"
  },
  {
    code: "10799",
    title: "Industri Produk Makanan Lainnya",
    division: "Divisi Utama: Industri Pengolahan Pangan",
    scope: "Pengolahan makanan khas nusantara (Pempek Kizy, cuko Palembang asli, siomay, dimsum, cilok bumbu).",
    regulator: "BPOM / BPJPH Kemenag / OSS"
  },
  {
    code: "10794",
    title: "Industri Kerupuk, Keripik, Peyek dan Sejenisnya",
    division: "Divisi Utama: Industri Kudapan Ringan",
    scope: "Produksi aneka keripik kentang artisan (potato chips Dieng), keripik singkong gurih, dan camilan renyah kemasan.",
    regulator: "Dinas Perindustrian / P-IRT / OSS"
  },
  {
    code: "10710",
    title: "Industri Produk Roti dan Kue",
    division: "Divisi Utama: Industri Pengolahan Makanan",
    scope: "Pembuatan kue tampah jajan pasar tradisional premium, bakery, dan hantaran formal.",
    regulator: "Dinas Kesehatan / P-IRT"
  },
  {
    code: "47711",
    title: "Perdagangan Eceran Pakaian",
    division: "Portofolio Niaga: Retail Gaya Hidup",
    scope: "Perdagangan pakaian jadi branded impor, busana kurasi, dan pakaian berkelas.",
    regulator: "Kemendag / OSS"
  },
  {
    code: "47713",
    title: "Perdagangan Eceran Barang Dari Kulit dan Tas",
    division: "Portofolio Niaga: Retail Barang Mewah",
    scope: "Perdagangan eceran tas bermerek (luxury branded handbags), dompet kulit asli, dan koper terkurasi.",
    regulator: "Kemendag / OSS"
  },
  {
    code: "47735",
    title: "Perdagangan Eceran Jam Tangan dan Perhiasan",
    division: "Portofolio Niaga: Arloji & Aksesoris",
    scope: "Perdagangan arloji mewah original terkurasi (luxury timepieces) bergaransi keaslian.",
    regulator: "Kemendag / OSS"
  },
  {
    code: "47911",
    title: "Perdagangan Eceran Melalui Media / Internet (E-Commerce)",
    division: "Portofolio Niaga: Saluran Daring",
    scope: "Penyelenggaraan penjualan katalog online via website resmi dan platform digital.",
    regulator: "Kemkominfo / Kemendag"
  },
  {
    code: "46399",
    title: "Perdagangan Besar Makanan dan Minuman Lainnya",
    division: "Divisi Distribusi: B2B Wholesale",
    scope: "Pasokan grosir B2B untuk kebutuhan bahan katering dan mitra reseller.",
    regulator: "Kemendag / OSS"
  }
];

export const initialProducts: ProductItem[] = [
  // CATERING (CORE BUSINESS)
  {
    id: "cat-01",
    pillarId: "culinary",
    category: "Prasmanan VIP",
    name: "Paket Prasmanan Royal Nusantara",
    tagline: "Menu Jamuan Kenegaraan & Resepsi Mewah",
    description: "Pilihan 8 menu utama (Daging Sapi Lada Hitam, Ayam Bakar Madu, Kakap Asam Manis, Sop Buntut Rempah, Nasi Pandan Wangi, Dessert Bar). Termasuk set buffet elegan dan pramusaji berseragam resmi.",
    priceFormatted: "Rp 125.000",
    priceNum: 125000,
    unit: "per porsi (Min. 100 porsi)",
    imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    badges: ["Pilihan Korporat", "Halal BPJPH"],
    inStock: true,
    featured: true,
    specifications: ["Minimal Order: 100 Porsi", "Termasuk Meja Buffet & Pemanas", "Gratis 4 Pramusaji", "Dekorasi Bunga Meja"],
    halalCertified: true
  },
  {
    id: "cat-02",
    pillarId: "culinary",
    category: "Nasi Kotak Eksekutif",
    name: "Nasi Kotak Ayam Bakar Taliwang & Daging Balado",
    tagline: "Pilihan Utama Rapat Direksi & Seminar",
    description: "Nasi putih pulen, Ayam Bakar Taliwang khas Kizy, Daging Balado basah, Sambal Goreng Kentang Ati, Telur Balado, Kerupuk Udang, Buah Segar, dan Air Mineral botol 330ml.",
    priceFormatted: "Rp 45.000",
    priceNum: 45000,
    unit: "per kotak (Min. 30 kotak)",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    badges: ["Eksekutif Box", "Higienis Sealed"],
    inStock: true,
    featured: true,
    specifications: ["Bento Box Eco-Friendly", "Sendok & Tisu Tertutup", "Tahan 12 Jam", "Pengantaran Tepat Waktu"],
    halalCertified: true
  },
  {
    id: "cat-03",
    pillarId: "culinary",
    category: "Prasmanan Kantor",
    name: "Prasmanan Silver Banquet Korporat",
    tagline: "Penyelenggaraan Makan Siang Kantor & Syukuran",
    description: "Pilihan 6 menu utama nusantara selera nusantara, aneka sambal segar, kerupuk, buah potong, dan minuman es kelapa muda sirup kencana.",
    priceFormatted: "Rp 85.000",
    priceNum: 85000,
    unit: "per porsi (Min. 50 porsi)",
    imageUrl: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=800&q=80",
    badges: ["Kantor & Instansi", "Halal"],
    inStock: true,
    featured: false,
    specifications: ["Set Buffet Roll-Top", "2 Pramusaji Siaga", "Peralatan Makan Keramik", "Bahan Segar Berkualitas"],
    halalCertified: true
  },

  // FOOD MFG & SNACKS (CORE BUSINESS)
  {
    id: "snk-01",
    pillarId: "snacks",
    category: "Pempek Kizy",
    name: "Paket Pempek Kizy Sultan (Campur 30 Pcs + Cuko)",
    tagline: "100% Ikan Tenggiri Segar Tanpa Bahan Pengawet",
    description: "Kombinasi Pempek Kapal Selam Kecil (10 pcs), Pempek Lenjer (10 pcs), Pempek Adaan (5 pcs), dan Pempek Kulit Crispy (5 pcs). Dilengkapi Cuko Kental Gula Batok Linggau 500ml.",
    priceFormatted: "Rp 165.000",
    priceNum: 165000,
    unit: "per paket vacuum pack",
    imageUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    badges: ["Palembang Autentik", "Vacuum Packed"],
    inStock: true,
    featured: true,
    specifications: ["Ketahanan Suhu Ruang 4 Hari (Vacuum)", "Freezer Beku 3 Bulan", "Cuko Kental Asli Asam Jawa", "Bersertifikat Halal"],
    halalCertified: true
  },
  {
    id: "snk-02",
    pillarId: "snacks",
    category: "Artisan Snacks",
    name: "Kizy Artisan Potato Chips Truffle & Sea Salt",
    tagline: "Keripik Kentang Dataran Tinggi Dieng Premium",
    description: "Dibuat dari kentang Dieng pilihan potongan tebal, digoreng dengan minyak kelapa murni, ditaburi ekstrak aroma truffle dan garam laut murni.",
    priceFormatted: "Rp 35.000",
    priceNum: 35000,
    unit: "pouch 120 gram",
    imageUrl: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80",
    badges: ["Artisan Crunch", "P-IRT Certified"],
    inStock: true,
    featured: true,
    specifications: ["Bebas Lemak Trans", "Rasa Gurih Alami", "Kemasan Ziplock Alumunium Foil", "Masa Simpan 6 Bulan"],
    halalCertified: true
  },
  {
    id: "snk-03",
    pillarId: "snacks",
    category: "Kue Tampah",
    name: "Kue Tampah Keraton Tradisional (Isi 60 Pcs)",
    tagline: "Jajan Pasar Tradisional Cantik Berkelas",
    description: "Susunan cantik tampah bambu beralas daun pisang berisikan Lemper Ayam Spesial, Kue Lumpur Surga, Dadar Gulung Pandan, Pie Buah Segar, Lapis Legit Mini, dan Semar Mendem.",
    priceFormatted: "Rp 275.000",
    priceNum: 275000,
    unit: "per tampah besar (60 pcs)",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    badges: ["Freshly Made", "Rapat & Hantaran"],
    inStock: true,
    featured: true,
    specifications: ["Dibuat Hari H Pengiriman", "Gula Murni & Santan Segar", "Tampah Bambu Vernis Rapih", "Pita Hias Korporat"],
    halalCertified: true
  },

  // OTHER BUSINESS / RETAIL DIVERSIFIED
  {
    id: "lux-01",
    pillarId: "luxury",
    category: "Luxury Timepieces",
    name: "Rolex Submariner Date 126610LN (Brand New)",
    tagline: "The Reference Among Divers' Watches",
    description: "Arloji mewah legendaris Oystersteel 41 mm dengan cerachrom bezel keramik hitam, dial hitam, dan movement otomatis calibre 3235 dengan power reserve 70 jam.",
    priceFormatted: "Rp 215.000.000",
    priceNum: 215000000,
    unit: "Full Set Box & Papers 2024",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    badges: ["100% Authentic", "Full Set 2024"],
    inStock: true,
    featured: true,
    specifications: ["Diameter: 41mm", "Material: Oystersteel 904L", "Garansi Internasional 5 Tahun", "NFC Verified Card"],
    authenticityGuaranteed: true
  },
  {
    id: "lux-02",
    pillarId: "luxury",
    category: "Designer Bags",
    name: "Hermès Birkin 25 Togo Gold on Gold Hardware",
    tagline: "The Pinnacle of Leather Craftsmanship",
    description: "Tas tangan desainer bergengsi dunia. Dibuat dari kulit Togo lembut berwarna Gold klasik yang dipadukan dengan aksen emas (GHW) mewah. Kondisi Pristine / Like New.",
    priceFormatted: "Rp 385.000.000",
    priceNum: 385000000,
    unit: "Full Set (Receipt, Dustbag, Box)",
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    badges: ["Entrupy Verified", "Pristine Condition"],
    inStock: true,
    featured: false,
    specifications: ["Leather: 100% Togo Calfskin", "Hardware: Gold Plated", "Stamp: W (2024)", "Sertifikat Keaslian Fisik"],
    authenticityGuaranteed: true
  },
  {
    id: "lux-03",
    pillarId: "luxury",
    category: "Branded Apparel",
    name: "Dior Oblique Jacquard Overshirt Navy Blue",
    tagline: "Timeless Couture Streetwear",
    description: "Kemeja luaran katun jacquard dengan motif ikonis Dior Oblique dalam warna biru tua. Potongan modern santai, kancing tekan berlambang CD perak.",
    priceFormatted: "Rp 28.500.000",
    priceNum: 285000000,
    unit: "Size 48 / 50 (Original Tags)",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    badges: ["New Season", "Butik Resmi Tag"],
    inStock: true,
    featured: false,
    specifications: ["100% Cotton Jacquard", "Made in Italy", "Hanger & Dust Cover Dior", "Struk Pembelian Butik"],
    authenticityGuaranteed: true
  }
];

export const initialLeads: InquiryLead[] = [
  {
    id: "lead-101",
    createdAt: "2026-10-08 14:20",
    fullName: "Budi Santoso",
    companyOrOrg: "PT Nusantara Prima Energi",
    email: "budi.s@nusantaraprima.co.id",
    phoneWhatsapp: "08119827364",
    pillarInterest: "culinary",
    serviceCategory: "Prasmanan VIP",
    estimatedVolumeOrPacks: "350 Porsi",
    eventDateOrTarget: "2026-11-15",
    message: "Mohon penawaran harga untuk acara Townhall Akhir Tahun Direksi & Karyawan di Ballroom.",
    status: "QUOTED"
  },
  {
    id: "lead-102",
    createdAt: "2026-10-09 06:45",
    fullName: "Dewi Lestari",
    companyOrOrg: "Reseller Mitra Jawa Barat",
    email: "dewi.reseller@gmail.com",
    phoneWhatsapp: "081234567890",
    pillarInterest: "snacks",
    serviceCategory: "Pempek Kizy",
    estimatedVolumeOrPacks: "200 Paket / Bulan",
    eventDateOrTarget: "Mulai Pekan Depan",
    message: "Ingin mengajukan kemitraan reseller resmi Pempek Kizy frozen pack untuk area Bekasi dan sekitarnya.",
    status: "NEW"
  }
];
