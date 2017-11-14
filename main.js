//original JSON code, maybe we can switch to this one day if needed / recommended
/* var artOneData = JSON.parse(P1A1JSON);
var artTwoData = JSON.parse(P1A2JSON);
var artThreeData = JSON.parse(P1A3JSON);
var artFourData = JSON.parse(P1A4JSON);
var artFiveData = JSON.parse(P1A5JSON);
var artSixData = JSON.parse(P1A6JSON); */

Object.values(topics);
Object.values(topicDescriptions);
Object.values(genXColors);
Object.values(genYColors);
Object.values(genZColors);
Object.values(genXTitles);
Object.values(genYTitles);
Object.values(genZTitles);
Object.values(genXAudio);
Object.values(genYAudio);
Object.values(genZAudio);
Object.values(genXIMG);
Object.values(genYIMG);
Object.values(genZIMG);
Object.values(genXDesc);
Object.values(genYDesc);
Object.values(genZDesc);
Object.values(genXLinks);
Object.values(genYLinks);
Object.values(genZLinks);
Object.values(genXDate);
Object.values(genYDate);
Object.values(genZDate);

//This takes all the data from articledata.js and turns their values into arrays, letting us swap data on a page by page basis, there may be a cleaner way to do this..

function pageOne() {

	/* $(document).ready(function(){

		$.get('XYZ-TOPIC.html', function(data) {
			$(pageTwo()).html(data);
		});
	}) */

/*$(document).ready(function() {
	$("#A").click(function(){

		$.post("XYZ-TOPIC.html");
		
		//$(pageOne().html(result));
	});

})*/

	console.log("Page one clicked!");
	document.getElementById("topic").innerHTML = topics.P1;
	document.getElementById("description").innerHTML = topicDescriptions.P1;
	document.getElementById("genXtitle").innerHTML = genXTitles.P1;
	document.getElementById("genYtitle").innerHTML = genYTitles.P1;
	document.getElementById("genZtitle").innerHTML = genZTitles.P1;

	document.getElementById("genXDesc").innerHTML = genXDesc.P1;
	document.getElementById("genYDesc").innerHTML = genYDesc.P1;
	document.getElementById("genZDesc").innerHTML = genZDesc.P1;

	document.getElementById("genXLink").href = genXLinks.P1;
	document.getElementById("genYLink").href = genYLinks.P1;
	document.getElementById("genZLink").href = genZLinks.P1;

	document.getElementById("genXIMG").src = genXIMG.P1;
	document.getElementById("genYIMG").src = genYIMG.P1;
	document.getElementById("genZIMG").src = genZIMG.P1;

	document.getElementById("audioX").src = genXAudio.P1;
	document.getElementById("audioY").src = genYAudio.P1;
	document.getElementById("audioZ").src = genZAudio.P1;

	document.getElementById("storyA").style.backgroundColor = genXColors.P1;
	document.getElementById("storyB").style.backgroundColor = genYColors.P1;
	document.getElementById("storyC").style.backgroundColor = genZColors.P1;

	document.getElementById("XYear").innerHTML = genXDate.P1;
	document.getElementById("YYear").innerHTML = genYDate.P1;
	document.getElementById("ZYear").innerHTML = genZDate.P1;


}

function pageTwo() {
	console.log("Page two clicked!");
	document.getElementById("topic").innerHTML = topics.P2;
	document.getElementById("description").innerHTML = topicDescriptions.P2;
	document.getElementById("genXtitle").innerHTML = genXTitles.P2;
	document.getElementById("genYtitle").innerHTML = genYTitles.P2;
	document.getElementById("genZtitle").innerHTML = genZTitles.P2;

	document.getElementById("genXDesc").innerHTML = genXDesc.P2;
	document.getElementById("genYDesc").innerHTML = genYDesc.P2;
	document.getElementById("genZDesc").innerHTML = genZDesc.P2;

	document.getElementById("genXLink").href = genXLinks.P2;
	document.getElementById("genYLink").href = genYLinks.P2;
	document.getElementById("genZLink").href = genZLinks.P2;

	document.getElementById("genXIMG").src = genXIMG.P2;
	document.getElementById("genYIMG").src = genYIMG.P2;
	document.getElementById("genZIMG").src = genZIMG.P2;

	document.getElementById("audioX").src = genXAudio.P2;
	document.getElementById("audioY").src = genYAudio.P2;
	document.getElementById("audioZ").src = genZAudio.P2;

	document.getElementById("storyA").style.backgroundColor = genXColors.P2;
	document.getElementById("storyB").style.backgroundColor = genYColors.P2;
	document.getElementById("storyC").style.backgroundColor = genZColors.P2;

	document.getElementById("XYear").innerHTML = genXDate.P2;
	document.getElementById("YYear").innerHTML = genYDate.P2;
	document.getElementById("ZYear").innerHTML = genZDate.P2;
}

