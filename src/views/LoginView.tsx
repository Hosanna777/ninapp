import type { FormEvent } from 'react';
import AuthFormActions from '../components/AuthFormActions';
import AuthLayout from '../components/AuthLayout';
import DemoUserList from '../components/DemoUserList';
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
    <AuthLayout
      aside={
        <div className="auth-copy">
          <span className="eyebrow">Login</span>
          <h2>ログイン</h2>
          <p>
            このリポジトリではバックエンドは持たず、`GET /mock/test-users.json`
            で取得したテストユーザを使って画面確認できます。
          </p>
          <DemoUserList
            authError={authError}
            demoUsers={demoUsers}
            isAuthLoading={isAuthLoading}
            onUseDemoUser={onUseDemoUser}
          />
        </div>
      }
      form={
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
          <AuthFormActions
            primaryLabel="ログイン"
            secondaryLabel="新規登録画面へ"
            onSecondaryClick={onGoToRegister}
          />
        </form>
      }
    />
  );
}

export default LoginView;
