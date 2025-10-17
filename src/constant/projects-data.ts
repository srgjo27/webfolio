import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    title: "EcoApp",
    period: "-",
    shortDescription:
      "EcoApp adalah aplikasi mobile - Cart Management: Swipe gestures dan quantity controls.",
    details: [
      "Modern Design: Clean dan minimalist interface dengan eco-friendly color scheme.",
      "Responsive Layout: Adaptive design untuk berbagai ukuran layar.",
      "Intuitive Navigation: Bottom navigation bar dan smooth transitions.",
      "Visual Hierarchy: Typography yang jelas dengan Poppins font family.",
      "Interactive Elements: Cards, buttons, dan icons yang responsive.",
      "Product Showcase: Grid layout untuk product listing dengan wishlist functionality.",
      "Search Experience: Real-time search dengan category filtering.",
      "Cart Management: Swipe gestures dan quantity controls.",
    ],
    image: "/images/projects/ecoapp-screenshot.png",
    imageHint: "mobile app",
    tags: ["Flutter", "Riverpod", "UI/UX", "REST API"],
    github: "https://github.com/srgjo27/ecoapp",
  },
  {
    title: "Product Recommendation with Algorithms",
    period: "Sep 2023 - Jul 2024",
    shortDescription:
      "A machine learning-powered system providing accurate recommendations, featuring a Laravel front-end and a Python back-end.",
    details: [
      "Developed a front-end using HTML, CSS, JavaScript, and PHP with the Laravel framework, incorporating AJAX for asynchronous data updates.",
      "Utilized MySQL for efficient database management.",
      "Implemented back-end machine learning algorithms in Python, improving product recommendation accuracy by 80%.",
      "Integrated a REST API to connect the front-end and back-end, accelerating data exchange.",
      "Optimized the recommendation model using MAE and RMSE, achieving an error rate below 1.",
      "Deployed the application on a VPS to ensure optimal scalability and performance for high user traffic.",
    ],
    image: "https://placehold.co/600x400.png",
    imageHint: "recommendation algorithm",
    tags: [
      "Laravel",
      "PHP",
      "Machine Learning",
      "Python",
      "MySQL",
      "AJAX",
      "REST API",
    ],
    github: "https://github.com/srgjo27/ud_anthony",
  },
  {
    title: "DELHUB",
    period: "Jan 2023 - Jun 2024",
    shortDescription:
      "A mobile app to digitize academic administration for students and supervisors, featuring scheduling, grading, and document uploads.",
    details: [
      "Designing and developing DELHUB mobile applications for the digitization of Final Project (TA), Final Project (PA), and Practical Work (KP) administration for students and supervisors.",
      "Build key features, including tutoring schedule management, grade input, and document upload.",
      "Integrate the mobile application (Flutter) with the admin dashboard (Laravel) through REST API, which speeds up the data synchronization process.",
      "Implemented real-time notifications using Firebase Messaging for schedule and status updates, improving system responsiveness.",
    ],
    image: "https://placehold.co/600x400.png",
    imageHint: "mobile app",
    tags: ["Flutter", "Laravel", "REST API", "Firebase", "Mobile Development"],
  },
  {
    title: "MARKETKU",
    period: "Oct 2022 - Des 2022",
    shortDescription:
      "A JavaFX desktop application for market management, featuring inventory and sales tracking with a MySQL backend.",
    details: [
      "Built advanced desktop applications using Java FX with an OOP approach, ensuring code modularity and scalability.",
      "Designed an interactive and intuitive user interface using FXML, significantly improving user experience.",
      "Integrated MySQL database via JDBC, enabling efficient data handling and ensuring reliable, real-time connectivity.",
      "Implemented key features such as inventory management, sales monitoring, and user productivity.",
    ],
    image: "https://placehold.co/600x400.png",
    imageHint: "desktop application",
    tags: ["JavaFX", "Java", "MySQL", "JDBC", "Desktop App"],
    github: "https://github.com/srgjo27/MarketKu-Desktop-Web",
  },
];