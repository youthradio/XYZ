//Parse CSV file and use header as fild names
function initParser() {
  var data;
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
  this.renderData = function(id) {
    console.log(data[id]);
  };
  var dataLoaded = function(d) {
    data = d;
    self.renderData(1);
  }

}
var csvParser = new initParser();
csvParser.loadData();


$('#A').on('click', function (e) {
  csvParser.renderData(0);
})
$('#B').on('click', function (e) {
  csvParser.renderData(1);
})
