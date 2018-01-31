//build selectors
function getUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function createDropdown(select,arrayFunction,data){
    array = arrayFunction(data)
    select.append('option').text("").attr('value', "");
    for(i=0; i<array.length; i++){
        select.append('option').text(array[i].toUpperCase()).attr('value', array[i]);
    };
};

var dataForTable = dataSet;
var shapeSelector = d3.select('#shapeSelect');
var stateSelector = d3.select('#stateSelect');
var countrySelector = d3.select('#countrySelect');

function getCountryList(dataForTable){
    var allCountries = [];
    for(i=0; i<dataForTable.length; i++){
        allCountries.push(dataForTable[i].country);
    };
    return allCountries.filter(getUnique).sort();
};

function getStateList(dataForTable){
    var allStates = [];
    for(i=0; i<dataForTable.length; i++){
        allStates.push(dataForTable[i].state);
    };
    return allStates.filter(getUnique).sort();
};

function getShapeList(dataForTable){
    var allShapes = [];
    for(i=0; i<dataForTable.length; i++){
        allShapes.push(dataForTable[i].shape);
    };
    return allShapes.filter(getUnique).sort();
};


//render initial table
var table = d3.select('#dataTable');
var dataColumns = ["datetime","city","state","country","shape","durationMinutes","comments"]

function renderTable(dataForTable) {
    for(i=0; i<dataForTable.length; i++){
        table.append('tr')
        for(j=0; j<dataColumns.length; j++){
            var dataPoint = dataForTable[i][dataColumns[j]];
            table.append('td').attr('style', 'word-wrap: break-word;min-width: 50px;max-width: 400px;').text(dataPoint);
        };
    };
    createDropdown(countrySelector, getCountryList,dataForTable);
    createDropdown(stateSelector, getStateList,dataForTable);
    createDropdown(shapeSelector, getShapeList,dataForTable);
};

renderTable(dataSet);

//handle selections/searches
function clearTable(){
    table.selectAll("td").remove();
    table.selectAll("tr").remove();
};

function clearDropdowns(){
    shapeSelector.selectAll('option').remove();
    stateSelector.selectAll('option').remove();
    countrySelector.selectAll('option').remove();
}

var dateButton = d3.select('#dateButton');
var dateInput = d3.select('#dateInput');

dateButton.on("click", dateClick);

function dateClick(){
    d3.event.preventDefault();
    clearTable();
    clearDropdowns();
    var selectedDate = dateInput.node().value.trim();
    if (selectedDate == ""){
        dataForTable = dataSet;
    }
    else {
        dataForTable = dataForTable.filter(function(dataForTable){
            return dataForTable.datetime == selectedDate;
        });
    };
    renderTable(dataForTable);
};