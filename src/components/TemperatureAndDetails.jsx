import React from "react";
import {
	UilArrowUp,
	UilArrowDown,
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
	return (
		<div>
			<div className="flex items-center justify-center py-6 text-xl text-cyan-300">
				<p>Sunny</p>
			</div>

			<div className="flex flex-row items-center justify-between text-white py-3">
				<img
					src="http://openweathermap.org/img/wn/01d@2x.png"
					alt=""
					className="w-20"
				/>
				<p className="text-4xl">20°C</p>
				<div className="flex flex-col space-y-2">
					<div className="flex font-light text-sm justify-center items-center">
						<UilTemperature size={18} className="mr-1" />
						Real feel: <span className="font-medium ml-1">20°</span>
					</div>
					<div className="flex font-light text-sm justify-center items-center">
						<UilTear size={18} className="mr-1" />
						Humidity: <span className="font-medium ml-1">55%</span>
					</div>
					<div className="flex font-light text-sm justify-center items-center">
						<UilWind size={18} className="mr-1" />
						Wind speed: <span className="font-medium ml-1">15 km/h</span>
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center jusitfy-center space-x-2 py-3 text-white text-sm">
				<UilSun />
				<p className="font-light">
					Rise: <span className="font-medium ml-1">8:15 AM</span>
				</p>
				<UilSunset />
				<p className="font-light">
					Set: <span className="font-medium ml-1">7:15 PM</span>
				</p>
				<UilSun />
				<p className="font-light">
					High: <span className="font-medium ml-1">30°</span>
				</p>
				<UilSun />
				<p className="font-light">
					Low: <span className="font-medium ml-1">23°</span>
				</p>
			</div>
		</div>
	);
}

export default TemperatureAndDetails;
