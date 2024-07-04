import { BsArrowRight } from "react-icons/bs";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="px-10 py-5 container mx-auto flex flex-col items-center justify-center">
      <article className="max-w-6xl">
        <h1 className="uppercase tracking-widest font-bold text-4xl mb-7">My Skills</h1>
        {/* HTML */}
        <div>
          <h2 className="flex items-center gap-1 text-xl font-bold tracking-widest leading-loose">
            <FaHtml5 />
            HTML
          </h2>
          <p className="tracking-widest leading-loose">
            I have a solid understanding of HTML 5, which helps me create clear and well-organized
            web pages. I can build the basic structure of any website, making it easy to develop
            further. I try to use not only div but also head, nav, main, section, article, figure,
            footer etc.
          </p>
        </div>
        <br />

        {/* CSS */}
        <div>
          <h2 className="flex items-center gap-1 text-xl font-bold tracking-widest leading-loose">
            <FaCss3Alt />
            CSS
          </h2>
          <p className="tracking-widest leading-loose">
            I have a deep understanding of CSS3, allowing me to style web pages creatively and
            responsively. I can effectively enhance the design and layout of websites with modern
            techniques and best practices.
          </p>
        </div>
        <br />

        {/* JavaScript */}
        <div>
          <h2 className="flex items-center gap-1 text-xl font-bold tracking-widest leading-loose">
            <IoLogoJavascript />
            JavaScript
          </h2>
          <p className="tracking-widest leading-loose">
            I am familiar with intermediate JavaScript (ES6), capable of implementing more complex
            functionalities such as asynchronous operations, event handling, and DOM manipulation.
            Offen, I search for some techniques in Google for better result when I&apos;m working on
            a project. It helps me continuously learning and improving my knowledge about
            JavaScript.
          </p>
        </div>
        <br />

        {/* Tailwind */}
        <div>
          <h2 className="flex items-center gap-1 text-xl font-bold tracking-widest leading-loose">
            <RiTailwindCssFill />
            Tailwind
          </h2>
          <p className="tracking-widest leading-loose">
            I am very confortable with using Tailwind. Using its utility-based approach to quickly
            create and style responsive and modern web interfaces. I know how to use Tailwind&apos;s
            classes effectively to make websites look good and work well on different devices.
          </p>
        </div>
        <br />

        {/* React */}
        <div>
          <h2 className="flex items-center gap-1 text-xl font-bold tracking-widest leading-loose">
            <FaReact />
            React
          </h2>
          <p className="tracking-widest leading-loose">
            I know React.js well and use it with components like Tanstack Query, Axios etc. These
            help me fetch data efficiently and interact smoothly with APIs, making sure my web
            applications are responsive and dynamic.
          </p>
        </div>
        <br />

        {/* Firebase */}
        <div>
          <h2 className="flex items-center gap-1 text-xl font-bold tracking-widest leading-loose">
            <IoLogoFirebase />
            Firebase
          </h2>
          <p className="tracking-widest leading-loose">
            I utilize Firebase for authentication, ensuring secure user login and management in my
            applications. Additionally, I deploy my projects using Firebase Hosting, which provides
            a straightforward and efficient way to publish and manage web applications online.
          </p>
        </div>
        <br />

        {/* Mongodb */}
        <div>
          <h2 className="flex items-center gap-1 text-xl font-bold tracking-widest leading-loose">
            <SiMongodb />
            Mongodb
          </h2>
          <p className="tracking-widest leading-loose">
            I use MongoDB Atlas for managing data in my applications, performing CRUD operations
            seamlessly. MongoDB Atlas provides a scalable and flexible cloud database solution,
            allowing me to store and manipulate data efficiently while ensuring robust performance
            and reliability for my projects.
          </p>
        </div>
        <br />

        <Link className="flex items-center gap-1 tracking-widest leading-loose mt-7">
          See My Projects{" "}
          <span>
            <BsArrowRight />
          </span>
        </Link>
      </article>
    </div>
    // <div>
    //   <section className="container mx-auto p-4">
    //     <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
    //     <ul className="list-disc list-inside">
    //       <li>HTML</li>
    //       <li>CSS</li>
    //       <li>JavaScript</li>
    //       <li>React</li>
    //       <li>Tailwind CSS</li>
    //       <li>Firebase</li>
    //       <li>MongoDB</li>
    //     </ul>
    //     {/* Optional: Soft Skills */}
    //     <h2 className="text-3xl font-bold mt-8 mb-4">Soft Skills</h2>
    //     <ul className="list-disc list-inside">
    //       <li>Communication</li>
    //       <li>Teamwork</li>
    //       <li>Problem-solving</li>
    //     </ul>
    //   </section>
    // </div>
  );
};

export default Skills;
