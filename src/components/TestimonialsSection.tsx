import SectionHeading from './SectionHeading';
import { testimonials } from '../data/siteContent';

function TestimonialsSection() {
  return (
    <section className="reviews-section" id="reviews">
      <SectionHeading label="Customer Voices" title="暮らしにフィットするレビュー" />
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="testimonial-card">
            <p>{testimonial.quote}</p>
            <footer>{testimonial.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
