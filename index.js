var table = d3.select('#dataTable');
var dataColumns = ["datetime","city","state","country","shape","durationMinutes","comments"]
var dataForTable = dataSet;

function renderTable() {
    for(i=0; i<dataForTable.length; i++){
        table.append('tr')
        for(j=0; j<dataColumns.length; j++){
            var dataPoint = dataForTable[i][dataColumns[j]];
            table.append('td').attr('style', 'word-wrap: break-word;min-width: 50px;max-width: 400px;').text(dataPoint)
        }
    }
};

renderTable();

function clearTable(){
    table.selectAll("td").remove();
    table.selectAll("tr").remove();
};

var dateButton = d3.select('#dateButton');
var dateInput = d3.select('#dateInput');

dateButton.on("click", dateClick);

function dateClick(){
    d3.event.preventDefault();
    clearTable();
    var selectedDate = dateInput.node().value.trim();
    if (selectedDate == ""){
        dataForTable = dataSet;
    }
    else {
        dataForTable = dataSet.filter(function(dataSet){
            return dataSet.datetime == selectedDate;
        });
    };
    renderTable();
};