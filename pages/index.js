import Link from 'next/link';

const Index = () => (
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
    <h1>Hello Welcome To Next.js</h1>
  </div>
)

export default Index;
