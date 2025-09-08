import Header from "./../../../../general/frontend/src/components/header.tsx";
import Hero from "../components/Hero.tsx";
import Faq from "../components/Faq.tsx";
import TrendingCourses from "../components/TrendingCourses.tsx";
import SearchBar from "../components/SearchBar.tsx";
import DeliveryMethod from "../components/DeliveryMethod.tsx";
import CoursesList from "../components/CoursesList.tsx";
import mockCourses from "./../mock_data.json";
import Testimonials from "../components/Testimonials.tsx";
import Footer from "../components/Footer.tsx";
import { FaSearch } from "react-icons/fa";
const AcademyHomePage = () => {
  return (
    <>
      <Header
        currentSection={null} // or use scroll tracking if needed
        showTopBar={false} // hide top contact bar if not needed
        stickyBgDefault="bg-transparent"
        stickyBgScrolled="bg-white shadow-md"
        // textColor="text-gray-900"
        linkPosition="justify-between h-20 lg:max-w-[70%] sticky top-0 "
        headerClassName="bg-transparent"
        navBarClassName="md:hidden"
        logoClassName="lg:h-18  h-14"
        onSignUpClick={() => console.log("Academy Sign Up clicked")}
        navLinks={[
          { label: "Home", scrollTo: "home", link: "/" },
          { label: "Services", scrollTo: "services", link: "/services" },
          { label: "About", scrollTo: "about", link: "/about" },
          { label: "Courses", scrollTo: "courses", link: "/courses" },
          { label: "Contact", scrollTo: "contact", link: "/contact-us" },
        ]}
        logoSrc="/AlikoLogo.svg"
        showTopBar={false}
        linkPosition="gap-12"
        stickyBgDefault="bg-transparent -z-10"
        stickyBgScrolled="bg-white"
        textColor="text-black gap-10 pr-10"
        onSignUpClick={() => console.log("sign up button clicked")}
        headerClassName="sticky top-0"
        homeHeaderButtonsClassName="lg-block"
        navLinksClassName="mx-4"
      />
      <Hero>
        <div className="relative mt-96 pb-36 md:pb-0 max-h-screen md:mt-0 z-20 max-w-3xl w-full text-left">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white  lg:text-[#1C1800]"
            style={{ textShadow: "2px 2px 4px gray", letterSpacing: "1px" }}
          >
            Learn In-Demand{" "}
            <span className="lg:text-[#1175BD] text-[#E6D600]">
              Tech Skills
            </span>
            . Build Your Future.
          </h1>

          <div className="flex flex-col sm:flex-row items-start lg:items-center space-y-5 sm:space-y-0 sm:space-x-6 mt-10">
            <button className="bg-gradient-to-r from-[#E6D600] to-[#F2F296] h-10 w-40 rounded-full">
              Get Started
            </button>
            <div className="flex items-center">
              <select className="bg-[#38A1FF] h-10 px-4 rounded-l-full text-white flex items-center gap-5">
                <option>Explore</option>
                <option>Technology</option>
                <option>STEM</option>
                <option>Health</option>
              </select>
              <div className="flex items-center bg-[#9C9C9C]/76 h-10 lg:w-72 w-56 px-4 rounded-r-xl">
                <input
                  className="bg-transparent flex-grow placeholder:text-white outline-none placeholder:text-sm"
                  placeholder="Search for courses"
                />
                <button className="bg-transparent border-0 h-full">
                  <FaSearch className="text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <div className="overflow-hidden">
        <TrendingCourses courses={mockCourses.trending_classes} />
        <h2 className="m-5 font-sans text-4xl font-extrabold">
          Explore Our Courses
        </h2>
        <SearchBar />
        <CoursesList
          courses={[...mockCourses.tech_classes]}
          category="Tech Courses"
        />
        <CoursesList
          courses={[...mockCourses.health_classes]}
          category="Health Courses"
        />
        <CoursesList
          courses={[...mockCourses.stem_classes]}
          category="Engineering & STEM Courses"
        />
        <DeliveryMethod />
        <Testimonials />
      </div>
      <Faq />
      <Footer />
    </>
  );
};

export default AcademyHomePage;
