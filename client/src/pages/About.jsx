import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import { desVariants, titleVariants } from "../animations.js";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen p-3 max-w-7xl mx-auto lg:py-16">
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        className="text-center text-xl sm:text-4xl font-serif my-5 font-bold"
      >
        {'"About Jupiter Blog"'}
      </motion.div>
      <div className="flex flex-col justify-center items-center">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="text-[15px] sm:text-3xl font-serif text-center"
        >
          Unveiling the Cosmos of Tech, Web Development, and Coding
        </motion.h2>

        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="mt-5 text-center text-[15px] font-serif md:text-xl"
        >
          Greetings, fellow tech enthusiasts, developers, and curious minds!
          Welcome to Jupiter Blog, where innovation meets exploration in the
          vast universe of technology. 🚀
        </motion.p>
      </div>
      <div className="flex flex-col md:flex-row my-5 sm:my-10">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="flex-1 p-3 flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="rounded-md w-full h-full object-fill"
          />
        </motion.div>
        <div className="flex-1 flex flex-col p-5">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-xl sm:text-3xl md:text-4xl font-bold my-3"
          >
            Our Cosmic Mission
          </motion.h1>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="sm:text-xl leading-7 text-justify capitalize sm:leading-7 md:leading-8 lg:leading-10 font-serif"
          >
            At Jupiter, we embark on a thrilling journey through the realms of
            web development, coding, and all things tech. Our mission is simple
            yet profound: to be your guiding star in the ever-expanding cosmos
            of digital knowledge. Whether you're a seasoned coder, a budding
            developer, or someone eager to unravel the mysteries of technology,
            Jupiter is your cosmic companion.
          </motion.p>
          <Link className="w-full" to={"/blogs"}>
            <Button className="w-full" gradientDuoTone={"purpleToPink"}>
              Explore Blogs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
