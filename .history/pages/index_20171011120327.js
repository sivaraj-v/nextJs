// This is the Link API
import Header from "../components/Header";
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
    <Header />
    <p>HOME</p>
  </div>
);

export default Index;
