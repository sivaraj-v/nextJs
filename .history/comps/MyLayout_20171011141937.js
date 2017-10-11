import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {/* {console.log(props)} */}
    {props.content}
    {props.children}
    <h1>{props.url.query.title}</h1>
  </div>
);

export default Layout;
