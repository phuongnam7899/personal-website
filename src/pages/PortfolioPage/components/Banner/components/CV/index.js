import "./index.scss";
import dayjs from "dayjs";

const data = {
  links: [
    {
      name: "Email",
      value: "phuongnam7899@gmail.com",
    },
    {
      name: "LinkedIn",
      value: "https://bit.ly/3kDtnIm",
    },
    // {
    //   name: "Github",
    //   value: "https://bit.ly/2Mq5OTf",
    // },
    {
      name: "Personal website",
      value: "https://nklm.netlify.app",
    },
  ],
  generalInfo: {
    yearOfBirth: 1999,
    gender: "Male",
    quickDescription:
      "1-year experience in product management roles (PO, PM Trainee) and 2+ years in others roles of product team (UX/UI, Developer). Data-driven, user-centric and goal-oriented",
  },
  experiences: [
    {
      startTime: dayjs().month(0).year(2023),
      endTime: dayjs().month(3).year(2023),
      periodLength: "0y 6m",
      title: "Product Management Trainee",
      company: "Zalo",
      description: [
        "Do market research, user research & analyze product data to define & prioritize problem",
        "Do competitor research,  brainstorm solutions",
        "Build product roadmap and prepare feature specs",
      ],
    },
    {
      startTime: dayjs().month(4).year(2022),
      endTime: "now",
      periodLength: "0y 6m",
      title: "Project Team Lead",
      company: "CMC Global",
      description: [
        "Implement application UI and API integration base on design",
        "Write UI automation test scripts for features",
        "Manage team’s working progress and be the main communicator with Singaporean customer",
      ],
    },
    {
      startTime: dayjs().month(4).year(2021),
      endTime: dayjs().month(3).year(2022),
      periodLength: "1y 0m",
      title: "UI/UX Designer + Product Owner",
      company: "MindX Technology School",
      description: [
        "Research on users needs, business process and design the solution",
        "Manage products backlog / sprint backlog",
        "Create analysis for features (For 3 products)",
        "Design UI/UX  according to analysis",
        "Ensure the quality of features that will be delivered",
      ],
    },
    {
      startTime: dayjs().month(0).year(2020),
      endTime: dayjs().month(4).year(2021),
      periodLength: "1y 5m",
      title: "Web developer + UI/UX Designer",
      company: "MindX Technology School",
      description: [
        "Read the analysis and make wirefarame/design/prototype for features",
        "Maintain UI system",
        "Implement features according to the requirement & design using MERN stack",
      ],
    },
    {
      startTime: dayjs().month(7).year(2019),
      endTime: dayjs().month(0).year(2020),
      periodLength: "0y 5m",
      title: "Content Researcher (R&D team)",
      company: "MindX Technology School",
      description: [
        "Developing curriculum for courses about web development for teens (15-18 years old)",
        "Design homework for each lesson",
      ],
    },
    {
      startTime: dayjs().month(7).year(2019),
      endTime: dayjs().month(7).year(2022),
      periodLength: "3y 0m",
      title: "Mentor/Teacher (Part-time)",
      company: "MindX Technology School",
      description: [
        "Guide, support students (15-24 years old) in classes about web development",
      ],
    },
  ],
  skillsAndTools: [
    {
      category: "Product Management",
      items: [
        "Design Thinking",
        "User Experience Design",
        "Agile Scrum Development",
        "Product Data Analysis",
        "Market/User Research",
      ],
    },
    {
      category: "UI/UX",
      items: ["Figma", "Balsamig"],
    },
    // {
    //   category: "Web development",
    //   items: [
    //     "HTML, CSS/SCSS, Javascript",
    //     "ReactJS (NextJS, MaterialUI / AntDesign)",
    //     "ExpressJS (MongoDB)",
    //     "GraphQL",
    //     "RobotFramework",
    //   ],
    // },
    {
      category: "Language",
      items: ["English (can communicate in work)"],
    },
  ],
  education: [
    {
      startTime: dayjs().month(7).year(2018),
      endTime: dayjs().month(6).year(2020),
      periodLength: "0y 3m",
      title: "Zalo",
      description: ["Product Management Trainee Program"],
    },
    {
      startTime: dayjs().month(7).year(2018),
      endTime: dayjs().month(6).year(2020),
      periodLength: "1y 11m",
      title: "Hanoi University of Science & Technology",
      description: ["Information Technology major (CPA 3.0)"],
    },
    {
      startTime: dayjs().month(7).year(2018),
      endTime: dayjs().month(6).year(2019),
      periodLength: "0y 10m",
      title: "MindX Technology School",
      description: [
        "3 courses about web development (Python, Java, HTML/CSS, JS, MERN)",
      ],
    },
    {
      startTime: dayjs().month(9).year(2019),
      endTime: dayjs().month(11).year(2019),
      periodLength: "0y 3m",
      title: "Impactus Academy",
      description: [
        "A course about business english, small talk, presentation",
      ],
    },
  ],
  achivements: [
    {
      startTime: "Apr 2023",
      title: "Top 8/900 candidates in PMT Program",
      description: ["Zalo"],
    },
    {
      startTime: "Aug 2021",
      title: "Top 30/250 Web Coding Challenge",
      description: ["TopCV x MindX Technology School"],
    },
    {
      startTime: "Jul 2021",
      title: "1 of 10 Dedication Awards of the company",
      description: ["MindX Technology School"],
    },
    {
      startTime: "Dec 2019",
      title: "Top 2/15 student in Business English class",
      description: [
        "Score evaluated according to small talk/presentation skill and business knowledge",
      ],
    },
    {
      startTime: "Nov 2018 - Jun 2019",
      title: "2 First prizes + 1 Second prize in final Hackathon after courses",
      description: [
        "1 static website with backend using Python",
        "1 arcade game using Java",
        "1 website using MERN",
      ],
    },
  ],
  activities: [
    {
      startTime: dayjs().month(11).year(2019),
      endTime: dayjs().month(8).year(2020),
      periodLength: "0y 10m",
      title: "Member of Academic Department",
      company: "HIEC - HUST Innovation & Entrepreneurship Club",
      description: [
        "Lead a team to build website for the club",
        "Support other member in finding & translating documents",
      ],
    },
    {
      startTime: dayjs().month(5).year(2019),
      endTime: dayjs().month(7).year(2019),
      periodLength: "0y 3m",
      title: "Mentor of 2 technology bootcamp for teen",
      company: "MindX Technology School",
      description: [
        "Stay, guide and support students to learn and create website from HTML/CSS/JS",
      ],
    },
  ],
};

