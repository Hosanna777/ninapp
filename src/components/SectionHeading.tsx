type SectionHeadingProps = {
  label: string;
  title: string;
};

function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span>{label}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeading;
