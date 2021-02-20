import React, { useState, useEffect } from "react";

//create your first component
export const TrafficLight = () => {
	const [color, setColor] = useState("");
	useEffect(() => {
		const interval = setInterval(() => {
			color === "red"
				? setColor("green")
				: color === "yellow"
				? setColor("red")
				: color === "green"
				? setColor("yellow")
				: null;
		}, 1000);
		return () => clearInterval(interval);
	}, [color]);
	return (
		<div className="container d-flex justify-content-center pt-5">
			<div className="trafficLight">
				<div
					className={color === "red" ? "redLight" : "greyLight"}
					onClick={() => setColor("red")}
				/>
				<div
					className={color === "yellow" ? "yellowLight" : "greyLight"}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={color === "green" ? "greenLight" : "greyLight"}
					onClick={() => setColor("green")}
				/>
			</div>
		</div>
	);
};
