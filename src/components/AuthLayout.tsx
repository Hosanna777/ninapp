import type { ReactNode } from 'react';

type AuthLayoutProps = {
  aside: ReactNode;
  form: ReactNode;
};

function AuthLayout({ aside, form }: AuthLayoutProps) {
  return (
    <section className="auth-section">
      <div className="auth-shell">
        {aside}
        {form}
      </div>
    </section>
  );
}

export default AuthLayout;
