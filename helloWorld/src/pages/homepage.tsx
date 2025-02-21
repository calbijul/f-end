import { FC } from "react";
import Button from "../components/buttons";
import ImgCard from "../components/imgCard";
import PhotoCard from "../components/photoCard";

const Homepage: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white p-4 xs:px-4 sm:px-8 md:px-16 lg:px-32 text-black flex justify-between items-center z-20 relative overflow-auto">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-widest text-black">
          INTEO
        </h1>

        <nav className="flex space-x-4 flex-1 justify-end items-center overflow-auto">
          <div className="flex space-x-4 overflow-auto ">
            <p className="text-black font-medium hover:text-pm-300 py-2 px-4 cursor-pointer">
              About
            </p>
            <p className="text-black font-medium hover:text-pm-300 py-2 px-4 cursor-pointer">
              Services
            </p>
            <p className="text-black font-medium hover:text-pm-300 py-2 px-4 cursor-pointer whitespace-nowrap">
              Our Work
            </p>
          </div>
          <Button size="sm" text="CONTACT US" />
        </nav>
      </header>

      <main className="flex-grow">
        <section className="flex justify-center items-center mt-16">
          <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
            Make <i>your home</i> an ode to joy
          </h3>
        </section>

        <section className="text-center px-4 sm:px-8 md:px-16 lg:px-32 mt-8">
          <p className="text-body-xl-light">
            We turn your empty house into a lovely home, making the compact
            spaces with space-saving furniture. Making unique tastes of yours
            into reality!
          </p>
        </section>

        <section className="flex justify-center items-center mt-10">
          <ImgCard size="lg" text="Hello World" image="img/Creative.png" />
        </section>

        <section className="-mt-12 ">
          <ImgCard size="lg" text="Hello World" image="img/Awards.png" />
        </section>

        <section className="px-4 sm:px-8 md:px-16 lg:px-32 mt-20">
          <div className="flex items-center">
            <span className="w-20 h-[2px] bg-pm-300"></span>
            <span className="ml-2 text-pm-600 text-body-sm-semibold">
              About Us
            </span>
          </div>

          <div className="flex flex-col md:flex-row mt-5">
            <div className="w-full md:w-1/2 p-4">
              <p className="font-playfair text-display-xl-regular">
                We help to bring your <i>dream home</i> to reality
              </p>
              <p className="font-outfit text-body-lg-light mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus fringilla dui amet faucibus nam. Erat id laoreet
                posuere etiam morbi.
              </p>
              <p className="font-outfit text-body-lg-light mt-6">
                Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
                mauris posuere auctor justo. Habitant proin aliquet volutpat leo
                ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc.
                Faucibus sit odio bibendum lobortis diam.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center space-x-4 p-4">
              <PhotoCard size="sm" image="img/Image1.png" />
              <PhotoCard size="sm" image="img/Image2.png" className="pt-16" />
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center mt-10 -mb-10 px-4 sm:px-8 md:px-16 lg:px-32">
          <ImgCard size="lg" text="Hello World" image="img/Metrics.png" />
        </section>

        <section className="px-4 sm:px-8 md:px-16 lg:px-32 mt-20">
          <div className="w-full h-[1px] bg-pm-300"></div>
        </section>

        <section className="flex flex-col md:flex-row p-16 -mt-10">
          <div className="w-full md:w-1/2 p-4 sm:p-8 lg:p-16">
            <p className="text-display-lg-regular font-playfair">
              Kick-start your dream home with us
            </p>
            <p className="text-display-lg-italic font-playfair text-pm-300 underline">
              Send us a hi
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 sm:p-8 lg:p-16">
            <p className="text-display-xs-regular font-playfair text-pm-600">
              Brooklyn, New York
            </p>
            <p className="text-body-sm-light font-outfit text-pm-600 mt-2">
              962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United
              State.
            </p>
            <p className="text-body-sm-light font-outfit text-pm-600 mt-4">
              Email us at
            </p>
            <p className="text-display-xs-regular font-playfair text-pm-600">
              hello@landify.design
            </p>
            <p className="text-body-sm-light font-outfit text-pm-600 mt-4">
              If you're in a hurry, quick call for us
            </p>
            <p className="text-display-xs-regular font-playfair text-pm-600">
              +8(663)125-08-59
            </p>
          </div>
        </section>
      </main>

      <footer className="pt-auto sticky">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="w-full h-[1px] bg-pm-300"></div>
        </div>

        <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-16 lg:px-32 mt-5">
          <div className="w-full p-4 text-center md:text-left">
            <p className="text-body-md-light font-outfit text-pm-600">
              © 2022 Inteo - Award winning studio. Made with love by Landify
            </p>
          </div>
          <div className="w-full p-4">
            <div className="flex flex-col md:flex-row justify-center md:justify-end items-center">
              <span className="mb-2 md:mb-0 mr-2 text-pm-600 text-body-sm-bold">
                CONNECT
              </span>
              <span className="w-20 h-[2px] bg-pm-300 mb-2 md:mb-0"></span>
              <div className="flex justify-center md:ml-5 mt-2 md:mt-0">
                <PhotoCard
                  size="sm"
                  image="img/Icons.png"
                  className="w-8 h-8 mx-1"
                />
                <PhotoCard
                  size="sm"
                  image="img/Icons1.png"
                  className="w-8 h-8 mx-1"
                />
                <PhotoCard
                  size="sm"
                  image="img/Icons 2.png"
                  className="w-8 h-8 mx-1"
                />
                <PhotoCard
                  size="sm"
                  image="img/Icons3.png"
                  className="w-8 h-8 mx-1"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
