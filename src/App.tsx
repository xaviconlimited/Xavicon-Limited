import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, 
  Info, 
  Target, 
  BookOpen, 
  Package, 
  Award, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Shield, 
  Zap, 
  Clock, 
  FileText, 
  Monitor, 
  Trash2, 
  Coffee, 
  Building, 
  GraduationCap, 
  Stethoscope, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Truck,
  Layers,
  Scale,
  Lock,
  ChevronUp,
  HelpCircle
} from 'lucide-react';
import { translations } from './translations';

type LanguageKey = 'en' | 'sw' | 'fr' | 'ar';
type PageKey = 'home' | 'about' | 'mission' | 'philosophy' | 'supply' | 'whyUs' | 'clients' | 'contact' | 'faqs' | 'privacy' | 'terms';

export default function App() {
  const [lang, setLang] = useState<LanguageKey>('en');
  const [currentPage, setCurrentPage] = useState<PageKey>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  
  // FAQ Modal state
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);

  // FAQ Accordion expanded state (ID of open question)
  const [activeFaqId, setActiveFaqId] = useState<number | null>(1);

  // Active Supply Category state
  const [activeSupplyCat, setActiveSupplyCat] = useState<string>('stationery');

  // Cookie Consent States
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isManagingCookies, setIsManagingCookies] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Load and apply Cookie Preference
  useEffect(() => {
    const consent = localStorage.getItem('xavicom_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setShowCookieBanner(true);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(consent);
        setAnalyticsConsent(parsed.analytics || false);
      } catch (e) {
        // Fallback
        setShowCookieBanner(true);
      }
    }
  }, []);

  const handleAcceptAllCookies = () => {
    const preferences = { essential: true, analytics: true };
    localStorage.setItem('xavicom_cookie_consent', JSON.stringify(preferences));
    setShowCookieBanner(false);
  };

  const handleDeclineCookies = () => {
    const preferences = { essential: true, analytics: false };
    localStorage.setItem('xavicom_cookie_consent', JSON.stringify(preferences));
    setAnalyticsConsent(false);
    setShowCookieBanner(false);
  };

  const handleSaveCookiePreferences = () => {
    const preferences = { essential: true, analytics: analyticsConsent };
    localStorage.setItem('xavicom_cookie_consent', JSON.stringify(preferences));
    setShowCookieBanner(false);
    setIsManagingCookies(false);
  };

  // Scroll to top on page change
  const showPage = (page: PageKey) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsFormSubmitting(false);
      setIsFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const resetForm = () => {
    setIsFormSubmitted(false);
  };

  const t = translations[lang];
  const isRtl = lang === 'ar';

  // Available languages metadata
  const languagesList = [
    { key: 'en', name: 'English', native: 'English' },
    { key: 'sw', name: 'Swahili', native: 'Kiswahili' },
    { key: 'fr', name: 'French', native: 'Français' },
    { key: 'ar', name: 'Arabic', native: 'العربية' }
  ];

  const currentLangObj = languagesList.find(l => l.key === lang) || languagesList[0];

  // Specific list of pages that appear in the Main Header Navbar
  const mainNavbarPages: PageKey[] = ['home', 'about', 'mission', 'contact'];

  return (
    <div 
      id="xavicom-app-root"
      dir={isRtl ? 'rtl' : 'ltr'} 
      className={`min-h-screen flex flex-col bg-[#FAFAFC] text-[#1A1A24] selection:bg-brand-amber selection:text-brand-navy antialiased ${isRtl ? 'font-sans' : 'font-sans'}`}
    >
      {/* STICKY HEADER NAVIGATION */}
      <header id="main-navigation" className="sticky top-0 z-40 bg-brand-teal shadow-md border-b border-brand-teal/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* LOGO AREA */}
            <div 
              id="brand-logo"
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => showPage('home')}
            >
              <div className="w-10 h-10 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center text-brand-amber shadow-md group-hover:scale-105 transition-transform duration-300">
                <Truck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none">
                  XAVICOM
                </span>
                <span className="text-[10px] font-bold text-brand-amber tracking-widest uppercase mt-0.5 leading-none">
                  LIMITED
                </span>
              </div>
            </div>

            {/* DESKTOP NAV ITEMS */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
              {mainNavbarPages.map((pageKey) => {
                const isActive = currentPage === pageKey;
                return (
                  <button
                    key={pageKey}
                    id={`nav-link-${pageKey}`}
                    onClick={() => showPage(pageKey)}
                    className={`px-2.5 py-2 text-sm font-bold tracking-wide transition-all duration-200 relative ${
                      isActive 
                        ? 'text-brand-amber' 
                        : 'text-white/80 hover:text-brand-amber'
                    }`}
                  >
                    {t.nav[pageKey]}
                    {isActive && (
                      <motion.div 
                        layoutId="activeNavIndicator" 
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-amber rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* LANGUAGE SELECTOR & MOBILE BUTTON */}
            <div className="flex items-center gap-3">
              {/* LANGUAGE SELECTOR DROPDOWN */}
              <div className="relative" id="language-switcher-dropdown">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/15 hover:bg-white/25 border border-white/10 text-sm font-bold text-white transition-colors"
                  aria-haspopup="true"
                  aria-expanded={isLangDropdownOpen}
                >
                  <Globe className="w-4 h-4 text-brand-amber" />
                  <span>{currentLangObj.native}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-white/80 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsLangDropdownOpen(false)} 
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`absolute ${isRtl ? 'left-0 origin-top-left' : 'right-0 origin-top-right'} mt-2 w-40 rounded-xl bg-white shadow-lg border border-slate-100 p-1.5 z-20`}
                      >
                        {languagesList.map((language) => (
                          <button
                            key={language.key}
                            id={`lang-select-${language.key}`}
                            onClick={() => {
                              setLang(language.key as LanguageKey);
                              setIsLangDropdownOpen(false);
                            }}
                            className={`w-full text-start px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
                              lang === language.key 
                                ? 'bg-brand-teal text-white font-bold' 
                                : 'text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            {language.native}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* MOBILE MENU TOGGLE BUTTON */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                id="mobile-menu-toggle"
                className="lg:hidden p-2 rounded-lg bg-white/15 hover:bg-white/25 border border-white/10 text-white transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE NAVIGATION MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              id="mobile-nav-panel"
              className="lg:hidden bg-brand-teal border-t border-white/10 overflow-hidden shadow-inner"
            >
              <div className="px-4 pt-3 pb-6 space-y-1.5">
                {mainNavbarPages.map((pageKey) => {
                  const isActive = currentPage === pageKey;
                  return (
                    <button
                      key={pageKey}
                      id={`mobile-nav-link-${pageKey}`}
                      onClick={() => showPage(pageKey)}
                      className={`w-full text-start px-4 py-3 rounded-lg text-base font-bold transition-all ${
                        isActive 
                          ? 'text-brand-amber bg-white/5 border-l-4 border-brand-amber pl-3' 
                          : 'text-white/80 hover:bg-white/5 hover:text-brand-amber'
                      }`}
                    >
                      {t.nav[pageKey]}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN VIEW SYSTEM WITH SMOOTH ANIMATION ROUTING */}
      <main id="main-content-area" className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + '-' + lang}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full animate-fade-in"
          >
            {/* PAGE 1: HOME */}
            {currentPage === 'home' && (
              <div id="page-home" className="flex flex-col">
                {/* HERO SECTION */}
                <section id="home-hero" className="relative text-white py-20 sm:py-28 lg:py-36 overflow-hidden bg-radial from-[#244570] via-[#1E3A5F] to-[#12243C]">
                  {/* Subtle Background Art */}
                  <div className="absolute inset-0 opacity-15">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-amber rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500 rounded-full blur-3xl"></div>
                  </div>
                  
                  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-amber text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 shadow-sm"
                    >
                      <Globe className="w-4 h-4 animate-pulse" />
                      <span>{t.hero.tagline}</span>
                    </motion.div>

                    <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-white mb-6 drop-shadow-sm">
                      {t.hero.title}
                    </h1>

                    <p className="max-w-2xl text-lg sm:text-xl text-slate-200 mb-10 leading-relaxed font-medium">
                      {t.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                      <button
                        onClick={() => showPage('supply')}
                        id="hero-cta-supply"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-amber text-[#12243C] font-extrabold text-base hover:bg-white hover:text-[#12243C] shadow-lg hover:shadow-brand-amber/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        {t.hero.ctaSupply}
                      </button>
                      <button
                        onClick={() => showPage('contact')}
                        id="hero-cta-contact"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white hover:border-brand-amber text-white font-extrabold text-base hover:bg-white/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        {t.hero.ctaContact}
                      </button>
                    </div>
                  </div>
                </section>

                {/* SECTION 1: OUR PHILOSOPHY */}
                <section id="home-philosophy" className="py-16 sm:py-24 bg-white border-b border-slate-100">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-brand-amber font-extrabold text-xs uppercase tracking-widest mb-3 block font-mono">
                      {lang === 'en' && "Corporate Philosophy"}
                      {lang === 'sw' && "Falsafa ya Kampuni"}
                      {lang === 'fr' && "Philosophie de l'Entreprise"}
                      {lang === 'ar' && "فلسفة الشركة"}
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy mb-6">
                      {t.philosophy.title}
                    </h2>
                    <div className="w-16 h-1 bg-brand-amber mx-auto mb-8 rounded-full"></div>
                    <p className="text-slate-700 text-lg sm:text-xl leading-relaxed italic font-medium max-w-3xl mx-auto">
                      "{t.philosophy.text}"
                    </p>
                  </div>
                </section>

                {/* SECTION 2: EXPLORE OUR SERVICES */}
                <section id="home-explore-services" className="py-16 sm:py-24 bg-[#F8FAFC]">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center max-w-3xl mx-auto mb-16">
                      <span className="text-brand-amber font-extrabold text-xs uppercase tracking-widest mb-2 block font-mono">
                        {lang === 'en' && "Capabilities & Solutions"}
                        {lang === 'sw' && "Uwezo na Suluhu"}
                        {lang === 'fr' && "Capacités et Solutions"}
                        {lang === 'ar' && "القدرات والحلول"}
                      </span>
                      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy mb-4">
                        {lang === 'en' && "Explore Our Services"}
                        {lang === 'sw' && "Gundua Huduma Zetu"}
                        {lang === 'fr' && "Explorez Nos Services"}
                        {lang === 'ar' && "استكشف خدماتنا"}
                      </h2>
                      <p className="text-slate-600 text-base sm:text-lg font-medium">
                        {lang === 'en' && "From procurement strategy to logistics and delivery, discover how we support institutional and corporate operations."}
                        {lang === 'sw' && "Kutoka mkakati wa ununuzi hadi vifaa na usafirishaji, gundua jinsi tunavyosaidia shughuli za taasisi na kampuni."}
                        {lang === 'fr' && "De la stratégie d'approvisionnement à la logistique et à la livraison, découvrez comment nous soutenons les opérations de nos clients."}
                        {lang === 'ar' && "من استراتيجية المشتريات إلى الخدمات اللوجستية والتسليم، اكتشف كيف ندعم عمليات عملائنا."}
                      </p>
                      <div className="w-16 h-1 bg-brand-navy mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                      {[
                        {
                          id: '01',
                          title: t.nav.supply,
                          desc: lang === 'en' 
                            ? 'Browse our extensive, high-quality catalogue including office stationery, IT equipment, uniforms, PPE, and hardware.'
                            : lang === 'sw'
                            ? 'Gundua orodha yetu pana ikijumuisha vifaa vya ofisini, vifaa vya TEHAMA, sare za kazi, na vifaa vya kinga (PPE).'
                            : lang === 'fr'
                            ? 'Parcourez notre vaste catalogue de fournitures de bureau, d’équipements informatiques, d’uniformes et d’équipements de sécurité.'
                            : 'تصفح كتالوجنا الشامل وعالي الجودة الذي يشمل القرطاسية المكتبية وأجهزة تكنولوجيا المعلومات والملابس الرسمية ومعدات السلامة.',
                          page: 'supply' as PageKey,
                          icon: Package,
                        },
                        {
                          id: '02',
                          title: t.nav.whyUs,
                          desc: lang === 'en'
                            ? 'A 70% woman-owned, AGPO-compliant, reliable procurement partner committed to competitive pricing and quality standards.'
                            : lang === 'sw'
                            ? 'Mshirika wa kuaminika wa ununuzi, unaomilikiwa na mwanamke kwa 70%, unayekubali vigezo vya AGPO na ubora.'
                            : lang === 'fr'
                            ? 'Un partenaire fiable, détenu à 70% par une femme, conforme à l’AGPO et engagé envers la compétitivité et la qualité.'
                            : 'شريك توريد موثوق ومسجل لدى فئة AGPO، مملوك بنسبة 70% لامرأة، ويلتزم بأسعار تنافسية وجودة صارمة.',
                          page: 'whyUs' as PageKey,
                          icon: Award,
                        },
                        {
                          id: '03',
                          title: t.nav.clients,
                          desc: lang === 'en'
                            ? 'Trusted by government institutions, non-governmental organizations, corporates, schools, and hospitals.'
                            : lang === 'sw'
                            ? 'Tunaaminika na taasisi za serikali, mashirika yasiyo ya kiserikali (NGOs), makampuni, na hospitali.'
                            : lang === 'fr'
                            ? 'Partenaire de confiance des institutions publiques, des ONG, des entreprises privées et des centres hospitaliers.'
                            : 'نحظى بثقة المؤسسات الحكومية والمنظمات غير الحكومية والشركات والمدارس والمستشفيات.',
                          page: 'clients' as PageKey,
                          icon: Users,
                        },
                        {
                          id: '04',
                          title: t.nav.faqs,
                          desc: lang === 'en'
                            ? 'Have questions about delivery times, order quantities, or sourcing? Find clear, direct answers here.'
                            : lang === 'sw'
                            ? 'Je, kuna maswali kuhusu muda wa utoaji au zabuni? Pata majibu sahihi hapa.'
                            : lang === 'fr'
                            ? 'Des questions sur les délais de livraison, la logistique ou l’approvisionnement ? Trouvez vos réponses ici.'
                            : 'لديك أسئلة حول مواعيد التسليم أو الكميات المطلوبة؟ اعثر على إجابات مباشرة ومفصلة هنا.',
                          page: 'faqs' as PageKey,
                          icon: HelpCircle,
                        }
                      ].map((card) => {
                        const CardIcon = card.icon;
                        return (
                          <div
                            key={card.id}
                            id={`explore-service-card-${card.id}`}
                            onClick={() => showPage(card.page)}
                            className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-md hover:shadow-xl hover:border-brand-amber/30 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between group h-full relative overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 p-4 font-mono text-4xl sm:text-5xl font-extrabold text-slate-100 group-hover:text-brand-amber/10 transition-colors pointer-events-none select-none">
                              {card.id}
                            </div>
                            <div>
                              <div className="w-12 h-12 rounded-xl bg-[#F4F6F9] flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-brand-amber transition-colors duration-300">
                                <CardIcon className="w-6 h-6 stroke-[2]" />
                              </div>
                              <h3 className="font-display font-bold text-xl text-brand-navy mb-3">
                                {card.title}
                              </h3>
                              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                                {card.desc}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-amber group-hover:text-brand-navy transition-colors mt-auto">
                              <span>
                                {lang === 'en' && "Read More"}
                                {lang === 'sw' && "Soma Zaidi"}
                                {lang === 'fr' && "En Savoir Plus"}
                                {lang === 'ar' && "اقرأ المزيد"}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                            </span>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </section>
              </div>
            )}

            {/* PAGE 2: ABOUT US */}
            {currentPage === 'about' && (
              <section id="page-about" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column - Beautiful Typographical Layout */}
                  <div className="lg:col-span-7 flex flex-col">
                    <span className="text-brand-amber font-bold text-xs uppercase tracking-widest mb-2 block font-mono">
                      {lang === 'en' && "Corporate Profile"}
                      {lang === 'sw' && "Wasifu wa Shirika"}
                      {lang === 'fr' && "Profil de l'entreprise"}
                      {lang === 'ar' && "ملف الشركة التعريفية"}
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy mb-6 relative">
                      {t.about.title}
                      <span className="absolute bottom-[-10px] start-0 w-20 h-1 bg-brand-teal rounded-full"></span>
                    </h2>
                    
                    <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mt-6">
                      <p className="font-bold text-brand-navy border-s-4 border-brand-teal ps-4">
                        {t.about.p1}
                      </p>
                      <p>
                        {t.about.p2}
                      </p>
                      <p className="text-slate-600">
                        {t.about.p3}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Conceptual Brand Graphic Shield */}
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-radial from-brand-teal to-[#569992] p-10 flex flex-col justify-between text-white shadow-2xl border border-white/10 overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-[-20%] right-[-20%] w-64 h-64 border-4 border-brand-amber rounded-full"></div>
                      </div>
                      
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-amber border border-white/10">
                          <Shield className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono tracking-widest text-white/70">XAVICOM CO.</span>
                      </div>

                      <div className="flex flex-col gap-2 z-10">
                        <div className="font-display font-extrabold text-2xl text-brand-amber uppercase tracking-tight">
                          100% Reliable
                        </div>
                        <p className="text-xs text-white leading-relaxed font-semibold">
                          {lang === 'en' && "Strategic sourcing & timely delivery of custom procurements across all industries and disciplines."}
                          {lang === 'sw' && "Utafutaji wa kimkakati na uwasilishaji wa wakati unaofaa wa ununuzi wa kitaalamu kote viwandani."}
                          {lang === 'fr' && "Sourcing stratégique et livraison rapide d'approvisionnements sur mesure pour toutes les industries."}
                          {lang === 'ar' && "توريد استراتيجي وتسليم في الوقت المناسب لمشتريات مخصصة عبر جميع الصناعات والمجالات."}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            )}

            {/* PAGE 3: MISSION, VISION & CORE VALUES */}
            {currentPage === 'mission' && (
              <section id="page-mission" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Statement Banner */}
                <div className="bg-brand-teal text-brand-navy rounded-3xl p-8 sm:p-12 shadow-xl mb-16 relative overflow-hidden border border-brand-teal/20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-brand-amber/30 to-transparent rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10 max-w-3xl">
                    <span className="text-brand-navy font-extrabold text-xs uppercase tracking-widest mb-3 block font-mono">
                      {t.missionVision.missionTitle}
                    </span>
                    <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-brand-navy mb-6">
                      {lang === 'en' && "Our Purpose & Promise"}
                      {lang === 'sw' && "Malengo na Ahadi Yetu"}
                      {lang === 'fr' && "Notre But et Notre Promesse"}
                      {lang === 'ar' && "غايتنا ووعدنا"}
                    </h2>
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed italic font-semibold">
                      "{t.missionVision.missionText}"
                    </p>
                  </div>
                </div>

                {/* Core Values Section */}
                <div className="flex flex-col">
                  <div className="text-center mb-10">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy">
                      {t.missionVision.valuesTitle}
                    </h3>
                    <div className="w-16 h-1 bg-brand-teal mx-auto mt-3 rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Integrity */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                        <Scale className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-brand-navy mb-1">{t.missionVision.integrity}</h4>
                        <p className="text-xs text-slate-500">
                          {lang === 'en' && "Honesty and strict moral principles guide all our customer transactions."}
                          {lang === 'sw' && "Uaminifu na kanuni kali za maadili huongoza miamala yetu yote."}
                          {lang === 'fr' && "L'honnêteté et des principes moraux stricts guident nos transactions."}
                          {lang === 'ar' && "الأمانة والمبادئ الأخلاقية الصارمة توجه جميع تعاملاتنا."}
                        </p>
                      </div>
                    </div>

                    {/* Reliability */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-brand-navy mb-1">{t.missionVision.reliability}</h4>
                        <p className="text-xs text-slate-500">
                          {lang === 'en' && "A dependable, reliable supplies partner across any urgent timelines."}
                          {lang === 'sw' && "Mshirika anayetegemeka wa ugavi katika ratiba zote za dharura."}
                          {lang === 'fr' && "Un partenaire d'approvisionnement fiable, peu importe les délais."}
                          {lang === 'ar' && "شريك توريد يمكن الاعتماد عليه في كافة الأوقات والظروف."}
                        </p>
                      </div>
                    </div>

                    {/* Efficiency */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-brand-navy mb-1">{t.missionVision.efficiency}</h4>
                        <p className="text-xs text-slate-500">
                          {lang === 'en' && "Cost-effective procurement execution and dynamic source validation."}
                          {lang === 'sw' && "Utekelezaji wa ununuzi wa bei nafuu na uhakiki thabiti wa vyanzo."}
                          {lang === 'fr' && "Exécution rentable des achats et validation dynamique des sources."}
                          {lang === 'ar' && "تنفيذ مشتريات فعال من حيث التكلفة والتحقق الديناميكي من المصادر."}
                        </p>
                      </div>
                    </div>

                    {/* Quality Assurance */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-brand-navy mb-1">{t.missionVision.qualityAssurance}</h4>
                        <p className="text-xs text-slate-500">
                          {lang === 'en' && "Strict verification and rigorous checks to safeguard client standards."}
                          {lang === 'sw' && "Uthibitishaji mkali na ukaguzi wa kina ili kulinda viwango vya mteja."}
                          {lang === 'fr' && "Vérification stricte et contrôles rigoureux pour garantir les normes."}
                          {lang === 'ar' && "التحقق الصارم والتدقيق الدقيق لحماية معايير عملائنا المستهدفة."}
                        </p>
                      </div>
                    </div>

                    {/* Customer Focus */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-brand-navy mb-1">{t.missionVision.customerFocus}</h4>
                        <p className="text-xs text-slate-500">
                          {lang === 'en' && "Centred on meeting specific needs with personalized support."}
                          {lang === 'sw' && "Inalenga kukidhi mahitaji maalum kwa usaidizi wa kipekee."}
                          {lang === 'fr' && "Centré sur la satisfaction de besoins spécifiques avec un suivi dédié."}
                          {lang === 'ar' && "التركيز المطلق على تلبية الاحتياجات المحددة وتقديم الدعم المخصص."}
                        </p>
                      </div>
                    </div>

                    {/* Professionalism */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-brand-navy mb-1">{t.missionVision.professionalism}</h4>
                        <p className="text-xs text-slate-500">
                          {lang === 'en' && "Meticulous communication, precise documentation and execution."}
                          {lang === 'sw' && "Mawasiliano ya kina, nyaraka sahihi na utendaji wa kiwango cha juu."}
                          {lang === 'fr' && "Communication méticuleuse, documentation précise et exécution soignée."}
                          {lang === 'ar' && "تواصل دقيق، وتوثيق احترافي، وتنفيذ مهني على أعلى المستويات."}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </section>
            )}

            {/* PAGE 4: OUR PHILOSOPHY */}
            {currentPage === 'philosophy' && (
              <section id="page-philosophy" className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-8 sm:p-16 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                  <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center text-brand-teal shrink-0">
                    <BookOpen className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="font-display font-extrabold text-3xl text-brand-navy mb-6">
                      {t.philosophy.title}
                    </h2>
                    <p className="text-slate-700 text-lg sm:text-xl leading-relaxed italic border-s-4 border-brand-teal ps-6 font-medium">
                      {t.philosophy.text}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* PAGE 5: WHAT WE SUPPLY */}
            {currentPage === 'supply' && (
              <section id="page-supply" className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-brand-amber font-bold text-xs uppercase tracking-widest mb-2 block font-mono">
                    {lang === 'en' && "Our Catalogues"}
                    {lang === 'sw' && "Katalogi Zetu"}
                    {lang === 'fr' && "Nos Catalogues"}
                    {lang === 'ar' && "كتالوجاتنا الشاملة"}
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy mb-4">
                    {t.supply.title}
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg font-medium">
                    {t.supply.intro}
                  </p>
                  <div className="w-16 h-1 bg-brand-amber mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      id: 'stationery',
                      title: t.supply.categories.stationery.title,
                      icon: FileText,
                      bullets: {
                        en: ["Printing papers", "Files and folders", "Toners and cartridges", "Pens and markers", "Notebooks and diaries", "Staplers and office tools", "General office consumables and accessories"],
                        sw: ["Karatasi za kuchapa", "Faili na folda", "Wino wa printa (toners/cartridges)", "Kalamu na kalamu za alama", "Madaftari na shajara", "Vifaa vya kubana karatasi na zana za ofisini", "Bidhaa za jumla za ofisi na vifaa vyake"],
                        fr: ["Papiers d'impression", "Dossiers et classeurs", "Toners et cartouches", "Stylos et marqueurs", "Cahiers et agendas", "Agrafeuses et outils de bureau", "Consommables et accessoires généraux de bureau"],
                        ar: ["ورق الطباعة", "الملفات والمجلدات", "أحبار وخراطيش الطابعات", "الأقلام وأقلام التحديد", "الدفاتر واليوميات", "الدباسات وأدوات المكتب", "المستهلكات المكتبية العامة والإكسسوارات"]
                      }
                    },
                    {
                      id: 'ict',
                      title: t.supply.categories.ict.title,
                      icon: Monitor,
                      bullets: {
                        en: ["Laptops", "Desktop computers", "Printers", "Networking equipment", "UPS systems", "Extension cables", "Computer accessories and peripherals"],
                        sw: ["Kompyuta mpakato (laptops)", "Kompyuta za mezani", "Printa", "Vifaa vya mtandao", "Mifumo ya umeme wa dharura (UPS)", "Nyaya za kuongeza urefu", "Vifaa vya kompyuta na pembezoni"],
                        fr: ["Ordinateurs portables", "Ordinateurs de bureau", "Imprimantes", "Équipements réseau", "Systèmes d'onduleurs (UPS)", "Rallonges électriques", "Accessoires et périphériques informatiques"],
                        ar: ["أجهزة الكمبيوتر المحمولة (لابتوب)", "أجهزة الكمبيوتر المكتبية", "الطابعات", "معدات الشبكات", "أنظمة طاقة UPS", "كابلات التوصيل الإضافية", "ملحقات ومحيطيات الكمبيوتر"]
                      }
                    },
                    {
                      id: 'cleaning',
                      title: t.supply.categories.cleaning.title,
                      icon: Trash2,
                      bullets: {
                        en: ["Detergents", "Disinfectants", "Mops and brooms", "Tissue papers", "Hand wash products", "Sanitizers", "Cleaning equipment and tools"],
                        sw: ["Sabuni na sabuni za unga", "Dawa za kuua vijidudu", "Deki za kusafisha na mifagio", "Karatasi za chooni", "Bidhaa za kunawa mikono", "Vitakasa mikono", "Vifaa na zana za kusafishia"],
                        fr: ["Détergents", "Désinfectants", "Serpillières et balais", "Papier hygiénique", "Produits pour le lavage des mains", "Désinfectants", "Équipements et outils de nettoyage"],
                        ar: ["المنظفات", "المطهرات", "المماسح والمكانس", "ورق التواليت", "منتجات غسيل الأيدي", "المعقمات", "معدات وأدوات التنظيف"]
                      }
                    },
                    {
                      id: 'kitchen',
                      title: t.supply.categories.kitchen.title,
                      icon: Coffee,
                      bullets: {
                        en: ["Cutlery", "Crockery", "Flasks", "Catering equipment", "Catering consumables"],
                        sw: ["Uma na visu", "Vyombo vya udongo", "Vyupa vya chai (flasks)", "Vifaa vya upishi", "Bidhaa za matumizi za upishi"],
                        fr: ["Couverts", "Vaisselle", "Thermos", "Équipements de restauration", "Consommables de restauration"],
                        ar: ["أدوات المائدة (ملاعق وسكاكين)", "أواني الطعام", "الدوارق والترامس", "معدات تقديم الطعام والتموين", "مستهلكات تقديم الطعام والتموين"]
                      }
                    },
                    {
                      id: 'furniture',
                      title: t.supply.categories.furniture.title,
                      icon: Building2,
                      bullets: {
                        en: ["Office desks", "Office chairs", "Cabinets", "Shelves", "Partitions", "Office fittings"],
                        sw: ["Meza za ofisi", "Viti vya ofisi", "Makabati", "Racks za kuwekea vitu", "Kuta za kupasua ofisi (partitions)", "Fittings za ofisi"],
                        fr: ["Bureaux professionnels", "Chaises de bureau", "Armoires de rangement", "Étagères", "Cloisons de bureau", "Agencements de bureau"],
                        ar: ["المكاتب المكتبية", "الكراسي المكتبية", "الخزائن والأدراج", "الرفوف", "القواطع المكتبية", "تجهيزات المكاتب"]
                      }
                    },
                    {
                      id: 'ppe',
                      title: t.supply.categories.ppe.title,
                      icon: Shield,
                      bullets: {
                        en: ["Gloves", "Helmets", "Reflective jackets", "First aid kits", "Safety boots", "Workplace safety equipment"],
                        sw: ["Glavu za mikono", "Kofia ngumu (helmets)", "Koti za kuakisi mwanga", "Sanduku la huduma ya kwanza", "Viatu vya usalama (safety boots)", "Vifaa vya usalama kazini"],
                        fr: ["Gants de protection", "Casques de sécurité", "Gilets réfléchissants", "Trousses de secours", "Bottes de sécurité", "Équipements de sécurité sur le lieu de travail"],
                        ar: ["القفازات", "الخوذات الواقية", "السترات العاكسة", "حقائب الإسعافات الأولية", "أحذية السلامة", "معدات السلامة المهنية في مواقع العمل"]
                      }
                    },
                    {
                      id: 'branded',
                      title: t.supply.categories.branded.title,
                      icon: Award,
                      bullets: {
                        en: ["Branded T-shirts", "Caps", "Banners", "Corporate gifts", "Promotional materials", "Branding and printing solutions"],
                        sw: ["Fulana zenye chapa", "Kofia", "Mabango", "Zawadi za makampuni", "Vifaa vya kukuza chapa", "Suluhisho za uandishi wa chapa na uchapishaji"],
                        fr: ["T-shirts de marque", "Casquettes", "Bannières", "Cadeaux d'entreprise", "Matériels de promotion", "Solutions d'impression et d'image de marque"],
                        ar: ["القمصان المطبوعة بشعار الشركة", "القبعات", "اللافتات والبنرات", "الهدايا الترويجية للشركات", "المواد الدعائية", "حلول العلامات التجارية والطباعة"]
                      }
                    },
                    {
                      id: 'electrical',
                      title: t.supply.categories.electrical.title,
                      icon: Zap,
                      bullets: {
                        en: ["Bulbs", "Electrical cables", "Switches", "Plumbing materials", "Hardware materials", "General maintenance supplies"],
                        sw: ["Taa za umeme", "Nyaya za umeme", "Swichi za umeme", "Mifumo na vifaa vya mabomba", "Vifaa vya ujenzi (hardware)", "Vifaa vya matengenezo ya jumla"],
                        fr: ["Ampoules et éclairage", "Câbles électriques", "Interrupteurs", "Matériaux de plomberie", "Matériaux de quincaillerie", "Fournitures d'entretien général"],
                        ar: ["المصابيح والإضاءة", "الكابلات الكهربائية", "المفاتيح الكهربائية", "مواد السباكة", "مواد الخردوات والأدوات المعدنية", "لوازم الصيانة العامة"]
                      }
                    },
                    {
                      id: 'uniforms',
                      title: t.supply.categories.uniforms.title,
                      icon: Briefcase,
                      bullets: {
                        en: ["School uniforms", "Corporate uniforms", "Security uniforms", "Hospital scrubs", "Lab coats", "Branded work wear", "Reflective jackets", "Safety apparel", "Custom branded uniforms"],
                        sw: ["Sare za shule", "Sare za kampuni", "Sare za usalama", "Mavazi ya kliniki (scrubs)", "Koti za maabara", "Mavazi ya kazini yenye chapa", "Koti za kuakisi mwanga", "Mavazi ya usalama", "Sare zilizoundwa maalum na chapa"],
                        fr: ["Uniformes scolaires", "Uniformes d'entreprise", "Uniformes de sécurité", "Blouses d'hôpital (scrubs)", "Blouses de laboratoire", "Vêtements de travail de marque", "Gilets réfléchissants", "Vêtements de sécurité", "Uniformes personnalisés de marque"],
                        ar: ["الزي المدرسي", "الزي الموحد للشركات", "زي رجال الأمن الموحد", "ملابس العيادات والمستشفيات", "معاطف المختبرات", "ملابس العمل المطبوعة بشعار الشركة", "السترات العاكسة", "ملابس السلامة المهنية", "الزي الموحد المخصص للعلامات التجارية"]
                      }
                    }
                  ].map((cat) => {
                    const CatIcon = cat.icon;
                    const isOpen = activeSupplyCat === cat.id;
                    const catBullets = cat.bullets[lang] || cat.bullets['en'];
                    return (
                      <div 
                        key={cat.id} 
                        className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isOpen ? 'border-brand-amber/40 shadow-lg' : 'border-slate-100 shadow-sm hover:shadow-md'
                        }`}
                      >
                        {/* Header Trigger */}
                        <button
                          onClick={() => setActiveSupplyCat(isOpen ? '' : cat.id)}
                          className="w-full flex justify-between items-center p-6 text-start focus:outline-none cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                              isOpen ? 'bg-brand-navy text-brand-amber' : 'bg-brand-light text-brand-navy'
                            }`}>
                              <CatIcon className="w-6 h-6 stroke-[2]" />
                            </div>
                            <h3 className="font-display font-bold text-lg sm:text-xl text-brand-navy">
                              {cat.title}
                            </h3>
                          </div>
                          <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy transition-transform duration-300 ${
                            isOpen ? 'rotate-180 bg-brand-amber/10 text-brand-amber' : ''
                          }`}>
                            <ChevronDown className="w-5 h-5" />
                          </div>
                        </button>

                        {/* Expandable Body */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-8 pt-2 border-t border-slate-50 bg-slate-50/50">
                                <div className="max-w-3xl">
                                  <p className="text-xs font-extrabold text-brand-navy/55 uppercase tracking-wider mb-4 font-mono">
                                    {lang === 'en' && "Items We Supply:"}
                                    {lang === 'sw' && "Bidhaa Tunazokusambaza:"}
                                    {lang === 'fr' && "Articles Que Nous Fournissons :"}
                                    {lang === 'ar' && "المواد التي نقوم بتوريدها:"}
                                  </p>
                                  
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                                    {catBullets.map((item, idx) => (
                                      <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                                        <div className="w-5 h-5 rounded-full bg-brand-amber/10 text-brand-amber flex items-center justify-center shrink-0 mt-0.5">
                                          <span className="text-xs font-extrabold">✓</span>
                                        </div>
                                        <span className="text-slate-700 text-sm sm:text-base font-semibold">
                                          {item}
                                        </span>
                                      </div>
                                    ))}
                                  </div>

                                  <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                      onClick={() => {
                                        setFormData(prev => ({
                                          ...prev,
                                          subject: `Quote Request: ${cat.title}`
                                        }));
                                        showPage('contact');
                                      }}
                                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white hover:bg-brand-amber hover:text-brand-navy font-bold text-sm shadow-md transition-all cursor-pointer"
                                    >
                                      <span>
                                        {lang === 'en' && "Request a Quote"}
                                        {lang === 'sw' && "Omba Nukuu ya Bei"}
                                        {lang === 'fr' && "Demander un Devis"}
                                        {lang === 'ar' && "طلب عرض سعر"}
                                      </span>
                                      <ArrowRight className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

              </section>
            )}

            {/* PAGE 6: WHY CHOOSE US */}
            {currentPage === 'whyUs' && (
              <section id="page-why-choose-us" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                  
                  {/* List of competitive advantages */}
                  <div>
                    <span className="text-brand-amber font-bold text-xs uppercase tracking-widest mb-2 block font-mono">
                      {lang === 'en' && "Our Edge"}
                      {lang === 'sw' && "Faida Zetu"}
                      {lang === 'fr' && "Nos Avantages"}
                      {lang === 'ar' && "ميزتنا التنافسية"}
                    </span>
                    <h2 className="font-display font-extrabold text-3xl text-brand-navy mb-8">
                      {t.whyChooseUs.title}
                    </h2>

                    <div className="space-y-4">
                      {t.whyChooseUs.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                          <div className="w-6 h-6 rounded-full bg-brand-amber/10 text-brand-amber flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                          </div>
                          <p className="text-slate-700 text-sm sm:text-base font-semibold">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Commitment banner statement */}
                  <div className="flex justify-center">
                    <div className="bg-radial from-brand-teal to-[#53968F] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden max-w-md border border-white/10">
                      <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-brand-amber/10 rounded-full blur-xl"></div>
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-amber mb-6 border border-white/10">
                        <Award className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-brand-amber mb-4">
                        {t.whyChooseUs.commitmentTitle}
                      </h3>
                      <p className="text-slate-100 text-base sm:text-lg leading-relaxed italic font-medium">
                        "{t.whyChooseUs.commitmentText}"
                      </p>
                    </div>
                  </div>

                </div>

              </section>
            )}

            {/* PAGE 7: OUR CLIENTS */}
            {currentPage === 'clients' && (
              <section id="page-clients" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-brand-amber font-bold text-xs uppercase tracking-widest mb-2 block font-mono">
                    {lang === 'en' && "Trusted Partners"}
                    {lang === 'sw' && "Washirika Wetu"}
                    {lang === 'fr' && "Partenaires de Confiance"}
                    {lang === 'ar' && "شركاؤنا الموثوقون"}
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy mb-4">
                    {t.clients.title}
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg font-medium">
                    {t.clients.intro}
                  </p>
                  <div className="w-16 h-1 bg-brand-teal mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* Client Type 1: Government */}
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-brand-light text-brand-teal flex items-center justify-center mb-6">
                      <Building className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
                      {t.clients.types.govt}
                    </h3>
                  </div>

                  {/* Client Type 2: NGOs */}
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-brand-light text-brand-teal flex items-center justify-center mb-6">
                      <Globe className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
                      {t.clients.types.ngos}
                    </h3>
                  </div>

                  {/* Client Type 3: Schools */}
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-brand-light text-brand-teal flex items-center justify-center mb-6">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
                      {t.clients.types.schools}
                    </h3>
                  </div>

                  {/* Client Type 4: Hospitals */}
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-brand-light text-brand-teal flex items-center justify-center mb-6">
                      <Stethoscope className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
                      {t.clients.types.hospitals}
                    </h3>
                  </div>

                  {/* Client Type 5: Corporate */}
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-brand-light text-brand-teal flex items-center justify-center mb-6">
                      <Briefcase className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
                      {t.clients.types.corporate}
                    </h3>
                  </div>

                  {/* Client Type 6: SMEs */}
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-brand-light text-brand-teal flex items-center justify-center mb-6">
                      <Building2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
                      {t.clients.types.smes}
                    </h3>
                  </div>

                </div>

              </section>
            )}

            {/* PAGE 8: CONTACT US */}
            {currentPage === 'contact' && (
              <section id="page-contact" className="py-16 sm:py-24 max-w-3xl mx-auto px-4 sm:px-6">
                
                <div className="text-center mb-10">
                  <span className="text-brand-amber font-bold text-xs uppercase tracking-widest mb-2 block font-mono">
                    {lang === 'en' && "Enquiry Desk"}
                    {lang === 'sw' && "Dawati la Maswali"}
                    {lang === 'fr' && "Bureau d'enquête"}
                    {lang === 'ar' && "مكتب الاستفسارات"}
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy mb-4">
                    {t.contact.title}
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                    {lang === 'en' && "Get in touch with us for quotes, procurement inquiries, or any questions about our supplies and services."}
                    {lang === 'sw' && "Wasiliana nasi kwa nukuu za bei, maswali ya ununuzi, au maswali yoyote kuhusu bidhaa na huduma zetu."}
                    {lang === 'fr' && "Contactez-nous pour des devis, des demandes d'approvisionnement ou toute question sur nos fournitures et services."}
                    {lang === 'ar' && "تواصل معنا للحصول على عروض الأسعار، أو استفسارات الشراء، أو أي أسئلة حول تجهيزاتنا وخدماتنا."}
                  </p>
                  <div className="w-16 h-1 bg-brand-teal mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl">
                  <h3 className="font-display font-bold text-2xl text-brand-navy mb-6 text-center">
                    {t.contact.formTitle}
                  </h3>

                  {isFormSubmitted ? (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-8 bg-brand-light rounded-2xl border border-brand-teal/20 text-center flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                      </div>
                      <h4 className="font-display font-bold text-xl text-brand-navy mb-2">
                        {t.contact.form.success}
                      </h4>
                      <p className="text-slate-600 text-sm mb-6">
                        {lang === 'en' && "We have received your message and will get back to you immediately."}
                        {lang === 'sw' && "Tumepokea ujumbe wako na tutawasiliana nawe mara moja."}
                        {lang === 'fr' && "Nous avons bien reçu votre message et reviendrons vers vous rapidement."}
                        {lang === 'ar' && "لقد تلقينا استفسارك وسنعاود الاتصال بك بأسرع وقت ممكن."}
                      </p>
                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 rounded-xl bg-brand-teal text-brand-navy font-bold text-sm hover:bg-brand-teal/90 transition-colors"
                      >
                        {lang === 'en' && "Send Another Message"}
                        {lang === 'sw' && "Tuma Ujumbe Mwingine"}
                        {lang === 'fr' && "Envoyer un autre message"}
                        {lang === 'ar' && "إرسال رسالة أخرى"}
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            {t.contact.form.name} *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all font-semibold"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            {t.contact.form.email} *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all font-semibold"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            {t.contact.form.phone} *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all font-semibold"
                          />
                        </div>

                        {/* Subject */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            {t.contact.form.subject} *
                          </label>
                          <input
                            type="text"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleFormChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all font-semibold"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          {t.contact.form.message} *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all resize-none font-semibold"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isFormSubmitting}
                        id="submit-enquiry-btn"
                        className="w-full py-4 rounded-xl bg-brand-teal text-white font-bold text-lg hover:bg-brand-teal/95 shadow-lg active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isFormSubmitting ? (
                          <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                        ) : (
                          <span>{t.contact.form.submit}</span>
                        )}
                      </button>
                    </form>
                  )}
                </div>

              </section>
            )}

            {/* NEW PAGE 9: FAQS */}
            {currentPage === 'faqs' && (
              <section id="page-faqs" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                  <span className="text-brand-amber font-bold text-xs uppercase tracking-widest mb-2 block font-mono">
                    {lang === 'en' && "Help Center"}
                    {lang === 'sw' && "Kituo cha Msaada"}
                    {lang === 'fr' && "Centre d'aide"}
                    {lang === 'ar' && "مركز المساعدة"}
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy mb-4">
                    {t.faqsPage.title}
                  </h2>
                  <div className="w-16 h-1 bg-brand-teal mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Collapsible Accordion Container */}
                <div className="space-y-4 mb-16" id="faqs-accordion">
                  {[
                    { id: 1, q: t.faqsPage.q1, a: t.faqsPage.a1 },
                    { id: 2, q: t.faqsPage.q2, a: t.faqsPage.a2 },
                    { id: 3, q: t.faqsPage.q3, a: t.faqsPage.a3 },
                    { id: 4, q: t.faqsPage.q4, a: t.faqsPage.a4 },
                    { id: 5, q: t.faqsPage.q5, a: t.faqsPage.a5 },
                    { id: 6, q: t.faqsPage.q6, a: t.faqsPage.a6 },
                    { id: 7, q: t.faqsPage.q7, a: t.faqsPage.a7 },
                    { id: 8, q: t.faqsPage.q8, a: t.faqsPage.a8 },
                  ].map((faq) => {
                    const isOpen = activeFaqId === faq.id;
                    return (
                      <div 
                        key={faq.id} 
                        id={`faq-item-${faq.id}`}
                        className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                          className="w-full text-start px-6 py-5 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                        >
                          <span className="font-display font-bold text-base sm:text-lg text-brand-navy">
                            {faq.q}
                          </span>
                          <span className={`w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-teal shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                            <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                          </span>
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-50 pt-2 font-medium">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Prominent Still Have Question Banner */}
                <div className="bg-brand-light rounded-3xl p-8 sm:p-10 border border-brand-teal/20 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-4">
                    <HelpCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-2">
                    {t.faqsPage.stillQuestion}
                  </h3>
                  <button
                    onClick={() => setIsFaqModalOpen(true)}
                    id="faq-contact-modal-btn"
                    className="mt-4 px-8 py-3.5 rounded-xl bg-brand-teal text-brand-navy font-bold text-base hover:bg-brand-teal/90 shadow-md hover:shadow-brand-teal/20 transition-all cursor-pointer"
                  >
                    {t.faqsPage.stillQuestionButton}
                  </button>
                </div>
              </section>
            )}

            {/* NEW PAGE 10: PRIVACY POLICY */}
            {currentPage === 'privacy' && (
              <section id="page-privacy" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-lg">
                  <div className="border-b border-slate-100 pb-6 mb-8 text-center sm:text-start">
                    <h2 className="font-display font-extrabold text-3xl text-brand-navy mb-2">
                      {t.privacyPage.title}
                    </h2>
                    <span className="text-xs font-mono text-slate-400 block mt-2">
                      {t.privacyPage.lastUpdated}
                    </span>
                  </div>

                  <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base font-medium">
                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.privacyPage.whoWeAreTitle}</h3>
                      <p>{t.privacyPage.whoWeAreText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.privacyPage.infoCollectTitle}</h3>
                      <p className="whitespace-pre-line">{t.privacyPage.infoCollectText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.privacyPage.infoUseTitle}</h3>
                      <p className="whitespace-pre-line">{t.privacyPage.infoUseText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.privacyPage.securityTitle}</h3>
                      <p>{t.privacyPage.securityText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.privacyPage.rightsTitle}</h3>
                      <p>{t.privacyPage.rightsText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.privacyPage.cookiesTitle}</h3>
                      <p>{t.privacyPage.cookiesText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.privacyPage.contactTitle}</h3>
                      <p>{t.privacyPage.contactText}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* NEW PAGE 11: TERMS OF SERVICE */}
            {currentPage === 'terms' && (
              <section id="page-terms" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-lg">
                  <div className="border-b border-slate-100 pb-6 mb-8 text-center sm:text-start">
                    <h2 className="font-display font-extrabold text-3xl text-brand-navy mb-2">
                      {t.termsPage.title}
                    </h2>
                    <span className="text-xs font-mono text-slate-400 block mt-2">
                      {t.termsPage.lastUpdated}
                    </span>
                  </div>

                  <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base font-medium">
                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.termsPage.acceptTitle}</h3>
                      <p>{t.termsPage.acceptText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.termsPage.useTitle}</h3>
                      <p>{t.termsPage.useText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.termsPage.productsTitle}</h3>
                      <p>{t.termsPage.productsText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.termsPage.quotesTitle}</h3>
                      <p>{t.termsPage.quotesText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.termsPage.intellectualTitle}</h3>
                      <p>{t.termsPage.intellectualText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.termsPage.liabilityTitle}</h3>
                      <p>{t.termsPage.liabilityText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.termsPage.lawTitle}</h3>
                      <p>{t.termsPage.lawText}</p>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-navy mb-3">{t.termsPage.contactTitle}</h3>
                      <p>{t.termsPage.contactText}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* CORE STANDARD COMPLIANT FOOTER */}
      <footer id="global-footer" className="bg-brand-teal text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
            
            {/* Column 1 — Company */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center text-white border border-white/10 shadow-sm">
                  <Truck className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-white tracking-wide text-sm leading-none">XAVICOM</span>
                  <span className="text-[8px] font-bold text-brand-amber tracking-widest uppercase mt-0.5 leading-none">LIMITED</span>
                </div>
              </div>
              <div className="space-y-1.5 mt-2 text-xs sm:text-sm text-white/90 font-semibold">
                <p>KRA PIN: <span className="font-mono text-white">P052060299C</span></p>
                <p>AGPO Registered: {lang === 'en' ? "Yes" : lang === 'sw' ? "Ndiyo" : lang === 'fr' ? "Oui" : "نعم"} | {t.contact.womanOwned}</p>
                <p>{t.contact.poBox}: 398 – 00507, Nairobi</p>
              </div>
            </div>

            {/* Column 2 — Contact */}
            <div className="flex flex-col gap-3">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">{t.footer.contactCol}</h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-white/90 font-bold">
                <a href="mailto:Xavicomlimited@gmail.com" className="flex items-center gap-2 hover:text-brand-amber transition-colors">
                  <Mail className="w-4 h-4 text-brand-amber" />
                  <span>Xavicomlimited@gmail.com</span>
                </a>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-brand-amber" />
                  <div className="flex flex-col">
                    <a href="tel:0702634855" className="hover:text-brand-amber transition-colors">0702634855</a>
                    <a href="tel:0711581764" className="hover:text-brand-amber transition-colors">0711581764</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 — Quick Links */}
            <div className="flex flex-col gap-3">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">{t.footer.quickLinksCol}</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm text-white/90 font-bold">
                <button onClick={() => showPage('home')} className="text-start hover:text-brand-amber transition-colors">{t.nav.home}</button>
                <button onClick={() => showPage('about')} className="text-start hover:text-brand-amber transition-colors">{t.nav.about}</button>
                <button onClick={() => showPage('supply')} className="text-start hover:text-brand-amber transition-colors">{t.nav.supply}</button>
                <button onClick={() => showPage('contact')} className="text-start hover:text-brand-amber transition-colors">{t.nav.contact}</button>
                <button onClick={() => showPage('faqs')} className="text-start hover:text-brand-amber transition-colors">{t.nav.faqs}</button>
                <button onClick={() => showPage('privacy')} className="text-start hover:text-brand-amber transition-colors">{t.nav.privacy}</button>
                <button onClick={() => showPage('terms')} className="text-start hover:text-brand-amber transition-colors">{t.nav.terms}</button>
              </div>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-xs font-semibold text-white/85 text-center sm:text-start">
              © 2025 Xavicom Limited. {t.footer.allRights}
            </span>

            {/* Inline Footer Language Swapping */}
            <div className="flex gap-4">
              {languagesList.map((language) => (
                <button
                  key={language.key}
                  onClick={() => {
                    setLang(language.key as LanguageKey);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-xs font-bold hover:text-brand-amber transition-colors ${
                    lang === language.key ? 'text-brand-amber underline underline-offset-4' : 'text-white/70'
                  }`}
                >
                  {language.native}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* COMPACT FLOATING COOKIE CONSENT BANNER */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            id="cookie-consent-banner"
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-white rounded-2xl border border-slate-100 shadow-2xl p-6 z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍪</span>
                <h4 className="font-display font-bold text-lg text-brand-navy">
                  {t.cookies.title}
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                {t.cookies.text}
              </p>

              {/* Preferences Configuration Drawer */}
              {isManagingCookies && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pt-2 border-t border-slate-100 space-y-3"
                >
                  <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-xs font-bold text-slate-700">{t.cookies.essentialTitle}</span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 bg-slate-200 px-1.5 py-0.5 rounded">
                      {t.cookies.essentialLabel}
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-xs font-bold text-slate-700">{t.cookies.analyticsTitle}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={analyticsConsent} 
                        onChange={(e) => setAnalyticsConsent(e.target.checked)} 
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-teal"></div>
                    </label>
                  </div>
                </motion.div>
              )}

              {/* Cookie Banner Controls */}
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                {isManagingCookies ? (
                  <button
                    onClick={handleSaveCookiePreferences}
                    className="w-full py-2.5 rounded-xl bg-brand-teal text-brand-navy font-bold text-xs hover:bg-brand-teal/90 transition-colors cursor-pointer"
                  >
                    {t.cookies.save}
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleAcceptAllCookies}
                      className="w-full py-2.5 rounded-xl bg-brand-teal text-brand-navy font-bold text-xs hover:bg-brand-teal/90 transition-colors cursor-pointer"
                    >
                      {t.cookies.acceptAll}
                    </button>
                    <button
                      onClick={() => setIsManagingCookies(true)}
                      className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      {t.cookies.manage}
                    </button>
                    <button
                      onClick={handleDeclineCookies}
                      className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-500 font-bold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      {t.cookies.decline}
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GORGEOUS POPUP MODAL FOR FAQS "Still have a question? Contact Us" */}
      <AnimatePresence>
        {isFaqModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop with elegant blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFaqModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden flex flex-col items-center text-center z-10"
            >
              {/* Top Accent Icon */}
              <div className="w-14 h-14 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6">
                <Mail className="w-7 h-7" />
              </div>

              {/* Title & Body */}
              <h3 className="font-display font-extrabold text-2xl text-brand-navy mb-3">
                {t.faqsPage.getInTouch}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                {t.faqsPage.emailDescription}
              </p>

              {/* Interaction Buttons */}
              <div className="flex flex-col gap-3 w-full">
                <a
                  href="mailto:Xavicomlimited@gmail.com?subject=Procurement%20/%20Supply%20Query"
                  className="w-full py-3.5 rounded-xl bg-brand-teal text-brand-navy font-bold text-base hover:bg-brand-teal/90 shadow-md hover:shadow-brand-teal/15 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                  <span>{t.faqsPage.emailUs}</span>
                </a>
                
                <button
                  onClick={() => setIsFaqModalOpen(false)}
                  className="w-full py-3 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 font-bold text-sm transition-colors cursor-pointer"
                >
                  {t.faqsPage.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
