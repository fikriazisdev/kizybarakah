import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DivisionsSection } from './components/DivisionsSection';
import { ContactSection } from './components/ContactSection';
import { ProductsView } from './components/ProductsView';
import { Footer } from './components/Footer';
import { AdminPortal } from './components/AdminPortal';

import { 
  initialCompanyProfile, 
  initialProducts, 
  initialLeads 
} from './data/companyData';
import { CompanyProfile, InquiryLead, LeadStatus, ProductItem, PillarType, LangType } from './types';
import { MessageCircle } from 'lucide-react';

export const App: React.FC = () => {
  // Bilingual state ('id' | 'en') persisted in localStorage
  const [lang, setLang] = useState<LangType>(() => {
    const savedLang = localStorage.getItem('kizy_lang_pref');
    return (savedLang === 'en' || savedLang === 'id') ? savedLang : 'id';
  });

  // LocalStorage-backed state migrated to v8_3 keys so latest data loads immediately
  const [company, setCompany] = useState<CompanyProfile>(() => {
    const saved = localStorage.getItem('kizy_company_profile_v8_3');
    return saved ? JSON.parse(saved) : initialCompanyProfile;
  });

  const [products, setProducts] = useState<ProductItem[]>(() => {
    const saved = localStorage.getItem('kizy_products_v8_3');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [leads, setLeads] = useState<InquiryLead[]>(() => {
    const saved = localStorage.getItem('kizy_leads_v8_3');
    return saved ? JSON.parse(saved) : initialLeads;
  });

  // Current view: 'home' | 'products' | 'admin'
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'admin'>('home');

  // Contact section prefill state
  const [prefilledPillar, setPrefilledPillar] = useState<PillarType>('culinary');
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Save language & data changes to localStorage
  useEffect(() => {
    localStorage.setItem('kizy_lang_pref', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('kizy_company_profile_v8_3', JSON.stringify(company));
  }, [company]);

  useEffect(() => {
    localStorage.setItem('kizy_products_v8_3', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('kizy_leads_v8_3', JSON.stringify(leads));
  }, [leads]);

  // Handle URL hash routing (#admin, #produk, #en, #id)
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === '#admin' || path === '/admin') {
        setCurrentView('admin');
      } else if (hash === '#produk' || path === '/produk') {
        setCurrentView('products');
      } else if (hash === '#en') {
        setLang('en');
      } else if (hash === '#id') {
        setLang('id');
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Product CRUD
  const handleAddProduct = (newProd: ProductItem) => {
    setProducts(prev => [newProd, ...prev]);
  };

  const handleUpdateProduct = (updated: ProductItem) => {
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm(lang === 'en' ? 'Remove this item from the catalog?' : 'Hapus produk ini dari katalog?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  // Leads CRM handlers
  const handleAddLead = (leadData: Omit<InquiryLead, 'id' | 'createdAt' | 'status'>) => {
    const newLead: InquiryLead = {
      ...leadData,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16),
      status: 'NEW'
    };
    setLeads(prev => [newLead, ...prev]);
  };

  const handleUpdateLeadStatus = (id: string, status: LeadStatus) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
  };

  const handleDeleteLead = (id: string) => {
    if (confirm(lang === 'en' ? 'Delete this lead from the list?' : 'Hapus lead ini dari daftar?')) {
      setLeads(prev => prev.filter(l => l.id !== id));
    }
  };

  // Reset data to defaults
  const handleResetAllData = () => {
    setCompany(initialCompanyProfile);
    setProducts(initialProducts);
    setLeads(initialLeads);
    localStorage.removeItem('kizy_company_profile_v8_3');
    localStorage.removeItem('kizy_products_v8_3');
    localStorage.removeItem('kizy_leads_v8_3');
    alert(lang === 'en' ? 'Data successfully reset to defaults!' : 'Data berhasil direset ke pengaturan awal!');
  };

  // Selecting a product from catalog for inquiry
  const handleSelectProductForInquiry = (product: ProductItem) => {
    setPrefilledPillar(product.pillarId);
    setPrefilledService(lang === 'en' && product.nameEn ? product.nameEn : product.name);
    setCurrentView('home');
    setTimeout(() => {
      document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleNavigateSection = (sectionId: string) => {
    setCurrentView('home');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const waMessage = lang === 'en'
    ? 'Hello%20PT%20Kizy%20Barakah%20Orbis,%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20corporate%20partnership%20services.'
    : 'Halo%20PT%20Kizy%20Barakah%20Orbis,%20saya%20tertarik%20dengan%20layanan%20katering,%20Pempek%20Kizy,%20atau%20kemitraan%20perusahaan.';

  return (
    <div className="min-h-screen bg-corporate-canvas flex flex-col font-sans antialiased text-corporate-slate selection:bg-sky-700 selection:text-white">
      
      {currentView === 'admin' ? (
        <AdminPortal
          company={company}
          products={products}
          leads={leads}
          onUpdateCompany={setCompany}
          onAddProduct={handleAddProduct}
          onUpdateProduct={handleUpdateProduct}
          onDeleteProduct={handleDeleteProduct}
          onUpdateLeadStatus={handleUpdateLeadStatus}
          onDeleteLead={handleDeleteLead}
          onResetAllData={handleResetAllData}
          onCloseAdmin={() => {
            window.location.hash = '';
            setCurrentView('home');
          }}
        />
      ) : (
        <>
          {/* Corporate Header with Bilingual Switcher & Company Profile v7.0 Button */}
          <Navbar
            company={company}
            lang={lang}
            setLang={setLang}
            activeView={currentView === 'products' ? 'products' : 'home'}
            setActiveView={(v) => setCurrentView(v)}
            onNavigateSection={handleNavigateSection}
          />

          <main className="flex-1">
            {currentView === 'products' ? (
              <ProductsView
                company={company}
                products={products}
                lang={lang}
                onBackToHome={() => setCurrentView('home')}
                onSelectProductForInquiry={handleSelectProductForInquiry}
              />
            ) : (
              <>
                {/* Hero Section */}
                <Hero
                  company={company}
                  lang={lang}
                  onExploreDivisions={() => handleNavigateSection('lini-bisnis')}
                  onOpenProducts={() => {
                    setCurrentView('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />

                {/* About, Founder & CEO Message, Vision/Mission & Legalities */}
                <AboutSection company={company} lang={lang} />

                {/* Helicopter View of Business Divisions (2 Core F&B + 1 Complementary Retail) */}
                <DivisionsSection
                  products={products}
                  lang={lang}
                  onOpenProductsView={() => {
                    setCurrentView('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />

                {/* Contact Section */}
                <ContactSection
                  company={company}
                  lang={lang}
                  prefilledPillar={prefilledPillar}
                  prefilledService={prefilledService}
                  onSubmitInquiry={handleAddLead}
                />
              </>
            )}
          </main>

          {/* Corporate Footer */}
          <Footer
            company={company}
            lang={lang}
            setLang={setLang}
            onOpenAdmin={() => {
              window.location.hash = '#admin';
              setCurrentView('admin');
            }}
            onOpenProducts={() => {
              setCurrentView('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateSection={handleNavigateSection}
          />

          {/* Floating WhatsApp Quick Action Button */}
          <a
            href={`https://wa.me/${company.contacts.whatsapp.replace(/[^0-9]/g, '')}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 px-4 py-3 bg-corporate-navy hover:bg-slate-800 text-white rounded-full shadow-2xl border border-slate-700 flex items-center space-x-2.5 transition-all hover:scale-105"
            title={lang === 'en' ? 'Chat via WhatsApp' : 'Hubungi via WhatsApp'}
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-bold hidden sm:inline">
              {lang === 'en' ? 'Chat WhatsApp' : 'Chat WhatsApp'}
            </span>
          </a>
        </>
      )}

    </div>
  );
};

export default App;
