import React from 'react';

const Customers = () => {
	return (
		<div className="flex flex-col items-center py-8">
			{/* Header Section */}
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold text-gray-800">We Have The Best Specialist</h1>
				<p className="text-gray-600 mt-4">
					We have a wide experience in experience design and strategy, with locally-rooted knowledge.
				</p>
			</div>

			{/* Specialists Section */}
			<div className="flex justify-around w-full max-w-4xl mb-16">
				<SpecialistCard name="Dr. Awaatif Al" specialty="Dental Care" />
				<SpecialistCard name="Dr. Filipa Gaspar" specialty="Cardiology" />
				<SpecialistCard name="Dr. Sukhmeet Gorae" specialty="Neurological" />
				<SpecialistCard name="Dr. Siri Jakobsson" specialty="Pediatrics" />
			</div>

			{/* Testimonials Section */}
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold text-gray-800">What Our Customers Say</h1>
			</div>
			<div className="flex justify-around w-full max-w-4xl">
				<Testimonial
					text="I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay."
					name="Jacqueline Asong"
					role="Patient"
					// image="/images/jacqueline.png"
				/>
				<Testimonial
					text="I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay."
					name="Patrícia Ribeiro"
					role="Patient"
					// image="/images/patricia.png"
				/>
			</div>
		</div>
	);
};

const SpecialistCard = ({ name, specialty }) => (
	<div className="bg-white shadow-lg rounded-lg p-4 text-center">
		<div className="h-32 bg-blue-200 rounded-t-lg mb-4" />
		<h2 className="text-lg font-semibold text-gray-800">{name}</h2>
		<p className="text-gray-600">{specialty}</p>
	</div>
);

const Testimonial = ({ text, name, role, image }) => (
	<div className="bg-white shadow-lg rounded-lg p-6 w-1/3">
		<p className="text-gray-600 mb-4">"{text}"</p>
		<div className="flex items-center">
			<img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
			<div>
				<h3 className="text-gray-800 font-semibold">{name}</h3>
				<p className="text-gray-600">{role}</p>
			</div>
		</div>
	</div>
);

export default Customers;
