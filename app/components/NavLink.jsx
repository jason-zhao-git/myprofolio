import Link from "next/link";

const NavLink = ({ href, title }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    const offset = 90; // Adjust this value based on your Navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = targetElement.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <a href={href} onClick={handleClick} className=" text-[#d7d8d8] font-pixel hover:text-gray-600">
      <p className="font-pixel mt-2">{title}</p>
    </a>
  );
  
};

export default NavLink;