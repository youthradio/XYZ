/* function redirectOne() {
	$(document).ready(function() {
	location.hash = "politics";
	console.log("HEY!!");
})
} */

/*function redirectOne() {
	$(document).ready(function() {
		window.location.hash = "politics";
		console.log("hello");
	});
}*/

$(document).ready(function() {
	if (window.location.hash === "#politics") {
		$(pageOne).html;
		console.log("true 1!");
	};

	if (window.location.hash === "#technology") {
		$(pageTwo).html;
		console.log("true 2!");
	};

	if (window.location.hash === "#fashion") {
		$(pageThree).html;
		console.log("true 3!");
	};

	if (window.location.hash === "#slang") {
		$(pageFour).html;
		console.log("true 4!");
	};

	if (window.location.hash === "#culture") {
		$(pageFive).html;
		console.log("true 5!");
	};


})