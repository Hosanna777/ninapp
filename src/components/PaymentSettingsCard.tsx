import FormField from './FormField';
import SettingsCard from './SettingsCard';

type PaymentSettingsCardProps = {
  cardHolderName: string;
  paymentMethod: string;
  onCardHolderNameChange: (value: string) => void;
  onPaymentMethodChange: (value: string) => void;
};

function PaymentSettingsCard({
  cardHolderName,
  paymentMethod,
  onCardHolderNameChange,
  onPaymentMethodChange,
}: PaymentSettingsCardProps) {
  return (
    <SettingsCard label="Payment" title="支払い方法">
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
    </SettingsCard>
  );
}

export default PaymentSettingsCard;
