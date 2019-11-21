
var category = '';
var apiKey = '9973533';

var randomMealsURL = 'https://www.themealdb.com/api/json/v2/' + apiKey + '/random.php';
var categoryMealURL = 'https://www.themealdb.com/api/json/v2/' + apiKey + '/filter.php?c=' + category;


var alcoholType = '';
var randomDrinksURL = 'https://www.thecocktaildb.com/api/json/v2/' + apiKey + '/random.php';
var alcoholTypeURL = 'https://www.thecocktaildb.com/api/json/v2/' + apiKey + '/search.php?i=' + alcoholType;

function searchDrinkName() {
    event.preventDefault()

    var drinkName = document.getElementById('userInput').value;
    var drinkNameURL = 'https://www.thecocktaildb.com/api/json/v2/' + apiKey + '/search.php?s=' + drinkName;

    $('#mainContent').empty();

    $.ajax({
        url: drinkNameURL,
        method: 'GET'
    }).then(function (response) {
        
        var mainContent = $('#mainContent');
        var displayInfo = $("<p id='drinkName'>").text(JSON.stringify(response.drinks));
        
        for (i = 0; i < response.drinks.length; i++){
            var allDrinks = $("<p id='allDrinks'>").text(JSON.stringify(response.drinks[i].strIngredient1));
            console.log(response.drinks[i])
            mainContent.append(allDrinks)
        }
        
        // mainContent.append(displayInfo);
        
       
        console.log(response.drinks[i])
        
    })
    console.log(drinkName)
        
}

function randomRecomendation() {
    event.preventDefault();

    $('#mainContent').empty();

    $.ajax({
        url: randomDrinksURL,
        method: 'GET'
    }).then(function (response) {
        var mainContent = $('#mainContent');
        var displayInfo = $("<p id='test'>").text(JSON.stringify(response));
        mainContent.append(displayInfo);
    })


    $.ajax({
        url: randomMealsURL,
        method: 'GET'
    }).then(function (response) {
        var mainContent = $('#mainContent');
        var displayInfo = $("<p id='test'>").text(JSON.stringify(response));
        mainContent.append(displayInfo);
    });
}

function searchMealName() {
    event.preventDefault();

    var mealSpaceName = document.getElementById('userInput').value;
    var mealName = mealSpaceName.replace(/ /g, '_');
    var mealNameURL = 'https://www.themealdb.com/api/json/v2/' + apiKey + '/search.php?s=' + mealName;

    $('#mainContent').empty();

    $.ajax({
        url: mealNameURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response.meals[0]);
        var mainContent = $('#mainContent');
        var displayInfo = $("<p id='test'>").text(JSON.stringify(response.meals[0], null, 2));
        mainContent.append(displayInfo);
    })
    console.log(mealName);
}

$(document).ready(function(){
   
    event.preventDefault();
  $(".button-collapse").sideNav();
  });

$('#randomButton').on('click', randomRecomendation)
$('#searchButton').on('click', function(){
    var optionValue = document.getElementById('dropDownBar').value;
    if(optionValue === '1') {
        searchMealName();
    }else if(optionValue === '2'){
        searchDrinkName();
    }
})