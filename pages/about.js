import Link from 'next/link';

const AboutPage = () => (
  <div>
    <ul className="menu">
      <li>
        <Link href="/">
          <a style={ { fontSize: 40 } }>Index Page</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a style={ { fontSize: 40 } }>About Page</a>
        </Link>
      </li>
    </ul>
    <h1>This is the About Page!</h1>
  </div>
)

export default AboutPage;
