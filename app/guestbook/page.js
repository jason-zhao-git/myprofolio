
import MovSec from "../components/MovSec"; 
import Guestbook from "./components/Guestbook";
import Footer from "../components/Footer";



export default function Home() {
  // Added pt-16 to the main element to add top padding, ensuring that the Hero section is not blocked by the fixed Navbar.
  //Navbar is now in layout.js
  return (
    <>
      
      <main className="flex min-h-screen flex-col bg-zinc-900 w-full pt-24">
        

        <MovSec id="guestbook">
          <Guestbook />
        </MovSec>

        <Footer />
      </main>
    </>
  );
}
