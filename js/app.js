'use strict';

var hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var firstAndPike = {
    min: 23,
    max: 65,
    avg: 6.3,
    customerPerHourArray:[],
    cookiesPerHourArray:[],
    random: function(){
        return Math.floor(Math.random()*(this.max-this.min))+this.min;
    },
    customerPerHour: function(){
        for (var i=0; i<=hours.length; i++){
            var random = this.random();
            this.customerPerHourArray.push(random);
        };
    },
    cookiesPerHour: function(){
      //  this.cookiesPerHour()
        for (var i=0; i<=hours.length; i++){
            this.cookiesPerHourArray.push(Math.floor(this.random()*this.avg));
        };
    },
    render:function(){
        this.cookiesPerHour();
        this.customerPerHour();
            // console.log()
            var list = document.getElementById('pike-list');
            var newLi = document.createElement('li');
            list.appendChild(newLi);
        },

    };
firstAndPike.render();
console.log(firstAndPike);
console.log(firstAndPike.customerPerHourArray);




// var stores = [

//     'SeaTac Airport',
//     'Seattle Center',
//     'Capitol Hill',
//     'Alki',
// ]
// // function store name ()
// render(){
    // grab parent element from DOM
    // for (all hours){
        // 
        // give li content 
        // append li 
    // } 
// }
//  create content append { li fr the total}

// above should be created for each object 
// note we also need array for all of the store objects 