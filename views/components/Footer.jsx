const React = require("react");

class Footer extends React.Component {
  render() {
    return (
      <div className="flex flex-row align-center justify-center p-4 bg-gradient-to-r from-stone-700 to-stone-400 w-screen">
        <div className="text-xs bg-transparent px-16 py-4 flex flex-col justify-center items-center">
          <img
            src="https://drive.google.com/uc?export=view&id=13Wr-LF-sjB9twpwbdRCLob7N0PAIWQsr"
            alt=""
            className="object-contain h-20 w-20"
          />
          <h1 className="text-white">3D MODELS / EST. 2023</h1>
        </div>
        <div className="text-xs bg-transparent px-16 py-2 border-l-2">
          <ul className="py-4 text-white">
            customer service
            <li>
              <a href="" className="text-white">
                CONTACT US{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="" className="text-white">
                DELIVERY POLICIES
              </a>
            </li>
            <li>
              {" "}
              <a href="" className="text-white">
                CANCELLATIONS
              </a>
            </li>
            <li>
              {" "}
              <a href="" className="text-white">
                RETURN POLICY
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

//https://drive.google.com/file/d/13Wr-LF-sjB9twpwbdRCLob7N0PAIWQsr/view?usp=share_link

module.exports = Footer;
