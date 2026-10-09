import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, Clock } from 'lucide-react';
import { CompanyProfile, InquiryLead, PillarType } from '../types';

interface ContactSectionProps {
  company: CompanyProfile;
  prefilledPillar?: PillarType;
  prefilledService?: string;
  onSubmitInquiry: (leadData: Omit<InquiryLead, 'id' | 'createdAt' | 'status'>) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  company,
  prefilledPillar = 'culinary',
  prefilledService = '',
  onSubmitInquiry
}) => {
  const [fullName, setFullName] = useState('');
  const [companyOrOrg, setCompanyOrOrg] = useState('');
  const [email, setEmail] = useState('');
  const [phoneWhatsapp, setPhoneWhatsapp] = useState('');
  const [pillarInterest, setPillarInterest] = useState<'culinary' | 'snacks' | 'luxury'>(
    prefilledPillar === 'all' ? 'culinary' : prefilledPillar
  );
  const [serviceCategory, setServiceCategory] = useState(prefilledService);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneWhatsapp || !message) {
      alert('Mohon lengkapi Nama, Nomor WhatsApp, dan Detail kebutuhan.');
      return;
    }

    onSubmitInquiry({
      fullName,
      companyOrOrg,
      email,
      phoneWhatsapp,
      pillarInterest,
      serviceCategory: serviceCategory || 'Umum',
      message
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullName('');
      setCompanyOrOrg('');
      setEmail('');
      setPhoneWhatsapp('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="kontak" className="py-20 bg-slate-50 border-t border-corporate-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Contacts & Headquarters (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-white px-3.5 py-1 rounded-full border border-slate-200">
                HUBUNGI KAMI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-corporate-navy tracking-tight">
                Konsultasikan Kebutuhan Bersama Tim Korporat
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Representatif PT Kizy Barakah Orbis siap merumuskan proposal penawaran katering acara, kerja sama distribusi pasokan pangan, maupun kebutuhan konsultasi bisnis lainnya.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-corporate-border flex items-start space-x-3.5 shadow-xs">
                <MapPin className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-corporate-navy">Alamat Kantor Resmi</div>
                  <div className="text-slate-700 mt-0.5 font-medium">{company.contacts.address}</div>
                  <div className="text-slate-500 font-medium">{company.contacts.city}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-corporate-border flex items-start space-x-3.5 shadow-xs">
                <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-corporate-navy">Email Korespondensi Resmi</div>
                  <a href={`mailto:${company.contacts.email}`} className="text-sky-800 font-semibold hover:underline">
                    {company.contacts.email}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-corporate-border flex items-start space-x-3.5 shadow-xs">
                <Phone className="w-5 h-5 text-corporate-navy shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-corporate-navy">Layanan WhatsApp &amp; Hotline</div>
                  <div className="text-slate-700 font-medium">{company.contacts.phone}</div>
                  <div className="text-emerald-800 font-bold mt-0.5">WhatsApp: {company.contacts.whatsapp}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-corporate-border flex items-start space-x-3.5 shadow-xs">
                <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-corporate-navy">Waktu Operasional &amp; Konsultasi Bisnis</div>
                  <div className="text-slate-700 font-medium">Senin – Sabtu: 08.00 – 18.00 WIB</div>
                  <div className="text-xs text-slate-500 mt-0.5">Konsultasi penawaran resmi dilayani secara profesional</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct B2B Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-corporate-border shadow-xs">
            <h3 className="text-xl font-bold text-corporate-navy mb-1.5">Formulir Pengajuan &amp; Permintaan Proposal</h3>
            <p className="text-xs text-slate-500 mb-6">
              Silakan lengkapi formulir di bawah. Tim representatif kami akan menindaklanjuti dalam waktu maksimal 2 jam kerja.
            </p>

            {submitted ? (
              <div className="p-8 text-center rounded-xl bg-emerald-50 border border-emerald-300 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Pengajuan Berhasil Diterima!</h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Terima kasih, Bapak/Ibu <strong>{fullName}</strong>. Rincian pengajuan Anda telah tersimpan di sistem manajemen kami dan akan segera ditindaklanjuti.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-corporate-navy mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nama Anda"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-corporate-border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-corporate-navy mb-1.5">
                      Perusahaan / Instansi (Opsional)
                    </label>
                    <input
                      type="text"
                      value={companyOrOrg}
                      onChange={(e) => setCompanyOrOrg(e.target.value)}
                      placeholder="Nama Instansi"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-corporate-border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-corporate-navy mb-1.5">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneWhatsapp}
                      onChange={(e) => setPhoneWhatsapp(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-corporate-border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-corporate-navy mb-1.5">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@instansi.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-corporate-border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-700"
                    />
                  </div>
                </div>

                {/* Pillar Selection */}
                <div>
                  <label className="block text-xs font-bold text-corporate-navy mb-1.5">
                    Lini Layanan yang Diminati *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPillarInterest('culinary')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
                        pillarInterest === 'culinary'
                          ? 'bg-sky-700 text-white border-sky-700'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      Jasa Boga &amp; Katering
                    </button>

                    <button
                      type="button"
                      onClick={() => setPillarInterest('snacks')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
                        pillarInterest === 'snacks'
                          ? 'bg-emerald-700 text-white border-emerald-700'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      Pempek Kizy &amp; Snacks
                    </button>

                    <button
                      type="button"
                      onClick={() => setPillarInterest('luxury')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
                        pillarInterest === 'luxury'
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      Portofolio Retail (Other)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-corporate-navy mb-1.5">
                    Detail Kebutuhan &amp; Catatan Acara / Pesanan *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Sebutkan detail kebutuhan Anda (misal: estimasi jumlah porsi katering, tanggal acara, atau pengajuan kerja sama pasokan)..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-corporate-border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-corporate-navy hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Formulir Pengajuan Resmi</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
