import Link from 'next/link';
import PageTitle from './components/pageTitle';

export default function Home() {
  return (
    <main className="container">
      <PageTitle title="Home" />
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">A LITTLE ABOUT WHAT I DO</p>
          <h1>
            Hi, I&apos;m Gurinder.
            <br />
            <span>I make things for the web.</span>
          </h1>
          <p className="lead">
            I&apos;m a web design student who likes turning an idea into a website
            people can actually use. I enjoy figuring out how the layout, details,
            and code come together, and this site is a place to share what
            I&apos;ve been learning along the way.
          </p>
          <h2>What I&apos;m working towards</h2>
          <p>
            I&apos;d like to keep growing as a developer and build websites that
            feel clear, welcoming, and easy to use. Every project is a chance to
            learn something new and make the next one a little better.
          </p>
          <div className="actions">
            <Link className="button" href="/about">
              Get to know me <span aria-hidden="true">→</span>
            </Link>
            <Link className="button outline" href="/projects">
              See what I&apos;ve made
            </Link>
          </div>
        </div>
        <figure className="home-portrait">
          <img
            src="/Home%20Page.jpeg"
            
          />
          
        </figure>
      </section>
    </main>
  );
}
