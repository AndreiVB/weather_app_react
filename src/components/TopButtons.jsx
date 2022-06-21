import React from "react";

function TopButtons() {
	const cities = [
		{
			id: 1,
			title: "Paris",
		},
		{
			id: 2,
			title: "London",
		},
		{
			id: 3,
			title: "New York",
		},
		{
			id: 4,
			title: "Toronto",
		},
		{
			id: 5,
			title: "Berlin",
		},
	];

	return (
		<div className="flex items-center justify-between my-6">
			{cities.map((city) => (
				<button key={city.id} className="text-white text-lg font-medium">
					{city.title}
				</button>
			))}
		</div>
	);
}

export default TopButtons;
