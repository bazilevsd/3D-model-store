const React = require("react");
const Header = require("./Header");
const Footer = require("./Footer");

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    console.log("children of map", JSON.stringify(children));
    const banner = `https://drive.google.com/uc?export=view&id=1bTCqmtW5-IdpL1i4F1tcpiJ7-eWn-p8d`;
    return (
      <html>
        <head>
          <title>3D Model Store</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body className="w-screen h-screen bg-gradient-to-r from-stone-300 to-stone-700 flex flex-col justify-between">
          <Header />
          <div className="relative flex justify-start items-start">
            <img className="z-5" src={banner} alt="" />
            <div className="px-20 py-32 absolute z-50 flex flex-col">
              <h1 className="text-6xl text-stone-500">3D Store</h1>
              <h2 className="text-4xl text-stone-200 py-6">
                for all your needs
              </h2>
            </div>
          </div>
          <main className="py-8">{children}</main>
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = Layout;
