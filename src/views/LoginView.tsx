import type { FormEvent } from 'react';
import FormField from '../components/FormField';
import type { DemoUser } from '../types/auth';

type LoginViewProps = {
  authError: string;
  demoUsers: DemoUser[];
  isAuthLoading: boolean;
  loginEmail: string;
  loginMessage: string;
  loginPassword: string;
  onGoToRegister: () => void;
  onLoginEmailChange: (value: string) => void;
  onLoginPasswordChange: (value: string) => void;
  onLoginSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onUseDemoUser: (user: DemoUser) => void;
};

function LoginView({
  authError,
  demoUsers,
  isAuthLoading,
  loginEmail,
  loginMessage,
  loginPassword,
  onGoToRegister,
  onLoginEmailChange,
  onLoginPasswordChange,
  onLoginSubmit,
  onUseDemoUser,
}: LoginViewProps) {
  return (
    <section className="auth-section">
      <div className="auth-shell">
        <div className="auth-copy">
          <span className="eyebrow">Login</span>
          <h2>ログイン</h2>
          <p>
            このリポジトリではバックエンドは持たず、`GET /mock/test-users.json`
            で取得したテストユーザを使って画面確認できます。
          </p>
          <div className="auth-demo-users">
            <h3>テストユーザ</h3>
            {isAuthLoading ? (
              <p>読み込み中...</p>
            ) : authError ? (
              <p>{authError}</p>
            ) : (
              demoUsers.map((user) => (
                <button
                  key={user.id}
                  className="demo-user-card"
                  type="button"
                  onClick={() => onUseDemoUser(user)}
                >
                  <strong>{user.name}</strong>
                  <span>{user.email}</span>
                  <em>password: {user.password}</em>
                </button>
              ))
            )}
          </div>
        </div>
        <form className="auth-form-shell" onSubmit={onLoginSubmit}>
          <FormField
            label="メールアドレス"
            type="email"
            value={loginEmail}
            onChange={(event) => onLoginEmailChange(event.target.value)}
            placeholder="ryo@example.com"
          />
          <FormField
            label="パスワード"
            type="password"
            value={loginPassword}
            onChange={(event) => onLoginPasswordChange(event.target.value)}
            placeholder="demo1234"
          />
          {loginMessage ? <p className="auth-message">{loginMessage}</p> : null}
          <button className="primary-button auth-submit" type="submit">
            ログイン
          </button>
          <button className="ghost-button auth-submit" type="button" onClick={onGoToRegister}>
            新規登録画面へ
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginView;
