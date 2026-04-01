import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { fetchDemoUsers } from './api/auth';
import { fetchProducts } from './api/products';
import SiteHeader from './components/SiteHeader';
import CartView from './views/CartView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import ProductDetailView from './views/ProductDetailView';
import ProductsView from './views/ProductsView';
import RegisterView from './views/RegisterView';
import SettingsView from './views/SettingsView';
import type { DemoUser } from './types/auth';
import type { CartItem } from './types/cart';
import type { Product } from './types/product';
import { formatPrice, parsePrice } from './utils/cart';
import { normalizeCarouselIndex } from './utils/carousel';

const carouselRepeatCount = 7;

function App() {
  const [currentView, setCurrentView] = useState<
    'home' | 'products' | 'detail' | 'cart' | 'login' | 'register' | 'settings'
  >('home');
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselAnimating, setIsCarouselAnimating] = useState(true);
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [demoUsers, setDemoUsers] = useState<DemoUser[]>([]);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [currentUser, setCurrentUser] = useState<DemoUser | null>(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Visa ending in 4242');
  const [cardHolderName, setCardHolderName] = useState('Ryo Demo');
  const [shippingName, setShippingName] = useState('Ryo Demo');
  const [shippingPostalCode, setShippingPostalCode] = useState('150-0001');
  const [shippingAddress, setShippingAddress] = useState(
    '東京都渋谷区神宮前 1-2-3 NIN Residence 502',
  );
  const [securityEmail, setSecurityEmail] = useState('ryo@example.com');
  const [securityPassword, setSecurityPassword] = useState('demo1234');
  const [settingsMessage, setSettingsMessage] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const productsLength = products.length;
  const carouselLoopStart = productsLength * Math.floor(carouselRepeatCount / 2);
  const carouselProducts = Array.from({ length: carouselRepeatCount }, () => products).flat();
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.product.price) * item.quantity,
    0,
  );
  const subtotalText = formatPrice(subtotal);
  const cartPreviewText =
    cartItems.length > 0
      ? cartItems
          .slice(0, 2)
          .map((item) => item.product.name)
          .join(' / ')
      : 'まだ商品が追加されていません';

  useEffect(() => {
    if (productsLength === 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setIsCarouselAnimating(true);
      setCarouselIndex((current) => current + 1);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [productsLength]);

  useEffect(() => {
    let isActive = true;

    async function loadProducts() {
      try {
        setIsProductsLoading(true);
        const items = await fetchProducts();
        if (!isActive) return;
        setProducts(items);
        setSelectedProduct(items[0] ?? null);
        setCarouselIndex(items.length * Math.floor(carouselRepeatCount / 2));
        setProductsError('');
      } catch (error) {
        if (!isActive) return;
        setProductsError(
          error instanceof Error ? error.message : '商品データの取得に失敗しました。',
        );
      } finally {
        if (isActive) setIsProductsLoading(false);
      }
    }

    loadProducts();
    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    let isActive = true;

    async function loadDemoUsers() {
      try {
        setIsAuthLoading(true);
        const users = await fetchDemoUsers();
        if (!isActive) return;
        setDemoUsers(users);
        setAuthError('');
      } catch (error) {
        if (!isActive) return;
        setAuthError(
          error instanceof Error ? error.message : '認証データの取得に失敗しました。',
        );
      } finally {
        if (isActive) setIsAuthLoading(false);
      }
    }

    loadDemoUsers();
    return () => {
      isActive = false;
    };
  }, []);

  const navigateTo = (view: typeof currentView) => {
    setIsUserMenuOpen(false);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHome = () => navigateTo('home');
  const goToProducts = () => navigateTo('products');
  const goToCart = () => navigateTo('cart');
  const goToLogin = () => {
    setLoginMessage('');
    navigateTo('login');
  };
  const goToRegister = () => {
    setRegisterMessage('');
    navigateTo('register');
  };
  const goToSettings = () => {
    setSettingsMessage('');
    navigateTo('settings');
  };

  const goToProductDetail = (product: Product) => {
    setIsUserMenuOpen(false);
    setSelectedProduct(product);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showNextSlide = () => {
    if (productsLength === 0) return;
    setIsCarouselAnimating(true);
    setCarouselIndex((current) => current + 1);
  };

  const showPreviousSlide = () => {
    if (productsLength === 0) return;
    setIsCarouselAnimating(true);
    setCarouselIndex((current) => current - 1);
  };

  const handleCarouselTransitionEnd = () => {
    if (productsLength === 0) return;
    const normalizedIndex = normalizeCarouselIndex(
      carouselIndex,
      productsLength,
      carouselLoopStart,
    );
    if (normalizedIndex === carouselIndex) return;

    setIsCarouselAnimating(false);
    setCarouselIndex(normalizedIndex);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsCarouselAnimating(true);
      });
    });
  };

  const addToCart = (product: Product) => {
    setCartItems((current) => {
      const existingItem = current.find((item) => item.product.id === product.id);
      if (existingItem) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...current, { product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId: number, delta: number) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((current) => current.filter((item) => item.product.id !== productId));
  };

  const loginWithDemoUser = (user: DemoUser) => {
    setLoginEmail(user.email);
    setLoginPassword(user.password);
    setLoginMessage(`テストユーザ ${user.name} を入力しました。`);
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const matchedUser = demoUsers.find(
      (user) => user.email === loginEmail && user.password === loginPassword,
    );
    if (!matchedUser) {
      setLoginMessage('メールアドレスまたはパスワードが一致しません。');
      return;
    }
    setCurrentUser(matchedUser);
    setLoginMessage('');
    navigateTo('home');
  };

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!registerName || !registerEmail || !registerPassword) {
      setRegisterMessage('全ての項目を入力してください。');
      return;
    }
    setRegisterMessage(
      '登録画面のUIは実装済みです。バックエンド未実装のため、現在はGETで取得したテストユーザのみ利用できます。',
    );
  };

  const handleSettingsSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSettingsMessage(
      '設定内容を画面上で更新しました。バックエンド未実装のため、この変更は現在のセッション内のみ有効です。',
    );
  };

  const logout = () => {
    setCurrentUser(null);
    navigateTo('home');
  };

  return (
    <div className="page-shell">
      <SiteHeader
        currentUser={currentUser}
        isUserMenuOpen={isUserMenuOpen}
        totalCartItems={totalCartItems}
        onGoHome={goToHome}
        onGoProducts={goToProducts}
        onGoCart={goToCart}
        onGoLogin={goToLogin}
        onGoRegister={goToRegister}
        onGoSettings={goToSettings}
        onLogout={logout}
        onToggleUserMenu={() => setIsUserMenuOpen((current) => !current)}
      />

      <main>
        {currentView === 'home' ? (
          <HomeView
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
            onOpenProduct={goToProductDetail}
            onShowNextSlide={showNextSlide}
            onShowPreviousSlide={showPreviousSlide}
          />
        ) : currentView === 'products' ? (
          <ProductsView
            isProductsLoading={isProductsLoading}
            products={products}
            productsError={productsError}
            onOpenProduct={goToProductDetail}
          />
        ) : currentView === 'cart' ? (
          <CartView
            cartItems={cartItems}
            subtotalText={subtotalText}
            totalCartItems={totalCartItems}
            onGoProducts={goToProducts}
            onOpenProduct={goToProductDetail}
            onRemoveFromCart={removeFromCart}
            onUpdateCartQuantity={updateCartQuantity}
          />
        ) : currentView === 'detail' ? (
          <ProductDetailView
            product={selectedProduct}
            onAddToCart={addToCart}
            onGoCart={goToCart}
            onGoProducts={goToProducts}
          />
        ) : currentView === 'login' ? (
          <LoginView
            authError={authError}
            demoUsers={demoUsers}
            isAuthLoading={isAuthLoading}
            loginEmail={loginEmail}
            loginMessage={loginMessage}
            loginPassword={loginPassword}
            onGoToRegister={goToRegister}
            onLoginEmailChange={setLoginEmail}
            onLoginPasswordChange={setLoginPassword}
            onLoginSubmit={handleLogin}
            onUseDemoUser={loginWithDemoUser}
          />
        ) : currentView === 'register' ? (
          <RegisterView
            registerEmail={registerEmail}
            registerMessage={registerMessage}
            registerName={registerName}
            registerPassword={registerPassword}
            onGoToLogin={goToLogin}
            onRegisterEmailChange={setRegisterEmail}
            onRegisterNameChange={setRegisterName}
            onRegisterPasswordChange={setRegisterPassword}
            onRegisterSubmit={handleRegister}
          />
        ) : (
          <SettingsView
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
        )}
      </main>
    </div>
  );
}

export default App;
