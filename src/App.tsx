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
import { CompanyProfile, InquiryLead, LeadStatus, ProductItem, PillarType } from './types';
import { MessageCircle } from 'lucide-react';

export const App: React.FC = () => {
  // LocalStorage-backed state with initial fallbacks
  const [company, setCompany] = useState<CompanyProfile>(() => {
    const saved = localStorage.getItem('kizy_company_profile_v2');
    return saved ? JSON.parse(saved) : initialCompanyProfile;
  });

  const [products, setProducts] = useState<ProductItem[]>(() => {
    const saved = localStorage.getItem('kizy_products_v2');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [leads, setLeads] = useState<InquiryLead[]>(() => {
    const saved = localStorage.getItem('kizy_leads_v2');
    return saved ? JSON.parse(saved) : initialLeads;
  });

  // Current view: 'home' | 'products' | 'admin'
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'admin'>('home');

  // Contact section prefill state
  const [prefilledPillar, setPrefilledPillar] = useState<PillarType>('culinary');
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('kizy_company_profile_v2', JSON.stringify(company));
  }, [company]);

  useEffect(() => {
    localStorage.setItem('kizy_products_v2', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('kizy_leads_v2', JSON.stringify(leads));
  }, [leads]);

  // Handle URL hash routing (#admin)
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === '#admin' || path === '/admin') {
        setCurrentView('admin');
      } else if (hash === '#produk' || path === '/produk') {
        setCurrentView('products');
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
    if (confirm('Hapus produk ini dari katalog?')) {
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
    if (confirm('Hapus lead ini dari daftar?')) {
      setLeads(prev => prev.filter(l => l.id !== id));
    }
  };

  // Reset data to defaults
  const handleResetAllData = () => {
    setCompany(initialCompanyProfile);
    setProducts(initialProducts);
    setLeads(initialLeads);
    localStorage.removeItem('kizy_company_profile_v2');
    localStorage.removeItem('kizy_products_v2');
    localStorage.removeItem('kizy_leads_v2');
    alert('Data berhasil direset ke pengaturan awal!');
  };

  // Selecting a product from catalog for inquiry
  const handleSelectProductForInquiry = (product: ProductItem) => {
    setPrefilledPillar(product.pillarId);
    setPrefilledService(product.name);
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
          {/* Corporate Header */}
          <Navbar
            company={company}
            activeView={currentView === 'products' ? 'products' : 'home'}
            setActiveView={(v) => setCurrentView(v)}
            onNavigateSection={handleNavigateSection}
          />

          <main className="flex-1">
            {currentView === 'products' ? (
              <ProductsView
                company={company}
                products={products}
                onBackToHome={() => setCurrentView('home')}
                onSelectProductForInquiry={handleSelectProductForInquiry}
              />
            ) : (
              <>
                {/* Hero Section */}
                <Hero
                  company={company}
                  onExploreDivisions={() => handleNavigateSection('lini-bisnis')}
                  onOpenProducts={() => {
                    setCurrentView('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />

                {/* About & Values */}
                <AboutSection company={company} />

                {/* Helicopter View of Business Divisions */}
                <DivisionsSection
                  products={products}
                  onOpenProductsView={() => {
                    setCurrentView('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />

                {/* Contact Section */}
                <ContactSection
                  company={company}
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
            href={`https://wa.me/${company.contacts.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20PT%20Kizy%20Barakah%20Orbis,%20saya%20tertarik%20dengan%20layanan%20katering%20/%20produk%20perusahaan.`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 px-4 py-3 bg-corporate-navy hover:bg-slate-800 text-white rounded-full shadow-2xl border border-slate-700 flex items-center space-x-2.5 transition-all hover:scale-105"
            title="Chat WhatsApp Corporate"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-bold hidden sm:inline">WhatsApp Resmi</span>
          </a>
        </>
      )}

    </div>
  );
};

export default App;
