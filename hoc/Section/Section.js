function Section(props) {
  return (
    <section className={`section ${props.classname}`} id={props.id}>
      <h2 className={`section__title`}>{props.title}</h2>
      <span className={`section__subtitle`}>{props.subtitle}</span>
      {props.children}
    </section>
  );
}
export default Section;
