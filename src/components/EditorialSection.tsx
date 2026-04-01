import SectionHeading from './SectionHeading';

function EditorialSection() {
  return (
    <section className="editorial-band">
      <SectionHeading label="Editorial Focus" title="服と部屋を同じ感覚で選べる構成" />
      <div className="editorial-grid">
        <article>
          <strong>Soft office wardrobe</strong>
          <p>カジュアル寄りの仕事服を軸に、休日にもそのままつながる軽やかなアイテムを提案。</p>
        </article>
        <article>
          <strong>Objects with greenery</strong>
          <p>布もの、ベース、ポット、小さな収納など、無機質さをやわらげる雑貨を同じ導線に配置。</p>
        </article>
        <article>
          <strong>Inclusive neutral palette</strong>
          <p>フェミニンに寄りすぎず、メンズにも馴染みやすい色域と素材感で全体をまとめています。</p>
        </article>
      </div>
    </section>
  );
}

export default EditorialSection;
