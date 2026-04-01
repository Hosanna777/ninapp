import type { ReactNode } from 'react';

type SettingsCardProps = {
  label: string;
  title: string;
  children: ReactNode;
};

function SettingsCard({ label, title, children }: SettingsCardProps) {
  return (
    <section className="settings-card">
      <div className="settings-card-head">
        <span className="eyebrow">{label}</span>
        <h3>{title}</h3>
      </div>
      {children}
    </section>
  );
}

export default SettingsCard;
