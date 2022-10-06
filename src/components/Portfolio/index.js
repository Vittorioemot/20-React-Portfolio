import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
	{
		name:'Password Generator',
		description:'This is a password generator App where you decide the type of password you need and the app will automatilly create it.',
		Image: '../src/assets/images/generated.png',
		technologies: ['',
		'',
	],
		github:'https://github.com/Vittorioemot/password-generator',
			
	},
	{
			name:'',
		description:'',
		Image: [' '
	],
		github:'',
		deployed: '',	
	},
	{
			name:'',
			description:'',
			Image: '',
			technologies: ['',
			'',
	],
			github:'',
			deployed: '',	
	},
	{
				name:'',
			description:'',
			Image: [' '
	],
			github:'',
			deployed: '',	
	},
		
	{
				name:'',
				description:'',
				Image: '',
				technologies: ['',
				'',
		],
				github:'',
				deployed: '',	
		},
	{
					name:'',
				description:'',
				Image: [' '
		],
				github:'',
				deployed: '',	
			},
];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
