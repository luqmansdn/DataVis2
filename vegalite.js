var vg_1 = "GDPMap.json";
vegaEmbed("#GDP", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "HospitalDensityVSGDP.json";
vegaEmbed("#HospitalDensityGDP", vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "HospitalDensity_Population.json";
vegaEmbed("#HospitalDensityPopulation", vg_3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "GDPVSPopulation.json";
vegaEmbed("#GDPPopulation", vg_4).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);