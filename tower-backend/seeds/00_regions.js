
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('regions').del()
    .then(function () {
      // Inserts seed entries
      return knex('regions').insert([
              {
                  id: 1,
                  varietal:"albarino",
                  country:"spain",
                  region:"rias baixas",
                  appelation:"Galicia",
                  lat:42.659379,
                  long: -8.795818
              },
              {
                  id: 2,
                  varietal:"chardonnay",
                  country: "france",
                  region:"burgundy",
                  appelation:"chablis cote-d'or maconnais",
                  lat: 46.855222, 
                  long: 4.790561
              },
              {
                  id: 3, 
                  varietal: "chardonnay",
                  country: "usa",
                  region: "california",
                  appelation: "napa-valley sonoma central-coast",
                  lat: 38.346017, 
                  long: -122.377345
              },
              {
                  id: 4,
                  varietal:"chenin blanc",
                  country:"france",
                  region:"vouvray",
                  appelation:"loire",
                  lat: 47.429509, 
                  long: 0.798073
              },
              {
                  id: 5,
                  varietal:"chenin blanc",
                  country:"france",
                  region:"savennieres",
                  appelation:"loire",
                  lat: 47.397810, 
                  long: -0.668797
              },
              {
                  id: 6,
                  varietal:"chenin blanc",
                  country:"france",
                  region:"loire valley",
                  appelation:"loire",
                  lat: 47.237297, 
                  long: 0.213437
              },
              {
                  id: 7,
                  varietal:"pinot-gris",
                  country:"italy",
                  region:"trento alto adige",
                  appelation:null,
                  lat: 46.490797, 
                  long: 11.290399
              },
              {
                  id: 8, 
                  varietal:"pinot gris",
                  country:"italy",
                  region:"friuli",
                  appelation:null,
                  lat: 46.159220, 
                  long: 13.146709
              },
              {
                  id: 9,
                  varietal:"pinot gris",
                  country:"france",
                  region:"alsace",
                  appelation:null,
                  lat: 48.245658, 
                  long: 7.428442
              },
              {
                  id: 10,
                  varietal:"gerwurztraminer",
                  country:"france",
                  region:"alsace",
                  appelation:null,
                  lat: 48.245658, 
                  long: 7.428442
              },
              {
                  id: 11,
                  varietal:"reisling",
                  country:"australia",
                  region:"south australia",
                  appelation:"clare valley eden valley",
                  lat: -33.036233, 
                  long: 138.622978
              },           
              {
                  id: 12,
                  varietal:"reisling",
                  country:"france",
                  region:"alsace",
                  appelation:null,
                  lat: 48.245658, 
                  long: 7.428442
              },
              {
                  id: 13,
                  varietal:"reisling",
                  country:"germany",
                  region:"rhein",
                  appelation:null,
                  lat: 49.328330, 
                  long: 7.841833
              },
              {
                  id: 14,
                  varietal:"reisling",
                  country:"germany",
                  region:"mosel",
                  appelation:null,
                  lat: 49.811739, 
                  long: 6.816037
              },
              {
                  id: 15,
                  varietal:"sauvignon blanc",
                  country:"new zealand",
                  region:"south island",
                  appelation:"marlborough",
                  lat: -41.704037, 
                  long: 173.500970
              },
              {
                  id: 16,
                  varietal:"sauvignon blanc",
                  country:"usa",
                  region:"california",
                  appelation:"napa-valley sonoma",
                  lat: 38.346017,
                  long: -122.377345
              },
              {
                  id: 17,
                  varietal:"sauvignon blanc",
                  country:"france",
                  region:"graves",
                  appelation:null,
                  lat: 44.702278, 
                  long:-0.537534
              },
              {
                  id: 18,
                  varietal:"sauvignon blanc",
                  country:"france",
                  region:"pessac-leognan",
                  appelation:null,
                  lat: 44.767903, 
                  long: -0.634402
              },
              {
                  id: 19,
                  varietal:"sauvignon blanc",
                  country:"france",
                  region:"bordeaux",
                  appelation: null,
                  lat: 44.853485, 
                  long: -0.573783
              },
              {
                  id: 20,
                  varietal:"sauvignon blanc",
                  country:"france",
                  region:"loire valley",
                  appelation: "sancerre poiully-fume",
                  lat: 47.237297, 
                  long: 0.213437
              },
              {
                  id: 21,
                  varietal:"torrontes",
                  country:"argentina",
                  region:"mendoza",
                  appelation: null,
                  lat: -34.442727, 
                  long: -68.727018
              },
              {
                  id: 22,
                  varietal:"torrontes",
                  country:"argentina",
                  region:"salta catamarca",
                  appelation: null,
                  lat: -25.471170, 
                  long: -65.625614
              },
              {
                  id: 23,
                  varietal:"viognier",
                  country:"france",
                  region:"rhone valley",
                  appelation: "condrieu",
                  lat: 45.476261, 
                  long: 4.754006
              },
              {
                  id: 24,
                  varietal:"gamay",
                  country:"france",
                  region:"burgundy",
                  appelation:"beaujolais",
                  lat: 46.202559, 
                  long: 4.687410
              },
              {
                  id: 25,
                  varietal:"cabernet sauvignon",
                  country:"usa",
                  region:"california",
                  appelation: "napa-valley sonoma",
                  lat: 38.346017, 
                  long: -122.377345
              },
              {
                  id: 26,
                  varietal:"cabernet sauvignon",
                  country:"austrailia",
                  region:"south-australia",
                  appelation: null,
                  lat: -35.118233, 
                  long: 138.767684
              },
              {
                  id: 27,
                  varietal:"cabernet sauvignon",
                  country:"chile",
                  region:"central valley",
                  appelation: null,
                  lat: -34.749572, 
                  long: -71.407064
              },
              {
                  id: 28,
                  varietal:"cabernet sauvignon",
                  country:"austrailia",
                  region:"western-australia",
                  appelation: null,
                  lat: -33.955334, 
                  long: 115.111935
              },
              {
                  id: 29,
                  varietal:"cabernet sauvignon",
                  country:"austrailia",
                  region:"south australia",
                  appelation: null,
                  lat: -33.036233, 
                  long: 138.622978
              },
              {
                  id: 30,
                  varietal:"cabernet sauvignon",
                  country:"france",
                  region:"bordeaux",
                  appelation: "graves haut-medoc",
                  lat: 45.102954, 
                  long: -0.753043
              },
              {
                  id: 31,
                  varietal:"grenache",
                  country:"australia",
                  region:"south australia",
                  appelation: null,
                  lat: -34.528233, 
                  long: 138.996313
              },
              {
                  id: 32,
                  varietal:"grenache",
                  country:"france",
                  region:"rhone valley",
                  appelation: "châteauneuf-du-pape gigondas",
                  lat: 44.060608, 
                  long: 4.825413
              },
              {
                  id: 33, 
                  varietal:"merlot",
                  country:"france",
                  region:"bordeaux",
                  appelation: "pomerol st-emilion",
                  lat: 44.928676, 
                  long: -0.208228
              },
              {
                  id: 34,
                  varietal:"merlot",
                  country:"usa",
                  region:"california",
                  appelation: "napa-valley sonoma",
                  lat: 38.346017, 
                  long: -122.377345
              },
              {
                  id: 35,
                  varietal:"syrah",
                  country:"france",
                  region:"rhone valley",
                  appelation: "northern rhone",
                  lat: 45.509027, 
                  long: 4.837497
              },
              {
                  id: 36,
                  varietal:"syrah",
                  country:"austrailia",
                  region:"south australia",
                  appelation: null,
                  lat:-37.290234, 
                  long: 140.712654
              },
              {
                  id: 37,
                  varietal:"syrah",
                  country:"austrailia",
                  region:"western australia",
                  appelation: null,
                  lat: -33.955334, 
                  long: 115.111935
              },
              {
                  id: 38,
                  varietal:"syrah",
                  country:"austrailia",
                  region:"victoria",
                  appelation: null,
                  lat: -36.902823, 
                  long: 144.736291
              },
              {
                  id: 39,
                  varietal:"syrah",
                  country:"usa",
                  region:"california",
                  appelation: "napa-valley sonoma central-coast",
                  lat: 38.346017, 
                  long: -122.377345
              },
              {
                  id: 40,
                  varietal:"nebbiolo",
                  country:"italy",
                  region:"peidmont",
                  appelation:"barolo barbaresco",
                  lat: 44.8586861,
                  long: 7.7966566
              },
              {
                  id: 41,
                  varietal:"pinot noir",
                  country:"new zealand",
                  region:"north island",
                  appelation:"martinbourough",
                  lat: -41.213270,
                  long: 175.448788
              },
              {
                  id: 42,
                  varietal:"pinot noir",
                  country:"new zealand",
                  region:"south-island",
                  appelation: "central otago",
                  lat: -44.968284,
                  long: 169.214828
              },
              {
                  id: 43,
                  varietal:"pinot noir",
                  country:"usa",
                  region:"california",
                  appelation: "napa-valley sonoma central-coast",
                  lat: 38.346017, 
                  long: -122.377345
              },
              {
                  id: 44,
                  varietal:"pinot noir",
                  country:"france",
                  region:"burgundy",
                  appelation: "cote d'or",
                  lat: 46.931716, 
                  long: 4.742422
              },
              {
                  id: 45,
                  varietal:"malbec",
                  country:"argentina",
                  region:"mendoza",
                  appelation: null,
                  lat: -34.442727, 
                  long: -68.727018
              },
              {
                  id: 46,
                  varietal:"sangiovese",
                  country:"italy",
                  region:"tuscany",
                  appelation: "brunello-di-montalcino chianti-classico",
                  lat: 43.417547, 
                  long: 11.143936
              },
              {
                  id: 47,
                  varietal:"zinfandel",
                  country:"usa",
                  region:"california",
                  appelation: "paso-robles napa sonoma",
                  lat: 35.616856, 
                  long: -120.744174
              },
              {
                  id: 48,
                  varietal:"tempranillo",
                  country:"spain",
                  region:"rioja",
                  appelation: null,
                  lat: 42.278181, 
                  long: -2.537034
              },
              {
                  id: 49,
                  varietal:"tempranillo",
                  country:"spain",
                  region:"ribera del duero",
                  appelation: null,
                  lat: 41.717083, 
                  long: -3.692328
              }
      ]);
    });
};
