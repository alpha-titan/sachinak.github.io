import React from 'react'

const AboutMe = () => {
    return (
      <div className="w-full px-8 ">
        <div
          className="grid grid-cols-1 gap-2 auto-rows-auto md:grid-cols-8 md:grid-rows-3 md:auto-rows-auto  w-full mx-auto shadow-2xl mb-10 rounded-xl overflow-hidden place-items-center"
          style={{ minHeight: "400px" }}
        >
          <div className="flex flex-col justify-center items-start col-span-4 row-span-3 ">
            <h1 className="p-3 text-center font-medium text-3xl md:text-7xl font-mono leading-loose">
              More
            </h1>
            <p className="p-3 text-center font-medium text-3xl md:text-7xl font-mono leading-loose">
              about me <span className="animate-ping">...</span>
            </p>
          </div>
          <div className=" col-span-4 row-span-2 border-b-2 border-black bg-yellow-300">
            <p className="font-mono text-xl">
              Let me give you a short intro about myself. I’m a full stack web
              developer, i learnt web development from
              <span className="font-bold underline"> Youtube</span> and
              <span className="font-bold underline"> Free Code Camp </span>I
              learn and adapt to new promising technologies. I work on contract
              basis or full time. I am eager to work on big projects
            </p>
          </div>
          <div className="font-mono col-span-4 bg-yellow-300">
            In my full stack journey i have worked on many project and also with
            companies I have recently worked with{" "}
            <span className="font-bold text-xl text-purple-600">
              Zotto LTD{" "}
            </span>
            and{" "}
            <span className="font-bold text-xl text-blue-600">
              Atmang Pvt LTD
            </span>
          </div>
        </div>
      </div>
    );
}

export default AboutMe
