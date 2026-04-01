import { categories } from '../data/siteContent';

function CategoryStrip() {
  return (
    <section className="category-strip" id="story">
      {categories.map((category) => (
        <article className="category-card" key={category.name}>
          <p>{category.name}</p>
          <strong>{category.count}</strong>
          <span>curated for everyday styling</span>
          <small>{category.description}</small>
        </article>
      ))}
    </section>
  );
}

export default CategoryStrip;
