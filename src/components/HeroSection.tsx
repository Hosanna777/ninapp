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
        <span className="eyebrow">Soft Utility Edit</span>
        <h1>オフホワイトに、少しの緑。服と雑貨で整える、肩肘張らない毎日。</h1>
        <p>
          おしゃれを楽しみたい20代から30代の女性を中心に、通勤でも休日でも浮かない服と、
          無機質になりすぎない部屋をつくる雑貨を集めたECサイトです。やわらかな配色と落ち着いた余白で、
          メンズにも自然に馴染むニュートラルな雰囲気にまとめています。
        </p>
        <div className="hero-mood-row">
          <span>Off-white base</span>
          <span>Pastel accents</span>
          <span>Green for calm rooms</span>
        </div>
        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={onGoProducts}>
            服と雑貨を見る
          </button>
          <button className="ghost-button" type="button">
            Styling Notes
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
          <span>For Calm Weekdays</span>
          <h2>きちんと見えるのに、力みすぎない。</h2>
          <p>
            柔らかなオフホワイト、ペールグリーン、淡いピンクやブルーを軸に、
            ワードローブと部屋の景色を同じ温度で整えるセレクション。
          </p>
          <ul className="hero-feature-list">
            <li>カジュアル通勤に合う軽やかな服</li>
            <li>空間に緑を足す小さな雑貨</li>
            <li>レディース中心でも共有しやすい色設計</li>
          </ul>
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
