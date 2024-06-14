import React from 'react';
import { FaTooth, FaLungs, FaBrain, FaClipboard } from 'react-icons/fa';

const Hero = () => {
	return (
		<div className="bg-blue-100 min-h-screen flex flex-col items-center py-10">
			<h1 className="text-3xl font-semibold mb-4">Our Services</h1>
			<p className="text-center max-w-md mb-10">
				We provide the most full medical services, so every person could heave the oppurtunity to receive
				qualitative medical help.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
				<div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
					<FaTooth className="text-6xl text-blue-500 mb-4" />
					<h2 className="font-semibold m-4 text-blue-200">Dental Care</h2>
				</div>
				<div className="flex flex-col items-center bg-blue-200 p-6 rounded-lg shadow-md">
					<FaLungs className="text-6xl text-blue-500 mb-4" />
					<h2 className="font-semibold ">Pulmonary</h2>
					<button className="mt-4 text-blue-700 underline">Learn More</button>
				</div>
				<div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
					<FaBrain className="text-6xl text-blue-500 mb-4" />
					<h2 className="font-semibold m-4 text-blue-200">Neurological</h2>
				</div>
				<div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
					<FaClipboard className="text-6xl text-blue-500 mb-4" />
					<h2 className="font-semibold m-4 text-blue-200">Pediatrics</h2>
				</div>
			</div>
		</div>
	);
};

export default Hero;
