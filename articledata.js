/* var P1A1JSON = '{ "title":"Gen X Are Cool People!","audio":"audio-embed","description":"Lorem ipsum dolor sit amet"}'
var P1A2JSON = '{ "title":"Gen X People Have Cool Music!", "audio":"audio-embed", "description":"Lorem ipsum dolor sit amet"}';
var P1A3JSON = '{ "title":"Gen X People!", "audio":"audio-embed", "description":"Lorem ipsum dolor sit amet"}';
var P1A4JSON = '{ "title":"Gen Y Are Cool People!", "audio":"audio-embed", "description":"Lorem ipsum dolor sit amet"}';
var P1A5JSON = '{ "title":"Gen Y People Have Cool Music!", "audio":"audio-embed", "description":"Lorem ipsum dolor sit amet"}';
var P1A6JSON = '{ "title":"Gen Y People!", "audio":"audio-embed", "description":"Lorem ipsum dolor sit amet"}'; */


//Topics & Topic Descriptions

var topics = {
	P1:"Politics",
	P2:"Technology",
	P3:"Fashion",
	P4:"Slang",
	P5:"Music / Culture",
}
var topicDescriptions = {
	P1:"The American political system is a drama that can keep anyone guessing -- and no, we're not just talking about House Of Cards. Take a trip down the red, white and blue memory lane, and hear what a difference a decade can make.",
	P2:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	P3:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	P4:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	P5:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}

//Colors

var topicColors = {
	P1:"#E3FF99",
	P2:"#AAFF99",
	P3:"#00E0C4",
	P4:"#B084CC",
	P5:"#7B6DE6",
}

var genXColors = {
	P1:"#cce589",
	P2:"#9CEA8C",
	P3:"#00E0C4",
	P4:"#B084CC",
	P5:"#7B6DE6",
}

var genYColors = {
	P1:"#B4CA79",
	P2:"#8ED37E",
	P3:"#00D3BA",
	P4:"#A27ABC",
	P5:"#7467DB",
}

var genZColors = {
	P1:"#9DB069",
	P2:"#7DBC71",
	P3:"#17C0AC",
	P4:"#946FAB",
	P5:"#6C5FCC",
}

//Article titles

var genXTitles = {
	P1:"Youth Reflect on Obama Victory",
	P2:"Gen X Are Wild!",
	P3:"Gen X Are Uhhhhhhhh!",
	P4:"Gen X Are okay",
	P5:"Gen X!",
}

var genYTitles = {
	P1:"Can Paul Ryan get the youth vote?",
	P2:"Gen Y Are Wild!",
	P3:"Gen Y Are Uhhhhhhhh!",
	P4:"Gen Y Are okay",
	P5:"Gen Y!",
}

var genZTitles = {
	P1:"Donald Trump Takes Office",
	P2:"Gen Z Are Wild!",
	P3:"Gen Z Are Uhhhhhhhh!",
	P4:"Gen Z Are okay",
	P5:"Gen Z!",
}

//Audio files

var genXAudio = {
	P1:"https://www.w3schools.com/html/horse.mp3",
	P2:"https://www.w3schools.com/html/horse.mp3",
	P3:"https://www.w3schools.com/html/horse.mp3",
	P4:"https://www.w3schools.com/html/horse.mp3",
	P5:"https://www.w3schools.com/html/horse.mp3",
}

var genYAudio = {
	P1:"https://www.w3schools.com/html/horse.mp3",
	P2:"https://www.w3schools.com/html/horse.mp3",
	P3:"https://www.w3schools.com/html/horse.mp3",
	P4:"https://www.w3schools.com/html/horse.mp3",
	P5:"https://www.w3schools.com/html/horse.mp3",
}

var genZAudio = {
	P1:"https://www.w3schools.com/html/horse.mp3",
	P2:"https://www.w3schools.com/html/horse.mp3",
	P3:"https://www.w3schools.com/html/horse.mp3",
	P4:"https://www.w3schools.com/html/horse.mp3",
	P5:"https://www.w3schools.com/html/horse.mp3",
}

//Image files

var genXIMG = {
	P1:"img/p2.png",
	P2:"https://www.w3schools.com/html/img_girl.jpg",
	P3:"https://www.w3schools.com/html/img_girl.jpg",
	P4:"https://www.w3schools.com/html/img_girl.jpg",
	P5:"https://www.w3schools.com/html/img_girl.jpg",
}

var genYIMG = {
	P1:"img/p1.png",
	P2:"https://www.w3schools.com/html/img_girl.jpg",
	P3:"https://www.w3schools.com/html/img_girl.jpg",
	P4:"https://www.w3schools.com/html/img_girl.jpg",
	P5:"https://www.w3schools.com/html/img_girl.jpg",
}

var genZIMG = {
	P1:"img/p3.png",
	P2:"https://www.w3schools.com/html/img_girl.jpg",
	P3:"https://www.w3schools.com/html/img_girl.jpg",
	P4:"https://www.w3schools.com/html/img_girl.jpg",
	P5:"https://www.w3schools.com/html/img_girl.jpg",
}

//Dates

var genXDate = {
	P1:"2008",
	P2:"null",
	P3:"null",
	P4:"null",
	P5:"null",
}

var genYDate = {
	P1:"2012",
	P2:"null",
	P3:"null",
	P4:"null",
	P5:"null",
}


var genZDate = {
	P1:"2017",
	P2:"null",
	P3:"null",
	P4:"null",
	P5:"null",
}


//Article descriptions


var genXDesc = {
	P1:"Yes we did. Barack Obama became the first black President of the United States on a campaign of hope.",
	P2:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	P3:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	P4:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	P5:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}

var genYDesc = {
	P1:"From when Paul Ryan was the fresh-faced, guitar-playing, political candidate of 2012 conservatives' dreams.",
	P2:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	P3:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	P4:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	P5:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}

var genZDesc = {
	P1:"In a stunning political upset, Donald J.Trump became President #45 -- with many liberals still asking, 'What just happened?'",
	P2:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	P3:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	P4:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	P5:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}



//Start making buttons!