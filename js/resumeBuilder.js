/*
This is empty on purpose! Your code to build the resume will go here.
 */
//  $("#main").append("Mia");
//  $("#main").append("Charlie Chaplin");
// var awesomeThoughts = " i am Mia and i am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
// console.log(funThoughts);
// $("#main").append(funThoughts);


// var skills= ;
// $("#main").append(skills);

  var bio = {
    "name": "Mia Sall",
    "role": "Front-End Developer",
    "contacts":{
      "email": "lam3h-sa@live.co.uk",
      "mobil": "000-000-00",
      "twitter": "@lamiaSall",
      "location": "saudi arabia",
      "github": "xxiMiaxx"
    } ,
    "welcomeMessage": "looking forward to be working with you",
    "skills": [" programming", " html", " css"," js"],
    "biopic": "images/fry.jpg"
  };



  var work= {
    "jobs": [
      {
    "title": "student",
    "employer": "ksu",
    "dates": 2017,
    "location": "riyadh",
    "description": "all the students do, work and study, This Budget Manager job description is optimized with financial and accounting duties to help you attract qualified candidates. This template is also easy to customize and post to online job boards and careers pages"
    }
    ]
  };


  var education = {
    "schools":[
      {
        "name": "148 highschool",
        "location": "Riyadh",
        "degree": "Highschool",
        "major": ["science"],
        "dates": 2015,
        "url": "@school148"
      },
      {
        "name": "King Saud University",
        "location": "Riyadh",
        "degree": "still studying",
        "major": ["Software Engineering"],
        "dates": 2019,
        "url": "www.ksu.edu.sa"
      }
    ],
    "onlineCourses": [
      {
        "title": "Front-End Nano degree",
        "school": "udacity",
        "dates": 2017,
        "url": "www.udacity.com"
      }
    ]

  };

  var projects = {
    "projects": [
      {
        "title": "animal card",
        "dates": 2017,
        "description": "animal trading card in html, css",
        "images": ["images/fry.jpg", "images/fry.jpg"]
      }
    ]
  };

var formattedPic= HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedPic);
  var formattedName= HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedName);
  $("#header").append(formattedRole);

  if(bio.skills.length>0){
    $("#header").append(HTMLskillsStart);
    var formattedSkills= HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkills);
    formattedSkills= HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkills);
    formattedSkills= HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkills);
    formattedSkills= HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkills);
  }



  function displayWork(){

    for(job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle= formattedEmployer+formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
  //=========================
  var formattedDates= HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);
  var formattedJobDes= HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedJobDes);

    }

  }

  displayWork();

//   $(document).click(function(loc) {
//   var x= loc.pageX;
//   var y= loc.pageY;
//   log.Clicks(x,y);
// });

$("#main").append(internationalizeButton);

  function inName(){

    var names= bio.name.split(" ");
    var first= names[0];
    first= first.slice(0,1).toUpperCase()+first.slice(1).toLowerCase();
    var last= names[1].toUpperCase();
    var intName= first+" "+last;
    return intName;

  }

  projects.display = function(){
    for( index in projects.projects){
      $("#projects").append(HTMLprojectStart);

      var formattedPtitle = HTMLprojectTitle.replace("%data%",projects.projects[index].title);
      $(".project-entry:last").append(formattedPtitle);
      var projectDate= HTMLprojectDates.replace("%data%", projects.projects[index].dates);
      $(".project-entry:last").append(projectDate);
      var projectDes= HTMLprojectDescription.replace("%data%", projects.projects[index].description);
      $(".project-entry:last").append(projectDes);

      if(projects.projects[index].images.length>0){
        for( image in projects.projects[index].images){
          var projectImage= HTMLprojectImage.replace("%data%", projects.projects[index].images[image]);
          $(".project-entry:last").append(projectImage);
        }
      }
    }
  }

  projects.display();

$("#mapDiv").append(googleMap);
