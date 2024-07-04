import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto flex gap-7 py-4 md:px-10 px-7 text-2xl">
        <Link>
          <FaFacebook />
        </Link>
        <Link to="https://github.com/abir13719">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
