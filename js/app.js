// >>>>>>>>>>>>>>>>>>> My code May 7th  (lines terminating with * were commented out originally)>>>>>>>>>>>>>>>>>>>>>
// 'use strict';

// var hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

// var firstAndPike = {
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     customerPerHourArray:[],
//     cookiesPerHourArray:[],
//     random: function(){
//         return Math.floor(Math.random()*(this.max-this.min))+this.min;
//     },
//     customerPerHour: function(){
//         for (var i=0; i<=hours.length; i++){
//             var random = this.random();
//             this.customerPerHourArray.push(random);
//             // var list = document.getElementById('pike-list');*
//             //     var newLi = document.createElement('li');*
//             //     var content = document.createTextNode(hours[i]+ ' : ' + random + ' cookies ')*
//             //     console.log(content);*
//             //     newLi.appendChild(content);*
//             //     list.appendChild(newLi);*
//         };
//     },
//     cookiesPerHour: function(){
//       //  this.cookiesPerHour()*
//         for (var i=0; i<hours.length; i++){
//             this.cookiesPerHourArray.push(Math.floor(this.random()*this.avg));
//             var list1 = document.getElementById('pike-list');
//             var newLi = document.createElement('li');
//             var content = document.createTextNode(hours[i]+ ' : ' + this.cookiesPerHourArray[i] + ' cookies ')
//             console.log(content);
//             newLi.appendChild(content);
//             list1.appendChild(newLi);
//         };
//     },
//     render:function(){
//         this.cookiesPerHour();
//         this.customerPerHour();
//             // console.log()*
//             // for(var i=0; i<this.cookiesPerHour.length; i++){*

//             // }*
//             // console.log(list);*
//         },

//     };
// firstAndPike.render();
// // console.log(firstAndPike);*
// // console.log(firstAndPike.customerPerHourArray);*


// var seaTacAirport= {
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     customerPerHourArray:[],
//     cookiesPerHourArray:[],
//     random: function(){
//         return Math.floor(Math.random()*(this.max-this.min))+this.min;
//     },
//     customerPerHour: function(){
//         for (var i=0; i<hours.length; i++){
//             var random = this.random();
//             this.customerPerHourArray.push(random);
//         };
//     },
//     cookiesPerHour: function(){
//       //  this.cookiesPerHour()*
//         for (var i=0; i<hours.length; i++){
//             this.cookiesPerHourArray.push(Math.floor(this.random()*this.avg));
//             var list2 = document.getElementById('Tac');
//             var newLi = document.createElement('li');
//             var content = document.createTextNode(hours[i]+ ' : ' + this.cookiesPerHourArray[i] + ' cookies ')
//             console.log(content);
//             newLi.appendChild(content);
//             list2.appendChild(newLi);
//         };
//     },
//     render:function(){
//         this.cookiesPerHour();
//         this.customerPerHour();
//     },
// };
//     // render:function(){*
//     //     this.cookiesPerHour();*
//     //     this.customerPerHour();*
//     //         // console.log()*
//     //         var list = document.getElementById('pike-list');*
//     //         var newLi = document.createElement('li');*
//     //         list.appendChild(newLi);*
//     //         console.log(list);*
//     //     },*

//     // };*
//     seaTacAirport.render();
// // console.log(seaTacAirport);*
// // console.log(seaTacAirport.customerPerHourArray);*



// var SeattleCenter= {
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     customerPerHourArray:[],
//     cookiesPerHourArray:[],
//     random: function(){
//         return Math.floor(Math.random()*(this.max-this.min))+this.min;
//     },
//     customerPerHour: function(){
//         for (var i=0; i<=hours.length; i++){
//             var random = this.random();
//             this.customerPerHourArray.push(random);
//         };
//     },
//     cookiesPerHour: function(){
//       //  this.cookiesPerHour()*
//       for (var i=0; i<hours.length; i++){
//         this.cookiesPerHourArray.push(Math.floor(this.random()*this.avg));
//         var list3 = document.getElementById('seattle-center');
//         var newLi = document.createElement('li');
//         var content = document.createTextNode(hours[i]+ ' : ' + this.cookiesPerHourArray[i] + ' cookies ')
//         console.log(content);
//         newLi.appendChild(content);
//         list3.appendChild(newLi);
//     }
// },
//     render:function(){
//         this.cookiesPerHour();
//         this.customerPerHour();
//     //         // console.log()*
//     //         var list = document.getElementById('pike-list');*
//     //         var newLi = document.createElement('li');*
//     //         list.appendChild(newLi);*
//     //         console.log(list);*
//         },
//     };
// SeattleCenter.render();
// // console.log(SeattleCenter);*
// // console.log(SeattleCenter.customerPerHourArray);*

