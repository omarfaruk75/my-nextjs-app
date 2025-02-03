import PostCard from "@/components/posts/postCard";

const PostsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 5,
    },
  });
  const posts = await res.json();
  return (
    <div>
      <h2 className="text-3xl text-center my-5"> All Posts</h2>

      <div className="grid grid-cols-4 gap-4  ">
        {posts.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
