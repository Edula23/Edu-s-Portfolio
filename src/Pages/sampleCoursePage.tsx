import VideoCard  from "../components/videoSection.tsx";
import CourseProgress from "../components/courseProgress.tsx";
import ModulesSection from "../components/modules.tsx";
import KeyLearningPoints from "../components/learningPoints.tsx";
import QuizSection from "../components/quiz.tsx";
import Header from "./../../../../general/frontend/src/components/header.tsx";
import Footer from "../components/Footer.tsx";
const modulesData = [
  {
    id: 1,
    title: "AWS Fundamentals",
    status: "completed" as const,
  },
  {
    id: 2,
    title: "EC2 and Storage",
    status: "completed" as const,
  },
  {
    id: 3,
    title: "VPC and Networking",
    status: "in-progress" as const,
    lessons: [
      { id: 1, title: "Intro to AWS Cloud Computing", completed: true },
      { id: 2, title: "Intro to AWS Cloud Computing", completed: true },
      { id: 3, title: "Intro to AWS Cloud Computing", completed: true },
      { id: 4, title: "Intro to AWS Cloud Computing", completed: false },
      { id: 5, title: "Intro to AWS Cloud Computing", completed: false },
    ],
  },
  {
    id: 4,
    title: "VPC and Networking",
    status: "locked" as const,
  },
];
const SampleCoursePage = () => {
return (
  <div className="bg-[#F5F8F2] px-4 md:px-0 ">
    <Header
      currentSection="home"
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
  <div className="flex flex-row w-full justify-between md:px-28">
    <div>
    <VideoCard />
    <KeyLearningPoints points={[
          "Understand the basics of AWS services",
          "Learn about EC2 instances and their types",
          "Explore VPC and networking concepts",
          "Get hands-on experience with AWS labs"
        ]}
        />
        <QuizSection
          question="What is the primary purpose of Amazon EC2?"
          options={[
            "To provide scalable computing capacity in the cloud",
            "To store data in the cloud",
            "To manage user identities",
            "To monitor application performance"
          ]}
          currentQuestion={1}
          totalQuestions={5}
        />
    </div>
    <div className="flex flex-col gap-4 items-center">
        <CourseProgress
          videosWatched={5}
          totalVideos={10}
          quizzesCompleted={2}
          totalQuizzes={5}
          labsCompleted={1}
          totalLabs={3}
        />
        <ModulesSection  modules={modulesData} />
        </div>
        </div>
        
        <Footer/>        
  </div>
);
}

export default SampleCoursePage;
