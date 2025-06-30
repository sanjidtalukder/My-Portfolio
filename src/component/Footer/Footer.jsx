import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-primary dark:text-gray-300 py-10 mt-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About / Branding */}
        <div>
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <img
              src="https://i.ibb.co/cSPP0Wd5/cropped-circle-image.png"
              alt="Logo"
              className="h-8 w-8 rounded-full object-cover"
            />
            Sanjid.Dev
          </Link>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Passionate CSE student building modern web apps with React & Express. Let’s connect!
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-primary">Skills</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Connect with Me</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaGithub /> 
              <a href="https://github.com/sanjidtalukder" target="_blank" rel="noreferrer">GitHub</a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin /> 
              <a href="https://linkedin.com/in/md-sanjid-talukder-08b681320" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp /> 
              <a href="https://wa.me/8801889876289" target="_blank" rel="noreferrer">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10 border-t pt-4">
        © {new Date().getFullYear()} Sanjid Talukder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
