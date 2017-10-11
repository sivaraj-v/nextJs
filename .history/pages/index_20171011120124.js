// This is the Link API
import Header from "components/";
import Link from "next/link";
import Head from "next/head";

const Index = () => (
  <div>
    {/* <Link href="/about">
      <a style={{ fontSize: 14 }}>About Page</a>
    </Link> */}
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Link href={{ pathname: "/about", query: { name: "Zeit" } }}>
      <a style={{ fontSize: 14 }}>About</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
