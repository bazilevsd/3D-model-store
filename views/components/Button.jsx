const React = require("react");

class Button extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <button
        type="button"
        className="py-4 px-8 mr-2 mb-2 text-m font-medium text-stone-900 focus:outline-none bg-white rounded-lg border border-stone-200 hover:bg-stone-100 hover:text-grey-700 focus:z-10 focus:ring-4 focus:ring-stone-200 dark:focus:ring-stone-700 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700"
      >
        {children}
      </button>
    );
  }
}

module.exports = Button;
