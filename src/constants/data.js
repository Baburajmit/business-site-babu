// ===== NAV LINKS =====
export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#testimonials' },
];

// ===== TRUST BAR =====
export const TRUST_ITEMS = [
  { icon: '🚀', title: 'Fast Delivery', sub: 'On-time, every time', color: 'blue' },
  { icon: '✅', title: '100% Satisfaction', sub: 'Client-first approach', color: 'green' },
  { icon: '💡', title: 'Clean Code', sub: 'Scalable & maintainable', color: 'gold' },
  { icon: '🔒', title: 'Secure & Reliable', sub: 'Built for real businesses', color: 'purple' },
];

// ===== SERVICES =====
export const SERVICES = [
  {
    icon: '🌐',
    title: 'Business Websites',
    desc: 'Professional, fast-loading websites that make your brand look premium.',
    tags: ['Landing Page', 'Portfolio'],
    backTitle: '✨ What\'s Included',
    features: ['Fully Responsive Design', 'SEO Optimized Structure', 'Contact Forms + Maps', '1 Month Free Support'],
    price: '₹4,999',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Solutions',
    desc: 'Full-featured online stores with product management and payments.',
    tags: ['Product Catalog', 'Payments'],
    backTitle: '🛍️ Full Store Package',
    features: ['Product Management', 'Shopping Cart + Checkout', 'Razorpay/PhonePe Integration', 'Admin Panel Included'],
    price: '₹9,999',
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    desc: 'Robust REST APIs using Java & Spring Boot that scale with your business.',
    tags: ['REST APIs', 'Spring Boot'],
    backTitle: '🚀 Enterprise Backend',
    features: ['Custom REST APIs', 'Authentication (JWT/OAuth)', 'Database Architecture', 'API Documentation'],
    price: '₹7,999',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile apps with real-time features and cloud storage.',
    tags: ['Flutter', 'Firebase'],
    backTitle: '📲 Cross-Platform App',
    features: ['iOS + Android Compatible', 'User Authentication', 'Push Notifications', 'Play Store Ready'],
    price: '₹12,999',
  },
];

// ===== PROCESS =====
export const PROCESS_STEPS = [
  { num: '01', title: 'Understand Requirements', desc: 'Analyze business needs, goals, and target audience.' },
  { num: '02', title: 'Planning & Design', desc: 'UI/UX wireframes and system architecture planning.' },
  { num: '03', title: 'Development', desc: 'Clean, scalable coding with regular updates.' },
  { num: '04', title: 'Delivery & Support', desc: 'Full testing, deployment, and post-launch support.' },
];

// ===== WHY ME =====
export const WHY_ITEMS = [
  { title: 'Business-Focused Development', desc: 'Every feature I build is tied to a real business goal.' },
  { title: 'Clean & Scalable Architecture', desc: 'Spring Boot expertise ensures your backend can grow.' },
  { title: 'Fast Communication & Updates', desc: 'Daily progress updates. Never left wondering.' },
];

// ===== PROJECTS =====
export const PROJECTS = [
  {
    id: 1,
    emoji: '🏋️',
    title: 'Gym Management System',
    badges: ['📈 +40% Membership Growth', '⚡ 2x Faster Operations'],
    desc: 'Built a complete gym management system with membership tracking, payment handling, and performance analytics — helping gym owners automate daily operations.',
    tech: ['React.js', 'Node.js', 'MangoBd', 'Firebase'],
    gradient: 'linear-gradient(135deg, #FFF5E6, #FEE2B5)',
    accentColor: '#D4A853',
    number: '01',
    link: 'https://baburajmit.github.io/Gym_web/',
    imageKey: 'gym',
    theme: 'visual-gym',
  },
  {
    id: 2,
    emoji: '🍽️',
    title: 'Restaurant Ordering System',
    badges: ['💰 Increased Online Orders', '📱 Mobile Friendly UX'],
    desc: 'Developed a full-stack restaurant system with live ordering, cart management, and backend APIs — delivering a seamless dine-in and takeaway experience.',
    tech: ['Node.js', 'React', 'REST API', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #E9F9EF, #C8F0D9)',
    accentColor: '#16A34A',
    number: '02',
    link: 'https://baburajmit.github.io/restaurant-site/',
    imageKey: 'restaurant',
    theme: 'visual-resto',
  },
  {
    id: 3,
    emoji: '🏦',
    title: 'Mini Banking Application',
    badges: ['🔒 Secure Transactions', '⚡ Real-time Updates'],
    desc: 'Built a secure mini banking system with account creation, transactions, and robust backend using Spring Boot — handling real-time balance and transfer operations.',
    tech: ['Spring Boot', 'Java', 'MySQL', 'REST API'],
    gradient: 'linear-gradient(135deg, #EFF4FF, #D9E4FF)',
    accentColor: '#2563EB',
    number: '03',
    link: 'https://zobankin.netlify.app/',
    imageKey: 'bank',
    theme: 'visual-bank',
  },
  {
    id: 4,
    emoji: '💼',
    title: 'Portfolio Website',
    badges: ['🎨 Modern Design', '⚡ React Powered'],
    desc: 'Designed and built a fully responsive personal portfolio showcasing projects, services, and skills — featuring smooth animations and a clean, professional UI.',
    tech: ['React', 'Vite', 'CSS3', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #F5F0FF, #E4D9FF)',
    accentColor: '#7C3AED',
    number: '04',
    link: 'https://portfoliobabu.web.app/',
    imageKey: 'portfolio',
    theme: 'visual-portfolio',
  },
];

// ===== TESTIMONIALS =====
export const TESTIMONIALS = [
  { initials: 'RK', name: 'Ramesh Kumar', role: 'Business Owner, Chennai', text: 'Very professional and delivered exactly what I needed. Understood requirements clearly and executed perfectly.', color: 'av1' },
  { initials: 'PS', name: 'Priya Shankar', role: 'Startup Founder, Bangalore', text: 'Clean design, fast delivery, and clean code. Built our startup\'s website in record time — exceeded expectations!', color: 'av2' },
  { initials: 'MV', name: 'Murugan Vel', role: 'Restaurant Owner, Trichy', text: 'Backend API is solid and well-structured. Code quality is excellent — modular, readable, and easy to extend.', color: 'av3' },
  { initials: 'AS', name: 'Arun Srinivasan', role: 'E-commerce Owner, Coimbatore', text: 'Baburaj is a gem! Built our e-commerce site with seamless payment integration. Sales have increased since launch.', color: 'av4' },
  { initials: 'MK', name: 'Meena Krishnan', role: 'Fitness Studio Owner, Madurai', text: 'Absolutely thrilled! Website loads fast, looks stunning, and the backend is rock solid. Highly recommend!', color: 'av5' },
  { initials: 'KR', name: 'Karthik Raj', role: 'Tech Lead, Hyderabad', text: 'Effortless to work with. Delivered a custom web app that saved our team hours every week. Great developer!', color: 'av6' },
];

export const CONTACT_LINK = 'https://forms.gle/cPiFXih6y7Z1xjj28';
export const GIT_LINK = 'https://github.com/Baburajmit';
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/baburaj-m-9896a8250/';
export const EMAIL = 'professionalid.04@gmail.com';
