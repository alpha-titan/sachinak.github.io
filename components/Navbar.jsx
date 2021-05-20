import React from "react";

const Navbar = () => {
	return (
		<div className="h-20 sticky top-0 bg-white flex justify-between items-center shadow-xl z-20 p-4">
			<div>
				<span className="block font-mono font-bold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold">
					Sachin AK
				</span>
			</div>
			{/* <div className="md:hidden">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div> */}
		</div>
	);
};

export default Navbar;
