const React = require("react");
const Text = require("../components/Text");
const Layout = require("../components/Layout");
//const data = require("../../models/cartItem")

class Edit extends React.Component {
  render() {
    const { _id, name } = this.props.item;
    console.log("edit props", this.props.item);

    return (
      <Layout>
        <form
          className="flex justify-center"
          action={`cart/${_id}?_method=PUT`}
          method="POST"
        >
          <div className="flex flex-col py-8">
            <p className="text-white text-2xl flex justify-center py-8 max-w-lg">
              Change the name of your character:
            </p>
            <input
              className="max-w-lg"
              type="text"
              name="name"
              defaultValue={name}
            />
            <br />
            <input
              type="submit"
              name=""
              value="Edit Character"
              className="max-w-lg text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-stone-600 dark:hover:bg-stone-700 focus:outline-none dark:focus:ring-stone-800"
            />
          </div>
        </form>
      </Layout>
    );
  }
}

module.exports = Edit;
