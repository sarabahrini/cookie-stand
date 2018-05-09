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
//             // var list = document.getElementById('pike-list');
//             //     var newLi = document.createElement('li');
//             //     var content = document.createTextNode(hours[i]+ ' : ' + random + ' cookies ')
//             //     console.log(content);
//             //     newLi.appendChild(content);
//             //     list.appendChild(newLi);
//         };
//     },
//     cookiesPerHour: function(){
//       //  this.cookiesPerHour()
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
//             // console.log()
//             // for(var i=0; i<this.cookiesPerHour.length; i++){
                
//             // }
//             // console.log(list);
//         },

//     };
// firstAndPike.render();
// // console.log(firstAndPike);
// // console.log(firstAndPike.customerPerHourArray);


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
//       //  this.cookiesPerHour()
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
//     // render:function(){
//     //     this.cookiesPerHour();
//     //     this.customerPerHour();
//     //         // console.log()
//     //         var list = document.getElementById('pike-list');
//     //         var newLi = document.createElement('li');
//     //         list.appendChild(newLi);
//     //         console.log(list);
//     //     },

//     // };
// seaTacAirport.render();
// // console.log(seaTacAirport);
// // console.log(seaTacAirport.customerPerHourArray);



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
//       //  this.cookiesPerHour()
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
//     //         // console.log()
//     //         var list = document.getElementById('pike-list');
//     //         var newLi = document.createElement('li');
//     //         list.appendChild(newLi);
//     //         console.log(list);
//         },
//     };
// SeattleCenter.render();
// // console.log(SeattleCenter);
// // console.log(SeattleCenter.customerPerHourArray);

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
//       //  this.cookiesPerHour()
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
       
//         // var cookiesPerHour=this.cookiesPerHour();
//         // this.totalCookies += cookiesPerHour;
//         // console.log(this.totalCookies);
//         // };
//     //         // console.log()
//     //         var list = document.getElementById('pike-list');
//     //         var newLi = document.createElement('li');
//     //         var content = document.getElementById('li');
//     //         list.appendChild(newLi);
//     //         console.log(list);
//         },

//     };
//     capitolHill.render();
// // capitolHill.render();
// // console.log(capitolHill);
// // console.log(capitolHill.customerPerHourArray);


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
//       //  this.cookiesPerHour()
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
//             // console.log()
        
//         },

//     };
// alki.render();
// // console.log(alki);
// // console.log(alki.customerPerHourArray);


// // var stores = [

// //     'SeaTac Airport',
// //     'Seattle Center',
// //     'Capitol Hill',
// //     'Alki',
// // ]
// // // function store name ()
// // render(){
//     // grab parent element from DOM
//     // for (all hours){
//         // 
//         // give li content 
//         // append li 
//     // } 
// // }
// //  create content append { li fr the total}

// // above should be created for each object 
// // note we also need array for all of the store objects 