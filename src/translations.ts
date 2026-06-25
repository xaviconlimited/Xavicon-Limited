export interface TranslationSet {
  nav: {
    home: string;
    about: string;
    mission: string;
    philosophy: string;
    supply: string;
    whyUs: string;
    clients: string;
    contact: string;
    faqs: string;
    privacy: string;
    terms: string;
  };
  hero: {
    title: string;
    tagline: string;
    description: string;
    ctaSupply: string;
    ctaContact: string;
  };
  pillars: {
    suppliesTitle: string;
    suppliesDesc: string;
    procurementTitle: string;
    procurementDesc: string;
    logisticsTitle: string;
    logisticsDesc: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  missionVision: {
    title: string;
    missionTitle: string;
    missionText: string;
    valuesTitle: string;
    integrity: string;
    reliability: string;
    efficiency: string;
    qualityAssurance: string;
    customerFocus: string;
    professionalism: string;
  };
  philosophy: {
    title: string;
    text: string;
  };
  supply: {
    title: string;
    intro: string;
    categories: {
      stationery: {
        title: string;
        bullets: string[];
      };
      ict: {
        title: string;
        bullets: string[];
      };
      cleaning: {
        title: string;
        bullets: string[];
      };
      kitchen: {
        title: string;
        bullets: string[];
      };
      furniture: {
        title: string;
        bullets: string[];
      };
      ppe: {
        title: string;
        bullets: string[];
      };
      branded: {
        title: string;
        bullets: string[];
      };
      electrical: {
        title: string;
        bullets: string[];
      };
      uniforms: {
        title: string;
        bullets: string[];
      };
    };
  };
  whyChooseUs: {
    title: string;
    bullets: string[];
    commitmentTitle: string;
    commitmentText: string;
  };
  clients: {
    title: string;
    intro: string;
    types: {
      govt: string;
      ngos: string;
      schools: string;
      hospitals: string;
      corporate: string;
      smes: string;
    };
  };
  contact: {
    title: string;
    detailsTitle: string;
    formTitle: string;
    companyName: string;
    kraPin: string;
    agpo: string;
    ownership: string;
    poBox: string;
    location: string;
    email: string;
    phone: string;
    yes: string;
    womanOwned: string;
    form: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      submit: string;
      success: string;
    };
  };
  footer: {
    allRights: string;
    companyCol: string;
    contactCol: string;
    quickLinksCol: string;
  };
  faqsPage: {
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
    q7: string;
    a7: string;
    q8: string;
    a8: string;
    stillQuestion: string;
    stillQuestionButton: string;
    getInTouch: string;
    emailDescription: string;
    emailUs: string;
    close: string;
  };
  privacyPage: {
    title: string;
    lastUpdated: string;
    whoWeAreTitle: string;
    whoWeAreText: string;
    infoCollectTitle: string;
    infoCollectText: string;
    infoUseTitle: string;
    infoUseText: string;
    securityTitle: string;
    securityText: string;
    rightsTitle: string;
    rightsText: string;
    cookiesTitle: string;
    cookiesText: string;
    contactTitle: string;
    contactText: string;
  };
  termsPage: {
    title: string;
    lastUpdated: string;
    acceptTitle: string;
    acceptText: string;
    useTitle: string;
    useText: string;
    productsTitle: string;
    productsText: string;
    quotesTitle: string;
    quotesText: string;
    intellectualTitle: string;
    intellectualText: string;
    liabilityTitle: string;
    liabilityText: string;
    lawTitle: string;
    lawText: string;
    contactTitle: string;
    contactText: string;
  };
  cookies: {
    title: string;
    text: string;
    acceptAll: string;
    manage: string;
    decline: string;
    essentialTitle: string;
    essentialLabel: string;
    analyticsTitle: string;
    save: string;
  };
}

