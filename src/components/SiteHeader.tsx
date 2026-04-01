import type { DemoUser } from '../types/auth';

type SiteHeaderProps = {
  currentUser: DemoUser | null;
  isUserMenuOpen: boolean;
  totalCartItems: number;
  onGoHome: () => void;
  onGoProducts: () => void;
  onGoCart: () => void;
  onGoLogin: () => void;
  onGoRegister: () => void;
  onGoSettings: () => void;
  onLogout: () => void;
  onToggleUserMenu: () => void;
};

function SiteHeader({
  currentUser,
  isUserMenuOpen,
  totalCartItems,
  onGoHome,
  onGoProducts,
  onGoCart,
  onGoLogin,
  onGoRegister,
  onGoSettings,
  onLogout,
  onToggleUserMenu,
}: SiteHeaderProps) {
  return (
    <header className="hero">
      <nav className="topbar">
        <button className="brand brand-button" type="button" onClick={onGoHome}>
          <img className="brand-logo" src="/logo-ninapp.svg" alt="NINAPP" />
          <div>
            <p>NINAPP</p>
            <span>Modern commerce experience</span>
          </div>
        </button>
        <div className="nav-links">
          <button type="button" className="nav-link-button" onClick={onGoHome}>
            Home
          </button>
          <button type="button" className="nav-link-button" onClick={onGoProducts}>
            Product List
          </button>
          <button type="button" className="cart-nav-button" onClick={onGoCart}>
            <span>Cart</span>
            <strong>{totalCartItems}</strong>
          </button>
          {currentUser ? (
            <div className="user-menu">
              <button
                type="button"
                className="user-chip user-menu-trigger"
                onClick={onToggleUserMenu}
                aria-expanded={isUserMenuOpen}
                aria-haspopup="menu"
              >
                <span>{currentUser.name}</span>
                <strong>{isUserMenuOpen ? '−' : '+'}</strong>
              </button>
              {isUserMenuOpen ? (
                <div className="user-dropdown" role="menu">
                  <button type="button" className="user-dropdown-item" onClick={onGoSettings}>
                    Settings
                  </button>
                  <button type="button" className="user-dropdown-item" onClick={onLogout}>
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <>
              <button type="button" className="nav-link-button" onClick={onGoLogin}>
                Login
              </button>
              <button type="button" className="nav-link-button" onClick={onGoRegister}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;
