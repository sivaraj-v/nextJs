// This is the Link API
import Link from "next/link";

const Index = () => (
  <div>
    {/* <Link href="/about">
      <a style={{ fontSize: 14 }}>About Page</a>
    </Link> */}
    <Link href="/about">
    <img src="/static/image.png" />
  </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
