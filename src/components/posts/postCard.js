const PostCard = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-5 border">
        <h2 className="text-xl font-bold text-gray-800 mb-2 min-h-[6rem] ">
          {title}
        </h2>
        <p className="text-gray-600 min-h-[10rem]  max-h-[12rem]">{body}</p>
        <div className="mt-4 text-right text-sm text-gray-500">
          <p>Post ID: {id}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
