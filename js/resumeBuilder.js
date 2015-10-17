//Four objects for the resume, in object-literal notation
//Each object is clean acc to jsonlint, but you have to leave out the 
// variable names and the '=' sign to pass.

var bio = {
    "name" : "Dennis Mullen",
    "role" : "Aspiring Web Developer",
    "contacts" : {
        "mobile" : "(865) 555-5432",
				"email" : "dkmullen@gmail.com",
        "github" : "dkmullen",
        "twitter" : "@dkmullen",
        "location" : "East Tennessee"
    },
		"welcomeMessage" : "Thank you for looking at my resume.",
    "skills" : [
			"HTML/CSS", "JavaScript & JQuery", "MS Office", "Teaching", "Adminisration"
		],
		"bioPic" : "images/gg.jpg"
}

var work = {
    "jobs": [
    {
        "employer" : "Morrison Hill Christian Church",
        "title" : "Senior Minister",
        "location" : "Kingston, TN USA",
        "dates" : "1988 - Present",
        "description" : "Direct and administer pastoral care for 350 people; Deliver well-organized, informative and entertaining presentations using multimedia; Manage four full-time and 6-10 part-time employees; Cast vision and lead staff in setting and meeting objectives that lead the church toward its mission.",
				"url" : "http://morrisonhill.com"
    },
    {
        "employer" : "Southeast Christian Church",
        "title" : "Summer Intern",
        "location" : "Denver, CO USA",
        "dates" : "1987",
        "description" : "Serve in a pastoral care role under the direction of the Senior Minister",
				"url" : "http://www.southeastcc.org/"
    }
    ]
}

var projects = {
    "projects" : [
    {
        "title" : "Portfolio of Work",
        "dates" : "2015",
        "description" : "Project completed for Udacity Front-end Developer Nanodegree",
        "images" : [
            "images/portfolio.jpg"
        ],
				"url" : "https://github.com/dkmullen/responsive-portfolio"
    },
    {
        "title" : "MHCC Website",
        "dates" : "2014-15",
        "description" : "A responsive site built with a template",
        "images" : [
            "images/mh.jpg",
						"images/mh2.jpg"
        ],
				"url" : "http://morrisonhill.com"
    }
    ]
}

var education = {
    "schools": [
    {
        "name": "Johnson University",
        "location": "Knoxville, TN  USA",
        "degree" : "Master of Arts",
        "majors" : ["New Testament Studies"],
        "dates" : "1990-93",
        "url" : "http://www.johnsonu.edu/"
    },
    {
        "name": "Johnson University",
        "location": "Knoxville, TN  USA",
        "degree" : "Bachelor of Arts",
        "majors" : ["Biblical Studies"],
        "dates" : "1983-87",
        "url" : "http://www.johnsonu.edu/"
    }
    ],
    "onlineCourse" : [
    {
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "Udacity",
        "dates" : "September 2015 - Present",
        "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
		{
        "title" : "Intro to Computer Science",
        "school" : "Udacity",
        "dates" : "October-December 2014",
        "url" : "https://www.udacity.com/course/intro-to-computer-science--cs101"
    }

    ]
}

bio.display = function() { //makes a function that is part of the bio object
	var formattedName = HTMLheaderName.replace("%data%", bio.name); //adds my name
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role); //and role to the vars in helper.js...
	var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);	
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").prepend(formattedName, formattedRole); //...then appends them to the header
	$("#header").append(bioPic);
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts").append(formattedMobile); //adds contact info to top element...
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	
	$("#footerContacts").append(formattedMobile); //and to the bottom
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);
	
	if (bio.skills.length > 0) {
				//if bio.skills (above) isn't empty, take HTHMskillsStart from helper.js
				//and append it to the header id in the HTML.
		$("#header").append(HTMLskillsStart);
		
		for (skill in bio.skills) {				
			//declares a var formattedSkills which replaces the data string in
			//HTMLskills (in helper.js) with the item at bio.skills index 0(above)
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			//next line adds the new formattedSkill variable to the skills id in the 
			//helper.js in HTMLskillsStart.
			$("#skills").append(formattedSkill);
		}
	}
}
bio.display(); //calls the function

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart); // workExp in HTML, HTMLworkStart in helpter.js
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedEmployerLink = formattedEmployer.replace("#", work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		
		$(".work-entry:last").append(formattedEmployerLink + formattedTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedTitleURL = formattedTitle.replace("#", projects.projects[project].url);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		
		$(".project-entry:last").append(formattedTitleURL);
		$(".project-entry:last").append(formattedDates);				
		$(".project-entry:last").append(formattedDescription);
		
		//the following adds images to each project, but only if there are images; allows for varying numbers of images too.
		if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolLink = formattedSchoolName.replace("#", education.schools[school].url); 
		//adds the url to the previous
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		
				
		$(".education-entry:last").append(formattedSchoolLink + formattedSchoolDegree); //need to be on the same line
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	
	}
	$("#education").append(HTMLonlineClasses); //begin online section by adding the Online Classes title
	for (course in education.onlineCourse) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
		var formattedOnlineLink = formattedOnlineTitle.replace("#", education.onlineCourse[course].url);
		//adds the url to the previous
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);
		var formattedOnlineURLLink = formattedOnlineURL.replace("#", education.onlineCourse[course].url);
		//adds the url to the previous
		
		$(".education-entry:last").append(formattedOnlineLink + formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURLLink);
	}
}
education.display();

$(document).click(function(loc) { //adds the ability to record click coordinates
  var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);
});

function inName(name) {                    // which modifies the capitalization of the last name
	name = bio.name.trim().split(" "); //trims off leading & following spaces, splits into an array on the space
	console.log(name); //not really necessary but shows progress
	name[1] = name[1].toUpperCase(); //transforms my last name to uppercase
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	//slices off the first letter and caps it, slices off the rest and lc's it
	
	return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton); //adds the internationalize button...

$("#mapDiv").append(googleMap); //adds a Google map

