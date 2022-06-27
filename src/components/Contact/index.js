import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	const form = useRef();

	useEffect(() => {
		return setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000);
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("gmail", "template_YeJhZkgb", form.current, "your-token").then(
			() => {
				alert("Message successfully sent!");
				window.location.reload(false);
			},
			() => {
				alert("Failed to send the message, please try again");
			}
		);
	};

	return (
		<>
			<div className="container contact-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters letterClass={letterClass} strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]} idx={15} />
					</h1>
					<p>
						I am passionate in Software Developer - and interested in ambitious or large projects. However, if you have other request or
						question, don't hesitate to contact me using below form either.
					</p>
					<div className="contact-form">
						<form ref={form} onSubmit={sendEmail}>
							<ul>
								<li className="half">
									<input placeholder="Name" type="text" name="name" required />
								</li>
								<li className="half">
									<input placeholder="Email" type="email" name="email" required />
								</li>
								<li>
									<input placeholder="Subject" type="text" name="subject" required />
								</li>
								<li>
									<textarea placeholder="Message" name="message" required></textarea>
								</li>
								<li>
									<input type="submit" className="flat-button" value="SEND" />
								</li>
							</ul>
						</form>
					</div>
				</div>
				<div className="info-map">
					Sadek Khan Road, Dhaka
					<br />
					<span>khan.musleh0001@gmail.com</span>
				</div>
				<div className="map-wrap">
					<MapContainer center={[23.754470302429365, 90.36065828166758]} zoom={15}>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
						<Marker position={[23.754470302429365, 90.36065828166758]}>
							<Popup>Musleh lives here, come over for a cup of coffee :)</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
			<Loader type="pacman" />
		</>
	);
};

export default Contact;
