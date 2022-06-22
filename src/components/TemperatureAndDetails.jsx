import React from "react";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";
import {
	UilArrowUp,
	UilArrowDown,
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails({
	weather: {
		details,
		icon,
		temp,
		temp_min,
		temp_max,
		sunrise,
		sunset,
		speed,
		humidity,
		feels_like,
		timezone,
	},
}) {
	return (
		<div>
			<div className="flex items-center justify-center py-6 text-xl text-cyan-300">
				<p>{details}</p>
			</div>

			<div className="flex flex-row items-center justify-between text-white py-3">
				<img src={iconUrlFromCode(icon)} alt="" className="w-20" />
				<p className="text-4xl">{`${temp.toFixed()}°`}</p>
				<div className="flex flex-col space-y-2">
					<div className="flex font-light text-sm justify-center items-center">
						<UilTemperature size={18} className="mr-1" />
						Real feel:{" "}
						<span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
					</div>
					<div className="flex font-light text-sm justify-center items-center">
						<UilTear size={18} className="mr-1" />
						Humidity:{" "}
						<span className="font-medium ml-1">{`${humidity.toFixed()}°`}</span>
					</div>
					<div className="flex font-light text-sm justify-center items-center">
						<UilWind size={18} className="mr-1" />
						Wind speed:{" "}
						<span className="font-medium ml-1">{`${speed.toFixed()}°km/h`}</span>
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center jusitfy-center space-x-2 py-3 text-white text-sm">
				<UilSun />
				<p className="font-light">
					Rise:{" "}
					<span className="font-medium ml-1">
						{formatToLocalTime(sunrise, timezone, "hh:mm a")}
					</span>
				</p>
				<UilSunset />
				<p className="font-light">
					Set:{" "}
					<span className="font-medium ml-1">
						{formatToLocalTime(sunset, timezone, "hh:mm a")}
					</span>
				</p>
				<UilSun />
				<p className="font-light">
					High:{" "}
					<span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
				</p>
				<UilSun />
				<p className="font-light">
					Low:{" "}
					<span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
				</p>
			</div>
		</div>
	);
}

export default TemperatureAndDetails;
