import { div, li } from "framer-motion/client";

const AboutPage = () => {
  return (
    <div className="bg-gray-900 max-w-5xl mx-auto px-6 py-16">
      {/* Intro */}
      <div className="flex flex-col gap-10 items-center md:flex-row md:items-start text-center md:text-start mb-12">
        <img
          src="../public/images/profile.jpg"
          alt="profile"
          className="w-40 h-40 object-cover rounded-full border-4 border-blue-500"
        />
        <div>
          <h1 className="text-3xl font-bold">Hey, I'm Jeetu .</h1>
          <p className=" mt-2 text-gray-300">
            I'm a passionate web developer loves building friendly digital
            experiences and helping others grow into confident, modern
            developers.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-12">
        <h2 className="font-semibold text-2xl mb-2">My Mission</h2>
        <p className="text-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nam
          incidunt possimus voluptate excepturi odit, molestias repudiandae
          accusamus corporis nemo, praesentium, cum facilis facere? Voluptate,
          excepturi nobis, quia culpa aliquid sequi hic, animi dolor iure nam
          eaque nostrum facere. Unde.
        </p>
      </div>

      {/* TechStack */}
      <div>
        <h2 className="font-semibold text-2xl mb-2"> Tech I Use</h2>
        <ul className="flex flex-wrap gap-4 text-gray-300">
            {
                [
                    'React',
                    'Next.js',
                    'Tailwind CSS',
                    'Node.js',

                ].map((tech)=> <li className="px-2 py-1 rounded bg-gray-700">{tech}</li>)
            }
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
