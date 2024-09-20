import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
// import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  // { label: "Features", href: "#" },
  // { label: "Workflow", href: "#" },
  // { label: "Pricing", href: "#" },
  // { label: "Testimonials", href: "#" },
  { label: "Features", href: "#" },
  { label: "About", href: "#" },
  { label: "Product", href: "#" },
 
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Arduino UNO",
    description:
      "Microcontroller board offers conectivity function is this prototype  and helps in controlling  electrical components like buttons,switches and motion of conveyor belt simualtaneously and individually",
  },
  {
    icon: <Fingerprint />,
    text: "Sensors",
    description:
      "ultrasonic sensor(objects proximity) to detect,collect and deposit trash in the trash can And  sensor  which helps to measures the weight of the  waste to ensure maximum capacity of the trash can ",
  },
  {
    icon: <ShieldHalf />,
    text: "Motor Driver",
    description:
      "motor driver which will be used to regulate motors speed, direction, and sometime other parameter that ensure reliable and effecient operation used in amplifying electrical signals to power and control the motor enabling precise speed control",
  },
  {
    icon: <BatteryCharging />,
    text: "Battery",
    description:
      "Used to provide electrical signals to a system which is later gets amplified into power by motor driver. this is the major component in this prototype used for the conveyor belt and to-fro  motion of machine",
  },
  {
    icon: <PlugZap />,
    text: "Jumper wire",
    description:
      "It is likely used to make temporary or permanent electrical connections between different parts of the machine's circuit  help bridge connections between sensors, pumps, control circuits, or other electronic components to ensure the machine operates correctly ",
  },
  // {
  //   icon: <GlobeLock />,
  //   text: "Analytics Dashboard",
  //   description:
  //     "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  // },
];

export const checklistItems = [
  {
    title: "Mechanical Design",
    description:
      "Autonomous or Remote-Controlled: Decide whether the robot will operate autonomously using sensors and AI for navigation or if it will be controlled remotely.                      Structure and Materials: The robot’s structure should be lightweight, durable, and corrosion-resistant. Marine-grade stainless steel, aluminum, or strong polymers can be used. It should also be buoyant.                    Waste Collection Mechanism: A conveyor belt or suction-based system to collect floating debris. ",
  },
  {
    title: "Sensing and Detection",
    description:
      "Sensors for Navigation: Equip the robot with ultrasonic sensors, LIDAR, GPS, or cameras to navigate around obstacles and cover a designated area in a water body. Implement cameras with AI image recognition or chemical sensors to detect and distinguish waste types like plastics, oil spills, or organic matter.",
  },
  {
    title: "Control System",
    description:
      "Microcontroller:Use a system like an Arduino, we will Develop software to process data from sensors, allowing the robot to make decisions (e.g., change direction, avoid obstacles, or prioritize cleaning areas).",
  },
  {
    title: " Waste Processing or Storage",
    description:
      "The robot should have a storage compartment to hold waste. This bin should be easily detachable for manual removal or emptied automatically at a docking station.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const Contact = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

// export const platformLinks = [
//   { href: "#", text: "Features" },
//   { href: "#", text: "Supported Devices" },
//   { href: "#", text: "System Requirements" },
//   { href: "#", text: "Downloads" },
//   { href: "#", text: "Release Notes" },
// ];

// export const communityLinks = [
//   { href: "#", text: "Events" },
//   { href: "#", text: "Meetups" },
//   { href: "#", text: "Conferences" },
//   { href: "#", text: "Hackathons" },
//   { href: "#", text: "Jobs" },
// ];
