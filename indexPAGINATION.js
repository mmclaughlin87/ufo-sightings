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

//initialize select options
var selectedCountry = ""
var selectedState = ""
var selectedShape = ""

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

//initialize pagination variables
var curPage = 0;
var firstResult = 0;
var lastResult = 50;


//render initial table
var table = d3.select('#dataTable');
var dataColumns = ["datetime","city","state","country","shape","durationMinutes","comments"]

function renderTable(dataForTable) {
    firstResult = curPage*50
    if (dataForTable.length > 50){
        lastResult = 50;
    }
    else {
        lastResult = dataForTable.length;
    };
    for(i=0; i<lastResult; i++){
        table.append('tr')
        for(j=0; j<dataColumns.length; j++){
            var dataPoint = dataForTable[firstResult+i][dataColumns[j]];
            table.append('td').attr('style', 'word-wrap: break-word;min-width: 50px;max-width: 400px;').text(dataPoint);
        };
    };
    createDropdown(countrySelector, getCountryList,dataForTable);
    createDropdown(stateSelector, getStateList,dataForTable);
    createDropdown(shapeSelector, getShapeList,dataForTable);
    countrySelector.property('value', selectedCountry);
    stateSelector.property('value', selectedState);
    shapeSelector.property('value', selectedShape);
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
    setFilters(selectedDate,"datetime");
    renderTable(dataForTable);
};

var cityButton = d3.select('#cityButton');
var cityInput = d3.select('#cityInput');
cityButton.on("click", cityClick);

function cityClick(){
    d3.event.preventDefault();
    clearTable();
    clearDropdowns();
    var selectedCity = cityInput.node().value.trim().toLowerCase();
    setFilters(selectedCity,"city");
    renderTable(dataForTable);
};

countrySelector.on("change", countryChange);

function countryChange(){
    d3.event.preventDefault();
    clearTable();
    selectedCountry = countrySelector.node().value
    clearDropdowns();
    setFilters(selectedCountry,"country");
    renderTable(dataForTable);
};

stateSelector.on("change", stateChange);

function stateChange(){
    d3.event.preventDefault();
    clearTable();
    selectedState = stateSelector.node().value
    clearDropdowns();
    setFilters(selectedState,"state");
    renderTable(dataForTable);
};

shapeSelector.on("change", shapeChange);

function shapeChange(){
    d3.event.preventDefault();
    clearTable();
    selectedShape = shapeSelector.node().value
    clearDropdowns();
    setFilters(selectedShape,"shape");
    renderTable(dataForTable);
};

//filter table data according to selections
function setFilters(value, property){
    if (value == ""){
        dataForTable = dataSet;
    }
    else {
        dataForTable = dataForTable.filter(function(dataForTable){
            return dataForTable[property] == value;
        });
    };
};

//clear all
var clearButton = d3.select('#clearSelections');
clearButton.on("click", clearAll);

function clearAll(){
    selectedCountry = ""
    selectedState = ""
    selectedShape = ""
    dataForTable = dataSet
    dateInput.property('value', selectedState);
    cityInput.property('value', selectedShape);
    clearTable();
    clearDropdowns();
    
    renderTable(dataForTable);
};

//handle pagination
var paginationList = d3.select('.pagination');
console.log(paginationList.html())
paginationList.on('click', paginationClick());
// var firstPage = d3.select('#firstPage');
// var prevPage = d3.select('#prevPage');
// var thisPage = d3.select('#thisPage');
// var nextPage = d3.select('#nextPage');
// var lastPage = d3.select('#lastPage');

// firstPage.on("click", paginationClick('first'));
// prevPage.on("click", paginationClick('prev'));
// thisPage.on("click", paginationClick('this'));
// nextPage.on("click", paginationClick('next'));
// lastPage.on("click", paginationClick('last'));

function paginationClick(){
    // d3.event.preventDefault();
    // var paginationBtn = d3.event.target();
    console.log("WHYYY")
};

