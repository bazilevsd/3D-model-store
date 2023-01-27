const React = require("react");
const Button = require("../components/Button");
const Layout = require("../components/Layout");

class Signup extends React.Component {
  render() {
    return (
      <Layout>
        <div className="flex justify-center">
          <h1 className="text-4xl text-stone-900 py-4 ">Signup</h1>
        </div>
        <main>
          <form
            className="flex justify-around"
            action="/user/signup"
            method="POST"
          >
            <div className="flex flex-col justify-center">
              <p className="text-xl">Name:</p>

              <input
                className="h-16 bg-stone-900 border rounded-lg text-stone-200"
                type="text"
                defaultValue=""
                name="username"
                required
              />
              <br />
              <p className="text-xl">Password:</p>
              <input
                className="h-16 bg-stone-900 border rounded-lg text-stone-200"
                type="password"
                defaultValue=""
                name="password"
                required
              />
              <br />
              <input
                className="py-4 px-8 mr-2 my-16 text-m font-medium text-stone-900 focus:outline-none bg-white rounded-lg border border-stone-200 hover:bg-stone-100 hover:text-grey-700 focus:z-10 focus:ring-4 focus:ring-stone-200 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
                type="submit"
                name=""
                value="Signup"
              />
            </div>
          </form>
        </main>
      </Layout>
    );
  }
}

module.exports = Signup;
