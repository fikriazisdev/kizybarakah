import React, { useState } from 'react';
import { 
  Lock, 
  LogOut, 
  Package, 
  Users, 
  Settings, 
  Plus, 
  Trash2, 
  Edit3, 
  Search, 
  CheckCircle2, 
  MessageCircle, 
  ArrowLeft,
  Download,
  Upload,
  RefreshCw,
  Eye,
  ShieldCheck,
  UtensilsCrossed,
  Cookie,
  Gem,
  Image
} from 'lucide-react';
import { CompanyProfile, InquiryLead, LeadStatus, ProductItem, PillarType } from '../types';
import { internalKbliNotes } from '../data/companyData';

interface AdminPortalProps {
  company: CompanyProfile;
  products: ProductItem[];
  leads: InquiryLead[];
  onUpdateCompany: (company: CompanyProfile) => void;
  onAddProduct: (product: ProductItem) => void;
  onUpdateProduct: (product: ProductItem) => void;
  onDeleteProduct: (id: string) => void;
  onUpdateLeadStatus: (id: string, status: LeadStatus) => void;
  onDeleteLead: (id: string) => void;
  onResetAllData: () => void;
  onCloseAdmin: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  company,
  products,
  leads,
  onUpdateCompany,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onUpdateLeadStatus,
  onDeleteLead,
  onResetAllData,
  onCloseAdmin
}) => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Active admin tab
  const [activeTab, setActiveTab] = useState<'products' | 'leads' | 'settings' | 'kbli' | 'backup'>('leads');

  // Product management state
  const [productSearch, setProductSearch] = useState('');
  const [selectedPillarFilter, setSelectedPillarFilter] = useState<string>('all');
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Partial<ProductItem>>({
    pillarId: 'culinary',
    category: 'Prasmanan VIP',
    inStock: true,
    featured: false,
    badges: ['Resmi'],
    specifications: []
  });

  // Lead management state
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('all');

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN: 2026 or kizy
    if (pinInput === '2026' || pinInput.toLowerCase() === 'kizy' || pinInput === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('PIN salah! Silakan gunakan PIN standar: 2026');
    }
  };

  // Handle Save Product (Add or Edit)
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct.name || !editingProduct.priceFormatted) {
      alert('Nama produk dan format harga wajib diisi!');
      return;
    }

    if (editingProduct.id) {
      onUpdateProduct(editingProduct as ProductItem);
    } else {
      const newProd: ProductItem = {
        id: `custom-${Date.now()}`,
        pillarId: editingProduct.pillarId || 'culinary',
        category: editingProduct.category || 'Umum',
        name: editingProduct.name,
        tagline: editingProduct.tagline || '',
        description: editingProduct.description || '',
        priceFormatted: editingProduct.priceFormatted,
        priceNum: parseInt(editingProduct.priceFormatted.replace(/[^0-9]/g, '')) || 0,
        unit: editingProduct.unit || 'per unit',
        imageUrl: editingProduct.imageUrl || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
        badges: editingProduct.badges || ['Aktif'],
        inStock: editingProduct.inStock ?? true,
        featured: editingProduct.featured ?? false,
        specifications: editingProduct.specifications || ['Kualitas Terjamin']
      };
      onAddProduct(newProd);
    }

    setIsEditingProduct(false);
    setEditingProduct({
      pillarId: 'culinary',
      category: 'Prasmanan VIP',
      inStock: true,
      featured: false,
      badges: ['Resmi'],
      specifications: []
    });
  };

  // Export JSON
  const handleExportData = () => {
    const dataToExport = {
      company,
      products,
      leads,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kizybarakah_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Filtered lists
  const filteredProducts = products.filter(p => {
    const matchPillar = selectedPillarFilter === 'all' || p.pillarId === selectedPillarFilter;
    const matchSearch = productSearch === '' || 
      p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(productSearch.toLowerCase());
    return matchPillar && matchSearch;
  });

  const filteredLeads = leads.filter(l => {
    return leadStatusFilter === 'all' || l.status === leadStatusFilter;
  });

  // If not logged in, show elegant Login Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 text-center space-y-6">
          
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-600 to-barakah-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-sky-500/30">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-corporate-navy tracking-tight">
              WebAdmin CMS Portal
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              PT Kizy Barakah Orbis Management Console
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                autoFocus
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Masukkan PIN Akses (Default: 2026)"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-center text-lg font-bold tracking-widest text-corporate-navy focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              {authError && (
                <p className="text-xs text-red-500 font-semibold mt-2">{authError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white font-bold text-sm shadow-md transition-all"
            >
              Masuk ke Console CMS
            </button>
          </form>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>PIN Standar Demo: <strong className="text-slate-600">2026</strong></span>
            <button
              onClick={onCloseAdmin}
              className="text-sky-600 font-semibold hover:underline flex items-center space-x-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Web</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Admin Dashboard View
  return (
    <div className="min-h-screen bg-slate-100 pb-16">
      
      {/* Admin Topbar */}
      <header className="bg-corporate-navy text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-sky-500 to-barakah-500 flex items-center justify-center font-bold text-white text-sm">
                KB
              </div>
              <div>
                <span className="font-extrabold tracking-tight block text-sm leading-none">
                  ADMIN CONSOLE
                </span>
                <span className="text-[10px] text-sky-400 font-medium">
                  PT Kizy Barakah Orbis
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="hidden md:flex items-center space-x-6 text-xs text-slate-300">
              <div>Produk Aktif: <strong className="text-white">{products.length}</strong></div>
              <div>Leads B2B: <strong className="text-barakah-400">{leads.length}</strong></div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={onCloseAdmin}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-sky-200 transition-all flex items-center space-x-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Lihat Website</span>
              </button>

              <button
                onClick={() => setIsAuthenticated(false)}
                className="p-1.5 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white transition-all"
                title="Keluar"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Admin Nav Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 text-sm font-bold text-slate-600">
            <button
              onClick={() => setActiveTab('leads')}
              className={`py-4 border-b-2 flex items-center space-x-2 transition-all ${
                activeTab === 'leads'
                  ? 'border-sky-600 text-sky-600'
                  : 'border-transparent hover:text-corporate-navy'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Inquiry &amp; Leads B2B ({leads.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={`py-4 border-b-2 flex items-center space-x-2 transition-all ${
                activeTab === 'products'
                  ? 'border-sky-600 text-sky-600'
                  : 'border-transparent hover:text-corporate-navy'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Katalog Layanan &amp; Produk</span>
            </button>


            <button
              onClick={() => setActiveTab('settings')}
              className={`py-4 border-b-2 flex items-center space-x-2 transition-all ${
                activeTab === 'settings'
                  ? 'border-sky-600 text-sky-600'
                  : 'border-transparent hover:text-corporate-navy'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Profil &amp; Legalitas PT</span>
            </button>
            <button
              onClick={() => setActiveTab('kbli')}
              className={`py-4 border-b-2 flex items-center space-x-2 transition-all ${
                activeTab === 'kbli'
                  ? 'border-sky-600 text-sky-600'
                  : 'border-transparent hover:text-corporate-navy'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Catatan KBLI 2020</span>
            </button>

            <button
              onClick={() => setActiveTab('backup')}
              className={`py-4 border-b-2 flex items-center space-x-2 transition-all ${
                activeTab === 'backup'
                  ? 'border-sky-600 text-sky-600'
                  : 'border-transparent hover:text-corporate-navy'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Backup &amp; Reset</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

        {/* TAB 1: LEADS MANAGEMENT */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200">
              <div>
                <h3 className="text-xl font-bold text-corporate-navy">Daftar Pengajuan Penawaran Masuk</h3>
                <p className="text-xs text-slate-500">Kelola prospek katering, kemitraan reseller, dan permintaan retail berharga.</p>
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-slate-500">Status:</span>
                <select
                  value={leadStatusFilter}
                  onChange={(e) => setLeadStatusFilter(e.target.value)}
                  className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg font-semibold text-slate-700"
                >
                  <option value="all">Semua Status</option>
                  <option value="NEW">Baru (NEW)</option>
                  <option value="CONTACTED">Sudah Dihubungi</option>
                  <option value="QUOTED">Penawaran Terkirim</option>
                  <option value="CLOSED_DEAL">Closed Deal</option>
                </select>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              {filteredLeads.length === 0 ? (
                <div className="p-12 text-center text-slate-400 text-sm">
                  Belum ada leads dengan kriteria status ini.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                      <tr>
                        <th className="py-3.5 px-4">Tanggal &amp; Nama</th>
                        <th className="py-3.5 px-4">Perusahaan / Instansi</th>
                        <th className="py-3.5 px-4">Minat Pilar &amp; Layanan</th>
                        <th className="py-3.5 px-4">Detail Kebutuhan</th>
                        <th className="py-3.5 px-4">Status &amp; Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-4 px-4">
                            <div className="font-bold text-corporate-navy">{lead.fullName}</div>
                            <div className="text-[11px] text-slate-400">{lead.createdAt}</div>
                            <div className="text-xs text-sky-600 font-mono mt-0.5">{lead.phoneWhatsapp}</div>
                          </td>

                          <td className="py-4 px-4 text-slate-600">
                            {lead.companyOrOrg || '-'}
                            {lead.email && <div className="text-[11px] text-slate-400">{lead.email}</div>}
                          </td>

                          <td className="py-4 px-4">
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                              lead.pillarInterest === 'culinary'
                                ? 'bg-sky-100 text-sky-800'
                                : lead.pillarInterest === 'snacks'
                                ? 'bg-barakah-100 text-barakah-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                              {lead.pillarInterest === 'culinary' ? 'Catering' : lead.pillarInterest === 'snacks' ? 'Snacks' : 'Luxury'}
                            </span>
                            <div className="text-xs font-semibold text-slate-700 mt-1">{lead.serviceCategory}</div>
                          </td>

                          <td className="py-4 px-4 text-slate-600 max-w-xs">
                            <p className="line-clamp-2">{lead.message}</p>
                          </td>

                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-2">
                              {/* Status Dropdown */}
                              <select
                                value={lead.status}
                                onChange={(e) => onUpdateLeadStatus(lead.id, e.target.value as LeadStatus)}
                                className={`px-2 py-1 rounded text-xs font-bold border ${
                                  lead.status === 'NEW'
                                    ? 'bg-amber-50 text-amber-800 border-amber-300'
                                    : lead.status === 'CONTACTED'
                                    ? 'bg-sky-50 text-sky-800 border-sky-300'
                                    : lead.status === 'QUOTED'
                                    ? 'bg-purple-50 text-purple-800 border-purple-300'
                                    : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                }`}
                              >
                                <option value="NEW">Baru</option>
                                <option value="CONTACTED">Dihubungi</option>
                                <option value="QUOTED">Penawaran</option>
                                <option value="CLOSED_DEAL">Deal</option>
                              </select>

                              {/* WA Shortcut */}
                              <a
                                href={`https://wa.me/${lead.phoneWhatsapp.replace(/[^0-9]/g, '')}?text=Halo%20Bpk/Ibu%20${encodeURIComponent(lead.fullName)},%20kami%20dari%20PT%20Kizy%20Barakah%20Orbis%20ingin%20menindaklanjuti%20inquiry%20Anda.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg bg-barakah-100 text-barakah-700 hover:bg-barakah-200"
                                title="Chat WhatsApp"
                              >
                                <MessageCircle className="w-4 h-4" />
                              </a>

                              {/* Delete */}
                              <button
                                onClick={() => onDeleteLead(lead.id)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50"
                                title="Hapus"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 2: PRODUCTS & SERVICES CRUD */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200">
              <div>
                <h3 className="text-xl font-bold text-corporate-navy">Katalog Layanan &amp; Produk 3 Pilar</h3>
                <p className="text-xs text-slate-500">Tambah, ubah harga, atau kelola stok menu katering, pempek, dan retail branded.</p>
              </div>

              <button
                onClick={() => {
                  setEditingProduct({
                    pillarId: 'culinary',
                    category: 'Prasmanan VIP',
                    inStock: true,
                    featured: false,
                    badges: ['Resmi'],
                    specifications: []
                  });
                  setIsEditingProduct(true);
                }}
                className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm flex items-center space-x-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Produk Baru</span>
              </button>
            </div>

            {/* Filter toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-slate-500">Pilar:</span>
                <select
                  value={selectedPillarFilter}
                  onChange={(e) => setSelectedPillarFilter(e.target.value)}
                  className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg font-semibold text-slate-700"
                >
                  <option value="all">Semua Pilar</option>
                  <option value="culinary">Catering Makan Besar</option>
                  <option value="snacks">Pempek Kizy &amp; Snacks</option>
                  <option value="luxury">Luxury Retail</option>
                </select>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  placeholder="Cari nama produk..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg"
                />
              </div>
            </div>

            {/* Product Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4">Produk</th>
                      <th className="py-3.5 px-4">Pilar &amp; Kategori</th>
                      <th className="py-3.5 px-4">Harga Resmi</th>
                      <th className="py-3.5 px-4">Badges</th>
                      <th className="py-3.5 px-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-4 flex items-center space-x-3">
                          <img src={p.imageUrl} alt="" className="w-12 h-12 rounded-lg object-cover bg-slate-100" />
                          <div>
                            <div className="font-bold text-corporate-navy">{p.name}</div>
                            <div className="text-xs text-slate-400">{p.unit}</div>
                          </div>
                        </td>

                        <td className="py-4 px-4">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                            p.pillarId === 'culinary' ? 'bg-sky-100 text-sky-800' :
                            p.pillarId === 'snacks' ? 'bg-barakah-100 text-barakah-800' : 'bg-purple-100 text-purple-800'
                          }`}>
                            {p.pillarId.toUpperCase()}
                          </span>
                          <div className="text-xs text-slate-600 mt-0.5">{p.category}</div>
                        </td>

                        <td className="py-4 px-4 font-bold text-corporate-navy">
                          {p.priceFormatted}
                        </td>

                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            {p.badges.map((b, i) => (
                              <span key={i} className="px-1.5 py-0.5 bg-slate-100 rounded text-[10px] text-slate-600 font-medium">
                                {b}
                              </span>
                            ))}
                          </div>
                        </td>

                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end space-x-1.5">
                            <button
                              onClick={() => {
                                setEditingProduct(p);
                                setIsEditingProduct(true);
                              }}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50"
                              title="Edit"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => onDeleteProduct(p.id)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50"
                              title="Hapus"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}



        {/* TAB 3: SETTINGS & LEGALITIES */}
        {activeTab === 'settings' && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 max-w-4xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy">Pengaturan Profil &amp; Legalitas Korporat</h3>
              <p className="text-xs text-slate-500">Informasi ini langsung terhubung dengan tampilan resmi website publik.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Nama Legal Badan Hukum</label>
                <input
                  type="text"
                  value={company.legalEntity}
                  onChange={(e) => onUpdateCompany({ ...company, legalEntity: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Tagline Korporat</label>
                <input
                  type="text"
                  value={company.tagline}
                  onChange={(e) => onUpdateCompany({ ...company, tagline: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Nomor WhatsApp Resmi</label>
                <input
                  type="text"
                  value={company.contacts.whatsapp}
                  onChange={(e) => onUpdateCompany({ 
                    ...company, 
                    contacts: { ...company.contacts, whatsapp: e.target.value } 
                  })}
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Email Resmi</label>
                <input
                  type="text"
                  value={company.contacts.email}
                  onChange={(e) => onUpdateCompany({ 
                    ...company, 
                    contacts: { ...company.contacts, email: e.target.value } 
                  })}
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Nomor Induk Berusaha (NIB OSS)</label>
                <input
                  type="text"
                  value={company.legalities.nib}
                  onChange={(e) => onUpdateCompany({ 
                    ...company, 
                    legalities: { ...company.legalities, nib: e.target.value } 
                  })}
                  className="w-full px-3 py-2 border rounded-xl text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">SK Kemenkumham AHU</label>
                <input
                  type="text"
                  value={company.legalities.skKemenkumham}
                  onChange={(e) => onUpdateCompany({ 
                    ...company, 
                    legalities: { ...company.legalities, skKemenkumham: e.target.value } 
                  })}
                  className="w-full px-3 py-2 border rounded-xl text-sm font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Alamat Kantor Pusat</label>
              <textarea
                rows={2}
                value={company.contacts.address}
                onChange={(e) => onUpdateCompany({ 
                  ...company, 
                  contacts: { ...company.contacts, address: e.target.value } 
                })}
                className="w-full px-3 py-2 border rounded-xl text-sm"
              />
            </div>

            <div className="p-4 bg-sky-50 rounded-xl border border-sky-200 text-xs text-sky-800">
              Perubahan pada halaman ini otomatis tersimpan secara instan di local state dan browser storage.
            </div>

          </div>
        )}

        {/* TAB: INTERNAL KBLI 2020 NOTES */}
        {activeTab === 'kbli' && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-corporate-navy">Catatan Internal: Standar KBLI 2020 (Depkumham &amp; OSS)</h3>
                <p className="text-xs text-slate-500">Referensi kode baku bidang usaha resmi PT Kizy Barakah Orbis untuk audit kepatuhan dan perizinan.</p>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200">
                10 Kode Terdaftar
              </span>
            </div>

            <div className="divide-y divide-slate-100 border rounded-xl overflow-hidden">
              {internalKbliNotes.map((item) => (
                <div key={item.code} className="p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 font-mono text-xs font-bold">
                          KBLI {item.code}
                        </span>
                        <h4 className="text-sm font-bold text-corporate-navy">{item.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 font-semibold mt-0.5">{item.division}</p>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.scope}</p>
                    </div>
                    <span className="shrink-0 text-[10px] font-bold px-2 py-1 bg-slate-100 rounded text-slate-600">
                      {item.regulator}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong>Catatan Kepatuhan:</strong> Sesuai instruksi manajemen, rincian kode KBLI ini disimpan sebagai dokumentasi kepatuhan internal di portal WebAdmin ini dan tidak ditampilkan secara vulgar di antarmuka publik beranda.
            </div>
          </div>
        )}

        {/* TAB 4: BACKUP & DATA MAINTENANCE */}
        {activeTab === 'backup' && (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-bold text-corporate-navy">Pencadangan &amp; Pemulihan Data</h3>
              <p className="text-xs text-slate-500">Unduh data CMS dalam format JSON atau pulihkan ke kondisi semula.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
                  <Download className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-corporate-navy">Export Data JSON</h4>
                <p className="text-xs text-slate-500">Unduh seluruh katalog produk, data profil, dan riwayat leads ke komputer.</p>
                <button
                  onClick={handleExportData}
                  className="w-full py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs"
                >
                  Download File Backup JSON
                </button>
              </div>

              <div className="p-6 rounded-xl border border-red-200 bg-red-50/50 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-red-900">Reset ke Data Awal</h4>
                <p className="text-xs text-red-600">Kembalikan katalog produk dan leads ke data default bawaan pabrik.</p>
                <button
                  onClick={() => {
                    if (confirm('Yakin ingin mereset seluruh data kembali ke kondisi awal?')) {
                      onResetAllData();
                    }
                  }}
                  className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs"
                >
                  Reset Semua Data
                </button>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Modal: Tambah/Edit Produk */}
      {isEditingProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl">
            <h3 className="text-xl font-bold text-corporate-navy">
              {editingProduct.id ? 'Edit Produk / Layanan' : 'Tambah Produk / Layanan Baru'}
            </h3>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Nama Produk / Layanan *</label>
                <input
                  type="text"
                  required
                  value={editingProduct.name || ''}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  placeholder="Misal: Paket Pempek Sultan 50 Pcs"
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Pilar Bisnis</label>
                  <select
                    value={editingProduct.pillarId}
                    onChange={(e) => setEditingProduct({ ...editingProduct, pillarId: e.target.value as 'culinary' | 'snacks' | 'luxury' })}
                    className="w-full px-3 py-2 border rounded-xl text-sm"
                  >
                    <option value="culinary">Catering Makan Besar</option>
                    <option value="snacks">Pempek Kizy &amp; Snacks</option>
                    <option value="luxury">Luxury Retail Branded</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Kategori</label>
                  <input
                    type="text"
                    value={editingProduct.category || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                    placeholder="Misal: Pempek Kizy"
                    className="w-full px-3 py-2 border rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Format Harga *</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.priceFormatted || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, priceFormatted: e.target.value })}
                    placeholder="Rp 150.000"
                    className="w-full px-3 py-2 border rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Satuan / Unit</label>
                  <input
                    type="text"
                    value={editingProduct.unit || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, unit: e.target.value })}
                    placeholder="per paket / pax"
                    className="w-full px-3 py-2 border rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Tagline Ringkas</label>
                <input
                  type="text"
                  value={editingProduct.tagline || ''}
                  onChange={(e) => setEditingProduct({ ...editingProduct, tagline: e.target.value })}
                  placeholder="Kualitas Terbaik Nusantara"
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Deskripsi Lengkap</label>
                <textarea
                  rows={3}
                  value={editingProduct.description || ''}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  placeholder="Deskripsi keunggulan produk/layanan..."
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">URL Gambar (Unsplash / Hosted)</label>
                <input
                  type="url"
                  value={editingProduct.imageUrl || ''}
                  onChange={(e) => setEditingProduct({ ...editingProduct, imageUrl: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsEditingProduct(false)}
                  className="px-4 py-2 border rounded-xl text-xs font-bold text-slate-600"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs"
                >
                  Simpan Produk
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
