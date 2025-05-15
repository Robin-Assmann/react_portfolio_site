import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GITHUB_LINK, LINKEDIN_LINK } from "../constants";

function NavBar () {
  return (
    <>
    <nav className="mb-0 flex items-center justify-between p-6">
      <div className="flex items-center flex-shrink-0 ">
        </div>
        <div className="m-8 flex gap-4 items-center justify-center text-3xl text-neutral-300">
            
            <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer" className="transition-all duration-300 hover:scale-107 ">
                <FaLinkedin/>
            </a>
            <a href={GITHUB_LINK} target="_blank" rel="noreferrer" className="transition-all duration-300 hover:scale-107" >
                <FaGithub/>
            </a>
        </div>
    </nav>
    </>
  );
}
export default NavBar;