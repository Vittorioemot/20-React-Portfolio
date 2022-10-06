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
				<p> 
                I am in the process of completing my full stack wep development course at UWA.
                I have many new skills in both front end and back end developing. 
                I have learnt numerous technologies,
                including JavaScript, Node, SQL, MongoDB, and React.
                </p>
                </div>
		</section>
	);
}

export default About;
