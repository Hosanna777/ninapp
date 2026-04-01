import type { FormEvent } from 'react';
import PaymentSettingsCard from '../components/PaymentSettingsCard';
import SecuritySettingsCard from '../components/SecuritySettingsCard';
import SectionHeading from '../components/SectionHeading';
import ShippingSettingsCard from '../components/ShippingSettingsCard';
import type { SettingsFormErrors } from '../features/settings/model/settingsValidation';

type SettingsViewProps = {
  cardHolderName: string;
  paymentMethod: string;
  securityEmail: string;
  securityPassword: string;
  settingsErrors: SettingsFormErrors;
  settingsMessage: string;
  shippingBuilding: string;
  shippingCity: string;
  shippingFirstName: string;
  shippingFirstNameKana: string;
  shippingLastName: string;
  shippingLastNameKana: string;
  shippingMiddleName: string;
  shippingMiddleNameKana: string;
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
  onShippingFirstNameChange: (value: string) => void;
  onShippingFirstNameKanaChange: (value: string) => void;
  onShippingLastNameChange: (value: string) => void;
  onShippingLastNameKanaChange: (value: string) => void;
  onShippingMiddleNameChange: (value: string) => void;
  onShippingMiddleNameKanaChange: (value: string) => void;
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
  settingsErrors,
  settingsMessage,
  shippingBuilding,
  shippingCity,
  shippingFirstName,
  shippingFirstNameKana,
  shippingLastName,
  shippingLastNameKana,
  shippingMiddleName,
  shippingMiddleNameKana,
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
  onShippingFirstNameChange,
  onShippingFirstNameKanaChange,
  onShippingLastNameChange,
  onShippingLastNameKanaChange,
  onShippingMiddleNameChange,
  onShippingMiddleNameKanaChange,
  onShippingPostalCodeChange,
  onShippingPrefectureChange,
  onShippingStreetAddressChange,
  onShippingPhoneNumberChange,
}: SettingsViewProps) {
  return (
    <section className="settings-section">
      <SectionHeading label="Account Settings" title="ユーザ設定" />
      <form className="settings-shell" noValidate onSubmit={onSave}>
        <PaymentSettingsCard
          cardHolderName={cardHolderName}
          cardHolderNameError={settingsErrors.cardHolderName}
          paymentMethod={paymentMethod}
          paymentMethodError={settingsErrors.paymentMethod}
          onCardHolderNameChange={onCardHolderNameChange}
          onPaymentMethodChange={onPaymentMethodChange}
        />
        <ShippingSettingsCard
          shippingBuilding={shippingBuilding}
          shippingCity={shippingCity}
          shippingCityError={settingsErrors.shippingCity}
          shippingFirstName={shippingFirstName}
          shippingFirstNameError={settingsErrors.shippingFirstName}
          shippingFirstNameKana={shippingFirstNameKana}
          shippingFirstNameKanaError={settingsErrors.shippingFirstNameKana}
          shippingLastName={shippingLastName}
          shippingLastNameError={settingsErrors.shippingLastName}
          shippingLastNameKana={shippingLastNameKana}
          shippingLastNameKanaError={settingsErrors.shippingLastNameKana}
          shippingMiddleName={shippingMiddleName}
          shippingMiddleNameKana={shippingMiddleNameKana}
          shippingMiddleNameKanaError={settingsErrors.shippingMiddleNameKana}
          shippingPostalCode={shippingPostalCode}
          shippingPostalCodeError={settingsErrors.shippingPostalCode}
          shippingPrefecture={shippingPrefecture}
          shippingPrefectureError={settingsErrors.shippingPrefecture}
          shippingStreetAddress={shippingStreetAddress}
          shippingStreetAddressError={settingsErrors.shippingStreetAddress}
          shippingPhoneNumber={shippingPhoneNumber}
          shippingPhoneNumberError={settingsErrors.shippingPhoneNumber}
          onShippingBuildingChange={onShippingBuildingChange}
          onShippingCityChange={onShippingCityChange}
          onShippingFirstNameChange={onShippingFirstNameChange}
          onShippingFirstNameKanaChange={onShippingFirstNameKanaChange}
          onShippingLastNameChange={onShippingLastNameChange}
          onShippingLastNameKanaChange={onShippingLastNameKanaChange}
          onShippingMiddleNameChange={onShippingMiddleNameChange}
          onShippingMiddleNameKanaChange={onShippingMiddleNameKanaChange}
          onShippingPostalCodeChange={onShippingPostalCodeChange}
          onShippingPrefectureChange={onShippingPrefectureChange}
          onShippingStreetAddressChange={onShippingStreetAddressChange}
          onShippingPhoneNumberChange={onShippingPhoneNumberChange}
        />
        <SecuritySettingsCard
          securityEmail={securityEmail}
          securityEmailError={settingsErrors.securityEmail}
          securityPassword={securityPassword}
          securityPasswordError={settingsErrors.securityPassword}
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
