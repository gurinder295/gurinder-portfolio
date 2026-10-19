import PageTitle from '../components/pageTitle';

const groups = [
  {
    title: 'Next.js',
    items: ['Pages with the App Router', 'Reusable components', 'Navigation'],
  },
  {
    title: 'React',
    items: ['Props', 'State', 'Effects', 'Context'],
  },
  {
    title: 'Forms and blog content',
    items: ['Form validation', 'Rich-text editing', 'Displaying formatted HTML'],
  },
];

export default function Skills() {
  return (
    <main className="container">
      <PageTitle title="Skills" />
      <section className="page">
        <p className="eyebrow">TOOLS AND TOPICS</p>
        <h1>Technical skills</h1>
        <p className="intro">
          These are some of the tools and topics I&apos;ve been learning and
          exploring as I build for the web.
        </p>
        <div className="skill-grid">
          {groups.map((group) => (
            <section className="skill-box" key={group.title}>
              <h2>{group.title}</h2>
              <div className="tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
