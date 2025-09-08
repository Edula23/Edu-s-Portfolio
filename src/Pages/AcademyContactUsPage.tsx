import Navbar from "../components/Navbar";
import ContactUsHero from "../components/ContactUsHero";
import ContactUs from "../components/ContactUs";
const AcademyContactUs = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Courses", href: "/courses" },
    { label: "Contact", href: "/contact-us" },
  ];
  return (
    <div className="overflow-hidden">
      <Navbar navLinks={navLinks} />
      <ContactUsHero />
      <ContactUs />
    </div>
  );
};

export default AcademyContactUs;
