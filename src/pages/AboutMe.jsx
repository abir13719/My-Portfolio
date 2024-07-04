import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="px-10 py-5 container mx-auto flex flex-col items-center justify-center">
      <article className="max-w-6xl">
        <h1 className="uppercase tracking-widest font-bold text-4xl mb-7">I&apos;m Aminul Islam</h1>
        <p className="tracking-widest leading-loose">
          A junior frontend web developer. I spend my days (often nights) learning web technology
          with projects and writing lines of code aiming immersive responsive design and interactive
          user-friendly experiences.
        </p>
        <br />
        <p className="tracking-widest leading-loose">
          It&apos;s been six months, I have been learning and working with web. During this time, I
          have gained skills with HTML, CSS, JavaScript, Tailwind, React, Firebase, and MongoDB. Now
          I&apos;m exploring NextJS also improving JavaScript logic.
        </p>
        <br />
        <p className="tracking-widest leading-loose">
          I&apos;m open to Job opportunities where I can contribute, learn and grow. It will be my
          pleasure to contribute in meaningful projects.
        </p>

        <Link className="flex items-center gap-1 tracking-widest leading-loose mt-7">
          See My Projects{" "}
          <span>
            <BsArrowRight />
          </span>
        </Link>
      </article>
    </div>
  );
};

export default AboutMe;
