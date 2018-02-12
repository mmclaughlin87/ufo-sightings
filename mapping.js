var ufoCounts = {}
var stateAbbreviations = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}
var stateLocations = [
    {
      "state":"ak",
      "latitude":61.3850,
      "longitude":-152.2683
    },
    {
      "state":"al",
      "latitude":32.7990,
      "longitude":-86.8073
    },
    {
      "state":"ar",
      "latitude":34.9513,
      "longitude":-92.3809
    },
    {
      "state":"az",
      "latitude":33.7712,
      "longitude":-111.3877
    },
    {
      "state":"ca",
      "latitude":36.1700,
      "longitude":-119.7462
    },
    {
      "state":"co",
      "latitude":39.0646,
      "longitude":-105.3272
    },
    {
      "state":"ct",
      "latitude":41.5834,
      "longitude":-72.7622
    },
    {
      "state":"de",
      "latitude":39.3498,
      "longitude":-75.5148
    },
    {
      "state":"fl",
      "latitude":27.8333,
      "longitude":-81.7170
    },
    {
      "state":"ga",
      "latitude":32.9866,
      "longitude":-83.6487
    },
    {
      "state":"hi",
      "latitude":21.1098,
      "longitude":-157.5311
    },
    {
      "state":"ia",
      "latitude":42.0046,
      "longitude":-93.2140
    },
    {
      "state":"id",
      "latitude":44.2394,
      "longitude":-114.5103
    },
    {
      "state":"il",
      "latitude":40.3363,
      "longitude":-89.0022
    },
    {
      "state":"in",
      "latitude":39.8647,
      "longitude":-86.2604
    },
    {
      "state":"ks",
      "latitude":38.5111,
      "longitude":-96.8005
    },
    {
      "state":"ky",
      "latitude":37.6690,
      "longitude":-84.6514
    },
    {
      "state":"la",
      "latitude":31.1801,
      "longitude":-91.8749
    },
    {
      "state":"ma",
      "latitude":42.2373,
      "longitude":-71.5314
    },
    {
      "state":"md",
      "latitude":39.0724,
      "longitude":-76.7902
    },
    {
      "state":"me",
      "latitude":44.6074,
      "longitude":-69.3977
    },
    {
      "state":"mi",
      "latitude":43.3504,
      "longitude":-84.5603
    },
    {
      "state":"mn",
      "latitude":45.7326,
      "longitude":-93.9196
    },
    {
      "state":"mo",
      "latitude":38.4623,
      "longitude":-92.3020
    },
    {
      "state":"ms",
      "latitude":32.7673,
      "longitude":-89.6812
    },
    {
      "state":"mt",
      "latitude":46.9048,
      "longitude":-110.3261
    },
    {
      "state":"nc",
      "latitude":35.6411,
      "longitude":-79.8431
    },
    {
      "state":"nd",
      "latitude":47.5362,
      "longitude":-99.7930
    },
    {
      "state":"ne",
      "latitude":41.1289,
      "longitude":-98.2883
    },
    {
      "state":"nh",
      "latitude":43.4108,
      "longitude":-71.5653
    },
    {
      "state":"nj",
      "latitude":40.3140,
      "longitude":-74.5089
    },
    {
      "state":"nm",
      "latitude":34.8375,
      "longitude":-106.2371
    },
    {
      "state":"nv",
      "latitude":38.4199,
      "longitude":-117.1219
    },
    {
      "state":"ny",
      "latitude":43,
      "longitude":-74.9384
    },
    {
      "state":"oh",
      "latitude":40.3736,
      "longitude":-82.7755
    },
    {
      "state":"ok",
      "latitude":35.5376,
      "longitude":-96.9247
    },
    {
      "state":"or",
      "latitude":44.5672,
      "longitude":-122.1269
    },
    {
      "state":"pa",
      "latitude":40.5773,
      "longitude":-77.2640
    },
    {
      "state":"ri",
      "latitude":41.6772,
      "longitude":-71.5101
    },
    {
      "state":"sc",
      "latitude":33.8191,
      "longitude":-80.9066
    },
    {
      "state":"sd",
      "latitude":44.2853,
      "longitude":-99.4632
    },
    {
      "state":"tn",
      "latitude":35.7449,
      "longitude":-86.7489
    },
    {
      "state":"tx",
      "latitude":31.1060,
      "longitude":-97.6475
    },
    {
      "state":"ut",
      "latitude":40.1135,
      "longitude":-111.8535
    },
    {
      "state":"va",
      "latitude":37.7680,
      "longitude":-78.2057
    },
    {
      "state":"vt",
      "latitude":44.0407,
      "longitude":-72.7093
    },
    {
      "state":"wa",
      "latitude":47.3917,
      "longitude":-121.5708
    },
    {
      "state":"wi",
      "latitude":44.2563,
      "longitude":-89.6385
    },
    {
      "state":"wv",
      "latitude":38.4680,
      "longitude":-80.9696
    },
    {
      "state":"wy",
      "latitude":42.7475,
      "longitude":-107.2085
    }
];

function groupData(data){
    for(i=0; i<data.length; i++){
        var state = data[i].state;
        if (ufoCounts.hasOwnProperty(state)){
            ufoCounts[state]++;
        }
        else{
            ufoCounts[state] = 1;
        }
    };
};

function bindToLocation(locations, counts){
    for(i=0; i<stateLocations.length; i++){
        var ufoCount = ufoCounts[stateLocations[i].state];
        stateLocations[i]["ufoCount"] = ufoCount
    }
}

groupData(dataSet);
bindToLocation(stateLocations, ufoCounts);

// Creating map object
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 4
  });
  
  // Adding tile layer
  L.tileLayer(
    "https://api.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?" +
    "access_token=pk.eyJ1IjoibW1jbGF1Z2hsaW44NyIsImEiOiJjamRoank1NjQwd2R1MzNybGppOG9kZTdsIn0.2JTZIjgBlzTvfKjs7Rw_Dg"
  ).addTo(myMap);
    
  // Loop through the cities array and create one marker for each city, bind a popup containing its name and population and add it to the map
  
  for(i=0; i<stateLocations.length; i++){
    var coords = [stateLocations[i].latitude, stateLocations[i].longitude];
    var stateMarker = L.circle(coords, {
      radius: 150*stateLocations[i].ufoCount,
      color: "green",
      fillColor: "green"
    }).addTo(myMap);
    var fullStateName = stateAbbreviations[stateLocations[i].state.toUpperCase()];
    var annualSightings = Math.round(stateLocations[i].ufoCount/5.35);
    stateMarker.bindPopup(`<strong>${fullStateName}</strong><br>
    Annual UFO Sightings: ${annualSightings}`);
  };