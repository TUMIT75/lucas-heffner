import React, { useState, useEffect } from 'react';
import { PageRoute, Article } from './types';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Page Imports
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BooksPage } from './pages/BooksPage';
import { CutTheCrapPage } from './pages/CutTheCrapPage';
import { ToolboxPage } from './pages/ToolboxPage';
import { CommunityPage } from './pages/CommunityPage';
import { ShareClickMomentPage } from './pages/ShareClickMomentPage';
import { FindBattleBuddyPage } from './pages/FindBattleBuddyPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { StorePage } from './pages/StorePage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { MyAccountPage } from './pages/MyAccountPage';
import { ContactPage } from './pages/ContactPage';
import { StyleGuidePage } from './pages/StyleGuidePage';
import { SitemapPage } from './pages/SitemapPage';
import { LegalPage } from './pages/LegalPage';
import { BookReaderPage } from './pages/BookReaderPage';
import { ARTICLES_DATA } from './data/siteData';
import { Compass, Sparkles } from 'lucide-react';

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    // Read initial route from window hash if present, e.g. #/books -> /books
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('/')) {
      return hash as PageRoute;
    }
    return '/';
  });

  const [selectedArticle, setSelectedArticle] = useState<Article>(ARTICLES_DATA[0]);
  const [showDevNavigator, setShowDevNavigator] = useState(false);
  const { itemCount } = useCart();

  // Keep window hash synchronized for bookmarking and back-forward navigation
  const navigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash.startsWith('/')) {
        setCurrentRoute(hash as PageRoute);
      } else if (!hash) {
        setCurrentRoute('/');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage navigate={navigate} />;
      case '/read-book':
        return <BookReaderPage navigate={navigate} />;
      case '/about':
        return <AboutPage navigate={navigate} />;
      case '/books':
        return <BooksPage navigate={navigate} />;
      case '/cutthecrap':
        return <CutTheCrapPage navigate={navigate} />;
      case '/toolkit':
        return <ToolboxPage navigate={navigate} />;
      case '/community':
        return <CommunityPage navigate={navigate} />;
      case '/shareyourclickmoment':
        return <ShareClickMomentPage navigate={navigate} />;
      case '/findyourbattlebuddy':
        return <FindBattleBuddyPage navigate={navigate} />;
      case '/resources':
        return <ResourcesPage navigate={navigate} />;
      case '/articles':
        return (
          <ArticlesPage
            navigate={navigate}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        );
      case '/article-detail':
        return <ArticleDetailPage navigate={navigate} article={selectedArticle} />;
      case '/store':
        return <StorePage navigate={navigate} />;
      case '/cart':
        return <CartPage navigate={navigate} />;
      case '/checkout':
        return <CheckoutPage navigate={navigate} />;
      case '/my-account':
        return <MyAccountPage navigate={navigate} />;
      case '/contact':
        return <ContactPage navigate={navigate} />;
      case '/style-guide':
        return <StyleGuidePage navigate={navigate} />;
      case '/sitemap':
        return <SitemapPage navigate={navigate} />;
      case '/privacy-policy':
      case '/terms':
      case '/shipping-returns':
      case '/affiliate-disclosure':
      case '/accessibility':
      case '/cookie-policy':
        return <LegalPage route={currentRoute} navigate={navigate} />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#F5F3EF] flex flex-col font-sans selection:bg-[#F85800] selection:text-[#141414]">
      {/* Sticky Header with Staging Banner & Nav */}
      <Header currentRoute={currentRoute} navigate={navigate} cartCount={itemCount} />

      {/* Main Page View */}
      <main className="flex-1 w-full">{renderPage()}</main>

      {/* Global Byte-Identical Footer with Up Armor Imprint */}
      <Footer navigate={navigate} />

      {/* Development Quick Navigation Drawer for Reviewing All Pages */}
      <div className="fixed bottom-4 right-4 z-50">
        {showDevNavigator ? (
          <div className="bg-[#141414] border-2 border-[#F85800] p-4 shadow-2xl max-w-xs w-72 text-xs space-y-3 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#333] pb-2">
              <span className="font-mono font-bold text-[#F85800] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Quick Route Jump
              </span>
              <button
                onClick={() => setShowDevNavigator(false)}
                className="text-[#888] hover:text-[#FFF] font-bold px-1"
              >
                ✕
              </button>
            </div>
            <div className="space-y-1">
              {[
                { label: 'Home (/)', r: '/' },
                { label: 'Books Library (/books)', r: '/books' },
                { label: 'Cut the Crap (/cutthecrap)', r: '/cutthecrap' },
                { label: 'Toolbox (/toolkit)', r: '/toolkit' },
                { label: 'Community (/community)', r: '/community' },
                { label: 'Share Click Moment', r: '/shareyourclickmoment' },
                { label: 'Find Battle Buddy', r: '/findyourbattlebuddy' },
                { label: 'Resources Hub', r: '/resources' },
                { label: 'Articles Index', r: '/articles' },
                { label: 'Store (/store)', r: '/store' },
                { label: 'Cart (/cart)', r: '/cart' },
                { label: 'Checkout (/checkout)', r: '/checkout' },
                { label: 'My Account (/my-account)', r: '/my-account' },
                { label: 'About Lucas (/about)', r: '/about' },
                { label: 'Contact (/contact)', r: '/contact' },
                { label: 'Brand Style Guide', r: '/style-guide' },
                { label: 'Master Coded Sitemap', r: '/sitemap' },
              ].map((item) => (
                <button
                  key={item.r}
                  onClick={() => {
                    navigate(item.r as PageRoute);
                    setShowDevNavigator(false);
                  }}
                  className={`w-full text-left px-2 py-1.5 font-sans transition-colors rounded-none flex items-center justify-between ${
                    currentRoute === item.r
                      ? 'bg-[#F85800] text-[#141414] font-bold'
                      : 'text-[#DDD] hover:bg-[#222] hover:text-[#F85800]'
                  }`}
                >
                  <span>{item.label}</span>
                  {currentRoute === item.r && <span>&bull;</span>}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowDevNavigator(true)}
            className="p-2.5 bg-[#1E1E1E] hover:bg-[#2A2A2A] text-[#C8B088] hover:text-[#F85800] border border-[#333] shadow-lg flex items-center gap-2 text-xs font-mono"
            title="Open Quick Page Switcher"
          >
            <Compass className="w-4 h-4 text-[#F85800]" />
            <span className="hidden sm:inline font-bold">ROUTES ({currentRoute})</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
