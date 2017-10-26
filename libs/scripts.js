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
        dataLoaded(results.data);
      }
    });
  };
  this.renderData = function(hash) {
    console.log(topics[hash]);
    updateContent(topics[hash]);
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

}
var csvParser = new initParser();
csvParser.loadData();


$('#A').on('click', function (e) {
  csvParser.renderData("#politics");
  window.location = "#politics";
})
$('#B').on('click', function (e) {
  csvParser.renderData("#technology");
  window.location = "#technology";
})
$('#C').on('click', function (e) {
  csvParser.renderData("#fashion");
  window.location = "#fashion";
})
$('#D').on('click', function (e) {
  csvParser.renderData("#slang");
  window.location = "#slang";
})
$('#E').on('click', function (e) {
  csvParser.renderData("#music / culture");
  window.location = "#music / culture";
})

function updateContent(data) {
  console.log("Page two clicked!");
  document.getElementById("topic").innerHTML = data["topic"];
  document.getElementById("description").innerHTML = data["topic description "];
  document.getElementById("genXtitle").innerHTML = data["X story title "];
  document.getElementById("genYtitle").innerHTML = data["Y story title "];
  document.getElementById("genZtitle").innerHTML = data["Z story title "];

  document.getElementById("genXDesc").innerHTML = data["X story description "];
  document.getElementById("genYDesc").innerHTML = data["Y story description "];
  document.getElementById("genZDesc").innerHTML = data["Z story description "];

  document.getElementById("genXIMG").src = genXIMG.P2;
  document.getElementById("genYIMG").src = genYIMG.P2;
  document.getElementById("genZIMG").src = genZIMG.P2;

  document.getElementById("storyA").style.backgroundColor = data["X bg color "];
  document.getElementById("storyB").style.backgroundColor = data["Y bg color "];
  document.getElementById("storyC").style.backgroundColor = data["Z bg color "];
}
