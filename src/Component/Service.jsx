import React from 'react';
import abulance from '../assets/Images/abulance.jpg';
import emergency from '../assets/Images/emergency.jpg';
import qualifiedDoctors from '../assets/Images/qualifiedDoctors.jpg';
const Service = () => {
	return (
		<div>
			<div className="bg-gray-100 py-20">
				<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
					<div className="flex-1">
						<h1 className="text-4xl font-bold mb-4">Clinic With Innovative</h1>
						<p className="text-lg mb-8">
							We provide the most full medical services, so every person could have the opportunity to
							receive qualitative medical help.
						</p>
						<button className="bg-blue-500 text-white px-6 py-3 rounded-full">Learn More</button>
					</div>
					<div className="flex-1 mt-12 md:mt-0 md:ml-12 grid grid-cols-1 gap-8">
						<div className="flex items-center bg-white p-6 rounded-lg shadow-md">
							<img src={qualifiedDoctors} alt="Qualified Doctors" className="w-16 h-16 mr-4" />
							<p className="font-medium">Qualified Doctors</p>
						</div>
						<div className="flex items-center bg-white p-6 rounded-lg shadow-md">
							<img src={emergency} alt="Emergency Care" className="w-16 h-16 mr-4" />
							<p className="font-medium">Emergency Care</p>
						</div>
						<div className="flex items-center bg-white p-6 rounded-lg shadow-md">
							<img src={abulance} alt="24 Hours Service" className="w-16 h-16 mr-4" />
							<p className="font-medium">24 Hours Service</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
