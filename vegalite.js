var vg_1 = "DataVis2VegaLite.json";
vegaEmbed("#GDP", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "InteractiveChart.json";
vegaEmbed("#HospitalDensity", vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);