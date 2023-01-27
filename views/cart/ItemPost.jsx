const React = require("react");

class ItemPost extends React.Component {
  render() {
    const { post } = this.props;
    console.log("Props on ItemPost", this.props);
    //console.log("item image", post.image);
    const imageSource = `https://drive.google.com/uc?export=view&id=${post.image}`;
    return (
      <div className="flex justify-center">
        <a
          href={`/cart/${post._id}`}
          className="block w-64 h-[26rem] p-6 pb-2 bg-white border border-stone-200 rounded-m shadow-md hover:bg-stone-100 dark:bg-stone-800 dark:border-stone-700 dark:hover:bg-stone-700"
        >
          <div>
            <img className="" src={imageSource} />
          </div>
          <div className="flex flex-col justify-around py-4">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Name: {post.name}
            </h5>
            <p className="text-xl text-gray-700 dark:text-gray-400">
              Price: ${post.price}
            </p>
          </div>
        </a>
      </div>
    );
  }
}

module.exports = ItemPost;
