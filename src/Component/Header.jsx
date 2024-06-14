import React from 'react';

const Header = () => {
	return (
		<nav className=" bg-blue-400shadow-lg">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<div className="flex-shrink-0">
						<a href="/" className="text-2xl font-bold text-blue-500">
							<span className="text-blue-500">Medi</span>
							<span className="text-orange-400">Care+</span>
						</a>
					</div>
					<div className="hidden md:flex space-x-8">
						<a href="#" className="text-white-500 hover:text-blue-700">
							Home
						</a>
						<a href="#" className="hover:text-blue-500">
							About
						</a>
						<a href="#" className="hover:text-blue-500">
							Services
						</a>
						<a href="#" className="hover:text-blue-500">
							News
						</a>
						<a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
