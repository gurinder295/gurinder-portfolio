import PageTitle from '../components/pageTitle';

const projects = [
  {
    title: 'Quiet Palace Bookstore',
    type: 'Responsive web design',
    image: '/Quiet%20Palace%20Bookstore.png',
    text: 'I designed this bookstore site to feel as calm as settling in with a good book. Building it with HTML and CSS gave me practice with page layout, typography, navigation, and making a design work on smaller screens.',
  },
  {
    title: 'Automoblox Originals',
    type: 'CSS project',
    image: '/automoblox-project.png',
    text: 'I created a landing page for Automoblox, a brand of modular wooden car models. The design pairs a product-focused introduction and a prominent models link with an About section that explains the brand.',
  },
];

export default function Projects() {
  return (
    <main className="container">
      <PageTitle title="Projects" />
      <section className="page">
        <p className="eyebrow">THINGS I&apos;VE WORKED ON</p>
        <h1>My projects</h1>
        <p className="intro">
          Here are some projects I&apos;ve worked on, from a responsive
          bookstore website to a product landing page for modular wooden cars.
        </p>
        <div className="cards">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <img
                src={project.image}
                alt={`${project.title} website screenshot`}
              />
              <div className="card-content">
                <span className="eyebrow">{project.type}</span>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="note">These images show screenshots of my project designs.</p>
      </section>
    </main>
  );
}
