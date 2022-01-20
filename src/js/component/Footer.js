import React from "react";

const Footer = () => {
	return (
		<ul
			className="nav justify-content-center mt-5"
			style={{ backgroundColor: "gray" }}>
			<li className="nav-item">
				<a
					className="nav-link disabled"
					href="#"
					tabIndex="-1"
					aria-disabled="true">
					<b>
						<strong>Desarrollador:</strong> Julio Maldonado
					</b>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="jucemalco@gmail.com">
					<i className="fas fa-envelope" /> Email
				</a>
			</li>

			<li className="nav-item">
				<a
					className="nav-link"
					href="www.google.com"
					tabIndex="-1"
					aria-disabled="false">
					<i className="fab fa-facebook" /> Facebook
				</a>
			</li>
		</ul>
	);
};

export default Footer;
