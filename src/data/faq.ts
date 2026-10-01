export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // Digital Marketing
  {
    category: "Digital Marketing",
    question: "What is digital marketing and why does my business need it?",
    answer: "Digital marketing is the promotion of your business through online channels — including search engines, social media, email, and websites. Every business needs it today because that's where customers are looking for products and services. Without a digital presence, you're invisible to a large segment of your potential customers.",
  },
  {
    category: "Digital Marketing",
    question: "How is digital marketing different from traditional marketing?",
    answer: "Traditional marketing uses print, TV, radio, and billboards. Digital marketing uses online channels — allowing precise targeting, real-time performance tracking, lower costs, and the ability to reach both local and global audiences. Digital marketing is also measurable, so you can see exactly what's working.",
  },
  {
    category: "Digital Marketing",
    question: "How long does it take to see results from digital marketing?",
    answer: "It depends on the channel. Paid advertising (Google Ads, Meta Ads) can show results within days. SEO and organic social media typically take 3-6 months to build momentum. We set clear, realistic expectations from the start and focus on sustainable growth.",
  },
  // SEO
  {
    category: "SEO",
    question: "What is SEO and why is it important?",
    answer: "SEO (Search Engine Optimization) is the process of improving your website's visibility in Google search results. It's important because most people click on the first few results — if you're not ranking well, you're missing out on potential customers who are actively searching for what you offer.",
  },
  {
    category: "SEO",
    question: "How long does SEO take to show results?",
    answer: "SEO is a long-term investment. Most businesses begin seeing improvements within 3-4 months, with significant results in 6-12 months. The timeline depends on your current website health, competition, and target keywords. We focus on sustainable, white-hat strategies.",
  },
  {
    category: "SEO",
    question: "Can you guarantee first-page Google rankings?",
    answer: "No ethical SEO agency can guarantee specific rankings — Google's algorithm is complex and changes regularly. What we can guarantee is a focused, professional approach using industry-best practices that consistently improve your organic visibility over time.",
  },
  // Google Ads
  {
    category: "Google Ads",
    question: "What is Google Ads and how does it work?",
    answer: "Google Ads (Pay-Per-Click) allows you to place advertisements in Google search results and across Google's network. You pay when someone clicks your ad. We research the right keywords, create compelling ads, and optimize your campaigns to maximize results and minimize wasted spend.",
  },
  {
    category: "Google Ads",
    question: "How much does Google Ads cost?",
    answer: "There's no fixed cost — you set your own budget. Costs depend on your industry, competition, and targeted keywords. We can work with various budgets and will help you understand what's realistic for your goals. Our focus is always on maximizing ROI.",
  },
  // Meta Ads
  {
    category: "Meta Ads",
    question: "What is Meta Ads advertising?",
    answer: "Meta Ads refers to paid advertising on Facebook and Instagram. It allows you to reach highly targeted audiences based on demographics, interests, and behaviours. It's excellent for building brand awareness, generating leads, and driving e-commerce sales.",
  },
  {
    category: "Meta Ads",
    question: "Which is better — Google Ads or Meta Ads?",
    answer: "Both have strengths. Google Ads captures people who are actively searching for your product (high intent). Meta Ads is excellent for building awareness and reaching people before they've started searching. For most businesses, using both together gives the best results.",
  },
  // Website Development
  {
    category: "Website Development",
    question: "Why does my business need a professional website?",
    answer: "Your website is your digital storefront — often the first impression for potential customers. A professional website builds credibility, showcases your services, generates leads, and is available 24/7. Without a good website, you're losing business to competitors who have one.",
  },
  {
    category: "Website Development",
    question: "How long does it take to build a website?",
    answer: "A standard business website typically takes 3-6 weeks from start to launch. More complex websites with custom features can take longer. We provide a clear timeline after understanding your requirements. We keep you informed throughout the entire process.",
  },
  {
    category: "Website Development",
    question: "Will my website be mobile-friendly?",
    answer: "Yes, absolutely. All websites we build are fully responsive — they automatically adapt to look great on mobile phones, tablets, and desktop computers. Mobile-friendliness is essential as most web traffic now comes from mobile devices.",
  },
  // WordPress
  {
    category: "WordPress Development",
    question: "What is WordPress and why use it?",
    answer: "WordPress is the world's most popular website platform, powering over 40% of all websites. It's flexible, easy to manage (no coding needed for updates), has thousands of plugins, and is SEO-friendly by default. It's excellent for most business websites.",
  },
  {
    category: "WordPress Development",
    question: "Can I update my WordPress website myself after it's built?",
    answer: "Yes. We design WordPress websites to be easy to manage. We also provide training so you can update content, add blog posts, and make simple changes yourself without any coding knowledge. We're also available for ongoing support if needed.",
  },
  // E-Commerce
  {
    category: "E-Commerce",
    question: "What does an e-commerce website need to be successful?",
    answer: "A successful e-commerce website needs: fast loading speeds, mobile optimization, easy navigation, high-quality product images, clear descriptions, secure and smooth checkout, multiple payment options, and strong SEO. We build all of these into every online store we create.",
  },
  {
    category: "E-Commerce",
    question: "What payment methods can you integrate?",
    answer: "We can integrate popular Indian payment gateways like Razorpay, Paytm, PhonePe, and international gateways like Stripe and PayPal. We'll recommend the best options based on your target customers and business needs.",
  },
  // Mobile Apps
  {
    category: "Mobile App Development",
    question: "What is the difference between a native app and a cross-platform app?",
    answer: "A native app is built specifically for one platform (iOS or Android) using platform-specific languages. A cross-platform app (built with React Native or Flutter) uses one codebase for both platforms, reducing development time and cost while offering near-native performance.",
  },
  {
    category: "Mobile App Development",
    question: "How long does it take to develop a mobile app?",
    answer: "A basic mobile app typically takes 2-4 months. More complex apps with custom features, backend systems, and third-party integrations can take 4-8 months. We provide detailed timelines after understanding your requirements.",
  },
  // Social Media Marketing
  {
    category: "Social Media Marketing",
    question: "Which social media platforms should my business use?",
    answer: "The right platforms depend on your target audience and industry. Instagram and Facebook work well for most consumer businesses. LinkedIn is best for B2B. YouTube for video-heavy content. We'll recommend the platforms that will deliver the best results for your specific business.",
  },
  {
    category: "Social Media Marketing",
    question: "How often should my business post on social media?",
    answer: "Consistency is more important than frequency. For most businesses, we recommend 3-5 posts per week on Instagram and Facebook, with daily stories. Quality always comes first — it's better to post less often with great content than frequently with poor content.",
  },
  // Local SEO
  {
    category: "Local SEO",
    question: "What is Local SEO and why does my local business need it?",
    answer: "Local SEO optimizes your online presence for location-based searches — like 'restaurants near me' or 'digital marketing agency in Chennai'. If you serve customers in a specific geographic area, Local SEO ensures your business appears prominently when they search for what you offer nearby.",
  },
  {
    category: "Local SEO",
    question: "How do I get my business on Google Maps?",
    answer: "You need a verified Google Business Profile. Once claimed and optimized, your business will appear in Google Maps searches. We help set up, verify, and fully optimize your Google Business Profile for maximum local visibility.",
  },
  // Google Business Profile
  {
    category: "Google Business Profile",
    question: "What is Google Business Profile?",
    answer: "Google Business Profile (formerly Google My Business) is a free tool that allows businesses to manage how they appear on Google Search and Google Maps. It shows your business name, address, phone number, hours, photos, reviews, and more.",
  },
  {
    category: "Google Business Profile",
    question: "How can I improve my Google Business Profile ranking?",
    answer: "Key factors include: complete and accurate business information, high-quality photos, consistent and regular posts, responding to all reviews, having a good review rating, and ensuring NAP (Name, Address, Phone) consistency across all online directories.",
  },
  // Internship
  {
    category: "Internship",
    question: "Who can apply for the M.B Growth Digital internship?",
    answer: "Our internship program is open to college students (all streams and semesters) and recent fresh graduates who want to gain practical digital industry experience. No prior experience is required — just a genuine interest in digital marketing or web development.",
  },
  {
    category: "Internship",
    question: "What internship programs are available?",
    answer: "We offer internship tracks in Digital Marketing (SEO, Social Media, Google Ads, Content), Web Development (HTML, CSS, JavaScript, WordPress), UI/UX Design, and Graphic Design. You can choose the track that aligns with your career interests.",
  },
  {
    category: "Internship",
    question: "Will I get a certificate after completing the internship?",
    answer: "Yes. Every intern who successfully completes the program receives a formal Internship Completion Certificate from M.B Growth Digital, which you can add to your CV and LinkedIn profile.",
  },
  // Process
  {
    category: "Our Process",
    question: "What is your process for starting a new project?",
    answer: "We follow a structured approach: 1) Discovery call to understand your requirements, 2) Strategy development, 3) Proposal and timeline, 4) Design/development/campaign execution, 5) Review and launch, 6) Ongoing optimization and support. We keep you informed at every stage.",
  },
  {
    category: "Our Process",
    question: "Do you offer a free consultation?",
    answer: "Yes, we offer a free initial consultation to understand your business and goals. During this call, we'll discuss your needs, answer your questions, and outline how we can help. There's no obligation — contact us to schedule your consultation.",
  },
  {
    category: "Consultation",
    question: "How can I get in touch with M.B Growth Digital?",
    answer: "You can reach us by phone/WhatsApp at +91 86101 66708, by email at mbgrowthdigital26@gmail.com, through our website contact form, or via Instagram at @mbgrowthdigital26. We're available 24 hours and respond promptly to all enquiries.",
  },
];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((f) => f.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(faqs.map((f) => f.category))];
}
