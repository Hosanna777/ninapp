import FormField from './FormField';
import SettingsCard from './SettingsCard';

type ShippingSettingsCardProps = {
  shippingAddress: string;
  shippingName: string;
  shippingPostalCode: string;
  onShippingAddressChange: (value: string) => void;
  onShippingNameChange: (value: string) => void;
  onShippingPostalCodeChange: (value: string) => void;
};

function ShippingSettingsCard({
  shippingAddress,
  shippingName,
  shippingPostalCode,
  onShippingAddressChange,
  onShippingNameChange,
  onShippingPostalCodeChange,
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
        label="住所"
        type="text"
        value={shippingAddress}
        onChange={(event) => onShippingAddressChange(event.target.value)}
        placeholder="東京都..."
      />
    </SettingsCard>
  );
}

export default ShippingSettingsCard;
