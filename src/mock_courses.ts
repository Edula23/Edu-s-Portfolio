const sampleCourses = [
  {
    id: 1,
    title: "Full-Stack Web Development with React & Node.js",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Build and deploy modern web apps using React, Node.js, and MongoDB.",
    longDescription: `This comprehensive course is designed to guide you from the fundamentals of web development to deploying a complete, production-ready application. 
    
    You'll begin by learning HTML, CSS, and JavaScript basics before diving deep into React for building interactive UIs. We’ll explore functional components, hooks, and efficient state management techniques, ensuring you can create scalable, maintainable frontend code.
    
    Next, you’ll transition to backend development with Node.js and Express.js, where you’ll learn to design RESTful APIs, handle authentication and authorization, and connect your application to MongoDB for dynamic data storage. We’ll cover best practices for error handling, security, and performance optimization.
Finally, you’ll deploy your full-stack application to a cloud hosting service, integrate CI/CD workflows, and gain experience with version control using Git. By the end of this course, you’ll have built a polished, professional-grade project for your portfolio.`,
    skills: ["React", "Node.js", "MongoDB", "REST APIs", "Express.js", "Deployment"],
    conceptsLearned: ["Component-based architecture", "State management", "CRUD operations", "Authentication & Authorization", "API integration"],
    estimatedTime: 40,
    targetLevel: "Intermediate",
    enrolledNum: 1520,
    instructor: "Sarah Mitchell",
    rating: 4.8,
    price: 129.99,
    category: "Web Development",
    prerequsites: ["Basic HTML", "Basic JavaScript"],
    languages: ["English", "Spanish"]
  },
  {
    id: 2,
    title: "Python for Data Science",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Learn Python and data analysis tools to kickstart your data science career.",
    longDescription: `Whether you're completely new to programming or looking to sharpen your skills for a career in data science, this course offers a structured, practical approach to mastering Python in the context of data analysis. 
We’ll start with Python syntax, data types, and control flow before moving into powerful libraries such as NumPy for numerical computing and Pandas for data manipulation.

You’ll gain hands-on experience with real-world datasets, learning to clean and preprocess messy data, perform exploratory data analysis, and generate clear, insightful visualizations using Matplotlib and Seaborn. Once you’re comfortable with the data pipeline, we’ll introduce you to the fundamentals of machine learning with scikit-learn — covering model training, testing, and evaluation.

By the end of the course, you’ll have a portfolio of mini-projects, including data dashboards, analytical reports, and predictive models, ready to showcase your skills to potential employers.`,
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    conceptsLearned: ["Data cleaning", "Exploratory data analysis", "Model training & evaluation", "Visualization techniques"],
    estimatedTime: 30,
    targetLevel: "Beginner",
    enrolledNum: 2980,
    instructor: "David Kim",
    rating: 4.7,
    price: 99.99,
    category: "Data Science",
    prerequsites: ["Basic Computer Skills"],
    languages: ["English"]
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Master the principles of user interface and user experience design.",
    longDescription: `In this beginner-friendly course, you’ll discover how great design impacts the way users interact with technology. We’ll start with the principles of design thinking — understanding your users, defining their needs, and ideating creative solutions. 
From there, you’ll learn how to create user personas, build wireframes, and develop clickable prototypes using Figma.

We’ll explore visual design fundamentals, including color theory, typography, and layout composition, while also diving into usability best practices to ensure your designs are intuitive and accessible. The course emphasizes real-world projects, allowing you to design mobile and web interfaces that are both beautiful and functional.

By the end of the program, you’ll have a complete design case study — from research to final prototype — which you can add to your portfolio to demonstrate your skills to potential clients or employers.`,
    skills: ["UI Design", "UX Research", "Prototyping", "Wireframing", "Figma"],
    conceptsLearned: ["Color theory", "Typography", "User personas", "Interactive prototyping", "Accessibility"],
    estimatedTime: 25,
    targetLevel: "Beginner",
    enrolledNum: 870,
    instructor: "Emily Carter",
    rating: 4.6,
    price: 79.99,
    category: "Design",
    prerequsites: ["Basic Computer Skills"],
    languages: ["English", "French"]
  },
  {
    id: 4,
    title: "Advanced Java Programming",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Take your Java skills to the next level with advanced concepts and best practices.",
    longDescription: `This course is tailored for experienced Java developers who want to refine their skills and dive into the language’s more sophisticated capabilities. We’ll begin with a deep dive into the Streams API and functional programming techniques that allow for cleaner, more expressive code.

You’ll learn about Java concurrency and multithreading, mastering synchronization, thread safety, and parallel processing to build efficient, responsive applications. We’ll explore common design patterns such as Singleton, Builder, and Observer, discussing when and why to use each, along with practical examples.

Memory management and garbage collection will be covered in detail, helping you diagnose and prevent performance bottlenecks. The course includes hands-on projects where you’ll build complex applications and implement advanced debugging and profiling techniques to ensure they run smoothly in production environments.`,
    skills: ["Java", "Concurrency", "Streams API", "Design Patterns", "Performance Optimization"],
    conceptsLearned: ["Thread safety", "Functional programming in Java", "Observer pattern", "Builder pattern", "Garbage collection"],
    estimatedTime: 35,
    targetLevel: "Advanced",
    enrolledNum: 460,
    instructor: "Michael Brown",
    rating: 4.9,
    price: 139.99,
    category: "Programming",
    prerequsites: ["Java Basics"],
    languages: ["English", "German"]
  },
  {
    id: 5,
    title: "Cloud Computing with AWS",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Learn how to design, deploy, and manage applications on Amazon Web Services.",
    longDescription: `Cloud computing is transforming the way businesses operate, and AWS is at the forefront of this revolution. This course takes you through the essential AWS services and how to leverage them to build scalable, secure, and cost-effective cloud applications.

We’ll start with an overview of the AWS ecosystem before diving into core services like EC2 for computing power, S3 for object storage, and RDS for managed databases. You’ll gain practical experience creating and configuring these resources, as well as managing permissions and security with IAM.

The course also covers automation using AWS CloudFormation, allowing you to define infrastructure as code for consistent deployments. We’ll examine architectural best practices, cost optimization strategies, and disaster recovery planning. By the end, you’ll have the skills to confidently deploy production-grade applications in the AWS cloud.`,
    skills: ["AWS", "CloudFormation", "EC2", "S3", "RDS", "IAM"],
    conceptsLearned: ["Scalable architecture", "Security best practices", "Automation with templates", "Database management in the cloud"],
    estimatedTime: 28,
    targetLevel: "Intermediate",
    enrolledNum: 1120,
    instructor: "Rachel Green",
    rating: 4.8,
    price: 119.99,
    category: "Cloud Computing",
    prerequsites: ["Basic Networking", "Linux Basics"],
    languages: ["English", "Japanese"]
  },
  {
    id: 6,
    title: "Machine Learning with TensorFlow",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Build and deploy machine learning models using TensorFlow and Keras.",
    longDescription: `This course walks you through the foundations of machine learning, starting with supervised and unsupervised learning concepts, and moving towards deep learning with TensorFlow and Keras. You’ll work with image, text, and numeric data, creating models for classification, regression, and natural language processing.

We’ll cover neural network architectures, optimization techniques, and regularization methods to improve model accuracy. Practical projects include building a handwritten digit recognizer, a sentiment analysis model, and a recommendation system.

By the end of this course, you’ll be comfortable designing, training, and deploying machine learning models in real-world scenarios, both locally and in the cloud.`,
    skills: ["TensorFlow", "Keras", "Deep Learning", "Neural Networks", "Data Preprocessing"],
    conceptsLearned: ["Gradient descent", "Overfitting prevention", "Convolutional layers", "Recurrent layers", "Model deployment"],
    estimatedTime: 45,
    targetLevel: "Intermediate",
    enrolledNum: 890,
    instructor: "Daniel Lee",
    rating: 4.7,
    price: 149.99,
    category: "Artificial Intelligence",
    prerequsites: ["Python Basics", "Linear Algebra"],
    languages: ["English"]
  },
  {
    id: 7,
    title: "Cybersecurity Fundamentals",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Learn how to protect systems, networks, and data from cyber threats.",
    longDescription: `This course covers the essentials of cybersecurity, from understanding different types of threats to implementing practical security measures. You’ll learn about network security, encryption, firewalls, and intrusion detection systems.

We’ll also explore the principles of ethical hacking and penetration testing, giving you insight into how attackers operate and how to defend against them. Practical labs will have you configuring security tools, monitoring logs, and responding to simulated cyber incidents.

By the end, you’ll be able to assess risks, apply security best practices, and contribute to safeguarding an organization’s digital assets.`,
    skills: ["Network Security", "Encryption", "Penetration Testing", "Incident Response", "Risk Assessment"],
    conceptsLearned: ["CIA Triad", "Firewalls", "IDS/IPS", "Vulnerability scanning", "Security policies"],
    estimatedTime: 35,
    targetLevel: "Intermediate",
    enrolledNum: 1040,
    instructor: "Laura Thompson",
    rating: 4.8,
    price: 129.99,
    category: "Cybersecurity",
    prerequsites: ["Basic Networking"],
    languages: ["English"]
  },
  {
    id: 8,
    title: "iOS App Development with Swift",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Design and build iOS apps from scratch using Swift and Xcode.",
    longDescription: `Starting with the basics of Swift programming, this course takes you through building responsive, user-friendly iOS applications. You’ll work in Xcode to design interfaces, connect UI elements to code, and implement navigation and data persistence.

We’ll cover important topics like working with APIs, implementing animations, and optimizing for performance. The course includes projects such as a weather app, a task manager, and a photo-sharing app.

By the end, you’ll be ready to publish your own iOS app to the App Store.`,
    skills: ["Swift", "Xcode", "UIKit", "Core Data", "REST APIs"],
    conceptsLearned: ["App lifecycle", "MVC pattern", "Data persistence", "API integration", "UI animations"],
    estimatedTime: 40,
    targetLevel: "Intermediate",
    enrolledNum: 760,
    instructor: "Jonathan Reed",
    rating: 4.7,
    price: 139.99,
    category: "Mobile Development",
    prerequsites: ["Basic Programming Knowledge"],
    languages: ["English"]
  },
  {
    id: 9,
    title: "Android App Development with Kotlin",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Build Android applications using Kotlin and Android Studio.",
    longDescription: `Learn to create Android apps using Kotlin, Google’s preferred language for Android development. You’ll set up Android Studio, design layouts with XML, and implement interactive features with Kotlin.

We’ll explore key Android concepts such as activity lifecycle, fragments, data storage, and networking. You’ll work on apps including a note-taking app, a news reader, and a fitness tracker.

By the end, you’ll have the skills to develop and deploy Android apps to the Google Play Store.`,
    skills: ["Kotlin", "Android Studio", "XML", "SQLite", "Retrofit"],
    conceptsLearned: ["Activity lifecycle", "Fragments", "Local storage", "Networking", "App publishing"],
    estimatedTime: 42,
    targetLevel: "Intermediate",
    enrolledNum: 820,
    instructor: "Sophia Martinez",
    rating: 4.8,
    price: 139.99,
    category: "Mobile Development",
    prerequsites: ["Basic Programming Knowledge"],
    languages: ["English"]
  },
  {
    id: 10,
    title: "DevOps with Docker and Kubernetes",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Automate, deploy, and manage applications with Docker and Kubernetes.",
    longDescription: `This course takes you through the core concepts of containerization and orchestration. You’ll learn to create Docker images, manage containers, and deploy applications using Kubernetes clusters.

We’ll also cover CI/CD pipelines, infrastructure as code, and monitoring with tools like Prometheus and Grafana. Hands-on labs will guide you through deploying microservices and scaling them efficiently.

By the end, you’ll have practical DevOps skills to streamline software delivery and operations.`,
    skills: ["Docker", "Kubernetes", "CI/CD", "Infrastructure as Code", "Monitoring"],
    conceptsLearned: ["Containerization", "Cluster management", "Load balancing", "Rolling updates", "Service discovery"],
    estimatedTime: 38,
    targetLevel: "Intermediate",
    enrolledNum: 940,
    instructor: "Mark Evans",
    rating: 4.8,
    price: 149.99,
    category: "DevOps",
    prerequsites: ["Linux Basics", "Basic Networking"],
    languages: ["English"]
  },
  {
    id: 11,
    title: "Game Development with Unity",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Create 2D and 3D games using Unity and C#.",
    longDescription: `From game design principles to coding gameplay mechanics, this course teaches you how to develop interactive games using Unity. You’ll learn to create scenes, work with physics, implement animations, and design user interfaces.

Projects include a 2D platformer, a first-person shooter, and a mobile puzzle game. We’ll also cover asset management and optimization for performance.

By the end, you’ll have a portfolio of games ready to showcase to potential employers or players.`,
    skills: ["Unity", "C#", "Physics", "Animation", "UI Design"],
    conceptsLearned: ["Game loop", "Collision detection", "Character controllers", "Level design", "Optimization"],
    estimatedTime: 50,
    targetLevel: "Intermediate",
    enrolledNum: 670,
    instructor: "Olivia Parker",
    rating: 4.7,
    price: 159.99,
    category: "Game Development",
    prerequsites: ["Basic Programming Knowledge"],
    languages: ["English"]
  },
  {
    id: 12,
    title: "Blockchain Development with Ethereum",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Build decentralized applications using Ethereum and Solidity.",
    longDescription: `This course covers blockchain fundamentals, Ethereum architecture, and smart contract development with Solidity. You’ll learn to create decentralized applications (dApps) and interact with the blockchain using Web3.js.

Projects include a token creation app, a decentralized voting platform, and an NFT marketplace. Security considerations and gas optimization techniques are also covered.

By the end, you’ll be able to build, test, and deploy secure smart contracts on the Ethereum network.`,
    skills: ["Blockchain", "Ethereum", "Solidity", "Web3.js", "Smart Contracts"],
    conceptsLearned: ["Consensus mechanisms", "Smart contract security", "Gas optimization", "dApp architecture", "Token standards"],
    estimatedTime: 48,
    targetLevel: "Advanced",
    enrolledNum: 560,
    instructor: "Ethan Brooks",
    rating: 4.8,
    price: 179.99,
    category: "Blockchain",
    prerequsites: ["JavaScript Basics", "Basic Cryptography"],
    languages: ["English"]
  },
  {
    id: 13,
    title: "Data Visualization with D3.js",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Create interactive, data-driven visualizations for the web using D3.js.",
    longDescription: `Learn to transform data into stunning visual representations using D3.js. This course covers data binding, scales, axes, transitions, and interactivity.

Projects include bar charts, line graphs, scatter plots, and interactive maps. You’ll also learn best practices for storytelling with data and optimizing visualizations for performance.

By the end, you’ll be able to create engaging, interactive dashboards and reports.`,
    skills: ["D3.js", "JavaScript", "SVG", "Data Binding", "Animation"],
    conceptsLearned: ["Scales and axes", "Data joins", "Transitions", "User interaction", "Responsive design"],
    estimatedTime: 32,
    targetLevel: "Intermediate",
    enrolledNum: 740,
    instructor: "Natalie Cooper",
    rating: 4.7,
    price: 119.99,
    category: "Data Visualization",
    prerequsites: ["JavaScript Basics"],
    languages: ["English"]
  },
{
    id: 14,
    title: "Full-Stack Web Development with React & Node.js",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Build and deploy modern web apps using React, Node.js, and MongoDB.",
    longDescription: `This comprehensive course is designed to guide you from the fundamentals of web development to deploying a complete, production-ready application. 
You'll begin by learning HTML, CSS, and JavaScript basics before diving deep into React for building interactive UIs. We’ll explore functional components, hooks, and efficient state management techniques, ensuring you can create scalable, maintainable frontend code.

Next, you’ll transition to backend development with Node.js and Express.js, where you’ll learn to design RESTful APIs, handle authentication and authorization, and connect your application to MongoDB for dynamic data storage. We’ll cover best practices for error handling, security, and performance optimization.

Finally, you’ll deploy your full-stack application to a cloud hosting service, integrate CI/CD workflows, and gain experience with version control using Git. By the end of this course, you’ll have built a polished, professional-grade project for your portfolio.`,
    skills: ["React", "Node.js", "MongoDB", "REST APIs", "Express.js", "Deployment"],
    conceptsLearned: ["Component-based architecture", "State management", "CRUD operations", "Authentication & Authorization", "API integration"],
    estimatedTime: 40,
    targetLevel: "Intermediate",
    enrolledNum: 1520,
    instructor: "Sarah Mitchell",
    rating: 4.8,
    price: 129.99,
    category: "Web Development",
    prerequsites: ["Basic HTML", "Basic JavaScript"],
    languages: ["English", "Spanish"]
  },
  {
    id: 15,
    title: "Python for Data Science",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Learn Python and data analysis tools to kickstart your data science career.",
    longDescription: `Whether you're completely new to programming or looking to sharpen your skills for a career in data science, this course offers a structured, practical approach to mastering Python in the context of data analysis. 
We’ll start with Python syntax, data types, and control flow before moving into powerful libraries such as NumPy for numerical computing and Pandas for data manipulation.

You’ll gain hands-on experience with real-world datasets, learning to clean and preprocess messy data, perform exploratory data analysis, and generate clear, insightful visualizations using Matplotlib and Seaborn. Once you’re comfortable with the data pipeline, we’ll introduce you to the fundamentals of machine learning with scikit-learn — covering model training, testing, and evaluation.

By the end of the course, you’ll have a portfolio of mini-projects, including data dashboards, analytical reports, and predictive models, ready to showcase your skills to potential employers.`,
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    conceptsLearned: ["Data cleaning", "Exploratory data analysis", "Model training & evaluation", "Visualization techniques"],
    estimatedTime: 30,
    targetLevel: "Beginner",
    enrolledNum: 2980,
    instructor: "David Kim",
    rating: 4.7,
    price: 99.99,
    category: "Data Science",
    prerequsites: ["Basic Computer Skills"],
    languages: ["English"]
  },
  {
    id: 16,
    title: "UI/UX Design Fundamentals",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Master the principles of user interface and user experience design.",
    longDescription: `In this beginner-friendly course, you’ll discover how great design impacts the way users interact with technology. We’ll start with the principles of design thinking — understanding your users, defining their needs, and ideating creative solutions. 
From there, you’ll learn how to create user personas, build wireframes, and develop clickable prototypes using Figma.

We’ll explore visual design fundamentals, including color theory, typography, and layout composition, while also diving into usability best practices to ensure your designs are intuitive and accessible. The course emphasizes real-world projects, allowing you to design mobile and web interfaces that are both beautiful and functional.

By the end of the program, you’ll have a complete design case study — from research to final prototype — which you can add to your portfolio to demonstrate your skills to potential clients or employers.`,
    skills: ["UI Design", "UX Research", "Prototyping", "Wireframing", "Figma"],
    conceptsLearned: ["Color theory", "Typography", "User personas", "Interactive prototyping", "Accessibility"],
    estimatedTime: 25,
    targetLevel: "Beginner",
    enrolledNum: 870,
    instructor: "Emily Carter",
    rating: 4.6,
    price: 79.99,
    category: "Design",
    prerequsites: ["Basic Computer Skills"],
    languages: ["English", "French"]
  },
  {
    id: 17,
    title: "Advanced Java Programming",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Take your Java skills to the next level with advanced concepts and best practices.",
    longDescription: `This course is tailored for experienced Java developers who want to refine their skills and dive into the language’s more sophisticated capabilities. We’ll begin with a deep dive into the Streams API and functional programming techniques that allow for cleaner, more expressive code.

You’ll learn about Java concurrency and multithreading, mastering synchronization, thread safety, and parallel processing to build efficient, responsive applications. We’ll explore common design patterns such as Singleton, Builder, and Observer, discussing when and why to use each, along with practical examples.

Memory management and garbage collection will be covered in detail, helping you diagnose and prevent performance bottlenecks. The course includes hands-on projects where you’ll build complex applications and implement advanced debugging and profiling techniques to ensure they run smoothly in production environments.`,
    skills: ["Java", "Concurrency", "Streams API", "Design Patterns", "Performance Optimization"],
    conceptsLearned: ["Thread safety", "Functional programming in Java", "Observer pattern", "Builder pattern", "Garbage collection"],
    estimatedTime: 35,
    targetLevel: "Advanced",
    enrolledNum: 460,
    instructor: "Michael Brown",
    rating: 4.9,
    price: 139.99,
    category: "Programming",
    prerequsites: ["Java Basics"],
    languages: ["English", "German"]
  },
  {
    id: 18,
    title: "Cloud Computing with AWS",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Learn how to design, deploy, and manage applications on Amazon Web Services.",
    longDescription: `Cloud computing is transforming the way businesses operate, and AWS is at the forefront of this revolution. This course takes you through the essential AWS services and how to leverage them to build scalable, secure, and cost-effective cloud applications.

We’ll start with an overview of the AWS ecosystem before diving into core services like EC2 for computing power, S3 for object storage, and RDS for managed databases. You’ll gain practical experience creating and configuring these resources, as well as managing permissions and security with IAM.

The course also covers automation using AWS CloudFormation, allowing you to define infrastructure as code for consistent deployments. We’ll examine architectural best practices, cost optimization strategies, and disaster recovery planning. By the end, you’ll have the skills to confidently deploy production-grade applications in the AWS cloud.`,
    skills: ["AWS", "CloudFormation", "EC2", "S3", "RDS", "IAM"],
    conceptsLearned: ["Scalable architecture", "Security best practices", "Automation with templates", "Database management in the cloud"],
    estimatedTime: 28,
    targetLevel: "Intermediate",
    enrolledNum: 1120,
    instructor: "Rachel Green",
    rating: 4.8,
    price: 119.99,
    category: "Cloud Computing",
    prerequsites: ["Basic Networking", "Linux Basics"],
    languages: ["English", "Japanese"]
  },
  {
    id: 19,
    title: "Machine Learning with TensorFlow",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Build and deploy machine learning models using TensorFlow and Keras.",
    longDescription: `This course walks you through the foundations of machine learning, starting with supervised and unsupervised learning concepts, and moving towards deep learning with TensorFlow and Keras. You’ll work with image, text, and numeric data, creating models for classification, regression, and natural language processing.

We’ll cover neural network architectures, optimization techniques, and regularization methods to improve model accuracy. Practical projects include building a handwritten digit recognizer, a sentiment analysis model, and a recommendation system.

By the end of this course, you’ll be comfortable designing, training, and deploying machine learning models in real-world scenarios, both locally and in the cloud.`,
    skills: ["TensorFlow", "Keras", "Deep Learning", "Neural Networks", "Data Preprocessing"],
    conceptsLearned: ["Gradient descent", "Overfitting prevention", "Convolutional layers", "Recurrent layers", "Model deployment"],
    estimatedTime: 45,
    targetLevel: "Intermediate",
    enrolledNum: 890,
    instructor: "Daniel Lee",
    rating: 4.7,
    price: 149.99,
    category: "Artificial Intelligence",
    prerequsites: ["Python Basics", "Linear Algebra"],
    languages: ["English"]
  },
  {
    id: 20,
    title: "Cybersecurity Fundamentals",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Learn the essentials of securing networks, systems, and applications.",
    longDescription: `This course introduces you to the core principles of cybersecurity, including risk management, encryption, network defense, and threat detection. You’ll explore different types of cyberattacks such as phishing, ransomware, and DDoS attacks, learning how to prevent and mitigate them.

Hands-on labs will guide you through configuring firewalls, setting up intrusion detection systems, and implementing multi-factor authentication. We’ll also cover legal and ethical considerations in cybersecurity, preparing you for both technical and compliance aspects of the field.

By the end, you’ll have the foundational skills to protect digital assets and respond effectively to security incidents.`,
    skills: ["Network Security", "Encryption", "Threat Detection", "Incident Response", "Firewalls"],
    conceptsLearned: ["CIA Triad", "Malware analysis", "Security policies", "Vulnerability scanning"],
    estimatedTime: 32,
    targetLevel: "Beginner",
    enrolledNum: 780,
    instructor: "Laura Simmons",
    rating: 4.6,
    price: 109.99,
    category: "Cybersecurity",
    prerequsites: ["Basic Networking Knowledge"],
    languages: ["English"]
  },
  {
    id: 21,
    title: "Android App Development with Kotlin",
    thumbnail: "./src/assets/lectureThumbnail.png",
    shortDescription: "Create modern Android applications using Kotlin.",
    longDescription: `Learn to develop native Android apps from scratch using Kotlin, the official language for Android development. We’ll start with the basics of the Android Studio IDE and Kotlin syntax, then progress to building fully interactive apps with complex layouts, data storage, and API integration.

You’ll learn best practices for app architecture, including MVVM, and implement features such as push notifications, location services, and offline data caching. The course culminates with a capstone project where you publish your own app on the Google Play Store.`,
    skills: ["Kotlin", "Android Studio", "MVVM", "API Integration", "UI Design"],
    conceptsLearned: ["Activity lifecycle", "RecyclerView", "Room database", "Firebase integration"],
    estimatedTime: 38,
    targetLevel: "Intermediate",
    enrolledNum: 940,
    instructor: "Kevin Park",
    rating: 4.7,
    price: 124.99,
    category: "Mobile Development",
    prerequsites: ["Basic Programming Knowledge"],
    languages: ["English", "Korean"]
  },
]

export default sampleCourses;