// var capitolHill= {
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     customerPerHourArray:[],
//     cookiesPerHourArray:[],
//     totalCookies:0,
//     random: function(){
//         return Math.floor(Math.random()*(this.max-this.min))+this.min;
//     },
//     customerPerHour: function(){
//         for (var i=0; i<=hours.length; i++){
//             var random = this.random();
//             this.customerPerHourArray.push(random);
//         };
//     },
//     cookiesPerHour: function(){
//       //  this.cookiesPerHour()*
//       for (var i=0; i<hours.length; i++){
//         this.cookiesPerHourArray.push(Math.floor(this.random()*this.avg));
//         var list4 = document.getElementById('cap-hill');
//         var newLi = document.createElement('li');
//         var content = document.createTextNode(hours[i]+ ' : ' + this.cookiesPerHourArray[i] + ' cookies ')
//         console.log(content);
//         newLi.appendChild(content);
//         list4.appendChild(newLi);
//     };
//     },
//     render:function(){
//         this.cookiesPerHour();
//         this.customerPerHour();

//         // var cookiesPerHour=this.cookiesPerHour();*
//         // this.totalCookies += cookiesPerHour;*
//         // console.log(this.totalCookies);*
//         // };*
//     //         // console.log()*
//     //         var list = document.getElementById('pike-list');*
//     //         var newLi = document.createElement('li');*
//     //         var content = document.getElementById('li');*
//     //         list.appendChild(newLi);*
//     //         console.log(list);*
//         },

//     };
//     capitolHill.render();
// // capitolHill.render();*
// // console.log(capitolHill);*
// // console.log(capitolHill.customerPerHourArray);*


// var alki= {
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     customerPerHourArray:[],
//     cookiesPerHourArray:[],
//     random: function(){
//         return Math.floor(Math.random()*(this.max-this.min))+this.min;
//     },
//     customerPerHour: function(){
//         for (var i=0; i<=hours.length; i++){
//             var random = this.random();
//             this.customerPerHourArray.push(random);
//         };
//     },
//     cookiesPerHour: function(){
//       //  this.cookiesPerHour()*
//       for (var i=0; i<hours.length; i++){
//         this.cookiesPerHourArray.push(Math.floor(this.random()*this.avg));
//         var list5 = document.getElementById('alki');
//         var newLi = document.createElement('li');
//         var content = document.createTextNode(hours[i]+ ' : ' + this.cookiesPerHourArray[i] + ' cookies ')
//         console.log(content);
//         newLi.appendChild(content);
//         list5.appendChild(newLi);

//         };
//     },
//     render:function(){
//         this.cookiesPerHour();
//         this.customerPerHour();
//             // console.log()*

//         },

//     };
// alki.render();
// // console.log(alki);*
// // console.log(alki.customerPerHourArray);*


// // var stores = [*

// //     'SeaTac Airport',*
// //     'Seattle Center',*
// //     'Capitol Hill',*
// //     'Alki',*
// // ]*
// // // function store name ()*
// // render(){*
//     // grab parent element from DOM*
//     // for (all hours){*
//         // *
//         // give li content* 
//         // append li* 
//     // }* 
// // }*
// //  create content append { li fr the total}*

// // above should be created for each object *
// // note we also need array for all of the store objects * 


