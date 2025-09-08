import Header from "../../../../general/frontend/src/components/header.tsx";
import Hero from "../../../../general/frontend/src/components/hero.tsx";
import heroBg from "../assets/coursehero1.png";
import InstructorImg from "../assets/image1.png";
import { BsStarHalf } from "react-icons/bs";
import CourseOverviewSection from "../components/CourseOverviewSection.jsx";
import thumbnail from "./../assets/lectureThumbnail.png";
import SimilarCourses from "../components/SimilarCourses.tsx";
import sampleCourses from "../mock_courses.ts";
let sampleCourse = sampleCourses[0];
sampleCourse = { ...sampleCourse, thumbnail: thumbnail };
const AboutCoursesPage = () => {
  return (
    <>
      {/* Custom logo placement only for this page */}
      <img
        src="/AlikoLogo.svg"
        alt="AlikoHub logo"
        className="absolute top-2 left-10 z-50 h-20 w-auto"
      />

      <Header
        currentSection="courses"
        showTopBar={false}
        stickyBgDefault="fixed top-8 right-10 z-40 px-0 bg-gradient-to-r from-[#999999]/0 to-[#FFFFFF] !h-12 shadow-xl w-[calc(100%-18rem)] h-12 rounded-r-full overflow-hidden backdrop-blur-md"
        navLinksClassName="gap-x-99"
        navLinksContainerClassName="gap-x-12"
        logoClassName="hidden"
      />

      <Hero
        backgroundImage={heroBg}
        contentClassName="relative z-0 px-6 md:px-32"
        // headingClassName="mt-52 text-4xl text-white font-bold z-20"
        // paragraphClassName="text-lg z-20 leading-tight text-white max-w-[500px] mt-4"
        buttonClassName="mt-6 gap-x-4 rounded-3xl font-semibold z-20 w-72"
        // cardWrapperClassName="bg-gradient-to-r from-[#000000] to-white"
        imageWrapperClassName="rounded-xl shadow-xl"
        heading="Certified Nursing assistant (CNA)"
        subheading="Lorem ipsum dolor sit amet consectetur. Elit aenean pharetra vulputate morbi. Odio eu sapien cras lobortis tincidunt egestas maecenas rhoncus orci."
        buttonOneText="Try for free"
        buttonTwoText="Enroll now"
        showButtons={true}
        // buttonClassName="text-[#E6D600]"
        customContent={
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]  to-[#000000]/0 z-10 pointer-events-none" />

            <div className="relative z-20 flex flex-col gap-4 mt-4 text-white">
              <div className="flex items-center gap-4">
                <img
                  src={InstructorImg}
                  alt="Instructor Dr. Eden Alemayehu"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="flex items-center gap-2 text-xs">
                  <span className="opacity-70">Instructor:</span>
                  <strong className="text-sm">Dr. Eden Alemayehu</strong>
                </div>
              </div>

              <div className="flex gap-10  text-xs">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <BsStarHalf className="text-yellow-400 w-4 h-4" />
                    <span className="text-lg font-semibold">4.5</span>
                  </div>
                  <span className="opacity-70">Average Rating</span>
                </div>
                <div className="flex flex-col ">
                  <span className="text-lg font-semibold">200</span>
                  <span className="opacity-70">Students Enrolled</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">20</span>
                  <span className="opacity-70 justify-start">
                    Hours of Content
                  </span>
                </div>
              </div>
            </div>
          </>
        }
      />
      <CourseOverviewSection course={sampleCourse} />
      <SimilarCourses similarCourses={sampleCourses.filter(course => course.id !== sampleCourse.id)} />
    </>
  );
};

export default AboutCoursesPage;
