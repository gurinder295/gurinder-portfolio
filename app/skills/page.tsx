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
          I&apos;ve been exploring these topics in my COMP2112 React and Next.js
          class. Some are behind this portfolio, while others came up as we
          built out the class blog.
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
        <p className="note">
          I based this list on the{' '}
          <a href="https://github.com/ifotn/comp2112-react-blog-f26">
            COMP2112 React Blog class project
          </a>
          .
        </p>
      </section>
    </main>
  );
}
