import { stats } from '../data/siteContent';

type HeroSectionProps = {
  cartPreviewText: string;
  subtotalText: string;
  totalCartItems: number;
  onGoProducts: () => void;
};

function HeroSection({
  cartPreviewText,
  subtotalText,
  totalCartItems,
  onGoProducts,
}: HeroSectionProps) {
  return (
    <div className="hero-grid">
      <section className="hero-copy">
        <span className="eyebrow">Spring 2026 Collection</span>
        <h1>日常をアップデートする、静かな主役のためのECサイト。</h1>
        <p>
          派手さではなく、質感と使い心地で選ばれるアイテムを集めたライフスタイルストア。
          モダンなビジュアルと明快な購入導線をひとつの体験にまとめました。
        </p>
        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={onGoProducts}>
            商品一覧を見る
          </button>
          <button className="ghost-button" type="button">
            Lookbook
          </button>
        </div>
        <div className="stats-row">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <aside className="hero-panel">
        <div className="panel-card main-card">
          <span>Featured Drop</span>
          <h2>Form follows feeling.</h2>
          <p>厳選した3つの新作を、今週限定のキュレーションで紹介。</p>
        </div>
        <div className="panel-card floating-card">
          <span>Cart Preview</span>
          <strong>{totalCartItems} items</strong>
          <p>{cartPreviewText}</p>
          <em>Subtotal {subtotalText}</em>
        </div>
      </aside>
    </div>
  );
}

export default HeroSection;
