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
	P5:"Music",
}
var topicDescriptions = {
	P1:"Take a trip down the red, white and blue memory lane. What a difference a decade can make in politics!",
	P2:"MySpace vs. Snapchat, livejournal vs. group text. Listen to find your spot along teen tech culture divides.",
	P3:"Looking back on the last few generations of teen fashion trends... some things stood the test of time better than others.",
	P4:"Teens of every generation know: it's not just what you say, it's how you say it.",
	P5:"From radio to MTV to YouTube, every generation finds a way to get its groove on.",
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
	P2:"#7975e5", //technology
	P3:"#69ecd3",
	P4:"#b691d7",
	P5:"#9CEA8C",
}

var genYColors = {
	P1:"#B4CA79",
	P2:"#7467DB",
	P3:"#00D3BA",
	P4:"#A27ABC",
	P5:"#8ED37E",
}

var genZColors = {
	P1:"#9DB069",
	P2:"#6C5FCC",
	P3:"#17C0AC",
	P4:"#946FAB",
	P5:"#7DBC71",
}

//Article titles

var genXTitles = {
	P1:"Punks for Bush",
	P2:"A Video Game Addict Reviews The Sega Dreamcast",
	P3:"Lose The Levis",
	P4:"Slang Predictions For The Future",
	P5:"Wanna be an MTV VJ?",
}

var genYTitles = {
	P1:"Hope Is The New Rebellion",
	P2:"Public is the new private",
	P3:"One Teen's Fashion Plea: Stop Sagging",
	P4:"The N-word: Slang Or Disrespect?",
	P5:"Song of the Summer: Crazy",
}

var genZTitles = {
	P1:"Donald Trump Takes Office",
	P2:"Snapchat Sexting?",
	P3:"Teens say looks can be liberating despite fashion police",
	P4:"What's The Meaning Of The Gun Emoji?",
	P5:"Punks Are The New Mall Rats",
}

//Audio files

var genXAudio = {
	P1:"audio/xAudio/slang.mp3", //RENAME ASAP!!
	P2:"audio/xAudio/tech.mp3",  //RENAME ASAP!!
	P3:"audio/xAudio/fashion.mp3",
	P4:"audio/xAudio/politics.mp3",
	P5:"audio/xAudio/music.mp3", //RENAME ASAP!!
}

var genYAudio = {
	P1:"audio/yAudio/politics.mp3",
	P2:"audio/yAudio/music.mp3",
	P3:"audio/yAudio/fashion.mp3",
	P4:"audio/yAudio/slang.mp3",
	P5:"audio/yAudio/tech.mp3",
}

var genZAudio = {
	P1:"audio/zAudio/politics.mp3",
	P2:"audio/zAudio/music.mp3",
	P3:"audio/zAudio/fashion.mp3",
	P4:"audio/zAudio/slang.mp3",
	P5:"audio/zAudio/tech.mp3",
}

//Image files

var genXIMG = {
	P1:"img/p1.png",
	P2:"img/new/Tech/tech1.png",
	P3:"img/new/Fashion/Fashion1.png",
	P4:"img/new/Slang/Slang1.png",
	P5:"img/new/Music/music1.png",
}

var genYIMG = {
	P1:"img/p2.png",
	P2:"img/new/Tech/tech2.png",
	P3:"img/new/Fashion/Fashion2.png",
	P4:"img/new/Slang/Slang2.png",
	P5:"img/m2.png",
}

var genZIMG = {
	P1:"img/p3.png",
	P2:"img/new/Tech/tech3.png",
	P3:"img/new/Fashion/Fashion3.png",
	P4:"img/new/Slang/Slang3.png",
	P5:"img/new/Music/music3.png",
}

//Dates

var genXDate = {
	P1:"2004",
	P2:"1999",
	P3:"1999",
	P4:"2004",
	P5:"1999",
}

var genYDate = {
	P1:"2008",
	P2:"2008",
	P3:"2005",
	P4:"2007",
	P5:"2006",
}


var genZDate = {
	P1:"2017",
	P2:"2013",
	P3:"2014",
	P4:"2015",
	P5:"2014",
}


//Article descriptions


var genXDesc = {
	P1:"Who says conservatives can't be inclusive? At the 2004 Republican convention in NYC, Youth Radio found some punks with an appreciation for George W. himself.",
	P2:"Its a step up from the N64, but will the Sega Dreamcast video game console last the test of time? This gamer review takes you back to simpler times.",
	P3: "It's all about that button fly.” And according to one '90s teen, this classic jean brand was simply past its prime.",
	P4:"High Schooler Sanovia Jackson rang in 2004 by talking with NPR host Melissa Block what slang phrases were in and out the new year.",
	P5:"MTV was at the height of fashion and music… for the '90s. Youth Radio listened in on an MTV VJ audition in 1999.",
}

var genYDesc = {
	P1:"Back in  2008, Senator Barack Obama was a Presidential hopeful running a fresh campaign based on hope. Hear young people at the Democratic National Convention react to that promise.",
	P2:"The teen trend in 2008? Moving from email to Facebook wall posts. From the early days of social media receipts.",
	P3:"Before skinny jeans were a thing, one Oakland teen was on a mission to get his friends to give up the sag.",
	P4:"In 2007, NPR asked a bunch of people to weigh in on the n-word -- including this group of Bay Area teens.",
	P5:"Before Gnarls Barkley's song became the tune you couldn't get out of your head, it was an underrated hit of the summer of 2006.",
}

var genZDesc = {
	P1:"In a stunning political upset, Donald J.Trump became President #45 -- with many liberals still asking, 'What just happened?'",
	P2:"An introduction to the then-brand new app Snapchat -- listen to teens reassure adults it's not ALL about the d**k pics.",
	P3:"Social media isn't the only place teens feel the pressure to look good. The high school hallway is also place where your look can lift you up, or bring you down.",
	P4:"They say a picture can be worth a thousand words. But what happens when that picture is a tiny gun you sometimes use to text your friends?",
	P5:"Meet me at the mall isn't really a thing anymore… unless you're talking about the punk music scene in Stockton, California.",
}



//Start making buttons!