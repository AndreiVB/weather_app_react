import React from "react";

function TimeAndLocation() {
	return (
		<div>
			<div className="flex items-center justify-center my-6">
				<p className="text-white text-xl font-extralight">
					Today, 15 June 2022 | Local time : 15:00 PM
				</p>
			</div>

			<div className="flex items-center justify-center my-3">
				<p className="text-white text-3xl font-medium">London, UK</p>
			</div>
		</div>
	);
}

export default TimeAndLocation;
