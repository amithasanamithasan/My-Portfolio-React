import { useState } from 'react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaShareAlt, 
  FaGithub
} from 'react-icons/fa';

const SocialMediaDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-40 right-10 z-50">
    
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Social media links"
      >
        <FaShareAlt className="text-2xl" />
      </button>

    
      {isOpen && (
        <div className="absolute right-0 mt-4 w-14 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 origin-top">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 hover:bg-blue-100 text-blue-600 transition-colors duration-200"
            title="Facebook"
          >
            <FaFacebook className="text-2xl" />
          </a>
           <a 
            href="www.linkedin.com/in/amit-hasan-faysal-ab91b61b8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 hover:bg-blue-100 text-blue-700 transition-colors duration-200"
            title="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a 
            href="https://github.com/amithasanamithasan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 hover:bg-blue-100 text-black transition-colors duration-200"
            title="Github"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 hover:bg-sky-100 text-sky-500 transition-colors duration-200"
            title="Twitter"
          >
            <FaTwitter className="text-2xl" />
          </a>
         
        </div>
      )}
    </div>
  );
};

export default SocialMediaDropdown;