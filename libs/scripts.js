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
})
$('#B').on('click', function (e) {
  csvParser.renderData("#technology");
})
$('#C').on('click', function (e) {
  csvParser.renderData("#fashion");
})
$('#D').on('click', function (e) {
  csvParser.renderData("#slang");
})
$('#E').on('click', function (e) {
  csvParser.renderData("#music / culture");
})
