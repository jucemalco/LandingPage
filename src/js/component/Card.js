import React from "react";

const Card = () => {
	return (
		<>
			<div className="card mt-3 " style={{ width: "18rem" }}>
				<img
					src="https://picsum.photos/300/330"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Lorem Ipsum</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" class="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</>
	);
};

export default Card;
