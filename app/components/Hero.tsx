import type React from "react";
import { Link } from "react-router";
const Hero: React.FC<{
  name?: string;
  text?: string;
}> = ({
  name = "[NAME]",
  text = "I build friendly web experiencve and help myself to become confident web developer.",
}) => {
  return (
    <header className="bg-gray-900 text-center py-20 px-4">
      <h2 className="text-3xl font-bold mb-2">Hey, I am {name}.</h2>
      <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-500">{text}</p>
      <div className="flex justify-center gap-4">
        <Link
          className="bg-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-500 transition-colors"
          to="/projects"
        >
          View Project
        </Link>
        <Link
          className="font-semibold px-4 py-2 border border-blue-500 rounded hover:bg-blue-600 transition-colors"
          to="/contact"
        >
          Contact me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