function pageThree() {
	console.log("Page three clicked!");
	document.getElementById("topic").innerHTML = topics.P3;
	document.getElementById("description").innerHTML = topicDescriptions.P3;
	document.getElementById("genXtitle").innerHTML = genXTitles.P3;
	document.getElementById("genYtitle").innerHTML = genYTitles.P3;
	document.getElementById("genZtitle").innerHTML = genZTitles.P3;

	document.getElementById("genXDesc").innerHTML = genXDesc.P3;
	document.getElementById("genYDesc").innerHTML = genYDesc.P3;
	document.getElementById("genZDesc").innerHTML = genZDesc.P3;

	document.getElementById("genXLink").href = genXLinks.P3;
	document.getElementById("genYLink").href = genYLinks.P3;
	document.getElementById("genZLink").href = genZLinks.P3;

	document.getElementById("genXIMG").src = genXIMG.P3;
	document.getElementById("genYIMG").src = genYIMG.P3;
	document.getElementById("genZIMG").src = genZIMG.P3;

	document.getElementById("audioX").src = genXAudio.P3;
	document.getElementById("audioY").src = genYAudio.P3;
	document.getElementById("audioZ").src = genZAudio.P3;

	document.getElementById("storyA").style.backgroundColor = genXColors.P3;
	document.getElementById("storyB").style.backgroundColor = genYColors.P3;
	document.getElementById("storyC").style.backgroundColor = genZColors.P3;

	document.getElementById("XYear").innerHTML = genXDate.P3;
	document.getElementById("YYear").innerHTML = genYDate.P3;
	document.getElementById("ZYear").innerHTML = genZDate.P3;
}

function pageFour() {
	console.log("Page four clicked!");
	document.getElementById("topic").innerHTML = topics.P4;
	document.getElementById("description").innerHTML = topicDescriptions.P4;
	document.getElementById("genXtitle").innerHTML = genXTitles.P4;
	document.getElementById("genYtitle").innerHTML = genYTitles.P4;
	document.getElementById("genZtitle").innerHTML = genZTitles.P4;

	document.getElementById("genXDesc").innerHTML = genXDesc.P4;
	document.getElementById("genYDesc").innerHTML = genYDesc.P4;
	document.getElementById("genZDesc").innerHTML = genZDesc.P4;

	document.getElementById("genXLink").href = genXLinks.P4;
	document.getElementById("genYLink").href = genYLinks.P4;
	document.getElementById("genZLink").href = genZLinks.P4;

	document.getElementById("genXIMG").src = genXIMG.P4;
	document.getElementById("genYIMG").src = genYIMG.P4;
	document.getElementById("genZIMG").src = genZIMG.P4;

	document.getElementById("audioX").src = genXAudio.P4;
	document.getElementById("audioY").src = genYAudio.P4;
	document.getElementById("audioZ").src = genZAudio.P4;

	document.getElementById("storyA").style.backgroundColor = genXColors.P4;
	document.getElementById("storyB").style.backgroundColor = genYColors.P4;
	document.getElementById("storyC").style.backgroundColor = genZColors.P4;

	document.getElementById("XYear").innerHTML = genXDate.P4;
	document.getElementById("YYear").innerHTML = genYDate.P4;
	document.getElementById("ZYear").innerHTML = genZDate.P4;
}

function pageFive() {
	console.log("Page five clicked!");
	document.getElementById("topic").innerHTML = topics.P5;
	document.getElementById("description").innerHTML = topicDescriptions.P5;
	document.getElementById("genXtitle").innerHTML = genXTitles.P5;
	document.getElementById("genYtitle").innerHTML = genYTitles.P5;
	document.getElementById("genZtitle").innerHTML = genZTitles.P5;

	document.getElementById("genXDesc").innerHTML = genXDesc.P5;
	document.getElementById("genYDesc").innerHTML = genYDesc.P5;
	document.getElementById("genZDesc").innerHTML = genZDesc.P5;

		document.getElementById("genXLink").href = genXLinks.P5;
	document.getElementById("genYLink").href = genYLinks.P5;
	document.getElementById("genZLink").href = genZLinks.P5;

	document.getElementById("genXIMG").src = genXIMG.P5;
	document.getElementById("genYIMG").src = genYIMG.P5;
	document.getElementById("genZIMG").src = genZIMG.P5;

	document.getElementById("audioX").src = genXAudio.P5;
	document.getElementById("audioY").src = genYAudio.P5;
	document.getElementById("audioZ").src = genZAudio.P5;

	document.getElementById("storyA").style.backgroundColor = genXColors.P5;
	document.getElementById("storyB").style.backgroundColor = genYColors.P5;
	document.getElementById("storyC").style.backgroundColor = genZColors.P5;

	document.getElementById("XYear").innerHTML = genXDate.P5;
	document.getElementById("YYear").innerHTML = genYDate.P5;
	document.getElementById("ZYear").innerHTML = genZDate.P5;
}

var surprise = [
	pageOne, pageTwo,
	pageThree, pageFour,
	pageFive];

function surpriseMe() {
	surprise[Math.floor(Math.random() * surprise.length)]();
}

//This is where all of the content gets written and overwritten on the html page through onClick functions.

//debugging
