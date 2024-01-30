import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

const Projects = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const handleShowMore = async () => {
    alert("Hi");
    const startIndex = posts.length;
    try {
      const res = await fetch(`/api/post/getposts?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        console.log(data);
        setPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-2 sm:py-4 md:py-8 lg:py-16 min-h-screen">
      <div className="my-3 sm:mb-4 md:mb-8 lg:mb-16">
        <h1 className="font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Latest Blogs
        </h1>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="text-xl">Loading.....</div>
        </div>
      ) : (
        <div className="mx-10 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
      {showMore && (
        <button
          className="w-full mt-10 font-bold cursor-pointer text-[17px] hover:text-xl transition-all duration-300 hover:text-blue-600"
          type="button"
          onClick={handleShowMore}
        >
          Show More Posts...
        </button>
      )}
    </div>
  );
};

export default Projects;
