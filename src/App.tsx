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

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    // If the URL contains an old hash like #/books, migrate it cleanly to a pathname
    if (window.location.hash) {
      const cleaned = window.location.hash.replace(/^#\/?/, '/');
      if (cleaned && cleaned.startsWith('/')) {
        return cleaned as PageRoute;
      }
    }
    const path = window.location.pathname;
    if (path && path.startsWith('/') && path !== '/') {
      return path as PageRoute;
    }
    return '/';
  });

  const [selectedArticle, setSelectedArticle] = useState<Article>(ARTICLES_DATA[0]);
  const { itemCount } = useCart();

  // Clean HTML5 History navigation without /#
  const navigate = (route: PageRoute) => {
    setCurrentRoute(route);
    try {
      if (window.location.pathname !== route || window.location.hash) {
        window.history.pushState(null, '', route);
      }
    } catch {
      // Safe fallback in sandboxed iframes
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Strip any lingering hash on mount and replace with normal clean route
  useEffect(() => {
    try {
      if (window.location.hash) {
        window.history.replaceState(null, '', currentRoute);
      }
    } catch {
      // Safe fallback in sandboxed iframes
    }
  }, [currentRoute]);

  // Support browser Back and Forward buttons via popstate
  useEffect(() => {
    const handlePopState = () => {
      const path = (window.location.pathname as PageRoute) || '/';
      setCurrentRoute(path);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
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

      {/* Global Footer with Up Armor Imprint */}
      <Footer navigate={navigate} />
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
