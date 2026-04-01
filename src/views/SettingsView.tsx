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
  shippingBuilding: string;
  shippingCity: string;
  shippingName: string;
  shippingPostalCode: string;
  shippingPrefecture: string;
  shippingStreetAddress: string;
  shippingPhoneNumber: string;
  onCardHolderNameChange: (value: string) => void;
  onGoHome: () => void;
  onPaymentMethodChange: (value: string) => void;
  onSave: (event: FormEvent<HTMLFormElement>) => void;
  onSecurityEmailChange: (value: string) => void;
  onSecurityPasswordChange: (value: string) => void;
  onShippingBuildingChange: (value: string) => void;
  onShippingCityChange: (value: string) => void;
  onShippingNameChange: (value: string) => void;
  onShippingPostalCodeChange: (value: string) => void;
  onShippingPrefectureChange: (value: string) => void;
  onShippingStreetAddressChange: (value: string) => void;
  onShippingPhoneNumberChange: (value: string) => void;
};

function SettingsView({
  cardHolderName,
  paymentMethod,
  securityEmail,
  securityPassword,
  settingsMessage,
  shippingBuilding,
  shippingCity,
  shippingName,
  shippingPostalCode,
  shippingPrefecture,
  shippingStreetAddress,
  shippingPhoneNumber,
  onCardHolderNameChange,
  onGoHome,
  onPaymentMethodChange,
  onSave,
  onSecurityEmailChange,
  onSecurityPasswordChange,
  onShippingBuildingChange,
  onShippingCityChange,
  onShippingNameChange,
  onShippingPostalCodeChange,
  onShippingPrefectureChange,
  onShippingStreetAddressChange,
  onShippingPhoneNumberChange,
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
          shippingBuilding={shippingBuilding}
          shippingCity={shippingCity}
          shippingName={shippingName}
          shippingPostalCode={shippingPostalCode}
          shippingPrefecture={shippingPrefecture}
          shippingStreetAddress={shippingStreetAddress}
          shippingPhoneNumber={shippingPhoneNumber}
          onShippingBuildingChange={onShippingBuildingChange}
          onShippingCityChange={onShippingCityChange}
          onShippingNameChange={onShippingNameChange}
          onShippingPostalCodeChange={onShippingPostalCodeChange}
          onShippingPrefectureChange={onShippingPrefectureChange}
          onShippingStreetAddressChange={onShippingStreetAddressChange}
          onShippingPhoneNumberChange={onShippingPhoneNumberChange}
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
