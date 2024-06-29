// components/Footer.jsx
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className=" bg-zinc-800 text-white py-3 font-mono">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="">
          <h2 className="text-xl font-bold">Open to work</h2>
          <p>Albany, CA, 94706</p>
          <p>Email: jingz-plz-reply@berkeley.edu</p>
          <p>Phone: (510) 977-3543</p>
        </div>
        <div className="flex mb-2 md:mb-0">
          <Link href="https://music.youtube.com/browse/VLPL5K3bNYKh_g5g7-iu3gfT8lkslS0JE8ub">
            <p className="text-white mx-2 hover:text-gray-400"><SiYoutubemusic size={24} /></p>
          </Link>
          <Link href="https://github.com/jason-zhao-git">
            <p className="text-white mx-2 hover:text-gray-400"><FaGithub size={24} /></p>
          </Link>
          <Link href="https://www.linkedin.com/in/jingqiao-zhao/">
            <p className="text-white mx-2 hover:text-gray-400"><FaLinkedin size={24} /></p>
          </Link>
          <Link href="#">
            <p className="text-white mx-2 hover:text-gray-400"><FaTwitter size={24} /></p>
          </Link>
          
        </div>
        
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-500">© 2024 JZHAO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
