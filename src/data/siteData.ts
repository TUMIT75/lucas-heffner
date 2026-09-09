import { Book, ToolboxItem, Article, CartItem } from '../types';

export const BOOKS_DATA: Book[] = [
  {
    id: 'cut-the-crap',
    title: 'CUT THE CRAP',
    subtitle: 'Lose the Fat. Keep the Freedom.',
    status: 'preorder',
    statusLabel: 'Preorder',
    description: 'A practical approach to losing weight, building habits that last, and finally getting off the diet roller coaster. No detoxes. No forbidden-food lists. No pretending you need to live on chicken and broccoli for the rest of your life.',
    formats: ["Founder's Edition Hardcover", 'Paperback', 'eBook'],
    isCutTheCrap: true,
    isPlaceholder: false,
  },
  {
    id: 'iron-and-fuel',
    title: 'IRON & FUEL',
    subtitle: 'The Practical Nutrition Field Manual',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    description: 'A tactical, no-nonsense guide to fueling intense training without complex macro spreadsheets, guilt, or culinary paralysis.',
    formats: ['Hardcover', 'Paperback', 'eBook'],
    isCutTheCrap: false,
    isPlaceholder: true,
  },
  {
    id: 'unbroken-habits',
    title: 'UNBROKEN HABITS',
    subtitle: 'Building Discipline That Survives Chaos',
    status: 'in-development',
    statusLabel: 'In Development',
    description: 'How to build unbreakable routines when life gets busy, motivation collapses, and the plan falls apart.',
    formats: ['Print', 'Digital'],
    isCutTheCrap: false,
    isPlaceholder: true,
  },
  {
    id: 'the-leaders-standard',
    title: "THE LEADER'S STANDARD",
    subtitle: 'Ownership, Physical Readiness, and Quiet Competence',
    status: 'in-development',
    statusLabel: 'In Development',
    description: 'Lessons from Army engineering, entrepreneurship, and physical transformation on leading yourself before leading others.',
    formats: ['Print', 'Digital'],
    isCutTheCrap: false,
    isPlaceholder: true,
  },
];

