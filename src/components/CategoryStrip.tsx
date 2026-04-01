import { categories } from '../data/siteContent';

function CategoryStrip() {
  return (
    <section className="category-strip" id="story">
      {categories.map((category) => (
        <article className="category-card" key={category.name}>
          <p>{category.name}</p>
          <span>{category.count}</span>
        </article>
      ))}
    </section>
  );
}

export default CategoryStrip;
