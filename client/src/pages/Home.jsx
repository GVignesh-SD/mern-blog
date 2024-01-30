import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import { desVariants, titleVariants } from "../animations.js";
export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts?limit=3");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 py-15 px-8 max-w-6xl mx-auto ">
        <motion.h1
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={titleVariants}
          className="text-3xl font-bold lg:text-6xl"
        >
          Welcome to Jupiter Blog
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="text-gray-500 text-sm sm:text-lg"
        >
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </motion.p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="flex flex-col p-8 sm:p-16 md:p-15 justify-center bg-white">
        <div className="mx-auto max-w-6xl">
          <section className="font-sans text-black">
            <div className="lg:flex lg:items-center">
              <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div className="h-full">
                  <article className="h-full">
                    <motion.div
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={desVariants}
                      className="h-full"
                    >
                      <img
                        className="h-full object-cover"
                        src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"
                        width="533"
                        height="412"
                        alt='""'
                      />
                    </motion.div>
                  </article>
                </div>
              </div>
              <div className="p-6">
                <motion.div
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={desVariants}
                  className="leading-relaxed"
                >
                  <h2 className="leading-tight text-4xl font-bold">
                    Gateway to the Tech Universe!
                  </h2>
                  <p className="mt-4 text-justify">
                    At Jupiter, we embark on a celestial journey through the
                    vast cosmos of technology, web development, and coding. Our
                    mission is to bring you the latest insights, trends, and
                    expertise from the ever-evolving world of digital
                    innovation. Whether you're a seasoned developer, a tech
                    enthusiast, or a curious beginner, Jupiter is your go-to
                    destination for valuable information, tutorials, and
                    inspiration.
                  </p>
                  <p className="mt-4 text-justify">
                    Dive into our articles that cover a spectrum of topics, from
                    cutting-edge programming languages to the latest
                    advancements in web development frameworks. Join our
                    community of like-minded individuals who share a passion for
                    coding and technology. Explore the universe of possibilities
                    with Jupiter, where knowledge meets creativity, and
                    innovation knows no bounds.
                  </p>
                  <p>
                    <Button
                      outline
                      gradientDuoTone={"purpleToPink"}
                      className="mt-4 w-full"
                    >
                      Explore Blogs
                    </Button>
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