// // >>>>>>>>>>>>>>>>>>> copied from class May 8th (Build-out-of-yesterday) and added other store names to it  >>>>>>>>>>>>>>>>>>>>>
// 'use strict';

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var pikePlace = {
//   name: 'Pike Place Market',
//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   avgCookiesPerCustomer: 6.3,
//   customersEachHour: [],
//   cookiesSoldEachHour: [],
//   totalDailyCookieSales: 0
// };

// var seaTac = {
//     name: 'SeaTac International Airport',
//     minCustomersPerHour: 3,
//     maxCustomersPerHour: 24,
//     avgCookiesPerCustomer: 1.2,
//     customersEachHour: [],
//     cookiesSoldEachHour: [],
//     totalDailyCookieSales: 0
//   };

//   var seattleCenter = {
//     name: 'Seattle Center',
//     minCustomersPerHour: 11,
//     maxCustomersPerHour: 38,
//     avgCookiesPerCustomer: 3.7,
//     customersEachHour: [],
//     cookiesSoldEachHour: [],
//     totalDailyCookieSales: 0
//   };

//   var capitolHill= {
//     name: 'Capitol Hill',
//     minCustomersPerHour: 20,
//     maxCustomersPerHour: 38,
//     avgCookiesPerCustomer: 2.3,
//     customersEachHour: [],
//     cookiesSoldEachHour: [],
//     totalDailyCookieSales: 0
//   };

//   var alki= {
//     name: 'Alki',
//     minCustomersPerHour: 2,
//     maxCustomersPerHour: 16,
//     avgCookiesPerCustomer: 4.6,
//     customersEachHour: [],
//     cookiesSoldEachHour: [],
//     totalDailyCookieSales: 0
//   };

// pikePlace.calcCustomersEachHour = function() {
//   for (var i = 0; i < hours.length; i++) {
//     //calc a random number between min/max and put it into the array
//     this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
//   }
// }

// seaTac.calcCustomersEachHour = function() {
//     for (var i = 0; i < hours.length; i++) {
//       //calc a random number between min/max and put it into the array
//       this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
//     }
//   }

//   seattleCenter.calcCustomersEachHour = function() {
//     for (var i = 0; i < hours.length; i++) {
//       //calc a random number between min/max and put it into the array
//       this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
//     }
//   }

//   capitolHill.calcCustomersEachHour = function() {
//     for (var i = 0; i < hours.length; i++) {
//       //calc a random number between min/max and put it into the array
//       this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
//     }
//   }

//   alki.calcCustomersEachHour = function() {
//     for (var i = 0; i < hours.length; i++) {
//       //calc a random number between min/max and put it into the array
//       this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
//     }
//   }

// ////////////////////////////////////////////////////


// pikePlace.calcCookiesSoldEachHour = function() {
//   pikePlace.calcCustomersEachHour();
//   // multiply our random customers by the average cookies per
//   for (var i = 0; i < hours.length; i++) {
//     this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
//     this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
//     // console.log(this.totalDailyCookieSales);
//   }
// }

// seaTac.calcCookiesSoldEachHour = function() {
//     seaTac.calcCustomersEachHour();
//     // multiply our random customers by the average cookies per
//     for (var i = 0; i < hours.length; i++) {
//       this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
//       this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
//       // console.log(this.totalDailyCookieSales);
//     }
//   }

//   seattleCenter.calcCookiesSoldEachHour = function() {
//     seattleCenter.calcCustomersEachHour();
//     // multiply our random customers by the average cookies per
//     for (var i = 0; i < hours.length; i++) {
//       this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
//       this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
//       // console.log(this.totalDailyCookieSales);
//     }
//   }

//   capitolHill.calcCookiesSoldEachHour = function() {
//     capitolHill.calcCustomersEachHour();
//     // multiply our random customers by the average cookies per
//     for (var i = 0; i < hours.length; i++) {
//       this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
//       this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
//       // console.log(this.totalDailyCookieSales);
//     }
//   }

//   alki.calcCookiesSoldEachHour = function() {
//     alki.calcCustomersEachHour();
//     // multiply our random customers by the average cookies per
//     for (var i = 0; i < hours.length; i++) {
//       this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
//       this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
//       // console.log(this.totalDailyCookieSales);
//     }
//   }

// //////////////////////////////////////

// pikePlace.render = function() {
//   pikePlace.calcCookiesSoldEachHour();
//   // grab the parent from the DOM
//   var ulEl = document.getElementById('pike')
//   for (var i = 0; i < hours.length; i++) {
//     // create an element
//     var liEl = document.createElement('li');
//     // give the element content
//     liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies'
//       // append the child to the parent
//     ulEl.appendChild(liEl);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
//   ulEl.appendChild(liEl);
// }


// seaTac.render = function() {
//     seaTac.calcCookiesSoldEachHour();
//     // grab the parent from the DOM
//     var ulEl = document.getElementById('seatac')
//     for (var i = 0; i < hours.length; i++) {
//       // create an element
//       var liEl = document.createElement('li');
//       // give the element content
//       liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies'
//         // append the child to the parent
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
//     ulEl.appendChild(liEl);
//   }

//   seattleCenter.render = function() {
//     seattleCenter.calcCookiesSoldEachHour();
//     // grab the parent from the DOM
//     var ulEl = document.getElementById('seattlecenter')
//     for (var i = 0; i < hours.length; i++) {
//       // create an element
//       var liEl = document.createElement('li');
//       // give the element content
//       liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies'
//         // append the child to the parent
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
//     ulEl.appendChild(liEl);
//   }

//   capitolHill.render = function() {
//     capitolHill.calcCookiesSoldEachHour();
//     // grab the parent from the DOM
//     var ulEl = document.getElementById('capitolhill')
//     for (var i = 0; i < hours.length; i++) {
//       // create an element
//       var liEl = document.createElement('li');
//       // give the element content
//       liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies'
//         // append the child to the parent
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
//     ulEl.appendChild(liEl);
//   }

//   alki.render = function() {
//     alki.calcCookiesSoldEachHour();
//     // grab the parent from the DOM
//     var ulEl = document.getElementById('alki')
//     for (var i = 0; i < hours.length; i++) {
//       // create an element
//       var liEl = document.createElement('li');
//       // give the element content
//       liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies'
//         // append the child to the parent
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
//     ulEl.appendChild(liEl);
//   }

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
// }

// pikePlace.render();
// seaTac.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();

// >>>>>>>>>>>>>>>>>>> Constructor Function >>>>>>>>>>>>>>>>>>>>>
'use strict';

// Store Constructor
var allStores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var customers = [];
var sales = [];
var cookiesSoldTable = document.getElementById("stores");
function Store(storeName, min, max, avg, ) {

    this.storeName = storeName;
    this.min = min;
    this.max = max;
    this.avg = avg;
    //   customersPerHr= [];
    //   cookiesPerHr= [];
    //   totalDailyCookies= 0
    allStores.push(this);
};

var pike = new Store('Pike Place Market', '23', '65', '6.3');
var seatac = new Store('SeaTac International Airport', '3', '24', '1.2');
var center = new Store('Seattle Center', '11', '38', '3.7');
var capitol = new Store('Capitol Hill', '20', '38', '2.3');
var alki = new Store('Alki', '2', '16', '4.6');


Store.prototype.random = function () {
    var trEL=document.createElement('tr');
    var tdEL=document.createElement('td');
    tdEL.textContent= ''+ this.storeName;
    trEL.appendChild(tdEL);
    for (var i in hours) {
        customers[i] = Math.floor(Math.random() * (this.max - this.min) + 1 + this.min); // via MDN
        sales[i] = Math.ceil(customers[i] * this.avg);
        tdEL= document.createElement('td');// create td
        tdEL.textContent = '' + sales[i]; //give td content
        trEL.appendChild(tdEL); //attach td to tr
    }
    cookiesSoldTable.appendChild(trEL);
}
var trEL = document.createElement('tr');
var thEL = document.createElement('th');
thEL.textContent= 'Store Name';
trEL.appendChild(thEL);


for(var i in hours){
thEL = document.createElement('th');
thEL.textContent = '' + hours[i];
trEL.appendChild(thEL);
}
cookiesSoldTable.appendChild(trEL);

pike.random();
seatac.random();
center.random();
capitol.random();
alki.random();
// storeTable.prototype.calculateSales=function(){

// }
// // allStores[1].random();
// // console.log(allStores[1].random());
// // console.log(allStores);


// // We need to access the table that is in the DOM
// var storeTable = document.getElementById('stores');


//  // give td content (Name for an individual Store)
//  tdEl.textContent = this.storeName;
//  // append the td to the tr
//  trEl.appendChild(tdEl);

//   // append the tr to the table
//   storeTable.appendChild(trEl);

//   // It would be nice to have a single function that renders all of the individual cat rows
// function renderAllStores() {
//     for (var i in allStores) {
//       allStores[i].render();
//     }
// }

// console.table(allStores);
