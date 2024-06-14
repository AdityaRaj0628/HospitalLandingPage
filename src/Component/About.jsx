import React from 'react';

const About = () => {
	return (
		<div className="flex flex-col items-center py-8">
			<div className="bg-blue-500 text-white w-full max-w-4xl rounded-lg p-8 text-center mb-16">
				<h2 className="text-3xl font-bold mb-4">Subscribe to Newsletter</h2>
				<p className="mb-6">We have a wide experience in experience design and strategy,</p>
				<div className="flex justify-center">
					<input
						type="email"
						placeholder="Enter your email address"
						className="w-full max-w-md p-3 rounded-l-lg border-none"
					/>
					<button className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700">Send Now</button>
				</div>
			</div>

			<footer className="w-full py-6 bg-white flex justify-between items-center">
				<div className="ml-8 text-blue-600 font-bold">
					Medi<span className="text-orange-500">Care+</span>
				</div>
				<nav className="mr-8">
					<ul className="flex space-x-6 text-gray-600">
						<li>
							<a href="#home" className="hover:text-gray-800">
								Home
							</a>
						</li>
						<li>
							<a href="#about" className="hover:text-gray-800">
								About
							</a>
						</li>
						<li>
							<a href="#services" className="hover:text-gray-800">
								Services
							</a>
						</li>
						<li>
							<a href="#news" className="hover:text-gray-800">
								News
							</a>
						</li>
					</ul>
				</nav>
			</footer>
		</div>
	);
};

export default About;
