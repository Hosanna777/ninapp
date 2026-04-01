export type SettingsFormValues = {
  cardHolderName: string;
  paymentMethod: string;
  securityEmail: string;
  securityPassword: string;
  shippingBuilding: string;
  shippingCity: string;
  shippingFirstName: string;
  shippingFirstNameKana: string;
  shippingLastName: string;
  shippingLastNameKana: string;
  shippingMiddleName: string;
  shippingMiddleNameKana: string;
  shippingPhoneNumber: string;
  shippingPostalCode: string;
  shippingPrefecture: string;
  shippingStreetAddress: string;
};

export type SettingsFormErrors = Partial<Record<keyof SettingsFormValues, string>>;

function isKana(value: string) {
  return /^[ァ-ヶー\s]+$/.test(value);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isPostalCode(value: string) {
  return /^\d{3}-?\d{4}$/.test(value);
}

function isPhoneNumber(value: string) {
  return /^[0-9-+()\s]{10,15}$/.test(value);
}

export function validateSettings(values: SettingsFormValues) {
  const errors: SettingsFormErrors = {};

  if (!values.paymentMethod.trim()) {
    errors.paymentMethod = '登録カードを入力してください。';
  }

  if (!values.cardHolderName.trim()) {
    errors.cardHolderName = 'カード名義を入力してください。';
  }

  if (!values.securityEmail.trim()) {
    errors.securityEmail = 'メールアドレスを入力してください。';
  } else if (!isEmail(values.securityEmail)) {
    errors.securityEmail = 'メールアドレスの形式が正しくありません。';
  }

  if (!values.securityPassword.trim()) {
    errors.securityPassword = 'パスワードを入力してください。';
  } else if (values.securityPassword.length < 8) {
    errors.securityPassword = 'パスワードは8文字以上で入力してください。';
  }

  if (!values.shippingLastName.trim()) {
    errors.shippingLastName = '姓を入力してください。';
  }

  if (!values.shippingFirstName.trim()) {
    errors.shippingFirstName = '名を入力してください。';
  }

  if (!values.shippingLastNameKana.trim()) {
    errors.shippingLastNameKana = 'セイを入力してください。';
  } else if (!isKana(values.shippingLastNameKana)) {
    errors.shippingLastNameKana = 'セイはカタカナで入力してください。';
  }

  if (!values.shippingFirstNameKana.trim()) {
    errors.shippingFirstNameKana = 'メイを入力してください。';
  } else if (!isKana(values.shippingFirstNameKana)) {
    errors.shippingFirstNameKana = 'メイはカタカナで入力してください。';
  }

  if (values.shippingMiddleNameKana.trim() && !isKana(values.shippingMiddleNameKana)) {
    errors.shippingMiddleNameKana = 'ミドルネーム(カナ)はカタカナで入力してください。';
  }

  if (!values.shippingPostalCode.trim()) {
    errors.shippingPostalCode = '郵便番号を入力してください。';
  } else if (!isPostalCode(values.shippingPostalCode)) {
    errors.shippingPostalCode = '郵便番号は 123-4567 形式で入力してください。';
  }

  if (!values.shippingPrefecture.trim()) {
    errors.shippingPrefecture = '都道府県を入力してください。';
  }

  if (!values.shippingCity.trim()) {
    errors.shippingCity = '市区町村を入力してください。';
  }

  if (!values.shippingStreetAddress.trim()) {
    errors.shippingStreetAddress = '番地を入力してください。';
  }

  if (!values.shippingPhoneNumber.trim()) {
    errors.shippingPhoneNumber = '電話番号を入力してください。';
  } else if (!isPhoneNumber(values.shippingPhoneNumber)) {
    errors.shippingPhoneNumber = '電話番号の形式が正しくありません。';
  }

  return errors;
}
