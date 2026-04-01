import type { FormEvent } from 'react';
import PaymentSettingsCard from '../components/PaymentSettingsCard';
import SecuritySettingsCard from '../components/SecuritySettingsCard';
import SectionHeading from '../components/SectionHeading';
import ShippingSettingsCard from '../components/ShippingSettingsCard';

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
        <PaymentSettingsCard
          cardHolderName={cardHolderName}
          paymentMethod={paymentMethod}
          onCardHolderNameChange={onCardHolderNameChange}
          onPaymentMethodChange={onPaymentMethodChange}
        />
        <ShippingSettingsCard
          shippingAddress={shippingAddress}
          shippingName={shippingName}
          shippingPostalCode={shippingPostalCode}
          onShippingAddressChange={onShippingAddressChange}
          onShippingNameChange={onShippingNameChange}
          onShippingPostalCodeChange={onShippingPostalCodeChange}
        />
        <SecuritySettingsCard
          securityEmail={securityEmail}
          securityPassword={securityPassword}
          onSecurityEmailChange={onSecurityEmailChange}
          onSecurityPasswordChange={onSecurityPasswordChange}
        />

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
