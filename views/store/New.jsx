const React = require("react");
const Layout = require("../components/Layout");
class New extends React.Component {
  render() {
    return (
      <Layout>
        <div className="flex justify-center">
          <form
            className="flex flex-col justify-around"
            action="/store"
            method="POST"
          >
            <h1 className="text-4xl text-stone-900 py-4">
              Add new item to the store
            </h1>
            <p className="text-xl">Name:</p>
            <input
              className="h-16 bg-stone-900 border rounded-lg text-stone-200"
              type="text"
              name="name"
            />

            <p className="text-xl">Image:</p>
            <input
              className="h-16 bg-stone-900 border rounded-lg text-stone-200"
              type="text"
              name="image"
            />
            <p className="text-xl">Price:</p>
            <input
              className="h-16 bg-stone-900 border rounded-lg text-stone-200"
              type="text"
              name="price"
            />
            <br />
            <input
              className="py-4 px-8 mr-2 my-16 text-m font-medium text-stone-900 focus:outline-none bg-white rounded-lg border border-stone-200 hover:bg-stone-100 hover:text-grey-700 focus:z-10 focus:ring-4 focus:ring-stone-200 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
              type="submit"
              name=""
              value="Submit Model"
            />
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = New;
