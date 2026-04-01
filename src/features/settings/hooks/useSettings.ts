import type { FormEvent } from 'react';
import { useState } from 'react';
import {
  validateSettings,
  type SettingsFormErrors,
  type SettingsFormValues,
} from '../model/settingsValidation';

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
  const [settingsErrors, setSettingsErrors] = useState<SettingsFormErrors>({});
  const [settingsMessage, setSettingsMessage] = useState('');

  const clearFieldError = (field: keyof SettingsFormValues) => {
    setSettingsErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const createFieldSetter =
    (field: keyof SettingsFormValues, setter: (value: string) => void) => (value: string) => {
      setter(value);
      clearFieldError(field);
    };

  const values: SettingsFormValues = {
    cardHolderName,
    paymentMethod,
    securityEmail,
    securityPassword,
    shippingBuilding,
    shippingCity,
    shippingFirstName,
    shippingFirstNameKana,
    shippingLastName,
    shippingLastNameKana,
    shippingMiddleName,
    shippingMiddleNameKana,
    shippingPhoneNumber,
    shippingPostalCode,
    shippingPrefecture,
    shippingStreetAddress,
  };

  return {
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
    handleSettingsSave: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const errors = validateSettings(values);
      setSettingsErrors(errors);

      if (Object.keys(errors).length > 0) {
        setSettingsMessage('');
        return;
      }

      setSettingsMessage(
        '設定内容を画面上で更新しました。バックエンド未実装のため、この変更は現在のセッション内のみ有効です。',
      );
      setSettingsErrors({});
    },
    setCardHolderName: createFieldSetter('cardHolderName', setCardHolderName),
    setPaymentMethod: createFieldSetter('paymentMethod', setPaymentMethod),
    setSecurityEmail: createFieldSetter('securityEmail', setSecurityEmail),
    setSecurityPassword: createFieldSetter('securityPassword', setSecurityPassword),
    setShippingBuilding: createFieldSetter('shippingBuilding', setShippingBuilding),
    setShippingCity: createFieldSetter('shippingCity', setShippingCity),
    setShippingFirstName: createFieldSetter('shippingFirstName', setShippingFirstName),
    setShippingFirstNameKana: createFieldSetter('shippingFirstNameKana', setShippingFirstNameKana),
    setShippingLastName: createFieldSetter('shippingLastName', setShippingLastName),
    setShippingLastNameKana: createFieldSetter('shippingLastNameKana', setShippingLastNameKana),
    setShippingMiddleName: createFieldSetter('shippingMiddleName', setShippingMiddleName),
    setShippingMiddleNameKana: createFieldSetter(
      'shippingMiddleNameKana',
      setShippingMiddleNameKana,
    ),
    setShippingPostalCode: createFieldSetter('shippingPostalCode', setShippingPostalCode),
    setShippingPrefecture: createFieldSetter('shippingPrefecture', setShippingPrefecture),
    setShippingStreetAddress: createFieldSetter(
      'shippingStreetAddress',
      setShippingStreetAddress,
    ),
    setShippingPhoneNumber: createFieldSetter('shippingPhoneNumber', setShippingPhoneNumber),
  };
}

export default useSettings;
