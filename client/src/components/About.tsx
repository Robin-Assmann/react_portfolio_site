import { useState } from "react";
import OfficeImg from "../assets/office.jpg";

function About() {
  const [glowPosition, setGlowPosition] = useState({ x: "50%", y: "50%" });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setGlowPosition({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div className="border-b-2 border-neutral-600 lg:mb-7 mt-5 px-4 sm:px-8 pb-12">
      <div className="flex flex-wrap justify-center lg:justify-between items-center">
        {/* Imagem com efeito de glow */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center relative">
          <div
            className="relative rounded-2xl overflow-hidden group"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={OfficeImg}
              alt="about"
              className="w-full h-auto max-w-md rounded-2xl transition duration-300 brightness-90"
            />
            {/* Glow Overlay */}
            {isHovered && (
              <div
                className="absolute inset-0 pointer-events-none transition duration-300"
                style={{
                  background: `radial-gradient(circle 100px at ${glowPosition.x} ${glowPosition.y}, rgba(255,255,255,0.3), rgba(255,255,255,0) 80%)`
                }}
              />
            )}
          </div>
        </div>

        {/* Texto de apresentação */}
        <div className="w-full lg:w-1/2 lg:p-5">
          <p className="my-2 max-w-xl text-lg text-justify text-neutral-300 font-light leading-relaxed max-md:text-justify max-md:text-[16px]">
            Nice to meet you!{" "}
            <span className="text-[#f8efb6] font-bold text-xl max-md:text-[18px]">
              I'm Robin Aßmann.
            </span>{" "}
            Born in 1995, I'm a web and app developer, with knowledge in Unity, Flutter, React, NodeJS among other technologies. I'm passionate about technology and programming, and I'm always learning new technologies to improve my skills.
          </p>
          <br />
          <p className="my-2 max-w-xl text-lg text-neutral-300 font-light text-justify max-md:text-[16px]">
            I'm available for talking and to collaborate on projects. If you need a app-, software- or web developer, contact me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;