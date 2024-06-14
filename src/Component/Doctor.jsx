import React from 'react';

function Doctor() {
	return (
		<div>
			<div className=" flex items-center space-between">
				<div>
					<h2 className=" text-3xl font-bold mb-4"> Welcome to Medicare+ Clinic</h2>

					<h1 className="text-3xl font-bold m-4 text-cyan-700">Best Speclialists</h1>
					<h4 className=" m-4">
						{' '}
						We are on the leading edge of cancer care. Providing the full <br /> continuum of cancer
						treatments and supportive care services in a <br />single convenient location.
					</h4>

					<button className="bg-blue-200 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded">
						make an Appointment
					</button>
					<button className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-xl m-4">
						Departement
					</button>
				</div>
				<div className=" h-[200px] w-[140px]   bg-zinc-300 rounded-xl flex p-10 justify-end items-end"> </div>
			</div>
		</div>
	);
}

export default Doctor;
