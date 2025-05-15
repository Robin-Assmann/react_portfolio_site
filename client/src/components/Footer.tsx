import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_LINK, LINKEDIN_LINK } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Header */}
        <div className="flex justify-center text-neutral-300 items-center mb-8">
          <h3 className="text-2xl font-semibold">Let's Connect!</h3>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-neutral-200 hover:text-neutral-600 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-neutral-200 hover:text-neutral-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Robin Aßmann. All rights reserved.</p>
          <p>Built with love and passion for software development</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