export const translations: Record<string, TranslationSet> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      mission: "Mission & Vision",
      philosophy: "Our Philosophy",
      supply: "What We Supply",
      whyUs: "Why Choose Us",
      clients: "Our Clients",
      contact: "Contact Us",
      faqs: "FAQs",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    hero: {
      title: "Xavicom Limited",
      tagline: "General Supplies | Procurement | Logistics",
      description: "Delivering high-quality products and reliable supply solutions to corporates, NGOs, government institutions, schools, hospitals, and private organizations.",
      ctaSupply: "What We Supply",
      ctaContact: "Contact Us",
    },
    pillars: {
      suppliesTitle: "General Supplies",
      suppliesDesc: "Reliable sourcing of high-quality products across multiple categories.",
      procurementTitle: "Procurement",
      procurementDesc: "Cost-effective and structured acquisition tailored to your exact specifications.",
      logisticsTitle: "Logistics",
      logisticsDesc: "Safe, timely, and organized transportation and delivery across sectors.",
    },
    about: {
      title: "About Us",
      p1: "Xavicom Ltd is a fully registered, general supplies and procurement company committed to delivering high-quality products and reliable supply solutions to corporates, NGOs, government institutions, schools, hospitals, and private organizations.",
      p2: "We specialise in efficient sourcing, timely delivery, and cost-effective procurement across a wide range of products and categories, ensuring our clients receive the right goods, at the right time, at the right price.",
      p3: "Our strength lies in strong supplier networks, professional execution, and a deep understanding of procurement needs across diverse sectors.",
    },
    missionVision: {
      title: "Mission, Vision & Core Values",
      missionTitle: "Mission & Vision Statement",
      missionText: "To be a leading and trusted general supplies partner known for reliability, integrity, and excellence in service delivery. To provide quality products and seamless supply solutions through efficient procurement systems, strategic sourcing, and exceptional customer service.",
      valuesTitle: "Our Core Values",
      integrity: "Integrity",
      reliability: "Reliability",
      efficiency: "Efficiency",
      qualityAssurance: "Quality Assurance",
      customerFocus: "Customer Focus",
      professionalism: "Professionalism",
    },
    philosophy: {
      title: "Our Philosophy",
      text: "At the foundation of our company is a commitment to reliability, professionalism, and operational excellence. We believe that effective supply goes beyond the delivery of goods; it is about consistency, accountability, and building long-term partnerships. Through structured processes, quality sourcing, and timely execution, we support our clients' operations with solutions that enhance efficiency, reduce risk, and contribute to sustainable growth.",
    },
    supply: {
      title: "What We Supply",
      intro: "We provide high-quality and dependable supply services across the following primary categories:",
      categories: {
        stationery: {
          title: "Office Stationery & Supplies",
          bullets: [
            "Printing papers, files, toners, cartridges",
            "Pens, notebooks, diaries, staplers",
            "Office consumables and accessories",
          ],
        },
        ict: {
          title: "ICT & Electronics",
          bullets: [
            "Laptops, desktops, printers, networking equipment",
            "UPS, extension cables, accessories",
          ],
        },
        cleaning: {
          title: "Cleaning & Janitorial Supplies",
          bullets: [
            "Detergents, disinfectants, mops, brooms",
            "Tissue papers, hand wash, sanitizers",
            "Cleaning equipment and tools",
          ],
        },
        kitchen: {
          title: "Kitchen & Catering Supplies",
          bullets: [
            "Cutlery, crockery, flasks",
            "Catering equipment and consumables",
          ],
        },
        furniture: {
          title: "Furniture & Fixtures",
          bullets: [
            "Office desks, chairs, cabinets",
            "Shelves, partitions, fittings",
          ],
        },
        ppe: {
          title: "PPE & Safety Equipment",
          bullets: [
            "Gloves, helmets, reflective jackets",
            "First aid kits, safety boots",
          ],
        },
        branded: {
          title: "Branded Merchandise & Printing",
          bullets: [
            "Branded T-shirts, caps, banners",
            "Corporate gifts, branding materials",
          ],
        },
        electrical: {
          title: "Electrical & Hardware Supplies",
          bullets: [
            "Bulbs, cables, switches",
            "Plumbing and hardware materials",
          ],
        },
        uniforms: {
          title: "Uniforms & Protective Wear",
          bullets: [
            "School uniforms",
            "Corporate uniforms",
            "Security uniforms",
            "Hospital scrubs and lab coats",
            "Branded work wear",
            "Reflective jackets and safety apparel",
            "Custom branded uniforms",
          ],
        },
      },
    },
    whyChooseUs: {
      title: "Why Choose Us",
      bullets: [
        "Woman-owned and diversity compliant (ideal for AGPO and special category tenders)",
        "Strong supplier and manufacturer network",
        "Competitive pricing through strategic sourcing",
        "Fast turnaround time",
        "Strict quality control",
        "Professional communication and documentation",
        "Flexible to client needs and specifications",
      ],
      commitmentTitle: "Our Commitment",
      commitmentText: "We are committed to delivering excellence, building long-term partnerships, and ensuring customer satisfaction through dependable service and high-quality supplies.",
    },
    clients: {
      title: "Our Clients",
      intro: "We serve a diverse range of clients across sectors.",
      types: {
        govt: "Government institutions",
        ngos: "NGOs and international organizations",
        schools: "Schools and universities",
        hospitals: "Hospitals and clinics",
        corporate: "Corporate organizations",
        smes: "SMEs (Small and Medium Enterprises)",
      },
    },
    contact: {
      title: "Contact Us",
      detailsTitle: "Company Details",
      formTitle: "Send an Enquiry",
      companyName: "Registered Company Name",
      kraPin: "KRA PIN",
      agpo: "AGPO Registered",
      ownership: "Ownership",
      poBox: "P.O. Box",
      location: "Location",
      email: "Email",
      phone: "Phone",
      yes: "Yes",
      womanOwned: "70% Woman-Owned",
      form: {
        name: "Your Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Message",
        submit: "Submit Enquiry",
        success: "Thank you! We'll be in touch shortly.",
      },
    },
    footer: {
      allRights: "All rights reserved.",
      companyCol: "Company",
      contactCol: "Contact",
      quickLinksCol: "Quick Links"
    },
    faqsPage: {
      title: "Frequently Asked Questions",
      q1: "What types of organisations do you supply to?",
      a1: "We supply to a wide range of clients including government institutions, NGOs, international organisations, schools, universities, hospitals, clinics, corporate organisations, and SMEs.",
      q2: "Do you handle large or bulk orders?",
      a2: "Yes. We are equipped to handle both small and large procurement orders. Contact us with your requirements and we will provide a tailored quotation.",
      q3: "How do I request a quote?",
      a3: "You can request a quote by sending us an email at Xavicomlimited@gmail.com or by calling 0702634855 / 0711581764. You can also use the contact form on our Contact Us page.",
      q4: "Are you registered for government tenders?",
      a4: "Yes. Xavicom Limited is AGPO registered and is 70% woman-owned, making us eligible for special category tenders and government procurement frameworks.",
      q5: "What areas do you deliver to?",
      a5: "We deliver across Nairobi and can arrange logistics for deliveries to other regions based on order requirements.",
      q6: "What payment terms do you offer?",
      a6: "Payment terms are discussed on a per-order basis. We accommodate various arrangements including LPO-based procurement for institutional clients.",
      q7: "How long does delivery take?",
      a7: "Delivery timelines depend on the nature and size of the order. We prioritise fast turnaround times and will communicate estimated delivery dates at the time of order confirmation.",
      q8: "Can you source items not listed on your catalogue?",
      a8: "Yes. Through our supplier network we can source a wide variety of products beyond our standard categories. Contact us with your specific requirements.",
      stillQuestion: "Still have a question?",
      stillQuestionButton: "Contact Us",
      getInTouch: "Get in Touch",
      emailDescription: "Click below to send us an email directly and we'll get back to you as soon as possible.",
      emailUs: "Email Us",
      close: "Close"
    },
    privacyPage: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: June 2025",
      whoWeAreTitle: "1. Who We Are",
      whoWeAreText: "Xavicom Limited is a registered general supplies, procurement, and logistics company based in Nairobi, Kenya. Our contact email is Xavicomlimited@gmail.com.",
      infoCollectTitle: "2. Information We Collect",
      infoCollectText: "When you use this website or contact us, we may collect the following:\n\n• Your name, email address, and phone number (when submitted via our contact form)\n• The subject and content of messages you send us\n• Basic website usage data such as pages visited (if analytics are enabled in future)",
      infoUseTitle: "3. How We Use Your Information",
      infoUseText: "We use the information you provide to:\n\n• Respond to your enquiries and procurement requests\n• Prepare and send quotations or proposals\n• Communicate updates relevant to your orders or requests\n• Improve our services based on client feedback\n\nWe do not sell, rent, or share your personal information with third parties for marketing purposes.",
      securityTitle: "4. Data Storage and Security",
      securityText: "Your information is handled with care and stored securely. We retain your contact details only for as long as necessary to fulfil your request or as required by Kenyan law.",
      rightsTitle: "5. Your Rights",
      rightsText: "You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at Xavicomlimited@gmail.com.",
      cookiesTitle: "6. Cookies",
      cookiesText: "This website uses a cookie consent mechanism. You may accept or decline non-essential cookies. Strictly necessary cookies (required for the site to function) are always active.",
      contactTitle: "7. Contact",
      contactText: "For any privacy-related concerns, email us at Xavicomlimited@gmail.com or call 0702634855."
    },
    termsPage: {
      title: "Terms of Service",
      lastUpdated: "Last updated: June 2025",
      acceptTitle: "1. Acceptance of Terms",
      acceptText: "By accessing and using the Xavicom Limited website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site.",
      useTitle: "2. Use of This Website",
      useText: "This website is provided for informational purposes and to facilitate communication with Xavicom Limited. You agree not to misuse this site or submit false information through our contact form.",
      productsTitle: "3. Products and Services",
      productsText: "All product listings, categories, and descriptions on this website represent our general supply capabilities. Specific availability, pricing, and delivery timelines are confirmed on a per-order basis.",
      quotesTitle: "4. Quotations and Orders",
      quotesText: "Submitting an enquiry through this website does not constitute a binding order. Orders are formalised through official documentation such as Local Purchase Orders (LPOs) or written agreements.",
      intellectualTitle: "5. Intellectual Property",
      intellectualText: "All content on this website — including text, design, and branding — is the property of Xavicom Limited and may not be reproduced without written permission.",
      liabilityTitle: "6. Limitation of Liability",
      liabilityText: "Xavicom Limited is not liable for any indirect or consequential losses arising from use of this website or reliance on information contained herein.",
      lawTitle: "7. Governing Law",
      lawText: "These terms are governed by the laws of the Republic of Kenya.",
      contactTitle: "8. Contact",
      contactText: "For questions about these terms, contact us at Xavicomlimited@gmail.com or call 0702634855."
    },
    cookies: {
      title: "We use cookies 🍪",
      text: "We use cookies to improve your experience on our website. You can choose to accept all cookies, or customise your preferences. See our Privacy Policy for details.",
      acceptAll: "Accept All",
      manage: "Manage Preferences",
      decline: "Decline",
      essentialTitle: "Essential Cookies",
      essentialLabel: "Required",
      analyticsTitle: "Analytics Cookies",
      save: "Save Preferences"
    }
  },
  sw: {
    nav: {
      home: "Nyumbani",
      about: "Kutuhusu",
      mission: "Dhamira na Maono",
      philosophy: "Falsafa Yetu",
      supply: "Tunachousambaza",
      whyUs: "Kwa Nini Utuchague",
      clients: "Wateja Wetu",
      contact: "Wasiliana Nasi",
      faqs: "Maswali Yanayoulizwa Sana",
      privacy: "Sera ya Faragha",
      terms: "Masharti ya Huduma"
    },
    hero: {
      title: "Xavicom Limited",
      tagline: "Ugavi Mkuu | Ununuzi | Logistiki",
      description: "Kutoa bidhaa zenye ubora wa juu na suluhisho za kuaminika za ugavi kwa mashirika, NGOs, taasisi za serikali, shule, hospitali na mashirika ya kibinafsi.",
      ctaSupply: "Tunachousambaza",
      ctaContact: "Wasiliana Nasi",
    },
    pillars: {
      suppliesTitle: "Ugavi Mkuu",
      suppliesDesc: "Utafutaji wa kuaminika wa bidhaa za ubora wa juu katika kategoria mbalimbali.",
      procurementTitle: "Ununuzi",
      procurementDesc: "Ununuzi wa gharama nafuu na uliopangwa uliowekwa kulingana na vipimo vyako hasa.",
      logisticsTitle: "Logistiki",
      logisticsDesc: "Usafirishaji na utoaji salama, wa wakati na uliopangwa katika sekta mbalimbali.",
    },
    about: {
      title: "Kutuhusu",
      p1: "Xavicom Ltd ni kampuni iliyosajiliwa kikamilifu ya ugavi mkuu na ununuzi iliyojitolea kutoa bidhaa zenye ubora wa juu na suluhisho za kuaminika za ugavi kwa mashirika, NGOs, taasisi za serikali, shule, hospitali na mashirika ya kibinafsi.",
      p2: "Sisi ni wataalamu wa kutafuta bidhaa kwa ufanisi, utoaji wa wakati unaofaa, na ununuzi wa gharama nafuu katika anuwai ya bidhaa na kategoria, tukihakikisha wateja wetu wanapokea bidhaa sahihi, kwa wakati sahihi, kwa bei sahihi.",
      p3: "Nguvu yetu ipo kwenye mitandao thabiti ya wasambazaji, utekelezaji wa kitaalamu, na uelewa wa kina wa mahitaji ya ununuzi katika sekta mbalimbali.",
    },
    missionVision: {
      title: "Dhamira, Maono na Maadili Yetu",
      missionTitle: "Taarifa ya Dhamira na Maono",
      missionText: "Kuwa mshirika anayeongoza na wa kuaminika wa ugavi mkuu anayejulikana kwa uaminifu, uadilifu, na ubora katika utoaji wa huduma. Kutoa bidhaa zenye ubora na suluhisho zisizo na kikomo za ugavi kupitia mifumo bora ya ununuzi, utafutaji wa kimkakati, na huduma ya kipekee kwa wateja.",
      valuesTitle: "Maadili Yetu ya Msingi",
      integrity: "Uadilifu",
      reliability: "Uaminifu",
      efficiency: "Ufanisi",
      qualityAssurance: "Uhakikisho wa Ubora",
      customerFocus: "Kumlenga Mteja",
      professionalism: "Utaalamu",
    },
    philosophy: {
      title: "Falsafa Yetu",
      text: "Kwenye msingi wa kampuni yetu ni ahadi ya uaminifu, utaalamu, na ubora wa utendaji. Tunaamini kwamba ugavi madhubuti unaenda mbali zaidi ya utoaji wa bidhaa tu; ni kuhusu uthabiti, uwajibikaji, na kujenga ushirikiano wa muda mrefu. Kupitia taratibu zilizopangwa, utafutaji wa bidhaa zenye ubora, na utekelezaji wa wakati unaofaa, tunasaidia shughuli za wateja wetu na suluhisho zinazoongeza ufanisi, kupunguza hatari, na kuchangia ukuaji endelevu.",
    },
    supply: {
      title: "Tunachousambaza",
      intro: "Tunatoa huduma za ugavi zenye ubora wa juu na za kuaminika katika kategoria kuu zifuatazo:",
      categories: {
        stationery: {
          title: "Vifaa vya Ofisini na Ugavi",
          bullets: [
            "Karatasi za kuchapa, faili, wino wa printa (toners/cartridges)",
            "Kalamu, madaftari, shajara (diaries), mashine za kubana karatasi (staplers)",
            "Bidhaa za matumizi ya ofisi na vifaa vyake",
          ],
        },
        ict: {
          title: "TEHAMA na Vifaa vya Kielektroniki",
          bullets: [
            "Kompyuta mpakato (laptops), kompyuta za mezani, printa, na vifaa vya mtandao",
            "Mifumo ya umeme wa dharura (UPS), nyaya za kuongeza urefu, na vifaa vyake",
          ],
        },
        cleaning: {
          title: "Vifaa vya Usafi na Udumishaji",
          bullets: [
            "Sabuni, dawa za kuua vijidudu, deki za kusafisha, mifagio",
            "Karatasi za chooni, sabuni ya kunawa mikono, vitakasa mikono",
            "Vifaa na zana za kufanyia usafi",
          ],
        },
        kitchen: {
          title: "Vifaa vya Jikoni na Upishi",
          bullets: [
            "Uma na visu, vyombo vya udongo, vyupa vya chai (flasks)",
            "Vifaa vya upishi and bidhaa za matumizi za jikoni",
          ],
        },
        furniture: {
          title: "Samani na Vifaa vya Ndani",
          bullets: [
            "Meza za ofisi, viti, makabati",
            "Racks za kuwekea vitu, kuta za kupasua ofisi (partitions), na fittings",
          ],
        },
        ppe: {
          title: "Vifaa vya Kujilinda (PPE) na Usalama",
          bullets: [
            "Glavu, kofia ngumu (helmets), koti za kuakisi mwanga",
            "Sanduku la huduma ya kwanza, viatu vya usalama (safety boots)",
          ],
        },
        branded: {
          title: "Bidhaa Chapa na Chapa",
          bullets: [
            "Fulana (T-shirts), kofia, na mabango yenye chapa ya kampuni",
            "Zawadi za shirika, na vifaa vya kukuza chapa",
          ],
        },
        electrical: {
          title: "Vifaa vya Umeme na Ushonaji/Ujenzi",
          bullets: [
            "Taa za umeme, nyaya, swichi",
            "Mabomba na vifaa vya ujenzi (hardware)",
          ],
        },
        uniforms: {
          title: "Sare na Mavazi ya Kinga",
          bullets: [
            "Sare za shule",
            "Sare za kampuni",
            "Sare za usalama",
            "Mavazi ya kliniki (scrubs) na koti za maabara",
            "Mavazi ya kazini yenye chapa",
            "Koti za kuakisi mwanga na mavazi ya usalama",
            "Sare zilizoundwa maalum na chapa",
          ],
        },
      },
    },
    whyChooseUs: {
      title: "Kwa Nini Utuchague",
      bullets: [
        "Inamilikiwa na mwanamke na inakidhi vigezo vya usawa (inafaa kwa zabuni za AGPO na makundi maalum)",
        "Mtandao thabiti wa wasambazaji na watengenezaji",
        "Bei za ushindani kupitia utafutaji wa kimkakati wa bidhaa",
        "Muda wa haraka wa kukamilisha kazi",
        "Udhibiti mkali wa ubora",
        "Mawasiliano na nyaraka za kitaalamu",
        "Unyumbulifu kulingana na mahitaji na vipimo vya mteja",
      ],
      commitmentTitle: "Ahadi Yetu",
      commitmentText: "Tumejitolea kutoa ubora wa hali ya juu, kujenga ushirikiano wa muda mrefu, na kuhakikisha kuridhika kwa wateja kupitia huduma ya kuaminika na ugavi wa hali ya juu.",
    },
    clients: {
      title: "Wateja Wetu",
      intro: "Tunahudumia wateja wa anuwai tofauti katika sekta mbalimbali.",
      types: {
        govt: "Taasisi za serikali",
        ngos: "Mashirika yasiyo ya kiserikali (NGOs) na mashirika ya kimataifa",
        schools: "Shule na vyuo vikuu",
        hospitals: "Hospitali na zahanati",
        corporate: "Mashirika ya makampuni",
        smes: "SMEs (Biashara Ndogo na za Kati)",
      },
    },
    contact: {
      title: "Wasiliana Nasi",
      detailsTitle: "Maelezo ya Kampuni",
      formTitle: "Tuma Swali",
      companyName: "Jina la Kampuni Lililosajiliwa",
      kraPin: "KRA PIN",
      agpo: "Imesajiliwa na AGPO",
      ownership: "Umiliki",
      poBox: "S.L.P",
      location: "Eneo",
      email: "Barua Pepe",
      phone: "Simu",
      yes: "Ndiyo",
      womanOwned: "70% Inamilikiwa na Mwanamke",
      form: {
        name: "Jina Lako",
        email: "Anwani ya Barua Pepe",
        phone: "Nambari ya Simu",
        subject: "Mada",
        message: "Ujumbe",
        submit: "Tuma Swali",
        success: "Asante! Tutawasiliana nawe hivi karibuni.",
      },
    },
    footer: {
      allRights: "Haki zote zimehifadhiwa.",
      companyCol: "Kampuni",
      contactCol: "Mawasiliano",
      quickLinksCol: "Viungo vya Haraka"
    },
    faqsPage: {
      title: "Maswali Yanayoulizwa Sana",
      q1: "Ni aina gani ya mashirika mnayoyasajili na kuyasupply?",
      a1: "Tunatengeneza na kusambaza kwa wateja mbalimbali wakiwemo taasisi za serikali, NGOs, mashirika ya kimataifa, shule, vyuo vikuu, hospitali, kliniki, mashirika ya makampuni, na SMEs.",
      q2: "Je, mnashughulikia maagizo makubwa au ya jumla?",
      a2: "Ndiyo. Tumejipanga kushughulikia maagizo madogo na makubwa ya ununuzi. Wasiliana nasi na mahitaji yako na tutakupa nukuu iliyoundwa mahususi.",
      q3: "Ninawezaje kuomba nukuu ya bei (quote)?",
      a3: "Unaweza kuomba nukuu kwa kututumia barua pepe kwa Xavicomlimited@gmail.com au kwa kupiga simu 0702634855 / 0711581764. Unaweza pia kutumia fomu ya mawasiliano kwenye ukurasa wetu wa Wasiliana Nasi.",
      q4: "Je, mmesajiliwa kwa ajili ya zabuni za serikali?",
      a4: "Ndiyo. Xavicom Limited imesajiliwa na AGPO na inamilikiwa na mwanamke kwa 70%, jambo linalotufanya tustahili zabuni za kundi maalum na mifumo ya ununuzi ya serikali.",
      q5: "Mnasambaza katika maeneo gani?",
      a5: "Tunasambaza kote Nairobi na tunaweza kupanga usafirishaji kwa ajili ya usambazaji katika mikoa mingine kulingana na mahitaji ya agizo.",
      q6: "Mnapeana masharti gani ya malipo?",
      a6: "Masharti ya malipo yanajadiliwa kwa kila agizo. Tunakubali mipangilio mbalimbali ikiwa ni pamoja na ununuzi unaotegemea LPO kwa wateja wa taasisi.",
      q7: "Uwasilishaji huchukua muda gani?",
      a7: "Muda wa uwasilishaji unategemea aina na ukubwa wa agizo. Tunapa kipaumbele muda wa haraka wa kukamilisha na tutawasiliana makadirio ya tarehe za uwasilishaji wakati wa kuthibitisha agizo.",
      q8: "Je, mnaweza kutafuta bidhaa ambazo hazipo kwenye katalogi yenu?",
      a8: "Ndiyo. Kupitia mtandao wetu wa wasambazaji, tunaweza kutafuta bidhaa mbalimbali zaidi ya kategoria zetu za kawaida. Wasiliana nasi na mahitaji yako maalum.",
      stillQuestion: "Je, bado una swali?",
      stillQuestionButton: "Wasiliana Nasi",
      getInTouch: "Wasiliana Nasi",
      emailDescription: "Bofya hapa chini ili kututumia barua pepe moja kwa moja na tutakujibu haraka iwezekanavyo.",
      emailUs: "Tutumie Barua Pepe",
      close: "Funga"
    },
    privacyPage: {
      title: "Sera ya Faragha",
      lastUpdated: "Ilisasishwa mwisho: Juni 2025",
      whoWeAreTitle: "1. Sisi ni Nani",
      whoWeAreText: "Xavicom Limited ni kampuni iliyosajiliwa ya ugavi mkuu, ununuzi, na logistiki iliyoko Nairobi, Kenya. Barua pepe yetu ya mawasiliano ni Xavicomlimited@gmail.com.",
      infoCollectTitle: "2. Taarifa Tunazokusanya",
      infoCollectText: "Unapotumia tovuti hii au kuwasiliana nasi, tunaweza kukusanya yafuatayo:\n\n• Jina lako, anwani ya barua pepe, na nambari ya simu (zinapowasilishwa kupitia fomu yetu ya mawasiliano)\n• Mada na maudhui ya ujumbe unaotutumia\n• Data ya msingi ya matumizi ya tovuti kama vile kurasa zilizotembelewa (ikiwa uchanganuzi utawezeshwa katika siku zijazo)",
      infoUseTitle: "3. Jinsi Tunavyotumia Taarifa Zako",
      infoUseText: "Tunatumia taarifa unazotoa ili:\n\n• Kujibu maswali yako na maombi ya ununuzi\n• Kuandaa na kutuma nukuu za bei au mapendekezo\n• Kuwasiliana kuhusu mabadiliko yanayohusiana na maagizo au maombi yako\n• Kuboresha huduma zetu kulingana na maoni ya wateja\n\nHatuuzi, hatukodishi, wala kushiriki habari zako za kibinafsi na wahusika wengine kwa madhumuni ya masoko.",
      securityTitle: "4. Uhifadhi wa Data na Usalama",
      securityText: "Taarifa zako zinashughulikiwa kwa uangalifu na kuhifadhiwa kwa usalama. Tunahifadhi maelezo yako ya mawasiliano kwa muda mrefu kama inavyohitajika ili kutimiza ombi lako au kama inavyotakiwa na sheria ya Kenya.",
      rightsTitle: "5. Haki Zako",
      rightsText: "Una haki ya kuomba ufikiaji wa, marekebisho ya, au kufutwa kwa data yoyote ya kibinafsi tuliyonayo kukuhusu. Ili kutumia haki hizi, wasiliana nasi kwa Xavicomlimited@gmail.com.",
      cookiesTitle: "6. Kuki (Cookies)",
      cookiesText: "Tovuti hii inatumia mfumo wa idhini ya kuki. Unaweza kukubali au kukataa kuki zisizo za lazima. Kuki za lazima kabisa (zinazohitajika ili tovuti ifanye kazi) huwa amilifu kila wakati.",
      contactTitle: "7. Mawasiliano",
      contactText: "Kwa masuala yoyote yanayohusiana na faragha, tutumie barua pepe kwa Xavicomlimited@gmail.com au piga simu 0702634855."
    },
    termsPage: {
      title: "Masharti ya Huduma",
      lastUpdated: "Ilisasishwa mwisho: Juni 2025",
      acceptTitle: "1. Kukubali Masharti",
      acceptText: "Kwa kufikia na kutumia tovuti ya Xavicom Limited, unakubali kubanwa na Masharti haya ya Huduma. Ikiwa hukubaliani nayo, tafadhali usitumie tovuti hii.",
      useTitle: "2. Matumizi ya Tovuti Hii",
      useText: "Tovuti hii imetolewa kwa madhumuni ya habari na kuwezesha mawasiliano na Xavicom Limited. Unakubali kutotumia vibaya tovuti hii au kuwasilisha habari za uongo kupitia fomu yetu ya mawasiliano.",
      productsTitle: "3. Bidhaa na Huduma",
      productsText: "Orodha zote za bidhaa, kategoria, na maelezo kwenye tovuti hii yanawakilisha uwezo wetu mkuu wa ugavi. Upatikanaji maalum, bei, na muda wa uwasilishaji unathibitishwa kwa msingi wa kila agizo.",
      quotesTitle: "4. Nukuu za Bei na Maagizo",
      quotesText: "Kuwasilisha swali au ombi kupitia tovuti hii haijumuishi agizo linalofunga. Maagizo yanafanywa rasmi kupitia nyaraka rasmi kama vile LPOs (Local Purchase Orders) au makubaliano ya maandishi.",
      intellectualTitle: "5. Mali Miliki",
      intellectualText: "Maudhui yote kwenye tovuti hii — ikijumuisha maandishi, muundo, na chapa — ni mali ya Xavicom Limited na haiwezi kuzalishwa tena bila ruhusa ya maandishi.",
      liabilityTitle: "6. Ukomo wa Dhima",
      liabilityText: "Xavicom Limited haiwajibiki kwa hasara yoyote ya kiindirekta au ya matokeo yanayotokana na matumizi ya tovuti hii au kutegemea taarifa zilizomo humu.",
      lawTitle: "7. Sheria Inayoongoza",
      lawText: "Masharti haya yanaongozwa na sheria za Jamhuri ya Kenya.",
      contactTitle: "8. Mawasiliano",
      contactText: "Kwa maswali yoyote kuhusu masharti haya, wasiliana nasi kwa Xavicomlimited@gmail.com au piga simu 0702634855."
    },
    cookies: {
      title: "Tunatumia kuki 🍪",
      text: "Tunatumia kuki ili kuboresha uzoefu wako kwenye tovuti yetu. Unaweza kuchagua kukubali kuki zote, au kuboresha mapendeleo yako. Tazama Sera yetu ya Faragha kwa maelezo.",
      acceptAll: "Kukubali Zote",
      manage: "Dhibiti Mapendeleo",
      decline: "Kataa",
      essentialTitle: "Kuki za Lazima",
      essentialLabel: "Inahitajika",
      analyticsTitle: "Kuki za Uchanganuzi",
      save: "Hifadhi Mapendeleo"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      mission: "Mission & Vision",
      philosophy: "Notre Philosophie",
      supply: "Ce Que Nous Fournissons",
      whyUs: "Pourquoi Nous Choisir",
      clients: "Nos Clients",
      contact: "Contactez-nous",
      faqs: "FAQ",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation"
    },
    hero: {
      title: "Xavicom Limited",
      tagline: "Fournitures Générales | Approvisionnement | Logistique",
      description: "Fournir des produits de haute qualité et des solutions d'approvisionnement fiables aux entreprises, ONG, institutions gouvernementales, écoles, hôpitaux et organisations privées.",
      ctaSupply: "Ce Que Nous Fournissons",
      ctaContact: "Contactez-nous",
    },
    pillars: {
      suppliesTitle: "Fournitures Générales",
      suppliesDesc: "Sourcing fiable de produits de haute qualité dans plusieurs catégories.",
      procurementTitle: "Approvisionnement",
      procurementDesc: "Acquisitions rentables et structurées adaptées à vos spécifications exactes.",
      logisticsTitle: "Logistique",
      logisticsDesc: "Transport et livraison sécurisés, rapides et organisés dans tous les secteurs.",
    },
    about: {
      title: "À Propos",
      p1: "Xavicom Ltd est une entreprise de fournitures générales et d'approvisionnement entièrement enregistrée, engagée à fournir des produits de haute qualité et des solutions d'approvisionnement fiables aux entreprises, ONG, institutions gouvernementales, écoles, hôpitaux et organisations privées.",
      p2: "Nous sommes spécialisés dans le sourcing efficace, la livraison rapide et l'approvisionnement rentable pour une large gamme de produits et de catégories, garantissant que nos clients reçoivent les bons produits, au bon moment, au bon prix.",
      p3: "Notre force réside dans nos solides réseaux de fournisseurs, notre exécution professionnelle et notre compréhension approfondie des besoins d'approvisionnement dans divers secteurs.",
    },
    missionVision: {
      title: "Mission, Vision & Valeurs",
      missionTitle: "Énoncé de Mission et de Vision",
      missionText: "Être un partenaire de fournitures générales de premier plan et de confiance, reconnu pour sa fiabilité, son intégrité et son excellence dans la prestation de services. Fournir des produits de qualité et des solutions d'approvisionnement fluides grâce à des systèmes d'approvisionnement efficaces, un sourcing stratégique et un service client exceptionnel.",
      valuesTitle: "Nos Valeurs Fondamentales",
      integrity: "Intégrité",
      reliability: "Fiabilité",
      efficiency: "Efficacité",
      qualityAssurance: "Assurance Qualité",
      customerFocus: "Orientation Client",
      professionalism: "Professionnalisme",
    },
    philosophy: {
      title: "Notre Philosophie",
      text: "Au fondement de notre entreprise se trouve un engagement envers la fiabilité, le professionnalisme et l'excellence opérationnelle. Nous croyons qu'un approvisionnement efficace va au-delà de la simple livraison de marchandises ; il s'agit de cohérence, de responsabilité et de construction de partenariats à long terme. Grâce à des processus structurés, un approvisionnement de qualité et une exécution rapide, nous soutenons les opérations de nos clients avec des solutions qui améliorent l'efficacité, réduisent les risques et contribuent à une croissance durable.",
    },
    supply: {
      title: "Ce Que Nous Fournissons",
      intro: "Nous fournissons des services d'approvisionnement de haute qualité et fiables dans les principales catégories suivantes :",
      categories: {
        stationery: {
          title: "Fournitures et Papeterie de Bureau",
          bullets: [
            "Papiers d'impression, classeurs, toners, cartouches",
            "Stylos, cahiers, agendas, agrafeuses",
            "Consommables et accessoires de bureau",
          ],
        },
        ict: {
          title: "TIC et Électronique",
          bullets: [
            "Ordinateurs portables, ordinateurs de bureau, imprimantes, équipements réseau",
            "Onduleurs (UPS), rallonges électriques, accessoires",
          ],
        },
        cleaning: {
          title: "Fournitures de Nettoyage et d'Entretien",
          bullets: [
            "Détergents, désinfectants, serpillières, balais",
            "Papier hygiénique, savon pour les mains, désinfectants",
            "Équipements et outils de nettoyage",
          ],
        },
        kitchen: {
          title: "Fournitures de Cuisine et de Restauration",
          bullets: [
            "Couverts, vaisselle, thermos",
            "Équipements de restauration et consommables",
          ],
        },
        furniture: {
          title: "Mobilier et Agencements",
          bullets: [
            "Bureaux, chaises, armoires",
            "Étagères, cloisons, agencements",
          ],
        },
        ppe: {
          title: "EPI et Équipements de Sécurité",
          bullets: [
            "Gants, casques, gilets réfléchissants",
            "Trousses de premiers secours, bottes de sécurité",
          ],
        },
        branded: {
          title: "Marchandises de Marque et Impression",
          bullets: [
            "T-shirts de marque, casquettes, bannières",
            "Cadeaux d'entreprise, matériel promotionnel",
          ],
        },
        electrical: {
          title: "Fournitures Électriques et Quincaillerie",
          bullets: [
            "Ampoules, câbles, interrupteurs",
            "Matériel de plomberie et quincaillerie",
          ],
        },
        uniforms: {
          title: "Uniformes et Vêtements de Protection",
          bullets: [
            "Uniformes scolaires",
            "Uniformes d'entreprise",
            "Uniformes de sécurité",
            "Blouses médicales et blouses de laboratoire",
            "Vêtements de travail de marque",
            "Gilets réfléchissants et vêtements de sécurité",
            "Uniformes personnalisés de marque",
          ],
        },
      },
    },
    whyChooseUs: {
      title: "Pourquoi Nous Choisir",
      bullets: [
        "Détenue par une femme et conforme à la diversité (idéal pour les appels d'offres AGPO et catégories spéciales)",
        "Réseau solide de fournisseurs et de fabricants",
        "Prix compétitifs grâce à un approvisionnement stratégique",
        "Délai d'exécution rapide",
        "Contrôle de qualité strict",
        "Communication et documentation professionnelles",
        "Flexible selon les besoins et les spécifications des clients",
      ],
      commitmentTitle: "Notre Engagement",
      commitmentText: "Nous nous engageons à offrir l'excellence, à établir des partenariats à long terme et à assurer la satisfaction de nos clients grâce à un service fiable et des fournitures de haute qualité.",
    },
    clients: {
      title: "Nos Clients",
      intro: "Nous servons une gamme diversifiée de clients à travers différents secteurs.",
      types: {
        govt: "Institutions gouvernementales",
        ngos: "ONG et organisations internationales",
        schools: "Écoles et universités",
        hospitals: "Hôpitaux et cliniques",
        corporate: "Entreprises et corporations",
        smes: "PME (Petites et Moyennes Entreprises)",
      },
    },
    contact: {
      title: "Contactez-nous",
      detailsTitle: "Détails de l'entreprise",
      formTitle: "Envoyer une Demande",
      companyName: "Nom de l'entreprise enregistrée",
      kraPin: "KRA PIN",
      agpo: "Enregistré AGPO",
      ownership: "Propriété",
      poBox: "Boîte Postale",
      location: "Localisation",
      email: "E-mail",
      phone: "Téléphone",
      yes: "Oui",
      womanOwned: "Détenue à 70% par une femme",
      form: {
        name: "Votre Nom",
        email: "Adresse E-mail",
        phone: "Numéro de Téléphone",
        subject: "Sujet",
        message: "Message",
        submit: "Envoyer la Demande",
        success: "Merci ! Nous vous recontacterons rapidement.",
      },
    },
    footer: {
      allRights: "Tous droits réservés.",
      companyCol: "Entreprise",
      contactCol: "Contact",
      quickLinksCol: "Liens Rapides"
    },
    faqsPage: {
      title: "Foire Aux Questions (FAQ)",
      q1: "À quels types d'organisations fournissez-vous vos services ?",
      a1: "Nous fournissons à un large éventail de clients, notamment des institutions gouvernementales, des ONG, des organisations internationales, des écoles, des universités, des hôpitaux, des cliniques, des entreprises et des PME.",
      q2: "Gérez-vous les commandes importantes ou en gros ?",
      a2: "Oui. Nous sommes équipés pour gérer les commandes d'approvisionnement, petites ou grandes. Contactez-nous avec vos besoins et nous vous fournirons un devis personnalisé.",
      q3: "Comment puis-je demander un devis ?",
      a3: "Vous pouvez demander un devis en envoyant un e-mail à Xavicomlimited@gmail.com ou en appelant le 0702634855 / 0711581764. Vous pouvez également utiliser le formulaire de contact sur notre page Contactez-nous.",
      q4: "Êtes-vous enregistré pour les appels d'offres publics ?",
      a4: "Oui. Xavicom Limited est enregistrée auprès de l'AGPO et est détenue à 70 % par une femme, ce qui nous rend éligibles aux appels d'offres de catégories spéciales et aux cadres d'approvisionnement gouvernementaux.",
      q5: "Dans quelles régions livrez-vous ?",
      a5: "Nous livrons dans tout Nairobi et pouvons organiser la logistique pour des livraisons dans d'autres régions en fonction des exigences de la commande.",
      q6: "Quelles conditions de paiement proposez-vous ?",
      a6: "Les conditions de paiement sont discutées par commande. Nous acceptons divers arrangements, y compris l'approvisionnement basé sur les bons de commande (LPO) pour les clients institutionnels.",
      q7: "Combien de temps prend la livraison ?",
      a7: "Les délais de livraison dépendent de la nature et de la taille de la commande. Nous privilégions des délais d'exécution rapides et communiquerons les dates de livraison estimées lors de la confirmation de la commande.",
      q8: "Pouvez-vous sourcer des articles non répertoriés dans votre catalogue ?",
      a8: "Oui. Grâce à notre réseau de fournisseurs, nous pouvons sourcer une grande variété de produits au-delà de nos catégories standard. Contactez-nous avec vos exigences spécifiques.",
      stillQuestion: "Vous avez encore une question ?",
      stillQuestionButton: "Contactez-nous",
      getInTouch: "Contactez-nous",
      emailDescription: "Cliquez ci-dessous pour nous envoyer un e-mail directement et nous vous répondrons dans les plus brefs délais.",
      emailUs: "Envoyez-nous un e-mail",
      close: "Fermer"
    },
    privacyPage: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : Juin 2025",
      whoWeAreTitle: "1. Qui Nous Sommes",
      whoWeAreText: "Xavicom Limited est une entreprise enregistrée de fournitures générales, d'approvisionnement et de logistique basée à Nairobi, au Kenya. Notre e-mail de contact est Xavicomlimited@gmail.com.",
      infoCollectTitle: "2. Informations Que Nous Collectons",
      infoCollectText: "Lorsque vous utilisez ce site Web ou nous contactez, nous pouvons collecter les éléments suivants :\n\n• Votre nom, adresse e-mail et numéro de téléphone (lorsqu'ils sont soumis via notre formulaire de contact)\n• Le sujet et le contenu des messages que vous nous envoyez\n• Données de base sur l'utilisation du site Web, telles que les pages visitées (si des analyses sont activées à l'avenir)",
      infoUseTitle: "3. Comment Nous Utilisons Vos Informations",
      infoUseText: "Nous utilisons les informations que vous fournissez pour :\n\n• Répondre à vos demandes de renseignements et d'approvisionnement\n• Préparer et envoyer des devis ou des propositions\n• Communiquer les mises à jour concernant vos commandes ou demandes\n• Améliorer nos services sur la base des commentaires des clients\n\nNous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers à des fins de marketing.",
      securityTitle: "4. Stockage et Sécurité des Données",
      securityText: "Vos informations sont traitées avec soin et stockées de manière sécurisée. Nous ne conservons vos coordonnées que le temps nécessaire pour répondre à votre demande ou conformément à la législation kenyane.",
      rightsTitle: "5. Vos Droits",
      rightsText: "Vous avez le droit de demander l'accès, la rectification ou la suppression des données personnelles que nous détenons à votre sujet. Pour exercer ces droits, contactez-nous à Xavicomlimited@gmail.com.",
      cookiesTitle: "6. Cookies",
      cookiesText: "Ce site Web utilise un mécanisme de consentement aux cookies. Vous pouvez accepter ou refuser les cookies non essentiels. Les cookies strictement nécessaires (requis pour le fonctionnement du site) sont toujours actifs.",
      contactTitle: "7. Contact",
      contactText: "Pour toute préoccupation relative à la confidentialité, envoyez-nous un e-mail à Xavicomlimited@gmail.com ou appelez le 0702634855."
    },
    termsPage: {
      title: "Conditions d'Utilisation",
      lastUpdated: "Dernière mise à jour : Juin 2025",
      acceptTitle: "1. Acceptation des Conditions",
      acceptText: "En accédant et en utilisant le site Web de Xavicom Limited, vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'êtes pas d'accord, veuillez ne pas utiliser ce site.",
      useTitle: "2. Utilisation de ce Site Web",
      useText: "Ce site Web est fourni à des fins d'information et pour faciliter la communication avec Xavicom Limited. Vous acceptez de ne pas faire d'usage abusif de ce site ou de soumettre de fausses informations via notre formulaire de contact.",
      productsTitle: "3. Produits et Services",
      productsText: "Toutes les listes de produits, catégories et descriptions sur ce site Web représentent nos capacités générales d'approvisionnement. La disponibilité spécifique, les prix et les délais de livraison sont confirmés par commande.",
      quotesTitle: "4. Devis et Commandes",
      quotesText: "La soumission d'une demande via ce site Web ne constitue pas une commande ferme. Les commandes sont formalisées par des documents officiels tels que des bons de commande (LPO) ou des accords écrits.",
      intellectualTitle: "5. Propriété Intellectuelle",
      intellectualText: "Tout le contenu de ce site Web — y compris le texte, la conception et l'image de marque — est la propriété de Xavicom Limited et ne peut être reproduit sans autorisation écrite.",
      liabilityTitle: "6. Limitation de Responsabilité",
      liabilityText: "Xavicom Limited n'est pas responsable des dommages indirects ou consécutifs résultant de l'utilisation de ce site ou de la confiance accordée aux informations qu'il contient.",
      lawTitle: "7. Droit Applicable",
      lawText: "Ces conditions sont régies par les lois de la République du Kenya.",
      contactTitle: "8. Contact",
      contactText: "Pour toute question concernant ces conditions, contactez-nous à Xavicomlimited@gmail.com ou appelez le 0702634855."
    },
    cookies: {
      title: "Nous utilisons des cookies 🍪",
      text: "Nous utilisons des cookies pour améliorer votre expérience sur notre site Web. Vous pouvez choisir d'accepter tous les cookies ou de personnaliser vos préférences. Consultez notre Politique de Confidentialité pour plus de détails.",
      acceptAll: "Tout Accepter",
      manage: "Gérer les Préférences",
      decline: "Refuser",
      essentialTitle: "Cookies Essentiels",
      essentialLabel: "Requis",
      analyticsTitle: "Cookies d'Analyse",
      save: "Enregistrer les Préférences"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      mission: "الرسالة والرؤية",
      philosophy: "فلسفتنا",
      supply: "ما نقوم بتوريده",
      whyUs: "لماذا تختارنا",
      clients: "عملاؤنا",
      contact: "اتصل بنا",
      faqs: "الأسئلة الشائعة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة"
    },
    hero: {
      title: "زافيكوم المحدودة",
      tagline: "تجهيزات عامة | مشتريات | خدمات لوجستية",
      description: "تقديم منتجات عالية الجودة وحلول توريد موثوقة للشركات، والمنظمات غير الحكومية، والمؤسسات الحكومية، والمدارس، والمستشفيات، والمؤسسات الخاصة.",
      ctaSupply: "ما نقوم بتوريده",
      ctaContact: "اتصل بنا",
    },
    pillars: {
      suppliesTitle: "تجهيزات عامة",
      suppliesDesc: "توفير منتجات عالية الجودة وموثوقة عبر فئات متعددة.",
      procurementTitle: "المشتريات",
      procurementDesc: "عمليات شراء منظمة وفعالة من حيث التكلفة مصممة خصيصاً لتلبية مواصفاتكم الدقيقة.",
      logisticsTitle: "الخدمات اللوجستية",
      logisticsDesc: "عمليات نقل وتوصيل آمنة ومنظمة وفي الوقت المحدد عبر جميع القطاعات.",
    },
    about: {
      title: "من نحن",
      p1: "شركة زافيكوم المحدودة (Xavicom Ltd) هي شركة مسجلة بالكامل في مجال التجهيزات العامة والمشتريات، ملتزمة بتقديم منتجات عالية الجودة وحلول توريد موثوقة للشركات، والمنظمات غير الحكومية، والمؤسسات الحكومية، والمدارس، والمستشفيات، والمؤسسات الخاصة.",
      p2: "نحن متخصصون في التوريد الفعال، والتسليم في الوقت المناسب، والمشتريات الفعالة من حيث التكلفة عبر مجموعة واسعة من المنتجات والفئات، مما يضمن حصول عملائنا على السلع المناسبة، في الوقت المناسب، وبالسعر المناسب.",
      p3: "تكمن قوتنا في شبكات الموردين القوية لدينا، والتنفيذ الاحترافي، والفهم العميق لاحتياجات المشتريات عبر مختلف القطاعات.",
    },
    missionVision: {
      title: "الرسالة والرؤية والقيم",
      missionTitle: "بيان الرسالة والرؤية",
      missionText: "أن نكون شريكاً ريادياً وموثوقاً في مجال التجهيزات العامة، ومعروفاً بالموثوقية والنزاهة والتميز في تقديم الخدمات. وتوفير منتجات عالية الجودة وحلول توريد سلسة من خلال أنظمة مشتريات فعالة، وتوريد استراتيجي، وخدمة عملاء استثنائية.",
      valuesTitle: "قيمنا الأساسية",
      integrity: "النزاهة",
      reliability: "الموثوقية",
      efficiency: "الكفاءة",
      qualityAssurance: "ضمان الجودة",
      customerFocus: "التركيز على العميل",
      professionalism: "المهنية",
    },
    philosophy: {
      title: "فلسفتنا",
      text: "يكمن في أساس شركتنا الالتزام بالموثوقية والمهنية والتميز التشغيلي. نحن نؤمن بأن التوريد الفعال يتجاوز مجرد تسليم البضائع؛ بل يتعلق بالاتساق والمساءلة وبناء شراكات طويلة الأمد. من خلال العمليات المنظمة، والتوريد عالي الجودة، والتسليم في الوقت المناسب، فإننا ندعم عمليات عملائنا بحلول تعزز الكفاءة وتحد من المخاطر وتسهم في النمو المستدام.",
    },
    supply: {
      title: "ما نقوم بتوريده",
      intro: "نحن نقدم خدمات توريد عالية الجودة وموثوقة عبر الفئات الرئيسية التالية:",
      categories: {
        stationery: {
          title: "قرطاسية ومستلزمات مكتبية",
          bullets: [
            "ورق طباعة، ملفات، أحبار طابعات وخراطيش",
            "أقلام، دفاتر، مذكرات يومية، دبابيس وخرامات",
            "مستهلكات وإكسسوارات مكتبية",
          ],
        },
        ict: {
          title: "تكنولوجيا المعلومات والاتصالات والإلكترونيات",
          bullets: [
            "أجهزة كمبيوتر محمولة، أجهزة مكتبية، طابعات، ومعدات الشبكات",
            "أجهزة مزود الطاقة غير المنقطع (UPS)، كابلات التمديد، والإكسسوارات",
          ],
        },
        cleaning: {
          title: "مستلزمات التنظيف والنظافة العامة",
          bullets: [
            "منظفات، مطهرات، ممسحات، ومقاش",
            "ورق صحي، صابون غسيل اليدين، ومعقمات",
            "معدات وأدوات التنظيف",
          ],
        },
        kitchen: {
          title: "مستلزمات المطبخ والتموين",
          bullets: [
            "أدوات مائدة، أواني فخارية، وترامس حرارية",
            "معدات خدمات التموين والمستهلكات",
          ],
        },
        furniture: {
          title: "الأثاث والتجهيزات",
          bullets: [
            "مكاتب، كراسي، وخزائن مكتبية",
            "أرفف، قواطع مكتبية، وتركيبات",
          ],
        },
        ppe: {
          title: "معدات الحماية الشخصية والسلامة",
          bullets: [
            "قفازات، خوذات، وسترات عاكسة",
            "حقائب الإسعافات الأولية، وأحذية السلامة",
          ],
        },
        branded: {
          title: "البضائع والمطبوعات الدعائية ذات العلامات التجارية",
          bullets: [
            "قمصان تي شيرت مطبوعة، قبعات، ولافتات دعائية",
            "هدايا الشركات، ومواد ترويج العلامات التجارية",
          ],
        },
        electrical: {
          title: "المستلزمات الكهربائية ومعدات البناء",
          bullets: [
            "مصابيح، كابلات، ومفاتيح كهربائية",
            "مواد السباكة والأدوات المعدنية",
          ],
        },
        uniforms: {
          title: "الأزياء الموحدة والملابس الواقية",
          bullets: [
            "أزياء مدرسية",
            "أزياء الشركات",
            "أزياء الأمن",
            "ملابس العمليات الطبية ومعاطف المختبر",
            "ملابس العمل ذات العلامات التجارية",
            "سترات عاكسة وملابس السلامة",
            "أزياء موحدة مخصصة بعلامات تجارية",
          ],
        },
      },
    },
    whyChooseUs: {
      title: "لماذا تختارنا",
      bullets: [
        "مملوكة لامرأة ومتوافقة مع معايير التنوع (مثالية لمناقصات AGPO والفئات الخاصة)",
        "شبكة قوية من الموردين والمصنعين",
        "أسعار تنافسية من خلال التوريد الاستراتيجي",
        "سرعة في تسليم وتلبية الطلبات",
        "رقابة صارمة على الجودة",
        "تواصل وتوثيق احترافي",
        "مرونة تامة لتلبية احتياجات ومواصفات العميل",
      ],
      commitmentTitle: "التزامنا",
      commitmentText: "نحن ملتزمون بتقديم التميز، وبناء شراكات طويلة الأمد، وضمان رضا العملاء من خلال خدمة يمكن الاعتماد عليها وتجهيزات عالية الجودة.",
    },
    clients: {
      title: "عملاؤنا",
      intro: "نحن نخدم مجموعة متنوعة من العملاء عبر مختلف القطاعات.",
      types: {
        govt: "المؤسسات الحكومية",
        ngos: "المنظمات غير الحكومية والمنظمات الدولية",
        schools: "المدارس والجامعات",
        hospitals: "المستشفيات والعيادات",
        corporate: "مؤسسات الشركات والقطاع الخاص",
        smes: "المشاريع الصغيرة والمتوسطة (SMEs)",
      },
    },
    contact: {
      title: "اتصل بنا",
      detailsTitle: "بيانات الشركة",
      formTitle: "إرسال استفسار",
      companyName: "اسم الشركة المسجل",
      kraPin: "الرقم الضريبي (KRA PIN)",
      agpo: "مسجل في AGPO (فئات خاصة)",
      ownership: "الملكية",
      poBox: "صندوق البريد",
      location: "الموقع",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      yes: "نعم",
      womanOwned: "٧٠٪ مملوكة للنساء",
      form: {
        name: "الاسم الكريم",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        subject: "الموضوع",
        message: "الرسالة",
        submit: "إرسال الاستفسار",
        success: "شكراً لك! سنتواصل معك قريباً.",
      },
    },
    footer: {
      allRights: "جميع الحقوق محفوظة.",
      companyCol: "الشركة",
      contactCol: "الاتصال",
      quickLinksCol: "روابط سريعة"
    },
    faqsPage: {
      title: "الأسئلة الشائعة",
      q1: "ما هي أنواع المؤسسات التي تقومون بالتوريد إليها؟",
      a1: "نقوم بالتوريد لمجموعة واسعة من العملاء بما في ذلك المؤسسات الحكومية، والمنظمات غير الحكومية، والمنظمات الدولية، والمدارس، والجامعات، والمستشفيات، والعيادات، ومؤسسات الشركات، والمشاريع الصغيرة والمتوسطة.",
      q2: "هل تتعاملون مع الطلبات الكبيرة أو الضخمة؟",
      a2: "نعم. نحن مجهزون للتعامل مع طلبات الشراء الصغيرة والكبيرة على حد سواء. اتصل بنا لمعرفة متطلباتك وسنقدم لك عرض أسعار مخصصاً.",
      q3: "كيف يمكنني طلب عرض أسعار؟",
      a3: "يمكنك طلب عرض أسعار عن طريق إرسال بريد إلكتروني إلينا على Xavicomlimited@gmail.com أو الاتصال على 0702634855 / 0711581764. يمكنك أيضاً استخدام نموذج الاتصال في صفحة اتصل بنا.",
      q4: "هل أنتم مسجلون في المناقصات الحكومية؟",
      a4: "نعم. شركة زافيكوم المحدودة مسجلة في AGPO وهي مملوكة للنساء بنسبة ٧٠٪، مما يجعلنا مؤهلين لمناقصات الفئات الخاصة وأطر الشراء الحكومية.",
      q5: "ما هي المناطق التي تقومون بالتوصيل إليها؟",
      a5: "نقوم بالتوصيل في جميع أنحاء نيروبي ويمكننا ترتيب الخدمات اللوجستية للتوصيل إلى مناطق أخرى بناءً على متطلبات الطلب.",
      q6: "ما هي شروط الدفع التي تقدمونها؟",
      a6: "يتم مناقشة شروط الدفع على أساس كل طلب. نحن نستوعب الترتيبات المختلفة بما في ذلك الشراء القائم على أمر الشراء المحلي (LPO) لعملاء المؤسسات.",
      q7: "كم من الوقت يستغرق التسليم؟",
      a7: "تعتمد الجداول الزمنية للتسليم على طبيعة الطلب وحجمه. نحن نولي الأولوية لأوقات التسليم السريعة وسنقوم بإبلاغكم بتواريخ التسليم المقدرة عند تأكيد الطلب.",
      q8: "هل يمكنك توفير أصناف غير مدرجة في الكتالوج الخاص بكم؟",
      a8: "نعم. من خلال شبكة الموردين لدينا، يمكننا توفير مجموعة واسعة من المنتجات خارج فئاتنا القياسية. اتصل بنا لمعرفة متطلباتك الخاصة.",
      stillQuestion: "هل لا يزال لديك سؤال؟",
      stillQuestionButton: "اتصل بنا",
      getInTouch: "تواصل معنا",
      emailDescription: "انقر أدناه لإرسال بريد إلكتروني إلينا مباشرة وسنعاود الاتصال بك في أقرب وقت ممكن.",
      emailUs: "أرسل لنا بريداً إلكترونياً",
      close: "إغلاق"
    },
    privacyPage: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: يونيو ٢٠٢٥",
      whoWeAreTitle: "١. من نحن",
      whoWeAreText: "شركة زافيكوم المحدودة هي شركة مسجلة للتجهيزات العامة والمشتريات والخدمات اللوجستية ومقرها في نيروبي، كينيا. البريد الإلكتروني للتواصل معنا هو Xavicomlimited@gmail.com.",
      infoCollectTitle: "٢. المعلومات التي نجمعها",
      infoCollectText: "عندما تستخدم هذا الموقع الإلكتروني أو تتصل بنا، قد نجمع ما يلي:\n\n• اسمك، وعنوان بريدك الإلكتروني، ورقم هاتفك (عند تقديمها عبر نموذج الاتصال الخاص بنا)\n• موضوع ومحتوى الرسائل التي ترسلها إلينا\n• بيانات الاستخدام الأساسية للموقع مثل الصفحات التي تمت زيارتها (إذا تم تمكين التحليلات في المستقبل)",
      infoUseTitle: "٣. كيف نستخدم معلوماتك",
      infoUseText: "نستخدم المعلومات التي تقدمها من أجل:\n\n• الرد على استفساراتك وطلبات الشراء الخاصة بك\n• إعداد وإرسال عروض الأسعار أو المقترحات\n• إرسال التحديثات ذات الصلة بطلباتك أو استفساراتك\n• تحسين خدماتنا بناءً على تعليقات العملاء\n\nنحن لا نبيع معلوماتك الشخصية أو نؤجرها أو نشاركها مع أطراف ثالثة لأغراض التسويق.",
      securityTitle: "٤. تخزين البيانات وأمنها",
      securityText: "يتم التعامل مع معلوماتك بعناية وتخزينها بشكل آمن. نحن نحتفظ بتفاصيل الاتصال الخاصة بك فقط طالما كان ذلك ضرورياً لتلبية طلبك أو كما يقتضيه القانون الكيني.",
      rightsTitle: "٥. حقوقك",
      rightsText: "لديك الحق في طلب الوصول إلى أي بيانات شخصية نحتفظ بها عنك، أو تصحيحها، أو حذفها. لممارسة هذه الحقوق، اتصل بنا على Xavicomlimited@gmail.com.",
      cookiesTitle: "٦. ملفات تعريف الارتباط (Cookies)",
      cookiesText: "يستخدم هذا الموقع الإلكتروني آلية للموافقة على ملفات تعريف الارتباط. يجوز لك قبول أو رفض ملفات تعريف الارتباط غير الأساسية. ملفات تعريف الارتباط الضرورية للغاية (المطلوبة لعمل الموقع) نشطة دائماً.",
      contactTitle: "٧. الاتصال",
      contactText: "لأية مخاوف تتعلق بالخصوصية، راسلنا عبر البريد الإلكتروني على Xavicomlimited@gmail.com أو اتصل على 0702634855."
    },
    termsPage: {
      title: "شروط الخدمة",
      lastUpdated: "آخر تحديث: يونيو ٢٠٢٥",
      acceptTitle: "١. قبول الشروط",
      acceptText: "من خلال الوصول إلى موقع شركة زافيكوم المحدودة واستخدامه، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق، يرجى عدم استخدام هذا الموقع.",
      useTitle: "٢. استخدام هذا الموقع الإلكتروني",
      useText: "يتم توفير هذا الموقع الإلكتروني لأغراض إعلامية وتسهيل التواصل مع شركة زافيكوم المحدودة. أنت توافق على عدم إساءة استخدام هذا الموقع أو تقديم معلومات كاذبة من خلال نموذج الاتصال الخاص بنا.",
      productsTitle: "٣. المنتجات والخدمات",
      productsText: "تمثل جميع قوائم المنتجات وفئاتها وأوصافها على هذا الموقع إمكانيات التوريد العامة لدينا. يتم تأكيد التوفر والأسعار والجداول الزمنية للتسليم المحددة على أساس كل طلب على حدة.",
      quotesTitle: "٤. عروض الأسعار والطلبات",
      quotesText: "إن تقديم استفسار من خلال هذا الموقع الإلكتروني لا يشكل طلباً ملزماً. يتم صياغة الطلبات بشكل رسمي من خلال الوثائق الرسمية مثل أوامر الشراء المحلية (LPOs) أو الاتفاقيات المكتوبة.",
      intellectualTitle: "٥. الملكية الفكرية",
      intellectualText: "جميع محتويات هذا الموقع الإلكتروني - بما في ذلك النصوص والتصميم والعلامات التجارية - هي ملك لشركة زافيكوم المحدودة ولا يجوز إعادة إنتاجها دون إذن كتابي.",
      liabilityTitle: "٦. تحديد المسؤولية",
      liabilityText: "لا تتحمل شركة زافيكوم المحدودة المسؤولية عن أي خسائر غير مباشرة أو تبعية تنشأ عن استخدام هذا الموقع الإلكتروني أو الاعتماد على المعلومات الواردة فيه.",
      lawTitle: "٧. القانون الحاكم",
      lawText: "تخضع هذه الشروط لقوانين جمهورية كينيا.",
      contactTitle: "٨. الاتصال",
      contactText: "للأسئلة المتعلقة بهذه الشروط، اتصل بنا على Xavicomlimited@gmail.com أو اتصل على 0702634855."
    },
    cookies: {
      title: "نحن نستخدم ملفات تعريف الارتباط 🍪",
      text: "نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا الإلكتروني. يمكنك اختيار قبول جميع ملفات تعريف الارتباط، أو تخصيص تفضيلاتك. راجع سياسة الخصوصية الخاصة بنا للحصول على التفاصيل.",
      acceptAll: "قبول الكل",
      manage: "إدارة التفضيلات",
      decline: "رفض",
      essentialTitle: "ملفات تعريف الارتباط الأساسية",
      essentialLabel: "مطلوب",
      analyticsTitle: "ملفات تعريف الارتباط التحليلية",
      save: "حفظ التفضيلات"
    }
  }
};
