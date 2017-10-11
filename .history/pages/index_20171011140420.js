// This is the Link API
import Header from "../comps/Header";
import Layout from "../comps/MyLayout.js";
import Link from "next/link";
import Head from "next/head";

const content = <p>HOME DATA</p>;
const Index = () => (
  <div>
    {/* <Link href="/about">
      <a style={{ fontSize: 14 }}>About Page</a>
    </Link> */}
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* <Header /> */}
    {/* <Layout>
      <p>HOMESS</p>
      <p>HOMESS</p>
      <p>HOMESS</p>
      <p>HOMESS</p>
      <p>HOMESS</p>
    </Layout> */}
    <Layout content={content} />
  </div>
);

export default Index;
