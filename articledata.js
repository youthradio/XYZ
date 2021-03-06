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

var buttonColors = {
	P1:"#cce589",
	P2:"#7975e5", //technology
	P3:"#69ecd3",
	P4:"#b691d7",
	P5:"#9CEA8C",
}

//Article titles

var genXTitles = {
	P1:"Punks For Bush",
	P2:"Review: The Sega Dreamcast",
	P3:"Lose The Levis",
	P4:"Slang Predictions For The Future",
	P5:"Wanna Be An MTV VJ?",
}

var genYTitles = {
	P1:"Hope Out Of The Box",
	P2:"Public Is The New Private",
	P3:"Mismatching Is The New Matching",
	P4:"The N-word: Slang Or Disrespect?",
	P5:"Basketball Beef Spills Into Rap World",
}

var genZTitles = {
	P1:"Donald Trump Takes Office",
	P2:"Snapchat Sexting?",
	P3:"Dress Code Politics",
	P4:"What's The Meaning Of The Gun Emoji?",
	P5:"Punks Are The New Mall Rats",
}

//Article authors

var genXauthors = {
	P1:"Enrique Rivera",
	P2:"Ocie Henderson",
	P3:"Belia Mayeno Saavedra",
	P4:"Sanovia Jackson",
	P5:"Anita Johnson",
}

var genYauthors = {
	P1:"Orlando Campbell",
	P2:"Lauren Silverman",
	P3:"King Anyi Howell",
	P4:"Pendarvis Harshaw, Ayesha Walker, Alana Germany",
	P5:"Brandon McFarland",
}

var genZauthors = {
	P1:"Natalie Bettendorf",
	P2:"Sunday Simon",
	P3:"Stella Lau",
	P4:"Tylyn Hardamon",
	P5:"Rafael Johns",
}

//Audio files

var genXAudio = {
	P1:"audio/xAudio/politics.mp3", //RENAME ASAP!!
	P2:"audio/xAudio/tech.mp3",  //RENAME ASAP!!
	P3:"audio/xAudio/fashion.mp3",
	P4:"audio/xAudio/slang.mp3",
	P5:"audio/xAudio/music.mp3", //RENAME ASAP!!
}

var genYAudio = {
	P1:"audio/yAudio/politics.mp3",
	P2:"audio/yAudio/tech.mp3",
	P3:"audio/yAudio/fashion.mp3",
	P4:"audio/yAudio/slang.mp3",
	P5:"audio/yAudio/music.mp3",
}

var genZAudio = {
	P1:"audio/zAudio/politics.mp3",
	P2:"audio/zAudio/tech.mp3", 
	P3:"audio/zAudio/fashion.mp3",
	P4:"audio/zAudio/slang.mp3",
	P5:"audio/zAudio/music.mp3",
}

//Image files

var genXIMG = {
	P1:"img/p4.png",
	P2:"img/t1.png",
	P3:"img/f1.png",
	P4:"img/s1.png",
	P5:"img/m1.png",
}

var genYIMG = {
	P1:"img/p2.png",
	P2:"img/t2.png",
	P3:"img/f2.png",
	P4:"img/s2.png",
	P5:"img/m2.png",
}

var genZIMG = {
	P1:"img/p3.png",
	P2:"img/t3.png",
	P3:"img/f3.png",
	P4:"img/s3.png",
	P5:"img/m3.png",
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
	P3:"2008",
	P4:"2007",
	P5:"2006",
}


var genZDate = {
	P1:"2017",
	P2:"2013",
	P3:"2016",
	P4:"2015",
	P5:"2014",
}

//Links

var genXLinks = {
	P1:"http://www.npr.org/templates/story/story.php?storyId=3885263",
	P2:"null",
	P3:"null",
	P4:"http://www.npr.org/templates/text/s.php?sId=1579620&m=1",
	P5:"null",
}

var genYLinks = {
	P1:"https://www.npr.org/templates/story/story.php?storyId=96805483",
	P2:"http://www.npr.org/templates/story/story.php?storyId=93374338",
	P3:"https://www.npr.org/templates/story/story.php?storyId=90907618",
	P4:"http://www.npr.org/templates/story/story.php?storyId=11155621",
	P5:"https://www.npr.org/templates/story/story.php?storyId=91489009",
}

var genZLinks = {
	P1:"https://youthradio.org/journalism/podcasts/youth-radio-podcast-donald-trump-takes-office/",
	P2:"https://youthradio.org/journalism/science/how-young-people-are-really-using-snapchat/",
	P3:"https://youthradio.org/journalism/education/teen-girls-flip-the-script-on-social-media/",
	P4:"https://youthradio.org/journalism/education/teens-use-the-gun-emoji-despite-potential-for-misunderstanding/",
	P5:"http://www.npr.org/2014/08/13/338828404/in-stockton-calif-punks-are-the-new-mall-rats",
}


//Article descriptions


var genXDesc = {
	P1:"Who says conservatives can't be inclusive? At the 2004 Republican convention in NYC, Youth Radio found some punks with an appreciation for George W. himself.",
	P2:"It was a step up from the N64, but did the Sega Dreamcast video game console pass the test of time? This gamer review takes you back to a simpler era.",
	P3:" <i>It's all about that button fly.</i> And according to one '90s teen, this classic jean brand was simply past its prime.",
	P4:"High Schooler Sanovia Jackson rang in 2004 by talking with NPR host Melissa Block what slang phrases were in and out.",
	P5:"MTV was at the height of fashion and music... for the '90s. Youth Radio listened in on an MTV VJ audition in 1999.",
}

var genYDesc = {
	P1:"'Yes, we can.' Barack Obama became the first black President of the United States on a campaign of 'hope'. Right after his election, teens reflect on how hope can be both a positive and a negative force in their lives.",
	P2:"The teen trend in 2008? Moving from email to Facebook wall posts. From the early days of social media receipts.",
	P3:"Forget matching your shirt color with your shoe hue. In 2008, it was all about knee-high rainbow socks and candy-colored hair extension.",
	P4:"In 2007, NPR asked a bunch of people to weigh in on the n-word -- including this group of Bay Area teens.",
	P5:"The 2008 NBA finals pitted the Celtics against the Lakers. But off the court, the season's biggest basketball dust-up was between DeShawn Stevenson and LeBron James - and their rap proxies, Soulja Boy and Jay-Z.",
}

var genZDesc = {
	P1:"In a stunning political upset, Donald J.Trump became President #45 -- with many liberals still asking, 'What just happened?'",
	P2:"An introduction to the then-brand new app Snapchat -- listen to teens reassure adults it's not ALL about the d**k pics.",
	P3:"Teenagers have been fighting gender bias in dress code policies forever, but Gen Zers? They're doing it on Twitter.",
	P4:"They say a picture can be worth a thousand words. But what happens when that picture is a tiny gun you sometimes use to text your friends?",
	P5:"Meet me at the mall isn't really a thing anymore... unless you're talking about the punk music scene in Stockton, California.",
}



//Start making buttons!