import Header from "./../../../../general/frontend/src/components/header.tsx";
import About from "../components/About.tsx";
import heroBg from "../assets/coursehero1.png";
import Footer from "../components/Footer.jsx";
import AboutHero from "../components/AboutHero.tsx";
const AcademyAboutPage = () => {
  return (
    <>
      <div className=" bg-[#]">
        {/* Custom logo placement only for this page */}

        <Header
          currentSection="about"
          navLinks={[
            { label: "Home", scrollTo: "top", link: "/" },
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
        <AboutHero />
        <section className="p-10 my-4 bg-[#E0EEF7] mt-0 top-0  w-screen">
          <div className="flex flex-col items-center sm:grid sm:grid-cols-2 sm:gap-2 md:gap-30 lg:gap-20 p-2 h-fit w-full">
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              obcaecati et quo aliquam aspernatur pariatur dolores animi
              molestiae veritatis inventore minima deserunt ipsa delectus in
              officia harum distinctio, ad sit. Nemo quos quasi dolorem! Eaque
              aut reprehenderit, nesciunt odit, dicta minima quia laborum quod
              quae doloremque, soluta cum? Numquam pariatur quam laboriosam
              culpa repellat, repudiandae natus voluptatem sequi nostrum
              impedit.
            </p>
            <img
              src={heroBg}
              alt="A lady looking at laptop"
              className="rounded-bl-4xl rounded-tr-4xl w-full"
            />
          </div>
        </section>
        <About />
        <Footer />
      </div>
    </>
  );
};

export default AcademyAboutPage;
