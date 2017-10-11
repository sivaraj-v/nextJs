// This is the Link API
import Link from "next/link";

const Index = () => (
  <div>
    {/* <Link href="/about">
      <a style={{ fontSize: 14 }}>About Page</a>
    </Link> */}
    <Link href={{ pathname: "/about", query: { name: "Zeit" } }}>
      <a>here</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
