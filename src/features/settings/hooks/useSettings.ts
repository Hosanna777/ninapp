import type { FormEvent } from 'react';
import { useState } from 'react';

function useSettings() {
  const [paymentMethod, setPaymentMethod] = useState('Visa ending in 4242');
  const [cardHolderName, setCardHolderName] = useState('Ryo Demo');
  const [shippingName, setShippingName] = useState('Ryo Demo');
  const [shippingPostalCode, setShippingPostalCode] = useState('150-0001');
  const [shippingAddress, setShippingAddress] = useState(
    '東京都渋谷区神宮前 1-2-3 NIN Residence 502',
  );
  const [securityEmail, setSecurityEmail] = useState('ryo@example.com');
  const [securityPassword, setSecurityPassword] = useState('demo1234');
  const [settingsMessage, setSettingsMessage] = useState('');

  return {
    cardHolderName,
    paymentMethod,
    securityEmail,
    securityPassword,
    settingsMessage,
    shippingAddress,
    shippingName,
    shippingPostalCode,
    handleSettingsSave: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSettingsMessage(
        '設定内容を画面上で更新しました。バックエンド未実装のため、この変更は現在のセッション内のみ有効です。',
      );
    },
    setCardHolderName,
    setPaymentMethod,
    setSecurityEmail,
    setSecurityPassword,
    setShippingAddress,
    setShippingName,
    setShippingPostalCode,
  };
}

export default useSettings;
