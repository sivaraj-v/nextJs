import Head from "next/head";
import Link from "next/link";
const About = () => (
  <div>
    <Head>
      <title>ABOUT</title>
    </Head>
    <Link href={{ pathname: "/" }}>
      <a style={{ fontSize: 14 }}>BACK TO HOME</a>
    </Link>
    <Layout>
      <p>ABOUT</p>
    </Layout>
  </div>
);
//export default () => <div>This is the about page.</div>;
export default About;
