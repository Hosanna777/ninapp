import type { FormEvent } from 'react';
import FormField from '../components/FormField';
import SectionHeading from '../components/SectionHeading';

type SettingsViewProps = {
  cardHolderName: string;
  paymentMethod: string;
  securityEmail: string;
  securityPassword: string;
  settingsMessage: string;
  shippingAddress: string;
  shippingName: string;
  shippingPostalCode: string;
  onCardHolderNameChange: (value: string) => void;
  onGoHome: () => void;
  onPaymentMethodChange: (value: string) => void;
  onSave: (event: FormEvent<HTMLFormElement>) => void;
  onSecurityEmailChange: (value: string) => void;
  onSecurityPasswordChange: (value: string) => void;
  onShippingAddressChange: (value: string) => void;
  onShippingNameChange: (value: string) => void;
  onShippingPostalCodeChange: (value: string) => void;
};

function SettingsView({
  cardHolderName,
  paymentMethod,
  securityEmail,
  securityPassword,
  settingsMessage,
  shippingAddress,
  shippingName,
  shippingPostalCode,
  onCardHolderNameChange,
  onGoHome,
  onPaymentMethodChange,
  onSave,
  onSecurityEmailChange,
  onSecurityPasswordChange,
  onShippingAddressChange,
  onShippingNameChange,
  onShippingPostalCodeChange,
}: SettingsViewProps) {
  return (
    <section className="settings-section">
      <SectionHeading label="Account Settings" title="ユーザ設定" />
      <form className="settings-shell" onSubmit={onSave}>
        <section className="settings-card">
          <div className="settings-card-head">
            <span className="eyebrow">Payment</span>
            <h3>支払い方法</h3>
          </div>
          <FormField
            label="登録カード"
            type="text"
            value={paymentMethod}
            onChange={(event) => onPaymentMethodChange(event.target.value)}
            placeholder="Visa ending in 4242"
          />
          <FormField
            label="カード名義"
            type="text"
            value={cardHolderName}
            onChange={(event) => onCardHolderNameChange(event.target.value)}
            placeholder="Ryo Demo"
          />
        </section>

        <section className="settings-card">
          <div className="settings-card-head">
            <span className="eyebrow">Shipping</span>
            <h3>配送先情報</h3>
          </div>
          <FormField
            label="氏名"
            type="text"
            value={shippingName}
            onChange={(event) => onShippingNameChange(event.target.value)}
            placeholder="Ryo Demo"
          />
          <FormField
            label="郵便番号"
            type="text"
            value={shippingPostalCode}
            onChange={(event) => onShippingPostalCodeChange(event.target.value)}
            placeholder="150-0001"
          />
          <FormField
            label="住所"
            type="text"
            value={shippingAddress}
            onChange={(event) => onShippingAddressChange(event.target.value)}
            placeholder="東京都..."
          />
        </section>

        <section className="settings-card">
          <div className="settings-card-head">
            <span className="eyebrow">Security</span>
            <h3>認証情報</h3>
          </div>
          <FormField
            label="メールアドレス"
            type="email"
            value={securityEmail}
            onChange={(event) => onSecurityEmailChange(event.target.value)}
            placeholder="ryo@example.com"
          />
          <FormField
            label="新しいパスワード"
            type="password"
            value={securityPassword}
            onChange={(event) => onSecurityPasswordChange(event.target.value)}
            placeholder="8文字以上"
          />
        </section>

        <div className="settings-footer">
          {settingsMessage ? <p className="auth-message">{settingsMessage}</p> : null}
          <div className="settings-actions">
            <button className="primary-button" type="submit">
              変更を保存
            </button>
            <button className="ghost-button" type="button" onClick={onGoHome}>
              ホームへ戻る
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SettingsView;
