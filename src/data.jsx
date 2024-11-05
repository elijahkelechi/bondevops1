import { nanoid } from "nanoid";
import { FaGlobe, FaMobileAlt, FaWordpress } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#expertise", text: "expertise" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const expertise = [
  {
    id: nanoid(),
    title: "Modern Web Development",
    icon: <FaGlobe className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in creating visually engaging and fully responsive website, ensuring seamless user experiences through modern web development practices.",
  },

  {
    id: nanoid(),
    title: "Word Press",
    icon: <FaWordpress className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in building responsive and visually appealing WordPress sites, optimizing user experiences through custom themes, plugins, and modern development practices.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/drg9uyqf9/image/upload/v1730812871/carousel-images/tmp-2-1730812870624_x8jmrl.png",
    url: "https://sonnatrendy.vercel.app/",
    github: "https://github.com/john-smilga",
    title: "E-commerce projects",
    text: "This e-commerce platform offers a seamless shopping experience where customers can easily browse products, add items to their cart, and securely complete their purchase in just a few clicks. The site is optimized for speed, ensuring fast loading times and a user-friendly interface for both desktop and mobile users",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/drg9uyqf9/image/upload/v1730812930/carousel-images/tmp-3-1730812929255_fpia6v.png",
    url: "https://giitech-solutions-drone-site.vercel.app/",
    github: "https://github.com/john-smilga",
    title: "Giitech Drones",
    text: "This is a landing page for a drone website, designed for easy accessibility and user friendly",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/drg9uyqf9/image/upload/v1730812977/carousel-images/tmp-4-1730812976580_pptjqu.png",
    url: "https://sabi-ride.com.ng/",
    github: "https://github.com/john-smilga",
    title: "Sabi-Ride App",
    text: "Am opportuned to be the website developer of sabi-ride company website(an upcoming driving company), in this website I played my role as the front-end developer.",
  },
];