const LinksSection = ({ links }) => {
  return (
    <div className="section links">
      {links.map((link) => (
        <div
          className={`link ${link.name === "Email" ? "disabled-click" : ""}`}
        >
          <b>{link.name}:</b>{" "}
          <a target={"_blank"} href={link.value}>
            {link.value}
          </a>
        </div>
      ))}
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      {/* <img
        src="https://avatars.githubusercontent.com/u/5785200?v=4"
        alt="img"
        className="avatar"
      /> */}
      <div className="name-and-title">
        <div className="name">NGUYEN PHUONG NAM</div>
        <div className="title"> Product Owner | Product Executive</div>
      </div>
    </div>
  );
};
const GeneralInfoSection = ({ generalInfo }) => {
  return (
    <div className="section general-info-section">
      <div className="section-title">
        <span>01. General Information</span>
      </div>
      <div className="general-info">
        <div className="width-50">
          <b>Year of birth: </b> <span>{generalInfo.yearOfBirth}</span>
        </div>
        <div className="width-50">
          <b>Gender: </b> <span>{generalInfo.gender}</span>
        </div>
        <div>
          <b>Bio: </b> <span>{generalInfo.quickDescription}</span>
        </div>
      </div>
    </div>
  );
};
const ExperienceSection = ({ experiences }) => {
  return (
    <div className="section experience-section">
      <div className="section-title">
        <span>02. Experience</span>
      </div>
      <div className="experience">
        {experiences.map((experience) => {
          const {
            startTime,
            company,
            description,
            endTime,
            periodLength,
            title,
          } = experience;
          return (
            <div className="experience-item">
              <div className="time">
                <div className="period-time">
                  {startTime.format("MMM YYYY")} -{" "}
                  {endTime === "now" ? endTime : endTime.format("MMM YYYY")}
                </div>
                <div className="period-length">({periodLength})</div>
              </div>
              <div className="detail">
                <div className="title">{title}</div>
                <div className="company">{company}</div>
                <div className="description">
                  {description.map((item) => (
                    <div className="description-item">• {item}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const EducationSection = ({ education }) => {
  return (
    <div className="section experience-section">
      <div className="section-title">
        <span>04. Education</span>
      </div>
      <div className="experience">
        {education.map((edu) => {
          const { startTime, description, endTime, periodLength, title } = edu;
          return (
            <div className="experience-item">
              <div className="time">
                <div className="period-time">
                  {startTime.format("MMM YYYY")} -{" "}
                  {endTime === "now" ? endTime : endTime.format("MMM YYYY")}
                </div>
                <div className="period-length">({periodLength})</div>
              </div>
              <div className="detail">
                <div className="title">{title}</div>
                <div className="description">
                  {description.map((item) => (
                    <div className="description-item">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AchivementsSection = ({ achivements }) => {
  return (
    <div className="section experience-section">
      <div className="section-title">
        <span>05. Achivements</span>
      </div>
      <div className="experience">
        {achivements.map((achivement) => {
          const { startTime, description, title } = achivement;
          return (
            <div className="experience-item">
              <div className="time">
                <div className="period-time">{startTime}</div>
              </div>
              <div className="detail">
                <div className="title">{title}</div>
                <div className="description">
                  {description.map((item) => (
                    <div className="description-item">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ActivitiesSection = ({ activities }) => {
  return (
    <div className="section experience-section">
      <div className="section-title">
        <span>06. Other activities</span>
      </div>
      <div className="experience">
        {activities.map((activitie) => {
          const {
            startTime,
            company,
            description,
            endTime,
            periodLength,
            title,
          } = activitie;
          return (
            <div className="experience-item">
              <div className="time">
                <div className="period-time">
                  {startTime.format("MMM YYYY")} -{" "}
                  {endTime === "now" ? endTime : endTime.format("MMM YYYY")}
                </div>
                <div className="period-length">({periodLength})</div>
              </div>
              <div className="detail">
                <div className="title">{title}</div>
                <div className="company">{company}</div>
                <div className="description">
                  {description.map((item) => (
                    <div className="description-item">• {item}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SkillsAndToolsSection = ({ skillsAndTools }) => {
  return (
    <div className="section skills-tools-section">
      <div className="section-title">
        <span>03. Skills and Tools</span>
      </div>
      <div className="skills-tools">
        {skillsAndTools.map((experience) => {
          const { category, items } = experience;
          return (
            <div className="skills-tools-item">
              <div className="category">{category}</div>
              <div className="items">
                {items.map((item) => (
                  <div className="description-item">• {item}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const CV = () => {
  const {
    links,
    generalInfo,
    experiences,
    skillsAndTools,
    education,
    achivements,
    activities,
  } = data;
  return (
    <div className="cv-container">
      <Header />
      <LinksSection links={links} />
      <GeneralInfoSection generalInfo={generalInfo} />
      <ExperienceSection experiences={experiences} />
      <SkillsAndToolsSection skillsAndTools={skillsAndTools} />
      <EducationSection education={education} />
      <AchivementsSection achivements={achivements} />
      <ActivitiesSection activities={activities} />
    </div>
  );
};
