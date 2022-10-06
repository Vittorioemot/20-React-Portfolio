import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/_Vittorio Natoli.png')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				I am in the process of completing my full stack web development course at UWA.<br></br>
					I have many new skills in both front end and back end developing.<br></br>			         
				 I have learnt numerous technologies,including JavaScript, Node, SQL, MongoDB, and React.<br></br>
                
                </div>
		</section>
	);
}

export default About;
