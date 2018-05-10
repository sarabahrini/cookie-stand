'use strict';

var allStores = [];

var hours = ['6am', '7am', '8am', '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '9pm'];

function Store(average, minimumCust, maximumCustParameter, name) {

    this.averageCookies = average;
    this.minimumCust = minimumCust;
    this.maximumCust = maximumCustParameter;
    this.name = name;

    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.totalCookies = 0;

    allStores.push(this);
}


Store.prototype.calcCustomersPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
        //inside this function ctx this is the object its called from
        var newRandom = random(this.minimumCust, this.maximumCust);
        this.customersPerHour.push(newRandom);
    }
};

Store.prototype.calcCookiesPerHour = function () {
    this.calcCustomersPerHour();
    for (var i in hours) {
        //inside this function ctx this is the object its called from
        this.cookiesPerHour.push(this.customersPerHour[i] * this.averageCookies);

        this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
        // this.totalCookies += this.cookiesPerHour[i];
    }
};

Store.prototype.render = function () {
    this.calcCookiesPerHour();

    var tableEl = document.getElementById('store-storer');
    var newTrEl = document.createElement('tr');
    var newTdEl = document.createElement('td');

    newTdEl.textContent = this.name;
    newTrEl.append(newTdEl);

    for (var i in hours) {
        newTdEl = document.createElement('td');
        newTdEl.textContent = this.cookiesPerHour[i];

        newTrEl.append(newTdEl);
    }

    newTdEl = document.createElement('td');
    newTdEl.textContent = this.totalCookies;
    newTrEl.append(newTdEl);

    tableEl.append(newTrEl);
};

function renderAllStores() {
    //set up references
    var tableEl = document.getElementById('store-storer');
    var newTrEl = document.createElement('tr');


    // ============Build Header row ================
    //build location column name
    var storeLocationTdEl = document.createElement('td');
    storeLocationTdEl.textContent = 'Store Location';
    newTrEl.append(storeLocationTdEl);

    for (var j in hours) {
        var newTdEl = document.createElement('td');
        newTdEl.textContent = hours[j];

        newTrEl.append(newTdEl);
    }
    var storeTotalTdEl = document.createElement('td');
    storeTotalTdEl.textContent = 'Total';
    newTrEl.append(storeTotalTdEl);

    tableEl.append(newTrEl);
    // ===============End Build header row ================
    for (var i in allStores) {
        allStores[i].render();
    }

}

// console.log(pike);

// New Stores
var pike = new Store(7, 30, 70, 'Pike Market');
var tac = new Store(7, 30, 70, 'SeaTac Airport');
var center = new Store(7, 30, 70, 'Seattle Center');
var capitol = new Store(7, 30, 70, 'Capitol Hill');
var alki = new Store(7, 30, 70, 'Alki');
// pike.render();

renderAllStores();
console.log(allStores);



// inside the render function this === pike
//========================================
// global functions

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//========================================
// Global variables for DOM access and such
var salesForm = document.getElementById('userInput');
var allInputs = [];

// add event listener to salesForm
salesForm.addEventListener('submit',handleData);

// This function is the event handler for the submission of comments
function handleData(event) {
    console.log(event.target.store.value);
var store = event.target.store.value;
var numberMin = event.target.numberMin.value;
var numberMax = event.target.numberMax.value;
var numberAvg = event.target.numberAvg.value;


    event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event
    // Validation to prevent empty form fields
  if (!store || !numberMin|| !numberMax || !numberAvg) {
    return alert('Fields cannot be empty!');
  }

  
  // This empties the form fields after the data has been grabbed
//   event.target.who.value = null;
//   event.target.says.value = null;

  new Store(numberAvg,numberMin,numberMax,store);

 document.getElementById("store-storer").innerHTML= '';
//   console.log('You just cleared the chat list!');
    
  renderAllStores();
//   console.log(allStores);
  }
  



