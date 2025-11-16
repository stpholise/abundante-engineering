 "use server";

const Testing = async () => {

    // await new Promise((resolve) => setTimeout(resolve, 1000));

     const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <div>
      {posts.map((post: { id: number; title: string }) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Testing;