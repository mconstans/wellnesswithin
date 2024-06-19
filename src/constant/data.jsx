import { AiOutlineMenu } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import {
  imgFive,
  imgFour,
  imgOne,
  imgSix,
  imgThree,
  imgTwo,
  imgSeven,
  imgEight,
  imgNine,

} from "../assets/getImage";

export const serviceData = [
  {
    id: 1,
    icon: <AiOutlineMenu />,
    title: "Health and Wellness Coaching Lite",
    description:
     "6 hours of coaching in 25 or 55 minute segments to suit your needs.",
    button: "book now",
    link: "https://www.honeybook.com/meeting-scheduler?utm_source=google&utm_campaign=18522979387&utm_medium=cpc&utm_content=p&utm_term=booking%20app%20for%20business&placement=152223153294&device=c&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjw4MSzBhC8ARIsAPFOuyXu6OtRjKDPnoWYwnPm5U0bVX2IJSSKtiwVyKjbpYOfeWpfuB5cUuwaArdLEALw_wcB",
  },
  {
    id: 2,
    icon: <IoBookOutline />,
    title: "Stress & Resiliency",
    description:
      "Manage the stressors in your life to find new balance and resiliency.",
    button: "view course",
    link: "/resilience/:id",
  },
  {
    id: 3,
    icon: <IoBookOutline />,
    title: "Tobacco Cessation",
    description:
      "Don't let smoking control your life. Stop smoking for good.",
    button: "view course",
    link: "/quit/:id",
  },
  {
    id: 4,
    icon: <AiOutlineMenu />,
    title: "Work-Life Balance",
    description:
      "Life's busy and more is expected. Learn how to balance work and home life.",
    button: "book now",
    link: "https://www.honeybook.com/meeting-scheduler?utm_source=google&utm_campaign=18522979387&utm_medium=cpc&utm_content=p&utm_term=booking%20app%20for%20business&placement=152223153294&device=c&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjw4MSzBhC8ARIsAPFOuyXu6OtRjKDPnoWYwnPm5U0bVX2IJSSKtiwVyKjbpYOfeWpfuB5cUuwaArdLEALw_wcB",
  },
  {
    id: 5,
    icon: <AiOutlineMenu />,
    title: "Weight Loss Coaching",
    description:
      "Establish goals and stay motivated along the journey.",
    button: "book now",
    link: "https://www.honeybook.com/meeting-scheduler?utm_source=google&utm_campaign=18522979387&utm_medium=cpc&utm_content=p&utm_term=booking%20app%20for%20business&placement=152223153294&device=c&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjw4MSzBhC8ARIsAPFOuyXu6OtRjKDPnoWYwnPm5U0bVX2IJSSKtiwVyKjbpYOfeWpfuB5cUuwaArdLEALw_wcB",
  },
  {
    id: 6,
    icon: <IoBookOutline />,
    title: "Stress Management",
    description:
      "Learn new techniques to manage stress and develop healthy coping mechanisms",
    button: "view course",
    link: "/stress/:id",
  },
];

export const resourceData = [
  {
    id: 101,
    title: "The Mayo Clinic Handbook for Happiness",
    subtitle: "Audiobook, Book",
    img: imgOne,
    icon: <AiOutlineMenu />,
    link: "https://www.barnesandnoble.com/w/the-mayo-clinic-handbook-for-happiness-amit-sood-md/1119972623?ean=2940178779033",
  },
  {
    id: 102,
    title: "The Power of Positive Thinking",
    subtitle: "Book",
    img: imgTwo,
    icon: <AiOutlineMenu />,
    link: "https://www.barnesandnoble.com/w/the-power-of-positive-thinking-dr-norman-vincent-peale/1140208999?ean=9781797135601",
  },
  {
    id: 103,
    title: "The Psychology of Success",
    subtitle: "Book",
    img: imgThree,
    icon: <AiOutlineMenu />,
    link: "https://www.barnesandnoble.com/w/mindset-carol-s-dweck/1100167257?ean=9780345472328",
  },
  {
    id: 104,
    title: "Getting Things Done: The Art of Stress-Free Productivity",
    subtitle: "Book",
    img: imgFour,
    icon: <AiOutlineMenu />,
    link: "https://www.barnesandnoble.com/w/getting-things-done-david-allen/1101546710?ean=9780143126560",
  },
  {
    id: 105,
    title: "Mayo Clinic Guide to Stress Free Living",
    subtitle: "Audiobook, book",
    img: imgFive,
    icon: <AiOutlineMenu />,
    link: "https://www.barnesandnoble.com/w/the-mayo-clinic-guide-to-stress-free-living-amit-sood-md/1115183416?ean=9780738217130",
  },
  {
    id: 106,
    title: "The Thing You Can See Only When You Slow Down",
    subtitle: "Book",
    img: imgSix,
    icon: <AiOutlineMenu />,
    link: "https://www.barnesandnoble.com/w/the-things-you-can-see-only-when-you-slow-down-haemin-sunim/1131559062?ean=9780143130772",
  },
];

export const bannerData = [
  {
    id: 7,
    img: imgSeven,
  },
  {
    id: 8,
    img: imgEight,
  },
  {
    id: 9,
    img: imgNine,
  },
];

export const clientData = [
  { id: 1, value: 0, name: "Grace", testimonial: "It was such a pleasure working with Deanna and her stress-management program. As part of my goals, she helped me structure my business routine so that I can achieve optimal performance at crucial times of my day." },
  { id: 2, value: 1, name: "Sara", testimonial: "Deanna taught me several meditative and psychological techniques that I now use daily which gives me an edge in my particular field. I'm better at handling stressful moments now" },
  { id: 3, value: 2, name: "Charlotte", testimonial: "I’ve been working with Deanna over six months, and the transformation in my life has been incredible. Her personalized approach & unwavering support have helped me achieve goals I never thought possible." }
];

