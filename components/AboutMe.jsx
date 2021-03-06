import React from "react";

const AboutMe = () => {
	return (
		<div className="w-full px-8 ">
			<div
				className="grid grid-cols-1 gap-2 auto-rows-auto md:grid-cols-8 md:grid-rows-3 md:auto-rows-auto  w-full mx-auto shadow-2xl mb-10 rounded-xl overflow-hidden place-items-center"
				style={{ minHeight: "400px" }}>
				<div className="flex flex-col justify-center items-start col-span-4 row-span-3 ">
					<h1 className="p-3 text-center font-medium text-3xl md:text-7xl font-mono leading-loose">
						More
					</h1>
					<p className="p-3 text-center font-medium text-3xl md:text-7xl font-mono leading-loose">
						about me{" "}
						<div className="inline text-transparent transform transition-transform duration-200 hover:scale-110 bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-pulse ">
							...
						</div>
					</p>
				</div>
				<div className=" col-span-4 row-span-2 border-b-2 border-black bg-yellow-300 ">
					<p className="font-mono text-xl ">
            I am fullstack developer with expertise in many technologies, I love to write
            code that scales, I am hardcore Node Js lover, I have helped in designing companies
            architecture. I am a self taught developer, I learned from
						<span className="font-bold underline">
							{" "}
							Youtube
						</span>{" "}
						and
						<span className="font-bold underline">
							{" "}
							Free Code Camp{" "}
						</span>
            and many other resources. I explore new technologies and adapt quickly to new
            promising technologies.
					</p>
				</div>
				<div className="font-mono col-span-4 text-xl bg-yellow-300">
					In my full stack journey I have worked on many project and
					companies I have recently worked with{" "}
					<span className="font-bold text-xl text-purple-600">
						Zotto LTD,{" "} 
					</span>
					
					<span className="font-bold text-xl text-green-600">
						Atmang Pvt LTD,{" "}
          </span>
          
					<span className="font-bold text-xl text-blue-600">
						Soflets Group
					</span>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
