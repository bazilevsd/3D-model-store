const React = require("react");
const Layout = require("../components/Layout");
class New extends React.Component {
  render() {
    return (
      <Layout>
        <form action="/cart" method="POST">
          <h1 className="text-white">New cart item</h1>
          <p className="text-white">Name:</p>
          <input type="text" name="name" />

          <p className="text-white">Image:</p>
          <input type="text" name="image" />
          <p className="text-white">Price:</p>
          <input type="text" name="price" />
        </form>
      </Layout>
    );
  }
}

module.exports = New;
