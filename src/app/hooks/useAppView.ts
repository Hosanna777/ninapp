import { useState } from 'react';
import type { AppView } from '../../features/navigation/model/view';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function useAppView() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navigateTo = (view: AppView) => {
    setIsUserMenuOpen(false);
    setCurrentView(view);
    scrollToTop();
  };

  return {
    currentView,
    isUserMenuOpen,
    closeUserMenu: () => setIsUserMenuOpen(false),
    goToCart: () => navigateTo('cart'),
    goToHome: () => navigateTo('home'),
    goToLogin: () => navigateTo('login'),
    goToProducts: () => navigateTo('products'),
    goToRegister: () => navigateTo('register'),
    goToSettings: () => navigateTo('settings'),
    openProductDetail: () => navigateTo('detail'),
    toggleUserMenu: () => setIsUserMenuOpen((current) => !current),
  };
}
