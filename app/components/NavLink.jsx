import Link from "next/link";
import { usePathname } from "next/navigation";

const handleClick = (href, e) => {
  var targetId = href;
  if (href.startsWith("/#")) {
    e.preventDefault();
    targetId = href.replace("/", ""); // Remove leading slash for querySelector
  }
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    const offset = 120; // Adjust this value based on your Navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementRect - bodyRect - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    }); 
  }
};

const NavLink = ({ href, title }) => {
  
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div>
      {isHomePage ? (
        <Link
          href={href}
          onClick={(e) => handleClick(href, e)}
          className=" text-[#d7d8d8] font-pixel hover:text-gray-600"
        >
          <p className="font-pixel mt-2">{title}</p>
        </Link>
      ) : (
        <Link
          href={href}
          key={title}
          className="text-[#d7d8d8] font-pixel hover:text-gray-600"
        >
          <div className="mt-2">{title}</div>
        </Link>
      )}
    </div>
  );
};

export default NavLink;
