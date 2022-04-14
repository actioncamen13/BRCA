/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./css/stylesTeam.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Frame1 from "./images/Frame1.png";
import Frame2 from "./images/Frame2.png";
import Frame3 from "./images/Frame3.png";
import Navbar from "./Navbar-Footer for Team/Navbar/Navbar";
import Footer from "./Navbar-Footer for Team/Footer/Footer";

function Teams() {
	return (
		<div>
			<Navbar />
			<div class='container animate__animated animate__fadeIn'>
				<div class='row'>
					<div class='col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center'>
						<Link to='/teamsecy' class='box b1'>
							<img src={Frame1} className='text-center' />
							<p>
								Cultural <br /> Secretaries
							</p>
						</Link>
					</div>
					<div class='col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center'>
						<Link to='/teamsecy' class='box b2'>
							<img src={Frame2} alt='image' class='text-center' />
							<p>
								Club <br /> Secretaries
							</p>
						</Link>
					</div>
					<div class='col-lg-4 col-md-6 col-sm-6 col-xs-12 text-center'>
						<Link to='/teamsecy' class='box b3'>
							<img src={Frame3} alt='image' class='text-center' />
							<p>
								Creative & <br /> Technical Team
							</p>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Teams;
