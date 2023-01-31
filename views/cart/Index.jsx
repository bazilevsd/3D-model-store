const React = require("react");
const Layout = require("../components/Layout");
const Text = require("../components/Text");
const ItemPost = require("./ItemPost");

class Index extends React.Component {
  render() {
    const { items } = this.props;
    //console.log("props on main index", this.props);
    return (
      <Layout>
        <a href="/"></a>
        <h1 className="text-6xl flex justify-center pb-8">Your items</h1>
        <div className="grid grid-cols-3 gap-4 justfy-center">
          {items.map((post, index) => {
            return <ItemPost key={index} post={post} />;
          })}
        </div>
      </Layout>
    );
  }
}
module.exports = Index;
