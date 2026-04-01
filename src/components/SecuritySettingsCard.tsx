import FormField from './FormField';
import SettingsCard from './SettingsCard';

type SecuritySettingsCardProps = {
  securityEmail: string;
  securityEmailError?: string;
  securityPassword: string;
  securityPasswordError?: string;
  onSecurityEmailChange: (value: string) => void;
  onSecurityPasswordChange: (value: string) => void;
};

function SecuritySettingsCard({
  securityEmail,
  securityEmailError,
  securityPassword,
  securityPasswordError,
  onSecurityEmailChange,
  onSecurityPasswordChange,
}: SecuritySettingsCardProps) {
  return (
    <SettingsCard label="Security" title="認証情報">
      <FormField
        label="メールアドレス"
        type="email"
        value={securityEmail}
        error={securityEmailError}
        required
        onChange={(event) => onSecurityEmailChange(event.target.value)}
        placeholder="ryo@example.com"
      />
      <FormField
        label="新しいパスワード"
        type="password"
        value={securityPassword}
        error={securityPasswordError}
        required
        onChange={(event) => onSecurityPasswordChange(event.target.value)}
        placeholder="8文字以上"
      />
    </SettingsCard>
  );
}

export default SecuritySettingsCard;
