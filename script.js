// ===== DATA (moved from React data files) =====
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Packages', href: '#packages-slider-section' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Choose Us', href: '#why-choose-us' },

  { name: 'Contact', href: '#contact' },
];

const contactInfo = {
  phone: ['961 86 59', '0920 514 8917', '0977 189 05 16'],
  email: 'dphotoboothco@gmail.com',
  facebook: 'https://facebook.com/dphotoboothco',
  messenger: 'https://m.me/dphotoboothco',
};

const photoboothTypes = [
  { id: 1, title: 'Classic Photobooth', description: 'The timeless photobooth experience with professional lighting and instant prints.', image: 'images/package1.png' },
  { id: 2, title: 'Mirror Photobooth', description: 'Interactive full-length mirror booth with animated touchscreen interface.', image: 'images/package3.png' },
  { id: 3, title: 'Toon Me Booth', description: 'AI-powered cartoon style photo transformation for fun and unique keepsakes.', image: 'images/package5.png' },
  { id: 4, title: '360 Booth', description: 'Slow-motion 360-degree video booth for stunning social media content.', image: 'images/package7.png' },
];

const services = [
  { id: 1, title: '4R', category: 'Standard Prints', description: 'One (1) 4R Size Photo per Session. 3 to 4 Frame Template (No. of Shot).', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', basePrice: 'PHP 2,500', duration: '2 Hours', pricing: { base: { label: '2 Hours', price: 'PHP 2,500' }, magnet: { label: 'Full Magnet', price: 'PHP 1,500' }, extension: { label: 'Extension per Hour', price: 'PHP 1,000' }, extensionMagnet: { label: 'Extension per Hour w/ Magnet', price: 'PHP 1,500' } } },
  { id: 2, title: 'Strip Bookmark', category: 'Standard Prints', description: 'Two (2) Photo Strips per Session. 3 to 4 Frame Template (No. of Shot).', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', basePrice: 'PHP 2,500', duration: '2 Hours', pricing: { base: { label: '2 Hours', price: 'PHP 2,500' }, magnet: { label: 'Full Magnet', price: 'PHP 1,500' }, extension: { label: 'Extension per Hour', price: 'PHP 1,000' }, extensionMagnet: { label: 'Extension per Hour w/ Magnet', price: 'PHP 1,500' } } },
  { id: 3, title: 'Dedication Strip', category: 'Standard Prints', description: 'Two (2) Photo Strips per Session. 3 to 4 Frame Template. 1 Shot with Photos, 1 Shot for Dedication.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80', basePrice: 'PHP 3,000', duration: '2 Hours', pricing: { base: { label: '2 Hours', price: 'PHP 3,000' }, magnet: { label: 'Full Magnet (1 Side)', price: 'PHP 1,000' }, extension: { label: 'Extension per Hour', price: 'PHP 1,000' }, extensionMagnet: { label: 'Extension per Hour w/ Magnet', price: 'PHP 1,000' } } },
  { id: 4, title: 'Polaroid', category: 'Premium Prints', description: 'Two (2) Portrait & Polaroid per Session. 1 Frame Template (No. of Shot).', image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80', basePrice: 'PHP 4,000', duration: '2 Hours', pricing: { base: { label: '2 Hours', price: 'PHP 4,000' }, magnet: { label: 'Full Magnet', price: 'PHP 1,500' }, extension: { label: 'Extension per Hour', price: 'PHP 1,000' }, extensionMagnet: { label: 'Extension per Hour w/ Magnet', price: 'PHP 1,500' } } },
  { id: 5, title: 'Single Frame', category: 'Premium Prints', description: 'One (1) Photo 4R Single Shot per Session. 1 Frame Template (No. of Shot).', image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80', basePrice: 'PHP 4,500', duration: '2 Hours', pricing: { base: { label: '2 Hours', price: 'PHP 4,500' }, magnet: { label: 'Full Magnet', price: 'PHP 1,500' }, extension: { label: 'Extension per Hour', price: 'PHP 1,500' }, extensionMagnet: { label: 'Extension per Hour w/ Magnet', price: 'PHP 1,500' } } },
  { id: 6, title: 'Toon Me Booth', category: 'Special', description: 'Enjoy Package with AI-powered cartoon style photo transformation.', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80', basePrice: 'PHP 8,500', duration: '', pricing: { base: { label: 'Enjoy Package', price: 'PHP 8,500' } }, isPopular: true },
];

const printStyles = [
  { category: 'Standard Prints', items: ['Frame Standee', 'Strip Bookmark', 'Dedication Strip'] },
  { category: 'Magnetic Prints', items: ['Full Magnet', 'Magnet Strip', 'Dedication Strip Magnet', 'Polaroid Magnet'] },
  { category: 'Premium Prints', items: ['Polaroid Standee', 'Full Magnet Polaroid'] },
];

const whyChooseUs = [
  { title: 'Established & Trusted Since 2017', description: 'Nearly a decade of experience serving hundreds of events across the Philippines.' },
  { title: 'Professional & Experienced Team', description: 'Skilled attendants and support staff dedicated to making your event flawless.' },
  { title: 'High-Resolution DSLR System', description: 'Professional-grade camera equipment for crisp, vibrant photos every time.' },
  { title: 'Studio-Quality Lighting', description: 'Professional lighting setup ensures perfect photos regardless of venue conditions.' },
  { title: 'Instant High-Quality Prints', description: 'Guests walk away with premium printed photos instantly — no waiting.' },
  { title: 'Unlimited Photo Sessions', description: 'No cap on fun — unlimited photo sessions throughout your entire event.' },
  { title: 'Customized Photo Layouts & Branding', description: 'Personalized templates with your names, date, logos, and event theme.' },
  { title: 'Fun Props & Premium Backdrops', description: 'Wide selection of themed props and backdrops to match any celebration.' },
  { title: 'Reliable Setup & On-Site Support', description: 'We arrive early and stay until the last guest — hassle-free and worry-free.' },
  { title: 'Affordable Packages', description: 'Flexible and budget-friendly options without compromising on quality.' },
  { title: 'Customized Solutions', description: 'Tailored packages for corporate and private events to match your specific needs.' },
];

const packages = [
  { id: 1, name: 'Standard Prints', image: 'images/package1.png', items: [{ name: '4R', price: 'PHP 2,500', duration: '2 Hours' }, { name: 'Strip Bookmark', price: 'PHP 2,500', duration: '2 Hours' }, { name: 'Dedication Strip', price: 'PHP 3,000', duration: '2 Hours' }], addOns: [{ name: 'Full Magnet', price: 'PHP 1,500' }, { name: 'Extension per Hour', price: 'PHP 1,000' }, { name: 'Extension per Hour w/ Magnet', price: 'PHP 1,500' }], popular: false },
  { id: 2, name: 'Premium Prints', image: 'images/package3.png', items: [{ name: 'Polaroid', price: 'PHP 4,000', duration: '2 Hours' }, { name: 'Single Frame', price: 'PHP 4,500', duration: '2 Hours' }], addOns: [{ name: 'Full Magnet', price: 'PHP 1,500' }, { name: 'Extension per Hour', price: 'PHP 1,000 - 1,500' }, { name: 'Extension per Hour w/ Magnet', price: 'PHP 1,500' }], popular: true },
  { id: 3, name: 'Special', image: 'images/package5.png', items: [{ name: 'Toon Me Booth', price: 'PHP 8,500', duration: 'Enjoy Package' }], addOns: [], popular: false },
];

const eventTypes = [
  { title: 'Corporate Events', description: 'Company Anniversaries, Product Launches, Conferences, Seminars, Team Building, Christmas Parties, Trade Shows & More.', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80' },
  { title: 'Social Celebrations', description: 'Weddings, Birthdays, Debuts, Anniversaries, Baptisms, Baby Showers, Family Reunions, Gender Reveal Parties.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80' },
  { title: 'School & Community', description: 'Graduation, Recognition Day, Foundation Day, Alumni Homecoming, School Fairs, Church & Community Events.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80' },
  { title: 'Special Events', description: 'Fashion Shows, Fun Runs, Festivals, Exhibitions, Government Programs, Brand Activations, Private Parties.', image: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=400&q=80' },
];

const processSteps = [
  { title: 'Book', description: 'Choose your package and secure your date.' },
  { title: 'Customize', description: 'Personalize frames, backdrops, and props.' },
  { title: 'Setup', description: 'We arrive early and set up everything.' },
  { title: 'Smile', description: 'Your guests enjoy unlimited photo sessions.' },
  { title: 'Print', description: 'Instant high-quality prints for everyone.' },
  { title: 'Receive Digital Copies', description: 'All photos delivered online after event.' },
];

const testimonials = [
  { id: 1, name: 'Maria Santos', role: 'Wedding Client', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80', rating: 5, text: 'The Photobooth Co. made our wedding reception unforgettable! Our guests couldn\'t stop taking photos. The quality of the prints and the professionalism of the staff were outstanding.' },
  { id: 2, name: 'Juan Dela Cruz', role: 'Corporate Event', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80', rating: 5, text: 'We hired them for our company annual party and it was a huge hit. The setup was fast, the attendants were friendly, and the digital copies made sharing easy. Highly recommended!' },
  { id: 3, name: 'Anna Reyes', role: 'Birthday Party', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80', rating: 5, text: 'My daughter\'s 7th birthday was extra special because of The Photobooth Co. The kids loved the props and the Toon Me feature was a showstopper! Will definitely book again.' },
  { id: 4, name: 'Carlos Mendoza', role: 'Debut Client', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80', rating: 5, text: 'Absolutely phenomenal service! The dedication strips were a beautiful touch for my daughter\'s debut. Every detail was handled with care and professionalism.' },
  { id: 5, name: 'Tricia Go', role: 'Reunion Organizer', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80', rating: 5, text: 'Our family reunion was made so much more fun with the photo booth. Three generations had a blast posing with props. The digital album they sent after was the cherry on top!' },
];



const faqs = [
  { id: 1, question: 'How far in advance should I book?', answer: 'We recommend booking at least 2\u20134 weeks in advance to secure your preferred date. However, we do accommodate last-minute bookings depending on availability. Reach out to us and we\'ll do our best to fit your event!' },
  { id: 2, question: 'What areas do you serve?', answer: 'We primarily serve Metro Manila and nearby provinces. For events outside our standard service area, additional travel fees may apply. Contact us for a customized quote.' },
  { id: 3, question: 'How long does setup take?', answer: 'Setup typically takes 45\u201360 minutes. We arrive at least an hour before the event start time to ensure everything is perfectly ready for your guests.' },
  { id: 4, question: 'Can I customize the frame templates?', answer: 'Absolutely! We offer personalized frame templates that match your event theme, including your names, date, and custom design elements. This is included in our premium packages.' },
  { id: 5, question: 'Do you provide digital copies?', answer: 'Yes! All photos taken during your event are compiled and delivered digitally via Google Drive or email within 3\u20135 business days after the event.' },
  { id: 6, question: 'What is the deposit and payment terms?', answer: 'A 50% down payment is required to secure your booking, with the remaining balance due on the event day. We accept bank transfers, GCash, and cash payments.' },
  { id: 7, question: 'What happens if the equipment malfunctions?', answer: 'We bring backup equipment to all events as part of our reliability commitment. Our team is trained to handle any technical issues immediately to ensure zero downtime.' },
  { id: 8, question: 'Do you provide props?', answer: 'Yes! We provide a wide variety of themed props including signs, glasses, hats, masks, and event-specific accessories. Our premium package includes an even larger selection.' },
];

// ===== ICON SVGs =====
const icons = {
  camera: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="2.5"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  messenger: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
  chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  send: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  heart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  building: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><line x1="8" y1="6" x2="10" y2="6"/><line x1="14" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/></svg>',
  graduation: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  gift: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  church: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"/><path d="M9 4v3"/><path d="M9 18h6"/><path d="M12 4v14"/><path d="M4 22V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v14"/><path d="M4 22h16"/></svg>',
  building2: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
};

const iconMap = {
  heart: icons.heart, building: icons.building, graduation: icons.graduation,
  gift: icons.gift, users: icons.users, church: icons.church, building2: icons.building2,
};

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {

  // --- NAVBAR ---
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuContent = document.getElementById('mobile-menu-content');
  let mobileOpen = false;

  function renderMobileLinks() {
    mobileMenuContent.innerHTML = navLinks.map(l =>
      `<a href="${l.href}" style="font-size:0.875rem;font-weight:500;color:#374151;padding:0.5rem 0;transition:color 0.3s" onmouseenter="this.style.color='var(--primary)'" onmouseleave="this.style.color='#374151'">${l.name}</a>`
    ).join('') +
      `<a href="${contactInfo.messenger}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.75rem 1.25rem;border-radius:9999px;font-size:0.875rem;font-weight:600;color:#fff;background:linear-gradient(135deg,var(--primary),var(--primary));box-shadow:0 8px 24px rgba(0,0,0,0.15)">${icons.messenger} Message Us</a>`;
    mobileMenuContent.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => { toggleMobile(false); });
    });
  }
  renderMobileLinks();

  function toggleMobile(force) {
    mobileOpen = force !== undefined ? force : !mobileOpen;
    mobileToggle.innerHTML = mobileOpen ? icons.close : icons.menu;
    mobileMenu.classList.toggle('hidden', !mobileOpen);
  }

  mobileToggle.addEventListener('click', () => toggleMobile());
  mobileToggle.style.color = '#121212';

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('scrolled', scrolled);
    mobileToggle.style.color = scrolled ? '#fff' : '#121212';
    // Progress bar
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    document.getElementById('progress-bar').style.transform = `scaleX(${progress})`;
  });

  // --- PACKAGES SLIDER ---
  const packagesTrack = document.getElementById('packages-slider-track');
  const packagesPrev = document.getElementById('packages-prev');
  const packagesNext = document.getElementById('packages-next');
  const packagesDots = document.getElementById('packages-slider-dots');

  if (packagesTrack) {
    let currentPackageSlide = 0;
    const packageImages = ['package1.png','package2.png','package3.png','package4.png','package5.png','package6.png','package7.png','package8.png','package9.png','package10.png'];

    function renderPackagesSlider() {
      packagesTrack.innerHTML = packageImages.map((img, i) =>
        `<div class="packages-slide">
          <div class="packages-slide-img">
            <img src="images/${img}" alt="Package ${i + 1}" loading="eager" />
          </div>
        </div>`
      ).join('');

      updatePackageDots();
      goToPackageSlide(0);
    }

    function updatePackageDots() {
      if (!packagesDots) return;
      packagesDots.innerHTML = Array.from({ length: packageImages.length }, (_, i) =>
        `<button class="packages-slider-dot ${i === currentPackageSlide ? 'active' : ''}" data-index="${i}"></button>`
      ).join('');
      packagesDots.querySelectorAll('.packages-slider-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          goToPackageSlide(parseInt(dot.dataset.index));
        });
      });
    }

    function goToPackageSlide(index) {
      currentPackageSlide = Math.min(index, packageImages.length - 1);
      const slide = packagesTrack.querySelector('.packages-slide');
      if (!slide) return;
      const offset = -(currentPackageSlide * slide.offsetWidth);
      packagesTrack.style.transform = `translateX(${offset}px)`;
      packagesDots?.querySelectorAll('.packages-slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentPackageSlide);
      });
    }

    packagesPrev?.addEventListener('click', () => {
      goToPackageSlide(currentPackageSlide - 1);
    });

    packagesNext?.addEventListener('click', () => {
      goToPackageSlide(currentPackageSlide + 1);
    });

    renderPackagesSlider();

    window.addEventListener('resize', () => {
      const slide = packagesTrack.querySelector('.packages-slide');
      if (slide) {
        const offset = -(currentPackageSlide * slide.offsetWidth);
        packagesTrack.style.transform = `translateX(${offset}px)`;
      }
    });
  }

  // --- TRUSTED BY ---
  const trustedTrack = document.getElementById('trusted-track');
  if (trustedTrack) {
    const trustedItems = [
      { icon: 'heart', label: 'Wedding' },
      { icon: 'building2', label: 'Corporate' },
      { icon: 'graduation', label: 'Schools' },
      { icon: 'gift', label: 'Birthdays' },
      { icon: 'building', label: 'Government' },
      { icon: 'users', label: 'Reunions' },
      { icon: 'church', label: 'Church Events' },
    ];
    const allItems = [...trustedItems, ...trustedItems];
    trustedTrack.innerHTML = allItems.map(item =>
      `<div class="flex items-center gap-3 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" style="flex-shrink:0">
        <span style="color:#6B7280;width:24px;height:24px">${iconMap[item.icon] || ''}</span>
        <span class="text-sm font-medium text-gray-500 whitespace-nowrap">${item.label}</span>
      </div>`
    ).join('');
  }

  // --- SERVICES ---
  const photoboothGrid = document.getElementById('photobooth-grid');
  if (photoboothGrid) {
    photoboothGrid.innerHTML = photoboothTypes.map((b, i) =>
      `<div class="animate-on-scroll fade-up stagger-${i+1}" style="background:#1a1a1a;border-radius:1rem;overflow:hidden;border:1px solid rgba(255,255,255,0.1);transition:all 0.3s" onmouseenter="this.style.transform='translateY(-5px)';this.style.borderColor='rgba(175,255,0,0.3)'" onmouseleave="this.style.transform='';this.style.borderColor='rgba(255,255,255,0.1)'">
        <div style="padding:1.5rem">
          <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.125rem;color:#fff;margin-bottom:0.5rem">${b.title}</h3>
          <p style="font-size:0.875rem;color:rgba(255,255,255,0.6);line-height:1.625">${b.description}</p>
        </div>
      </div>`
    ).join('');
  }

  const printStylesGrid = document.getElementById('print-styles-grid');
  if (printStylesGrid) {
    printStylesGrid.innerHTML = printStyles.map((g, i) =>
      `<div class="animate-on-scroll fade-up stagger-${i+1}" style="background:#1a1a1a;border-radius:1rem;padding:1.5rem;border:1px solid rgba(255,255,255,0.1)">
        <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1rem;color:#AFFF00;margin-bottom:1rem">${g.category}</h3>
        <ul style="display:flex;flex-direction:column;gap:0.625rem">
          ${g.items.map(item => `<li style="display:flex;align-items:center;gap:0.625rem;font-size:0.875rem;color:rgba(255,255,255,0.6)"><span style="width:6px;height:6px;border-radius:50%;background:#AFFF00;flex-shrink:0"></span>${item}</li>`).join('')}
        </ul>
      </div>`
    ).join('');
  }

  // --- LIGHTBOX (for package images) ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  window.openPackageLightbox = function(src) {
    lightboxImg.src = src;
    lightboxImg.alt = 'Service Package';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
  });

  // --- WHY CHOOSE US ---
  const wcuGrid = document.getElementById('wcu-grid');
  if (wcuGrid) {
    wcuGrid.innerHTML = whyChooseUs.map((item, i) =>
      `<div class="animate-on-scroll fade-scale stagger-${i+1}" style="background:#1a1a1a;border-radius:1rem;padding:1.5rem;transition:all 0.3s;border:1px solid rgba(255,255,255,0.1)" onmouseenter="this.style.borderColor='rgba(175,255,0,0.3)';this.style.transform='translateY(-5px)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.1)';this.style.transform=''">
        <div style="width:3rem;height:3rem;border-radius:0.75rem;background:#AFFF00;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;transition:transform 0.3s" onmouseenter="this.style.transform='scale(1.1)'" onmouseleave="this.style.transform=''">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#121212" stroke-width="2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="2.5"/></svg>
        </div>
        <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1rem;color:#fff;margin-bottom:0.5rem">${item.title}</h3>
        <p style="font-size:0.875rem;color:rgba(255,255,255,0.6);line-height:1.625">${item.description}</p>
      </div>`
    ).join('');
  }

  // --- PACKAGES ---
  const packagesGrid = document.getElementById('packages-grid');
  if (packagesGrid) {
    packagesGrid.innerHTML = packages.map((pkg, i) =>
      `<div class="animate-on-scroll fade-up stagger-${i+1}" style="background:#fff;border-radius:1.5rem;overflow:hidden;transition:all 0.5s;box-shadow:${pkg.popular ? '0 20px 60px rgba(0,0,0,0.12)' : '0 8px 32px rgba(0,0,0,0.08)'};${pkg.popular ? 'transform:scale(1.05);outline:2px solid var(--primary);outline-offset:2px;position:relative' : ''}">
        ${pkg.popular ? '<div style="background:linear-gradient(135deg,var(--primary),var(--primary));color:#fff;font-size:0.75rem;font-weight:700;text-align:center;padding:0.5rem;letter-spacing:0.05em;text-transform:uppercase">Most Popular</div>' : ''}
        <div style="height:10rem;overflow:hidden">
          <img src="${pkg.image}" alt="${pkg.name}" loading="eager" style="width:100%;height:100%;object-fit:cover" />
        </div>
        <div style="padding:2rem${pkg.popular ? ';padding-top:1.5rem' : ''}">
          <h3 style="font-family:\'Poppins\',sans-serif;font-weight:700;font-size:1.25rem;color:var(--text);margin-bottom:0.25rem">${pkg.name}</h3>
          <div style="display:flex;flex-direction:column;gap:0.75rem;margin-top:1.5rem;margin-bottom:1.5rem">
            ${pkg.items.map(item => `<div style="background:var(--bg-section);border-radius:0.75rem;padding:1rem">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.25rem">
                <span style="font-family:\'Poppins\',sans-serif;font-weight:700;color:var(--text)">${item.name}</span>
                <span style="font-family:\'Poppins\',sans-serif;font-weight:700;font-size:1.125rem;background:linear-gradient(135deg,var(--primary),var(--primary));-webkit-background-clip:text;-webkit-text-fill-color:transparent">${item.price}</span>
              </div>
              <span style="font-size:0.75rem;color:var(--muted)">${item.duration}</span>
            </div>`).join('')}
          </div>
          ${pkg.addOns.length > 0 ? `<div style="margin-bottom:1.5rem">
            <h4 style="font-size:0.75rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.75rem">Add-Ons</h4>
            <ul style="display:flex;flex-direction:column;gap:0.625rem">
              ${pkg.addOns.map(a => `<li style="display:flex;align-items:center;justify-content:space-between;font-size:0.875rem">
                <span style="display:flex;align-items:center;gap:0.5rem;color:#4B5563"><span style="width:6px;height:6px;border-radius:50%;background:var(--primary);flex-shrink:0"></span>${a.name}</span>
                <span style="font-weight:600;color:var(--text)">${a.price}</span>
              </li>`).join('')}
            </ul>
          </div>` : ''}
        </div>
      </div>`
    ).join('');
  }

  // --- EVENT TYPES ---
  const eventsGrid = document.getElementById('events-grid');
  if (eventsGrid) {
    eventsGrid.innerHTML = eventTypes.map((e, i) =>
      `<div class="animate-on-scroll fade-up stagger-${i+1}" style="background:#fff;border-radius:1rem;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.08);transition:all 0.5s" onmouseenter="this.style.transform='translateY(-8px)';this.style.boxShadow='0 20px 60px rgba(0,0,0,0.12)'" onmouseleave="this.style.transform='';this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)'">
        <div style="position:relative;height:12rem;overflow:hidden">
          <img src="${e.image}" alt="${e.title}" loading="eager" style="width:100%;height:100%;object-fit:cover;transition:transform 0.7s" onmouseenter="this.style.transform='scale(1.1)'" onmouseleave="this.style.transform=''"/>
          <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.6),transparent)"></div>
          <div style="position:absolute;bottom:1rem;left:1rem;display:flex;align-items:center;gap:0.5rem">
            <div style="padding:0.5rem;border-radius:0.5rem;background:rgba(255,255,255,0.2);backdrop-filter:blur(4px);color:#fff;width:20px;height:20px;display:flex;align-items:center;justify-content:center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <span style="color:#fff;font-family:'Poppins',sans-serif;font-weight:700;font-size:1.125rem">${e.title}</span>
          </div>
        </div>
        <div style="padding:1.25rem">
          <p style="font-size:0.875rem;color:var(--muted);line-height:1.625;margin-bottom:1rem">${e.description}</p>
          <a href="${contactInfo.messenger}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:0.375rem;font-size:0.875rem;font-weight:600;color:var(--primary);transition:color 0.3s" onmouseenter="this.style.color='var(--primary-dark)'" onmouseleave="this.style.color='var(--primary)'">
            ${icons.messenger} Inquire via Messenger
          </a>
        </div>
      </div>`
    ).join('');
  }

  // --- PROCESS ---
  const processGrid = document.getElementById('process-grid');
  if (processGrid) {
    processGrid.innerHTML = processSteps.map((step, i) =>
      `<div class="animate-on-scroll fade-up stagger-${i+1}" style="background:var(--bg-section);border-radius:1rem;padding:1.5rem;display:flex;align-items:flex-start;gap:1.25rem;transition:all 0.3s" onmouseenter="this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)';this.style.transform='translateY(-5px)'" onmouseleave="this.style.boxShadow='';this.style.transform=''">
        <div style="position:relative;flex-shrink:0">
          <div style="width:3.5rem;height:3.5rem;border-radius:1rem;background:linear-gradient(135deg,var(--primary),var(--primary));display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(175,255,0,0.3);transition:transform 0.3s" onmouseenter="this.style.transform='scale(1.1)'" onmouseleave="this.style.transform=''">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="2.5"/></svg>
          </div>
          <div style="position:absolute;top:-0.5rem;right:-0.5rem;width:1.5rem;height:1.5rem;border-radius:50%;background:#fff;border:2px solid var(--primary);display:flex;align-items:center;justify-content:center">
            <span style="font-size:0.75rem;font-weight:700;color:var(--primary)">${i+1}</span>
          </div>
        </div>
        <div style="flex:1;min-width:0">
          <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.125rem;color:var(--text);margin-bottom:0.25rem">${step.title}</h3>
          <p style="font-size:0.875rem;color:var(--muted);line-height:1.625">${step.description}</p>
        </div>
      </div>`
    ).join('');
  }

  // --- TESTIMONIALS ---
  const testimonialsWrapper = document.getElementById('testimonials-wrapper');
  const testimonialsPagination = document.getElementById('testimonials-pagination');
  if (testimonialsWrapper) {
    let currentTestimonial = 0;
    let testimonialTimer;

    function getSlidesPerView() {
      const w = window.innerWidth;
      if (w >= 1024) return 3;
      if (w >= 640) return 2;
      return 1;
    }

    function renderTestimonials() {
      const spv = getSlidesPerView();
      const totalSlides = Math.ceil(testimonials.length / spv);
      testimonialsWrapper.innerHTML = testimonials.map(t => {
        const stars = Array.from({ length: t.rating }, () => icons.star).join('');
        return `<div class="testimonial-card" style="flex:0 0 ${100/spv}%;padding:0 0.75rem">
          <div style="background:#fff;border-radius:1.5rem;padding:2rem;box-shadow:0 8px 32px rgba(0,0,0,0.08);height:100%">
            <div style="display:flex;gap:0.25rem;margin-bottom:1rem;color:var(--primary)">${stars}</div>
            <p style="color:#4B5563;font-size:0.875rem;line-height:1.625;margin-bottom:1.5rem">"${t.text}"</p>
            <div style="display:flex;align-items:center;gap:1rem;padding-top:1rem;border-top:1px solid #F3F4F6">
              <img src="${t.image}" alt="${t.name}" loading="eager" style="width:3rem;height:3rem;border-radius:50%;object-fit:cover"/>
              <div>
                <h4 style="font-size:0.875rem;font-family:'Poppins',sans-serif;font-weight:700;color:var(--text)">${t.name}</h4>
                <p style="font-size:0.75rem;color:var(--muted)">${t.role}</p>
              </div>
            </div>
          </div>
        </div>`;
      }).join('');

      // Pagination dots
      if (testimonialsPagination) {
        const totalPages = Math.ceil(testimonials.length / spv);
        testimonialsPagination.innerHTML = Array.from({ length: totalPages }, (_, i) =>
          `<button class="swiper-pagination-bullet ${i === currentTestimonial ? 'swiper-pagination-bullet-active' : ''}" data-index="${i}"></button>`
        ).join('');
        testimonialsPagination.querySelectorAll('.swiper-pagination-bullet').forEach(dot => {
          dot.addEventListener('click', () => { goToTestimonial(parseInt(dot.dataset.index)); });
        });
      }
    }

    function goToTestimonial(index) {
      const spv = getSlidesPerView();
      const totalPages = Math.ceil(testimonials.length / spv);
      currentTestimonial = Math.min(index, totalPages - 1);
      const offset = -(currentTestimonial * (100 / spv) * spv);
      testimonialsWrapper.style.transform = `translateX(${offset}%)`;
      testimonialsPagination?.querySelectorAll('.swiper-pagination-bullet').forEach((dot, i) => {
        dot.classList.toggle('swiper-pagination-bullet-active', i === currentTestimonial);
      });
    }

    function nextTestimonial() {
      const spv = getSlidesPerView();
      const totalPages = Math.ceil(testimonials.length / spv);
      goToTestimonial((currentTestimonial + 1) % totalPages);
    }

    renderTestimonials();
    testimonialTimer = setInterval(nextTestimonial, 4000);

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        renderTestimonials();
        goToTestimonial(0);
      }, 200);
    });
  }

  // --- FAQ ---
  const faqList = document.getElementById('faq-list');
  if (faqList) {
    faqList.innerHTML = faqs.map(faq =>
      `<div class="faq-item animate-on-scroll fade-up stagger-${Math.min(faq.id, 6)}" style="background:var(--bg-section);border-radius:1rem;overflow:hidden;transition:all 0.3s">
        <button class="faq-toggle" data-id="${faq.id}" style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:1.25rem;text-align:left;background:none;border:none;cursor:pointer">
          <span style="font-size:0.875rem;font-weight:600;color:var(--text);padding-right:1rem">${faq.question}</span>
          <div class="faq-chevron" style="flex-shrink:0;width:2rem;height:2rem;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--primary));display:flex;align-items:center;justify-content:center;transition:transform 0.3s">
            ${icons.chevronDown}
          </div>
        </button>
        <div class="faq-answer" style="max-height:0;overflow:hidden;transition:max-height 0.3s ease,opacity 0.3s ease;opacity:0">
          <p style="padding:0 1.25rem 1.25rem;font-size:0.875rem;color:var(--muted);line-height:1.625">${faq.answer}</p>
        </div>
      </div>`
    ).join('');

    faqList.querySelectorAll('.faq-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        faqList.querySelectorAll('.faq-item.open').forEach(el => {
          if (el !== item) el.classList.remove('open');
        });
        item.classList.toggle('open', !isOpen);
      });
    });
  }

  // --- CONTACT FORM ---
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formFields = document.getElementById('form-fields');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      if (!name || !email || !message) return;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner" style="width:1.25rem;height:1.25rem;border-width:2px;display:block;margin:0 auto"></span>';

      try {
        // Simulated email send - in production, integrate with EmailJS or a backend
        await new Promise(resolve => setTimeout(resolve, 1000));
        formFields.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        contactForm.reset();
      } catch {
        alert('Something went wrong. Please try again or message us on Messenger.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `${icons.send} Send Message`;
      }
    });
  }

  document.getElementById('reset-form')?.addEventListener('click', () => {
    formSuccess.classList.add('hidden');
    formFields.classList.remove('hidden');
  });

  // --- FOOTER YEAR ---
  document.getElementById('current-year') && (document.getElementById('current-year').textContent = new Date().getFullYear());

  // --- SCROLL ANIMATIONS (Intersection Observer) ---
  function observeAnimations() {
    const animEls = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    animEls.forEach(el => observer.observe(el));
  }

  observeAnimations();

  // Hero entrance animation
  document.querySelectorAll('.hero-reveal').forEach((el, i) => {
    const delay = 200 + i * 150;
    setTimeout(() => { el.classList.add('visible'); }, delay);
  });

});