export const TOOLBOX_ITEMS: ToolboxItem[] = [
  {
    id: 'food-scale',
    category: 'Kitchen Tools',
    name: 'Precision Digital Food Scale',
    explanation: 'A waterproof, high-precision digital scale measuring down to 0.1g for accurate portion verification.',
    whyLucasRecommends: 'Eye-balling portions is the #1 reason smart people fail to lose weight. You do not need to weigh food forever, but weighing for two weeks will permanently recalibrate your reality.',
    affiliateUrl: 'https://amazon.com/dp/placeholder-scale',
    priceEstimate: '$24.99',
  },
  {
    id: 'air-fryer',
    category: 'Kitchen Tools',
    name: 'Countertop Convection Air Fryer',
    explanation: 'Dual-zone high-heat circulating air fryer for quick, high-protein meal preparation without excess cooking fats.',
    whyLucasRecommends: 'Cuts chicken breast and vegetable prep time to 12 minutes flat. Eliminates the friction of cooking after a 12-hour workday.',
    affiliateUrl: 'https://amazon.com/dp/placeholder-airfryer',
    priceEstimate: '$119.99',
  },
  {
    id: 'whey-isolate',
    category: 'Nutrition & Food',
    name: '100% Whey Protein Isolate (Unflavored & Cocoa)',
    explanation: 'Cold-filtered whey protein isolate providing 25g pure protein per scoop with minimal carbohydrates and fats.',
    whyLucasRecommends: 'Hitting 0.8g–1.0g of protein per pound of lean body weight is non-negotiable for satiety and muscle retention. This is an efficient tool, not a meal replacement.',
    affiliateUrl: 'https://amazon.com/dp/placeholder-protein',
    priceEstimate: '$54.99',
  },
  {
    id: 'tracking-app',
    category: 'Tracking',
    name: 'MacroFactor Nutrition Tracker',
    explanation: 'An expenditure-based calorie and macronutrient tracking platform with an algorithmic dynamic metabolic rate engine.',
    whyLucasRecommends: 'Unlike legacy apps that scold you with red numbers, this uses neutral data feedback and calculates your actual energy burn rate based on weigh-in and food logging data.',
    affiliateUrl: 'https://macrofactor.com',
    priceEstimate: '$11.99/mo',
  },
  {
    id: 'resistance-bands',
    category: 'Fitness',
    name: 'Heavy-Duty Loop Resistance Band Set',
    explanation: 'Layered latex resistance bands covering 15 lbs to 125 lbs with carabiner handles and door anchors.',
    whyLucasRecommends: 'No excuses when traveling or working late. Keeping resistance training consistent preserves lean mass while in an energy deficit.',
    affiliateUrl: 'https://amazon.com/dp/placeholder-bands',
    priceEstimate: '$38.00',
  },
  {
    id: 'electrolyte-mix',
    category: 'Products I Use',
    name: 'Pure Sodium / Potassium / Magnesium Electrolyte Packs',
    explanation: 'Zero-sugar, scientifically formulated hydration blend with 1000mg sodium, 200mg potassium, and 60mg magnesium.',
    whyLucasRecommends: 'When you drop processed carbohydrates, your kidneys shed sodium rapidly. Proper hydration stops mid-day brain fog and workout lethargy instantly.',
    affiliateUrl: 'https://amazon.com/dp/placeholder-electrolytes',
    priceEstimate: '$45.00',
  },
  {
    id: 'book-why-we-sleep',
    category: 'Books & Learning',
    name: 'Why We Sleep by Matthew Walker',
    explanation: 'A deep scientific exploration of sleep architecture, metabolic health, and circadian endocrine function.',
    whyLucasRecommends: 'Sleep deprivation spikes ghrelin (hunger hormone) and kills impulse control. You cannot out-discipline chronic sleep deprivation.',
    affiliateUrl: 'https://amazon.com/dp/placeholder-sleep',
    priceEstimate: '$18.00',
  },
  {
    id: 'smart-scale',
    category: 'Tracking',
    name: 'Bluetooth Trend-Smoothing Smart Scale',
    explanation: 'Bio-impedance bathroom scale syncing directly to your smartphone with built-in 7-day rolling weight smoothing.',
    whyLucasRecommends: 'Daily scale weight fluctuates wildly from water, sodium, and digestion. Looking only at the rolling 7-day average prevents emotional overreactions.',
    affiliateUrl: 'https://amazon.com/dp/placeholder-smartscale',
    priceEstimate: '$49.99',
  },
];

