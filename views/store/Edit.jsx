const React = require("react");
const Text = require("../components/Text");
const Layout = require("../components/Layout");

class Edit extends React.Component {
  render() {
    const { _id, name } = this.props.item;
    //console.log("edit props", this.props.item);

    return (
      <Layout>
        <form
          className="flex justify-center"
          action={`/store/${_id}?_method=PUT`}
          method="POST"
        >
          <div className="flex flex-col py-8">
            <p className="text-xl text-stone-900 py-4">
              Change the name of your character:
            </p>
            <input
              className="h-16 bg-stone-900 border rounded-lg text-stone-200"
              type="text"
              name="name"
              defaultValue={name}
            />
            <br />
            <input
              type="submit"
              name=""
              value="Edit Character"
              className="py-4 px-8 mr-2 my-16 text-m font-medium text-stone-900 focus:outline-none bg-white rounded-lg border border-stone-200 hover:bg-stone-100 hover:text-grey-700 focus:z-10 focus:ring-4 focus:ring-stone-200 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
            />
          </div>
        </form>
        <div className="flex justify-center">
          <form action={`/store/${_id}?_method=DELETE`} method="POST">
            <input
              type="submit"
              value="Delete"
              className="py-4 px-8 mr-2 mb-2 text-m font-medium text-stone-900 focus:outline-none bg-white rounded-lg border border-stone-200 hover:bg-stone-100 hover:text-grey-700 focus:z-10 focus:ring-4 focus:ring-stone-200 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
            />
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Edit;
