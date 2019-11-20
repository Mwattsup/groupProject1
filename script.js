
var category = '';
var apiKey = '9973533';

var randomMealsURL = 'https://www.themealdb.com/api/json/v2/' + apiKey + '/randomselection.php';
var categoryMealURL = 'https://www.themealdb.com/api/json/v2/' + apiKey + '/filter.php?c=' + category;


var alcoholType = '';
var randomDrinksURL = 'https://www.thecocktaildb.com/api/json/v2/' + apiKey + '/randomselection.php';
var alcoholTypeURL = 'https://www.thecocktaildb.com/api/json/v2/' + apiKey + '/search.php?i=' + alcoholType;

function searchDrinkName() {
    event.preventDefault()

    var drinkName = document.getElementById('userInput').value;
    var drinkNameURL = 'https://www.thecocktaildb.com/api/json/v2/' + apiKey + '/search.php?s=' + drinkName;

    $('#divId').empty();

    $.ajax({
        url: drinkNameURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response.drinks);
        var divName = $('#divId');
        var displayInfo = $("<h1 id='test'>").text(JSON.stringify(response.drinks));
        divName.append(displayInfo);
    })
    console.log(document.getElementById('userInput').value);
}

function randomDrinks() {
    event.preventDefault();

    $('#divId').empty();

    $.ajax({
        url: randomDrinksURL,
        method: 'GET'
    }).then(function (response) {
        var divName = $('#divId');
        var displayInfo = $("<h2 id='test'>").text(JSON.stringify(response));
        divName.append(displayInfo);
    })
}

function searchMealName() {
    event.preventDefault();

    var mealSpaceName = document.getElementById('mealSearch').value
    var mealName = mealSpaceName.replace(/ /g, '_');
    var mealNameURL = 'https://www.themealdb.com/api/json/v2/' + apiKey + '/search.php?s=' + mealName;

    $('#divId').empty();

    $.ajax({
        url: mealNameURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response.meals[0]);
        var divName = $('#divId');
        var displayInfo = $("<h3 id='test'>").text(JSON.stringify(response.meals[0], null, 2));
        divName.append(displayInfo);
    })
    console.log(mealName);
}

function randomMeals() {
    event.preventDefault();

    $('#divId').empty();

    $.ajax({
        url: randomMealsURL,
        method: 'GET'
    }).then(function (response) {
        var divName = $('#divId');
        var displayInfo = $("<h4 id='test'>").text(JSON.stringify(response));
        divName.append(displayInfo);
    });
}
$(document).ready(function(){
   
    event.preventDefault();
  $(".button-collapse").sideNav();
  });


$('#searchButton').on('click', searchDrinkName);
$('#mealBtn').on('click', searchMealName);
$('#rndmDrinkBtn').on('click', randomDrinks);
$('#rndmMealBtn').on('click', randomMeals);