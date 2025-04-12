import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "YASH",
  lastName: "CHOKHAT",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "React Developer",
  avatar: "/images/avatar.jpeg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["मराठी", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
    Connect with me on LinkedIn and Instagram
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/yashchokhat",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/y%C4%81sh/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ychokhat@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>A React Developer</>,
  subline: (
    <>
    As a dedicated Diploma student specializing in MERN Stack Web Development (Next JS), React Native Cross Platform App Devolopment (Expo), Node JS Backend, Flask AI/ML-DS Microservices and IoT Embeded System Development
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        As a dedicated Diploma student specializing in MERN Stack Web Development (Next JS), React Native Cross Platform App Devolopment (Expo), Node JS Backend, Flask AI/ML-DS Microservices and IoT Embeded System Development
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Netbugs Solutions & Services LLP",
        timeframe: "May 2024 - Jul 2024",
        role: "React Developer",
        achievements: [
          <>
            Frontend React Web Developer (Vite)
          </>,
          <>
            Explore Next JS and Tailwind CSS to Build Dynamic Web Applications
          </>                                     ,
        ],
        images: [
          {
            src: "/images/projects/project-01/intern.jpg",
            alt: "Project",
            width: 16,
             maxWidth: 45,  
            height: 22,
            maxHieght: 60,  
          },
        ],
      },
      {
        company: "UEF EDTECH",
        timeframe: "Jun 2024 - 2022",
        role: "Android Developer",
        achievements: [
          <>
            Android App Development using Android Studio
          </>,
          <>
            Java / XML / SQL Database 
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover.jpg",
            alt: "Project",
            width: 18,
             maxWidth: 45,  
            height: 13,
            maxHieght: 60,  
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Siddhivinayak Technical Campus, Shegaon",
        description: <>Computer Science and Engineering</>,
      },
      {
        name: "SVRD (CBSE)",
        description: <>Jr School - 10th Grade</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React Native",
        description: <>Cross Platform App Development (Expo)</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Next JS",
        description: <>Building next gen apps with Next.js</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Node JS",
        description: <>Backend Server Side Development</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Embeded System Development",
        description: <>IoT using Embeded C and Micro Python</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Flask Python",
        description: <>Flask AI-ML/DA server-side Microservices</>,
        // optional: leave the array empty if you don't want to display images
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing and Publishing about Tech and Innovations...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
