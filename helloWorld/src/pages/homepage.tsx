import { FC } from "react";
import Button from "../components/buttons";

const Homepage: FC = () => {
  return (
    <>
      <div className="">
        <header className="bg-white p-2 px-32 text-black flex justify-between items-center z-20 relative">
          <h1 className="text-2xl font-bold tracking-widest text-black">
            INTEO
          </h1>

          <nav className="flex space-x-4 flex-1 justify-end items-center">
            <div className="flex space-x-4">
              <p className="text-black font-medium hover:text-pm-300 py-2 px-4 cursor-pointer">
                About
              </p>
              <p className="text-black font-medium hover:text-pm-300 py-2 px-4 cursor-pointer">
                Services
              </p>
              <p className="text-black font-medium hover:text-pm-300 py-2 px-4 cursor-pointer">
                Our Work
              </p>
            </div>
            {/* Button centered with the text */}
            <Button size="sm" text="CONTACT US" />
          </nav>
        </header>
        <main className="overflow-x-auto h-screen">
          <div className="flex justify-center items-center mt-16">
            <h3 className="font-playfair text-display-2xl-medium">
              Make <i>your home</i> an ode to joy
            </h3>
          </div>
          <div>
            <p className="text-body-xl-light break-words px-52 text-center">
              We turn your empty house into a lovely home, making the compact
              spaces with space-saving furniture. Making the unique tastes of
              yours into reality!
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Homepage;
