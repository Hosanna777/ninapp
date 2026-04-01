import FormField from './FormField';
import SettingsCard from './SettingsCard';

type ShippingSettingsCardProps = {
  shippingBuilding: string;
  shippingCity: string;
  shippingName: string;
  shippingPostalCode: string;
  shippingPrefecture: string;
  shippingStreetAddress: string;
  shippingPhoneNumber: string;
  onShippingBuildingChange: (value: string) => void;
  onShippingCityChange: (value: string) => void;
  onShippingNameChange: (value: string) => void;
  onShippingPostalCodeChange: (value: string) => void;
  onShippingPrefectureChange: (value: string) => void;
  onShippingStreetAddressChange: (value: string) => void;
  onShippingPhoneNumberChange: (value: string) => void;
};

function ShippingSettingsCard({
  shippingBuilding,
  shippingCity,
  shippingName,
  shippingPostalCode,
  shippingPrefecture,
  shippingStreetAddress,
  shippingPhoneNumber,
  onShippingBuildingChange,
  onShippingCityChange,
  onShippingNameChange,
  onShippingPostalCodeChange,
  onShippingPrefectureChange,
  onShippingStreetAddressChange,
  onShippingPhoneNumberChange,
}: ShippingSettingsCardProps) {
  return (
    <SettingsCard label="Shipping" title="配送先情報">
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
