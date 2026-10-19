import PageTitle from '../components/pageTitle';

export default function About() {
  return (
    <main className="container">
      <PageTitle title="About" />
      <section className="page">
        <p className="eyebrow">A BIT ABOUT ME</p>
        <h1>About me</h1>
        <div className="about-grid">
          <div className="portrait">
            <img
              src="/About.jpeg"
              alt="Gurinder standing outdoors"
            />
          </div>
          <div>
            <h2>Learning, making, and figuring things out.</h2>
            <p>
              I&apos;m Gurinder Meelu, an Interactive Media Design – Web student
              at Georgian College. I&apos;m especially interested in front-end
              development and the small design choices that make a site easier
              and more enjoyable to use. So far, I&apos;ve been learning HTML,
              CSS, JavaScript, React, and Next.js.
            </p>
            <p>
              I learn best by making things, seeing what works, and improving
              what doesn&apos;t. I want to build solid technical skills and
              create useful experiences for people. When I&apos;m away from my
              laptop, I enjoy cars and staying active.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
