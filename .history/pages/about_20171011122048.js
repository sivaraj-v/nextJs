import Head from "next/head";
import Link from "next/link";
import Layout from "../comps/MyLayout.js";
const About = () => (
  <div>
    <Head>
      <title>ABOUT</title>
    </Head>

    <Layout>
      
      <Link href={{ pathname: "/" }}>
        <a style={{ fontSize: 14 }}>BACK TO HOME</a>
      </Link>
    </Layout>
  </div>
);
//export default () => <div>This is the about page.</div>;
export default About;
