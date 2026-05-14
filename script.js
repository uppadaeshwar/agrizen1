document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const products = [
        {
            title: 'AGRI SOIL',
            subtitle: 'Protein Hydrolysate 10% | Natural Soil Cleanser',
            type: 'Premium',
            category: 'Bio-Stimulants & Protection',
            description: 'Agri Soil is a premium plant-based bio-stimulant developed using advanced fermentation technology. It enhances plant metabolism, improves nutrient absorption, and stimulates balanced growth. The product supports crops during critical growth stages, resulting in better flowering, fruit setting, and higher yields. It is designed to improve crop performance under both normal and stress conditions.',
            benefits: ['Enhances metabolism', 'Improves absorption', 'Balanced growth', 'Better flowering', 'Stress tolerance'],
            recommendedCrops: 'Suitable for all crops.',
            dosage: 'Foliar Spray - Mix @ 3-4 ml per litre of water and spray uniformly. Soil Application - @500 ml to 1 litre per acre.',
            packSizes: '250 ml / 500 ml / 1 Liter',
            img: './assets/AGRI SOIL.png',
            colorClass: 'bg-agri-green-500'
        },
        {
            title: 'AGRI- K C.M.B',
            subtitle: 'Power for Strong Plants & Higher Yields',
            type: 'Scientific',
            category: 'Advanced Micronutrients',
            description: 'Agri- K C.M.B is a scientifically formulated liquid plant nutrient enriched with Nitrogen, Potassium, Calcium, Magnesium, and Boron. The balanced nutrient combination improves root strength, nutrient absorption, photosynthesis, and crop development. Regular use helps plants activate important enzymes, improves nutrient utilization, and enhances resistance against environmental stresses.',
            benefits: ['Activates 60+ plant enzymes', 'Improves photosynthesis', 'Strong root system', 'Enhances flowering', 'Stress resistance'],
            recommendedCrops: 'Suitable for all agricultural and horticultural crops such as: Vegetables, Fruits, Field Crops, Plantation Crops, Commercial Crops',
            dosage: 'Foliar Spray: Mix the product @ 2-3 ml per litre of water and spray uniformly on crop foliage.',
            packSizes: '250 ml / 500 ml / 1 Litre',
            img: './assets/AGRI-K.png',
            colorClass: 'bg-agri-navy-light'
        },
        {
            title: 'AGRINEEM',
            subtitle: '(100000 Plus Power), Botanical Biostimulant',
            type: 'Natural',
            category: 'Bio-Stimulants & Protection',
            description: 'Agrineem + TE is a botanical biostimulant formulated with natural Adhatoda vasica leaf extract and enriched with supportive ingredients. When applied to crops, it forms a protective layer that helps control pests such as whiteflies, aphids, mites, caterpillars, and leafhoppers. It supports healthy plant development and improves crop vigor while remaining safe to beneficial insects.',
            benefits: ['Natural defense', 'Pest protection', 'Improves crop vigor', 'Safe to beneficial insects'],
            recommendedCrops: 'Suitable for chilli, tomato, and all types of field and horticultural crops.',
            dosage: 'Foliar Spray: Mix @ 2.5 ml per litre of water and spray uniformly on the crop.',
            packSizes: '100 ml / 250 ml / 500 ml',
            img: './assets/AGRINEEM.png',
            colorClass: 'bg-agri-green-600'
        },
        {
            title: 'BISON',
            subtitle: 'Advanced Protection for Healthier Crops',
            type: 'Advanced',
            category: 'Bio-Stimulants & Protection',
            description: 'BISON is a powerful, broad-spectrum insecticide designed to provide long-lasting protection against major crop-damaging pests. Its advanced formulation ensures effective control across a wide variety of crops, helping farmers achieve higher productivity and better crop quality.',
            benefits: ['Long-lasting protection', 'Broad-spectrum action', 'Fast & effective results', 'Improves crop health'],
            recommendedCrops: 'Paddy, Chilli, Orange, Mango, Maize and All Vegetable Crops',
            dosage: '@ 2-3 ml per liter of water ensure uniform spraying for best results apply at early stage of pest infestation',
            packSizes: '250 ml / 500 ml / 1 Liter',
            img: './assets/BISON.png',
            colorClass: 'bg-agri-bronze'
        },
        {
            title: 'ROOT KING',
            subtitle: 'Powerful Liquid Biostimulant for Plant Health & Protection',
            type: 'Premium',
            category: 'Bio-Stimulants & Protection',
            description: 'Root King is a premium Phenolic Compound (3%) Liquid Biostimulant specially developed to enhance plant growth, improve stress tolerance, and strengthen natural crop defence. Its advanced formulation supports healthy roots, greener foliage, better nutrient uptake, and improved crop performance.',
            benefits: ['Improves stress tolerance', 'Boosts antioxidant activity', 'Strong root & shoot growth', 'Enhances chlorophyll formation', 'Supports nutrient mobilization'],
            recommendedCrops: 'Cucumber, Maize, Tomato',
            dosage: 'Foliar Spray: Mix the product @ 2-3 ml per litre of water and spray uniformly on crop foliage. Soil Application - @500 ml to 1 litre per acre.',
            packSizes: '250 ml / 500 ml / 1 liter',
            img: './assets/ROOT KING.png',
            colorClass: 'bg-agri-gold'
        },
        {
            title: 'GLUCOZEN',
            subtitle: 'Zinc Gluconate (Zn - 12%)',
            type: 'Micronutrient',
            category: 'Advanced Micronutrients',
            description: 'Fully chelated liquid zinc fertilizer designed for rapid absorption and translocation. Essential for enzyme activation and protein synthesis.',
            benefits: ['Corrects Zn deficiency', 'Faster absorption', 'Enzyme activation', 'Enhanced yield'],
            img: './assets/GLUCOZEN.png',
            colorClass: 'bg-agri-earth'
        },
        {
            title: 'ELITE PLUS',
            subtitle: 'Protein Hydrolysate 20%',
            type: 'Advanced',
            category: 'Bio-Stimulants & Protection',
            description: 'High-concentration plant-based bio-stimulant. Supports crops during critical growth stages for better fruit setting and higher yields.',
            benefits: ['Boosts metabolism', 'Nutrient absorption', 'Better flowering', 'Stress recovery'],
            img: './assets/ELITE PLUS.png',
            colorClass: 'bg-agri-navy'
        },
        {
            title: 'AGRIVAM',
            subtitle: 'Mycorrhizal Biofertilizer',
            type: 'Biological',
            category: 'Bio-Stimulants & Protection',
            description: 'VAM fungi enriched biofertilizer that improves nutrient uptake, root growth, and overall crop productivity through natural symbiosis.',
            benefits: ['P absorption', 'Root development', 'Salinity tolerance', 'Soil health'],
            img: './assets/AGRIVAM.png',
            colorClass: 'bg-agri-green-500'
        },
        {
            title: 'AGRIMYCIN',
            subtitle: 'Natural Antibiotic | Scab Protection',
            type: 'Protector',
            category: 'Bio-Stimulants & Protection',
            description: 'Natural antibiotic formulation providing superior protection against bacterial infections and scab diseases for highest quality produce.',
            benefits: ['Bacterial defense', 'Improved vigor', 'Disease-free crops', 'Fruit quality'],
            img: './assets/AGRIMYCIN.png',
            colorClass: 'bg-agri-gold'
        }
    ];

    const news = [
        { title: 'Agrizen Wins Best Crop Care Company Award', date: 'April 25, 2026', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800', desc: 'Recognized for innovation in sustainable agricultural practices.' },
        { title: 'Sustainable Farming Workshop in Hyderabad', date: 'April 12, 2026', img: './assets/knowlege.png', desc: 'Connecting with over 5,000 farmers to share modern techniques.' }
    ];

    const faqs = [
        { q: 'What agricultural services do you offer?', a: 'We provide comprehensive crop care services including soil analysis, precision agriculture consulting, customized foliar nutrition planning, and end-to-end agronomic support for both smallholder farmers and large commercial estates.' },
        { q: 'How is your product pricing structured?', a: 'Our pricing is highly competitive and structured based on product volume and contract terms. We offer tiered pricing for bulk orders, seasonal discounts, and transparent cost structures with no hidden fees.' },
        { q: 'What is the typical timeline for an agronomy project?', a: 'Project timelines vary depending on the crop cycle and specific intervention required. However, an initial soil assessment and tailored nutrient plan are typically delivered within 7-10 business days from the initial consultation.' },
        { q: 'What level of technical support do you provide?', a: 'We offer round-the-clock technical support through our dedicated helpline. Additionally, our field agents conduct routine on-site visits to monitor crop progress, troubleshoot issues, and ensure optimal product application.' },
        { q: 'Do you offer ongoing farm maintenance programs?', a: 'Yes, we provide seasonal maintenance packages. These include regular field scouting, preventative disease management protocols, and adaptive fertilization scheduling to ensure long-term soil health and high yields.' },
        { q: 'Can you develop custom solutions for unique crop needs?', a: 'Absolutely. Our R&D facility specializes in formulating custom biological and chemical solutions tailored specifically to your soil profile, crop variety, and localized environmental challenges.' },
        { q: 'What is the process to get started and contact an expert?', a: 'Getting started is simple. Fill out the contact form below with your details and specific requirements. One of our lead agronomists will reach out within 24 hours to schedule a comprehensive consultation.' }
    ];

    // --- Navbar ---
    const nav = document.querySelector('nav > div');
    const navTexts = document.querySelectorAll('.nav-text');
    const logoText = document.querySelector('.logo-text');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
            nav.classList.remove('bg-black/10', 'backdrop-blur-sm', 'border-white/10', 'rounded-full', 'py-4', 'px-10');
            nav.classList.add('py-3', 'px-6');
            logoText?.classList.remove('text-white');
            logoText?.classList.add('text-agri-dark');
        } else {
            nav.classList.remove('nav-scrolled');
            nav.classList.add('bg-black/10', 'backdrop-blur-sm', 'border-white/10', 'rounded-full', 'py-4', 'px-10');
            nav.classList.remove('py-3', 'px-6');
            logoText?.classList.remove('text-agri-dark');
            logoText?.classList.add('text-white');
        }
    });

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Close mobile menu on link click
    document.querySelectorAll('#mobile-menu div').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // --- Modal ---
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    function openModal(title, content) {
        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeModalButtons.forEach(btn => btn.addEventListener('click', closeModal));
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // --- Render Products ---
    const productGrid = document.getElementById('product-grid');
    products.forEach((product, i) => {
        const item = document.createElement('div');
        item.className = `reveal flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-32 items-center`;

        const benefitsHtml = product.benefits.map(b => `
            <div class="px-6 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-600 border border-slate-200">
                ${b}
            </div>
        `).join('');

        item.innerHTML = `
            <div class="lg:w-1/2 relative group w-full">
                <div class="absolute -inset-4 ${product.colorClass} opacity-10 rounded-[3rem] -z-10 transform scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                <div class="rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-50 border border-slate-100 p-8 lg:p-12 flex justify-center items-center aspect-square lg:aspect-[4/3]">
                    <img src="${product.img}" alt="${product.title}" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000 drop-shadow-2xl">
                </div>
                <div class="absolute top-10 left-10 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-xl">
                    <span class="text-agri-dark font-black uppercase tracking-widest text-[10px]">${product.type}</span>
                </div>
            </div>

            <div class="lg:w-1/2 w-full ${i % 2 !== 0 ? 'lg:text-right' : 'lg:text-left'}">
                <div class="mb-10">
                    <h3 class="text-4xl lg:text-6xl font-black text-agri-dark mb-4 leading-none">${product.title}</h3>
                    <div class="w-20 h-1.5 ${product.colorClass} ${i % 2 !== 0 ? 'ml-auto' : ''}"></div>
                    <p class="text-agri-green-600 font-bold uppercase tracking-[0.4em] text-[10px] mt-6">${product.subtitle}</p>
                </div>
                
                <p class="text-slate-500 text-lg leading-relaxed mb-12 max-w-xl ${i % 2 !== 0 ? 'ml-auto' : ''}">
                    ${product.description}
                </p>

                <div class="flex flex-wrap gap-4 mb-12 ${i % 2 !== 0 ? 'justify-end' : 'justify-start'}">
                    ${benefitsHtml}
                </div>

                <button class="product-info-btn bg-agri-dark text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-agri-green-600 transition-all flex items-center gap-3 group/btn inline-flex" data-index="${i}">
                    Product Information <i data-lucide="arrow-right" class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"></i>
                </button>
            </div>
        `;
        productGrid.appendChild(item);
    });

    // --- Render News ---
    const newsGrid = document.getElementById('news-grid');
    news.forEach((item, i) => {
        const newsItem = document.createElement('div');
        newsItem.className = 'reveal group relative flex flex-col lg:flex-row items-center gap-12 bg-white p-12 hover:bg-slate-50 transition-colors cursor-pointer border-b border-slate-100 last:border-0';
        newsItem.innerHTML = `
            <div class="lg:w-1/4 shrink-0 overflow-hidden rounded-2xl relative aspect-square w-full">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 bg-slate-100">
                <div class="absolute inset-0 bg-agri-green-500/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div class="lg:w-2/4">
                <div class="text-agri-green-600 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-3">
                    <div class="w-8 h-px bg-current"></div>
                    ${item.date}
                </div>
                <h3 class="text-3xl font-black text-agri-dark group-hover:text-agri-green-600 transition-colors mb-4 leading-tight uppercase tracking-tight">${item.title}</h3>
                <p class="text-slate-400 text-sm max-w-lg leading-relaxed">${item.desc}</p>
            </div>

            <div class="lg:w-1/4 flex lg:justify-end items-center">
                <div class="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] lg:transform lg:translate-x-4 lg:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    READ ARTICLE <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </div>
            </div>
        `;
        newsItem.addEventListener('click', () => {
            const content = `
                <div class="space-y-6">
                    <div class="text-agri-green-600 font-black uppercase tracking-widest text-xs">${item.date}</div>
                    <h2 class="text-3xl font-black text-agri-dark uppercase leading-tight">${item.title}</h2>
                    <p class="text-slate-600 leading-relaxed text-lg italic border-l-4 border-agri-green-500 pl-6 py-2">
                        ${item.desc}
                    </p>
                    <p class="text-slate-500 leading-relaxed">
                        Hyderabad, India — Agrizen Crop Care Group continues its mission to provide sustainable agricultural solutions. Our latest initiative involves a nation-wide series of training modules and technological upgrades for distribution partners.
                    </p>
                    <div class="aspect-video rounded-2xl overflow-hidden bg-slate-100">
                        <img src="${item.img}" class="w-full h-full object-cover" alt="News">
                    </div>
                </div>
            `;
            openModal("Agrizen News Update", content);
        });
        newsGrid.appendChild(newsItem);
    });

    // --- Render FAQ ---
    const faqContainer = document.getElementById('faq-container');
    faqs.forEach((faq, i) => {
        const item = document.createElement('div');
        item.className = 'border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white transition-all duration-300 faq-item';
        item.innerHTML = `
            <button class="faq-toggle w-full p-6 text-left flex justify-between items-center bg-transparent hover:bg-slate-50 transition-colors group">
                <span class="font-bold text-agri-dark pr-8 text-lg group-hover:text-agri-green-600 transition-colors">${faq.q}</span>
                <div class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-agri-green-50 transition-colors">
                    <i data-lucide="chevron-down" class="w-4 h-4 text-agri-green-600 transition-transform duration-300 faq-icon"></i>
                </div>
            </button>
            <div class="faq-content grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 bg-slate-50/50">
                <div class="overflow-hidden">
                    <div class="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50 mt-2">
                        <div class="pt-4 text-[15px]">${faq.a}</div>
                    </div>
                </div>
            </div>
        `;
        const btn = item.querySelector('.faq-toggle');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');

        btn.addEventListener('click', () => {
            const isOpen = content.classList.contains('grid-rows-[1fr]');

            // Close others
            document.querySelectorAll('.faq-content').forEach(c => {
                c.classList.remove('grid-rows-[1fr]');
                c.classList.add('grid-rows-[0fr]');
            });
            document.querySelectorAll('.faq-icon').forEach(i => {
                i.style.transform = 'rotate(0deg)';
            });
            document.querySelectorAll('.faq-item').forEach(el => {
                el.classList.remove('shadow-md', 'border-agri-green-500/30');
            });

            if (!isOpen) {
                content.classList.remove('grid-rows-[0fr]');
                content.classList.add('grid-rows-[1fr]');
                icon.style.transform = 'rotate(180deg)';
                item.classList.add('shadow-md', 'border-agri-green-500/30');
            }
        });
        faqContainer.appendChild(item);
    });

    // Initialize the first FAQ
    const firstFaq = faqContainer.querySelector('.faq-toggle');
    if (firstFaq) setTimeout(() => firstFaq.click(), 100);

    // --- Scroll Reveal ---
    function reveal() {
        const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    // --- Media Queries / Event Listeners ---
    document.querySelectorAll('.product-info-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.getAttribute('data-index');
            const product = products[index];
            const content = `
                <div class="space-y-6">
                    <div class="flex items-center gap-6 border-b border-slate-100 pb-6">
                        <div class="w-24 h-24 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-2 shrink-0 flex items-center justify-center">
                            <img src="${product.img}" alt="${product.title}" class="w-full h-full object-contain drop-shadow-md">
                        </div>
                        <div>
                            <h4 class="text-2xl font-black text-agri-dark uppercase tracking-tight">${product.title}</h4>
                            <p class="text-agri-green-600 font-bold uppercase tracking-[0.2em] text-[10px] mt-1">${product.subtitle}</p>
                            <span class="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 mt-2 border border-slate-200">${product.category}</span>
                        </div>
                    </div>
                    <p class="text-slate-600 leading-relaxed text-sm">
                        ${product.description}
                    </p>
                    
                    ${product.recommendedCrops || product.dosage || product.packSizes ? `
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3">
                        ${product.recommendedCrops ? `<div><span class="font-bold text-agri-dark text-sm">Recommended Crops:</span> <span class="text-slate-600 text-sm">${product.recommendedCrops}</span></div>` : ''}
                        ${product.dosage ? `<div><span class="font-bold text-agri-dark text-sm">Dosage & Application:</span> <span class="text-slate-600 text-sm">${product.dosage}</span></div>` : ''}
                        ${product.packSizes ? `<div><span class="font-bold text-agri-dark text-sm">Available Pack Sizes:</span> <span class="text-slate-600 text-sm">${product.packSizes}</span></div>` : ''}
                    </div>` : ''}

                    <div>
                        <h5 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Key Benefits</h5>
                        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            ${product.benefits.map(b => `<li class="flex items-center gap-2 text-sm text-slate-600"><i data-lucide="check-circle-2" class="w-4 h-4 text-agri-green-500 shrink-0"></i> ${b}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
            openModal(`Product Details`, content);
            lucide.createIcons();
        });
    });

    document.querySelectorAll('.video-play-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const title = btn.getAttribute('data-title') || "Corporate Showcase";
            const content = `
                <div class="aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center relative group">
                    <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800" class="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm" alt="Video Preview">
                    <div class="relative z-10 flex flex-col items-center">
                        <button onclick="alert('Initiating secure media stream...')" class="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 hover:bg-white/30 transition-all">
                            <i data-lucide="arrow-right" class="text-white w-10 h-10 ml-2"></i>
                        </button>
                        <p class="text-white font-bold mt-4 uppercase tracking-widest text-xs">Click to Play Media</p>
                    </div>
                </div>
            `;
            openModal(title, content);
            lucide.createIcons();
        });
    });

    // --- Form Submissions ---
    const contactForm = document.getElementById('contact-form');
    const contactSuccess = document.getElementById('contact-success');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactForm.classList.add('hidden');
            contactSuccess.classList.remove('hidden');
            contactForm.reset();
        });
    }

    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterSuccess = document.getElementById('newsletter-success');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            newsletterForm.classList.add('hidden');
            newsletterSuccess.classList.remove('hidden');
            setTimeout(() => {
                newsletterForm.classList.remove('hidden');
                newsletterSuccess.classList.add('hidden');
                newsletterForm.reset();
            }, 5000);
        });
    }

    // --- Chatbot Logic ---
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');
    const closeChatbotBtn = document.getElementById('close-chatbot');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSuggestionsContainer = document.getElementById('chatbot-suggestions');
    const chatbotLangSelect = document.getElementById('chatbot-lang');

    let chatIsOpen = false;
    let currentLang = 'en';

    const translations = {
        en: {
            welcome: "Hello! I am Agrizen AI. How can I help you today with your crops or our products?",
            fallback: "Please contact our support team for more details. You can use the quick actions below.",
            typing: "typing...",
            suggestionsTitle: "Suggested Questions"
        },
        hi: {
            welcome: "नमस्ते! मैं Agrizen AI हूँ। आज मैं आपकी फसलों या हमारे उत्पादों के संबंध में कैसे मदद कर सकता हूँ?",
            fallback: "कृपया अधिक जानकारी के लिए हमारी सहायता टीम से संपर्क करें। आप नीचे दिए गए त्वरित कार्यों का उपयोग कर सकते हैं।",
            typing: "टाइप कर रहा है...",
            suggestionsTitle: "सुझाए गए प्रश्न"
        },
        te: {
            welcome: "నమస్కారం! నేను Agrizen AI ని. ఈ రోజు మీ పంటలు లేదా మా ఉత్పత్తులతో నేను మీకు ఎలా సహాయపడగలను?",
            fallback: "మరిన్ని వివరాల కోసం దయచేసి మా మద్దతు బృందాన్ని సంప్రదించండి. మీరు దిగువ త్వరిత చర్యలను ఉపయోగించవచ్చు.",
            typing: "టైప్ చేస్తున్నారు...",
            suggestionsTitle: "సూచించబడిన ప్రశ్నలు"
        }
    };

    const knowledgeBase = [
        {
            keywords: ['paddy', 'rice', 'stem borer', 'borer', 'వరి', 'ధాన్యం', 'కాండం తొలిచే పురుగు', 'धान', 'चावल', 'तना छेदक'],
            response: {
                en: "For Paddy (Rice) crops, especially against pests like stem borers, we highly recommend <b>BISON</b>. It's a broad-spectrum insecticide providing long-lasting protection. Dosage: 2-3 ml per liter of water.",
                hi: "धान (चावल) की फसल में, विशेष रूप से तना छेदक जैसे कीटों के खिलाफ, हम <b>BISON</b> की सिफारिश करते हैं। यह एक व्यापक-स्पेक्ट्रम कीटनाशक है जो लंबे समय तक सुरक्षा प्रदान करता है। मात्रा: 2-3 मिली प्रति लीटर पानी।",
                te: "వరి పంటలో, ముఖ్యంగా కాండం తొలిచే పురుగులకు వ్యతిరేకంగా, మేము <b>BISON</b> ని సిఫారసు చేస్తున్నాము. ఇది విస్తృత-స్పెక్ట్రమ్ పురుగుమందు, దీర్ఘకాలిక రక్షణ అందిస్తుంది. మోతాదు: లీటరు నీటికి 2-3 మి.లీ."
            }
        },
        {
            keywords: ['cotton', 'whiteflies', 'aphids', 'mites', 'sucking pests', 'pest', 'పత్తి', 'తెల్ల దోమలు', 'పేను పురుగులు', 'कपास', 'सफेद मक्खी', 'चूसने वाले कीट'],
            response: {
                en: "To protect Cotton and other crops from sucking pests like whiteflies and aphids, <b>AGRINEEM</b> is excellent. It's a botanical biostimulant that forms a protective layer. Dosage: 2.5 ml per liter of water.",
                hi: "कपास और अन्य फसलों को सफेद मक्खी और चूसने वाले कीटों से बचाने के लिए <b>AGRINEEM</b> उत्कृष्ट है। यह एक वनस्पति बायोस्टिमुलेंट है। मात्रा: 2.5 मिली प्रति लीटर पानी।",
                te: "పత్తి మరియు ఇతర పంటలను తెల్ల దోమలు, పేను పురుగుల నుండి రక్షించడానికి <b>AGRINEEM</b> అద్భుతంగా పనిచేస్తుంది. ఇది వృక్షసంబంధ బయోస్టిమ్యులెంట్. మోతాదు: లీటరు నీటికి 2.5 మి.లీ."
            }
        },
        {
            keywords: ['weed', 'weeds', 'herbicide', 'కలుపు మొక్కలు', 'खरपतवार'],
            response: {
                en: "For effective weed control, it depends on the crop. Generally, applying pre-emergent or post-emergent herbicides selectively is best. Please contact our agronomy team for specific weed management plans.",
                hi: "खरपतवार नियंत्रण के लिए, यह फसल पर निर्भर करता है। सामान्यतः, पूर्व-उद्भव या पश्च-उद्भव शाकनाशियों का चयनात्मक उपयोग सर्वोत्तम है। कृपया हमारी एग्रोनॉमी टीम से संपर्क करें।",
                te: "కలుపు నియంత్రణ కోసం, అది పంటపై ఆధారపడి ఉంటుంది. సాధారణంగా, ముందస్తు లేదా తర్వాత శాకనాశకాలు ఉపయోగించడం ఉత్తమం. మా వ్యవసాయ నిపుణులను సంప్రదించండి."
            }
        },
        {
            keywords: ['disease', 'fungus', 'scab', 'bacterial', 'fungicide', 'వ్యాధి', 'శిలీంద్రం', 'బ్యాక్టీరియా', 'रोग', 'फफूंद', 'जीवाणु'],
            response: {
                en: "To protect against bacterial infections and scab diseases, we recommend <b>AGRIMYCIN</b>, our natural antibiotic formulation. It ensures disease-free crops and high fruit quality.",
                hi: "बैक्टीरियल संक्रमण और स्कैब रोगों से बचाव के लिए हम <b>AGRIMYCIN</b> की सिफारिश करते हैं। यह प्राकृतिक एंटीबायोटिक फॉर्मूलेशन है जो रोग-मुक्त फसल और उच्च गुणवत्ता सुनिश्चित करता है।",
                te: "బ్యాక్టీరియల్ అంటువ్యాధులు మరియు స్కాబ్ వ్యాధుల నుండి రక్షణ కోసం <b>AGRIMYCIN</b> సిఫారసు చేస్తున్నాము. ఇది సహజ యాంటీబయాటిక్ ఫార్ములేషన్, వ్యాధి-రహిత పంటలు మరియు అధిక నాణ్యత నిర్ధారిస్తుంది."
            }
        },
        {
            keywords: ['dosage', 'how much', 'per acre', 'quantity', 'మోతాదు', 'ఎంత వాడాలి', 'మात्रा', 'कितना'],
            response: {
                en: "Dosage varies by product. For foliar sprays (like Agri Soil or Agri-K C.M.B), generally 2-4 ml per liter of water is used. For soil application, 500 ml to 1 liter per acre is common.",
                hi: "मात्रा उत्पाद के अनुसार अलग होती है। पत्तियों पर छिड़काव के लिए (जैसे Agri Soil) आमतौर पर 2-4 मिली प्रति लीटर पानी उपयोग होती है। मिट्टी अनुप्रयोग के लिए, 500 मिली से 1 लीटर प्रति एकड़।",
                te: "మోతాదు ఉత్పత్తిని బట్టి మారుతుంది. ఆకు పిచికారీ కోసం (Agri Soil లాంటివి) సాధారణంగా లీటరు నీటికి 2-4 మి.లీ వాడతారు. నేల అనువర్తనానికి, ఎకరాకు 500 మి.లీ నుండి 1 లీటరు వాడతారు."
            }
        },
        {
            keywords: ['bulk', 'distributor', 'order', 'pricing', 'price', 'cost', 'ధర', 'బల్క్', 'ఆర్డర్', 'मूल्य', 'थोक', 'ऑर्डर'],
            response: {
                en: "We offer competitive tiered pricing for bulk orders and distributor partnerships. Please reach out via the 'Contact Us' page or email Agrizencropcare@gmail.com.",
                hi: "हम थोक ऑर्डर और वितरक साझेदारी के लिए प्रतिस्पर्धी मूल्य प्रदान करते हैं। कृपया 'Contact Us' पेज या Agrizencropcare@gmail.com पर संपर्क करें।",
                te: "మేము బల్క్ ఆర్డర్లు మరియు డిస్ట్రిబ్యూటర్ భాగస్వామ్యాలకు పోటీ ధరలు అందిస్తాము. దయచేసి 'Contact Us' పేజీ లేదా Agrizencropcare@gmail.com కి సంప్రదించండి."
            }
        },
        {
            keywords: ['organic', 'natural', 'biological', 'సేంద్రీయ', 'సహజ', 'जैविक', 'प्राकृतिक'],
            response: {
                en: "We have several excellent organic/biological solutions like <b>AGRINEEM</b> (botanical biostimulant) and <b>AGRIVAM</b> (Mycorrhizal biofertilizer) which are naturally derived and safe for sustainable farming.",
                hi: "हमारे पास कई उत్कृष्ट जैविक समाधान हैं जैसे <b>AGRINEEM</b> (वनस्पति बायोस्टिमुलेंट) और <b>AGRIVAM</b> (माइकोराइज़ल बायोफर्टिलाइज़र) जो टिकाऊ खेती के लिए सुरक्षित हैं।",
                te: "మాకు <b>AGRINEEM</b> (వృక్షసంబంధ బయోస్టిమ్యులెంట్) మరియు <b>AGRIVAM</b> (మైకోరైజల్ బయోఫెర్టిలైజర్) వంటి అనేక సేంద్రీయ/జీవ పరిష్కారాలు ఉన్నాయి, ఇవి సుస్థిర వ్యవసాయానికి సురక్షితంగా ఉంటాయి."
            }
        },
        {
            keywords: ['contact', 'support', 'call', 'help', 'whatsapp', 'email', 'సంప్రదించు', 'సహాయం', 'संपर्क', 'सहायता'],
            response: {
                en: "You can reach our expert support team via phone at <b>+91 9719 717 666</b> or email at <b>Agrizencropcare@gmail.com</b>. You can also use the quick action buttons below.",
                hi: "आप हमारी विशेषज्ञ सहायता टीम से <b>+91 9719 717 666</b> पर कॉल करके या <b>Agrizencropcare@gmail.com</b> पर ईमेल करके संपर्क कर सकते हैं।",
                te: "మీరు మా నిపుణుల మద్దతు బృందాన్ని <b>+91 9719 717 666</b> కి కాల్ చేయడం ద్వారా లేదా <b>Agrizencropcare@gmail.com</b> కి ఇమెయిల్ చేయడం ద్వారా సంప్రదించవచ్చు."
            }
        },
        {
            keywords: ['safety', 'precautions', 'spraying', 'భద్రత', 'జాగ్రత్తలు', 'छिड़काव', 'सुरक्षा'],
            response: {
                en: "Safety first! Always wear protective gear (gloves, mask, goggles) while spraying. Spray in the morning or late evening, avoid windy conditions, and never spray near water bodies.",
                hi: "सुरक्षा पहले! छिड़काव करते समय हमेशा सुरक्षात्मक उपकरण (दस्ताने, मास्क, चश्मा) पहनें। सुबह या देर शाम छिड़काव करें, तेज हवा से बचें और जल निकायों के पास कभी छिड़काव न करें।",
                te: "భద్రత ముందు! పిచికారీ చేసేటప్పుడు ఎల్లప్పుడూ రక్షణ సామగ్రి (చేతి తొడుగులు, మాస్క్, కళ్ళద్దాలు) ధరించండి. ఉదయం లేదా సాయంత్రం పిచికారీ చేయండి, గాలి వాతావరణంలో మానుకోండి, నీటి వనరుల దగ్గర ఎప్పుడూ పిచికారీ చేయకండి."
            }
        }
    ];

    const smartFAQs = {
        en: [
            "Best pesticide for paddy crop",
            "How to control stem borer in rice?",
            "Which product is used for cotton pests?",
            "What pesticide is best for weeds?",
            "How much dosage should be used per acre?",
            "Do you provide bulk orders?",
            "How can I contact support?",
            "Safety precautions while spraying"
        ],
        hi: [
            "धान की फसल के लिए सबसे अच्छा कीटनाशक",
            "चावल में तना छेदक कैसे नियंत्रित करें?",
            "कपास के कीटों के लिए कौन सा उत्पाद है?",
            "खरपतवार के लिए सबसे अच्छा कीटनाशक?",
            "प्रति एकड़ कितनी मात्रा उपयोग करें?",
            "क्या आप थोक ऑर्डर देते हैं?",
            "सहायता से संपर्क कैसे करें?",
            "छिड़काव के दौरान सुरक्षा सावधानियां"
        ],
        te: [
            "వరి పంటకు ఉత్తమ పురుగుమందు",
            "వరిలో కాండం తొలిచే పురుగును నియంత్రించడం ఎలా?",
            "పత్తి పురుగులకు ఏ ఉత్పత్తి వాడాలి?",
            "కలుపు మొక్కలకు ఉత్తమ పురుగుమందు?",
            "ఎకరాకు ఎంత మోతాదు వాడాలి?",
            "మీరు బల్క్ ఆర్డర్లు అందిస్తారా?",
            "మద్దతును ఎలా సంప్రదించాలి?",
            "పిచికారీ చేసేటప్పుడు భద్రతా జాగ్రత్తలు"
        ]
    };

    function toggleChatbot() {
        chatIsOpen = !chatIsOpen;
        if (chatIsOpen) {
            chatbotContainer.classList.add('active');
            const unreadBadge = chatbotToggle.querySelector('span');
            if (unreadBadge) unreadBadge.style.display = 'none'; // Hide badge when opened
            if (chatbotMessages.children.length === 0) {
                addMessage(translations[currentLang].welcome, 'bot');
                addQuickActions();
            }
            // focus input
            setTimeout(() => chatbotInput.focus(), 300);
        } else {
            chatbotContainer.classList.remove('active');
        }
    }

    if (chatbotToggle && closeChatbotBtn) {
        chatbotToggle.addEventListener('click', toggleChatbot);
        closeChatbotBtn.addEventListener('click', toggleChatbot);
    }

    if (chatbotLangSelect) {
        chatbotLangSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            const titleEl = document.getElementById('faq-suggestions-title');
            if (titleEl) titleEl.textContent = translations[currentLang].suggestionsTitle;
            addMessage(translations[currentLang].welcome, 'bot');
            renderSmartFAQs();
        });
    }

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'} chat-message w-full`;
        
        const bubble = document.createElement('div');
        bubble.className = `max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
            sender === 'user' 
                ? 'bg-agri-green-600 text-white rounded-tr-sm' 
                : 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm'
        }`;
        bubble.innerHTML = text;
        
        msgDiv.appendChild(bubble);
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function addQuickActions() {
        const msgDiv = document.createElement('div');
        msgDiv.className = `flex justify-start chat-message mt-1 w-full`;
        msgDiv.innerHTML = `
            <div class="flex gap-2 flex-wrap max-w-[95%]">
                <a href="https://wa.me/919719717666" target="_blank" class="flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 text-[#25D366] rounded-xl text-[11px] font-bold hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20">
                    <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> WhatsApp
                </a>
                <a href="tel:+919719717666" class="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 text-blue-600 rounded-xl text-[11px] font-bold hover:bg-blue-500/20 transition-colors border border-blue-500/20">
                    <i data-lucide="phone" class="w-3.5 h-3.5"></i> Call Now
                </a>
                <a href="mailto:Agrizencropcare@gmail.com" class="flex items-center gap-1.5 px-3 py-1.5 bg-slate-500/10 text-slate-600 rounded-xl text-[11px] font-bold hover:bg-slate-500/20 transition-colors border border-slate-500/20">
                    <i data-lucide="mail" class="w-3.5 h-3.5"></i> Email
                </a>
            </div>
        `;
        chatbotMessages.appendChild(msgDiv);
        lucide.createIcons();
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const msgDiv = document.createElement('div');
        msgDiv.id = 'typing-indicator';
        msgDiv.className = `flex justify-start chat-message w-full`;
        msgDiv.innerHTML = `
            <div class="max-w-[85%] rounded-2xl p-3 bg-white border border-slate-100 rounded-tl-sm flex items-center gap-1">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        `;
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function hideTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }

    function getBotResponse(input) {
        const lowerInput = input.toLowerCase();
        let bestMatch = null;
        let highestMatches = 0;

        for (const entry of knowledgeBase) {
            let matches = 0;
            for (const keyword of entry.keywords) {
                if (lowerInput.includes(keyword)) {
                    matches++;
                }
            }
            if (matches > highestMatches) {
                highestMatches = matches;
                bestMatch = entry.response;
            }
        }

        if (bestMatch) {
            return bestMatch[currentLang] || bestMatch['en'];
        }
        return translations[currentLang].fallback;
    }

    function renderSmartFAQs() {
        if (!chatbotSuggestionsContainer) return;
        chatbotSuggestionsContainer.innerHTML = '';
        const faqs = smartFAQs[currentLang] || smartFAQs['en'];
        faqs.forEach(faq => {
            const btn = document.createElement('button');
            btn.className = 'px-3 py-1.5 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl text-xs font-medium hover:bg-agri-green-50 hover:text-agri-green-600 hover:border-agri-green-200 transition-colors shrink-0 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-agri-green-500/30';
            btn.textContent = faq;
            btn.addEventListener('click', () => {
                handleUserInput(faq);
            });
            chatbotSuggestionsContainer.appendChild(btn);
        });
    }

    function handleUserInput(text) {
        if (!text.trim()) return;
        addMessage(text, 'user');
        if (chatbotInput) chatbotInput.value = '';
        
        showTypingIndicator();
        
        // Simulate network delay
        setTimeout(() => {
            hideTypingIndicator();
            const response = getBotResponse(text);
            addMessage(response, 'bot');
            
            // Re-add quick actions occasionally or specifically for fallback/contact
            if (response === translations[currentLang].fallback || text.toLowerCase().includes('contact') || text.toLowerCase().includes('support')) {
                addQuickActions();
            }
        }, 1000);
    }

    if (chatbotForm) {
        chatbotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (chatbotInput) handleUserInput(chatbotInput.value);
        });
    }

    renderSmartFAQs();

    // Initialize Lucide icons
    lucide.createIcons();
});
