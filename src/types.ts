export type BookStatus = 'in-development' | 'coming-soon' | 'preorder' | 'available' | 'sold-out';

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  status: BookStatus;
  statusLabel: string;
  coverImage?: string;
  description: string;
  formats: string[];
  isCutTheCrap?: boolean;
  isPlaceholder?: boolean;
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'training' | 'nutrition' | 'faith' | 'discipline';
}

export type ToolboxCategory =
  | 'Nutrition & Food'
  | 'Kitchen Tools'
  | 'Tracking'
  | 'Fitness'
  | 'Books & Learning'
  | 'Products I Use';

export interface ToolboxItem {
  id: string;
  category: ToolboxCategory;
  name: string;
  explanation: string;
  whyLucasRecommends: string;
  affiliateUrl: string;
  priceEstimate?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Nutrition' | 'Fitness' | 'Mindset' | 'Cut the Crap' | 'Books' | 'Life / Leadership';
  date: string;
  readTime: string;
  author: string;
  content: string[];
  pullQuote?: string;
}

export interface CartItem {
  id: string;
  title: string;
  edition: string;
  price: number;
  quantity: number;
  isFoundersEdition?: boolean;
  isDigital?: boolean;
}

export type PageRoute =
  | '/'
  | '/style-guide'
  | '/about'
  | '/books'
  | '/cutthecrap'
  | '/cutthecrap/toolkit'
  | '/toolkit'
  | '/toolbox'
  | '/community'
  | '/shareyourclickmoment'
  | '/findyourbattlebuddy'
  | '/resources'
  | '/articles'
  | '/article-detail'
  | '/store'
  | '/cart'
  | '/checkout'
  | '/my-account'
  | '/contact'
  | '/privacy-policy'
  | '/terms'
  | '/shipping-returns'
  | '/affiliate-disclosure'
  | '/accessibility'
  | '/cookie-policy'
  | '/legal-template'
  | '/sitemap';
