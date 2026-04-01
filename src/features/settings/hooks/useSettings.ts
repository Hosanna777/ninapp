import type { FormEvent } from 'react';
import { useState } from 'react';

function useSettings() {
  const [paymentMethod, setPaymentMethod] = useState('Visa ending in 4242');
  const [cardHolderName, setCardHolderName] = useState('Ryo Demo');
  const [shippingLastName, setShippingLastName] = useState('山田');
  const [shippingFirstName, setShippingFirstName] = useState('太郎');
  const [shippingMiddleName, setShippingMiddleName] = useState('');
  const [shippingLastNameKana, setShippingLastNameKana] = useState('ヤマダ');
  const [shippingFirstNameKana, setShippingFirstNameKana] = useState('タロウ');
  const [shippingMiddleNameKana, setShippingMiddleNameKana] = useState('');
  const [shippingPostalCode, setShippingPostalCode] = useState('150-0001');
  const [shippingPrefecture, setShippingPrefecture] = useState('東京都');
  const [shippingCity, setShippingCity] = useState('渋谷区神宮前');
  const [shippingStreetAddress, setShippingStreetAddress] = useState('1-2-3');
  const [shippingBuilding, setShippingBuilding] = useState('NIN Residence 502');
  const [shippingPhoneNumber, setShippingPhoneNumber] = useState('090-1234-5678');
  const [securityEmail, setSecurityEmail] = useState('ryo@example.com');
  const [securityPassword, setSecurityPassword] = useState('demo1234');
  const [settingsMessage, setSettingsMessage] = useState('');

  return {
    cardHolderName,
    paymentMethod,
    securityEmail,
    securityPassword,
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
    setShippingBuilding,
    setShippingCity,
    setShippingFirstName,
    setShippingFirstNameKana,
    setShippingLastName,
    setShippingLastNameKana,
    setShippingMiddleName,
    setShippingMiddleNameKana,
    setShippingPostalCode,
    setShippingPrefecture,
    setShippingStreetAddress,
    setShippingPhoneNumber,
  };
}

export default useSettings;
