// This is the Link API
import Header from "../comps/Header";
import Layout from "../comps/MyLayout.js";
import Link from "next/link";
import Head from "next/head";

const content = <p>HOME DATA</p>;
const PostLink = props => (
  <li>
    <Link href={"/post?title=" + props.title}>
      <a>{props.title}</a>
    </Link>
  </li>
);
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
    <Layout content={content}>
      {console.log()}
      <p>HOMESS</p>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  </div>
);

export default Index;
