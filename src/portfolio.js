/* Change this file to get your personal Portfolio */
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Mandar Ingle",
  title: "Hi all, I'm Mandar",
  subTitle: emoji(
    "DevOps Engineer with 4 years of experience in cloud services and DevOps practices. Hands-on expertise in Docker, Kubernetes, Terraform, CI/CD (Gitlab, ArgoCD), and infrastructure monitoring with Grafana and Prometheus."
  ),
  resumeLink: "", // No resume link
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/mandaringle",
  linkedin: "https://www.linkedin.com/in/mandaringle",
  gmail: "mandar.ingle04@gmail.com",
  medium: "",
  stackoverflow: "",
  twitter: "https://twitter.com/mandaringle",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DEVOPS ENGINEER ALWAYS LEARNING AND AUTOMATING INFRASTRUCTURE",
  skills: [
    emoji("⚡ Manage and automate scalable cloud infrastructure (AWS, Azure)"),
    emoji("⚡ Containerization and orchestration using Docker and Kubernetes"),
    emoji("⚡ Develop and maintain CI/CD pipelines with GitLab, ArgoCD"),
    emoji("⚡ Infrastructure as Code with Terraform"),
    emoji("⚡ Monitoring & alerting (Grafana, Prometheus)"),
    emoji("⚡ Scripting and automation (Shell, Python)")
  ],
  softwareSkills: [
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fab fa-kubernetes"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "ArgoCD",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Shell Scripting",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "fas fa-burn"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "SSGMCE, Amravati University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "B.E. Bachelor of Engineering (Information Technology)",
      duration: "2016 - 2020",
      desc: "Explored computer science fundamentals, participated in projects focused on cloud computing and DevOps, and fostered practical skills for real-world IT environments.",
      descBullets: [
        "Published a research paper in IJRCIT"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Infrastructure Management",
      progressPercentage: "90%"
    },
    {
      Stack: "Containerization & Orchestration",
      progressPercentage: "80%"
    },
    {
      Stack: "Monitoring & Scaling",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "NeoSoft",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Oct 2020 – Aug 2021",
      desc: "Worked on backend automation, infrastructure setup, and basic DevOps pipelines."
    },
    {
      role: "Data Engineer",
      company: "Invasystems",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Aug 2021 – July 2023",
      desc: "Designed and operated large-scale data pipelines with monitoring and automation."
    },
    {
      role: "Software Engineer",
      company: "FirstCry",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "July 2024 – Nov 2024",
      desc: "Implemented CI/CD strategies, scalable infrastructure, and cloud-centric solutions."
    },
    {
      role: "DevOps Engineer",
      company: "Infosys",
      companylogo: require("./assets/images/googleAssistantLogo.webp"),
      date: "Dec 2024 – Present",
      desc: "DevOps practices across hybrid cloud platforms, focusing on infra-as-code, automation, and monitoring."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS THAT HIGHLIGHT MY DEVOPS AND CLOUD JOURNEY",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "FirstCry E-Commerce Platform",
      projectDesc: "Worked on deploying, scaling and monitoring a large-scale e-commerce platform using modern DevOps practices.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.firstcry.com/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "MedCare Healthcare SaaS, UAE",
      projectDesc: "Automated deployments, set up CI/CD and cloud monitoring for a healthcare software platform.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.medcare.ae/"
        }
      ]
    },
    {
      image: require("./assets/images/codeInLogo.webp"),
      projectName: "Joy Skincare Platform",
      projectDesc: "Setup cloud hosting, automated scaling and monitoring for a high-traffic skincare product website.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.joyskincare.com/"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and cool stuff I've done so far!",
  achievementsCards: [
    {
      title: "Artificial Intelligence Using Python",
      subtitle:
        "Certification from NIELIT Delhi.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "AI Python Certificate",
      footerLink: []
    },
    {
      title: "Microsoft Certified DevOps Engineer Expert",
      subtitle:
        "Earned the devops engineer expert credential from Microsoft.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Microsoft Cert",
      footerLink: []
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Credential from AWS for foundational cloud skills.",
      image: require("./assets/images/saayaHealthLogo.webp"),
      imageAlt: "AWS Cert",
      footerLink: []
    },
    {
      title: "Microsoft Certified Azure Developer Associate",
      subtitle: "Credential for Azure development and cloud integration.",
      image: require("./assets/images/nextuLogo.webp"),
      imageAlt: "Azure Cert",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section - optional, currently none
const blogSection = {
  title: "Blogs",
  subtitle: "I love sharing my knowledge on cloud, DevOps, and automation.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections - optional, currently none
const talkSection = {
  title: "TALKS",
  subtitle: emoji("Happy to share my DevOps knowledge at meetups and webinars."),
  talks: [],
  display: false
};

// Podcast Section - omitted
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to contact for detailed resume.",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9527945505",
  email_address: "mandar.ingle04@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "mandaringle",
  display: true
};

const isHireable = true; // Open for job opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};