import Layout from "../comps/MyLayout.js";
import fetch from "isomorphic-unfetch";
const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

export default props => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
);
