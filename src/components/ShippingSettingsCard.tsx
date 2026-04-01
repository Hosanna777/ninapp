import FormField from './FormField';
import SettingsCard from './SettingsCard';

type ShippingSettingsCardProps = {
  shippingBuilding: string;
  shippingCity: string;
  shippingCityError?: string;
  shippingFirstName: string;
  shippingFirstNameError?: string;
  shippingFirstNameKana: string;
  shippingFirstNameKanaError?: string;
  shippingLastName: string;
  shippingLastNameError?: string;
  shippingLastNameKana: string;
  shippingLastNameKanaError?: string;
  shippingMiddleName: string;
  shippingMiddleNameKana: string;
  shippingMiddleNameKanaError?: string;
  shippingPostalCode: string;
  shippingPostalCodeError?: string;
  shippingPrefecture: string;
  shippingPrefectureError?: string;
  shippingStreetAddress: string;
  shippingStreetAddressError?: string;
  shippingPhoneNumber: string;
  shippingPhoneNumberError?: string;
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

function ShippingSettingsCard({
  shippingBuilding,
  shippingCity,
  shippingCityError,
  shippingFirstName,
  shippingFirstNameError,
  shippingFirstNameKana,
  shippingFirstNameKanaError,
  shippingLastName,
  shippingLastNameError,
  shippingLastNameKana,
  shippingLastNameKanaError,
  shippingMiddleName,
  shippingMiddleNameKana,
  shippingMiddleNameKanaError,
  shippingPostalCode,
  shippingPostalCodeError,
  shippingPrefecture,
  shippingPrefectureError,
  shippingStreetAddress,
  shippingStreetAddressError,
  shippingPhoneNumber,
  shippingPhoneNumberError,
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
}: ShippingSettingsCardProps) {
  return (
    <SettingsCard label="Shipping" title="配送先情報">
      <FormField
        label="姓"
        type="text"
        value={shippingLastName}
        error={shippingLastNameError}
        required
        onChange={(event) => onShippingLastNameChange(event.target.value)}
        placeholder="山田"
      />
      <FormField
        label="名"
        type="text"
        value={shippingFirstName}
        error={shippingFirstNameError}
        required
        onChange={(event) => onShippingFirstNameChange(event.target.value)}
        placeholder="太郎"
      />
      <FormField
        label="ミドルネーム"
        type="text"
        value={shippingMiddleName}
        onChange={(event) => onShippingMiddleNameChange(event.target.value)}
        placeholder="James"
      />
      <FormField
        label="セイ"
        type="text"
        value={shippingLastNameKana}
        error={shippingLastNameKanaError}
        required
        onChange={(event) => onShippingLastNameKanaChange(event.target.value)}
        placeholder="ヤマダ"
      />
      <FormField
        label="メイ"
        type="text"
        value={shippingFirstNameKana}
        error={shippingFirstNameKanaError}
        required
        onChange={(event) => onShippingFirstNameKanaChange(event.target.value)}
        placeholder="タロウ"
      />
      <FormField
        label="ミドルネーム(カナ)"
        type="text"
        value={shippingMiddleNameKana}
        error={shippingMiddleNameKanaError}
        onChange={(event) => onShippingMiddleNameKanaChange(event.target.value)}
        placeholder="ジェームズ"
      />
      <FormField
        label="郵便番号"
        type="text"
        value={shippingPostalCode}
        error={shippingPostalCodeError}
        required
        onChange={(event) => onShippingPostalCodeChange(event.target.value)}
        placeholder="150-0001"
      />
      <FormField
        label="都道府県"
        type="text"
        value={shippingPrefecture}
        error={shippingPrefectureError}
        required
        onChange={(event) => onShippingPrefectureChange(event.target.value)}
        placeholder="東京都"
      />
      <FormField
        label="市区町村"
        type="text"
        value={shippingCity}
        error={shippingCityError}
        required
        onChange={(event) => onShippingCityChange(event.target.value)}
        placeholder="渋谷区神宮前"
      />
      <FormField
        label="番地"
        type="text"
        value={shippingStreetAddress}
        error={shippingStreetAddressError}
        required
        onChange={(event) => onShippingStreetAddressChange(event.target.value)}
        placeholder="1-2-3"
      />
      <FormField
        label="マンション名・建物名"
        type="text"
        value={shippingBuilding}
        onChange={(event) => onShippingBuildingChange(event.target.value)}
        placeholder="NIN Residence 502"
      />
      <FormField
        label="電話番号"
        type="tel"
        value={shippingPhoneNumber}
        error={shippingPhoneNumberError}
        required
        onChange={(event) => onShippingPhoneNumberChange(event.target.value)}
        placeholder="090-1234-5678"
      />
    </SettingsCard>
  );
}

export default ShippingSettingsCard;
