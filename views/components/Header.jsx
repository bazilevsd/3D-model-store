const React = require("react");
const Text = require("./Text");

class Header extends React.Component {
  render() {
    return (
      <nav className="flex flex-row align-center justify-between p-4 bg-gradient-to-r from-stone-700 to-stone-400 w-screen">
        <a className="mr-3 text-white" href="/store/">
          <Text>Store</Text>
        </a>

        <a className="mr-3 text-white" href="/user/login">
          <Text>LogIn</Text>
        </a>
        <a className="mr-3 text-white" href="/user/logout">
          <Text>Logout</Text>
        </a>

        <a className="mr-3 text-white" href="/cart/">
          <Text>Cart</Text>
        </a>
      </nav>
    );
  }
}

module.exports = Header;
