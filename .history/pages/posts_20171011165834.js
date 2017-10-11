import Layout from "../comps/MyLayout.js";
import fetch from "isomorphic-unfetch";

export default props => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
);
