import FormField from './FormField';
import SettingsCard from './SettingsCard';

type ShippingSettingsCardProps = {
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
        onChange={(event) => onShippingLastNameChange(event.target.value)}
        placeholder="山田"
      />
      <FormField
        label="名"
        type="text"
        value={shippingFirstName}
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
        onChange={(event) => onShippingLastNameKanaChange(event.target.value)}
        placeholder="ヤマダ"
      />
      <FormField
        label="メイ"
        type="text"
        value={shippingFirstNameKana}
        onChange={(event) => onShippingFirstNameKanaChange(event.target.value)}
        placeholder="タロウ"
      />
      <FormField
        label="ミドルネーム(カナ)"
        type="text"
        value={shippingMiddleNameKana}
        onChange={(event) => onShippingMiddleNameKanaChange(event.target.value)}
        placeholder="ジェームズ"
      />
      <FormField
        label="郵便番号"
        type="text"
        value={shippingPostalCode}
        onChange={(event) => onShippingPostalCodeChange(event.target.value)}
        placeholder="150-0001"
      />
      <FormField
        label="都道府県"
        type="text"
        value={shippingPrefecture}
        onChange={(event) => onShippingPrefectureChange(event.target.value)}
        placeholder="東京都"
      />
      <FormField
        label="市区町村"
        type="text"
        value={shippingCity}
        onChange={(event) => onShippingCityChange(event.target.value)}
        placeholder="渋谷区神宮前"
      />
      <FormField
        label="番地"
        type="text"
        value={shippingStreetAddress}
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
        onChange={(event) => onShippingPhoneNumberChange(event.target.value)}
        placeholder="090-1234-5678"
      />
    </SettingsCard>
  );
}

export default ShippingSettingsCard;
