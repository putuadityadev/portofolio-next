export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration and open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-[100%] mx-auto",
    titleClassName: "justify-end",
    img: "/profile_img.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone working.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech skills",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning Fullstack JS Development.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Nike Shoes Landing Page",
    des: "Recreate Nike official landing page with React.js and TailwindCSS for Learning purpose.",
    img: "/nike-clone.png",
    iconLists: ["/re.svg", "/tail.svg",],
    link: "https://putuadityadev.github.io/nike-clone/",
  },
  {
    id: 2,
    title: "Amazon - Clone Ecommerce Website",
    des: "An ecommerce website inspire by Amazon with Full Javascript and Pure CSS Technologies",
    img: "/amazon-clone.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://putuadityadev.github.io/amazon-clone-app/",
  },
  {
    id: 3,
    title: "EpiCenter - Fullstack Ecommerce-Website",
    des: "A REAL Ecommerce website with auth, and payment integration. Build with Djanggo Python and Bootstrap.",
    img: "/epicenter.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/putuadityadev/django-final",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://putuadityadev.github.io/apple-website/",
  },
];

export const testimonials = [
  {
    quote: "I was impressed by your final project presentation. The website you built was complete with a payment feature and showed good attention to detail. You have demonstrated strong skills in web development, and I believe you have great potential in this field.",
    name: "Mr. Nugraha",
    title: "Instructor and mentor in the MSIB Python Learning Django program at Softuni"
  },
  {
    quote: "I was impressed by your final project presentation. The website you built was complete with a payment feature and showed good attention to detail. You have demonstrated strong skills in web development, and I believe you have great potential in this field.",
    name: "Mr. Nugraha",
    title: "Instructor and mentor in the MSIB Python Learning Django program at Softuni"
  },
  {
    quote: "I was impressed by your final project presentation. The website you built was complete with a payment feature and showed good attention to detail. You have demonstrated strong skills in web development, and I believe you have great potential in this field.",
    name: "Mr. Nugraha",
    title: "Instructor and mentor in the MSIB Python Learning Django program at Softuni"
  },
  {
    quote: "I was impressed by your final project presentation. The website you built was complete with a payment feature and showed good attention to detail. You have demonstrated strong skills in web development, and I believe you have great potential in this field.",
    name: "Mr. Nugraha",
    title: "Instructor and mentor in the MSIB Python Learning Django program at Softuni"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Computer Sience Student",
    desc: "A CS student in Primakara University major Information System.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Self Developers",
    desc: "Designed and developed website for my purpose to learning and startup.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a website app for a client, from initial concept to deployment on site.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Content Creator",
    desc: "I'm currently a content creator making videos about programing.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: '1',
    img: "/git.svg",
    link: "https://github.com/putuadityadev"
  },
  {
    id: '2',
    img: "/insta.svg",
    link: "https://www.instagram.com/tu.aditya_/"
  },
  {
    id: '3',
    img: "/link.svg",
    link: "https://linkedin.com/in/putuadit"
  },
];