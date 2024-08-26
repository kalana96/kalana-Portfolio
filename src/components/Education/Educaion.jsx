import React from "react";
import imgUOM from "../../assets/uom.png";
import imgSLIATE from "../../assets/SLIATE.jpg";

const experiences = [
  {
    aword: "Bacholoe of Information Technology",
    university: "University of Moratuwa, Sri Lanka",
    gpa: "GPA: Pending",
    details: [
      "I am pursuing a Bachelor's degree (Top-Up) in Information Technology at the University of Moratuwa, Sri Lanka. I have selected subjects such as AI, Data Mining, Information Security, and Web Service.",
    ],
    date: "Feb 2023 - Present",
    img: imgUOM,
    universityUrl: "https://uom.lk/",
  },
  {
    aword: "Higher National Diploma in Information technology",
    university:
      "Sri Lanka Institute of Advanced Technilogical Education - (SLIATE)",
    gpa: "GPA: 3.46",
    details: [
      "I successfully completed a Higher National Diploma in Information Technology at the Sri Lanka Institute of Advanced Technical Education (SLIATE), where I studied Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
    ],
    date: "Apr 2021 - Jan 2018",
    img: imgSLIATE,
    universityUrl: "https://sliate.ac.lk/",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-white dark:bg-slate-800 dark:text-white pt-20 border-t-2 border-gray-300/50 px-3"
    >
      <div className="p-5 container flex flex-col items-center ">
        <h1 className="inline-block text-5xl text-center font-semibold mb-5 border-b-2 border-primary pb-1">
          Education
        </h1>
        <p className="text-slate-500 text-lg text-center md:w-[50%] mx-auto dark:text-white/70">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
        <br />
      </div>
      <div className="container flex flex-col md:w-[50%] mx-auto items-cente ">
        {experiences.map((exp) => {
          return (
            <div className="mb-10" key={`experience${exp.university}`}>
              <div className="mb-2 flex flex-row items-center border-b-[1px] border-b-gray-200 pb-2">
                <div className="mr-4 flex h-[32px] w-[32px] items-center justify-center">
                  <img
                    className="max-h-50 max-w-10 transform cursor-pointer rounded-md transition ease-in hover:scale"
                    src={
                      exp.img ||
                      "https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png"
                    }
                    alt=""
                    onClick={() =>
                      window.open(
                        exp.universityUrl || window.location,
                        "_blank"
                      )
                    }
                  />
                </div>

                <div className="flex-1 cursor-pointer">
                  <div className="sm:text-xl text-xl font-bold text-black/80 dark:text-white">
                    {exp.university}
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="text-md md:text-md font-semibold text-gray-600 dark:text-white">
                      {exp.aword}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between md:flex-row">
                    <div className="text-md md:text-md font-semibold text-gray-600 dark:text-white/70">
                      {exp.gpa}
                    </div>
                    <div className="font-semibold text-sm dark:text-white/70">
                      {exp.date}
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pl-4 tracking-wide text-sm text-gray-500">
                <ul className="dark:text-white/70">
                  {exp.details.map((detail, index) => (
                    <li key={`exp-details${index + exp.university}`}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
