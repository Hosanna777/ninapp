import type { FormEvent } from 'react';
import FormField from '../components/FormField';

type RegisterViewProps = {
  registerEmail: string;
  registerMessage: string;
  registerName: string;
  registerPassword: string;
  onGoToLogin: () => void;
  onRegisterEmailChange: (value: string) => void;
  onRegisterNameChange: (value: string) => void;
  onRegisterPasswordChange: (value: string) => void;
  onRegisterSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

function RegisterView({
  registerEmail,
  registerMessage,
  registerName,
  registerPassword,
  onGoToLogin,
  onRegisterEmailChange,
  onRegisterNameChange,
  onRegisterPasswordChange,
  onRegisterSubmit,
}: RegisterViewProps) {
  return (
    <section className="auth-section">
      <div className="auth-shell">
        <div className="auth-copy">
          <span className="eyebrow">Register</span>
          <h2>ユーザ登録</h2>
          <p>
            フロントエンド用の登録UIです。POST 実装は行わず、現状はテスト用の GET
            API 呼び出しまでに留めています。
          </p>
        </div>
        <form className="auth-form-shell" onSubmit={onRegisterSubmit}>
          <FormField
            label="表示名"
            type="text"
            value={registerName}
            onChange={(event) => onRegisterNameChange(event.target.value)}
            placeholder="Ryo Demo"
          />
          <FormField
            label="メールアドレス"
            type="email"
            value={registerEmail}
            onChange={(event) => onRegisterEmailChange(event.target.value)}
            placeholder="name@example.com"
          />
          <FormField
            label="パスワード"
            type="password"
            value={registerPassword}
            onChange={(event) => onRegisterPasswordChange(event.target.value)}
            placeholder="8文字以上"
          />
          {registerMessage ? <p className="auth-message">{registerMessage}</p> : null}
          <button className="primary-button auth-submit" type="submit">
            登録する
          </button>
          <button className="ghost-button auth-submit" type="button" onClick={onGoToLogin}>
            ログイン画面へ
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegisterView;
