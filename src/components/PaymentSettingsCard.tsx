import FormField from './FormField';
import SettingsCard from './SettingsCard';

type PaymentSettingsCardProps = {
  cardHolderName: string;
  cardHolderNameError?: string;
  paymentMethod: string;
  paymentMethodError?: string;
  onCardHolderNameChange: (value: string) => void;
  onPaymentMethodChange: (value: string) => void;
};

function PaymentSettingsCard({
  cardHolderName,
  cardHolderNameError,
  paymentMethod,
  paymentMethodError,
  onCardHolderNameChange,
  onPaymentMethodChange,
}: PaymentSettingsCardProps) {
  return (
    <SettingsCard label="Payment" title="支払い方法">
      <FormField
        label="登録カード"
        type="text"
        value={paymentMethod}
        error={paymentMethodError}
        required
        onChange={(event) => onPaymentMethodChange(event.target.value)}
        placeholder="Visa ending in 4242"
      />
      <FormField
        label="カード名義"
        type="text"
        value={cardHolderName}
        error={cardHolderNameError}
        required
        onChange={(event) => onCardHolderNameChange(event.target.value)}
        placeholder="Ryo Demo"
      />
    </SettingsCard>
  );
}

export default PaymentSettingsCard;