export const FAQS_DATA = [
  {
    question: 'What makes this different from another diet book?',
    answer:
      "Most diet books sell an artificial enemy: carbs, fats, lectins, seed oils, or eating after 7 PM. Cut the Crap doesn't invent fake villains. It breaks down energy balance, protein leverage, hunger management, and behavioral habit architecture in plain English. No detoxes, no forbidden-food lists, and no pretending you need to live on chicken and broccoli.",
  },
  {
    question: 'Do I need to count calories?',
    answer:
      "You don't need to count calories forever, but you do need to respect energy balance. Cut the Crap teaches both quantitative tracking (for rapid clarity) and intuitive behavioral guidelines (for lifelong sustainability), so you have tools for every season of life.",
  },
  {
    question: 'Is this a meal plan?',
    answer:
      "No. Prescribed meal plans fail the moment you go on vacation, attend a client dinner, or want a slice of pizza with your kids. Instead of rigid menus, you get a decision-making framework to build any meal into your targets without blowing up your progress.",
  },
  {
    question: 'Is this only for people who need to lose a lot of weight?',
    answer:
      "While Lucas lost over 140 pounds (dropping from ~44% body fat to ~13%), the principles apply whether you have 15 pounds or 150 pounds to shed. The physiology of fat loss and habit retention is universal.",
  },
  {
    question: 'What is included with each edition?',
    answer:
      "The Founder's Edition is a custom, heavy-duty hardcover with foil stamped accents, individually numbered and hand-signed by Lucas, with exclusive bonus material and founding reader recognition. The Paperback is the complete unabridged standard edition. The eBook includes the complete text with hyperlinked resource anchors formatted for Kindle, Apple Books, and e-readers.",
  },
  {
    question: 'When will preorder books ship?',
    answer:
      "Preorder books are currently queued for print production through Up Armor Publishing and Ingram. Founder's Edition copies and standard paperbacks will ship immediately upon print run completion. All preorder customers receive milestone shipping updates via email.",
  },
  {
    question: "Is the Founder's Edition limited?",
    answer:
      "Yes. The Founder's Edition quantity is strictly capped and will be locked once final inventory is allocated. Once sold out, it will be marked SOLD OUT and will NEVER be reprinted as a standard hardcover.",
  },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: '1',
    slug: 'the-first-140-pounds',
    title: 'The Truth About Losing 140 Pounds: Why The First 30 Pounds Are A Trap',
    excerpt:
      'Anyone can suffer for six weeks on 1,000 calories and drop water weight. The real challenge is building a metabolic and psychological floor that never lets you gain it back.',
    category: 'Nutrition',
    date: 'September 4, 2026',
    readTime: '6 min read',
    author: 'Lucas Heffner',
    pullQuote:
      'I didn’t write Cut the Crap because I’ve always had nutrition figured out. I wrote it because I didn’t. Knowing what to do and building a life around doing it are two very different things.',
    content: [
      'Losing weight isn’t complicated because your body is mysterious. It is complicated because modern food environments are engineered for hyper-palatability, and modern diet marketing is engineered for repeat failure.',
      'When I was at 44% body fat, I thought my problem was a lack of willpower. I would start an aggressive crash diet, white-knuckle my way through chicken breast and steamed greens, and drop 25 pounds in a month. But willpower is a finite daily battery. The moment life threw an Army training exercise, a stressful business crisis, or a family emergency at me, the diet shattered.',
      'The turning point came when I stopped searching for another dietary guru and began studying the unbending laws of thermodynamics, protein leverage, and habit psychology. Sustainable fat loss isn’t an exercise in deprivation; it is an engineering problem.',
    ],
  },
  {
    id: '2',
    slug: 'energy-balance-without-the-obsession',
    title: 'Energy Balance Without The Obsession: How To Track Without Losing Your Mind',
    excerpt:
      'Tracking food is often portrayed as either an absolute requirement or a neurotic disorder. Here is the sensible, middle-path approach that creates permanent awareness.',
    category: 'Cut the Crap',
    date: 'August 28, 2026',
    readTime: '5 min read',
    author: 'Lucas Heffner',
    pullQuote:
      'You cannot manage what you do not measure, but you do not need to measure forever once you understand the weight of your choices.',
    content: [
      'The moment you tell someone to log their meals in an app, they envision scanning every grain of salt at an anniversary dinner. That is not how sustainable transformation works.',
      'Consider tracking food like keeping a business expense ledger. When a company is hemorrhaging cash, the accountant doesn’t guess at expenses—they audit the books for 30 to 60 days to locate the leaks. Once the leaks are plugged and new spending norms are established, daily bookkeeping becomes effortless.',
      'When you track your meals accurately for just two to three weeks, you eliminate the cognitive blind spots that sabotage 90% of dieters: cooking oils, coffee creamers, mindless handfuls of nuts, and weekend social binges.',
    ],
  },
  {
    id: '3',
    slug: 'battle-buddy-principle',
    title: 'The Battle Buddy Principle: Why Solitary Dieting Almost Always Fails',
    excerpt:
      'In the Army, you never patrol alone. Why do we expect civilians to navigate intense physiological and psychological transformations in isolation?',
    category: 'Mindset',
    date: 'August 15, 2026',
    readTime: '7 min read',
    author: 'Lucas Heffner',
    pullQuote:
      'Change is easier when you aren’t doing it alone. Having someone to call you out on your excuses is the highest form of respect.',
    content: [
      'In the military, accountability isn’t a corporate buzzword; it is a survival protocol. Your battle buddy verifies your equipment, monitors your hydration, and pulls you forward when you’re ready to quit.',
      'Yet when people decide to change their health, they routinely keep it a secret. They hide in the shadows because they fear failing in front of others. But secrecy is the playground of rationalization. When nobody knows your commitments, quitting requires zero explanation.',
      'That is why the Cut the Crap Community exists. Finding someone who shares your standard turns solitary resistance into collective momentum.',
    ],
  },
];

export const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: 'founders-hardcover',
    title: 'CUT THE CRAP',
    edition: "Founder's Edition Hardcover (Signed & Numbered)",
    price: 49.0,
    quantity: 1,
    isFoundersEdition: true,
    isDigital: false,
  },
];
