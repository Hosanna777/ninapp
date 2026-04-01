import SiteHeader from '../components/SiteHeader';
import useAuth from '../features/auth/hooks/useAuth';
import useCart from '../features/cart/hooks/useCart';
import type { AppView } from '../features/navigation/model/view';
import useProducts from '../features/product/hooks/useProducts';
import useSettings from '../features/settings/hooks/useSettings';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ProductsPage from '../pages/ProductsPage';
import RegisterPage from '../pages/RegisterPage';
import SettingsPage from '../pages/SettingsPage';
import type { Product } from '../types/product';
import { useAppView } from './hooks/useAppView';

function App() {
  const {
    currentView,
    isUserMenuOpen,
    closeUserMenu,
    goToCart,
    goToHome,
    goToLogin,
    goToProducts,
    goToRegister,
    goToSettings,
    openProductDetail,
    toggleUserMenu,
  } = useAppView();
  const {
    authError,
    currentUser,
    demoUsers,
    isAuthLoading,
    loginEmail,
    loginMessage,
    loginPassword,
    registerEmail,
    registerMessage,
    registerName,
    registerPassword,
    handleLogin,
    handleRegister,
    loginWithDemoUser,
    logout,
    setLoginEmail,
    setLoginPassword,
    setRegisterEmail,
    setRegisterName,
    setRegisterPassword,
  } = useAuth({
    onLoginSuccess: goToHome,
  });
  const {
    cardHolderName,
    paymentMethod,
    securityEmail,
    securityPassword,
    settingsMessage,
    shippingAddress,
    shippingName,
    shippingPostalCode,
    handleSettingsSave,
    setCardHolderName,
    setPaymentMethod,
    setSecurityEmail,
    setSecurityPassword,
    setShippingAddress,
    setShippingName,
    setShippingPostalCode,
  } = useSettings();
  const {
    carouselIndex,
    carouselProducts,
    isCarouselAnimating,
    isProductsLoading,
    products,
    productsError,
    selectedProduct,
    handleCarouselTransitionEnd,
    selectProduct,
    showNextSlide,
    showPreviousSlide,
  } = useProducts();
  const {
    cartItems,
    cartPreviewText,
    subtotalText,
    totalCartItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
  } = useCart();

  const openProduct = (product: Product) => {
    closeUserMenu();
    selectProduct(product);
    openProductDetail();
  };

  const openLogin = () => {
    closeUserMenu();
    goToLogin();
  };

  const openRegister = () => {
    closeUserMenu();
    goToRegister();
  };

  const openSettings = () => {
    closeUserMenu();
    goToSettings();
  };

  const logoutAndReturnHome = () => {
    closeUserMenu();
    logout();
  };

  const pages: Record<AppView, JSX.Element> = {
    home: (
      <HomePage
        cartPreviewText={cartPreviewText}
        carouselIndex={carouselIndex}
        carouselProducts={carouselProducts}
        isCarouselAnimating={isCarouselAnimating}
        isProductsLoading={isProductsLoading}
        productsError={productsError}
        subtotalText={subtotalText}
        totalCartItems={totalCartItems}
        onCarouselTransitionEnd={handleCarouselTransitionEnd}
        onGoProducts={goToProducts}
        onOpenProduct={openProduct}
        onShowNextSlide={showNextSlide}
        onShowPreviousSlide={showPreviousSlide}
      />
    ),
    products: (
      <ProductsPage
        isProductsLoading={isProductsLoading}
        products={products}
        productsError={productsError}
        onOpenProduct={openProduct}
      />
    ),
    detail: (
      <ProductDetailPage
        product={selectedProduct}
        onAddToCart={addToCart}
        onGoCart={goToCart}
        onGoProducts={goToProducts}
      />
    ),
    cart: (
      <CartPage
        cartItems={cartItems}
        subtotalText={subtotalText}
        totalCartItems={totalCartItems}
        onGoProducts={goToProducts}
        onOpenProduct={openProduct}
        onRemoveFromCart={removeFromCart}
        onUpdateCartQuantity={updateCartQuantity}
      />
    ),
    login: (
      <LoginPage
        authError={authError}
        demoUsers={demoUsers}
        isAuthLoading={isAuthLoading}
        loginEmail={loginEmail}
        loginMessage={loginMessage}
        loginPassword={loginPassword}
        onGoToRegister={openRegister}
        onLoginEmailChange={setLoginEmail}
        onLoginPasswordChange={setLoginPassword}
        onLoginSubmit={handleLogin}
        onUseDemoUser={loginWithDemoUser}
      />
    ),
    register: (
      <RegisterPage
        registerEmail={registerEmail}
        registerMessage={registerMessage}
        registerName={registerName}
        registerPassword={registerPassword}
        onGoToLogin={openLogin}
        onRegisterEmailChange={setRegisterEmail}
        onRegisterNameChange={setRegisterName}
        onRegisterPasswordChange={setRegisterPassword}
        onRegisterSubmit={handleRegister}
      />
    ),
    settings: (
      <SettingsPage
        cardHolderName={cardHolderName}
        paymentMethod={paymentMethod}
        securityEmail={securityEmail}
        securityPassword={securityPassword}
        settingsMessage={settingsMessage}
        shippingAddress={shippingAddress}
        shippingName={shippingName}
        shippingPostalCode={shippingPostalCode}
        onCardHolderNameChange={setCardHolderName}
        onGoHome={goToHome}
        onPaymentMethodChange={setPaymentMethod}
        onSave={handleSettingsSave}
        onSecurityEmailChange={setSecurityEmail}
        onSecurityPasswordChange={setSecurityPassword}
        onShippingAddressChange={setShippingAddress}
        onShippingNameChange={setShippingName}
        onShippingPostalCodeChange={setShippingPostalCode}
      />
    ),
  };

  return (
    <div className="page-shell">
      <SiteHeader
        currentUser={currentUser}
        isUserMenuOpen={isUserMenuOpen}
        totalCartItems={totalCartItems}
        onGoCart={goToCart}
        onGoHome={goToHome}
        onGoLogin={openLogin}
        onGoProducts={goToProducts}
        onGoRegister={openRegister}
        onGoSettings={openSettings}
        onLogout={logoutAndReturnHome}
        onToggleUserMenu={toggleUserMenu}
      />
      <main>{pages[currentView]}</main>
    </div>
  );
}

export default App;
