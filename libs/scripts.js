//Parse CSV file and use header as fild names
function initParser() {
  var topics = {};
  var self = this;
  this.loadData = function() {
    Papa.parse("data/xyz.csv", {
      download: true,
      header: true,
      error: function(error) {
        console.log(error);
      },
      complete: function(results) {
        dataLoaded(trimObj(results.data));
      }
    });
  };
  this.renderData = function(hash) {
    // console.log(topics[hash]);
    renderFields(topics[hash]);
  };
  this.getData = function() {
    return topics;
  };
  var dataLoaded = function(results) {
    results.forEach(function(row){
        var key = row.topic.trim();
        topics["#"+ key] = row;
    });
    var hash = window.location.hash;
    self.renderData(hash);
  }
  function trimObj(obj) {
    //from https://stackoverflow.com/questions/33510625/trim-white-spaces-in-both-object-key-and-value-recursively/33511005#33511005
    if (!Array.isArray(obj) && typeof obj != 'object') return obj;
    return Object.keys(obj).reduce(function(acc, key) {
      acc[key.trim()] = typeof obj[key] == 'string'? obj[key].trim() : trimObj(obj[key]);
      return acc;
    }, Array.isArray(obj)? []:{});
  }
}
var csvParser = new initParser();
csvParser.loadData();


$('#A').on('click', function (e) {
  csvParser.renderData("#politics");
  window.location = "#politics";
})
$('#B').on('click', function (e) {
  csvParser.renderData("#fashion");
  window.location = "#fashion";
})
$('#C').on('click', function (e) {
  csvParser.renderData("#slang");
  window.location = "#slang";
})
$('#D').on('click', function (e) {
  csvParser.renderData("#culture");
  window.location = "#culture";
})
$('#E').on('click', function (e) {
  csvParser.renderData("#technology");
  window.location = "#technology";
})


function renderFields(topicData) {

	document.getElementById("topic").innerHTML = topicData["topic"][0].toLocaleUpperCase() + topicData["topic"].slice(1);
	document.getElementById("description").innerHTML = topicData["topic description"];
	document.getElementById("genXtitle").innerHTML = topicData["X story title"];  
	document.getElementById("genYtitle").innerHTML = topicData["Y story title"]; 
	document.getElementById("genZtitle").innerHTML = topicData["Z story title"]; 

	document.getElementById("genXDesc").innerHTML = topicData["X story description"]; 
	document.getElementById("genYDesc").innerHTML = topicData["Y story description"]; 
	document.getElementById("genZDesc").innerHTML = topicData["Z story description"]; 

	document.getElementById("genXLink").href = topicData["X link"]; 
	document.getElementById("genYLink").href = topicData["Y link"];
	document.getElementById("genZLink").href = topicData["Z link"];

	document.getElementById("genXIMG").src = genXIMG.P1;
	document.getElementById("genYIMG").src = genYIMG.P1;
	document.getElementById("genZIMG").src = genZIMG.P1;

	document.getElementById("audioX").src = genXAudio.P1;
	document.getElementById("audioY").src = genYAudio.P1;
	document.getElementById("audioZ").src = genZAudio.P1;

	document.getElementById("storyA").style.backgroundColor = topicData["X bg color"]; 
	document.getElementById("storyB").style.backgroundColor = topicData["Y bg color"]; 
	document.getElementById("storyC").style.backgroundColor = topicData["Z bg color"]; 

	document.getElementById("XYear").innerHTML = topicData["X story year"]; 
	document.getElementById("YYear").innerHTML = topicData["Y story year"];
	document.getElementById("ZYear").innerHTML = topicData["Z story year"];

	document.getElementById("mc-embedded-subscribe").style.backgroundColor = buttonColors.P1;
	document.getElementById("mRandom").style.backgroundColor = buttonColors.P1;

}
