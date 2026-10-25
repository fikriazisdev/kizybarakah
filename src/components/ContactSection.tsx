import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe, FileText } from 'lucide-react';
import { CompanyProfile, InquiryLead, PillarType, LangType } from '../types';
import { InstagramOriginalLogo, GooglePlayOriginalLogo } from './BrandChannelIcons';

interface ContactSectionProps {
  company: CompanyProfile;
  lang: LangType;
  prefilledPillar?: PillarType;
  prefilledService?: string;
  onSubmitInquiry: (leadData: Omit<InquiryLead, 'id' | 'createdAt' | 'status'>) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  company,
  lang,
  prefilledPillar = 'culinary',
  prefilledService = '',
  onSubmitInquiry
}) => {
  const isEn = lang === 'en';
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

  useEffect(() => {
    if (prefilledPillar && prefilledPillar !== 'all') {
      setPillarInterest(prefilledPillar);
    }
    if (prefilledService) {
      setServiceCategory(prefilledService);
    }
  }, [prefilledPillar, prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneWhatsapp || !message) {
      alert(isEn ? 'Please complete your Name, WhatsApp Number, and Inquiry Details.' : 'Mohon lengkapi Nama, Nomor WhatsApp, dan Detail kebutuhan.');
      return;
    }

    onSubmitInquiry({
      fullName,
      companyOrOrg,
      email,
      phoneWhatsapp,
      pillarInterest,
      serviceCategory: serviceCategory || (isEn ? 'General Partnership' : 'Umum'),
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
          
          {/* Left Column: Office Contacts, Website Domain & Digital Ecosystem (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-white px-3.5 py-1 rounded-full border border-slate-200">
                {isEn ? 'CONNECT WITH US' : 'HUBUNGI KAMI'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-corporate-navy tracking-tight">
                {isEn
                  ? 'Connect With Our Headquarters & Business Ecosystem'
                  : 'Hubungi Kantor Pusat & Ekosistem Bisnis Kami'}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {isEn
                  ? 'For corporate catering & event snack consultations, Pempek Kizy B2B wholesale/reseller partnerships, or PesenSamaSarah curated retail & executive hampers, please reach us through our official channels:'
                  : 'Untuk konsultasi layanan katering & snack acara, kemitraan grosir/reseller Pempek Kizy, maupun pemesanan ritel & hampers PesenSamaSarah, silakan hubungi kami melalui saluran resmi di bawah ini:'}
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="p-4 rounded-xl bg-white border border-corporate-border flex items-start space-x-3.5 shadow-xs">
                <MapPin className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-corporate-navy">
                    {isEn ? 'Headquarters & Operations Hub' : 'Lokasi Kantor Pusat & Operasional'}
                  </div>
                  <div className="text-slate-700 mt-0.5 font-medium">{company.contacts.address}</div>
                  <div className="text-slate-500 font-medium">{company.contacts.city}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-corporate-border flex items-start space-x-3.5 shadow-xs">
                <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-corporate-navy">
                    {isEn ? 'Business Phone & WhatsApp' : 'Telepon Bisnis & WhatsApp'}
                  </div>
                  <a
                    href={`https://wa.me/${company.contacts.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-800 font-extrabold hover:underline mt-0.5 block"
                  >
                    {company.contacts.phone} (WhatsApp)
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {isEn ? 'Executive Leadership: Depati Sarah (Founder & CEO)' : 'Pimpinan Eksekutif: Depati Sarah (Founder & CEO)'}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-corporate-border flex items-start space-x-3.5 shadow-xs">
                <Mail className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-corporate-navy">
                    {isEn ? 'Corporate & Partnership Email' : 'Email Korporat & Kemitraan'}
                  </div>
                  <a href={`mailto:${company.contacts.email}`} className="text-sky-800 font-semibold hover:underline">
                    {company.contacts.email}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-corporate-border flex items-start space-x-3.5 shadow-xs">
                <Globe className="w-5 h-5 text-corporate-navy shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm space-y-1">
                  <div className="font-bold text-corporate-navy">
                    {isEn ? 'Digital Ecosystem & Channels' : 'Ekosistem Digital & Kanal Brand'}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href="https://www.instagram.com/pempek_kizy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors"
                    >
                      <InstagramOriginalLogo className="w-3.5 h-3.5 shrink-0" />
                      <span>@pempek_kizy</span>
                    </a>
                    <a
                      href="https://www.instagram.com/pesensamasarah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-sky-50 text-sky-900 border border-sky-200 text-xs font-bold hover:bg-sky-100 transition-colors"
                    >
                      <InstagramOriginalLogo className="w-3.5 h-3.5 shrink-0" />
                      <span>@pesensamasarah</span>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=id.easycatering.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-900 border border-slate-200 text-xs font-bold hover:bg-slate-200 transition-colors"
                    >
                      <GooglePlayOriginalLogo className="w-3.5 h-3.5 shrink-0" />
                      <span>EasyCatering (Google Play)</span>
                    </a>
                    <a
                      href={company.contacts.companyProfileUrl || '/company-profile.html'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold hover:bg-amber-100 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>Company Profile (PDF)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-corporate-border flex items-start space-x-3.5 shadow-xs">
                <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-corporate-navy">
                    {isEn ? 'Business Operating Hours' : 'Waktu Operasional & Konsultasi Bisnis'}
                  </div>
                  <div className="text-slate-700 font-medium">
                    {isEn ? 'Monday – Saturday: 08:00 – 18:00 WIB (GMT+7)' : 'Senin – Sabtu: 08.00 – 18.00 WIB'}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct B2B Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-corporate-border shadow-xs">
            <h3 className="text-xl font-bold text-corporate-navy mb-1.5">
              {isEn ? 'Corporate Inquiry & Partnership Proposal Form' : 'Formulir Pengajuan & Permintaan Proposal Resmi'}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {isEn
                ? 'Complete the form below. Our corporate representative team will respond promptly during business hours.'
                : 'Silakan lengkapi formulir di bawah. Tim representatif kami akan segera menindaklanjuti pengajuan Anda.'}
            </p>

            {submitted ? (
              <div className="p-8 text-center rounded-xl bg-emerald-50 border border-emerald-300 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">
                  {isEn ? 'Inquiry Successfully Recorded!' : 'Pengajuan Berhasil Diterima!'}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  {isEn ? (
                    <>Thank you, <strong>{fullName}</strong>. Your inquiry has been logged in our system and our team will follow up shortly.</>
                  ) : (
                    <>Terima kasih, Bapak/Ibu <strong>{fullName}</strong>. Rincian pengajuan Anda telah tersimpan di sistem manajemen kami dan akan segera ditindaklanjuti.</>
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-corporate-navy mb-1.5">
                      {isEn ? 'Full Name *' : 'Nama Lengkap *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isEn ? 'Your Full Name' : 'Nama Anda'}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-corporate-border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-corporate-navy mb-1.5">
                      {isEn ? 'Company / Institution (Optional)' : 'Perusahaan / Instansi (Opsional)'}
                    </label>
                    <input
                      type="text"
                      value={companyOrOrg}
                      onChange={(e) => setCompanyOrOrg(e.target.value)}
                      placeholder={isEn ? 'Company or Organization Name' : 'Nama Instansi / Perusahaan'}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-corporate-border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-corporate-navy mb-1.5">
                      {isEn ? 'Active WhatsApp / Phone Number *' : 'Nomor WhatsApp Aktif *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneWhatsapp}
                      onChange={(e) => setPhoneWhatsapp(e.target.value)}
                      placeholder="+62 / 08xxxxxxxxxx"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-corporate-border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-corporate-navy mb-1.5">
                      {isEn ? 'Business Email Address' : 'Alamat Email'}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-corporate-border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-700"
                    />
                  </div>
                </div>

                {/* Pillar Selection */}
                <div>
                  <label className="block text-xs font-bold text-corporate-navy mb-1.5">
                    {isEn ? 'Business Unit of Interest *' : 'Lini Bisnis yang Diminati *'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPillarInterest('snacks')}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
                        pillarInterest === 'snacks'
                          ? 'bg-emerald-700 text-white border-emerald-700'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      01. Pempek Kizy (@pempek_kizy)
                    </button>

                    <button
                      type="button"
                      onClick={() => setPillarInterest('culinary')}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
                        pillarInterest === 'culinary'
                          ? 'bg-sky-700 text-white border-sky-700'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      02. Catering &amp; Snack
                    </button>

                    <button
                      type="button"
                      onClick={() => setPillarInterest('luxury')}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
                        pillarInterest === 'luxury'
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      03. Curated Retail &amp; Hampers
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-corporate-navy mb-1.5">
                    {isEn ? 'Inquiry Details / Partnership Scope *' : 'Detail Kebutuhan & Catatan Acara / Kemitraan *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      isEn
                        ? 'Describe your requirements (e.g., B2B wholesale Pempek Kizy distribution, corporate catering portions & date, or executive hampers)...'
                        : 'Sebutkan detail kebutuhan Anda (misal: kemitraan B2B/reseller Pempek Kizy, estimasi porsi katering & tanggal acara, atau pengadaan hampers)...'
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-corporate-border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-corporate-navy hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isEn ? 'Submit Official Inquiry' : 'Kirim Formulir Pengajuan Resmi'}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
