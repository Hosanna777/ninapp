import SectionHeading from './SectionHeading';

function EditorialSection() {
  return (
    <section className="editorial-band">
      <SectionHeading label="Editorial Focus" title="商品だけで終わらない体験設計" />
      <div className="editorial-grid">
        <article>
          <strong>Immersive layout</strong>
          <p>大きなタイポグラフィと余白を基調に、ブランド感のあるトップビューを構成。</p>
        </article>
        <article>
          <strong>Clear conversion path</strong>
          <p>カテゴリ、特集、商品カード、カート要約までを視線移動に合わせて配置。</p>
        </article>
        <article>
          <strong>Responsive by default</strong>
          <p>デスクトップとモバイル双方で崩れないレイアウトに調整し、操作密度も最適化。</p>
        </article>
      </div>
    </section>
  );
}

export default EditorialSection;
