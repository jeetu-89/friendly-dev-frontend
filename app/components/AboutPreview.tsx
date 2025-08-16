import { section } from "framer-motion/client";
import { Link } from "react-router";

const AboutPreview = () => {
    return ( 
        <section className="flex flex-col md:flex-row bg-gray-800 mt-10 px-5 py-8 items-center gap-4 md:items-start">
            <img 
            src="public/images/profile.jpg" 
            alt="profile"
            className="h-32 w-32 rounded-full object-cover border-3 border-blue-400"
            />
            <div className="text-center md:text-left">
                <h2 className="text-lg font-bold mb-1">About Me</h2>
                <p className="text-sm text-gray-300 mb-3 text-left">I'm Jeetu - gained knowledge from various resources and top instructors present over internet. Making Projects and learning from it is my basic moto.</p>
                <Link
                to="/about"
                className="text-sm text-blue-400 hover:text-blue-500 hover:underline">Learn More About Me</Link>
            </div>
        </section>
     );
}
 
export default AboutPreview;