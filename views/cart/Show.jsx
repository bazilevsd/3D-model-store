const React = require("react");
const Text = require("../components/Text");
const Layout = require("../components/Layout");
const Button = require("../components/Button");

class Show extends React.Component {
  render() {
    const { _id, name, image, price } = this.props;
    const imageSource = `https://drive.google.com/uc?export=view&id=${image}`;
    return (
      <Layout>
        <div className="flex justify-start px-8">
          <div className="block w-64 h-[26rem] p-6 py-2 bg-white border border-stone-200 rounded-m shadow-md hover:bg-stone-100 dark:bg-stone-800 dark:border-stone-700 dark:hover:bg-stone-700 ">
            <div>
              <img className="" src={imageSource} />
            </div>
            <div className="flex flex-col justify-around py-4">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Name: {name}
              </h5>
              <p className="text-xl text-gray-700 dark:text-gray-400">
                Price: ${price}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-start pl-32 content-around space-y-8">
            <a href={`/cart/${_id}/edit`}>
              <Button>Buy</Button>
            </a>
            <form action={`/cart/${_id}?_method=DELETE`} method="POST">
              <input
                type="submit"
                value="Delete"
                className="py-4 px-8 mr-2 mb-2 text-m font-medium text-stone-900 focus:outline-none bg-white rounded-lg border border-stone-200 hover:bg-stone-100 hover:text-grey-700 focus:z-10 focus:ring-4 focus:ring-stone-200 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
              />
            </form>
          </div>
          {/* <div className="flex flex-col justify-start pl-32 content-around space-y-8">
            <a href={`/cart/${_id}/edit`}>
              <Button>Edit</Button>
            </a>
          </div> */}
        </div>
      </Layout>
    );
  }
}
module.exports = Show;
