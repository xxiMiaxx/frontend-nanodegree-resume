var bio = {
    "name": "Mia Sall",
    "role": "Front-End Developer",
    "contacts": {
        "email": "lam3h-sa@live.co.uk",
        "mobile": "000-000-00",
        "twitter": "@lamiaSall",
        "location": "Riyadh, saudi arabia",
        "github": "xxiMiaxx"
    },
    "welcomeMessage": "looking forward to be working with you",
    "skills": [" programming", " html", " css", " js"],
    "biopic": "images/fry.jpg"
};



var work = {
    "jobs": [{
        "title": "student",
        "employer": "ksu",
        "dates": "2017",
        "location": "riyadh",
        "description": "all the students do, work and study, This Budget Manager job description is optimized with financial and accounting duties to help you attract qualified candidates. This template is also easy to customize and post to online job boards and careers pages"
    }]
};


var education = {
    "schools": [{
            "name": "148 highschool",
            "location": "Riyadh",
            "degree": "Highschool",
            "majors": ["science"],
            "dates": "2015",
            "url": "@school148"
        },
        {
            "name": "King Saud University",
            "location": "Riyadh",
            "degree": "still studying",
            "majors": ["Software Engineering"],
            "dates": "2019",
            "url": "www.ksu.edu.sa"
        }
    ],
    "onlineCourses": [{
        "title": "Front-End Nano degree",
        "school": "udacity",
        "dates": "2017",
        "url": "www.udacity.com"
    }]

};

var projects = {
    "projects": [{
        "title": "animal card",
        "dates": "2017",
        "description": "animal trading card in html, css",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }]
};

bio.display = function () {
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName);
    $("#header").append(formattedRole);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }

    var contMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(contMobile);
    $("#footerContacts").append(contMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formttedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formttedLocation);
    $("#footerContacts").append(formttedLocation);
};

bio.display();

work.display = function () {
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);
    }
    for (var job = 0; job < work.jobs.length; job++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedJobDes = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedJobDes);

    }

};

work.display();

function inName() {

    var names = bio.name.split(" ");
    var first = names[0];
    first = first.slice(0, 1).toUpperCase() + first.slice(1).toLowerCase();
    var last = names[1].toUpperCase();
    var intName = first + " " + last;
    return intName;

}

projects.display = function () {
    if (projects.projects.length > 0) {
        $("#projects").append(HTMLprojectStart);
    }
    for (var index = 0; index < projects.projects.length; index++) {
        var formattedPtitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
        $(".project-entry:last").append(formattedPtitle);
        var projectDate = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
        $(".project-entry:last").append(projectDate);
        var projectDes = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
        $(".project-entry:last").append(projectDes);

        if (projects.projects[index].images.length > 0) {
            for (var image = 0; image < projects.projects[index].images.length; image++) {
                var projectImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[image]);
                $(".project-entry:last").append(projectImage);
            }
        }
    }
};

projects.display();

education.display = function () {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        $("#education").append(HTMLschoolStart);
    }
    for (var school = 0; school < education.schools.length; school++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $("#education").append(formattedSchoolName);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $("#education").append(formattedDegree);
        var formatedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $("#education").append(formatedSchDates);
        var formattedSchLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        if (education.schools[school].majors.length > 0) {
            for (var major = 0; major < education.schools[school].majors.length; major++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $("#education").append(formattedMajor);
            }

        }

    }

    for (var course = 0; course < education.onlineCourses.length; course++) {
        $("#education").append(HTMLonlineClasses);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        $("#education").append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $("#education").append(formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $("#education").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $("#education").append(formattedOnlineURL);
    }
};
education.display();

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);
