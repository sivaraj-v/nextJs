import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    {console.log(props)}
    <h1>{props.url.query.title}</h1>
    <Header />
    {props.content}
    {props.children}
  </div>
);

export default Layout;
