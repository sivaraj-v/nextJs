import Head from "next/head";
const About = () => (
  <div>
    <Head>
      <title>My page title</title>
    </Head>
    <Link href={{ pathname: "", query: { name: "Zeit" } }}>
      <a style={{ fontSize: 14 }}>About</a>
    </Link>
    <p>ABOUT</p>
  </div>
);
//export default () => <div>This is the about page.</div>;
export default About;
